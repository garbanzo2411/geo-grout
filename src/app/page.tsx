import Hero from "@/components/sections/Hero";
import OwnerBioTeaser from "@/components/sections/OwnerBioTeaser";
import ServicesGrid from "@/components/sections/ServicesGrid";

export default function Home() {
    return (
        <main>
            <Hero />
            <OwnerBioTeaser />
            <ServicesGrid />
        </main>
    );
}