
// EmailJS Configuration
// You'll need to replace these with your actual EmailJS credentials
export const EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
};

// Template parameters structure for reference
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
}
