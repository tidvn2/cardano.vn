
import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "Cộng đồng Cardano Việt nam",
    tagline: "Vì một thế giới phi tập trung hơn",
    favicon: "img/favicon.ico",
    url: "https://your-docusaurus-site.example.com",
    baseUrl: "/",
    organizationName: "facebook",
    projectName: "docusaurus",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    customFields: {
        googleApiKey: "AIzaSyBm44VZa9sLj5PpaWty_UCWzykTUbxy2js",
        github_repo: "tidvn2/Comment",
        github_repoId: "R_kgDOLlOOng",
        github_categoryId: "DIC_kwDOLlOOns4CeNye",
    },

    plugins: ["docusaurus-plugin-sass"],
    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,

                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: "./src/css/custom.scss",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "Cardano Việt Nam",
            logo: {
                alt: "cardano logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Tutorial",
                },
                { to: "/blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/facebook/docusaurus",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        // footer: {
        //     style: "dark",
        //     links: [
        //         {
        //             title: "Docs",
        //             items: [
        //                 {
        //                     label: "Tutorial",
        //                     to: "/docs/intro",
        //                 },
        //             ],
        //         },
        //         {
        //             title: "Community",
        //             items: [
        //                 {
        //                     label: "Stack Overflow",
        //                     href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //                 },
        //                 {
        //                     label: "Discord",
        //                     href: "https://discordapp.com/invite/docusaurus",
        //                 },
        //                 {
        //                     label: "Twitter",
        //                     href: "https://twitter.com/docusaurus",
        //                 },
        //             ],
        //         },
        //         {
        //             title: "More",
        //             items: [
        //                 {
        //                     label: "Blog",
        //                     to: "/blog",
        //                 },
        //                 {
        //                     label: "GitHub",
        //                     href: "https://github.com/facebook/docusaurus",
        //                 },
        //             ],
        //         },
        //     ],
        //     copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        // },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
