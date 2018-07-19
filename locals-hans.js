var I18N = {};

I18N.conf = {

    /**
     * 可以解析的组件伪类名
     */
    // reComponentClasses: [

    // 页面级组件: 均位于 #vss_1 .internal-content-host 下
    // https://{account}.visualstudio.com/{project}/**
    // "project-overview-page-container", // Overview -> Summary
    // "dashboard-landing", // Overview -> Dashboards
    // "wiki-container", // Overview -> Wiki
    // "work-items-hub-view", // Work -> Work Items
    // "work-items-hub-row", // Work -> Work Items/Row
    // "board-content-view",          // Work -> Boards / https://{account}.visualstudio.com/{project}/{team}/_boards
    // "backlog-content-view", // Work -> Backlogs
    // "sprint-view-container", // Note: 和 .internal-content-host 同级,应该是一个BUG
    // "queries-view", // NOTE: 监听不到这个节点被新增,此组件的翻译只能递归节点时来检查节点是否为组件
    // "versioncontrol-explorer-view", // Note: 不在 .internal-content-host 下
    // "versioncontrol-git-history-view", // Code -> Commites
    //"versioncontrol-pushes-view", // Code -> Pushers
    // "vc-newbranches-view", // Code -> Branches
    // "git-tags-page", // Code -> Tags
    // "versioncontrol-pullrequest-list-view", // Code -> PRs
    // "versioncontrol-pullrequest-create-view", // Code -> PRs -> Create
    // "build-title-bar", // build
    // "pivotTab-link",

    // "work-item-form-main",  // 工单的编辑页面 / https://{account}.visualstudio.com/{project}/_workitems/edit/{id}

    // // Widgets
    // "assigned-to-me", // 我的任务
    // "buildchart-container", // 构建图表
    // "new-work-item",

    // // Dialogs
    // "new-workitem-dialog", // 创建工单
    // "vc-create-tag-dialog", // 创建代码 Tag  NOTE: 此节点不直接添加,此组件的翻译只能递归节点时来检查节点是否为组件

    // // 区域刷新
    // "zerodata", // 列表没有数据时
    // "grid-header-column", // 动态加载的表头列
    // "edit-readme-cta", // Overview -> Summary
    // "wiki-edit", // Overview -> Wiki
    // "wiki-new-page", // Overview -> Wiki
    // "commandbar-item", // 菜单项, 有大量菜单项被动态添加,尝试一下统一翻译
    // "vss-PickList--row", //"vss-PickList--element",  // 表格的下拉筛选器,应该时这个吧,先试试
    // "vss-PickList--noItemsText", // 下拉框没有数据时的提示
    // "ms-ContextualMenu-item", // 左侧菜单鼠标悬浮滑出子菜单
    // "ms-Tooltip", // 浮动提示
    // "ms-Button-textContainer", // 补充按钮文本
    // "ms-CommandBarItem-link", // 链接按钮
    // "ms-Dropdown-item", // 还是操作按钮
    // "ms-DetailsHeader-cell", // 表格的表头
    // "members-title-div", // 项目首页成员标题
    // "activity-panel", // 项目首页活动面板
    // ],

    /**
     * 需要跳过的节点
     */
    reIgnoreClasses: [
        "work-item-title", // 工单列表中的标题列
    ],
};

