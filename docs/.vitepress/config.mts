import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
    title: 'MetaHoof | Whitepaper',
    description: "Explore MetaHoof documentation for comprehensive guides, gameplay mechanics, breeding systems, race formats, economic models, and developer resources for the innovative NFT digital horse racing game built on the Ultra.io blockchain.",
    themeConfig: {
        logo: '/img/logo.png',
        siteTitle: false,

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Whitepaper', link: '/whitepaper/introduction' },
            { text: 'Tutorials', link: '/tutorials' },
            { text: 'Website', link: 'https://metahoof.com' },
            { text: 'Play (Testnet)', link: 'https://dapp-testnet.metahoof.com' }
        ],
        appearance: 'force-dark',
        cleanUrls: true,

        search: {
            provider: 'local',
        },

        editLink: {
            pattern: 'https://github.com/metahoof/docs/edit/main/docs/:path'
        },

        sidebar: {
            '/whitepaper/': [
                {
                    text: 'Introduction',
                    items: [
                        { text: 'Game Overview', link: '/whitepaper/introduction' },
                        { text: 'Blockchain & Technology', link: '/whitepaper/blockchain' },
                        { text: 'Team', link: '/whitepaper/team' },
                        { text: 'Roadmap', link: '/whitepaper/roadmap' },
                    ]
                },
                {
                    text: 'Gameplay',
                    items: [
                        {
                            text: 'Horses',
                            collapsed: true,
                            link: '/whitepaper/horses',
                            items: [
                                { text: 'Traits', link: '/whitepaper/horses-traits' },
                                { text: 'Progression', link: '/whitepaper/horses-progression' },
                            ]
                        },
                        {   text: 'Trainers', 
                            collapsed: true,
                            link: '/whitepaper/trainers',
                            items: [
                                { text: 'Synergy', link: '/whitepaper/trainers-synergy' },
                                { text: 'Skills', link: '/whitepaper/trainers-skills' },
                            ]
                         },
                        { text: 'Strategies', link: '/whitepaper/strategies' },
                        { text: 'Race', link: '/whitepaper/racing-mechanics' },
                        { text: 'Breed System', link: '/whitepaper/breed' },
                        { text: 'Stud', link: '/whitepaper/stud' },
                        { text: 'Breed Fees', link: '/whitepaper/breed-fees' },
                    ]
                },
                {
                    text: 'Ecosystem',
                    items: [
                        { text: 'Uniqs & Ownership', link: '/whitepaper/uniqs' },
                        { text: 'Genesis Horses', link: '/whitepaper/genesis' },
                        { text: 'Founder Collections', link: '/whitepaper/founders' },
                        { text: 'Sponsorship Pass', link: '/whitepaper/sponsorship' },
                        { text: 'Game Economy', link: '/whitepaper/game-economy' },
                        { text: 'Monetization & Revenue Model', link: '/whitepaper/monetization' },
                        { text: 'Community', link: '/whitepaper/community' }
                    ]
                },
                {
                    text: 'Additional Resources',
                    items: [
                        { text: 'FAQ', link: '/whitepaper/faq' },
                        { text: 'Changelog', link: '/whitepaper/changelog' }
                    ]
                },
            ],
            '/tutorials/': [
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Setup Ultra Wallet', link: '/tutorials/setup-ultra-wallet' },
                    ]
                },
                // {
                //     text: 'Manage Stable',
                //     items: [
                //         { text: 'Manage Horses', link: '/tutorials/manage-horses' },
                //     ]
                // },
                // {
                //     text: 'Training Center',
                //     items: [
                //         { text: 'Create Strategies', link: '/tutorials/create-strategies' },
                //     ]
                // },
            ]
        },

        head: [
            [
                'script',
                { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-CZ734K6M57' }
            ],
            [
                'script',
                {},
                `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CZ734K6M57');`
            ]
        ],

        footer: {
            copyright: `© 2025 ANP LABS. ALL RIGHTS RESERVED.`
        },


        socialLinks: [
            { icon: 'x', link: 'https://x.com/metahoof_game' },
            { icon: 'youtube', link: 'https://youtube.com/@metahoof' },
            { icon: 'discord', link: 'https://discord.gg/eJVtJ2CCyr' },
        ]
    },
    sitemap: {
        hostname: 'https://whitepaper.metahoof.com',
    },
    lastUpdated: true,
    markdown: {
        math: true
    }
}));
