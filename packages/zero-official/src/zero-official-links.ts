type Link = {
  url: string
  description: string
  icon: string
  disabled?: boolean
}

export const ZERO_OFFICIAL_LINKS: { [key: string]: Link } = {
  ZERO_WEBSITE: {
    url: 'https://zeroopensource.org/',
    description:
      'Official website of Zero Open Source - Explore our projects and mission',
    icon: 'https://zeroopensource.org/favicon.ico',
  },
  ZERO_DISCORD: {
    url: 'https://discord.gg/2a5HcmxvgC',
    description:
      'Join our community Discord server for discussions and support',
    icon: '',
  },
  ZERO_GITHUB: {
    url: 'https://github.com/zeroopensource',
    description:
      'Browse our open source repositories and contribute to our projects',
    icon: '',
  },
  ZERO_HUGGINGFACE: {
    url: 'https://huggingface.co/ZeroOpenSource',
    description: 'Explore our AI models and datasets on Hugging Face',
    icon: '',
  },
  ZERO_YOUTUBE: {
    url: 'https://www.youtube.com/@ZeroOpenSource',
    description: 'Watch our tutorials, project demos, and community highlights',
    icon: '',
  },
  ZERO_XTWITTER: {
    url: 'https://x.com/ZeroOpenSource',
    description:
      'Follow us on X (Twitter) for the latest updates and announcements',
    icon: '',
  },
  ZERO_FACEBOOK: {
    url: 'https://www.facebook.com/ZeroOpenSource',
    description: 'Connect with us on Facebook for community updates and events',
    icon: '',
  },
  ZERO_REDDIT: {
    url: 'https://www.reddit.com/r/ZeroOpenSource',
    description:
      'Join our Reddit community for discussions and project updates',
    icon: '',
  },
  ZERO_LINKEDIN: {
    url: 'https://www.linkedin.com/company/zeroopensource',
    description:
      'Follow our professional network for industry insights and opportunities',
    icon: '',
  },
  ZERO_BLUESKY: {
    url: 'https://bsky.app/profile/zeroopensource.bsky.social',
    description: 'Connect with us on Bluesky for decentralized social updates',
    icon: '',
  },
  ZERO_MASTODON: {
    url: 'https://mastodon.social/@ZeroOpenSource',
    description: 'Follow us on Mastodon for federated social updates',
    icon: '',
  },
  ZERO_MEDIUM: {
    url: 'https://medium.com/@zeroopensource',
    description: 'Read our in-depth articles and technical blog posts',
    icon: '',
  },
  ZERO_DEVTO: {
    url: 'https://dev.to/zeroopensource',
    description: 'Follow our developer-focused content and tutorials',
    icon: '',
  },
  ZERO_DAILYDEV: {
    url: 'https://app.daily.dev/zeroopensource',
    description: 'Check out our curated content for developers',
    icon: '',
  },
  ZERO_HASHNODE: {
    url: 'https://zeroopensource.hashnode.dev/',
    description: 'Read our technical blog posts and community articles',
    icon: '',
  },
  ZERO_PATREON: {
    url: 'https://www.patreon.com/c/ZeroOpenSource',
    description: 'Support our open source work through Patreon',
    icon: '',
  },
  ZERO_BMC: {
    url: 'https://buymeacoffee.com/zeroopensource',
    description: 'Show your support by buying us a coffee',
    icon: '',
  },
  // ZERO_LINKTREE: {
  //   url: 'https://linktr.ee/zeroopensource',
  //   description: 'Find all our important links and resources in one place',
  //   icon: '',
  //   disabled: true, // Duplicates our official links
  // },
  // ZERO_KOFI: {
  //   url: 'https://ko-fi.com/zeroopensource',
  //   description: 'Support our projects through Ko-fi monthly or one-time donations',
  //   icon: '',
  //   disabled: true, // Unable to connect to stripe
  // },
}
