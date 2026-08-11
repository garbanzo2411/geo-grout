export default function OwnerBioTeaser() {
    return (
        <section className = "bg-paper-2 py-24 md:py-28">
            <div className = "max-w-295 mx-auto px-6 md:px-8">
                <div className = "grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-20 items-start">
                    {/* Left Photo Pair */}
                <div>
                    <div className = "grid grid-cols-2 gap-3">
                        <div className = "aspect-3/4 border border-charcoal relative mt-8 bg-[repeating-linear-gradient(45deg, #ddd6c4_0px, #ddd6c4_2px, #d3cbb5_2px, #d3cbb5_4px)]">
                        { /* Replace this div with a next/image of the owner once a good portrait is available. */ }
                        </div>
                        <div className = "aspect-3/4 border border-charcoal relative bg-[repeating-linear-gradient(45deg, #ddd6c4_0px, #ddd6c4_2px, #d3cbb5_2px, #d3cbb5_4px)]">
                        { /* Replace this div with a next/image of the owner once a good portrait is available. */ }
                        </div>
                    </div>
                    <span className = "inline-block mt-4 font-mono text-[11px] tracking-widest uppercase bg-charcoal text-white px-4 py-2">
                        Owner / CEO
                    </span>
                </div>

                {/* Right Bio */}
                <div className = "flex flex-col gap-14">
                    <div>
                        <span className = "spec-tag text-red mb-5">About Us</span>
                        <h2 className = "font-display text-3xl md:text-[2.6em] leading-[1.05] mb-5">
                            Four Decades of Expertise
                        </h2>
                        <p className = "text-steel-dim text-[15px] leading-relaxed max-w-md">
                            Geo Grout Ground Modification Specialists, Inc. is a geotechnical
                            contractor specializing in a wide range of grouting technique solving
                            soil and structural problems. We perform our grouting projects throughout
                            the Western United States.
                        </p>
                    </div>

                    <div className = "grout-line" />

                    <div>
                        <span className = "spec-tag text-orange mb-5">What We Do</span>
                        <h3 className = "font-heading uppercase tracking-wide text-xl mb-4">
                            Geotechnical &amp; grout contracting, done right.
                        </h3>
                        <p className = "text-steel-dim text-[15px] leading-relaxed max-w-md">
                            At Geo Grout Ground Modification Specialists, Inc.,
                            we've built our reputation on repeat business with our clients. From residential to commercial,
                            no job is too small or too big for our experinced crews. Our management team has over 4 decades 
                            combined working experince. <br /> Understanding and know-how are prerequisites for achieving 
                            successful and cost-effective results. These qualities are uniquely available from Geo Grout Ground Modification Specialists, Inc.
                            our capabilities and expertise in these fields are ready to serve you with quality and professional services at a reasonable cost.
                        </p>
                        <a
                            href = "/about"
                            className = "inline-block mt-6 font-heading text-[13px] tracking-[0.08em] uppercase text-red hover:text-orange transition-colors"
                        >
                            Meet the Owner →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}