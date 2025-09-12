// News Service for fetching RSS feeds from legitimate crypto sources
// Compliant with publisher terms - headlines/snippets only, proper attribution

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  publishedAt: string;
  source: string;
  category: 'bitcoin' | 'ethereum' | 'defi' | 'regulation' | 'market' | 'general';
  imageUrl?: string;
}

export interface NewsSource {
  name: string;
  rssUrl: string;
  category: string;
  attribution: string;
  maxExcerptLength: number;
}

// Legitimate crypto news sources with public RSS feeds
const NEWS_SOURCES: NewsSource[] = [
  {
    name: 'CoinDesk',
    rssUrl: 'https://www.coindesk.com/arc/outboundfeeds/rss/',
    category: 'general',
    attribution: 'Via CoinDesk',
    maxExcerptLength: 80
  },
  {
    name: 'Cointelegraph',
    rssUrl: 'https://cointelegraph.com/rss',
    category: 'general', 
    attribution: 'Via Cointelegraph',
    maxExcerptLength: 80
  },
  {
    name: 'Decrypt',
    rssUrl: 'https://decrypt.co/feed',
    category: 'general',
    attribution: 'Via Decrypt',
    maxExcerptLength: 80
  },
  {
    name: 'Bitcoin Magazine',
    rssUrl: 'https://bitcoinmagazine.com/.rss/full/',
    category: 'bitcoin',
    attribution: 'Via Bitcoin Magazine',
    maxExcerptLength: 60 // More restrictive per their terms
  },
  {
    name: 'The Block',
    rssUrl: 'https://www.theblock.co/rss.xml',
    category: 'general',
    attribution: 'Via The Block',
    maxExcerptLength: 80
  }
];

// CORS proxy for RSS feeds (in production, use your own backend)
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

class NewsService {
  private cache: Map<string, { data: NewsItem[], timestamp: number }> = new Map();
  private readonly CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

  async fetchRSSFeed(source: NewsSource): Promise<NewsItem[]> {
    try {
      const cacheKey = source.name;
      const cached = this.cache.get(cacheKey);
      
      // Return cached data if still fresh
      if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
        return cached.data;
      }

      const response = await fetch(`${CORS_PROXY}${encodeURIComponent(source.rssUrl)}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      
      const items = xmlDoc.querySelectorAll('item');
      const newsItems: NewsItem[] = [];

      items.forEach((item, index) => {
        if (index >= 10) return; // Limit to 10 items per source

        const title = item.querySelector('title')?.textContent?.trim() || '';
        const link = item.querySelector('link')?.textContent?.trim() || '';
        const description = item.querySelector('description')?.textContent?.trim() || '';
        const pubDate = item.querySelector('pubDate')?.textContent?.trim() || '';

        if (title && link) {
          // Clean and truncate excerpt
          const cleanDescription = this.cleanHtml(description);
          const excerpt = this.truncateText(cleanDescription, source.maxExcerptLength);

          newsItems.push({
            id: `${source.name}-${index}-${Date.now()}`,
            title: this.truncateText(title, 120), // Reasonable title length
            excerpt,
            url: link,
            publishedAt: this.formatDate(pubDate),
            source: source.attribution,
            category: this.categorizeNews(title, description) as any
          });
        }
      });

      // Cache the results
      this.cache.set(cacheKey, { data: newsItems, timestamp: Date.now() });
      return newsItems;

    } catch (error) {
      console.error(`Error fetching RSS from ${source.name}:`, error);
      return [];
    }
  }

  async fetchAllNews(limit: number = 20): Promise<NewsItem[]> {
    try {
      const allPromises = NEWS_SOURCES.map(source => this.fetchRSSFeed(source));
      const results = await Promise.allSettled(allPromises);
      
      const allNews: NewsItem[] = [];
      results.forEach(result => {
        if (result.status === 'fulfilled') {
          allNews.push(...result.value);
        }
      });

      // Sort by publication date (newest first) and limit results
      return allNews
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, limit);

    } catch (error) {
      console.error('Error fetching news:', error);
      return this.getFallbackNews();
    }
  }

  async fetchNewsByCategory(category: string, limit: number = 10): Promise<NewsItem[]> {
    const allNews = await this.fetchAllNews(50);
    return allNews
      .filter(item => item.category === category || category === 'general')
      .slice(0, limit);
  }

  private cleanHtml(html: string): string {
    // Remove HTML tags and decode entities
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }

  private truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  }

  private formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffHours / 24);

      if (diffHours < 1) return 'Just now';
      if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
      if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
      
      return date.toLocaleDateString();
    } catch {
      return 'Recently';
    }
  }

  private categorizeNews(title: string, description: string): string {
    const text = (title + ' ' + description).toLowerCase();
    
    if (text.includes('bitcoin') || text.includes('btc')) return 'bitcoin';
    if (text.includes('ethereum') || text.includes('eth')) return 'ethereum';
    if (text.includes('defi') || text.includes('decentralized finance')) return 'defi';
    if (text.includes('regulation') || text.includes('sec') || text.includes('regulatory')) return 'regulation';
    if (text.includes('price') || text.includes('market') || text.includes('trading')) return 'market';
    
    return 'general';
  }

  private getFallbackNews(): NewsItem[] {
    // Fallback news in case all RSS feeds fail
    return [
      {
        id: 'fallback-1',
        title: 'Crypto News Currently Unavailable',
        excerpt: 'We are experiencing temporary issues loading the latest crypto news. Please check back shortly.',
        url: '#',
        publishedAt: 'Now',
        source: 'CryptoStarterGuide',
        category: 'general'
      }
    ];
  }
}

export const newsService = new NewsService();

