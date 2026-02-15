'use client';

import { Organization, Product, Article, BreadcrumbList, WithContext } from 'schema-dts';

interface StructuredDataProps {
  data: WithContext<Organization | Product | Article | BreadcrumbList>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
