import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'f7414cf10bfd4a27a14ff28acfa91b0c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Jihyuk Lee',
  domain: 'sver.dev',
  author: 'Jihyuk Lee',

  // open graph metadata (optional)
  description: '언제나 노력하기 ✊',

  // social usernames (optional)
  // twitter: '#',
  github: 'sverdev',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: '939d3eeb835547e6b293573bdb58f2fd'
    },
    {
      title: 'Notice',
      pageId: '15f97b02b7084bd69fbb98beb6381154'
    },
    {
      title: 'About',
      pageId: 'd7791b36e0c9491692564ebe1a7d564d'
    },
    {
      title: 'Projects',
      pageId: '4d55bc7a421d491d89e2680147eb21a3'
    },
    {
      title: 'Blog',
      pageId: '0bae0d8cab894823a4d806d0506963f2'
    }
  ]
})

/*
    {
      title: 'Blog',
      pageId: '6b5a9caa3e3847b8bd29cdd7d663b77b'
    }
*/