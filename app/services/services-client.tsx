'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatedSection } from '../components/animated-section';
import { PageHero } from '../components/page-hero';
import { ChevronDown } from 'lucide-react';
import {
  Brain,
  Eye,
  Heart,
  Shield,
  Users,
  Puzzle,
  Lightbulb,
  BookOpen,
  Sparkles,
  Baby,
  TreePine,
  HandHeart,
  ArrowRight,
  Flower2,
  Scale,
  MessageCircle,
  Target,
} from 'lucide-react';

const concerns = [
  'Anxiety, stress, and emotional overwhelm',
  'Depression and low mood',
  'OCD and intrusive thoughts',
  'Stress management and burnout',
  'Life transitions and career uncertainty',
  'Anger management and emotional regulation',
  'Relationship and marriage challenges',
  'Premarital counseling',
  'Parenting concerns and family stress',
  'Divorce recovery',
  'Social skills, friendships, and peer conflicts (for children, adolescents, and adults)',
  'Emotional and behavioral challenges in children and adolescents',
  'College student stress and adjustment',
  'Marriage enrichment',
  'Strengthening healthy marriages and families',
  'Support for individuals with diverse ways of thinking, learning, and experiencing the world',
  'Invisible wounds that may not be easily seen by others but still have a deep impact on emotional and relational wellbeing',
  'Trauma and abuse recovery',
  'Sexual abuse and sexual assault counseling',
  'Counseling for children and adolescents',
  'Parenting support and attachment concerns',
  'Personal growth and emotional well-being',
  'Faith-based / Christ-centered counseling (for those who desire it)',
];

