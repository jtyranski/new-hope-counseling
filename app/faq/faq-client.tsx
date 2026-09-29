'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatedSection } from '../components/animated-section';
import { PageHero } from '../components/page-hero';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqCategories = [
  {
    category: 'Getting Started (3)',
    questions: [
      {
        q: 'How do I schedule an appointment?',
        a: 'Appointments can be scheduled by calling or texting (224) 517-6234. We offer both in-person and virtual sessions to make counseling accessible and convenient. If you have additional questions, please feel free to reach out. We are always glad to help you learn more about the counseling process and determine whether it may be a good fit for you.'
      },
      {
        q: 'How do I get started with counseling?',
        a: 'If you are interested in learning more about counseling services or scheduling an appointment, you can contact the office via text or phone call, (224) 517-6234, to discuss availability and next steps. Beginning counseling is often the first step toward gaining support, clarity, and hope during challenging seasons of life.'
      },
      {
        q: 'What should I expect in the first counseling session?',
        a: 'The first session is often focused on getting to know you and understanding what brings you to counseling. Your counselor may ask questions about your background, current concerns, and goals for therapy. This session is also an opportunity for you to ask questions and determine whether counseling feels like a good fit for your needs.'
      },
    ]
  },
  {
    category: 'Sessions & Logistics (5)',
    questions: [
      {
        q: 'How long is a counseling session?',
        a: 'Most sessions last about 50–55 minutes, though longer sessions may occasionally be available depending on the type of counseling.'
      },
      {
        q: 'Do you offer virtual (online) counseling?',
        a: 'Yes. Secure virtual sessions are available for clients who prefer meeting from home or who have busy schedules.'
      },
      {
        q: 'What happens in a counseling session?',
        a: {
          paragraphs: ['Counseling sessions provide a confidential space where individuals can talk about their experiences, concerns, and goals with a trained professional.', 'Sessions may include:'],
          bullets: ['Exploring thoughts and emotions', 'Learning coping strategies', 'Developing healthier relationship patterns', 'Processing difficult experiences', 'Setting goals for personal growth'],
          closingParagraph: 'Each counseling process is tailored to the individual\'s needs and goals.'
        }
      },
      {
        q: 'Is counseling confidential?',
        a: 'Yes. Counseling sessions are confidential, meaning that what is discussed during sessions is kept private except in certain legal or safety-related situations where disclosure may be required. Your counselor can explain confidentiality policies and answer any questions you may have.'
      },
      {
        q: 'What if I feel nervous about starting counseling?',
        a: 'Feeling nervous is very common. Many people feel unsure before their first session. Counseling moves at a pace that feels comfortable, and your counselor will work to create a safe and supportive environment.'
      },
    ]
  },
  {
    category: 'Insurance & Fees (2)',
    questions: [
      {
        q: 'Do you accept insurance?',
        a: 'Yes. We work with several insurance plans and are happy to help you understand your coverage. Because each plan is different, we encourage clients to check with their insurance provider about mental health benefits, copays, deductibles, and any session limits. Our office can also help answer questions about the process and guide you through getting started.'
      },
      {
        q: 'Do you offer sliding scale fees?',
        a: 'Yes. Sliding scale fees may be available for individuals or families experiencing financial hardship. The goal is to make counseling as accessible as possible. If cost is a concern, we encourage you to reach out so we can discuss options and determine what may be possible.'
      },
    ]
  },
  {
    category: 'Faith & Spirituality (9)',
    questions: [
      {
        q: 'Is it Biblical to seek counseling?',
        a: 'Yes. The Bible emphasizes the importance of seeking wise counsel and guidance from others. Proverbs 11:14 says, "Where there is no guidance, a people fall, but in an abundance of counselors there is safety." Similarly, Proverbs 15:22 teaches, "Plans fail for lack of counsel, but with many advisers they succeed." These verses highlight the value of receiving wisdom and support from trusted and knowledgeable individuals. Counseling can be one way people seek wise guidance when navigating life\'s challenges.'
      },
      {
        q: 'Does seeking counseling mean I lack faith?',
        a: 'No. Seeking help during difficult seasons does not mean a person lacks faith. Throughout Scripture, people often turned to others for encouragement, wisdom, and support. The Bible encourages believers to care for one another in community. Galatians 6:2 says, "Carry each other\'s burdens, and in this way you will fulfill the law of Christ." Counseling can be one-way individuals receive support while working through challenges and strengthening their emotional and spiritual well-being.'
      },
      {
        q: 'Can counseling include faith or spiritual discussions?',
        a: 'Yes. For individuals who would like to incorporate their faith into counseling, spiritual beliefs can be thoughtfully included as part of the counseling process. Some people find it meaningful to reflect on spiritual themes such as hope, forgiveness, healing, and purpose. These conversations are always guided by the client\'s preferences and comfort level.'
      },
      {
        q: 'What does the Bible say about healing from emotional pain?',
        a: 'The Bible frequently speaks about God\'s compassion for those who are hurting. Psalm 147:3 says, "He heals the brokenhearted and binds up their wounds." Psalm 34:18 reminds us, "The Lord is close to the brokenhearted and saves those who are crushed in spirit." These passages reflect the biblical theme that God cares deeply about those who are experiencing pain and brokenness.'
      },
      {
        q: 'What is Christian counseling?',
        a: 'Christian counseling integrates professional counseling methods with biblical wisdom and faith for those who desire it. Counseling remains grounded in evidence-based practices while recognizing that faith can be an important source of hope, meaning, and healing. Clients are welcome regardless of where they are in their spiritual journey. Faith integration is always respectful and guided by the preferences of each client.'
      },
      {
        q: 'Do I have to be a Christian to receive counseling?',
        a: 'No. Counseling services are open to individuals of all backgrounds and beliefs. Christian faith can be incorporated into counseling for those who desire it, but it is never required.'
      },
      {
        q: 'Can faith be included in counseling?',
        a: 'Yes, if you would like it to be. Faith can be incorporated in a gentle and respectful way that supports your beliefs and values.'
      },
      {
        q: 'Should Christians seek professional counseling?',
        a: 'Many Christians find that professional counseling can complement their faith by providing tools, guidance, and support during difficult seasons. The Bible encourages seeking wisdom and guidance from others while trusting God throughout life\'s challenges. Counseling can offer a structured and supportive space for individuals to grow emotionally, relationally, and spiritually.'
      },
      {
        q: 'Do you offer Christian counseling?',
        a: 'Yes. For clients who would like to incorporate their faith into counseling, Christian perspectives can be thoughtfully integrated into the counseling process. Faith-based discussions may include reflection on spiritual themes such as hope, grace, forgiveness, and healing. Spiritual elements such as prayer, Scripture, and Biblical wisdom are always guided by the client\'s preferences and comfort level.'
      },
    ]
  },
  {
    category: 'Who We Work With (7)',
    questions: [
      {
        q: 'What types of concerns do you help with?',
        a: {
          paragraphs: ['People seek counseling for many different reasons, including anxiety, depression, trauma, relationship challenges, parenting concerns, life transitions, and emotional stress.', 'Support is also available for individuals healing from sexual abuse or sexual assault, navigating harmful or controlling relationships, or facing other difficult life experiences.', 'Counseling may also support children, adolescents, and adults who are experiencing challenges with friendships, peer conflict, or social skills.']
        }
      },
      {
        q: 'Do you work with children and adolescents?',
        a: 'Yes. Counseling services are available for children and adolescents who may be experiencing emotional, behavioral, or social challenges. Therapy can support emotional regulation, self-confidence, and healthy relationships.'
      },
      {
        q: 'Do you provide premarital or couples counseling?',
        a: 'Yes. Counseling is available for couples seeking to strengthen communication, rebuild trust, navigate conflict, or prepare for marriage.'
      },
      {
        q: 'Do you work with children and families?',
        a: 'Yes. Counseling services may include support for children, adolescents, parents, couples, and families.'
      },
      {
        q: 'Do you work with children, teens, and families?',
        a: 'Yes. Counseling services are available for individuals across the lifespan, including children, adolescents, adults, and families. Children and teens may receive support for concerns such as anxiety, school stress, social challenges, emotional regulation, or life transitions. Family collaboration is often an important part of supporting a child\'s well-being.'
      },
      {
        q: 'Do you offer counseling for couples or marriage?',
        a: {
          paragraphs: ['Yes. Couples counseling provides a space for partners to work on communication, strengthen their relationship, and address ongoing challenges.', 'Common reasons couples seek counseling include:'],
          bullets: ['Communication difficulties', 'Conflict resolution', 'Trust concerns', 'Parenting stress', 'Rebuilding connection and emotional closeness']
        }
      },
      {
        q: 'Can counseling help if my family is involved with DCFS?',
        a: 'Yes. Counseling can provide support for individuals and families navigating the stress and uncertainty that can come with DCFS involvement. Therapy may help families strengthen communication, develop healthy coping strategies, and work toward stability and healing.'
      },
    ]
  },
  {
    category: 'Is Counseling Right for Me? (6)',
    questions: [
      {
        q: 'How do I know if counseling is right for me or my family?',
        a: 'Many people wonder whether their situation is "serious enough" to seek counseling. The truth is that counseling can be helpful in many different circumstances. Some people seek counseling during particularly difficult seasons, while others simply want support as they work through challenges, strengthen relationships, or develop healthier coping strategies. If you are feeling overwhelmed, stuck, or would like additional support navigating a situation in your life or family, counseling may be a helpful step. If you are unsure, you are always welcome to reach out with questions before scheduling an appointment.'
      },
      {
        q: 'Is counseling only for people with serious problems?',
        a: 'Not at all. Many people seek counseling during normal life transitions or when they want support navigating challenges such as stress, relationships, parenting, or career decisions. Just as people seek guidance for physical health, counseling can support emotional and relational well-being.'
      },
      {
        q: 'How do I know if counseling is right for me?',
        a: 'If you are feeling overwhelmed, stuck, or simply want support while navigating life challenges, counseling may be helpful. Many people come not only during crises but also for personal growth and clarity.'
      },
      {
        q: 'How do I know if I need counseling?',
        a: {
          paragraphs: ['Many people consider counseling when they feel overwhelmed, stuck, or unsure how to handle a situation in their life. Counseling can be helpful if you are experiencing:'],
          bullets: ['Ongoing stress, anxiety, or sadness', 'Difficulty in relationships', 'Life transitions such as divorce, career changes, or parenting challenges', 'Emotional effects from past experiences or trauma', 'Feeling stuck or unsure how to move forward'],
          closingParagraph: 'You do not have to wait until a problem becomes severe to seek support. Many people benefit from counseling simply by having a safe space to talk, reflect, and gain new tools for navigating life.'
        }
      },
      {
        q: 'What if I\'m not sure what my goals are yet?',
        a: 'That\'s completely okay. Many people begin counseling simply knowing something in life feels difficult. Your counselor can help you explore your concerns and identify goals together.'
      },
      {
        q: 'Can counseling help even if my problems don\'t seem "big enough"?',
        a: 'Yes. Counseling is not only for major crises. Many people come for guidance, support, and personal growth during everyday life challenges.'
      },
    ]
  },
  {
    category: 'Specific Issues We Help With (3)',
    questions: [
      {
        q: 'Can counseling help with trauma or difficult life experiences?',
        a: 'Yes. Counseling can provide a safe and supportive environment for individuals to process difficult experiences such as trauma, loss, or major life changes. Evidence-based therapies can help individuals better understand their experiences, develop coping strategies, and move toward healing.'
      },
      {
        q: 'Can counseling help with anxiety or depression?',
        a: 'Yes. Counseling can help individuals better understand the factors contributing to anxiety or depression and develop practical strategies for managing symptoms. Through counseling, individuals can learn skills for regulating emotions, managing stress, improving thought patterns, and strengthening support systems.'
      },
      {
        q: 'How long does counseling take?',
        a: 'The length of counseling varies depending on each person\'s goals and the concerns being addressed. Some individuals attend counseling for a short period of time to work through a specific issue, while others choose to continue longer to explore deeper patterns and personal growth. Your counselor can work with you to develop a plan that supports your needs and goals.'
      },
    ]
  },
  {
    category: 'Therapeutic Approaches (1)',
    questions: [
      {
        q: 'What types of therapy approaches do you use?',
        a: {
          paragraphs: ['Counseling may incorporate a variety of evidence-based therapeutic approaches depending on the needs of each client. These may include:'],
          bullets: ['Cognitive Behavioral Therapy (CBT)', 'EMDR (Eye Movement Desensitization and Reprocessing)', 'Acceptance and Commitment Therapy (ACT)', 'Dialectical Behavior Therapy (DBT)', 'Attachment-based approaches', 'Trauma-informed counseling'],
          closingParagraph: 'These approaches are designed to help individuals understand their experiences, develop coping skills, and move toward healing and growth.'
        }
      },
    ]
  },
  {
    category: 'EMDR Therapy (5)',
    questions: [
      {
        q: 'What is EMDR therapy?',
        a: 'Eye Movement Desensitization and Reprocessing (EMDR) is a research-supported therapy designed to help people process and heal from traumatic or distressing experiences. It helps the brain reprocess difficult memories so they become less emotionally overwhelming.'
      },
      {
        q: 'How does EMDR work?',
        a: 'During EMDR therapy, the counselor guides the client in briefly recalling a distressing memory while also engaging in gentle bilateral stimulation such as guided eye movements or tapping. This process helps the brain naturally reorganize how the memory is stored, allowing the experience to feel less intense over time.'
      },
      {
        q: 'Is EMDR safe?',
        a: 'Yes. EMDR is widely used by trained therapists around the world and has been extensively researched for trauma treatment. Sessions are conducted carefully and at a pace that feels manageable and supportive for the client.'
      },
      {
        q: 'Do I have to talk about all the details of my trauma in EMDR?',
        a: 'Not necessarily. EMDR does not always require sharing every detail of a traumatic experience. Your counselor will guide the process in a way that respects your comfort level and emotional safety.'
      },
      {
        q: 'Who can benefit from EMDR?',
        a: 'EMDR can be helpful for adults, adolescents, and children who have experienced trauma, distressing memories, anxiety, or other overwhelming life events.'
      },
    ]
  },
];

