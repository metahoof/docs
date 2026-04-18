import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "MetaHoof | Whitepaper",
    description:
      "Explore the MetaHoof whitepaper covering its Agentic Game Economy, racing-driven value flows, strategic participation systems, sustainability model, and multi-chain infrastructure.",
    themeConfig: {
      logo: "/img/logo.png",
      siteTitle: false,

      nav: [
        { text: "Home", link: "/" },
        { text: "Whitepaper", link: "/whitepaper/introduction" },
        { text: "Website", link: "https://metahoof.com" },
        { text: "Play Now", link: "https://play.metahoof.com" },
      ],
      appearance: "force-dark",
      cleanUrls: true,

      search: {
        provider: "local",
      },

      editLink: {
        pattern: "https://github.com/metahoof/docs/edit/main/docs/:path",
      },

      sidebar: {
        "/whitepaper/": [
          {
            text: "Overview",
            items: [{ text: "Introduction", link: "/whitepaper/introduction" }],
          },
          {
            text: "Core Framework",
            items: [
              {
                text: "Economic Philosophy",
                link: "/whitepaper/economic-philosophy",
              },
              {
                text: "Core Economic Primitives",
                link: "/whitepaper/core-primitives",
              },
              {
                text: "Racing as an Economic Engine",
                link: "/whitepaper/racing-economy",
              },
              {
                text: "Agentic Participation Layer",
                link: "/whitepaper/agent-layer",
              },
            ],
          },
          {
            text: "Economic Design",
            items: [
              {
                text: "Economic Loops",
                link: "/whitepaper/economic-loops",
              },
              {
                text: "Delegated Participation",
                link: "/whitepaper/delegated-participation",
              },
              {
                text: "Constraints & Sinks",
                link: "/whitepaper/constraints-sinks",
              },
              {
                text: "Reward Distribution",
                link: "/whitepaper/reward-distribution",
              },
              {
                text: "Sustainability Model",
                link: "/whitepaper/sustainability-model",
              },
            ],
          },
          {
            text: "Infrastructure",
            items: [
              {
                text: "Multi-Chain Economy",
                link: "/whitepaper/multichain-economy",
              },
              {
                text: "Forward Vision",
                link: "/whitepaper/forward-vision",
              },
            ],
          },
          {
            text: "Additional Resources",
            items: [
              { text: "Team", link: "/whitepaper/team" },
              { text: "FAQ", link: "/whitepaper/faq" }
            ],
          },
        ],
      },

      head: [
        [
          "script",
          {
            async: "",
            src: "https://www.googletagmanager.com/gtag/js?id=G-CZ734K6M57",
          },
        ],
        [
          "script",
          {},
          `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CZ734K6M57');`,
        ],
      ],

      footer: {
        copyright: `© 2026 ANP LABS. ALL RIGHTS RESERVED.`,
      },

      socialLinks: [
        { icon: "x", link: "https://x.com/metahoof_game" },
        { icon: "youtube", link: "https://youtube.com/@metahoof" },
        { icon: "discord", link: "https://discord.gg/eJVtJ2CCyr" },
      ],
    },
    sitemap: {
      hostname: "https://whitepaper.metahoof.com",
    },
    lastUpdated: true,
    markdown: {
      math: true,
    },
  }),
);
