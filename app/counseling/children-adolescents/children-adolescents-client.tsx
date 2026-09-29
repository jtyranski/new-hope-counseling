'use client';

import Link from 'next/link';
import { AnimatedSection } from '../../components/animated-section';
import { PageHero } from '../../components/page-hero';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function ChildrenAdolescentsClient() {
  return (
    <div>
      <PageHero
        title="Counseling for Children and Adolescents"
        subtitle="A safe space where young people can express their thoughts and emotions, develop healthy coping skills, and build confidence."
        imageSrc="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?cs=srgb&dl=pexels-pixabay-3807517.jpg&fm=jpg"
        imageAlt="Children playing outdoors"
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Children and adolescents face many challenges as they grow and develop. School pressures, friendships, family changes, anxiety, sadness, and difficult experiences can sometimes feel overwhelming for young people.
              </p>
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Counseling can provide a safe and supportive space where children and teens can express their thoughts and emotions, develop healthy coping skills, and build confidence.
              </p>
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Our approach with children and adolescents focuses on creating an environment where they feel safe, understood, and respected. Depending on the child's age and needs, counseling may include conversation, creative activities, and practical tools that help them better understand and manage their feelings.
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                We also work collaboratively with parents or caregivers, helping families support their child's growth, healing, and emotional well-being.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Common Concerns for Children and Teens */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Common Concerns for Children and Teens
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Children and adolescents may not always have the words to explain what they are feeling, but changes in behavior, mood, or relationships can sometimes signal that additional support is needed.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <p className="text-slate_blue-600 leading-relaxed mb-6">
              Counseling can help young people navigate challenges such as:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                'Anxiety or excessive worry',
                'Sadness or depression',
                'School stress or academic pressure',
                'Friendship or social difficulties',
                'Bullying or peer conflict',
                'Behavioral changes or emotional outbursts',
                'Family transitions such as divorce or loss',
                'Low self-esteem or confidence struggles',
                'Processing confusing or difficult experiences',
              ].map((concern, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{concern}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Support for Young People Facing Difficult Experiences */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Support for Young People Facing Difficult Experiences
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Some children and adolescents encounter situations that are confusing, frightening, or deeply painful. These experiences can affect how they see themselves, others, and the world around them.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed mb-6">
              Our counseling practice provides trauma-informed care for young people who have experienced difficult or harmful situations.
            </p>
            <p className="text-slate_blue-600 leading-relaxed mb-6">
              In a safe and compassionate environment, children and adolescents can begin to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Process difficult experiences at a pace that feels safe',
                'Express emotions they may not yet have words for',
                'Rebuild a sense of safety and trust',
                'Develop healthy coping skills',
                'Strengthen confidence and resilience',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate_blue-600 leading-relaxed">
              Healing takes time, patience, and support. Counseling can be an important step toward helping young people rediscover a sense of safety and hope.
            </p>
          </div>
        </div>
      </section>

      {/* Message for Parents and Caregivers */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              A Message for Parents and Caregivers
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              As a parent or caregiver, it can be difficult to see your child struggling. You may feel uncertain about what they are going through or how best to help them.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm">
            <p className="text-slate_blue-600 leading-relaxed mb-4">
              <span className="font-semibold">Seeking counseling for your child is a caring and courageous step.</span>
            </p>
            <p className="text-slate_blue-600 leading-relaxed mb-4">
              Our goal is to support both children and families by providing guidance, understanding, and practical tools that promote emotional health and stronger relationships.
            </p>
            <p className="text-slate_blue-600 leading-relaxed">
              You are not alone in wanting the best for your child, and support is available.
            </p>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
              >
                <MessageCircle size={18} />
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
