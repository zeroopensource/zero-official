type Link = {
  name: string
  url: string
  description: string
  icon: string
  disabled?: boolean
}

export const ZERO_OFFICIAL_LINKS: Link[] = [
  {
    name: 'ZERO_WEBSITE',
    url: 'https://zeroopensource.org/',
    description:
      'Official website of Zero Open Source - Explore our projects and mission',
    icon: 'https://zeroopensource.org/favicon.ico',
  },
  {
    name: 'ZERO_DISCORD',
    url: 'https://discord.gg/2a5HcmxvgC',
    description:
      'Join our community Discord server for discussions and support',
    icon: '',
  },
  {
    name: 'ZERO_GITHUB',
    url: 'https://github.com/zeroopensource',
    description:
      'Browse our open source repositories and contribute to our projects',
    icon: '',
  },
  {
    name: 'ZERO_HUGGINGFACE',
    url: 'https://huggingface.co/ZeroOpenSource',
    description: 'Explore our AI models and datasets on Hugging Face',
    icon: '',
  },
  {
    name: 'ZERO_YOUTUBE',
    url: 'https://www.youtube.com/@ZeroOpenSource',
    description: 'Watch our tutorials, project demos, and community highlights',
    icon: '',
  },
  {
    name: 'ZERO_XTWITTER',
    url: 'https://x.com/ZeroOpenSource',
    description:
      'Follow us on X (Twitter) for the latest updates and announcements',
    icon: '',
  },
  {
    name: 'ZERO_FACEBOOK',
    url: 'https://www.facebook.com/ZeroOpenSource',
    description: 'Connect with us on Facebook for community updates and events',
    icon: '',
  },
  {
    name: 'ZERO_REDDIT',
    url: 'https://www.reddit.com/r/ZeroOpenSource',
    description:
      'Join our Reddit community for discussions and project updates',
    icon: '',
  },
  {
    name: 'ZERO_LINKEDIN',
    url: 'https://www.linkedin.com/company/zeroopensource',
    description:
      'Follow our professional network for industry insights and opportunities',
    icon: '',
  },
  {
    name: 'ZERO_BLUESKY',
    url: 'https://bsky.app/profile/zeroopensource.bsky.social',
    description: 'Connect with us on Bluesky for decentralized social updates',
    icon: '',
  },
  {
    name: 'ZERO_MASTODON',
    url: 'https://mastodon.social/@ZeroOpenSource',
    description: 'Follow us on Mastodon for federated social updates',
    icon: '',
  },
  {
    name: 'ZERO_MEDIUM',
    url: 'https://medium.com/@zeroopensource',
    description: 'Read our in-depth articles and technical blog posts',
    icon: '',
  },
  {
    name: 'ZERO_DEVTO',
    url: 'https://dev.to/zeroopensource',
    description: 'Follow our developer-focused content and tutorials',
    icon: '',
  },
  {
    name: 'ZERO_DAILYDEV',
    url: 'https://app.daily.dev/zeroopensource',
    description: 'Check out our curated content for developers',
    icon: '',
  },
  {
    name: 'ZERO_HASHNODE',
    url: 'https://zeroopensource.hashnode.dev/',
    description: 'Read our technical blog posts and community articles',
    icon: '',
  },
  {
    name: 'ZERO_PATREON',
    url: 'https://www.patreon.com/c/ZeroOpenSource',
    description: 'Support our open source work through Patreon',
    icon: '',
  },
  {
    name: 'ZERO_BMC',
    url: 'https://buymeacoffee.com/zeroopensource',
    description: 'Show your support by buying us a coffee',
    icon: '',
  },
  // {
  //   name: 'ZERO_LINKTREE',
  //   url: 'https://linktr.ee/zeroopensource',
  //   description: 'Find all our important links and resources in one place',
  //   icon: '',
  //   disabled: true, // Duplicates our official links
  // },
  // {
  //   name: 'ZERO_KOFI',
  //   url: 'https://ko-fi.com/zeroopensource',
  //   description: 'Support our projects through Ko-fi monthly or one-time donations',
  //   icon: '',
  //   disabled: true, // Unable to connect to stripe
  // },
]
