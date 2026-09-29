'use client';

import Link from 'next/link';
import { AnimatedSection } from '../../components/animated-section';
import { PageHero } from '../../components/page-hero';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function DepressionAnxietyClient() {
  return (
    <div>
      <PageHero
        title="Depression and Anxiety Counseling"
        subtitle="Feelings of sadness, worry, or emotional exhaustion can affect people at any stage of life. You don't have to face them alone."
        imageSrc="https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?cs=srgb&dl=pexels-pixabay-2398220.jpg&fm=jpg"
        imageAlt="Peaceful moment"
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Feelings of sadness, worry, or emotional exhaustion can affect people at any stage of life. Children, teenagers, adults, and older adults may all experience seasons where life feels heavy, overwhelming, or difficult to manage. Depression and anxiety are common human struggles, and no one needs to face them alone.
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                Counseling provides a safe and supportive space where people can talk openly about their experiences, explore what they are feeling, and begin finding pathways toward healing and hope.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Understanding Depression and Anxiety */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Understanding Depression and Anxiety
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Depression and anxiety can show up in many different ways. Some people feel constant worry or racing thoughts. Others may feel discouraged, disconnected, or without energy. Children may struggle with irritability or changes in behavior, while adults and older individuals may experience fatigue, difficulty sleeping, or a sense of emotional weight.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed">
              These experiences often develop from a combination of life stress, difficult experiences, relationship struggles, or internal pressures. Counseling gently helps people understand these feelings while building practical tools for managing them.
            </p>
          </div>
        </div>
      </section>

      {/* Support for Every Stage of Life */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Support for Every Stage of Life
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Depression and anxiety can affect individuals differently depending on their stage of life. Counseling can be tailored to support:
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm mb-8">
            <ul className="space-y-3 mb-6">
              {[
                'Children and adolescents who may struggle with emotional regulation, school stress, or social challenges',
                'Young adults and adults navigating work pressures, relationships, parenting, or life transitions',
                'Older adults facing loneliness, grief, health concerns, or changes later in life',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate_blue-600 leading-relaxed">
              Every person deserves care, understanding, and support, regardless of age or life stage.
            </p>
          </div>
        </div>
      </section>

      {/* An Attachment-Focused Perspective */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              An Attachment-Focused Perspective
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              From an attachment perspective, emotional well-being is closely connected to relationships. Humans are designed to seek safety, connection, and understanding from others. When those needs feel unmet—through loss, stress, conflict, or past experiences—feelings of anxiety or depression can grow.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed">
              Counseling helps people explore these patterns with compassion and develop healthier ways of connecting with themselves and with others. As emotional safety grows, many people begin to experience greater peace and stability.
            </p>
          </div>
        </div>
      </section>

      {/* A Christian Perspective of Hope */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              A Christian Perspective of Hope
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              A Christian perspective reminds us that God cares deeply about the emotional burdens people carry. Scripture often speaks of God's closeness to those who feel weary, discouraged, or overwhelmed.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm">
            <p className="text-slate_blue-600 leading-relaxed mb-4">
              Counseling can offer a place where individuals learn practical skills for managing anxiety and depression while also drawing on faith as a source of strength, comfort, and hope. The goal is not perfection, but healing—one step at a time.
            </p>
            <p className="text-slate_blue-600 leading-relaxed font-semibold">
              No matter your age or life situation, support is available. With care, understanding, and hope, many people find that light begins to return even in the middle of difficult seasons.
            </p>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
              >
                <MessageCircle size={18} />
                Find Support <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
