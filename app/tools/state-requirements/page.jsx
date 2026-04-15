import StateRequirementsContent from './StateRequirementsContent';

export const metadata = {
  title: 'State Education Insurance Requirements Lookup',
  description: 'Look up education insurance requirements by state. See compulsory attendance ages, workers comp rules, DOE agencies, and state-specific regulations for all 50 states.',
  alternates: {
    canonical: 'https://alkemeins.com/education/tools/state-requirements/',
  },
  openGraph: {
    title: 'State Education Insurance Requirements Lookup | ALKEME Insurance Services',
    description: 'Interactive tool to look up education insurance requirements for any US state.',
    url: 'https://alkemeins.com/education/tools/state-requirements/',
    type: 'website',
  },
};

export default function StateRequirementsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'State Education Insurance Requirements Lookup',
    url: 'https://alkemeins.com/education/tools/state-requirements/',
    applicationCategory: 'BusinessApplication',
    provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
    description: 'Look up education insurance requirements for any US state including compulsory attendance, workers comp, and regulatory information.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StateRequirementsContent />
    </>
  );
}
