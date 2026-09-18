'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatedSection } from '../components/animated-section';
import { PageHero } from '../components/page-hero';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'How do I schedule an appointment?',
    a: 'Appointments can be scheduled by calling or texting 224-517-6234. We offer both in-person and virtual sessions to make counseling accessible and convenient. If you have additional questions, please feel free to reach out.'
  },
  {
    q: 'Do you accept insurance?',
    a: 'Yes. We work with several insurance plans and are happy to help you understand your coverage. Because each plan is different, we encourage clients to check with their insurance provider about mental health benefits, copays, deductibles, and any session limits.'
  },
  {
    q: 'Is it Biblical to seek counseling?',
    a: 'Yes. The Bible emphasizes the importance of seeking wise counsel and guidance from others. Proverbs 11:14 says, "Where there is no guidance, a people fall, but in an abundance of counselors there is safety." Similarly, Proverbs 15:22 teaches, "Plans fail for lack of counsel, but with many advisers they succeed."'
  },
  {
    q: 'Does seeking counseling mean I lack faith?',
    a: 'No. Seeking help during difficult seasons does not mean a person lacks faith. Throughout Scripture, people often turned to others for encouragement, wisdom, and support. Galatians 6:2 says, "Carry each other\'s burdens, and in this way you will fulfill the law of Christ."'
  },
  {
    q: 'Can counseling include faith or spiritual discussions?',
    a: 'Yes. For individuals who would like to incorporate their faith into counseling, spiritual beliefs can be thoughtfully included as part of the counseling process. These conversations are always guided by the client\'s preferences and comfort level.'
  },
  {
    q: 'Do I have to be a Christian to receive counseling?',
    a: 'No. Counseling services are open to individuals of all backgrounds and beliefs. Christian faith can be incorporated for those who desire it, but it is never required.'
  },
  {
    q: 'What types of concerns do you help with?',
    a: 'People seek counseling for many different reasons, including anxiety, depression, trauma, relationship challenges, parenting concerns, life transitions, emotional stress, healing from sexual abuse or assault, and navigating harmful or controlling relationships.'
  },
  {
    q: 'Do you work with children and adolescents?',
    a: 'Yes. Counseling services are available for children and adolescents experiencing emotional, behavioral, or social challenges. Therapy can support emotional regulation, self-confidence, and healthy relationships.'
  },
  {
    q: 'Do you provide premarital or couples counseling?',
    a: 'Yes. Counseling is available for couples seeking to strengthen communication, rebuild trust, navigate conflict, or prepare for marriage.'
  },
  {
    q: 'What happens in the first counseling session?',
    a: 'The first session provides an opportunity to discuss what has brought you to counseling, explore your goals, and begin developing a plan for moving forward. The goal is to create a comfortable and supportive environment where you feel heard and respected.'
  },
  {
    q: 'Is counseling confidential?',
    a: 'Yes. Counseling sessions are confidential, meaning that what is discussed during sessions is kept private except in certain legal or safety-related situations where disclosure may be required.'
  },
  {
    q: 'What is EMDR therapy?',
    a: 'Eye Movement Desensitization and Reprocessing (EMDR) is a research-supported therapy designed to help people process and heal from traumatic or distressing experiences. It helps the brain reprocess difficult memories so they become less emotionally overwhelming.'
  },
  {
    q: 'How long is a counseling session?',
    a: 'Most sessions last about 50\u201355 minutes, though longer sessions may occasionally be available depending on the type of counseling.'
  },
  {
    q: 'Do you offer virtual (online) counseling?',
    a: 'Yes. Secure virtual sessions are available for clients who prefer meeting from home or who have busy schedules.'
  },
  {
    q: 'What if I feel nervous about starting counseling?',
    a: 'Feeling nervous is very common. Many people feel unsure before their first session. Counseling moves at a pace that feels comfortable, and your counselor will work to create a safe and supportive environment.'
  },
  {
    q: 'Do you offer sliding scale fees?',
    a: 'Yes. Sliding scale fees may be available for individuals or families experiencing financial hardship. The goal is to make counseling as accessible as possible. If cost is a concern, we encourage you to reach out so we can discuss options.'
  },
  {
    q: 'How long does counseling take?',
    a: 'The length of counseling varies depending on each person\'s goals. Some attend for a short period to work through a specific issue, while others continue longer to explore deeper patterns and personal growth.'
  },
  {
    q: 'Can counseling help with anxiety or depression?',
    a: 'Yes. Counseling can help individuals better understand the factors contributing to anxiety or depression and develop practical strategies for managing symptoms, regulating emotions, and strengthening support systems.'
  },
  {
    q: 'Can counseling help if my family is involved with DCFS?',
    a: 'Yes. Counseling can provide support for individuals and families navigating the stress and uncertainty that can come with DCFS involvement. Therapy may help families strengthen communication and work toward stability and healing.'
  },
  {
    q: 'Is counseling only for people with serious problems?',
    a: 'Not at all. Many people seek counseling during normal life transitions or when they want support navigating challenges such as stress, relationships, parenting, or career decisions. Just as people seek guidance for physical health, counseling supports emotional and relational well-being.'
  },
];

function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.03}>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
          aria-expanded={open}
        >
          <span className="font-medium text-slate_blue-800 text-sm sm:text-base">{faq?.q ?? ''}</span>
          <ChevronDown
            size={20}
            className={`text-gold-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-4 text-slate_blue-600 text-sm leading-relaxed border-t border-slate_blue-100 pt-3">
                {faq?.a ?? ''}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export function FaqClient() {
  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our counseling services, approach, and what to expect."
        imageSrc="https://images.pexels.com/photos/20829249/pexels-photo-20829249.jpeg?cs=srgb&dl=pexels-skylake-20829249.jpg&fm=jpg"
        imageAlt="Serene meadow with mountains in golden hour light"
      />

      <section className="py-16 sm:py-20 bg-slate_blue-50">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <div className="space-y-3">
            {faqs?.map?.((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            )) ?? []}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 bg-white rounded-lg p-8 shadow-sm text-center">
              <h3 className="font-serif text-xl text-slate_blue-800 mb-3">Still Have Questions?</h3>
              <p className="text-slate_blue-600 mb-6">
                If you have additional questions or would like to learn more about counseling, we welcome you to reach out.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
                >
                  <MessageCircle size={18} />
                  Contact Us
                </Link>
                <a
                  href="tel:2245176234"
                  className="inline-flex items-center gap-2 border-2 border-slate_blue-300 text-slate_blue-700 px-6 py-3 rounded-md font-semibold hover:bg-slate_blue-100 transition-all"
                >
                  <Phone size={18} />
                  224-517-6234
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
