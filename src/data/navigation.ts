export interface Navigation {
  link: string;
  label: string;
}

export const header: Navigation[] = [
  { link: '/home', label: 'About' },
  { link: '/*', label: 'How it works' },
  { link: '/*', label: 'Pricing' },
  { link: '/*', label: 'Solution' },
  { link: '/*', label: 'Features' },
];

export const footer: Navigation[] = [
  { link: '/*', label: 'Privacy Policy' },
  { link: '/*', label: 'Terms and Conditions' },
  { link: '/*', label: 'Contact Us' },
  { link: '/*', label: 'Careers' },
];

