import CoverageNeedsAssessmentContent from './CoverageNeedsAssessmentContent';

export const metadata = {
  title: 'Coverage Needs Assessment for Educational Institutions',
  description: 'Find out exactly what insurance coverage your educational institution needs. Select your institution type to see recommended coverages, minimum limits, and compliance requirements.',
  alternates: {
    canonical: 'https://alkemeins.com/education/tools/coverage-needs-assessment/',
  },
  openGraph: {
    title: 'Coverage Needs Assessment | ALKEME Insurance Services',
    description: 'Interactive tool to determine your educational institution insurance requirements based on institution type.',
    url: 'https://alkemeins.com/education/tools/coverage-needs-assessment/',
    type: 'website',
  },
};

export default function CoverageNeedsAssessmentPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Coverage Needs Assessment for Educational Institutions',
      url: 'https://alkemeins.com/education/tools/coverage-needs-assessment/',
      applicationCategory: 'BusinessApplication',
      provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
      description: 'Interactive tool to determine insurance requirements for schools, colleges, and educational institutions.',
    },
  ];

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <CoverageNeedsAssessmentContent />
    </>
  );
}
