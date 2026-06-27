import { ContactForm } from "@/components/contact-form";
import { Orbit } from "@/components/icons";

export const metadata = { title: "Contact | Breast Conservation Collaboration" };

export default function Contact() {
  return <section className="page-shell grid min-h-[720px] border-x hairline lg:grid-cols-[1fr_.8fr]">
    <div className="flex flex-col justify-between p-6 py-14 sm:p-12 lg:py-20"><div><p className="eyebrow text-[var(--coral)]">Breast conservation · Collaboration</p><h1 className="display mt-14">One mission.<br/><i className="font-normal text-[var(--coral)]">Many partners.</i></h1></div><div className="mt-16 max-w-xl space-y-5 text-base leading-8"><p>For patient education, academic research, A*STAR or industry collaboration, clinical test-bedding, teaching and conference invitations related to breast conservation, breast surgery and healthcare innovation.</p><p className="muted border-l-2 border-[var(--coral)] pl-4 text-[15px] leading-7">This form is not for urgent medical concerns, confidential clinical information, appointment requests or personal medical advice. Patients should contact their treating healthcare team or the appropriate healthcare institution.</p></div></div>
    <div className="relative overflow-hidden border-t hairline bg-[var(--paper)] p-6 sm:p-12 lg:border-l lg:border-t-0"><div className="pointer-events-none absolute inset-x-0 top-6 flex justify-center"><Orbit className="block w-32 text-[var(--ink)] opacity-15"/></div><div className="relative mt-16 grid gap-4 sm:grid-cols-3">{["For patients","For academics","For industry"].map((label)=><div key={label} className="border hairline bg-white/40 p-4"><span className="eyebrow text-[var(--coral)]">{label}</span></div>)}</div><ContactForm /></div>
  </section>;
}
