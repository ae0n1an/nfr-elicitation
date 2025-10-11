import { Navbar } from "./_components/layout/navbar";
import { BenefitsSection } from "./_components/layout/sections/benefits";
import { CommunitySection } from "./_components/layout/sections/community";
import { ContactSection } from "./_components/layout/sections/contact";
import { FAQSection } from "./_components/layout/sections/faq";
import { FeaturesSection } from "./_components/layout/sections/features";
import { FooterSection } from "./_components/layout/sections/footer";
import { HeroSection } from "./_components/layout/sections/hero";
import { PricingSection } from "./_components/layout/sections/pricing";
import { ServicesSection } from "./_components/layout/sections/services";
import { SponsorsSection } from "./_components/layout/sections/sponsors";
import { TeamSection } from "./_components/layout/sections/team";
import { TestimonialSection } from "./_components/layout/sections/testimonial";

export const metadata = {
  title: "Shadcn - Landing template",
  description: "Free Shadcn landing page for developers",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
