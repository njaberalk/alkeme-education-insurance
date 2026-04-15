'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const coverages = [
  { title: 'General Liability', slug: 'general-liability', desc: 'Protection against third-party bodily injury and property damage claims arising from campus operations and school-sponsored activities.' },
  { title: 'Professional Liability (E&O)', slug: 'professional-liability', desc: 'Coverage for negligent instruction, failure to educate, wrongful discipline, and other professional errors affecting students.' },
  { title: 'Workers\' Compensation', slug: 'workers-compensation', desc: 'Mandatory coverage providing medical benefits and wage replacement to teachers, staff, and school employees injured on the job.' },
  { title: 'Campus Property', slug: 'campus-property', desc: 'Protection for school buildings, science labs, athletic facilities, playground equipment, and educational technology.' },
  { title: 'Abuse & Molestation', slug: 'abuse-molestation', desc: 'Essential coverage for sexual abuse, physical abuse, and misconduct claims that standard general liability policies exclude.' },
  { title: 'Directors & Officers (D&O)', slug: 'directors-officers', desc: 'Protection for school board members, trustees, and administrators against governance and management liability claims.' },
  { title: 'Student Data Privacy', slug: 'student-data-privacy', desc: 'Coverage for FERPA violations, EdTech data breaches, student record exposure, and privacy regulation penalties.' },
  { title: 'Student Transportation', slug: 'student-transportation', desc: 'School bus liability, field trip coverage, athletic team travel, and van pool operations for student transport.' },
  { title: 'Umbrella / Excess Liability', slug: 'umbrella-excess', desc: 'Additional layers of protection extending primary policy limits for catastrophic claims involving students, staff, or campus operations.' },
  { title: 'Student Accident Insurance', slug: 'student-accident', desc: 'Medical expense coverage for student injuries during school activities and athletics, regardless of fault.' },
];

export default function CoverageSolutions() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="coverage" className="bg-brand" style={{ padding: '8rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Coverage Solutions</p>
          <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Comprehensive Coverage for Every Institution</h2>
          <p className="text-cream font-light" style={{ lineHeight: '22px' }}>From general liability to specialized abuse and molestation protection, we provide the coverage lines that keep your institution compliant and protected.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {coverages.map((item) => (
            <Link key={item.title} href={`/coverage/${item.slug}/`} className="block border-2 border-ash/30 rounded-[2rem] p-8 group no-underline" style={{ background: 'rgba(255,255,255,0.04)', transition: 'all 0.24s' }}>
              <h3 className="text-stone font-bold mb-3 group-hover:text-gold" style={{ fontSize: '1.25rem', lineHeight: '1.5', transition: 'color 0.24s' }}>{item.title}</h3>
              <p className="text-cream font-light" style={{ fontSize: '0.85rem', lineHeight: '22px' }}>{item.desc}</p>
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.16em] mt-4 inline-block opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.24s' }}>Learn More &#8594;</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/#contact" className="inline-flex items-center justify-center border-2 border-gold bg-gold text-brand text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-stone hover:bg-stone hover:text-brand no-underline" style={{ padding: '0.8rem 1.8rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}>
            Discuss Your Coverage Needs
          </Link>
        </div>
      </div>
    </section>
  );
}
