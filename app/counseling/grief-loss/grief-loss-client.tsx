'use client';

import Link from 'next/link';
import { AnimatedSection } from '../../components/animated-section';
import { PageHero } from '../../components/page-hero';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function GriefLossClient() {
  return (
    <div>
      <PageHero
        title="Grief and Loss Counseling"
        subtitle="A caring and supportive space where people can express their pain, remember what has been lost, and slowly move toward healing."
        imageSrc="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?cs=srgb&dl=pexels-pixabay-3807517.jpg&fm=jpg"
        imageAlt="Peaceful nature"
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Grief is a natural response to loss. The loss of a loved one, relationship, health, life stage, or important dream can leave people feeling deeply sad, disoriented, or emotionally overwhelmed.
              </p>
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                Grief often affects not only emotions but also sleep, energy, concentration, and daily life.
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                Grief counseling offers a caring and supportive space where people can express their pain, remember what has been lost, and slowly move toward healing.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Understanding the Grieving Process */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Understanding the Grieving Process
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Grief does not follow a simple or predictable path. Some days may feel manageable, while others feel heavy and exhausting. People may experience sadness, anger, confusion, numbness, or longing.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed">
              Counseling helps individuals understand that these experiences are normal parts of grieving. The goal is not to rush the process, but to gently support healing at a pace that feels respectful and safe.
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
              Attachment reminds us that grief reflects the depth of our love and connection. When an important bond is lost, the heart naturally struggles to adjust to that absence.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-slate_blue-50 rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed">
              Counseling helps individuals honor those bonds while slowly finding ways to carry the memory of loved ones forward. Over time, many people learn how to hold both grief and meaningful memories with greater peace.
            </p>
          </div>
        </div>
      </section>

      {/* A Christian Perspective of Comfort and Hope */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              A Christian Perspective of Comfort and Hope
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              For many people, faith becomes an important source of comfort during grief. A Christian perspective reminds us that God sees our sorrow and cares deeply about our pain. Scripture often speaks about God's closeness to those who mourn.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed mb-6">
              Counseling can help individuals explore grief while also drawing strength from faith, hope, and spiritual support. Healing does not mean forgetting the person or loss, but learning how to carry love and memory forward with gentleness and hope.
            </p>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="text-center mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
              >
                <MessageCircle size={18} />
                Reach Out for Support <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
