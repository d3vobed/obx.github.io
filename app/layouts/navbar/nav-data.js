import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'twitter',
    url: `https://x.com/${config.twitter}`,
    icon: 'twitter',
  },
  {
    label: 'google-developers',
    url: `https://developers.google.com/profile/u/${config.google}`,
    icon: 'google',
  },  {
    label: 'linkedin',
    url: `https://linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },  {
    label: 'medium',
    url: `https://medium.com/${config.medium}`,
    icon: 'medium',
  },  {
    label: 'gitlab',
    url: `https://gitlab.com/${config.gitlab}`,
    icon: 'gitlab',
  },  {
    label: 'hackerone',
    url: `https://hackerone.com/${config.hackerone}?type=user`,
    icon: 'hackerone',
  },
    {
    label: 'bugcrowd',
    url: `https://bugcrowd.com/${config.bugcrowd}`,
    icon: 'bugcrowd',
  },  {
    label: 'tryhackme',
    url: `https://tryhackme.com/r/p/${config.tryhackme}`,
    icon: 'tryhackme',
  },  {
    label: 'hackthebox',
    url: `https://app.hackthebox.com/profile/${config.hackthebox}`,
    icon: 'hackthebox',
  },
  {
    label: 'Youtube',
    url: `https://www.youtube.com/${config.youtube}`,
    icon: 'youtube',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'blender',
    url: `https://blenderartists.org/u/${config.blender}/summary`,
    icon: 'blender',
  }
]
