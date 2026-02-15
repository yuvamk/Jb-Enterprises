import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from '@/lib/blogData';
import BlogPost from '@/components/blog/BlogPost';
import StructuredData from '@/components/seo/StructuredData';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/seo';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - JB Enterprise',
    };
  }

  return {
    title: `${post.title} - JB Enterprise Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);

  // Generate structured data
  const articleSchema = getArticleSchema(post);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://jbenterprise.com' },
    { name: 'Blog', url: 'https://jbenterprise.com/blog' },
    { name: post.title, url: `https://jbenterprise.com/blog/${post.slug}` },
  ]);

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      <BlogPost post={post} relatedPosts={relatedPosts} />
    </>
  );
}
