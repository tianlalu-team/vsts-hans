var I18N = {};

I18N.conf = {

    /**
     * 可以解析的组件伪类名
     */
    reComponentClasses: [
        // https://{account}.visualstudio.com/
        'organization-navigation',    // 左侧导航
        'suite-me-page-view',         // 页面主体


        // 页面级组件: 均位于 #vss_1 .internal-content-host 下
        // https://{account}.visualstudio.com/{project}/**
        'vss-HubBreadcrumb',    // 面包屑导航

        'project-overview-page-container',  // Overview -> Summary
        'dashboard-landing',          // Overview -> Dashboards
        'wiki-container',           // Overview -> Wiki
        'work-items-hub-view',       // Work -> Work Items
        'work-items-hub-row',        // Work -> Work Items/Row
        'board-content-view',          // Work -> Boards / https://{account}.visualstudio.com/{project}/{team}/_boards
        'backlog-content-view',        // Work -> Backlogs
        'sprint-view-container',       // Note: 和 .internal-content-host 同级，应该是一个BUG
        'queries-view',                  // NOTE: 监听不到这个节点被新增，此组件的翻译只能递归节点时来检查节点是否为组件
        'versioncontrol-explorer-view',  // Note: 不在 .internal-content-host 下
        'versioncontrol-git-history-view',  // Code -> Commites
        'versioncontrol-pushes-view',  // Code -> Pushers
        'vc-newbranches-view',  // Code -> Branches
        'git-tags-page',  // Code -> Tags
        'versioncontrol-pullrequest-list-view',  // Code -> PRs
        'versioncontrol-pullrequest-create-view',  // Code -> PRs -> Create

        'work-item-form-main',  // 工单的编辑页面 / https://{account}.visualstudio.com/{project}/_workitems/edit/{id}

        // Widgets
        'assigned-to-me',  // 我的任务
        'buildchart-container',  // 构建图表
        'new-work-item',

        // Dialogs
        'new-workitem-dialog',   // 创建工单
        'vc-create-tag-dialog',  // 创建代码 Tag  NOTE: 此节点不直接添加，此组件的翻译只能递归节点时来检查节点是否为组件

        // 区域刷新
        "zerodata",            // 列表没有数据时
        'grid-header-column',  // 动态加载的表头列
        'edit-readme-cta',    // Overview -> Summary
        'wiki-edit',          // Overview -> Wiki
        'wiki-new-page',      // Overview -> Wiki
        'commandbar-item',    // 菜单项, 有大量菜单项被动态添加，尝试一下统一翻译
        'vss-PickList--row', //'vss-PickList--element',  // 表格的下拉筛选器，应该时这个吧，先试试
        'vss-PickList--noItemsText', // 下拉框没有数据时的提示
        'ms-ContextualMenu-item', // 左侧菜单鼠标悬浮滑出子菜单
        'ms-Tooltip',   // 浮动提示
        'ms-Button-textContainer', // 补充按钮文本
        'ms-CommandBarItem-link', // 链接按钮
        'ms-Dropdown-item', // 还是操作按钮
        "ms-DetailsHeader-cell", // 表格的表头
    ],

    /**
     * 需要跳过的节点
     */
    reIgnoreClasses: [
        'work-item-title', // 工单列表中的标题列
    ],

    /**
     * 要翻译的页面正则
     */
    rePageClass: /\b(vis-public|page-(dashboard|profile|account|new-repo|create-org)|homepage|signup|session-authentication|oauth)\b/,

    /**
     * 匹配 pathname 页面的正则
     *
     * 通知页面 /notifications
     * 关注页面 /watching
     * 点赞页面 /stars
     * 问题页面 /issues
     * 拉取请求 /pulls
     * 搜索页面 /search
     * 趋势页面 /trending
     * 展示页面 /showcases
     * 导入仓库 /new/import
     * 首页 /
     */
    rePagePath: /\/(?:(?:helios\/)?($|_dashboards|_wiki|_workitems|_boards|_backlogs|_sprints|_testManagement))?/,

    /**
     * 匹配 url 页面的正则
     *
     * 代码片段页面 gist
     */
    rePageUrl: /(gist)\.visualstudio.com/,

    /**
     * 忽略区域的 class 正则
     *
     * 面包屑 breadcrumb
     * 文件列表 files js-navigation-container js-active-navigation-container
     * 代码高亮 highlight tab-size js-file-line-container
     * 代码差异 data highlight blob-wrapper
     * wiki内容 markdown-body
     */
    reIgnore: /(files js-navigation-container|highlight tab-size|highlight blob-wrapper|markdown-body)/,
};

