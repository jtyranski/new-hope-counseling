'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { AnimatedSection } from '../components/animated-section';
import { PageHero } from '../components/page-hero';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Loader2,
} from 'lucide-react';

const MESSAGE_CHAR_LIMIT = 150;

export function ContactClient() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  const messageLength = formData?.message?.length ?? 0;
  const charsRemaining = MESSAGE_CHAR_LIMIT - messageLength;
  const isNearLimit = messageLength > MESSAGE_CHAR_LIMIT * 0.8;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaReady(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const subject = searchParams?.get('subject');
    if (subject === 'appointment-request') {
      setFormData((prev) => ({ ...prev, subject: 'Appointment Request' }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e?.target ?? {};
    setFormData((prev) => ({ ...(prev ?? {}), [name ?? '']: value ?? '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setStatus('loading');
    setErrorMsg('');

    try {
      let recaptchaToken = '';
      if (recaptchaReady && (window as any).grecaptcha) {
        recaptchaToken = await (window as any).grecaptcha.execute(
          process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY,
          { action: 'submit' }
        );
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await res?.json?.();

      if (res?.ok && data?.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data?.message ?? 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      setErrorMsg('An error occurred. Please try again or call us directly.');
    }
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Reaching out for counseling can feel like a big step, and our goal is to make the process as comfortable and straightforward as possible."
        imageSrc="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?cs=srgb&dl=pexels-jplenio-2850287.jpg&fm=jpg"
        imageAlt="Peaceful sunset over mountains and water"
      />

      {/* Getting Started Section */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-10">
              Getting Started Is Simple
            </h2>
          </AnimatedSection>
          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Reach Out',
                desc: (<>Contact us by phone or text <a href="tel:2245176234" className="text-gold-500 font-semibold hover:text-gold-600 transition-colors">(224) 517-6234</a>, email, or through the contact form below. Share what brings you to counseling and ask any questions you may have.</>),
              },
              {
                step: '2',
                title: 'Schedule Your First Appointment',
                desc: 'We\'ll find a time that works for you. The first session is an opportunity to discuss your concerns, share relevant background, and talk about your goals.',
              },
              {
                step: '3',
                title: 'Begin the Counseling Process',
                desc: 'Together, we\'ll develop a plan that supports your goals. Each counseling experience is tailored to the individual, couple, or family receiving services.',
              },
            ]?.map?.((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-start gap-5 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-slate_blue-900 font-bold text-lg">{item?.step ?? ''}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-slate_blue-800 mb-1">{item?.title ?? ''}</h3>
                    {typeof item?.desc === 'string' ? (
                      <p className="text-slate_blue-600 text-sm leading-relaxed">{item?.desc}</p>
                    ) : (
                      <p className="text-slate_blue-600 text-sm leading-relaxed">{item?.desc}</p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            )) ?? []}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 mb-6">
                  Take the First Step
                </h2>
                <p className="text-slate_blue-600 leading-relaxed mb-8">
                  If you have questions or would like to schedule an appointment, we welcome you to reach out. Texting is often the quickest way to reach us, but you are always welcome to call.
                </p>

                <div className="space-y-6">
                  <a href="tel:2245176234" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-200 transition-colors">
                      <Phone size={20} className="text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate_blue-800">Phone / Text</h3>
                      <p className="text-gold-500 font-medium">(224) 517-6234</p>
                      <p className="text-slate_blue-500 text-sm">Texting is often the quickest way to reach us</p>
                    </div>
                  </a>

                  <a href="mailto:newhope@counselingmail.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-200 transition-colors">
                      <Mail size={20} className="text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate_blue-800">Email</h3>
                      <p className="text-gold-500 font-medium">newhope@counselingmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate_blue-800">Location</h3>
                      <p className="text-slate_blue-600">37W040 Highland Ave</p>
                      <p className="text-slate_blue-600">Elgin, IL 60124</p>
                      <p className="text-slate_blue-500 text-sm mt-1">Corner of Randall Rd & Highland Ave, near I-90 & Route 20</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate_blue-800">Sessions Available</h3>
                      <p className="text-slate_blue-600">In-Person & Virtual</p>
                      <p className="text-slate_blue-500 text-sm">Contact us for current availability</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.15}>
                <div className="bg-slate_blue-50 rounded-lg p-6 sm:p-8 shadow-sm">
                  <h2 className="font-serif text-xl sm:text-2xl text-slate_blue-800 mb-2">
                    <MessageCircle size={24} className="inline text-gold-400 mr-2" />
                    Send a Message
                  </h2>
                  <p className="text-slate_blue-500 text-sm mb-6">
                    Fill out the form below and we will respond as soon as possible.
                  </p>

                  {status === 'success' ? (
                    <div className="bg-sage-50 border border-sage-200 rounded-lg p-8 text-center">
                      <CheckCircle size={48} className="text-sage-500 mx-auto mb-4" />
                      <h3 className="font-serif text-xl text-slate_blue-800 mb-2">Message Sent Successfully</h3>
                      <p className="text-slate_blue-600 mb-4">
                        Thank you for reaching out. We will respond as soon as possible.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="text-gold-500 font-medium hover:text-gold-600 transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate_blue-700 mb-1">Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData?.name ?? ''}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-md border border-slate_blue-200 bg-white focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 outline-none transition-all text-slate_blue-800"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate_blue-700 mb-1">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData?.email ?? ''}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-md border border-slate_blue-200 bg-white focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 outline-none transition-all text-slate_blue-800"
                            placeholder="Your email"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate_blue-700 mb-1">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData?.phone ?? ''}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-slate_blue-200 bg-white focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 outline-none transition-all text-slate_blue-800"
                            placeholder="Your phone number"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate_blue-700 mb-1">Subject</label>
                          <select
                            name="subject"
                            value={formData?.subject ?? ''}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-slate_blue-200 bg-white focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 outline-none transition-all text-slate_blue-800"
                          >
                            <option value="">Select a subject</option>
                            <option value="Appointment Request">Appointment Request</option>
                            <option value="Insurance Question">Insurance Question</option>
                            <option value="Services Inquiry">Services Inquiry</option>
                            <option value="General Question">General Question</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate_blue-700 mb-1">Message *</label>
                        <textarea
                          name="message"
                          value={formData?.message ?? ''}
                          onChange={handleChange}
                          required
                          rows={5}
                          maxLength={MESSAGE_CHAR_LIMIT}
                          className="w-full px-4 py-3 rounded-md border border-slate_blue-200 bg-white focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 outline-none transition-all text-slate_blue-800 resize-vertical"
                          placeholder="How can we help you?"
                        />
                        <div className={`text-xs mt-2 font-medium ${isNearLimit ? 'text-orange-500' : 'text-slate_blue-400'}`}>
                          {charsRemaining} characters remaining ({messageLength}/{MESSAGE_CHAR_LIMIT})
                        </div>
                      </div>

                      {status === 'error' && (
                        <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-md text-sm">
                          <AlertCircle size={16} />
                          <span>{errorMsg ?? 'An error occurred.'}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <p className="text-xs text-slate_blue-400">
                          Your information is kept private and confidential.
                        </p>
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md disabled:opacity-60 flex items-center gap-2"
                        >
                          {status === 'loading' ? (
                            <><Loader2 size={18} className="animate-spin" /> Sending...</>
                          ) : (
                            <><Send size={18} /> Send Message</>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 mb-6">
                Our Location
              </h2>
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Counseling is available in person or through secure virtual sessions, allowing you to choose the format that best fits your comfort, schedule, and needs. Our goal is to make support accessible while still providing a calm, welcoming, and private counseling experience.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              <AnimatedSection>
                <div>
                  <h3 className="font-serif text-xl text-slate_blue-800 mb-4">
                    A Quiet and Supportive Setting
                  </h3>
                  <p className="text-slate_blue-600 leading-relaxed">
                    The counseling space is thoughtfully arranged to help clients feel at ease. Sessions take place in a confidential setting where you can speak openly and focus on your healing and personal growth. Whether you are coming for individual counseling, couples counseling, or family support, the environment is intended to feel warm, safe, and supportive.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div>
                  <h3 className="font-serif text-xl text-slate_blue-800 mb-4">
                    Easy and Accessible Visits
                  </h3>
                  <p className="text-slate_blue-600 leading-relaxed">
                    The office location allows for convenient access for individuals and families in the surrounding community. Parking is available nearby, and the setting is designed to allow clients to arrive and leave with privacy and ease.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <AnimatedSection delay={0.2}>
                <div>
                  <h3 className="font-serif text-xl text-slate_blue-800 mb-4">
                    A Place for Reflection and Growth
                  </h3>
                  <p className="text-slate_blue-600 leading-relaxed">
                    Counseling often involves discussing meaningful and sometimes difficult parts of life. A peaceful setting can make it easier to slow down, reflect, and engage in the counseling process. Whether meeting in person or virtually, the goal remains the same—to provide a safe space where healing, understanding, and hope can grow.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-slate_blue-50 rounded-lg p-6">
                  <p className="text-slate_blue-600 font-semibold mb-3">Our Office Location:</p>
                  <p className="text-slate_blue-700 font-medium mb-1">37W040 Highland Ave</p>
                  <p className="text-slate_blue-700 font-medium mb-3">Elgin, IL 60124</p>
                  <p className="text-slate_blue-600 text-sm mb-4">
                    Corner of Randall Road and Highland Ave, near I-90 and Route 20
                  </p>
                  <a href="tel:2245176234" className="text-gold-500 font-semibold hover:text-gold-600 transition-colors">(224) 517-6234</a>
                  <p className="text-slate_blue-500 text-sm">Call or Text</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
