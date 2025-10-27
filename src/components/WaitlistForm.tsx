'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="w-full bg-background py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-headings font-bold text-text-primary sm:text-5xl">
              Welcome to the Family!
            </h2>
            <p className="mt-6 text-lg font-body text-text-primary">
              Thank you for joining our waitlist. You'll be the first to know when we launch, 
              and you'll receive a 10% discount on your first order.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="w-full bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-headings font-bold text-text-primary sm:text-5xl">
            Be the First to Know
          </h2>
          <p className="mt-6 text-lg font-body text-text-primary">
            Join our exclusive waitlist for a 10% discount on your first order and early access to our launch collection.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <div className="flex-1 max-w-md mx-auto sm:mx-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-md border border-border-gray bg-background px-4 py-3 text-base font-body text-text-primary placeholder-gray-500 focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-accent-gold px-8 py-3 text-base font-body font-medium text-white transition-colors hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
            {error && (
              <p className="mt-4 text-sm font-body text-red-600">{error}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
