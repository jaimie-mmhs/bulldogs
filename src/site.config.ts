export const site = {
  name: 'Machias Memorial High School',
  domain: 'mmhsbulldogs.org',
  addressLines: ['1 Bulldog Lane', 'Machias, ME 04654'],
  phone: '207-255-3812',
  fax: '207-255-3093',
  facebook: 'https://www.facebook.com/The-Official-Machias-Memorial-High-School-201739319918290',
  email: 'info@mmhsbulldogs.org',
  logo: '/assets/BulldogFull.png',
  url: 'https://test.mmhsbulldogs.org', //<--comment out when site goes live
  //url: 'https://www.mmhsbulldogs.org',  //<-- uncomment when site goes live
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Academics', href: '/academics', children: [
      { label: 'Library', href: '/academics/library' },
      { label: 'CTE', href: '/academics/cte' },
      { label: 'Special Education', href: 'https://www.aos96.org/special-education-services' },
      { label: 'JMG', href: '/academics/jmg' },
      { label: 'Guidance', href: '/academics/guidance' }
    ] },
    { label: 'About', href: '/about', children: [
      { label: 'Mission', href: '/about/mission' },
      { label: 'History', href: '/about/history' },
      { label: 'Staff', href: '/about/staff' },
      { label: 'Bulldog Gear', href: '/about/gear' },
      { label: 'Map', href: '/about/map' }
    ]},
    
    { label: 'Calendar', href: '/calendar' },
    { label: 'Meals', href: '/meals' },
    { label: 'Activities', href: '/activities', children: [
      { label: 'Clubs', href: '/activities/clubs' },
      { label: 'Athletics', href: '/activities/athletics' }
    ] },
    { label: 'Covid-19', href: '/covid' },
    { label: 'Forms', href: '/forms', children: [
      { label: 'Change of Address', href: 'https://forms.gle/DttSs3cXXvytjUNi9' },
      { label: 'SAT Saturday Registration', href: 'https://www.collegeboard.org/' },
      { label: 'Student Emergency Form', href: 'https://forms.gle/ws3bMPCUqmBwjekTA' }
    ] },
    { label: 'Technology', href: '/tech'}
  ]
};