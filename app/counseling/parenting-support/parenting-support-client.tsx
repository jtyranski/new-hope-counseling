'use client';

import Link from 'next/link';
import { AnimatedSection } from '../../components/animated-section';
import { PageHero } from '../../components/page-hero';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function ParentingSupportClient() {
  return (
    <div>
      <PageHero
        title="Parenting Support"
        subtitle="Guidance and encouragement for parents at every stage, supporting families as they build strong, healthy, and loving relationships."
        imageSrc="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?cs=srgb&dl=pexels-pixabay-3807517.jpg&fm=jpg"
        imageAlt="Family time together"
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Parenting is one of the most meaningful and challenging roles a person can experience. Whether raising young children, guiding teenagers, or supporting adult children, each stage of parenting brings new joys, questions, and responsibilities. Many parents also walk unique paths through foster care, adoption, blended families, or other family structures.
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                Parenting counseling offers a supportive space where caregivers can reflect, learn, and grow without judgment. The goal is not to create "perfect" parents, but to support families as they build strong, healthy, and loving relationships.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Support for Every Kind of Family */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Support for Every Kind of Family
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Every family has its own story. Some parents are raising children from birth, while others have welcomed children through foster care, adoption, or blended family relationships. Each journey brings unique experiences, challenges, and strengths.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed">
              Counseling provides guidance and encouragement for parents who want to better understand their children, strengthen family relationships, and create a home environment that feels safe, nurturing, and stable.
            </p>
          </div>
        </div>
      </section>

      {/* An Attachment-Focused Approach */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              An Attachment-Focused Approach
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Children thrive when they feel emotionally safe and securely connected to the people who care for them. An attachment-based approach helps parents understand the deeper emotional needs behind a child's behavior.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed mb-4">
              Through counseling, parents can learn how to:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Build stronger emotional connection with their children',
                'Respond to challenging behaviors with understanding and calm guidance',
                'Support children through difficult emotions and life transitions',
                'Strengthen trust, communication, and security within the family',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate_blue-600 leading-relaxed">
              These principles apply across every stage of life, from infancy to adulthood.
            </p>
          </div>
        </div>
      </section>

      {/* Parenting Through the Different Stages of Life */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Parenting Through the Different Stages of Life
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Parenting continues to evolve as children grow. Each stage brings new opportunities to guide, support, and stay connected.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed mb-4">
              Counseling can help parents navigate:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Early childhood development and emotional regulation',
                'School and social challenges',
                'Adolescent identity, independence, and boundaries',
                'Supporting young adult and adult children through life transitions',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate_blue-600">
                  <span className="text-gold-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate_blue-600 leading-relaxed">
              The goal is to strengthen the relationship between parent and child so that connection remains steady even during difficult seasons.
            </p>
          </div>
        </div>
      </section>

      {/* A Gentle Faith Perspective */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              A Gentle Faith Perspective
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              For families who value faith, a Christian perspective can offer quiet encouragement and hope in the parenting journey. Many parents find comfort in remembering that children are deeply loved and valued by God, and that grace, patience, and compassion can guide family relationships.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm">
            <p className="text-slate_blue-600 leading-relaxed">
              Counseling respects each family's beliefs and values. Faith can simply serve as a source of encouragement and wisdom as parents seek to nurture their children with love, understanding, and care.
            </p>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
              >
                <MessageCircle size={18} />
                Get Parenting Support <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
