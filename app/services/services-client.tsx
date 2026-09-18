'use client';

import Link from 'next/link';
import { AnimatedSection } from '../components/animated-section';
import { PageHero } from '../components/page-hero';
import {
  Brain,
  Eye,
  Heart,
  Shield,
  Users,
  Puzzle,
  Lightbulb,
  BookOpen,
  Sparkles,
  Baby,
  TreePine,
  HandHeart,
  ArrowRight,
  Flower2,
  Scale,
  MessageCircle,
  Target,
} from 'lucide-react';

const concerns = [
  'Anxiety, stress, and emotional overwhelm',
  'Depression and low mood',
  'OCD and intrusive thoughts',
  'Stress management and burnout',
  'Life transitions and career uncertainty',
  'Anger management and emotional regulation',
  'Relationship and marriage challenges',
  'Premarital counseling',
  'Parenting concerns and family stress',
  'Divorce recovery',
  'Social skills and peer conflicts',
  'College student stress and adjustment',
  'Marriage enrichment',
  'Trauma and abuse recovery',
  'Sexual abuse and assault counseling',
  'Counseling for children and adolescents',
  'Personal growth and emotional well-being',
  'Faith-based / Christ-centered counseling',
];

const approaches = [
  {
    icon: Lightbulb,
    title: 'Insight-Oriented Therapy',
    desc: 'Helps individuals develop deeper understanding of inner experiences, patterns, and relationships. Greater awareness often leads to recognizing recurring patterns, understanding past influences, and developing healthier responses.',
  },
  {
    icon: Brain,
    title: 'Cognitive Behavioral Therapy (CBT)',
    desc: 'Focuses on the connection between thoughts, emotions, and behaviors. Helps identify unhelpful thinking patterns and develop more balanced perspectives, improving coping strategies and reducing anxiety and depression symptoms.',
  },
  {
    icon: Eye,
    title: 'EMDR Therapy',
    desc: 'Eye Movement Desensitization and Reprocessing helps the brain reprocess painful memories so they no longer carry the same emotional intensity. Many find distressing memories feel less overwhelming and a greater sense of peace emerges.',
  },
  {
    icon: Scale,
    title: 'Dialectical Behavior Therapy (DBT)',
    desc: 'A skills-based approach focusing on emotional regulation, distress tolerance, mindfulness, and improving communication and relationships. Especially helpful for managing intense emotions.',
  },
  {
    icon: Heart,
    title: 'Attachment-Based Therapy',
    desc: 'Explores how early relationships shape the way individuals connect with others and experience emotional safety. Helps develop healthier, more secure relationships and greater emotional trust.',
  },
  {
    icon: Shield,
    title: 'Trauma-Focused Counseling',
    desc: 'Creates a safe environment to process difficult experiences at a comfortable pace. Includes EMDR, insight-oriented exploration, mindfulness, and emotional regulation skills.',
  },
  {
    icon: Target,
    title: 'Acceptance & Commitment Therapy (ACT)',
    desc: 'Helps individuals respond to difficult thoughts and emotions in healthier ways. Focuses on developing psychological flexibility and taking meaningful steps toward valued living.',
  },
  {
    icon: BookOpen,
    title: 'Faith-Integrated Counseling',
    desc: 'For clients who desire it, counseling can include reflection on themes of grace, healing, restoration, and hope using Scripture, prayer, and Biblical guidance. Always guided by client preferences.',
  },
  {
    icon: Sparkles,
    title: 'Solution-Focused Counseling',
    desc: 'Gently helps identify what is already working, what matters most, and what small steps can move toward a better life. Focuses on strengths, resilience, and resources already within.',
  },
  {
    icon: Baby,
    title: 'Play Therapy',
    desc: 'Uses toys, creative activities, and imagination to help children communicate experiences and emotions in a way that feels natural and safe. A gentle, trauma-informed approach for young ones.',
  },
  {
    icon: TreePine,
    title: 'Family Systems Therapy',
    desc: 'Views each family as a connected system. Helps families understand communication patterns, strengthen relationships, and create healthier ways of supporting one another.',
  },
  {
    icon: Puzzle,
    title: 'Internal Family Systems (IFS)',
    desc: 'Helps people explore different inner "parts" with curiosity and compassion. Recognizes protective parts formed during difficult experiences and brings healing to those carrying pain.',
  },
  {
    icon: Flower2,
    title: 'Exposure & Response Prevention (ERP)',
    desc: 'Helps people gradually face fears while learning new ways to respond, building confidence and freedom from anxiety-driven patterns. Done slowly and with care.',
  },
];

export function ServicesClient() {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="We integrate evidence-based therapies with compassionate listening, a trauma-informed perspective, and a Christ-centered foundation."
        imageSrc="https://cdn.abacus.ai/images/3434c543-a3dd-4644-a67e-5fa3214f39c0.jpg"
        imageAlt="Calm misty lake surrounded by mountains and forest"
      />

      {/* What We Help With */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              What We Help With
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto mb-10">
              We work with clients facing a variety of challenges. If you are facing a challenge not listed here, you are still welcome to reach out.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {concerns?.map?.((concern, i) => (
              <AnimatedSection key={i} delay={i * 0.03}>
                <div className="flex items-center gap-3 bg-sage-50 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all">
                  <HandHeart size={16} className="text-gold-400 flex-shrink-0" />
                  <span className="text-slate_blue-700 text-sm">{concern ?? ''}</span>
                </div>
              </AnimatedSection>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Therapeutic Approaches */}
      <section className="py-16 sm:py-20 bg-slate_blue-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Our Therapeutic Approaches
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto mb-12">
              Counseling is not a one-size-fits-all process. Our counselors thoughtfully integrate different approaches depending on each person&apos;s needs, goals, and experiences.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approaches?.map?.((approach, i) => {
              const Icon = approach?.icon ?? Heart;
              return (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-gold-500" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-slate_blue-800 mb-2">{approach?.title ?? ''}</h3>
                        <p className="text-slate_blue-600 text-sm leading-relaxed">{approach?.desc ?? ''}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            }) ?? []}
          </div>
        </div>
      </section>

      {/* How Approaches Work Together */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-6">
                How These Approaches Work Together
              </h2>
              <div className="space-y-4 text-slate_blue-600 leading-relaxed">
                <p>Our counselors thoughtfully integrate different therapeutic approaches depending on each person&apos;s needs:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-400 mt-1">•</span>
                    <span><strong>Trauma-focused care</strong> may include EMDR and DBT skills for emotional regulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-400 mt-1">•</span>
                    <span><strong>Relationship work</strong> may incorporate attachment-based therapy and insight-oriented exploration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-400 mt-1">•</span>
                    <span><strong>Anxiety or depression</strong> may benefit from CBT and ACT strategies</span>
                  </li>
                </ul>
                <p>By thoughtfully combining these approaches, counseling can address both the deeper roots of emotional struggles and the practical tools needed for everyday life.</p>
              </div>
              <div className="text-center mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
                >
                  <MessageCircle size={18} />
                  Schedule an Appointment <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
