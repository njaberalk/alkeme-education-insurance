export const verticalConfig = {
  id: 'education', label: 'Education Insurance',
  heading: 'Get an Education Insurance Quote',
  subtext: 'Answer a few quick questions and our education specialists will design coverage for your institution.',
  businessTypes: [
    { value: 'k12-public', label: 'K-12 Public School' },
    { value: 'k12-private', label: 'K-12 Private School' },
    { value: 'charter', label: 'Charter School' },
    { value: 'college', label: 'College / University' },
    { value: 'preschool', label: 'Preschool / Daycare' },
    { value: 'trade', label: 'Trade / Vocational' },
  ],
  customQuestions: [
    { id: 'institution_type', label: 'What type of institution?', type: 'select', options: ['K-12 Public', 'K-12 Private', 'Charter', 'College/University', 'Preschool/Daycare', 'Trade/Vocational'] },
    { id: 'enrollment', label: 'Student enrollment?', type: 'select', options: ['Under 100', '100-500', '501-2000', '2001-10000', '10000+'] },
    { id: 'school_buses', label: 'Own school buses?', type: 'select', options: ['Yes', 'No'] },
  ],
  coverageOptions: ['General Liability', 'Professional Liability', 'Workers\' Compensation', 'Campus Property', 'Abuse & Molestation', 'Directors & Officers', 'Student Data Privacy', 'Student Transportation', 'Umbrella / Excess', 'Student Accident'],
};
