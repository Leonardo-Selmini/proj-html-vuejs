// --import--
import Vue from 'vue';

// --export--
export default Vue.observable({
  header: [
    {
      label: 'home',
      href: '#'
    },
    {
      label: 'about',
      href: '#'
    },{
      label: 'services',
      href: '#'
    },{
      label: 'team',
      href: '#'
    },{
      label: 'blog',
      href: '#'
    }
  ],
  footer: [
    {
      name: 'About',
      links: [
        'The Company',
        'Istitutionals',
        'Socials & Events',
        'Innovation',
        'Enviroment',
        'Technology',
      ]
    },
    {
      name: 'Services',
      links: [
        'Audit & Assurance',
        'Financial Advisory',
        'Analytics M&A',
        'Middle Marketing',
        'Legal Consulting',
        'Regulatory Risk'
      ]
    },
    {
      name: 'Support',
      links: [
        'Responsibility',
        'Terms of Use',
        'About Cookies',
        'Privacy Policy',
        'Accessibility',
        'Information'
      ]
    }
  ]
})