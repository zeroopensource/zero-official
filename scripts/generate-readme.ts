import { writeFileSync } from 'fs'
import { ZERO_OFFICIAL_LINKS, Link } from '@zeroopensource/zero-official'

function getMarkdownIcon(icon: string): string {
  if (icon.startsWith('http')) {
    return `![icon](${icon})`
  }

  // fallback for icon names (e.g., SiGithub)
  const iconName = icon.replace(/^Si/, '')
  return `![${iconName}](https://img.shields.io/badge/${iconName}-000?style=flat&logo=${iconName}&logoColor=white)`
}

function generateReadme(links: { [key: string]: Link }): string {
  const header = `# zero-official

Welcome to the official resources for Zero Open Source. Explore our platforms and community links below.

---

`

  const body = Object.entries(links)
    .map(([key, { url, description, icon, name }]) => {
      const iconMd = getMarkdownIcon(icon)
      return `### ${iconMd} [${name}](${url})\n\n${description}\n`
    })
    .join('\n---\n\n')

  return `${header}${body}\n`
}

const readmeContent = generateReadme(ZERO_OFFICIAL_LINKS)
writeFileSync('README.md', readmeContent)

console.log('✅ README.md generated successfully.')
