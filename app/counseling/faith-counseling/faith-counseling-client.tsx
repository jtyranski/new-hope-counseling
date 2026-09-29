'use client';

import Link from 'next/link';
import { AnimatedSection } from '../../components/animated-section';
import { PageHero } from '../../components/page-hero';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function FaithCounselingClient() {
  return (
    <div>
      <PageHero
        title="Faith and Professional Support"
        subtitle="For many Christians, both faith and professional guidance can work together in the healing process."
        imageSrc="https://images.pexels.com/photos/1260324/pexels-photo-1260324.jpeg?cs=srgb&dl=pexels-jahoo-1260324.jpg&fm=jpg"
        imageAlt="Peaceful nature"
      />

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                For many Christians, both faith and professional guidance can work together in the healing process. Just as people may seek medical care for physical health, counseling can be a way of caring for emotional and relational well-being.
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                Faith-integrated counseling can include space to reflect on spiritual beliefs, explore how faith provides strength during difficult seasons, and consider how biblical principles support healing and growth.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Counseling as Part of the Healing Journey */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Counseling as Part of the Healing Journey
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Seeking counseling is often a courageous step toward understanding, healing, and growth. For those who desire it, faith can be thoughtfully integrated into the counseling process while always respecting each person's individual beliefs and preferences.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mb-8">
            <p className="text-slate_blue-600 leading-relaxed">
              Counseling can provide a compassionate and supportive environment where individuals explore both emotional and spiritual aspects of their journey toward healing.
            </p>
          </div>
        </div>
      </section>

      {/* Examples of Counseling in the Bible */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Examples of Counseling in the Bible
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Throughout the Bible, we see examples of people seeking and receiving wise counsel during important moments in their lives. These examples remind us that guidance, encouragement, and accountability have always been part of how people grow and make wise decisions.
            </p>
          </AnimatedSection>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-slate_blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate_blue-800 mb-3">Jethro Advising Moses</h3>
              <p className="text-slate_blue-600 leading-relaxed mb-3">
                In the book of Exodus, Moses was overwhelmed by the responsibility of leading and judging the people of Israel. His father-in-law, Jethro, offered wise counsel to help him share the burden of leadership.
              </p>
              <p className="text-slate_blue-600 italic mb-3">
                "What you are doing is not good… The work is too heavy for you; you cannot handle it alone." — Exodus 18:17–18
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                Jethro encouraged Moses to seek help and establish a system of shared responsibility. Moses listened to this counsel, which allowed him to lead more effectively and care for the people more wisely.
              </p>
            </div>

            <div className="bg-slate_blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate_blue-800 mb-3">Nathan Confronting King David</h3>
              <p className="text-slate_blue-600 leading-relaxed mb-3">
                The prophet Nathan provided counsel and accountability to King David after David's sin involving Bathsheba. Nathan spoke truth in a way that helped David recognize his actions and turn back toward God.
              </p>
              <p className="text-slate_blue-600 italic mb-3">
                "Then David said to Nathan, 'I have sinned against the Lord.'" — 2 Samuel 12:13
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                This example shows how honest guidance and reflection can lead to repentance, healing, and restored relationship with God.
              </p>
            </div>

            <div className="bg-slate_blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate_blue-800 mb-3">Paul Encouraging and Guiding Early Christians</h3>
              <p className="text-slate_blue-600 leading-relaxed mb-3">
                In the New Testament, the apostle Paul frequently offered encouragement, guidance, and instruction to the early Christian communities through letters and personal mentoring.
              </p>
              <p className="text-slate_blue-600 italic mb-3">
                "Encourage one another and build each other up." — 1 Thessalonians 5:11
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                Paul's writings reflect the importance of supportive relationships where people can receive guidance, encouragement, and wisdom as they grow in faith and life.
              </p>
            </div>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm mt-8">
              <h3 className="font-semibold text-slate_blue-800 mb-4">A Biblical Pattern of Guidance and Support</h3>
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                These examples reflect a consistent theme throughout Scripture: people are not meant to navigate life's struggles alone. Wise counsel, supportive relationships, and thoughtful guidance can help individuals grow, make wise decisions, and move toward healing.
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                Counseling today can reflect these same principles by providing a safe and supportive environment where individuals can gain insight, receive encouragement, and pursue emotional and spiritual growth.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Biblical Encouragement for Healing */}
      <section className="py-16 sm:py-20 bg-sage-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Biblical Encouragement for Healing and Emotional Struggles
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              The Bible acknowledges that life can bring seasons of fear, grief, stress, and emotional pain. Scripture also reminds us that God cares deeply about our struggles and invites us to bring our burdens to Him.
            </p>
          </AnimatedSection>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-slate_blue-800 mb-3">When We Feel Anxious or Overwhelmed</h3>
              <p className="text-slate_blue-600 italic mb-2">
                "Cast all your anxiety on Him because He cares for you." — 1 Peter 5:7
              </p>
              <p className="text-slate_blue-600 leading-relaxed mb-4">
                This verse reminds us that we do not have to carry our worries alone. God invites us to bring our concerns and fears to Him.
              </p>
              <p className="text-slate_blue-600 italic mb-2">
                "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." — Philippians 4:6–7
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                These verses encourage people to turn toward God for peace and comfort during times of anxiety or stress.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-slate_blue-800 mb-3">When We Are Hurting or Brokenhearted</h3>
              <p className="text-slate_blue-600 italic mb-2">
                "The Lord is close to the brokenhearted and saves those who are crushed in spirit." — Psalm 34:18
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                This passage reminds us that God draws near to those who are experiencing deep emotional pain.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-slate_blue-800 mb-3">When We Feel Weary or Burdened</h3>
              <p className="text-slate_blue-600 italic mb-2">
                "Come to me, all you who are weary and burdened, and I will give you rest." — Matthew 11:28
              </p>
              <p className="text-slate_blue-600 leading-relaxed">
                Jesus invites those who are tired, overwhelmed, or discouraged to come to Him for rest and renewal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
              >
                <MessageCircle size={18} />
                Begin Your Faith-Centered Healing <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
