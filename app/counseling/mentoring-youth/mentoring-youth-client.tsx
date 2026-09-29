'use client';

import Link from 'next/link';
import { AnimatedSection } from '../../components/animated-section';
import { PageHero } from '../../components/page-hero';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function MentoringYouthClient() {
  return (
    <div>
      <PageHero
        title="Mentoring for Adolescents and Young Adults"
        subtitle="A supportive and encouraging space for growth at their own unique pace."
        imageSrc="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?cs=srgb&dl=pexels-pixabay-3807517.jpg&fm=jpg"
        imageAlt="Young people supporting each other"
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Every young person grows and develops at their own unique pace. Some adolescents and young adults experience the world in ways that are thoughtful, sensitive, and deeply individual. They may benefit from extra guidance as they build confidence, navigate relationships, and learn important life skills. Mentoring can provide a supportive and encouraging space for this growth.
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                This mentoring approach focuses on helping young people better understand themselves, develop practical skills, and grow in confidence as they move toward greater independence. The goal is not to change who they are, but to support them in discovering their strengths and abilities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* A Safe and Encouraging Environment */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              A Safe and Encouraging Environment
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Many young people who experience the world differently have faced moments of misunderstanding, frustration, or feeling out of place. Mentoring creates a calm and accepting space where they can feel respected, valued, and supported.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed mb-4">
              Sessions may focus on areas such as:
            </p>
            <ul className="space-y-2">
              {[
                'Building social confidence and communication skills',
                'Understanding emotions and navigating friendships',
                'Developing problem-solving and decision-making skills',
                'Learning practical life skills and independence',
                'Strengthening self-confidence and personal identity',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate_blue-600 leading-relaxed mt-4">
              Each young person's needs, personality, and pace are honored throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* Strength-Based and Gentle Support */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Strength-Based and Gentle Support
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              This mentoring approach focuses on strengths rather than shortcomings. Many adolescents and young adults have unique ways of thinking, noticing details others might miss, and developing deep interests and talents. Mentoring helps nurture these strengths while gently building skills that support everyday life and relationships.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed">
              The process remains patient, respectful, and free from shame or criticism. Growth happens best when people feel safe, encouraged, and understood.
            </p>
          </div>
        </div>
      </section>

      {/* A Faith-Centered Perspective */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              A Faith-Centered Perspective
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              From a Christian perspective, every person is wonderfully created by God with purpose, dignity, and value. Differences in how someone thinks, learns, or experiences the world are not flaws—they are part of the unique way God has designed each individual.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm">
            <p className="text-slate_blue-600 leading-relaxed mb-4">
              Mentoring can include encouragement rooted in faith, reminding young people that they are deeply loved and never alone in their journey. Through guidance, patience, and hope, many young people grow in confidence and begin to see the meaningful strengths and gifts within themselves.
            </p>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
              >
                <MessageCircle size={18} />
                Explore Mentoring <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
