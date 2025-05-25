import { writeFileSync } from 'fs'
import { ZERO_OFFICIAL_LINKS } from '@zeroopensource/zero-official'

type Link = {
  url: string
  description: string
  icon: string // can be a URL or a string like "SiDiscord"
}

function getMarkdownIcon(icon: string): string {
  if (icon.startsWith('http')) {
    return `![icon](${icon})`
  }

  // fallback for icon names (e.g., SiGithub)
  const iconName = icon.replace(/^Si/, '')
  return `![${iconName}](https://img.shields.io/badge/${iconName}-000?style=flat&logo=${iconName}&logoColor=white)`
}

function titleCase(key: string): string {
  return key
    .toLowerCase()
    .replace(/^zero_/, '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
}

function generateReadme(links: { [key: string]: Link }): string {
  const header = `# 🌐 Zero Open Source Official Links

Welcome to the official resources for Zero Open Source. Explore our platforms and community links below.

---

`

  const body = Object.entries(links)
    .map(([key, { url, description, icon }]) => {
      const title = titleCase(key)
      const iconMd = getMarkdownIcon(icon)
      return `### ${iconMd} [${title}](${url})\n\n${description}\n`
    })
    .join('\n---\n\n')

  return `${header}${body}\n`
}

const readmeContent = generateReadme(ZERO_OFFICIAL_LINKS)
writeFileSync('README.md', readmeContent)

console.log('✅ README.md generated successfully.')
