import { defineUserConfig } from 'vuepress'
import { hopeTheme, sidebar } from 'vuepress-theme-hope'
import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
    //这里面路径最开始的/是指向.vuepress/public/的
    base:'/Front-End-Coding-Guidelines/',//部署站点的基础路径,默认/
    lang: 'zh-CN',
    title: '开发规范手册',
    description: '前端开发',
    head: [['link', { rel: 'icon', href: 'google-developers.svg' }]],//站点头部的icon
    plugins: [
        searchPlugin({
            maxSuggestions: 10
        }),
    ],
    markdown: {},
    theme: hopeTheme({
        docsDir: 'docs',
        navbar: [
            {
                text: 'Wiki✨',
                link: 'http://wiki.xmmost.com/index.action#recently-worked',
            },
            {
                text: 'Git',
                link: 'http://git.cloudmigrate.cn/'
            }
        ],
        iconAssets: 'iconify',
        darkmode: 'toggle',
        favicon: 'google-developers.svg',
        sidebar: sidebar({
            "/": [
                {
                    text: '项目结构',
                    link: 'projectStruct/',
                    icon: 'icon-park:instruction',
                },
                {
                    text: '规范定级',
                    link: 'enter/',
                    icon: 'simple-icons:opslevel'
                },
                {
                    text: 'Vue代码规范',
                    collapsible: true,
                    link: 'vue/',
                    icon: 'logos:vue'
                },
                {
                    text: 'Uniapp代码规范',
                    collapsible: true,
                    link: 'uniapp/',
                    icon: 'jam:universe'
                },
                {
                    text: 'JavaScript代码规范(全部A级)',
                    collapsible: true,
                    link: 'js/',
                    icon: 'logos:javascript'
                },
                {
                    text: 'CSS代码规范(全部A级)',
                    collapsible: true,
                    link: 'css/',
                    icon: 'logos:css-3'
                },
                {
                    text: 'Git推送规范(全部A级)',
                    collapsible: true,
                    link: 'git/',
                    icon: 'logos:git-icon'
                }
            ]
        })
    })
})
