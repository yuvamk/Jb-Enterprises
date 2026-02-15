'use client';

import { Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  return (
    <div className="flex flex-col gap-3">
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-[#1877F2] hover:text-white transition-all duration-300 group border border-steel-light/30"
      >
        <Facebook className="w-5 h-5" />
        <span className="font-semibold">Facebook</span>
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 group border border-steel-light/30"
      >
        <Twitter className="w-5 h-5" />
        <span className="font-semibold">Twitter</span>
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-[#0A66C2] hover:text-white transition-all duration-300 group border border-steel-light/30"
      >
        <Linkedin className="w-5 h-5" />
        <span className="font-semibold">LinkedIn</span>
      </a>
      <button
        onClick={handleCopyLink}
        className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-industrial-orange hover:text-white transition-all duration-300 group border border-steel-light/30"
      >
        <LinkIcon className="w-5 h-5" />
        <span className="font-semibold">{copied ? 'Link Copied!' : 'Copy Link'}</span>
      </button>
    </div>
  );
}
