import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "Clement Chia | Breast Conservation Surgeon-Innovator", template: "%s | Clement Chia" },
  description: "Breast conservation through surgery, education and innovation: oncoplastic breast surgery, partial breast reconstruction, shared decision-making and translational research.",
  keywords: ["breast conservation", "oncoplastic breast surgery", "partial breast reconstruction", "breast cancer surgery", "margin assessment", "patient-reported outcomes", "surgical innovation", "patient education", "media articles", "Singapore"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main className="route-enter">{children}</main><SiteFooter /></body></html>;
}
