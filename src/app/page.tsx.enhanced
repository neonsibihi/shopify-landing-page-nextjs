'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    storeName: '',
    niche: '',
    yourName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      {/* TopAppBar (Modified for Zero-Nav Landing Page per prompt, hiding search and nav, centering logo if needed, but keeping it simple) */}
      <header className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md fixed top-0 w-full z-50 border-b border-gray-100 dark:border-gray-800 shadow-[0px_10px_30px_rgba(0,0,0,0.04)] h-20">
        <div className="flex items-center justify-center h-20 px-8 max-w-[1280px] mx-auto w-full">
          <span className="font-headline-md text-headline-md text-[#004B3E] uppercase tracking-tighter">
            Merchant Authority
          </span>
        </div>
      </header>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-[120px] px-8 bg-surface-container-lowest">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-[48px]">
            <h1 className="font-headline-xl text-[64px] text-primary leading-[1.1] tracking-[-0.02em] font-[800]">
              Launch Your Professional Shopify Store in 48 Hours
            </h1>
            <p className="font-body-lg text-[20px] text-on-surface-variant leading-[1.6] font-[400] max-w-[600px]">
              Stop struggling with setup. Our expert team will design, build, and launch a conversion-optimized Shopify store ready for your first sale, fast.
            </p>
            <a 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FF7A00] text-white font-label-caps text-[14px] leading-[1.2] tracking-[0.05em] font-[600] rounded-[0.25rem] hover:bg-[#e66a00] transition-colors duration-300 shadow-[0px_10px_30px_rgba(0,0,0,0.04)]"
              href="#pricing"
            >
              Get Your Store Started
            </a>
            {/* Social Proof */}
            <div className="mt-[48px] pt-[24px] border-t border-surface-variant w-full flex flex-col items-center gap-[24px]">
              <span className="font-label-caps text-[14px] text-on-surface-variant leading-[1.2] tracking-[0.05em] font-[600] uppercase tracking-wider">
                Trusted by 500+ Merchants
              </span>
              <div className="flex items-center gap-2 text-[#FF7A00]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="font-label-caps text-[14px] text-primary ml-2 leading-[1.2] tracking-[0.05em] font-[600]">
                  4.9/5 Average Rating
                </span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Value Props */}
        <section className="py-[120px] px-8 bg-surface">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest p-[48px] rounded-[0.5rem] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-surface-variant flex flex-col gap-[24px]">
                <div className="w-[48px] h-[48px] rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[24px] text-primary">design_services</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-[32px] text-primary leading-[1.3] font-[700] mb-[8px]">
                    Expert Design
                  </h3>
                  <p className="font-body-md text-[16px] text-on-surface-variant leading-[1.6] font-[400]">
                    Premium themes customized to fit your brand identity, ensuring a professional look that builds trust with your customers.
                  </p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-surface-container-lowest p-[48px] rounded-[0.5rem] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-surface-variant flex flex-col gap-[24px]">
                <div className="w-[48px] h-[48px] rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[24px] text-primary">troubleshoot</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-[32px] text-primary leading-[1.3] font-[700] mb-[8px]">
                    SEO Optimized
                  </h3>
                  <p className="font-body-md text-[16px] text-on-surface-variant leading-[1.6] font-[400]">
                    Built with technical SEO best practices from day one to ensure your store ranks well and drives organic traffic.
                  </p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-surface-container-lowest p-[48px] rounded-[0.5rem] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-surface-variant flex flex-col gap-[24px]">
                <div className="w-[48px] h-[48px] rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[24px] text-primary">smartphone</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-[32px] text-primary leading-[1.3] font-[700] mb-[8px]">
                    Mobile First
                  </h3>
                  <p className="font-body-md text-[16px] text-on-surface-variant leading-[1.6] font-[400]">
                    Flawless responsive design ensuring your store looks and performs perfectly across all devices, capturing mobile shoppers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-[120px] px-8 bg-surface-container-lowest" id="pricing">
          <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[32px] bg-surface-container-low rounded-xl p-[12px] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-outline-variant">
            <div className="flex-1 flex flex-col gap-[24px]">
              <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container rounded-[0.25rem] font-label-caps text-[14px] leading-[1.2] tracking-[0.05em] font-[600] uppercase w-max">
                Complete Setup
              </span>
              <h2 className="font-headline-lg text-[48px] text-primary leading-[1.2] tracking-[-0.01em] font-[700]">
                Everything You Need to Start Selling
              </h2>
              <p className="font-body-lg text-[20px] text-on-surface-variant leading-[1.6] font-[400]">
                Skip the technical headaches. We handle the entire setup process from theme configuration to essential app integration.
              </p>
              <ul className="flex flex-col gap-[24px] mt-[16px]">
                <li className="flex items-center gap-[24px] text-primary font-body-md text-[16px] leading-[1.6] font-[400]">
                  <span className="material-symbols-outlined text-[#FF7A00]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Premium Theme Setup &amp; Customization
                </li>
                <li className="flex items-center gap-[24px] text-primary font-body-md text-[16px] leading-[1.6] font-[400]">
                  <span className="material-symbols-outlined text-[#FF7A00]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Up to 5 Core Pages (Home, About, Contact, etc.)
                </li>
                <li className="flex items-center gap-[24px] text-primary font-body-md text-[16px] leading-[1.6] font-[400]">
                  <span className="material-symbols-outlined text-[#FF7A00]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Essential App Integrations
                </li>
                <li className="flex items-center gap-[24px] text-primary font-body-md text-[16px] leading-[1.6] font-[400]">
                  <span className="material-symbols-outlined text-[#FF7A00]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Basic SEO Setup &amp; Mobile Optimization
                </li>
              </ul>
            </div>
            <div className="w-full md:w-[350px] bg-surface-container-lowest p-[48px] rounded-[0.5rem] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-surface-variant text-center flex flex-col items-center gap-[24px]">
              <h3 className="font-headline-md text-[32px] text-primary leading-[1.3] font-[700]">
                Standard Build
              </h3>
              <div className="flex items-baseline justify-center gap-[8px]">
                <span className="font-headline-md text-[32px] text-primary leading-[1.3] font-[700]">$</span>
                <span className="font-headline-xl text-[64px] text-primary leading-[1.1] tracking-[-0.02em] font-[800]">149</span>
              </div>
              <p className="font-body-md text-[16px] text-on-surface-variant leading-[1.6] font-[400]">
                One-time payment. No hidden fees.
              </p>
              <a 
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#FF7A00] text-white font-label-caps text-[14px] leading-[1.2] tracking-[0.05em] font-[600] rounded-[0.25rem] hover:bg-[#e66a00] transition-colors duration-300 shadow-[0px_10px_30px_rgba(0,0,0,0.04)] mt-[16px]"
                href="#contact"
              >
                Secure Your Spot
              </a>
            </div>
          </div>
        </section>
        
        {/* Contact Form (Micro-Commitment) */}
        <section className="py-[120px] px-8 bg-surface" id="contact">
          <div className="max-w-[600px] mx-auto bg-surface-container-lowest p-[40px] rounded-[0.75rem] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-surface-variant">
            <div className="text-center mb-[48px]">
              <h2 className="font-headline-lg text-[48px] text-primary leading-[1.2] tracking-[-0.01em] font-[700] mb-[24px]">
                Let's Get Started
              </h2>
              <p className="font-body-md text-[16px] text-on-surface-variant leading-[1.6] font-[400]">
                Tell us a bit about your vision to reserve your build slot.
              </p>
            </div>
            
            {/* Form Step 1 (Mockup) */}
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col gap-[24px]"
            >
              <div className="flex flex-col gap-[8px]">
                <label className="font-label-caps text-[14px] text-primary leading-[1.2] tracking-[0.05em] font-[600]">
                  What's your store name? (or idea)
                </label>
                <input
                  className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[0.25rem] focus:outline-none focus:border-[#004B3E] focus:ring-1 focus:ring-[#004B3E] font-body-md text-[16px] text-on-surface transition-colors duration-200"
                  placeholder="e.g., The Cozy Corner"
                  type="text"
                  value={formData.storeName}
                  onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                  required
                />
              </div>
              
              <div className="flex flex-col gap-[8px]">
                <label className="font-label-caps text-[14px] text-primary leading-[1.2] tracking-[0.05em] font-[600]">
                  What niche are you in?
                </label>
                <select
                  className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[0.25rem] focus:outline-none focus:border-[#004B3E] focus:ring-1 focus:ring-[#004B3E] font-body-md text-[16px] text-on-surface transition-colors duration-200"
                  value={formData.niche}
                  onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                  required
                >
                  <option value="">Select your niche</option>
                  <option value="Fashion & Apparel">Fashion & Apparel</option>
                  <option value="Home & Garden">Home & Garden</option>
                  <option value="Health & Beauty">Health & Beauty</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="font-label-caps text-[14px] text-primary leading-[1.2] tracking-[0.05em] font-[600]">
                    Your Name
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[0.25rem] focus:outline-none focus:border-[#004B3E] focus:ring-1 focus:ring-[#004B3E] font-body-md text-[16px] text-on-surface transition-colors duration-200"
                    placeholder="Jane Doe"
                    type="text"
                    value={formData.yourName}
                    onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                    required
                  />
                </div>
                
                <div className="flex flex-col gap-[8px]">
                  <label className="font-label-caps text-[14px] text-primary leading-[1.2] tracking-[0.05em] font-[600]">
                    Email Address
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[0.25rem] focus:outline-none focus:border-[#004B3E] focus:ring-1 focus:ring-[#004B3E] font-body-md text-[16px] text-on-surface transition-colors duration-200"
                    placeholder="jane@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#FF7A00] text-white font-label-caps text-[14px] leading-[1.2] tracking-[0.05em] font-[600] rounded-[0.25rem] hover:bg-[#e66a00] transition-colors duration-300 shadow-[0px_10px_30px_rgba(0,0,0,0.04)]"
              >
                {isSubmitting ? 'Processing...' : 'Complete Request'}
              </button>
              
              {submitSuccess ? (
                <>
                  <p className="text-center font-body-md text-[12px] text-on-surface-variant mt-[8px]">
                    Thank you! We'll be in touch within 24 hours to start building your Shopify store.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-center font-body-md text-[12px] text-on-surface-variant mt-[8px]">
                    By submitting, you agree to our terms.
                  </p>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 w-full py-[16px] border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-[24px]">
          <span className="text-xl font-bold text-[#004B3E] dark:text-white">
            Merchant Authority
          </span>
          <nav className="flex gap-[24px]">
            <a 
              className="font-manrope text-sm leading-relaxed text-slate-500 dark:text-slate-400 hover:text-[#004B3E] dark:hover:text-emerald-300 transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a 
              className="font-manrope text-sm leading-relaxed text-slate-500 dark:text-slate-400 hover:text-[#004B3E] dark:hover:text-emerald-300 transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a 
              className="font-manrope text-sm leading-relaxed text-slate-500 dark:text-slate-400 hover:text-[#004B3E] dark:hover:text-emerald-300 transition-colors"
              href="#"
            >
              Support
            </a>
          </nav>
          <span className="font-manrope text-sm leading-relaxed text-[#004B3E] dark:text-emerald-400">
            © 2024 Merchant Authority. The Expert Shopify Partner.
          </span>
        </div>
      </footer>
    </>
  );
}