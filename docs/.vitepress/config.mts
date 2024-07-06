import { defineConfig } from 'vitepress'
import { generateSidebar } from '@liudonghua123/vitepress-sidebar'
import preserveFilesPlugin from 'vite-plugin-preserve-files';

const vitepressSidebarOptions = {
  documentRootPath: './docs',
  useTitleFromFrontmatter: true,
  frontmatterTitleFieldName: 'sidebar_title',
};

// @ts-ignore
const { BASE: base = '/' } = process.env

const sidebar = generateSidebar(vitepressSidebarOptions);

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

    sidebar,

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
    plugins: [
      preserveFilesPlugin({
        fileTypes: ['.yaml', '.yml'] // Add any file extensions you want to copy
      })
    ],
  }
})
