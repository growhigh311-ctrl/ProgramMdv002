import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mahadevreal.site";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/"],
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
