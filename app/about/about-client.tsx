'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '../components/animated-section';
import {
  Heart,
  Shield,
  BookOpen,
  Users,
  ArrowRight,
  Award,
  GraduationCap,
  Lightbulb,
} from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  { icon: Heart, title: 'Compassion', desc: 'Every person is met with warmth, understanding, and genuine care.' },
  { icon: Shield, title: 'Safety', desc: 'A judgment-free space where stories can be shared without shame.' },
  { icon: BookOpen, title: 'Faith-Informed', desc: 'Christian values integrated respectfully for those who desire it.' },
  { icon: Lightbulb, title: 'Evidence-Based', desc: 'Therapeutic approaches grounded in research and proven effectiveness.' },
];

export function AboutClient() {
  return (
    <div>
      <section className="relative h-[340px] sm:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1260324/pexels-photo-1260324.jpeg?cs=srgb&dl=pexels-jahoo-1260324.jpg&fm=jpg"
            alt="Peaceful forest path with sunlight filtering through trees"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            onError={(e) => { if (e?.currentTarget) e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate_blue-900/70 via-slate_blue-900/60 to-slate_blue-900/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate_blue-200 text-lg sm:text-xl max-w-2xl leading-relaxed"
          >
            Seeking counseling can take courage. Our approach is grounded in creating a space where you can feel safe, respected, and truly heard.
          </motion.p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 mb-6">
                Our Counseling Approach
              </h2>
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Conversations are guided with warmth, compassion, and a non-judgmental spirit so that every person&apos;s story can be explored without shame or criticism.
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                For clients who desire it, faith can also be included in the counseling process. A Christian perspective is offered in a respectful and gentle way, recognizing that many people find comfort, meaning, and hope through their faith.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values?.map?.((value, i) => {
              const Icon = value?.icon ?? Heart;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-sage-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all h-full">
                    <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-gold-500" />
                    </div>
                    <h3 className="font-serif text-lg text-slate_blue-800 mb-2">{value?.title ?? ''}</h3>
                    <p className="text-slate_blue-600 text-sm leading-relaxed">{value?.desc ?? ''}</p>
                  </div>
                </AnimatedSection>
              );
            }) ?? []}
          </div>
        </div>
      </section>

      {/* Meet the Counselors */}
      <section className="py-16 sm:py-20 bg-slate_blue-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-12">
              Meet Our Counselors
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* John Kramer */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all overflow-hidden pt-8">
                <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[510px] mx-auto mb-6 border-4 border-gold-100">
                  <Image
                    src="/John_Kramer.png"
                    alt="John Kramer, MA, NCC, LPC - Licensed Professional Counselor"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 300px, 400px"
                    onError={(e) => { if (e?.currentTarget) e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-slate_blue-800 mb-1">John Kramer</h3>
                  <p className="text-gold-500 font-bold text-sm mb-3">MA, NCC, LPC</p>
                  <div className="space-y-2 text-sm text-slate_blue-600">
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-gold-400" />
                      <span>National Certified Counselor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap size={14} className="text-gold-400" />
                      <span>Licensed Professional Counselor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield size={14} className="text-gold-400" />
                      <span>EMDR Trained Therapist</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Carol DiDominicis-Kramer */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all overflow-hidden pt-8">
                <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[510px] mx-auto mb-6 border-4 border-gold-100">
                  <Image
                    src="/Carol_Kramer.png"
                    alt="Carol DiDominicis-Kramer, MSSW, LCPC, LCSW - Licensed Clinical Professional Counselor"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 300px, 400px"
                    onError={(e) => { if (e?.currentTarget) e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-slate_blue-800 mb-1">Carol DiDominicis-Kramer</h3>
                  <p className="text-gold-500 font-bold text-sm mb-3">MSSW LCPC LCSW</p>
                  <div className="space-y-2 text-sm text-slate_blue-600">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={14} className="text-gold-400" />
                      <span>Licensed Clinical Professional Counselor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap size={14} className="text-gold-400" />
                      <span>Licensed Clinical Social Worker</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield size={14} className="text-gold-400" />
                      <span>EMDR Trained Therapist</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Who We Work With
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto mb-12">
              We provide counseling support for individuals and families across many stages of life.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Adults', desc: 'Anxiety, depression, trauma, relationship challenges, stress, grief, or major life transitions.' },
              { title: 'Adolescents', desc: 'Navigating anxiety, school stress, friendships, identity development, and family dynamics.' },
              { title: 'Children', desc: 'Emotional regulation, confidence building, social skills, and coping with challenging situations.' },
              { title: 'Couples', desc: 'Improving communication, rebuilding trust, navigating conflict, and strengthening connection.' },
              { title: 'Parents & Families', desc: 'Strengthening relationships, improving communication, and supporting family growth.' },
              { title: 'Helpers & Caregivers', desc: 'Support for those who care for others—restoring balance, preventing burnout.' },
            ]?.map?.((group, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-sage-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all h-full">
                  <h3 className="font-serif text-lg text-slate_blue-800 mb-2">{group?.title ?? ''}</h3>
                  <p className="text-slate_blue-600 text-sm leading-relaxed">{group?.desc ?? ''}</p>
                </div>
              </AnimatedSection>
            )) ?? []}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
              >
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
