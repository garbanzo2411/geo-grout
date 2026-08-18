import { redirect } from "next/navigation";

// The contact form now lives on the homepage so both
// nav CTAs can scroll straight to it. This route stays in place in case 
// anything still links to contact directly, and just fowards to anchor.

export default function ContactPage() {
    redirect("/#contact")
}