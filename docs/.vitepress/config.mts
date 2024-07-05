import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const vitepressSidebarOptions = {
  documentRootPath: './docs'
};

// @ts-ignore
const { BASE: base = '/' } = process.env

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "Developer docs",
  description: "The official developer documentation for YNU.",
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "Developer docs",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api/' }
    ],

    sidebar: generateSidebar(vitepressSidebarOptions),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // local search
    search: {
      provider: 'local',
    },

    // footer
    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2024 YNU',
    },

    // edit link
    editLink: {
      pattern: 'https://github.com/ynu/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
  vite: {
    assetsInclude: ['**/*.yaml', '**/*.yml'],
    plugins: [
      viteStaticCopy({
        targets: [
          { src: 'api/*.yaml', dest: 'api/' }
        ]
      })
    ]
  }
})
