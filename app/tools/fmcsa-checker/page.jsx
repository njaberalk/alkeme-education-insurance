import CoverageNeedsAssessmentContent from '../coverage-needs-assessment/CoverageNeedsAssessmentContent';

export const metadata = {
  title: 'Coverage Needs Assessment for Educational Institutions',
  description: 'Find out exactly what insurance coverage your educational institution needs. Select your institution type to see recommended coverages, minimum limits, and compliance requirements.',
  alternates: {
    canonical: 'https://alkemeins.com/education/tools/coverage-needs-assessment/',
  },
};

export default function FMCSACheckerPage() {
  return <CoverageNeedsAssessmentContent />;
}
