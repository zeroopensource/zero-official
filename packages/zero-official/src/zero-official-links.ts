export type Link = {
  name: string
  url: string
  description: string
  icon: string
  disabled?: boolean
}

export const ZERO_OFFICIAL_LINKS: { [key: string]: Link } = {
  ZERO_WEBSITE: {
    name: 'ZeroOpenSource.org',
    url: 'https://zeroopensource.org/',
    description:
      'Official website of Zero Open Source - Explore our projects and mission',
    icon: 'https://zeroopensource.org/favicon.ico',
  },
  ZERO_DISCORD: {
    name: 'Discord',
    url: 'https://discord.gg/2a5HcmxvgC',
    description:
      'Join our community Discord server for discussions and support',
    icon: 'SiDiscord',
  },
  ZERO_GITHUB: {
    name: 'Github',
    url: 'https://github.com/zeroopensource',
    description:
      'Browse our open source repositories and contribute to our projects',
    icon: 'SiGithub',
  },
  ZERO_HUGGINGFACE: {
    name: 'Hugging Face',
    url: 'https://huggingface.co/ZeroOpenSource',
    description: 'Explore our AI models and datasets on Hugging Face',
    icon: 'SiHuggingface',
  },
  ZERO_YOUTUBE: {
    name: 'Youtube',
    url: 'https://www.youtube.com/@ZeroOpenSource',
    description: 'Watch our tutorials, project demos, and community highlights',
    icon: 'SiYoutube',
  },
  ZERO_XTWITTER: {
    name: 'X (Twitter)',
    url: 'https://x.com/ZeroOpenSource',
    description:
      'Follow us on X (Twitter) for the latest updates and announcements',
    icon: 'SiX',
  },
  ZERO_FACEBOOK: {
    name: 'Facebook',
    url: 'https://www.facebook.com/ZeroOpenSource',
    description: 'Connect with us on Facebook for community updates and events',
    icon: 'SiFacebook',
  },
  ZERO_REDDIT: {
    name: 'Reddit',
    url: 'https://www.reddit.com/r/ZeroOpenSource',
    description:
      'Join our Reddit community for discussions and project updates',
    icon: 'SiReddit',
  },
  ZERO_LINKEDIN: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/zeroopensource',
    description:
      'Follow our professional network for industry insights and opportunities',
    icon: 'SiLinkedin', // https://github.com/simple-icons/simple-icons/pull/11380, https://github.com/badges/shields/issues/10999
  },
  ZERO_BLUESKY: {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/zeroopensource.bsky.social',
    description: 'Connect with us on Bluesky for decentralized social updates',
    icon: 'SiBluesky',
  },
  ZERO_MASTODON: {
    name: 'Mastodon',
    url: 'https://mastodon.social/@ZeroOpenSource',
    description: 'Follow us on Mastodon for federated social updates',
    icon: 'SiMastodon',
  },
  ZERO_MEDIUM: {
    name: 'Medium',
    url: 'https://medium.com/@zeroopensource',
    description: 'Read our in-depth articles and technical blog posts',
    icon: 'SiMedium',
  },
  ZERO_DEVTO: {
    name: 'Dev.to',
    url: 'https://dev.to/zeroopensource',
    description: 'Follow our developer-focused content and tutorials',
    icon: 'SiDevdotto',
  },
  ZERO_DAILYDEV: {
    name: 'Daily.dev',
    url: 'https://app.daily.dev/zeroopensource',
    description: 'Check out our curated content for developers',
    icon: 'SiDailydotdev',
  },
  ZERO_HASHNODE: {
    name: 'Hashnode',
    url: 'https://zeroopensource.hashnode.dev/',
    description: 'Read our technical blog posts and community articles',
    icon: 'SiHashnode',
  },
  ZERO_PATREON: {
    name: 'Patreon',
    url: 'https://www.patreon.com/c/ZeroOpenSource',
    description: 'Support our open source work through Patreon',
    icon: 'SiPatreon',
  },
  ZERO_BMC: {
    name: 'Buy Me a Coffee',
    url: 'https://buymeacoffee.com/zeroopensource',
    description: 'Show your support by buying us a coffee',
    icon: 'SiBuymeacoffee',
  },
  // ZERO_LINKTREE: {
  //   url: 'https://linktr.ee/zeroopensource',
  //   description: 'Find all our important links and resources in one place',
  //   icon: 'SiLinktree',
  //   disabled: true, // Duplicates our official links
  // },
  // ZERO_KOFI: {
  //   url: 'https://ko-fi.com/zeroopensource',
  //   description: 'Support our projects through Ko-fi monthly or one-time donations',
  //   icon: 'SiKofi',
  //   disabled: true, // Unable to connect to stripe
  // },
}
