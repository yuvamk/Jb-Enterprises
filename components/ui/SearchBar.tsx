'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blogData';
import { PRODUCT_DETAILS } from '@/lib/productData';
import Link from 'next/link';

interface SearchResult {
  type: 'blog' | 'product';
  title: string;
  description: string;
  url: string;
  category?: string;
}

interface SearchBarProps {
  dark?: boolean;
}

export default function SearchBar({ dark = false }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  // Search function
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Search blog posts
    BLOG_POSTS.forEach((post) => {
      if (
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
      ) {
        searchResults.push({
          type: 'blog',
          title: post.title,
          description: post.excerpt,
          url: `/blog/${post.slug}`,
          category: post.category,
        });
      }
    });

    // Search products
    PRODUCT_DETAILS.forEach((product) => {
      if (
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
      ) {
        searchResults.push({
          type: 'product',
          title: product.name,
          description: product.description,
          url: `/products/${product.slug}`,
          category: product.category,
        });
      }
    });

    setResults(searchResults.slice(0, 8)); // Limit to 8 results
  }, []);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, performSearch]);

  // Keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center gap-2 px-4 py-2 transition-colors duration-300 ${
          dark ? 'text-white/80 hover:text-white' : 'text-steel-grey hover:text-navy-dark'
        }`}
        aria-label="Open search"
      >
        <Search className="w-5 h-5" />
        <span className="hidden md:inline text-sm">Search</span>
        <kbd className={`hidden md:inline px-2 py-1 text-xs border rounded ${
          dark ? 'bg-white/10 border-white/20 text-white/60' : 'bg-off-white border-steel-light text-steel-grey'
        }`}>
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={handleClose}
      />

      {/* Search Modal */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4">
        <div className="bg-white rounded-xl shadow-2xl border border-steel-light overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center gap-3 p-4 border-b border-steel-light">
            <Search className="w-5 h-5 text-steel-grey flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, blog posts..."
              className="flex-1 outline-none text-navy-dark placeholder:text-steel-grey"
              autoFocus
            />
            <button
              onClick={handleClose}
              className="p-1 hover:bg-off-white rounded transition-colors duration-200"
              aria-label="Close search"
            >
              <X className="w-5 h-5 text-steel-grey" />
            </button>
          </div>

          {/* Search Results */}
          {query && (
            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="py-2">
                  {results.map((result, index) => (
                    <Link
                      key={index}
                      href={result.url}
                      onClick={handleClose}
                      className="block px-4 py-3 hover:bg-off-white transition-colors duration-200 group"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`px-2 py-1 rounded text-xs font-semibold flex-shrink-0 ${
                            result.type === 'blog'
                              ? 'bg-electric-blue/10 text-electric-blue'
                              : 'bg-industrial-orange/10 text-industrial-orange'
                          }`}
                        >
                          {result.type === 'blog' ? 'Blog' : 'Product'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-navy-dark group-hover:text-industrial-orange transition-colors duration-200 truncate">
                            {result.title}
                          </h3>
                          <p className="text-sm text-steel-grey line-clamp-2 mt-1">
                            {result.description}
                          </p>
                          {result.category && (
                            <span className="text-xs text-steel-grey mt-1 inline-block">
                              {result.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-8 text-center text-steel-grey">
                  <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>No results found for "{query}"</p>
                  <p className="text-sm mt-1">Try different keywords</p>
                </div>
              )}
            </div>
          )}

          {/* Quick Tips */}
          {!query && (
            <div className="px-4 py-6 text-sm text-steel-grey">
              <p className="mb-2 font-semibold text-navy-dark">Quick Tips:</p>
              <ul className="space-y-1">
                <li>• Search for products, blog posts, or topics</li>
                <li>• Use keywords like "stator", "turbine", or "maintenance"</li>
                <li>• Press ESC to close</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
