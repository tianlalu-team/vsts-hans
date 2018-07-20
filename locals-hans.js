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
        "markdown-render-area",  // markdown 文本渲染区域
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

            "Acceptance Criteria": "验收标准",
            "Accepted By": "由他确认",
            "Accepted Date": "确认日期",
            "Actions": "操作",
            "Activated By": "由他激活",
            "Activated Date": "激活日期",
            "Active": "已确认(Active)",
            "Activity": "动态", // TODO: 在工作项中有字段名称也是'Activity'，但显然不是这个意思
            "Activity Date": "最后更新时间",
            "Add a column": "增加一列",
            "Add attachment": "增加附件",
            "Add tag": "添加标签",
            "Add link": "添加关联",
            "Add or remove columns. To change the column order, drag and drop a field, or use the keyboard shortcuts, Ctrl+Up or Ctrl+Down.": "添加或删除列。如需更改列的显示顺序，请拖放字段或使用键盘快捷键，Ctrl + ↑ 或Ctrl + ↓ 。",
            "Add to favorites": "收藏",
            "Admin settings": "设置",
            "All clear!": "全清!",
            "An estimate of the number of units of work remaining to complete this bug": "估计解决此BUG还需要多少单位的工作量",
            "An estimate of the number of units of work remaining to complete this task": "估计完成此任务还需要多少单位的工作量",
            "Are you sure you want to delete the selected work item(s)?": "你确定要删除这些选中的工单吗?",
            "Are you sure you want to leave the page?": "你确定要离开页面吗？",
            "Area": "功能区域",
            "Area filter": "功能区域过滤",
            "Area Path": "功能分区",
            "Assessment of the effect of the bug on the project": "评估BUG对项目所产生的影响",
            "Assigned To": "指派给",
            "Assigned to": "指派给",
            "Assigned to me": "指派给我",
            "Assigned to filter": "指派过滤",
            "Attachments": "附件",

            "Back to Work Items": "返回到工单",
            "Back to \"Assigned to me\" tab (Alt + Q)": "返回\"指派给我\"页面(Alt + Q)",
            "Back to \"Recently created\" tab (Alt + Q)": "返回\"最近创建\"页面(Alt + Q)",
            "Backlogs": "积压",
            "Boards": "看板",
            "Bold (Ctrl+B)": "粗体 (Ctrl+B)",
            "Branches": "分支",
            "Build": "构建",
            "Build & Release": "构建和发布",
            "Build and release": "构建和发布",
            "Build Definitions": "Build 定义",
            "Build ID or build number": "Build Id 或内部版本号",
            "Builds": "构建",
            "Builds succeeded": "成功的构建",
            "Bulleted list": "无序列表",
            "Business = Customer-facing epics; Architectural = Technology initiatives to support current and future business needs": "Business = 给客户带来商业价值的史诗任务; Architectural = 支持当前及未来业务需求所需要开展的技术措施",
            "Business = delivers value to a user or another system; Architectural = work to support other stories or components": "Business = 为用户或其他系统提供商业价值; Architectural = 支持其他用户故事的组件或工作",
            "Business = Services provided by the system to fulfill stakeholder needs; Architectural = Technical system services to implement business features that deliver solution value": "Business = 系统提供的服务，用以满足利益相关者的需求; Architectural = 技术系统服务，用以实现提供解决方案价值的业务功能",
            "Business importance. 1=must fix; 4=unimportant.": "业务重要性。1=必须修复; 4=不重要。", //TODO: 此条翻译失败，原因待查
            "Business Value": "商业价值",

            "Cancel": "取消",
            "Change": "切换页面",
            "Changed Date": "最后修改时间",
            "Change type...": "改变类型...",
            //"Chart is unavailable to screenreaders. Sibling table element contains screen reader available representation of chart": "",
            //"Chart screen reader information.": "",
            "Chart": "图表",
            "Classification": "分类",
            "Clear": "清除",
            "Click": "点击",
            "Close": "关闭",
            "Close (ESC)": "关闭 (ESC)",
            "closed": "关闭的",
            "Closed": "关闭的(Closed)",
            "Code": "代码",
            // "Code": "代码动态",s
            "Column Options": "列设置",
            "Column options": "列设置",
            "Columns": "列",
            "completed": "已完成的",
            "Commits": "查看提交",
            "Commit": "提交",
            "Completed": "完成",
            "Completed Work Items": "已完结的工单",
            "Comment": "注释",
            "Commits": "提交",
            "Confirm": "确认",
            "Copy to clipboard": "复制到剪贴板",
            "Create copy of work item...": "创建工单副本",
            "Create link": "创建链接",
            "Create new project": "创建一个新项目",
            "Create project": "新建项目",
            "created": "新建的",
            "Created Date": "创建日期",
            "Customize": "个性化",

            "Dashboards": "仪表板",
            "Decrease indent": "减少缩进",
            "Default branch summary": "默认分支摘要",
            "Delete": "删除",
            "Delete work item(s)": "删除工作项",
            "Design": "设计",
            "Details": "详情",
            "Development": "开发",
            "Definitions": "定义",
            "Deployment": "部署实施",
            "Deployments succeeded": "成功的部署",
            "Deployment groups": "部署分组",
            "Description": "工单描述",
            "Description or acceptance criteria for this epic to be considered complete": "完整的的史诗故事必须包含能够清晰描述该史诗故事的描述或标准",
            "Description or acceptance criteria for this feature to be considered complete": "完整的的特性必须包含能够清晰描述该特性的描述或标准",
            "Description or reference to the story that must work for this work to be considered complete": "完整的的用户故事必须包含能够清晰描述该用户故事的描述或引用",
            "Development hasn't started on this item.": "与此工单相关的开发工作暂未开始",
            "Discard": "放弃",
            "Discussion": "话题讨论",
            "Documentation": "文档撰写",
            "Don't miss important work": "不要错过重要的工作",
            "Download as Zip": "下载为 Zip",

            "e.g., Tags:\"Release Blocker\"": "例如: Tags:\"Release Blocker\"",
            "(e.g., ToDo OR revisit)": "(例如: ToDo OR revisit)",
            "Edit in Wiki": "在 Wiki 中编辑此页", // 翻译失败, 会再次动态生成节点 .edit-readme-cta
            "Edit in Wiki": "在 Wiki 中编辑此页",
            "Edit page": "编辑页面",
            "Effort": "工作量",
            "Effort (Hours)": "工作量(小时)",
            "Email...": "通过邮件发送...",
            "Email work item": "发送到邮件",
            "Enter full screen mode": "进入全屏模式",
            "Enter full screen mode (Z)": "进入全屏模式(Z)",
            "Enter title": "输入标题",
            "Epic": "史诗故事",
            "Epics": "史诗故事",
            "Epics backlog": "史诗故事积压清单",
            "Epics Backlog": "史诗故事积压清单",
            "Epics Board": "史诗故事看板",
            "Epics": "史诗故事",
            "Existing item": "现有的项",
            "Exit full screen mode": "退出全屏模式",
            "Exit full screen mode (z)": "退出全屏模式",

            "Favorites": "收藏",
            "Feature": "特性",
            "Features": "特性",
            "Features backlog": "特性积压清单",
            "Features Board": "特性看板",
            "Field 'Title' cannot be empty.": "'标题'字段不能为空",
            "File": "文件",
            "Files": "代码浏览",
            "Filter by field": "根据字段过滤",
            "Filter by keyword": "关键词过滤",
            "Filter projects": "项目过滤",
            "Folder": "文件夹",
            "Folder / Name": "文件夹/名称",
            "Follow": "跟进",
            "Following": "我跟进的",
            "Found in Build": "发现于构建",

            "Get help": "获取帮助",

            "Help": "帮助",
            "Hide": "隐藏",
            "Hide filters": "隐藏过滤器",
            "History": "历史",
            "How does the business value decay over time. Higher values make the epic more time critical": "商业价值会随着时间的流逝而衰退，商业价值更高的史诗故事往往需要更紧迫的时间",
            "How does the business value decay over time. Higher values make the feature more time critical": "商业价值会随着时间的流逝而衰退，商业价值更高的特性往往需要更紧迫的时间",
            "How to see the bug. End by contrasting expected with actual behavior.": "清晰的描述BUG如何重现的步骤。并且在最后，说明预期行为与实际行的对比。",

            "Implementation": "实现",
            "Import": "导入",
            "Importance to business": "对业务的重要性",
            "In Progress": "处理中(In Progress)",
            "Increase indent": "增加缩进",
            "Initial value for Remaining Work - set once, when work begins": "当开始此项工作时，一次性设置一个预估需要的时间",
            "Insert image": "插入图片",
            "Integrated in Build": "集成于构建",
            "Integrated in build": "集成于构建",
            //"Interactive chart. Chart. Use up and down arrows to navigate with most screen readers.": "",
            "Issue": "问题",
            "Italic (Ctrl+I)": "斜体 (Ctrl+I)",

            "Keep an eye on important work": "请时刻关注重要的工作",
            "Keyboard shortcuts": "键盘快捷键",

            "Last built": "最近一次运行",
            "Learn more about @mentions": "了解有关 @提到 的更多信息",
            "Learn more about following": "详细了解以下内容",
            "Leave": "离开",
            "Learn more": "了解详情",
            "Library": "库",
            "Link type": "链接类型",
            "Links": "链接",
            "Live updates": "实时更新",
            //"Load test" : "测试",
            "Loading...": "加载中...",
            "Loading identities....": "身份加载中...",

            //"Machines" : "测试",
            "Manage folders": "管理文件夹",
            "Manage Team Members": "管理团队成员",
            "Maximize Development": "最大化开发面板",
            "Maximize Discussion": "最大化话题讨论面板",
            "Maximize Description": "最大化描述面板",
            "Maximize Related Work": "最大化相关工作面板",
            "Maximize Repro Steps": "最大化重现步骤面板",
            "Maximize System Info": "最大化系统信息面板",
            "Members and Activity": "成员 & 动态",
            "Members": "成员",
            "Mentioned": "@提到过我",
            "Mine": "我的",
            "More Actions...": "更多...",
            "More save options": "更多保存选项",
            "Move to team project": "移动到团队项目",
            "My activity": "看不懂的(My activity)",
            "My accounts": "我的账户",
            "My organizations": "我的组织",
            "My profile": "个人档案",

            "New": "新建", // TODO: 新建按钮 
            "New": "待确认(New)",
            "New = for triage; Active = not yet fixed; Resolved = fixed not yet verified; Closed = fix verified.": "New = 等待; Active = 尚未修复; Resolved = 已修复但未验证; Closed = 修复得到验证",
            "New = New work not yet activated; Active = work remains to be done; Closed = tested and checked in.": "New = 未激活的新任务; Active = 任务进行中未完成; Closed = 经过测试并签入",
            "New = Not started yet; Active = work remains to be done; Resolved = awaiting acceptance tests; Closed = acceptance tests passed": "New = 尚未开始; Active = 工作待完成; Resolved = 等待验收测试; Closed = 验收测试通过",
            "New branch...": "新建分支...",
            "New item": "创建新项",
            "New linked work item": "新建关联工单",
            "New page": "新建页面",
            "New query": "新建查询器",
            "New work item": "新建工单",
            "New Work Item": "新建工单",
            "Next work item in the \"Assigned to me\" tab (Alt + N)": "\"指派给我\"页面的下一个工单 (Alt + N)",
            "Next work item in the \"Recently created\" tab (Alt + N)": "\"最近创建\"页面的下一个工单 (Alt + N)",
            "No attachments have been added": "没有任何附件",
            "No areas available": "当前没有任何功能区域",
            "No links have been added": "暂未添加任何链接",
            "No pull requests need your attention": "没有拉取请求需要您留意",
            "No tags available": "当前没有任何标签",
            "No types available": "当前没有任何工单类型",
            "No states available": "当前没有任何工单状态",
            "Notification settings": "通知设置",
            //"Number of Commits per day": "",
            "Numbered list": "有序列表",

            "Off": "关闭",
            "On": "开启",
            "OK": "确定",
            "Open in Queries": "查询器中打开",
            "Open selected items in Queries": "在查询中打开所选项目",
            "Operators": "操作符",
            "Original Estimate": "初步估计",
            "Overview": "总览",

            "Packages": "程序包",
            "Pin item": "固定到快捷栏",
            "Planning": "计划",
            "Priority": "优先级",
            "Project documentation": "项目说明文档",
            "Project Information": "项目信息",
            "Project name": "项目名称",
            "Project settings": "项目设置",
            "Projects": "项目",
            "Projects contain your source code, work items, automated builds and more.": "一个包含您的源代码,工作项,自动构建等相关信息的项目。",
            "Previous work item in the \"Assigned to me\" tab (Alt + P)": "\"指派给我\"页面的上一个工单 (Alt + P)",
            "Previous work item in the \"Recently created\" tab (Alt + P)": "\"最近创建\"页面的上一个工单 (Alt + P)",
            "Preview features": "预览新功能",
            "Priority for completing the epic, based on business goals": "基于业务目标评定史诗任务的优先级",
            "Priority for completing the feature, based on business goals": "基于业务目标评定特性的优先级",
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
            "Remaining": "余量",
            "Remove Formatting": "清楚格式",
            "Remove from favorites": "取消收藏",
            "Remove link": "取消关联",
            "Remove this column": "移除此列",
            "Rename": "重命名",
            "Repositories": "代码库",
            "Repository": "代码库",
            "Repro Steps": "重现步骤",
            "Requested by me": "由我请求",
            "Requirements": "需求调研",
            "Resolved Reason": "解决方案",
            "Restore": "恢复",
            "Restore Development": "还原开发面板",
            "Restore Description": "还原描述面板",
            "Restore Discussion": "还原话题讨论面板",
            "Restore Related Work": "还原相关工作面板",
            "Restore Repro Steps": "还原重现步骤面板",
            "Restore System Info": "还原系统信息面板",
            "Revert changes": "还原更改",
            "Risk": "风险",
            "Running": "运行中",
            //"Runs" : "测试",

            "Save": "保存",
            "Save & Close": "保存并关闭",
            "Search": "搜索",
            //"Search": "键入关键词开始搜索", //todo:
            "Security": "安全",
            "Suggestions": "建议",
            "Severity": "严重性",
            "Show": "显示",
            "Show filters": "显示过滤器",
            "Show less information": "折叠",
            "Sign out": "退出",
            "Sorting": "排序",
            "Sprints": "冲刺",
            // "Start storyboarding"
            "State": "状态",
            "State Graph": "状态变更图",
            "Status": "状态",
            "States": "工单状态",
            "States filter": "状态过滤",
            "Stay": "留下",
            "Stories": "用户故事",
            "Stories backlog": "用户故事积压清单",
            "Stories Board": "用户故事看板",
            "Stories": "用户故事",
            "Story Points": "故事点",
            "succeeded": "成功",
            "Summary": "概要",
            "System Info": "系统信息",

            "Tags": "标签",
            "Tags": "标签",
            "Tags": "标签",
            "Tags": "标签",
            "Tags filter": "标签过滤",
            "Target Date": "目标日期",
            "Templates": "模板",
            "Task": "任务",
            "Task groups": "任务分组",
            "Test": "测试",
            "Test Case": "测试用例",
            //"Test Plans*" : "测试计划*",
            "Test Plan": "测试计划",
            "Test Suite": "测试套件(Test Suite)",
            "Testing": "测试",
            "There are no links in this group.": "此组中没有链接。",
            "The area of the product to which this task contributes": "此任务贡献的产品区域",
            "The area of the product with which this bug is associated": "与此BUG相关联的产品功能区域",
            "The area of the product with which this epic is associated": "与此史诗故事相关联的产品功能区域",
            "The area of the product with which this feature is associated": "与此特性相关联的产品功能区域",
            "The area of the product with which this user story is associated": "与此用户故事相关联的产品功能区域",
            "The build in which the bug was found": "BUG产生于哪一次构建",
            "The build in which the bug was fixed": "BUG修复于哪一次构建",
            "The business value for the customer when the epic is released": "史诗故事发布给客户带来的商业价值",
            "The business value for the customer when the feature is released": "特性发布给客户带来的商业价值",
            "The estimated effort to implement the feature": "预估实现特性所需要的工作量",
            "The estimated effort to implemented the epic": "预估实现史诗所需要的工作量",
            "The iteration within which this bug will be fixed": "该BUG计划在哪个迭代进行修复",
            "The iteration within which this epic will be implemented": "该史诗故事计划在哪个迭代中实现",
            "The iteration within which this feature will be implemented": "该特性计划在哪个迭代中实现",
            "The iteration within which this task will be completed": "该任务计划在哪个迭代中完成",
            "The iteration within which this user story will be implemented": "该用户故事计划在哪个迭代中实现",
            "The number of units of work that have been spent on this bug": "已经消耗在这个BUG上的工作量",
            "The number of units of work that have been spent on this task": "已经消耗在这个任务上的工作量",
            "The reason why the bug is in the current state": "BUG之所以处于当前状态的原因",
            "The reason why the epic is in its current state": "史诗故事之所以处于当前状态的原因",
            "The reason why the feature is in its current state": "特性之所以处于当前状态的原因",
            "The reason why the story is in its current state": "用户故事之所以处于当前状态的原因",
            "The reason why the task is in its current state": "任务之所以处于当前状态的原因",
            "The reason why the bug was resolved": "错误解决的原因",
            "The size of work estimated for fixing the bug": "估计修复这个BUG的工作量",
            "The size of work estimated for implementing this user story": "估计实现这个用户格式的工作量",
            "The target date for completing the epic": "完成史诗任务的目标日期",
            "The target date for completing the feature": "完成特性的目标日期",
            "This account": "本账户内搜索",
            "This project": "本项目内搜索",
            "Time Criticality": "时间紧迫性",
            //"Time range for showing activity data": "",
            "Title": "标题",
            "to get updates about the items you want to track.": "获取跟进的工单的进度更新。",
            "Triggered by": "触发",
            "Type of work involved": "该工单的工作形式",
            "Types filter": "类型过滤",
            "Types": "工单类型",

            "Unassigned": "未指派",
            "Uncertainty in feature": "特性面临不确定性时，用于提示风险",
            "Uncertainty in requirement or design": "需求和设计面临不确定性时，用于提示风险",
            "Underline (Ctrl+U)": "下划线 (Ctrl+U)",
            "Unpin item": "从快捷栏取消固定",
            "Upload file(s)": "上传文件",
            "Usage": "使用详情",
            "User Story": "用户故事",

            "Value area": "价值范围",
            "Version control": "版本控制系统",
            "View options": "设置",

            "What's new in VSTS": "VSTS 新特性(英文)",
            "Work": "工作",
            "What to do, pointers to resources and inputs, design notes, exit criteria": "该怎么做，指明资源和输入条件、设计说明、以及完成标准",
            "Work Items": "工单",
            "Work item process": "工作组织流程",

            // X

            "You can restore deleted work items from the Recycle Bin until they are permanently deleted based on auto-delete settings (disabled).": "在它们根据自动删除设置（已禁用）被永久删除之前，您都可以从回收站还原已删除的工作项。",
            "You have modified this work item.  Close and lose changes?": "您已经修改了工单，关闭此页面会导致修改丢失，确认吗？",
        },
        "regexp": [
            [/by (\d+) authors/, "由 $1 个作者提交"],
            [/(\d+) comments/, "$1 条讨论话题"],
        ]
    },

    "richeditor-toolbar": {
        "static": {
            "Remove link": "移除链接",
        }
    }
};