'use client';

import Link from 'next/link';
import { AnimatedSection } from '../../components/animated-section';
import { PageHero } from '../../components/page-hero';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function DivorceRecoveryClient() {
  return (
    <div>
      <PageHero
        title="Divorce Recovery"
        subtitle="Divorce recovery counseling offers a safe and compassionate space to process emotions without judgment."
        imageSrc="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?cs=srgb&dl=pexels-jplenio-2850287.jpg&fm=jpg"
        imageAlt="Peaceful sunset"
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Divorce can be one of the most emotionally painful transitions a person experiences. The end of a marriage often brings a mixture of grief, confusion, anger, loneliness, and uncertainty about the future. Many individuals also struggle with feelings of shame, failure, or self-doubt during this time.
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                Divorce recovery counseling offers a safe and compassionate space to process these emotions without judgment. The goal is to support healing, restore personal stability, and help individuals move forward with hope and renewed strength.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Processing the Emotional Impact */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Processing the Emotional Impact
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Divorce often affects many areas of life at once—relationships, family dynamics, finances, routines, and identity. Counseling helps individuals make sense of these changes while honoring the real pain and loss that may be present.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed mb-6">
              People often work through areas such as:
            </p>
            <ul className="space-y-2">
              {[
                'Grieving the loss of the relationship and shared dreams',
                'Processing anger, hurt, or betrayal',
                'Rebuilding confidence and personal identity',
                'Navigating co-parenting and family transitions',
                'Developing hope for the future',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate_blue-600 leading-relaxed mt-4">
              Healing happens gradually, and counseling provides steady support along the way.
            </p>
          </div>
        </div>
      </section>

      {/* An Attachment Perspective */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              An Attachment Perspective
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              From an attachment perspective, marriage represents one of the most important emotional bonds in a person's life. When that bond breaks, it can deeply affect a person's sense of safety and connection.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed">
              Counseling helps individuals understand these attachment wounds while gently supporting the rebuilding of emotional security. Over time, many people rediscover the ability to trust, connect, and build healthy relationships again.
            </p>
          </div>
        </div>
      </section>

      {/* A Christian Perspective of Grace and Hope */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              A Christian Perspective of Grace and Hope
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              For many people, divorce can raise difficult spiritual questions or feelings of guilt and shame. A Christian perspective emphasizes compassion, grace, and the belief that God walks with people through even the most painful life seasons.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm">
            <p className="text-slate_blue-600 leading-relaxed">
              Counseling provides a place where individuals can seek healing while reconnecting with hope, identity, and spiritual support. Even after deep loss, new beginnings and restoration remain possible.
            </p>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
              >
                <MessageCircle size={18} />
                Begin Your Healing <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
