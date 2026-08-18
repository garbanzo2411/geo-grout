import Hero from "@/components/sections/Hero";
import OwnerBioTeaser from "@/components/sections/OwnerBioTeaser";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
    return (
        <main>
            <Hero />
            <OwnerBioTeaser />
            <ServicesGrid />
            <ContactForm />
        </main>
    );
}