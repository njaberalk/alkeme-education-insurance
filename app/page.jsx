import HomeContent from './HomeContent';

export const metadata = {
  title: 'Educational Institution Insurance Solutions',
  description: 'ALKEME Insurance Services provides specialized insurance for schools, colleges, universities, and educational institutions. Coverage for general liability, professional liability, abuse and molestation, and more.',
  openGraph: {
    title: 'Educational Institution Insurance | ALKEME Insurance Services',
    description: 'Specialized insurance for schools, colleges, universities, and educational institutions across all 50 states.',
    url: 'https://alkemeins.com/education/',
  },
};

export default function HomePage() {
  return (
    <>
      <meta name="author" content="ALKEME Insurance Services" />
      <meta property="article:published_time" content="2025-06-01T00:00:00Z" />
      <meta property="article:modified_time" content="2026-04-01T00:00:00Z" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceAgency',
            name: 'ALKEME Insurance Services',
            url: 'https://alkemeins.com',
            telephone: '+18559255363',
            email: 'info@alkemeins.com',
            description: 'ALKEME Insurance Services provides specialized insurance solutions for educational institutions including K-12 schools, colleges, universities, and childcare centers across all 50 states.',
            areaServed: { '@type': 'Country', name: 'United States' },
            parentOrganization: {
              '@type': 'Organization',
              name: 'ALKEME Insurance Services',
              url: 'https://alkemeins.com',
            },
            foundingDate: '2003',
            numberOfEmployees: { '@type': 'QuantitativeValue', value: 100 },
            knowsAbout: ['Educational Institution Insurance', 'School Insurance', 'Title IX Compliance', 'FERPA Compliance'],
            hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional License', name: 'Licensed Insurance Brokerage' },
            serviceType: [
              'Educational Institution Insurance',
              'School District Insurance',
              'College and University Insurance',
              'Abuse and Molestation Coverage',
              'Professional Liability for Educators',
              'Student Accident Insurance',
              'School Property Insurance',
            ],
            citation: { '@type': 'CreativeWork', name: 'Insurance Information Institute', url: 'https://www.iii.org' },
            about: { '@type': 'Thing', name: 'Educational Institution Insurance' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What insurance does a school need?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'At minimum, most educational institutions need general liability, professional liability, workers\' compensation, commercial property, and abuse and molestation coverage. Depending on your institution, you may also need directors and officers liability, cyber liability, commercial auto, umbrella coverage, and student accident insurance.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does general liability cover abuse claims?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'In most cases, no. Standard general liability policies contain specific exclusions for abuse and molestation claims. Schools need a dedicated abuse and molestation policy to address this critical exposure.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you insure both small schools and large districts?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We work with single-site preschools and tutoring centers as well as large K-12 districts and universities. Our coverage programs are scaled and customized to match the size and complexity of each institution.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can I get a quote?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'In most cases, we can provide an initial quote within 24 to 48 hours of receiving your completed information. For more complex accounts, the process may take slightly longer to ensure we explore the best options.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you help with compliance requirements?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. We understand the insurance requirements that state education departments, charter authorizers, accreditation bodies, and licensing agencies impose on educational institutions. We help ensure your coverage aligns with your regulatory obligations.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can coverage be customized for my institution?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Every policy we place is built around your specific institution. We consider your student population, facilities, activities, claims history, and institutional goals to design a program that provides the right coverage at a competitive price.',
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Educational Institution Insurance Solutions',
            datePublished: '2025-06-01',
            dateModified: '2026-04-01',
            author: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
            publisher: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
          }),
        }}
      />
      <HomeContent />
    </>
  );
}
