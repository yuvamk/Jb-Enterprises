'use client';

import { BlogPost as BlogPostType } from '@/lib/blogData';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { Calendar, User, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';
import Link from 'next/link';
import AuthorBio from './AuthorBio';
import RelatedPosts from './RelatedPosts';
import ShareButtons from './ShareButtons';

interface BlogPostProps {
  post: BlogPostType;
  relatedPosts: BlogPostType[];
}

export default function BlogPost({ post, relatedPosts }: BlogPostProps) {
  return (
    <main className="min-h-screen pt-20">
      {/* Back button */}
      <section className="bg-white py-6 border-b border-steel-light/20">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-electric-blue hover:text-industrial-orange transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark text-white py-16">
        <div className="container-custom max-w-4xl">
          <RevealOnScroll variant="fade">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-industrial-orange text-white text-sm px-4 py-2 rounded-full">
                {post.category}
              </span>
              {post.featured && (
                <span className="inline-block bg-electric-blue text-white text-sm px-4 py-2 rounded-full">
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 text-off-white/90 flex-wrap">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main content */}
            <div>
              <RevealOnScroll variant="slideUp">
                {/* Article content */}
                <article className="prose prose-lg max-w-none">
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{
                      __html: post.content
                        .split('\n')
                        .map((line) => {
                          // Convert markdown headers
                          if (line.startsWith('# ')) {
                            return `<h1 class="text-4xl font-bold text-navy-dark mt-8 mb-4">${line.slice(2)}</h1>`;
                          }
                          if (line.startsWith('## ')) {
                            return `<h2 class="text-3xl font-bold text-navy-dark mt-8 mb-4">${line.slice(3)}</h2>`;
                          }
                          if (line.startsWith('### ')) {
                            return `<h3 class="text-2xl font-bold text-navy-dark mt-6 mb-3">${line.slice(4)}</h3>`;
                          }
                          // Convert bold text
                          line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-navy-dark">$1</strong>');
                          // Convert bullet points
                          if (line.startsWith('- ')) {
                            return `<li class="text-steel-grey mb-2">${line.slice(2)}</li>`;
                          }
                          // Regular paragraphs
                          if (line.trim()) {
                            return `<p class="text-steel-grey leading-relaxed mb-4">${line}</p>`;
                          }
                          return '';
                        })
                        .join(''),
                    }}
                  />
                </article>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-steel-light/30">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Tag className="w-5 h-5 text-steel-grey" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-off-white text-steel-grey px-4 py-2 rounded-full text-sm hover:bg-industrial-orange hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author bio */}
                <div className="mt-12">
                  <AuthorBio author={post.author} />
                </div>
              </RevealOnScroll>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 h-fit">
              <RevealOnScroll variant="slideLeft">
                {/* Share buttons */}
                <div className="bg-off-white rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-navy-dark mb-4 flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-industrial-orange" />
                    Share Article
                  </h3>
                  <ShareButtons title={post.title} />
                </div>

                {/* Table of contents (simplified) */}
                <div className="bg-white rounded-xl shadow-lg border border-steel-light/20 p-6">
                  <h3 className="font-bold text-navy-dark mb-4">Quick Info</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-steel-grey mb-1">Category</div>
                      <div className="font-semibold text-electric-blue">{post.category}</div>
                    </div>
                    <div>
                      <div className="text-steel-grey mb-1">Reading Time</div>
                      <div className="font-semibold text-navy-dark">{post.readingTime} minutes</div>
                    </div>
                    <div>
                      <div className="text-steel-grey mb-1">Published</div>
                      <div className="font-semibold text-navy-dark">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-off-white">
          <div className="container-custom max-w-6xl">
            <RevealOnScroll variant="fade">
              <h2 className="text-4xl font-bold text-navy-dark mb-8 text-center">Related Articles</h2>
            </RevealOnScroll>
            <RelatedPosts posts={relatedPosts} />
          </div>
        </section>
      )}
    </main>
  );
}
