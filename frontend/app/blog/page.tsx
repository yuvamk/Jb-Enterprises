'use client';

import { useState } from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import BlogCategoryFilter from '@/components/blog/BlogCategoryFilter';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blogData';
import Link from 'next/link';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  // Get unique categories with counts
  const categoryCounts = BLOG_POSTS.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    count,
  }));

  // Filter blog posts based on selected category
  const filteredPosts = selectedCategory
    ? BLOG_POSTS.filter(post => post.category === selectedCategory)
    : BLOG_POSTS;

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterLoading(true);
    setNewsletterError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail, source: 'blog' }),
      });

      const data = await response.json();

      if (response.ok) {
        setNewsletterSuccess(true);
        setNewsletterEmail('');
        setTimeout(() => setNewsletterSuccess(false), 5000);
      } else {
        setNewsletterError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setNewsletterError('Failed to subscribe. Please try again later.');
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark text-white py-20">
        <div className="container-custom">
          <RevealOnScroll variant="fade">
            <h1 className="text-6xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-2xl text-off-white/90 max-w-3xl hero-tagline">
              Industry Knowledge. Expert Perspectives.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-off-white">
        <div className="container-custom">
          <BlogCategoryFilter
            categories={categories}
            onFilterChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <RevealOnScroll key={post.id} variant="slideUp" delay={index * 0.1}>
                  <article className="bg-white rounded-xl shadow-lg border border-steel-light/20 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="inline-block bg-industrial-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {post.category}
                        </span>
                        {post.featured && (
                          <span className="inline-block bg-electric-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-steel-grey mb-3 flex-wrap">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readingTime} min read</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-industrial-orange transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-steel-grey mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs bg-off-white text-steel-grey px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-2 text-electric-blue font-semibold hover:text-industrial-orange transition-colors duration-300"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-steel-grey">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark text-white">
        <div className="container-custom text-center">
          <RevealOnScroll variant="fade">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-off-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest industry insights and company updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4 mb-4">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={newsletterLoading}
                  className="flex-1 px-4 py-3 rounded-lg text-navy-dark focus:outline-none focus:ring-2 focus:ring-industrial-orange disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={newsletterLoading}
                  className="bg-gradient-to-r from-industrial-orange to-warm-amber text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 whitespace-nowrap disabled:opacity-50 disabled:hover:scale-100"
                >
                  {newsletterLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {newsletterSuccess && (
                <div className="p-3 bg-green-500/20 border border-green-500 rounded-lg text-sm">
                  Thank you for subscribing! Check your email for confirmation.
                </div>
              )}
              {newsletterError && (
                <div className="p-3 bg-red-500/20 border border-red-500 rounded-lg text-sm">
                  {newsletterError}
                </div>
              )}
            </form>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
