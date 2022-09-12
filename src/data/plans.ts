const personalPlan = [
  'Up to 5 page each group',
  'Up to 10 group page',
  '5 Days group page saved',
];
const regularPlan = [
  'Up to 15 page each group',
  'Download page up to 20 page',
  'Up to 10 group page',
  '15 Days group page saved',
];
const premiumPlan = [
  'Unlimited group pages',
  'Unlimited download page',
  'Unlimited page each group',
  'Customize sorting group pages',
  'Customize group page name',
  '30 Days group page saved',
];

export interface PlanCard {
  title: string;
  recommendedFor: string;
  price: string;
  subscriptionDuration: string;
  optionsIncluded: string[];
}

export const Plans: PlanCard[] = [
  {
    title: 'Personal',
    recommendedFor: 'Special first packet for all',
    price: '$8',
    subscriptionDuration: '/Month',
    optionsIncluded: personalPlan,
  },
  {
    title: 'Regular',
    recommendedFor: 'Recommended for personal pro',
    price: '$20',
    subscriptionDuration: '/Month',
    optionsIncluded: regularPlan,
  },
  {
    title: 'Premium',
    recommendedFor: 'Packet for Startup & Company',
    price: '$48',
    subscriptionDuration: '/Month',
    optionsIncluded: premiumPlan,
  },
];
