'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blogData';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Button from '@/components/ui/Button';

export default function BlogSection() {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <RevealOnScroll variant="slideUp" className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
              Latest from Industrial Insights
            </h2>
            <p className="text-lg text-steel-grey">
              Explore our technical guides, case studies, and the latest trends 
              in power plant modernization.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll variant="fade" delay={0.2}>
            <Link href="/blog">
              <Button variant="outline" icon={<ArrowRight size={20} />}>
                View All Posts
              </Button>
            </Link>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <RevealOnScroll 
              key={post.id} 
              variant="scale" 
              delay={index * 0.1}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="flex flex-col h-full bg-off-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-steel-light/10">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-industrial-orange text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 p-8 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-steel-grey mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-industrial-orange" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User size={14} className="text-industrial-orange" />
                        {post.author.name}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-navy-dark mb-4 group-hover:text-industrial-orange transition-colors duration-300 leading-tight line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-steel-grey text-sm mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center text-industrial-orange font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all duration-300">
                      Read More <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </article>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
