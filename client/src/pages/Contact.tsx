import { useTranslation } from "react-i18next";
import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    candidateName: '',
    fatherName: '',
    email: '',
    address: '',
    mobile: '',
    purpose: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.candidateName || !formData.email || !formData.mobile || !formData.purpose) {
      toast({
        title: t('contact.form.errorTitle'),
        description: t('contact.form.errorMessage'),
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: t('contact.form.successTitle'),
        description: t('contact.form.successMessage')
      });
      
      // Reset form
      setFormData({
        candidateName: '',
        fatherName: '',
        email: '',
        address: '',
        mobile: '',
        purpose: '',
        message: ''
      });
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: t('contact.form.errorTitle'),
        description: t('contact.form.submitError'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">{t('contact.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('contact.subtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t('contact.info.title')}</h2>
              <p className="text-lg text-muted-foreground mb-8">{t('contact.info.subtitle')}</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('contact.info.location.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.info.location.address')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('contact.info.phone.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.info.phone.number1')}</p>
                    <p className="text-muted-foreground">{t('contact.info.phone.number2')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('contact.info.email.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.info.email.address1')}</p>
                    <p className="text-muted-foreground">{t('contact.info.email.address2')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('contact.info.hours.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.info.hours.weekdays')}</p>
                    <p className="text-muted-foreground">{t('contact.info.hours.saturday')}</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-10 h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.2196377737144!2d76.61687!3d12.311389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7091b7f1b7b3%3A0x7b7b7b7b7b7b7b7b!2sJSS%20Polytechnic%20for%20the%20Differently%20Abled!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin" 
                  className="w-full h-full border-0" 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  title="JSS Polytechnic Location Map"
                ></iframe>
              </div>
              
              {/* Map Link */}
              <div className="mt-4">
                <a 
                  href="https://g.page/jsspda?share" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <MapPin className="h-4 w-4" />
                  View on Google Maps
                </a>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="candidateName" className="block text-sm font-medium text-muted-foreground mb-2">Name of the Candidate *</label>
                      <input 
                        type="text" 
                        name="candidateName" 
                        value={formData.candidateName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="fatherName" className="block text-sm font-medium text-muted-foreground mb-2">Father Name</label>
                      <input 
                        type="text" 
                        name="fatherName" 
                        value={formData.fatherName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-muted-foreground mb-2">Mobile No. *</label>
                      <input 
                        type="tel" 
                        name="mobile" 
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="address" className="block text-sm font-medium text-muted-foreground mb-2">Address</label>
                    <textarea 
                      name="address" 
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="purpose" className="block text-sm font-medium text-muted-foreground mb-2">Purpose of Enquiry *</label>
                    <select 
                      name="purpose" 
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      disabled={isSubmitting}
                      required
                    >
                      <option value="">Select Purpose</option>
                      <option value="Admission">Admission</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Additional Message</label>
                    <textarea 
                      name="message" 
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                    <Send size={18} />
                  </button>
                </form>
              </div>
              
              {/* Additional Info */}
              <div className="mt-8 bg-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">{t('contact.admissions.title')}</h3>
                <p className="text-muted-foreground mb-4">{t('contact.admissions.description')}</p>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{t('contact.admissions.email')}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{t('contact.admissions.phone')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t('contact.faq.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('contact.faq.subtitle')}</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-3">{t(`contact.faq.questions.${index}.question`)}</h3>
                  <p className="text-muted-foreground">{t(`contact.faq.questions.${index}.answer`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
