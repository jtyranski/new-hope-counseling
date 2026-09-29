'use client';

import Link from 'next/link';
import { AnimatedSection } from '../../components/animated-section';
import { PageHero } from '../../components/page-hero';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function MarriageCouplesClient() {
  return (
    <div>
      <PageHero
        title="Marriage and Couples Counseling"
        subtitle="A safe, supportive space where couples can slow down, feel heard, and begin to understand one another more deeply."
        imageSrc="https://images.pexels.com/photos/2253439/pexels-photo-2253439.jpeg?cs=srgb&dl=pexels-scott-webb-2253439.jpg&fm=jpg"
        imageAlt="Couple walking together"
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Every relationship experiences seasons of challenge, growth, and change. Some couples seek counseling during very difficult moments such as betrayal, disconnection, or repeated conflict. Other couples come to counseling because they value their relationship and want to strengthen an already healthy marriage. Both paths are welcome here.
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                Marriage counseling offers a safe, supportive space where couples can slow down, feel heard, and begin to understand one another more deeply. The goal is not to place blame, but to help partners move out of painful patterns and toward greater connection, trust, and understanding.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Support During Difficult Seasons */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Support During Difficult Seasons
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Many couples reach out when their relationship feels fragile or uncertain. Experiences such as infidelity, broken trust, emotional distance, or ongoing conflict can create deep hurt for both partners. Counseling provides a calm and compassionate environment where these painful experiences can be explored with care.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed mb-6">
              Through the counseling process, couples can begin to:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Rebuild trust and emotional safety',
                'Understand the deeper needs and hurts beneath conflict',
                'Learn healthier ways to communicate and repair after disagreements',
                'Begin the slow and meaningful work of healing together',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate_blue-600 leading-relaxed">
              Healing after serious challenges takes time, patience, and courage. Counseling helps guide that process in a respectful and supportive way.
            </p>
          </div>
        </div>
      </section>

      {/* Marriage Enrichment and Growth */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Marriage Enrichment and Growth
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Marriage counseling is not only for relationships in crisis. Many couples choose counseling because they want to strengthen their connection, deepen their communication, and continue growing together.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed mb-6">
              In these conversations, couples often focus on:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Strengthening emotional and spiritual connection',
                'Learning better ways to communicate and resolve conflict',
                'Building deeper friendship and partnership',
                'Preparing for new seasons of life such as parenting, career changes, or life transitions',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate_blue-600 leading-relaxed">
              Just as people invest in their physical or spiritual health, investing in a marriage can help relationships remain strong and resilient over time.
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
              Marriage counseling often looks at how partners connect emotionally with one another. An attachment perspective understands that most conflicts grow from deeper needs for closeness, safety, and reassurance.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed mb-4">
              When these needs feel unmet, couples may fall into cycles of withdrawal, criticism, defensiveness, or misunderstanding. Counseling helps couples recognize these patterns and begin responding to one another with greater empathy, honesty, and care. As partners feel safer with one another, emotional closeness often begins to grow again.
            </p>
          </div>
        </div>
      </section>

      {/* A Christian Perspective on Marriage */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              A Christian Perspective on Marriage
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              For couples who desire it, counseling can also include a Christian perspective on marriage. Scripture often describes marriage as a relationship built on love, grace, forgiveness, and commitment. Faith can provide guidance and hope during both joyful and difficult seasons.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm">
            <p className="text-slate_blue-600 leading-relaxed mb-4">
              Counseling does not assume perfection. Instead, it recognizes that every marriage involves two imperfect people learning how to love one another with patience and humility. Through compassion, honest conversation, and God's grace, many couples discover new pathways toward healing, renewal, and deeper connection.
            </p>
            <p className="text-slate_blue-600 leading-relaxed font-semibold">
              Whether you are facing painful challenges or simply hoping to grow closer, marriage counseling can provide a supportive place to strengthen the relationship you share.
            </p>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
              >
                <MessageCircle size={18} />
                Start the Conversation <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
