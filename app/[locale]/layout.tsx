import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { generateMetadataObject } from "@/lib/shared/metadata";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const pageData = await fetchContentType(
    "global",
    `&filters[locale][$eq]=${params.locale}&populate=seo.metaImage`,
    true
  );

  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const pageData = await fetchContentType(
    "global",
    `filters[locale][$eq]=${locale}`,
    true
  );

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar data={pageData.navbar} locale={locale} />
        {children}
        <Footer data={pageData.footer} locale={locale} />
      </body>
    </html>
  );
}
