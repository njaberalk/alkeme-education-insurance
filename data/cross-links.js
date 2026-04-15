// Cross-linking maps for dense internal linking
// Coverage -> which industries commonly need this coverage
export const coverageToIndustries = {
  'general-liability': ['k12-school-districts', 'charter-schools', 'private-schools', 'preschools-daycares'],
  'professional-liability': ['k12-school-districts', 'charter-schools', 'private-schools', 'colleges-universities'],
  'workers-compensation': ['k12-school-districts', 'colleges-universities', 'trade-vocational', 'preschools-daycares'],
  'campus-property': ['k12-school-districts', 'colleges-universities', 'private-schools', 'stem-robotics-programs'],
  'abuse-molestation': ['preschools-daycares', 'k12-school-districts', 'private-schools', 'after-school-programs'],
  'directors-officers': ['k12-school-districts', 'charter-schools', 'colleges-universities', 'private-schools'],
  'student-data-privacy': ['k12-school-districts', 'colleges-universities', 'online-education', 'stem-robotics-programs'],
  'student-transportation': ['k12-school-districts', 'special-education', 'after-school-programs', 'preschools-daycares'],
  'umbrella-excess': ['k12-school-districts', 'colleges-universities', 'charter-schools', 'private-schools'],
  'student-accident': ['k12-school-districts', 'trade-vocational', 'private-schools', 'after-school-programs'],
};

// Coverage -> which resources are most relevant
export const coverageToResources = {
  'general-liability': ['school-insurance-cost-guide', 'school-liability-guide', 'certificate-of-insurance-guide'],
  'professional-liability': ['school-liability-guide', 'title-ix-compliance-guide', 'education-insurance-glossary'],
  'workers-compensation': ['school-insurance-cost-guide', 'claims-process-guide', 'education-insurance-glossary'],
  'campus-property': ['school-insurance-cost-guide', 'claims-process-guide'],
  'abuse-molestation': ['abuse-molestation-coverage-guide', 'school-liability-guide', 'claims-process-guide'],
  'directors-officers': ['title-ix-compliance-guide', 'school-liability-guide', 'education-insurance-glossary'],
  'student-data-privacy': ['cyber-threats-schools-guide', 'school-insurance-cost-guide', 'education-insurance-glossary'],
  'student-transportation': ['student-transportation-guide', 'school-insurance-cost-guide', 'certificate-of-insurance-guide'],
  'umbrella-excess': ['school-insurance-cost-guide', 'school-liability-guide', 'claims-process-guide'],
  'student-accident': ['school-insurance-cost-guide', 'student-transportation-guide', 'education-insurance-glossary'],
};

// Industry -> top states for that industry
export const industryToStates = {
  'k12-school-districts': ['california', 'texas', 'new-york', 'florida', 'illinois'],
  'charter-schools': ['california', 'texas', 'florida', 'arizona', 'ohio'],
  'private-schools': ['california', 'new-york', 'florida', 'pennsylvania', 'massachusetts'],
  'colleges-universities': ['california', 'new-york', 'texas', 'pennsylvania', 'massachusetts'],
  'preschools-daycares': ['california', 'texas', 'florida', 'new-york', 'illinois'],
  'trade-vocational': ['california', 'texas', 'florida', 'ohio', 'pennsylvania'],
  'stem-robotics-programs': ['california', 'texas', 'new-york', 'florida', 'massachusetts'],
  'online-education': ['california', 'texas', 'florida', 'new-york', 'arizona'],
  'special-education': ['california', 'new-york', 'texas', 'pennsylvania', 'illinois'],
  'after-school-programs': ['california', 'texas', 'new-york', 'florida', 'georgia'],
};

// Industry -> relevant resources
export const industryToResources = {
  'k12-school-districts': ['school-insurance-cost-guide', 'school-liability-guide', 'title-ix-compliance-guide'],
  'charter-schools': ['school-insurance-cost-guide', 'certificate-of-insurance-guide', 'school-liability-guide'],
  'private-schools': ['school-insurance-cost-guide', 'abuse-molestation-coverage-guide', 'school-liability-guide'],
  'colleges-universities': ['title-ix-compliance-guide', 'cyber-threats-schools-guide', 'school-insurance-cost-guide'],
  'preschools-daycares': ['abuse-molestation-coverage-guide', 'school-insurance-cost-guide', 'school-liability-guide'],
  'trade-vocational': ['school-insurance-cost-guide', 'claims-process-guide', 'education-insurance-glossary'],
  'stem-robotics-programs': ['school-insurance-cost-guide', 'school-liability-guide', 'student-transportation-guide'],
  'online-education': ['cyber-threats-schools-guide', 'school-insurance-cost-guide'],
  'special-education': ['school-liability-guide', 'abuse-molestation-coverage-guide', 'claims-process-guide'],
  'after-school-programs': ['abuse-molestation-coverage-guide', 'school-insurance-cost-guide', 'student-transportation-guide'],
};