//I18N.conf.reComponentClass = eval('/\b('+I18N.conf.reComponentClasses.join("|")+')\b/');
I18N.conf.reComponentClass = eval('/(' + I18N.conf.reComponentClasses.join("|") + ')/');
I18N.conf.reIgnoreClass = eval('/(' + I18N.conf.reIgnoreClasses.join("|") + ')/');

I18N.zh = {
    "title": { // 标题翻译
        "static": { // 静态翻译
        },
        "regexp": [ // 正则翻译
        ],
    },

    "pubilc": { // 公共区域翻译
        "static": { // 静态翻译
            "Click": "点击",
            "Off": "关闭",
            "On": "开启",
        },
        "regexp": [
        ],
    },

    /* 全局资源定义, 通过 $.extend() 方法进行复用 */
    "global-navigation": { // 全局导航
        "static": {
            "Overview": "总览",
            "Summary": "概要",
            "Dashboards": "仪表板",

            "Work": "工作",
            "Work Items": "工单",
            "Boards": "看板",
            "Backlogs": "积压",
            "Sprints": "冲刺",
            "Queries": "筛选器",

            "Code": "代码",
            "Files": "代码浏览",
            "Commits": "查看提交",
            "Pushes": "推送记录",
            "Branches": "分支",
            "Tags": "标签",
            "Pull Requests": "拉取请求",

            "Build and release": "构建和发布",
            "Builds": "构建",
            "Releases": "发布",
            "Library": "库",
            "Task groups": "任务分组",
            "Deployment groups": "部署分组",

            "Test": "测试",
            //"Test Plans*" : "测试计划*",
            //"Runs" : "测试",
            //"Machines" : "测试",
            //"Load test" : "测试",
        },
    },

    "global-work-item-type": { // 全局工单类型
        "static": {
            "Epic": "史诗故事",
            "Feature": "特性",
            "User Story": "用户故事",
            "Task": "任务",
            "Issue": "问题",
            "Test Case": "测试用例",
            "Test Plan": "测试计划",
            "Test Suite": "测试套件(Test Suite)",
        }
    },

    "global-work-item-state": { // 全局工单类型
        "static": {
            "Active": "已确认(Active)",
            "In Progress": "处理中(In Progress)",
            "New": "待确认(New)",
        }
    },

    "global-btn-text": {
        "static": {
            "New work item": "新建工单",
            "New Work Item": "新建工单",
            "Open in Queries": "查询器中打开",
            "Column Options": "列设置",
            "Recycle Bin": "回收站",
            "Clear": "清除",
        },
    },

    "global-work-item-assigned": {
        "static": {
            "@Me": "@我",
            "Unassigned": "未指派"
        },
    },

    "global-work-item-field": {
        "static": {
            "Created Date": "创建日期",
            "Title": "标题",
            "State": "状态",
            "Area Path": "功能分区",
            "Tags": "标签",
            "Changed Date": "最后修改时间",
            "Assigned To": "指派给",
            "Activity Date": "最后更新时间",
        },
    },

    /* 页面非动态加载内容的翻译 */
    "page": {
        "static": {
        }
    },

    // 组件翻译
    "organization-navigation": { // https://{account}.visualstudio.com/ 左侧菜单
        "static": {
            "My accounts": "我的账户",
            "Related pages": "相关页面",
            "What's new in VSTS": "VSTS 新特性(英文)",
            "Project documentation": "项目说明文档",
            "Get help": "获取帮助",
            "Admin settings": "设置",

            //"Filter projects": "项目过滤",
            //"Projects": "项目列表",
            //"Create project": "新建项目",
            //"Create new project": "创建一个新项目",
            //"Projects contain your source code, work items, automated builds and more.": "一个包含您的源代码，工作项，自动构建等相关信息的项目。",
            //"Project name": "项目名称",
            //"Version control": "版本控制系统",
            //"Work item process": "工作组织流程",
            //"New Work Item": "新建工单",
            //"Enter title": "输入标题",
        }
    },

    "suite-me-page-view": { // https://{account}.visualstudio.com/ 主页面
        "static": {
            "Projects": "项目列表",
            "Filter projects": "项目过滤",
            "Create project": "新建项目",
        }
    },

    "vss-HubBreadcrumb": {
        "static": {
        },
    },

    "work-items-hub-view": { // https://{account}.visualstudio.com/{project}/_workitems/
        "static": {
            "Work Items": "工单",


            "Filter by keyword": "关键词过滤",
            "Types filter": "类型过滤",
            "Types": "工单类型",
            "States filter": "状态过滤",
            "States": "工单状态",
            "Area filter": "功能区域过滤",
            "Area": "功能区域",
            "Tags filter": "标签过滤",
            "Tags": "标签",
            "Assigned to filter": "指派过滤",
            "Assigned to": "指派到人",

        },
        "regexp": [
        ],
    },
    'work-items-hub-row': {
        "static": {
        },
    },

    "project-overview-page-container": {
        "static": {
            "Project Information": "项目信息",
            "Remove from favorites": "取消收藏",  // 翻译失败
            "Readme": "自述",
            "Edit in Wiki": "在 Wiki 中编辑此页",  // 翻译失败, 会再次动态生成节点 .edit-readme-cta
            "Change": "切换页面",


            "Members and Activity": "成员 & 动态",
            "Members": "项目成员",
            "Manage Team Members": "管理团队成员",
            "Activity": "动态",
            //"Time range for showing activity data": "",
            "7 Days": "",
            "Code": "代码动态",
            //"Chart is unavailable to screenreaders. Sibling table element contains screen reader available representation of chart": "",
            //"Interactive chart. Chart. Use up and down arrows to navigate with most screen readers.": "",
            //"Chart screen reader information.": "",
            "Chart": "图表",
            //"Number of Commits per day": "",
            "Commits": "提交",
        },
        "regexp": [
            [/by 1 authors/, "由1个作者提交"],
        ]
    },

    /* 局部刷新内容 */
    "zerodata": {
        "static": {
            "Keep an eye on important work": "请时刻关注重要的工作",
            "Learn more about following": "详细了解以下内容",
            "to get updates about the items you want to track.": "获取跟进的工单的进度更新。",
            "Don't miss important work": "不要错过重要的工作",
            "Quickly take action on items where you have been @mentioned.": "您可以快速对@您的工单开展工作。",
            "Learn more about @mentions": "了解有关 @提到 的更多信息",
        }
    },
    "edit-readme-cta": {
        "static": {
            "Edit in Wiki": "在 Wiki 中编辑此页"
        }
    },
    'wiki-edit': {
        "static": {
            "Edit page": "编辑页面"
        }
    },
    'wiki-new-page': {
        "static": {
            "New page": "新建页面"
        }
    },
    'commandbar-item': {
        "static": {
            "Project settings": "项目设置",
        }
    },
    'grid-header-column': { // 动态加载的表头列
        "static": {
        }
    },
    'vss-PickList--row': { //'vss-PickList--element': {
        "static": {
        }
    },
    'vss-PickList--noItemsText': {
        "static": {
            "No tags available": "当前没有任何标签",
            "No types available": "当前没有任何工单类型",
            "No states available": "当前没有任何工单状态",
            "No areas available": "当前没有任何功能区域",
        }
    },
    'ms-ContextualMenu-item': {
        "static": {
            "New query": "新建查询器",
            "Live updates": "实时更新",
            "Epics": "史诗故事",
            "Features": "特性",
            "Stories": "用户故事",
            "Stories backlog": "用户故事积压清单",
            "Stories Board": "用户故事看板",
            "Epics Backlog": "史诗故事积压清单",
            //"Epics backlog": "史诗故事积压清单",
            "Epics Board": "史诗故事看板",
            "Features backlog": "特性积压清单",
            "Features Board": "特性看板",
            "New": "新建",
            "File": "文件",
            "Folder": "文件夹",
            "Upload file(s)": "上传文件",
            "Download as Zip": "下载为 Zip",
            "Rename": "重命名",
            "Delete": "删除"
        }
    },
    'ms-Tooltip': {
        "static": {
            "View options": "设置",
            "Hide filters": "隐藏过滤器",
            "Enter full screen mode": "进入全屏模式",
            "Types": "工单类型",
            "States": "工单状态",
            "Area": "功能区域",
            "Tags": "标签",
            "Assigned to": "指派到人",
            "More Actions...": "更多...",
            "Remove from favorites": "取消收藏",
            "Add to favorites": "收藏",
            "Show less information": "折叠",
            "Pin item": "固定到快捷栏",
            "Unpin item": "从快捷栏取消固定",
            'Back to "Assigned to me" tab (Alt + Q)': '返回"指派给我"页面(Alt + Q)',
            "Back to Work Items": "返回到工单",
            'Previous work item in the "Assigned to me" tab (Alt + P)': '"指派给我"页面的上一个工单 (Alt + P)',
            'Next work item in the "Assigned to me" tab (Alt + N)': '"指派给我"页面的下一个工单 (Alt + N)'
        }
    },
    'ms-Button-textContainer': {
        "static": {

        }
    },
    'ms-CommandBarItem-link': {
        "static": {
            "Stories backlog": "用户故事积压清单",
            "Stories Board": "用户故事看板",
            "Epics Backlog": "史诗故事积压清单",
            "Epics backlog": "史诗故事积压清单",
            "Epics Board": "史诗故事看板",
            "Features backlog": "特性积压清单",
            "Features Board": "特性看板",
            "Epics": "史诗故事",
            "Features": "特性",
            "Stories": "用户故事",
        }
    },
    'ms-Dropdown-item': {
        "static": {
            "Assigned to me": "指派给我",
            "Following": "我跟进的",
            "Mentioned": "@提到过我",
            "My activity": "看不懂的(My activity)",
            "Recently updated": "最近更新",
            "Recently completed": "最近完成",
            "Recently created": "最近创建",
        },
    },
    "ms-DetailsHeader-cell": {
        "static": {
        },
    },
};

