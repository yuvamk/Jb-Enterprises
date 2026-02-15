import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://jbenterprise.com'; // Replace with actual domain

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/'], // Disallow API routes and future admin panel
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
