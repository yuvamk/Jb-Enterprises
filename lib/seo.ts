import { Organization, Product, Article, BreadcrumbList, WithContext } from 'schema-dts';
import { ProductDetail } from './productData';
import { BlogPost } from './blogData';

// Organization Schema (for homepage)
export function getOrganizationSchema(): WithContext<Organization> {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'JB Enterprise',
        description: 'Leading provider of power plant components and services',
        url: 'https://jbenterprise.com',
        logo: 'https://jbenterprise.com/logo.png',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-XXX-XXX-XXXX',
            contactType: 'Customer Service',
            areaServed: 'IN',
            availableLanguage: 'English',
        },
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
        },
        sameAs: [
            'https://www.linkedin.com/company/jb-enterprise',
            'https://twitter.com/jbenterprise',
        ],
    };
}

// Product Schema
export function getProductSchema(product: ProductDetail): WithContext<Product> {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image,
        brand: {
            '@type': 'Brand',
            name: 'JB Enterprise',
        },
        offers: {
            '@type': 'Offer',
            availability: product.inStock
                ? 'https://schema.org/InStock'
                : 'https://schema.org/PreOrder',
            priceCurrency: 'INR',
            seller: {
                '@type': 'Organization',
                name: 'JB Enterprise',
            },
        },
        category: product.category,
    };
}

// Article Schema (for blog posts)
export function getArticleSchema(post: BlogPost): WithContext<Article> {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            '@type': 'Person',
            name: post.author.name,
            jobTitle: post.author.title,
        },
        publisher: {
            '@type': 'Organization',
            name: 'JB Enterprise',
            logo: {
                '@type': 'ImageObject',
                url: 'https://jbenterprise.com/logo.png',
            },
        },
        articleSection: post.category,
        keywords: post.tags.join(', '),
    };
}

// Breadcrumb Schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]): WithContext<BreadcrumbList> {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