I18N.zh = {
    "__common": {
        "static": {
            "@Me": "@我",

            "1 Day": "1 天",
            "7 Days": "7 天",
            "30 Days": "30 天",
            "7-day pass rate": "最近7天成功率",
            
            "Actions": "操作",
            "Active": "已确认(Active)",
            "Activity": "动态",
            "Activity Date": "最后更新时间",
            "Add tag": "添加标签",
            "Add link": "添加关联",
            "Add to favorites": "收藏",
            "Admin settings": "设置",
            "Area": "功能区域",
            "Area filter": "功能区域过滤",
            "Area Path": "功能分区",
            "Assigned To": "指派给",
            "Assigned to": "指派给",
            "Assigned to me": "指派给我",
            "Assigned to filter": "指派过滤",
            
            "Back to Work Items": "返回到工单",
            "Back to \"Assigned to me\" tab (Alt + Q)": "返回\"指派给我\"页面(Alt + Q)",
            "Backlogs": "积压",
            "Boards": "看板",
            "Branches": "分支",
            "Build": "构建",
            "Build & Release": "构建和发布",
            "Build and release": "构建和发布",
            "Build Definitions": "Build 定义",
            "Build ID or build number": "Build Id 或内部版本号",
            "Builds": "构建",
            "Builds succeeded": "成功的构建",
            
            "Change": "切换页面",
            "Changed Date": "最后修改时间",
            //"Chart is unavailable to screenreaders. Sibling table element contains screen reader available representation of chart": "",
            //"Chart screen reader information.": "",
            "Chart": "图表",
            "Clear": "清除",
            "Click": "点击",
            "closed": "关闭的",
            "Code": "代码",
            // "Code": "代码动态",s
            "Column Options": "列设置",
            "completed": "已完成的",
            "Commits": "查看提交",
            "Commit": "提交",
            "Completed Work Items": "完成的工单",
            "Comment": "注释",
            "Commits": "提交",
            "Create new project": "创建一个新项目",
            "Create project": "新建项目",
            "created": "新建的",
            "Created Date": "创建日期",
            
            "Dashboards": "仪表板",
            "Default branch summary": "默认分支摘要",
            "Delete": "删除",
            "Development": "开发",
            "Definitions": "定义",
            "Deployments succeeded": "成功的部署",
            "Deployment groups": "部署分组",
            "Development hasn't started on this item.": "与此工单相关的开发工作暂未开始",
            "Discussion": "话题讨论",
            "Don't miss important work": "不要错过重要的工作",
            "Download as Zip": "下载为 Zip",
            
            "e.g., Tags:\"Release Blocker\"": "例如: Tags:\"Release Blocker\"",
            "(e.g., ToDo OR revisit)": "(例如: ToDo OR revisit)",
            "Edit in Wiki": "在 Wiki 中编辑此页", // 翻译失败, 会再次动态生成节点 .edit-readme-cta
            "Edit in Wiki": "在 Wiki 中编辑此页",
            "Edit page": "编辑页面",
            "Enter full screen mode": "进入全屏模式",
            "Enter title": "输入标题",
            "Epic": "史诗故事",
            "Epics": "史诗故事",
            "Epics backlog": "史诗故事积压清单",
            "Epics Backlog": "史诗故事积压清单",
            "Epics Board": "史诗故事看板",
            "Epics": "史诗故事",
            "Exit full screen mode": "退出全屏模式",
            
            "Feature": "特性",
            "Features": "特性",
            "Features backlog": "特性积压清单",
            "Features Board": "特性看板",
            "File": "文件",
            "Files": "代码浏览",
            "Filter by field": "根据字段过滤",
            "Filter by keyword": "关键词过滤",
            "Filter projects": "项目过滤",
            "Folder": "文件夹",
            "Folder / Name": "文件夹/名称",
            "Follow": "跟进",
            "Following": "我跟进的",
            
            "Get help": "获取帮助",
            
            "Help": "帮助",
            "Hide": "隐藏",
            "Hide filters": "隐藏过滤器",
            "History": "历史",
            
            "Import": "导入",
            "In Progress": "处理中(In Progress)",
            //"Interactive chart. Chart. Use up and down arrows to navigate with most screen readers.": "",
            "Issue": "问题",
            
            "Keep an eye on important work": "请时刻关注重要的工作",
            
            "Last built": "最近一次运行",
            "Learn more about @mentions": "了解有关 @提到 的更多信息",
            "Learn more about following": "详细了解以下内容",
            "Library": "库",
            "Link type": "链接类型",
            "Live updates": "实时更新",
            //"Load test" : "测试",
            "Loading...": "加载中...",
            
            //"Machines" : "测试",
            "Manage folders": "管理文件夹",
            "Manage Team Members": "管理团队成员",
            "Maximize Development": "最大化开发面板",
            "Members and Activity": "成员 & 动态",            
            "Members": "成员",
            "Mentioned": "@提到过我",
            "Mine": "我的",
            "More Actions...": "更多...",
            "My activity": "看不懂的(My activity)",
            "My accounts": "我的账户",
            
            "New": "新建", // TODO: 新建按钮 
            "New": "待确认(New)",
            "New page": "新建页面",
            "New query": "新建查询器",
            "New work item": "新建工单",
            "Next work item in the \"Assigned to me\" tab (Alt + N)": "\"指派给我\"页面的下一个工单 (Alt + N)",
            "No tags available": "当前没有任何标签",
            "No types available": "当前没有任何工单类型",
            "No states available": "当前没有任何工单状态",
            "No areas available": "当前没有任何功能区域",
            //"Number of Commits per day": "",
            
            "Off": "关闭",
            "On": "开启",
            "Open in Queries": "查询器中打开",
            "Operators": "操作符",
            "Overview": "总览",
            
            "Packages": "程序包",
            "Pin item": "固定到快捷栏",
            "Planning": "计划",
            "Project documentation": "项目说明文档",
            "Project Information": "项目信息",
            "Project name": "项目名称",
            "Project settings": "项目设置",
            "Projects": "项目",
            "Projects contain your source code, work items, automated builds and more.": "一个包含您的源代码,工作项,自动构建等相关信息的项目。",
            "Previous work item in the \"Assigned to me\" tab (Alt + P)": "\"指派给我\"页面的上一个工单 (Alt + P)",
            "Pull Requests": "拉取请求",
            "Pull requests": "拉取请求",
            "Pushes": "推送记录",
            
            "Queries": "筛选器",
            "Queued": "队列中",
            "Quickly take action on items where you have been @mentioned.": "您可以快速对@您的工单开展工作。",
            
            "Readme": "自述",
            "Reason": "原因",
            "Recycle Bin": "回收站",
            "Recently updated": "最近更新",
            "Recently completed": "最近完成",
            "Recently created": "最近创建",
            "Refresh": "刷新",
            "Related pages": "相关页面",
            "Related Work": "相关工作",
            "Releases": "发布",
            "Remove from favorites": "取消收藏",
            "Rename": "重命名",
            "Repository": "代码库",
            "Repro Steps": "重现步骤",
            "Requested by me": "由我请求",
            "Resolved Reason": "解决方案",
            "Restore": "恢复",
            "Restore Development": "还原开发面板",
            "Running": "运行中",
            //"Runs" : "测试",
            
            "Save": "保存",
            "Search": "搜索",
            //"Search": "键入关键词开始搜索", //todo:
            "Security": "安全",
            "Show": "显示",
            "Show filters": "显示过滤器",
            "Show less information": "折叠",
            "Sprints": "冲刺",
            "State": "状态",
            "Status": "状态",
            //"States": "工单状态",
            //"States": "工单状态",
            "States filter": "状态过滤",
            "Stories": "用户故事",
            "Stories backlog": "用户故事积压清单",
            "Stories Board": "用户故事看板",
            "Stories": "用户故事",
            "Summary": "概要",
            "System Info": "系统信息",
            
            "Tags": "标签",
            "Tags": "标签",
            "Tags": "标签",
            "Tags": "标签",
            "Tags filter": "标签过滤",
            "Task": "任务",
            "Task groups": "任务分组",
            "Test": "测试",
            "Test Case": "测试用例",
            //"Test Plans*" : "测试计划*",
            "Test Plan": "测试计划",
            "Test Suite": "测试套件(Test Suite)",
            "The reason why the bug was resolved": "错误解决的原因",
            "This account": "本账户内搜索",
            "This project": "本项目内搜索",
            //"Time range for showing activity data": "",
            "Title": "标题",
            "to get updates about the items you want to track.": "获取跟进的工单的进度更新。",
            "Triggered by": "触发",
            "Types filter": "类型过滤",
            "Types": "工单类型",
            
            "Unassigned": "未指派",
            "Unpin item": "从快捷栏取消固定",
            "Upload file(s)": "上传文件",
            "User Story": "用户故事",
            
            "Version control": "版本控制系统",
            "View options": "设置",
            
            "What's new in VSTS": "VSTS 新特性(英文)",
            "Work": "工作",
            "Work Items": "工单",
            "Work item process": "工作组织流程",
        },
        "regexp": [
            [/by (\d+) authors/, "由 $1 个作者提交"]
        ]
    }
};