function ApproachCard({ approach, index }: { approach: any; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = approach?.icon ?? Heart;

  return (
    <AnimatedSection key={index} delay={index * 0.05}>
      <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all h-full flex flex-col">
        <div className="flex-1">
          <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
            <Icon size={20} className="text-gold-500" />
          </div>
          <h3 className="font-serif text-lg text-slate_blue-800 mb-2">{approach?.title ?? ''}</h3>
          <p className="text-slate_blue-600 text-sm leading-relaxed">{approach?.desc ?? ''}</p>
        </div>
        {approach?.full && (
          <>
            {!expanded ? (
              <button
                onClick={() => setExpanded(true)}
                className="mt-3 -mx-6 px-6 py-0.5 -mb-6 border-t border-slate_blue-100 hover:bg-slate_blue-50 transition-colors flex items-center justify-center w-[calc(100%+48px)]"
              >
                <span className="text-gold-500 text-xs font-medium">-- More --</span>
              </button>
            ) : (
              <>
                <div className="mt-3 pt-2 border-t border-slate_blue-100 text-slate_blue-600 text-sm leading-relaxed whitespace-pre-wrap">
                  {approach?.full}
                </div>
                <button
                  onClick={() => setExpanded(false)}
                  className="mt-2 -mx-6 px-6 py-0.5 -mb-6 hover:bg-slate_blue-50 transition-colors flex items-center justify-center w-[calc(100%+48px)]"
                >
                  <span className="text-gold-500 text-xs font-medium">-- Less --</span>
                </button>
              </>
            )}
          </>
        )}
      </div>
    </AnimatedSection>
  );
}

const traumaHealing = [
  'Trauma and difficult life experiences in childhood or adulthood',
  'Healing from sexual abuse or sexual assault',
  'Support for individuals navigating harmful or controlling relationships',
  'Support for families navigating DCFS involvement',
];

const approaches = [
  {
    icon: Lightbulb,
    title: 'Insight-Oriented Therapy',
    desc: 'Helps individuals develop deeper understanding of inner experiences, patterns, and relationships. Greater awareness often leads to recognizing recurring patterns, understanding past influences, and developing healthier responses.',
    full: 'Insight-oriented therapy helps individuals develop a deeper understanding of their inner experiences, patterns, and relationships.\n\nSometimes present struggles are connected to earlier life experiences or long-standing patterns that are not always immediately obvious. Through thoughtful exploration, individuals can gain insight into how past experiences may be shaping current emotions, beliefs, and behaviors.\n\nGreater awareness often helps individuals:\n• Recognize recurring emotional or relational patterns\n• Understand the influence of past experiences\n• Develop healthier ways of responding to challenges\n• Experience greater emotional freedom and self-understanding',
  },
  {
    icon: Brain,
    title: 'Cognitive Behavioral Therapy (CBT)',
    desc: 'Focuses on the connection between thoughts, emotions, and behaviors. Helps identify unhelpful thinking patterns and develop more balanced perspectives, improving coping strategies and reducing anxiety and depression symptoms.',
    full: 'Cognitive Behavioral Therapy focuses on the connection between thoughts, emotions, and behaviors.\n\nSometimes unhelpful thought patterns can contribute to feelings such as anxiety, discouragement, or self-doubt. CBT helps individuals identify these patterns and develop healthier ways of thinking and responding.\n\nCBT may help individuals:\n• Recognize negative or unhelpful thinking patterns\n• Develop more balanced perspectives\n• Improve coping strategies\n• Reduce symptoms of anxiety and depression',
  },
  {
    icon: Eye,
    title: 'EMDR Therapy',
    desc: 'Eye Movement Desensitization and Reprocessing helps the brain reprocess painful memories so they no longer carry the same emotional intensity. Many find distressing memories feel less overwhelming and a greater sense of peace emerges.',
    full: 'Sometimes painful experiences stay with us long after the moment has passed. Memories of trauma, loss, or deeply distressing events can feel as though they are still happening in the present. If you have ever wondered why certain memories or triggers still carry so much emotional weight, you are not alone—and healing is possible.\n\nEye Movement Desensitization and Reprocessing (EMDR) is a well-researched therapeutic approach designed to help people process and heal from traumatic or distressing experiences. Rather than simply talking about the past, EMDR helps the brain reprocess painful memories, so they no longer carry the same emotional intensity.\n\nDuring EMDR therapy, your counselor will gently guide you to focus on specific memories while engaging in bilateral stimulation—often through guided eye movements, tapping, or alternating sounds. This process helps the brain organize and reprocess memories that may have been "stuck," allowing them to be stored in a healthier and more adaptive way.\n\nMany people find that after EMDR therapy:\n• Distressing memories feel less overwhelming\n• Emotional triggers lose their intensity\n• Negative beliefs about themselves begin to shift\n• A greater sense of peace and clarity emerges\n\nA Faith-Informed Approach to Healing\n\nFor those who desire it, EMDR can be integrated with a Christian understanding of healing and restoration. Scripture reminds us that God is near to the brokenhearted and cares deeply about our pain. In counseling, we believe emotional healing can be part of the way God restores what has been wounded in our lives.\n\nEMDR does not replace faith—it can work alongside it. As painful memories are processed, many clients find space to reconnect with hope, truth, and the deeper identity they have in Christ.\n\nOur goal is to create a safe, compassionate environment where you can explore your story without judgment, trusting that healing is possible. Whether your struggles come from past trauma, anxiety, grief, or difficult life experiences, EMDR may be one pathway toward renewed peace and wholeness.',
  },
  {
    icon: Scale,
    title: 'Dialectical Behavior Therapy (DBT)',
    desc: 'A skills-based approach focusing on emotional regulation, distress tolerance, mindfulness, and improving communication and relationships. Especially helpful for managing intense emotions.',
    full: 'Dialectical Behavior Therapy is a skills-based approach that helps individuals manage intense emotions and develop healthier ways of responding to stress.\n\nDBT focuses on building practical skills that support emotional balance, relationships, and resilience.\n\nSome areas of focus include:\n• Emotional regulation\n• Distress tolerance during difficult moments\n• Mindfulness and present-moment awareness\n• Improving communication and relationships\n\nThese skills can be especially helpful for individuals who feel overwhelmed by strong emotions or interpersonal challenges.',
  },
  {
    icon: Heart,
    title: 'Attachment-Based Therapy',
    desc: 'Explores how early relationships shape the way individuals connect with others and experience emotional safety. Helps develop healthier, more secure relationships and greater emotional trust.',
    full: 'Attachment-based therapy focuses on how early relationships and life experiences shape the way individuals connect with others and experience emotional safety.\n\nFrom early childhood onward, people develop patterns of attachment that influence how they trust, communicate, and respond within relationships. When early attachment experiences involve inconsistency, neglect, trauma, or emotional disconnection, individuals may struggle with feelings of insecurity, fear of abandonment, difficulty trusting others, or challenges with emotional closeness.\n\nAttachment-focused counseling helps individuals explore these patterns in a supportive and compassionate environment. Through this process, individuals can begin to develop greater emotional security and healthier ways of relating to others.\n\nAttachment-based work may help individuals:\n• Develop healthier and more secure relationships\n• Improve emotional connection in marriage or partnerships\n• Strengthen parent-child relationships\n• Understand how past experiences influence current relational patterns\n• Build greater emotional safety and trust\n\nThis approach is often helpful for individuals, couples, and families seeking deeper relational healing.',
  },
  {
    icon: Shield,
    title: 'Trauma-Focused Counseling',
    desc: 'Creates a safe environment to process difficult experiences at a comfortable pace. Includes EMDR, insight-oriented exploration, mindfulness, and emotional regulation skills.',
    full: 'Trauma-focused counseling recognizes that difficult or overwhelming experiences can have lasting effects on emotional health, relationships, and daily functioning.\n\nExperiences such as abuse, neglect, assault, loss, or other distressing events can sometimes remain "stored" in the nervous system, continuing to influence how individuals think, feel, and respond long after the event has passed.\n\nTrauma-informed care focuses on creating a safe and supportive environment where individuals can process these experiences at a pace that feels comfortable and manageable.\n\nTrauma-focused counseling may include approaches such as:\n• EMDR therapy\n• Insight-oriented exploration\n• Mindfulness and emotional regulation skills\n• Developing healthy coping strategies\n• Strengthening emotional resilience\n\nThe goal of trauma-focused counseling is not only to process painful experiences but also to help individuals rediscover a sense of safety, stability, and hope.',
  },
  {
    icon: Target,
    title: 'Acceptance & Commitment Therapy (ACT)',
    desc: 'Helps individuals respond to difficult thoughts and emotions in healthier ways. Focuses on developing psychological flexibility and taking meaningful steps toward valued living.',
    full: 'Acceptance and Commitment Therapy helps individuals learn how to respond to difficult thoughts and emotions in healthier ways rather than feeling controlled by them.\n\nACT focuses on developing psychological flexibility, which means learning how to make choices that align with one\'s values even when emotions are challenging.\n\nIn counseling, ACT may help individuals:\n• Develop greater awareness of thoughts and emotions\n• Reduce the struggle against painful feelings\n• Clarify personal values and priorities\n• Take meaningful steps toward the life they want to live',
  },
  {
    icon: BookOpen,
    title: 'Faith-Integrated Counseling',
    desc: 'For clients who desire it, counseling can include reflection on themes of grace, healing, restoration, and hope using Scripture, prayer, and Biblical guidance. Always guided by client preferences.',
    full: 'For clients who desire it, counseling can include a faith-centered perspective.\n\nMany people find that their spiritual beliefs are an important source of strength during difficult seasons. Our counselors can thoughtfully integrate Christian faith into the counseling process while always respecting each client\'s personal beliefs and preferences.\n\nFaith integration may include reflection on themes such as grace, healing, restoration, and hope using Scripture, prayer and Biblical guidance.',
  },
  {
    icon: Sparkles,
    title: 'Solution-Focused Counseling',
    desc: 'Gently helps identify what is already working, what matters most, and what small steps can move toward a better life. Focuses on strengths, resilience, and resources already within.',
    full: 'Life\'s challenges can sometimes leave us feeling stuck, overwhelmed, or unsure of the next step forward. In solution-focused, strength-based counseling, the focus is not only on the problems you are facing, but also on the strengths, resilience, and resources you already carry within you.\n\nRather than spending all our time revisiting what has gone wrong, this approach gently helps you identify what is already working, what matters most to you, and what small steps can move you toward the life you hope to experience. Even in difficult seasons, many people discover that they have more strength and wisdom than they realize.\n\nRooted in Faith and Hope\n\nFrom a Christian perspective, we believe every person is created in God\'s image and carries inherent worth, dignity, and purpose. Even when life feels heavy, God often provides strengths, supportive relationships, and moments of grace that guide people toward healing. In counseling, we seek to help you notice those strengths, build on them, and move toward greater hope, clarity, and restoration—trusting that growth and healing are possible.',
  },
  {
    icon: Baby,
    title: 'Play Therapy',
    desc: 'Uses toys, creative activities, and imagination to help children communicate experiences and emotions in a way that feels natural and safe. A gentle, trauma-informed approach for young ones.',
    full: 'Children often express thoughts and feelings through play rather than words. Play therapy uses toys, creative activities, and imagination to help children communicate experiences, emotions, and struggles in a way that feels natural and safe.\n\nDuring play therapy, a counselor carefully observes and gently guides the child\'s play. Through this process, children can begin to process difficult experiences, build emotional skills, and develop healthier ways to express their feelings. Play becomes a language that helps children share what may be hard to say out loud.\n\nA Gentle, Trauma-Informed Approach\n\nSome children come to counseling after experiencing stress, loss, or trauma. A trauma-informed approach means the counseling space remains calm, predictable, and safe. The counselor follows the child\'s pace and respects the child\'s comfort level. This supportive environment helps children rebuild a sense of safety, confidence, and trust.\n\nRooted in Faith and Care\n\nFrom a Christian perspective, every child carries deep value as someone created and loved by God. Faith can offer hope, comfort, and a reminder that children never walk through difficult moments alone. Counseling seeks to support emotional healing while honoring the dignity, strengths, and unique story of each child.\n\nPlay therapy offers children a caring space to explore feelings, grow in confidence, and move toward healing and hope.',
  },
  {
    icon: TreePine,
    title: 'Family Systems Therapy',
    desc: 'Views each family as a connected system. Helps families understand communication patterns, strengthen relationships, and create healthier ways of supporting one another.',
    full: 'Family relationships shape the way people grow, communicate, and experience life. Family Systems Therapy views each family as a connected system. Changes in one person often affect the whole family, just as the family environment influences each individual.\n\nFamily Systems Therapy helps families understand patterns of communication, roles, and relationships that may be creating stress or conflict. Through counseling, family members can begin to see one another with greater understanding and compassion. The goal involves strengthening relationships, improving communication, and creating healthier ways of supporting one another.\n\nA Caring and Respectful Approach\n\nCounseling provides a safe space where each family member receives the opportunity to feel heard and valued. The process moves at a pace that respects everyone\'s experiences and emotions. Gentle guidance helps families recognize strengths, repair misunderstandings, and build stronger connections.\n\nA Faith-Centered Perspective\n\nA Christian perspective recognizes the family as an important place for love, growth, forgiveness, and support. Scripture often speaks about caring for one another with patience, grace, and humility. Counseling can help families move toward these values while working through challenges together.\n\nFamily Systems Therapy encourages families to grow in understanding, strengthen their relationships, and move toward greater unity, healing, and hope.',
  },
  {
    icon: Puzzle,
    title: 'Internal Family Systems (IFS)',
    desc: 'Helps people explore different inner "parts" with curiosity and compassion. Recognizes protective parts formed during difficult experiences and brings healing to those carrying pain.',
    full: 'People often notice different thoughts, emotions, or "parts" of themselves showing up during stressful moments. One part may feel anxious, another may try to stay in control, while another part may carry hurt from past experiences. Internal Family Systems (IFS) Therapy helps people gently explore these inner parts with curiosity, compassion, and understanding.\n\nRather than viewing these parts as problems, IFS recognizes that many of them formed as ways to protect us during difficult experiences. Counseling helps people understand these inner responses and bring healing to the parts that carry pain, fear, or shame. As this process unfolds, many people discover a deeper sense of calm, clarity, and self-understanding.\n\nA Gentle and Compassionate Process\n\nIFS therapy moves at a careful and respectful pace. The counselor helps create a safe environment where individuals can explore their inner experiences without judgment. This approach often feels empowering because it honors each person\'s story while helping them reconnect with their inner strengths.\n\nA Faith-Informed Perspective\n\nFrom a Christian perspective, many people find comfort in recognizing that God sees and cares for every part of their story. Faith reminds us that we are deeply known and loved. Counseling can help people experience greater compassion for themselves while reconnecting with truth, grace, and the healing presence of God.\n\nInternal Family Systems Therapy invites people to move toward deeper peace, healing, and wholeness—both within themselves and in their relationship with God.',
  },
  {
    icon: Flower2,
    title: 'Exposure & Response Prevention (ERP)',
    desc: 'Helps people gradually face fears while learning new ways to respond, building confidence and freedom from anxiety-driven patterns. Done slowly and with care.',
    full: 'Intrusive thoughts, fears, or worries can sometimes feel overwhelming and difficult to manage. People may try to reduce the anxiety by avoiding certain situations or by repeating behaviors meant to create relief. Exposure and Response Prevention (ERP) is a therapeutic approach that helps people gradually face these fears while learning new ways to respond.\n\nIn ERP therapy, a counselor gently helps you take small, manageable steps toward situations or thoughts that trigger anxiety. At the same time, you practice resisting the urge to perform the behaviors that normally bring temporary relief. Over time, the brain learns that the fear becomes more manageable and that anxiety can decrease without relying on those patterns.\n\nThis process happens slowly and with care. The goal is not to overwhelm you, but to help you build confidence and develop a greater sense of freedom from anxiety.\n\nA Supportive and Compassionate Process\n\nERP therapy takes place in a safe and supportive counseling environment. Each step is planned together and moves at a pace that feels manageable. Many people find that, with time and practice, their fears lose much of their power and daily life begins to feel more peaceful.\n\nA Faith-Informed Perspective\n\nFrom a Christian perspective, many people find comfort in remembering that they do not have to face their fears alone. Faith can provide strength, courage, and hope during difficult moments. Counseling can become a place where individuals learn new tools for managing anxiety while also drawing on the peace and reassurance that faith provides.\n\nERP therapy offers a pathway toward greater freedom, helping people move forward with renewed confidence, courage, and hope.',
  },
];

export function ServicesClient() {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="We integrate evidence-based therapies with compassionate listening, a trauma-informed perspective, and a Christ-centered foundation."
        imageSrc="https://cdn.abacus.ai/images/3434c543-a3dd-4644-a67e-5fa3214f39c0.jpg"
        imageAlt="Calm misty lake surrounded by mountains and forest"
      />

      {/* What We Help With */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              What We Help With
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto mb-10">
              We work with clients facing a variety of challenges. If you are facing a challenge not listed here, you are still welcome to reach out.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {concerns?.map?.((concern, i) => (
              <AnimatedSection key={i} delay={i * 0.03}>
                <div className="flex items-center gap-3 bg-sage-50 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all">
                  <HandHeart size={16} className="text-gold-400 flex-shrink-0" />
                  <span className="text-slate_blue-700 text-sm">{concern ?? ''}</span>
                </div>
              </AnimatedSection>
            )) ?? []}
          </div>

          <AnimatedSection>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Trauma and Healing Support
            </h3>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto mb-10">
              Specialized support for those healing from difficult experiences.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {traumaHealing?.map?.((item, i) => (
              <AnimatedSection key={i} delay={i * 0.03}>
                <div className="flex items-start gap-3 bg-sage-50 rounded-lg px-4 py-4 shadow-sm hover:shadow-md transition-all h-full">
                  <HandHeart size={16} className="text-gold-400 flex-shrink-0 mt-1" />
                  <span className="text-slate_blue-700 text-sm leading-relaxed">{item ?? ''}</span>
                </div>
              </AnimatedSection>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Therapeutic Approaches */}
      <section className="py-16 sm:py-20 bg-slate_blue-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Our Therapeutic Approaches
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto mb-12">
              Counseling is not a one-size-fits-all process. Our counselors thoughtfully integrate different approaches depending on each person&apos;s needs, goals, and experiences.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approaches?.map?.((approach, i) => (
              <ApproachCard key={i} approach={approach} index={i} />
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Specialized Counseling Services */}
      <section className="py-16 sm:py-20 bg-slate_blue-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-4">
              Specialized Counseling Services
            </h2>
            <p className="text-slate_blue-600 text-center max-w-2xl mx-auto mb-12">
              Explore our in-depth counseling services designed for specific life challenges and concerns.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { title: 'Children & Adolescents', href: '/counseling/children-adolescents' },
              { title: 'Trauma & Abuse Recovery', href: '/counseling/trauma-abuse' },
              { title: 'Marriage & Couples Counseling', href: '/counseling/marriage-couples' },
              { title: 'Mentoring for Youth', href: '/counseling/mentoring-youth' },
              { title: 'Depression & Anxiety', href: '/counseling/depression-anxiety' },
              { title: 'Grief & Loss', href: '/counseling/grief-loss' },
              { title: 'Divorce Recovery', href: '/counseling/divorce-recovery' },
              { title: 'Stress & Burnout Recovery', href: '/counseling/stress-burnout' },
              { title: 'Parenting Support', href: '/counseling/parenting-support' },
              { title: 'Faith & Counseling', href: '/counseling/faith-counseling' },
              { title: 'Helpers & Caregivers', href: '/counseling/helpers-caregivers' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <Link href={item.href}>
                  <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full border-l-4 border-gold-400">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-slate_blue-800 leading-snug flex-1">{item.title}</h3>
                      <ArrowRight size={18} className="text-gold-400 mt-0.5 flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How Approaches Work Together */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl text-slate_blue-800 text-center mb-6">
                How These Approaches Work Together
              </h2>
              <div className="space-y-4 text-slate_blue-600 leading-relaxed">
                <p>Counseling is not a one-size-fits-all process. Our counselors thoughtfully integrate different therapeutic approaches depending on each person's needs, goals, and experiences.</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-400 mt-1">•</span>
                    <span><em>Trauma-focused care</em> may include <strong>EMDR and DBT skills</strong> for emotional regulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-400 mt-1">•</span>
                    <span><em>Relationship work</em> may incorporate <strong>attachment-based therapy and insight-oriented exploration</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-400 mt-1">•</span>
                    <span><em>Anxiety or depression</em> may benefit from <strong>CBT and ACT strategies</strong></span>
                  </li>
                </ul>
                <p>By thoughtfully combining these approaches, counseling can address both <strong>the deeper roots of emotional struggles and the practical tools needed for everyday life</strong>.</p>
              </div>
              <div className="text-center mt-10">
                <Link
                  href="/contact?subject=appointment-request"
                  className="inline-flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gold-300 transition-all shadow-md"
                >
                  <MessageCircle size={18} />
                  Schedule an Appointment <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
