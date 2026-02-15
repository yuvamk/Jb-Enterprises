'use client';

import { User } from 'lucide-react';

interface Author {
  name: string;
  title: string;
  avatar: string;
}

interface AuthorBioProps {
  author: Author;
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="bg-gradient-to-br from-off-white to-white rounded-xl p-6 border border-steel-light/20">
      <h3 className="font-bold text-navy-dark mb-4">About the Author</h3>
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-industrial-orange to-warm-amber rounded-full flex items-center justify-center text-white flex-shrink-0">
          <User className="w-8 h-8" />
        </div>
        <div>
          <div className="font-bold text-lg text-navy-dark">{author.name}</div>
          <div className="text-steel-grey mb-2">{author.title}</div>
          <p className="text-sm text-steel-grey leading-relaxed">
            Expert in power plant solutions with years of industry experience at JB Enterprise.
          </p>
        </div>
      </div>
    </div>
  );
}
