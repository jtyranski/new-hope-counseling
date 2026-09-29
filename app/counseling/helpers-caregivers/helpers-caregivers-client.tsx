'use client';

import Link from 'next/link';
import { AnimatedSection } from '../../components/animated-section';
import { PageHero } from '../../components/page-hero';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function HelpersCaregiversClient() {
  return (
    <div>
      <PageHero
        title="Support for Helpers, Caregivers, and Those Who Give to Others"
        subtitle="A place where those who usually care for others can finally receive care themselves."
        imageSrc="https://images.pexels.com/photos/1260324/pexels-photo-1260324.jpeg?cs=srgb&dl=pexels-jahoo-1260324.jpg&fm=jpg"
        imageAlt="People supporting each other"
      />

      {/* Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Many people spend their lives caring for others. Helpers often include parents, teachers, pastors, ministry leaders, healthcare workers, therapists, first responders, and those who naturally take on the role of supporting family and friends. These individuals carry deep compassion and a strong desire to care for others well.
              </p>
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                At the same time, constantly giving emotional energy can quietly become exhausting. Helpers often place the needs of others first and may rarely pause to care for their own emotional and relational well-being. Over time, this can lead to feelings of stress, discouragement, emotional fatigue, or a sense of being overwhelmed.
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                Counseling offers a space where those who usually care for others can finally receive care themselves.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* A Place to Be Supported */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              A Place to Be Supported
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Many helpers are used to being the strong one, the listener, or the problem solver. In counseling, you are invited to step out of that role for a while. This is a place where you do not need to have all the answers or hold everything together.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm">
            <p className="text-slate_blue-600 leading-relaxed mb-6">
              Sessions offer a calm, supportive environment where you can talk openly about the pressures, responsibilities, and emotional weight you may be carrying. The goal is not to fix you, but to support you as a whole person.
            </p>
          </div>
        </div>
      </section>

      {/* A Gentle and Non-Shaming Approach */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              A Gentle and Non-Shaming Approach
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Helpers often place high expectations on themselves. When stress builds, it can be easy to feel guilt or self-criticism for needing support. Counseling provides a non-judgmental space where these experiences can be explored with compassion and understanding.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 mb-8">
            <div className="bg-white rounded-lg p-6">
              <p className="text-slate_blue-700 font-semibold mb-2">Seeking support is not a sign of weakness.</p>
              <p className="text-slate_blue-600 leading-relaxed">
                It is often an important step toward maintaining long-term emotional health and continuing to care for others in sustainable ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Faith-Informed Perspective */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              A Faith-Informed Perspective
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              For many helpers, faith plays an important role in their desire to serve and care for others. A Christian perspective can gently remind us that even those who give greatly also need rest, renewal, and support.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
                <p className="text-slate_blue-600 leading-relaxed mb-4">
                  For clients who desire it, faith can be included in counseling as a source of encouragement, reflection, and hope. The counseling process can help helpers reconnect with both emotional and spiritual rhythms that restore strength and balance.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <p className="text-slate_blue-600 leading-relaxed mb-8">
                  Caring for others is meaningful work, but no one was meant to carry those responsibilities alone. Counseling offers a place where helpers can pause, receive support, and rediscover the renewal needed to continue living and serving with strength and hope.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
                >
                  <MessageCircle size={18} />
                  Get Support <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
