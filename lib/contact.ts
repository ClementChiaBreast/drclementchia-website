export const enquiryCategories = [
  "Patient education enquiry",
  "Academic collaboration",
  "Industry / medtech collaboration",
  "Speaking or media invitation",
  "Research / publication enquiry",
  "General enquiry",
] as const;

export type EnquiryCategory = (typeof enquiryCategories)[number];

export type ContactPayload = {
  name: string;
  email: string;
  category: EnquiryCategory;
  message: string;
  contactFax?: string;
  acknowledgement: boolean;
};
