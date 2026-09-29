'use client';

import Link from 'next/link';
import { AnimatedSection } from '../../components/animated-section';
import { PageHero } from '../../components/page-hero';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function TraumaAbuseClient() {
  return (
    <div>
      <PageHero
        title="Trauma, Sexual Abuse, and Sexual Assault Counseling"
        subtitle="Our counseling practice offers a safe, respectful, and confidential space where individuals of all ages can begin the process of healing."
        imageSrc="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?cs=srgb&dl=pexels-pixabay-3807517.jpg&fm=jpg"
        imageAlt="Peaceful nature"
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Experiences of trauma, sexual abuse, or sexual assault can deeply affect a person's sense of safety, trust, and self-worth. These experiences may impact emotional well-being, relationships, spiritual life, and daily functioning.
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                If you or someone you love has experienced sexual abuse, sexual assault, or another traumatic experience, you are not alone. Healing is possible, and compassionate support can make a meaningful difference.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Understanding the Impact of Trauma */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Understanding the Impact of Trauma
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Trauma can affect people in many different ways. Some individuals experience strong emotions such as fear, sadness, anger, or shame, while others may feel numb or disconnected. Many people struggle with confusion about their experiences or blame themselves for what happened.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed mb-6">
              Common responses to trauma may include:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Anxiety or persistent worry',
                'Depression or sadness',
                'Difficulty trusting others',
                'Feelings of shame or self-blame',
                'Flashbacks or intrusive memories',
                'Sleep difficulties or nightmares',
                'Challenges in relationships',
                'Emotional numbness or feeling disconnected',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate_blue-600 leading-relaxed">
              Every person's response to trauma is unique. There is no "right" or "wrong" way to feel, and healing does not follow a single path or timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Counseling for Survivors of Sexual Abuse and Sexual Assault */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Counseling for Survivors of Sexual Abuse and Sexual Assault
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Sexual abuse and sexual assault can leave lasting emotional and psychological wounds. Many survivors carry feelings that can be difficult to talk about, including shame, fear, anger, or confusion.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed mb-6">
              Counseling can provide a supportive space where survivors can:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Speak about their experiences in a safe and confidential environment',
                'Process difficult memories and emotions at their own pace',
                'Reduce feelings of shame and self-blame',
                'Rebuild trust and healthy boundaries',
                'Develop coping skills for anxiety, triggers, or trauma responses',
                'Rediscover a sense of strength, dignity, and personal worth',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate_blue-600 leading-relaxed">
              You are never required to share more than you feel comfortable sharing. Healing happens gradually and respectfully.
            </p>
          </div>
        </div>
      </section>

      {/* Trauma Counseling for Children and Adolescents */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Trauma Counseling for Children and Adolescents
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Children and adolescents who have experienced trauma or abuse may not always have the words to explain what they are feeling. Instead, their experiences may show up through changes in behavior, emotions, or relationships.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed mb-6">
              Counseling can help young people:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Feel safe and supported',
                'Express emotions in healthy ways',
                'Process confusing or frightening experiences',
                'Build resilience and coping skills',
                'Restore a sense of safety and confidence',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate_blue-600 leading-relaxed mb-4">
              Counseling with children and teens is developmentally appropriate, often incorporating conversation, creative activities, and supportive guidance.
            </p>
            <p className="text-slate_blue-600 leading-relaxed">
              When appropriate, parents or caregivers are included in the process to help support the child's healing and emotional well-being.
            </p>
          </div>
        </div>
      </section>

      {/* A Trauma-Informed Approach to Counseling */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              A Trauma-Informed Approach to Counseling
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Healing from trauma requires patience, understanding, and care. Our approach to trauma counseling focuses on creating a space where individuals feel:
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm mb-8">
            <ul className="space-y-3 mb-6">
              {[
                'Safe and respected',
                'Believed and understood',
                'Free from judgment or blame',
                'Empowered to move forward at their own pace',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate_blue-600 leading-relaxed mb-4">
              Counseling is guided by evidence-based approaches and trauma-informed care that support healing while honoring each person's story.
            </p>
          </div>
        </div>
      </section>

      {/* Faith and Spiritual Healing */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Faith and Spiritual Healing
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              For some individuals, experiences of trauma or abuse can also raise spiritual questions or struggles. Our counseling practice offers Christ-centered counseling for those who desire it, allowing faith to be part of the healing journey.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm">
            <p className="text-slate_blue-600 leading-relaxed">
              At the same time, counseling always respects each person's beliefs and comfort level. Spiritual discussions are always guided by the client's preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Hope and Healing */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Hope and Healing Are Possible
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-8">
              While the effects of trauma can feel overwhelming, healing and restoration are possible. With compassionate support, many survivors rediscover strength, rebuild trust, and find renewed hope for the future. You do not have to walk this journey alone.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
              >
                <MessageCircle size={18} />
                Begin the Healing Process <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