type AnswerContent = string | { paragraphs?: string[]; bullets?: string[]; closingParagraph?: string };

function FaqItem({ faq, index }: { faq: { q: string; a: AnswerContent }; index: number }) {
  const [open, setOpen] = useState(false);

  const renderAnswer = (answer: AnswerContent) => {
    if (typeof answer === 'string') {
      return <p className="text-slate_blue-600 text-sm leading-relaxed">{answer}</p>;
    }

    return (
      <div className="space-y-3">
        {answer.paragraphs?.map((para, i) => (
          <p key={i} className="text-slate_blue-600 text-sm leading-relaxed">
            {para}
          </p>
        ))}
        {answer.bullets && answer.bullets.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-slate_blue-600 text-sm ml-2">
            {answer.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        )}
        {answer.closingParagraph && (
          <p className="text-slate_blue-600 text-sm leading-relaxed">
            {answer.closingParagraph}
          </p>
        )}
      </div>
    );
  };

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
              <div className="px-6 pb-4 border-t border-slate_blue-100 pt-3">
                {renderAnswer(faq?.a)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

function CategorySection({ category, index }: { category: { category: string; questions: { q: string; a: string | React.ReactNode }[] }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.05}>
      <div className="border border-slate_blue-200 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 bg-slate_blue-50 hover:bg-slate_blue-100 transition-colors"
          aria-expanded={open}
        >
          <span className="font-semibold text-slate_blue-800">{category?.category ?? ''}</span>
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
              <div className="bg-white space-y-0">
                {category?.questions?.map?.((faq, i) => (
                  <FaqItem key={i} faq={faq} index={i} />
                )) ?? []}
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
          <div className="space-y-4">
            {faqCategories?.map?.((cat, i) => (
              <CategorySection key={i} category={cat} index={i} />
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
                  (224) 517-6234
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
