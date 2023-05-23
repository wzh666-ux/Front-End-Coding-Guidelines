import { defineUserConfig } from 'vuepress'
import { hopeTheme, sidebar } from 'vuepress-theme-hope'
import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
    //这里面路径最开始的/是指向.vuepress/public/的
    base:'/Front-End-Coding-Guidelines/',//部署站点的基础路径,默认/
    lang: 'zh-CN',
    title: '开发规范手册',
    description: '前端开发',
    head: [['link', { rel: 'icon', href: 'logo.png' }]],//站点头部的icon
    plugins: [
        searchPlugin({
            maxSuggestions: 10
        }),
    ],
    theme: hopeTheme({
        fullscreen: true,
        logo: 'logo.png',
        navbarLayout: {
            start: ['Brand'],
            center: ['Search'],
            end: ['Outlook','Links']
        },
        navbar: [
            {
                text: 'Wiki✨(公司)',
                link: 'http://wiki.xmmost.com/index.action#recently-worked',
                icon: 'logos:confluence'
            },
            {
                text: 'GitLib(公司)',
                link: 'http://git.cloudmigrate.cn/',
                icon: 'logos:gitlab'
            },
            {
                text: 'GitHub',
                link: 'http://git.cloudmigrate.cn/',
                icon: 'logos:github-icon'
            }
        ],
        // 文档存放地址
        docsDir: 'docs',
        // 默认为 GitHub. 同时也可以是一个完整的 URL
        repo: "wzh666-ux/Front-End-Coding-Guidelines",
        // 自定义仓库链接文字。默认从 `repo` 中自动推断为
        // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
        repoLabel: "GitHub",
        iconAssets: 'iconify',
        darkmode: 'toggle',
        favicon: 'google-developers.svg',
        sidebar: sidebar([
            {
                text: '规范相关说明',
                icon: 'fa-brands:readme',
                collapsible: false,
                children: [
                    {
                        text: '项目结构',
                        link: '/projectStruct/',
                        icon: 'icon-park:instruction',
                    },
                    {
                        text: '规范定级',
                        link: '/enter/',
                        icon: 'simple-icons:opslevel'
                    },
                    {
                        text: 'Vue代码规范',
                        collapsible: true,
                        link: '/vue/',
                        icon: 'logos:vue'
                    },
                    {
                        text: 'Uniapp代码规范',
                        collapsible: true,
                        link: '/uniapp/',
                        icon: 'jam:universe'
                    },
                    {
                        text: 'JavaScript代码规范(全部A级)',
                        collapsible: true,
                        link: '/js/',
                        icon: 'logos:javascript'
                    },
                    {
                        text: 'CSS代码规范(全部A级)',
                        collapsible: true,
                        link: '/css/',
                        icon: 'logos:css-3'
                    },
                    {
                        text: 'Git推送规范(全部A级)',
                        collapsible: true,
                        link: '/git/',
                        icon: 'logos:git-icon'
                    },
                ]
            },
            {
                text: 'playground',
                collapsible: false,
                icon: 'twemoji:playground-slide',
                children: [
                    {
                        text: 'vue演练场',
                        link: '/playground/vue.md',
                        icon: 'skill-icons:vuejs-light'
                    },
                    {
                        text: 'typescript演练场',
                        link: '/playground/ts.md',
                        icon: 'skill-icons:typescript'
                    }
                ]
            }
        ]),
        plugins: {
            mdEnhance: {
                playground: {
                    presets: ['vue', 'ts']
                }
            }
        }
    })
})
