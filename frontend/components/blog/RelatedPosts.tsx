'use client';

import { BlogPost } from '@/lib/blogData';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="group bg-white rounded-xl shadow-lg border border-steel-light/20 overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <div className="aspect-video relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3">
              <span className="inline-block bg-industrial-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 text-xs text-steel-grey mb-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readingTime} min</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-navy-dark mb-2 group-hover:text-industrial-orange transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-steel-grey mb-3 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center gap-2 text-electric-blue text-sm font-semibold group-hover:text-industrial-orange transition-colors duration-300">
              Read More <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
