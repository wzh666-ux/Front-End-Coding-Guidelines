import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,e as s}from"./app-3abbf1cd.js";const l={},d=s(`<h1 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─build
├─public
│  ├─html
│  └─tinymce
└─src
    ├─api
    │  ├─monitor
    │  ├─system
    │  │  └─dict
    │  ├─tool
    │  ├─upload
    │  └─yq
    ├─assets
    │  ├─401_images
    │  ├─404_images
    │  ├─icons
    │  │  └─svg
    │  ├─images
    │  ├─logo
    │  └─styles
    ├─components
    │  ├─Breadcrumb
    │  ├─Crontab
    │  ├─DictData
    │  ├─DictTag
    │  ├─Editor
    │  ├─FileUpload
    │  ├─Hamburger
    │  ├─HeaderSearch
    │  ├─IconSelect
    │  ├─iFrame
    │  ├─ImagePreview
    │  ├─ImageUpload
    │  ├─Pagination
    │  ├─PanThumb
    │  ├─ParentView
    │  ├─RightPanel
    │  ├─RightToolbar
    │  ├─RuoYi
    │  │  ├─Doc
    │  │  └─Git
    │  ├─Screenfull
    │  ├─SizeSelect
    │  ├─SvgIcon
    │  ├─ThemePicker
    │  ├─Tinymce
    │  │  └─components
    │  ├─TopNav
    │  └─YqUpload
    ├─directive
    │  ├─dialog
    │  ├─module
    │  └─permission
    ├─layout
    │  ├─components
    │  │  ├─InnerLink
    │  │  ├─Settings
    │  │  ├─Sidebar
    │  │  └─TagsView
    │  └─mixin
    ├─plugins
    ├─router
    ├─store
    │  └─modules
    ├─utils
    │  ├─dict
    │  └─generator
    └─views
        ├─article
        ├─articleType
        ├─banner
        ├─components
        │  └─icons
        ├─dashboard
        │  └─mixins
        ├─error
        ├─monitor
        │  ├─cache
        │  ├─druid
        │  ├─job
        │  ├─logininfor
        │  ├─online
        │  ├─operlog
        │  └─server
        ├─suggestion
        ├─system
        │  ├─company
        │  ├─config
        │  ├─createInfo
        │  ├─customer
        │  │  └─components
        │  ├─dept
        │  ├─dict
        │  ├─menu
        │  ├─notice
        │  ├─post
        │  ├─productPrice
        │  ├─role
        │  ├─sysDict
        │  ├─user
        │  │  └─profile
        │  └─warehouse
        └─tool
            ├─build
            ├─gen
            └─swagger
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,c){return n(),e("div",null,v)}const b=i(l,[["render",a],["__file","index.html.vue"]]);export{b as default};
