'use client';

import Link from 'next/link';
import { AnimatedSection } from '../../components/animated-section';
import { PageHero } from '../../components/page-hero';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function StressBurnoutClient() {
  return (
    <div>
      <PageHero
        title="Stress Management and Burnout Recovery"
        subtitle="Counseling provides a calm and supportive space where individuals can pause, reflect, and begin restoring balance and emotional well-being."
        imageSrc="https://images.pexels.com/photos/1260324/pexels-photo-1260324.jpeg?cs=srgb&dl=pexels-jahoo-1260324.jpg&fm=jpg"
        imageAlt="Peaceful forest path"
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Life can place many demands on people. Work responsibilities, family needs, school pressures, caregiving, and unexpected life changes can gradually create stress that feels overwhelming.
              </p>
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                When stress continues for long periods without enough rest or support, many people begin to experience burnout.
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                Stress and burnout are not signs of weakness. They often appear in people who care deeply, work hard, and carry significant responsibilities. Counseling provides a calm and supportive space where individuals can pause, reflect, and begin restoring balance and emotional well-being.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Understanding Stress and Burnout */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Understanding Stress and Burnout
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Stress can affect both the mind and body. Some people experience constant worry, difficulty sleeping, or trouble concentrating. Others may feel emotionally drained, discouraged, or disconnected from things that once felt meaningful.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed mb-4">
              Burnout often develops when a person has been giving their time, energy, and care for a long period without enough opportunity for rest or renewal. Counseling helps people better understand these experiences while developing healthier ways to respond to life's demands.
            </p>
          </div>
        </div>
      </section>

      {/* Restoring Balance and Emotional Strength */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Restoring Balance and Emotional Strength
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Through counseling, individuals can begin to identify sources of stress and learn practical ways to care for their emotional and physical health. This process may include:
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm mb-8">
            <ul className="space-y-3 mb-6">
              {[
                'Recognizing personal stress triggers',
                'Developing healthier boundaries',
                'Learning calming and coping strategies',
                'Creating rhythms of rest and renewal',
                'Reconnecting with meaningful relationships and personal values',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate_blue-600 leading-relaxed">
              Small and steady changes often lead to greater peace, clarity, and resilience.
            </p>
          </div>
        </div>
      </section>

      {/* An Attachment Perspective */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              An Attachment Perspective
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Human beings are designed for connection and support. When stress increases, people often feel isolated or disconnected from others. Counseling helps individuals explore relationship patterns and strengthen safe, supportive connections that provide encouragement and stability during difficult seasons.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* A Christian Perspective on Rest and Renewal */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              A Christian Perspective on Rest and Renewal
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              A Christian perspective reminds us that people were not created to carry every burden alone. Scripture often speaks about the importance of rest, renewal, and trusting God during heavy seasons of life.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm">
            <p className="text-slate_blue-600 leading-relaxed">
              Counseling can help individuals develop healthier rhythms of work, rest, and spiritual renewal while drawing strength from faith. With time, support, and compassion, many people rediscover energy, hope, and a renewed sense of balance.
            </p>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
              >
                <MessageCircle size={18} />
                Find Relief and Restoration <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