// 复用全局导航翻译部分
$.extend(true, I18N.zh["page"], I18N.zh["global-navigation"]);
$.extend(true, I18N.zh["commandbar-item"], I18N.zh["global-navigation"]);
$.extend(true, I18N.zh["vss-HubBreadcrumb"], I18N.zh["global-navigation"]);
$.extend(true, I18N.zh["vss-PickList--row"/*"vss-PickList--element"*/], I18N.zh["global-work-item-type"], I18N.zh["global-work-item-state"], I18N.zh["global-work-item-assigned"]);
$.extend(true, I18N.zh["ms-Button-textContainer"], I18N.zh["global-btn-text"]);
$.extend(true, I18N.zh["ms-ContextualMenu-item"], I18N.zh["global-navigation"], I18N.zh["global-work-item-type"], I18N.zh["global-btn-text"]);
$.extend(true, I18N.zh["ms-CommandBarItem-link"], I18N.zh["global-navigation"], I18N.zh["global-work-item-type"], I18N.zh["global-btn-text"]);
$.extend(true, I18N.zh["ms-Tooltip"], I18N.zh["global-work-item-type"]);
$.extend(true, I18N.zh["ms-DetailsHeader-cell"], I18N.zh["global-work-item-field"]);
$.extend(true, I18N.zh["grid-header-column"], I18N.zh["global-work-item-field"]);

$.extend(true, I18N.zh["work-items-hub-view"], I18N.zh["global-btn-text"]);
$.extend(true, I18N.zh["work-items-hub-row"], I18N.zh["global-work-item-type"], I18N.zh["global-work-item-state"], I18N.zh["global-work-item-assigned"]);