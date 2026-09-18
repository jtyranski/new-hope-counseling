'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection } from './animated-section';
import {
  Heart,
  Shield,
  Users,
  ArrowRight,
  Phone,
  MessageCircle,
  Brain,
  Sparkles,
  HandHeart,
  TreePine,
  BookOpen,
  Baby,
} from 'lucide-react';

const feelings = [
  'Overwhelmed by past experiences or painful memories',
  'Stuck in patterns that are difficult to change',
  'Disconnected in your marriage or relationships',
  'Emotionally exhausted, anxious, or discouraged',
  'Struggling to support your child through challenges',
  'Hurt or confused after betrayal or conflict',
  'Lonely, uncertain, or lost during a life transition',
  'Pressured or overwhelmed by demands of school or work',
  'Ready for change but unsure where to begin',
];

const services = [
  { icon: Brain, title: 'Individual Counseling', desc: 'Anxiety, depression, trauma, stress management, and personal growth.' },
  { icon: Users, title: 'Marriage & Couples', desc: 'Strengthen communication, rebuild trust, and deepen connection.' },
  { icon: Baby, title: 'Children & Adolescents', desc: 'Emotional, behavioral, and social support for young people.' },
  { icon: HandHeart, title: 'Trauma & EMDR', desc: 'Evidence-based healing for traumatic and distressing experiences.' },
  { icon: TreePine, title: 'Family Counseling', desc: 'Improve relationships, communication, and family dynamics.' },
  { icon: BookOpen, title: 'Faith-Integrated', desc: 'Christ-centered counseling for those who desire a faith perspective.' },
];

export function HomeClient() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[520px] sm:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/tumblr.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate_blue-900/60 via-slate_blue-900/50 to-slate_blue-900/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-gold-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2">
              New Hope Counseling Ltd.
            </h1>
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-light mt-4 max-w-2xl leading-relaxed">
              A safe and welcoming place where healing begins.
            </p>
            <p className="text-slate_blue-200 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
              Whatever has brought you here, you are welcome. Our counseling practice is a place where people can come just as they are — without judgment or shame.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link
              href="/contact"
              className="bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Request an Appointment
            </Link>
            <Link
              href="/services"
              className="border-2 border-gold-400/60 text-gold-300 px-6 py-3 rounded-md font-semibold hover:bg-gold-400/10 transition-all flex items-center gap-2"
            >
              Explore Services <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* You May Be Feeling Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-slate_blue-800 mb-4">
                You May Be Feeling...
              </h2>
              <p className="text-slate_blue-600 max-w-2xl mx-auto leading-relaxed">
                Life&apos;s challenges can affect people in many different ways. Sometimes the weight of difficult experiences can leave individuals feeling overwhelmed, discouraged, or unsure how to move forward.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {feelings?.map?.((feeling, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-slate_blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Heart size={18} className="text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate_blue-700 text-sm leading-relaxed">{feeling ?? ''}</span>
                </div>
              </AnimatedSection>
            )) ?? []}
          </div>
          <AnimatedSection delay={0.3}>
            <p className="text-center mt-10 text-slate_blue-600 text-lg">
              Many people reach a point where they realize they don&apos;t want to keep carrying these burdens alone. <span className="font-semibold text-gold-500">We are here to help.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-slate_blue-800 mb-4">
                What We Help With
              </h2>
              <p className="text-slate_blue-600 max-w-2xl mx-auto">
                A safe and supportive place to begin. We work with clients facing a variety of challenges.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services?.map?.((service, i) => {
              const Icon = service?.icon ?? Heart;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={24} className="text-gold-500" />
                    </div>
                    <h3 className="font-serif text-lg text-slate_blue-800 mb-2">{service?.title ?? ''}</h3>
                    <p className="text-slate_blue-600 text-sm leading-relaxed">{service?.desc ?? ''}</p>
                  </div>
                </AnimatedSection>
              );
            }) ?? []}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-slate_blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate_blue-700 transition-colors shadow-md"
              >
                View All Services <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* A Place for Everyone */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/1260324/pexels-photo-1260324.jpeg?cs=srgb&dl=pexels-jahoo-1260324.jpg&fm=jpg"
                  alt="Peaceful forest path with sunlight filtering through trees"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={(e) => { if (e?.currentTarget) e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div>
                <Shield size={32} className="text-gold-400 mb-4" />
                <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 mb-4">
                  A Place for Everyone
                </h2>
                <p className="text-slate_blue-600 leading-relaxed mb-4">
                  While our practice is rooted in Christian values such as compassion, grace, hope, and a Christ-centered perspective, we recognize that every person&apos;s beliefs and life journey are different.
                </p>
                <p className="text-slate_blue-600 leading-relaxed mb-4">
                  Some clients come specifically seeking faith-based professional counseling that integrates prayer, Scripture, and spiritual guidance into the healing process. Others simply want thoughtful, professional counseling in a respectful environment.
                </p>
                <p className="text-slate_blue-700 font-semibold text-lg">
                  All are welcome here.
                </p>
                <p className="text-slate_blue-600 leading-relaxed mt-4">
                  Your counseling experience will always respect your comfort level, your beliefs, and your goals for therapy.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?cs=srgb&dl=pexels-jplenio-2850287.jpg&fm=jpg"
            alt="Peaceful sunset over mountains and water"
            fill
            className="object-cover"
            sizes="100vw"
            onError={(e) => { if (e?.currentTarget) e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-slate_blue-900/75" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <Sparkles size={32} className="text-gold-400 mx-auto mb-4" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Support Is Here When You&apos;re Ready
            </h2>
            <p className="text-slate_blue-200 max-w-2xl mx-auto mb-4 leading-relaxed">
              Reaching out for counseling can feel like a big step, and our goal is to make the process as comfortable and straightforward as possible.
            </p>
            <p className="text-slate_blue-300 mb-8">
              You don&apos;t have to navigate difficult seasons alone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-lg flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Contact Us
              </Link>
              <a
                href="tel:2245176234"
                className="border-2 border-gold-400/60 text-gold-300 px-6 py-3 rounded-md font-semibold hover:bg-gold-400/10 transition-all flex items-center gap-2"
              >
                <Phone size={18} />
                Call or Text: 224-517-6234
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
