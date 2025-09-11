import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd integrate with an email service like Mailchimp
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-green-800 mb-2">Welcome aboard!</h3>
        <p className="text-green-700">
          Check your email for our crypto starter guide and weekly updates.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white mb-8">
      <Mail className="h-8 w-8 mb-4" />
      <h3 className="text-xl font-bold mb-2">Free Crypto Newsletter</h3>
      <p className="text-blue-100 mb-4">
        Get weekly crypto insights, latest guides, and exclusive tool recommendations delivered to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
        >
          Subscribe Free
        </button>
      </form>
      
      <p className="text-xs text-blue-200 mt-3">
        No spam. Unsubscribe anytime. We respect your privacy.
      </p>
    </div>
  );
};

export default NewsletterSignup;