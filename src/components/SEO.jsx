import React from 'react';
import { Helmet } from 'react-helmet-async';
import { personalInfo, siteConfig, seoConfig } from '../data/portfolioData';

const SEO = ({ 
  title,
  description,
  keywords,
  image,
  url,
  type = "website"
}) => {
  // Use default values from your portfolioData if not provided
  const seoTitle = title || siteConfig.title;
  const seoDescription = description || siteConfig.description;
  const seoKeywords = keywords || siteConfig.keywords.join(', ');
  const seoImage = image || `${siteConfig.siteUrl}/og-image.png`;
  const seoUrl = url || siteConfig.siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={personalInfo.name} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content={personalInfo.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      {seoConfig.twitter.handle && (
        <meta name="twitter:creator" content={seoConfig.twitter.handle} />
      )}

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": personalInfo.name,
          "jobTitle": personalInfo.title,
          "description": seoDescription,
          "url": seoUrl,
          "image": seoImage,
          "email": personalInfo.email,
          "sameAs": [
            personalInfo.social.github,
            personalInfo.social.linkedin,
            personalInfo.social.twitter
          ].filter(Boolean),
          "alumniOf": "University Name", // Add your education
          "knowsAbout": siteConfig.keywords,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jaffna",
            "addressCountry": "Sri Lanka"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;