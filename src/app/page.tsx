import Hero from "@/components/sections/Hero";
import OwnerBioTeaser from "@/components/sections/OwnerBioTeaser";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ContactForm from "@/components/sections/ContactForm";
import Testimonials from "@/components/sections/Testimonials"

export default function Home() {
    return (
        <main>
            <Hero />
            <OwnerBioTeaser />
            <ServicesGrid />
            <Testimonials />
            <ContactForm />
        </main>
    );
}