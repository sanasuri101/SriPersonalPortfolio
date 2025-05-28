
// EmailJS Configuration
export const EMAILJS_CONFIG = {
  publicKey: 'y3FRMGWRf0pR5W7nr', // Your EmailJS public key
  serviceId: 'service_s0hh7yd', // Your EmailJS service ID
  templateId: 'template_0tnv68s', // Your EmailJS template ID
};

// Template parameters structure for reference
// Fixed the interface to be compatible with EmailJS requirements
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
  [key: string]: unknown; // Added index signature to fix TypeScript error
}
