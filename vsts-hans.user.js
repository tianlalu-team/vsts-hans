// ==UserScript==
// @namespace    vsts-hans
// @name         VSTS 汉化插件
// @description  汉化 VSTS 界面的部分菜单及内容!
// @copyright    2018, 天啦噜天团 (https://tianlalu-team.github.io/)
// @license      MIT
// @icon         https://vsassetscdn.azure.cn/content/icons/favicon.ico
// @version      1.0.0
// @author       天啦噜天团
// @homepageURL  https://tianlalu-team.github.io/
// @updateURL    https://raw.githubusercontent.com/tianlalu-team/vsts-hans/master/vsts-hans.user.js
// @downloadURL  https://raw.githubusercontent.com/tianlalu-team/vsts-hans/master/vsts-hans.user.js
// @match        https://*.visualstudio.com/*
// @require      https://raw.githubusercontent.com/tianlalu-team/vsts-hans/master/locals-hans.js
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==
/* jshint -W097 */
/* global GM_addStyle */
/* jshint asi: true, multistr: true */

(function (window, document, undefined) {
    'use strict';

    // 测试代码,测试组件内翻译失败时会调用公共翻译资源进行再一次翻译
    // I18N.zh['__common']['static']['Search'] = '搜索(本翻译来自于 __common)';
    // I18N.zh['__global-navigation'] = undefined;
    // I18N.zh['__common']['regexp'].push([/Planned Effort: (\d+)/, "计划工作量: $1"]);

    // I18N.zh['search-filter-caption'] = {
    //     'static': {
    //         'Filter by field': '根据字段过滤',
    //         'Operators': '操作符',
    //         'e.g., Tags:"Release Blocker"': '例如: Tags:"Release Blocker"',
    //         '(e.g., ToDo OR revisit)': '(例如: ToDo OR revisit)'
    //     }
    // };

    /**
     * 翻译思路:
     *    遍历节点的全部子节点，根据节点的 class 属性来判断是否需要特殊化翻译，
     *    如果节点需要特殊化处理，该节点下所有的子节点全部进行特殊化翻译，否则进行普通翻译
     *    普通翻译匹配全局资源进行翻译
     *    特殊化翻译首先根据匹配到的class进行特殊化翻译，翻译不成功用普通翻译进行补充
     */

    var debug = true; // 调试模式
    var lang = 'zh'; // 中文

    // 构建正则表达式
    var components = Object.keys(I18N[lang]).filter(function (key) {
        return key.substring(0, 2) !== '__';
    });

    I18N.conf.reComponent = eval('/\\b(' + components.join("|") + ')\\b/');
    I18N.conf.reIgnore = eval('/(' + I18N.conf.reIgnoreClasses.join("|") + ')/');

    window.addEventListener('load', function () {
        log('文档onload')
        walk(document.body);
    });

    // 在一个节点作为子节点被插入到另一个节点中时触发;
    document.addEventListener('DOMNodeInserted', function (e) {
        log('动态增加节点:', e.target, e.target.outerHTML);
        walk(e.target);
    });

    // 在DOM结构中发生任何变化时触发
    // document.addEventListener('DOMSubtreeModified', function (e) {
    //     //log(e);
    // });

    // 在文本节点的值发生变化的时候触发
    // 用于修补部分文本直接变更时，并不触发 DOMNodeInserted 事件情况的再次翻译
    document.addEventListener('DOMCharacterDataModified', function (e) {
        var str = translate(e.newValue, '__common'); // 翻译已知组件
        if (str !== false || str === e.newValue) { // 组件翻译完成
            e.target['data'] = str;
        } else {
            log('文本变更', e);
        }
    });

    function walk(node) {
        if (ignore(node))
            return;

        // TODO: 快捷键会截断英文单词，如何翻译?
        if (node.accesskey) {
            log('存在快捷键', node);
        }

        var component = false;

        // 如果当前节点存在 class 且 class 可以匹配出需要翻译的组件
        if (node.className && node.className.match) {
            component = node.className.match(I18N.conf.reComponent);
        }

        if (component) {
            log('匹配组件成功:', component, node, node.outerHTML);

            //TODO: 如果匹配出多个，需要循环翻译
            if (component.length > 2)
                log('神奇的一幕出现了，一个节点匹配到多个组件名称:', component);

            walkComponent(component[1] || '__common', node);
        } else {

            transNode('__common', node);
            // 继续下探
            var nodes = node.childNodes;
            for (var i = 0, len = nodes.length; i < len; i++) {
                walk(nodes[i])
            }
        }
    }

    function walkComponent(component, node) {
        if (ignore(node))
            return;

        // TODO: 快捷键会截断英文单词，如何翻译?
        if (node.accesskey) {
            log('存在快捷键', node);
        }

        transNode(component, node);

        // 继续下探
        var nodes = node.childNodes;
        for (var i = 0, len = nodes.length; i < len; i++) {
            walkComponent(component, nodes[i])
        }
    }

    /**
     * 对 Html Document 对象节点进行翻译
     * @param {string} component 
     * @param {Element} node
     */
    function transNode(component, node) {
        if (node.nodeType === Node.ELEMENT_NODE) { // 元素节点处理
            if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') { // 输入框 按钮 文本域
                if (node.type === 'button' || node.type === 'submit') {
                    transElement(component, node, 'value');
                } else {
                    transElement(component, node, 'placeholder');
                }
            } else if (node.hasAttribute('aria-label')) { // 带提示的元素，类似 tooltip 效果的
                transElement(component, node, 'aria-label', true);

                //if (node.hasAttribute('data-copied-hint')) { // 复制成功提示
                //    transElement(node.dataset, 'copiedHint');
                //}
            } else if (node.tagName === 'OPTGROUP') { // 翻译 <optgroup> 的 label 属性
                transElement(component, node, 'label');
            }

            // 试过了，无效
            // if(node.hasAttribute('data-selection-key')) { // 下拉项选中时会显示这个值
            //     transElement(component, node, 'data-selection-key', true);
            // }

            //if (node.hasAttribute('data-disable-with')) { // 按钮等待提示
            //    transElement(node.dataset, 'disableWith');
            //}
        } else if (node.nodeType === Node.TEXT_NODE) { // 文本节点翻译
            log("翻译文本, component = " + component + ", node = " +  node);
            transElement(component, node, 'data');
        }
    }

    /**
     * 检查节点是否需要跳过(不需要翻译)
     * @param {Element} node 
     */
    function ignore(node) {

        // 跳过 style、link、script 节点
        if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName === 'STYLE' || node.tagName === 'LINK' || node.tagName === 'SCRIPT') {
                log('跳过 style、link、script 节点', node, node.outerHTML);
                return true;
            }
        }

        // 跳过 Wiki文档, Git 文件浏览, 代码显示等
        if (I18N.conf.reIgnore.test(node.className)) {
            log('跳过 class 匹配到的节点', node, node.outerHTML);
            return true;
        }

        if (node.nodeType === Node.TEXT_NODE) {
            // 跳过文本内容长度为1的文本
            var text = node['data'];
            if (text !== null && text.length === 1) {
                log('跳过单独的英文字母', node, node.outerHTML);
                return true;
            }

            // 全是数字的文本节点也要过滤
            if (/^\d+$/.test(text)) {
                log('跳过全数字文本', node, node.outerHTML);
                return true;
            }
        }

        // 工单标记窗口中对于工单状态动态添加如下 node:
        //    <li id="353" role="option" aria-posinset="3" aria-setsize="5" data-id="2">New</li>
        // 此节点无需翻译，因此节点不含class，无法通过class进行过滤，所以采用写死的方式，TODO: 此方法待验证
        if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'LI' && node.hasAttribute('role') && node.getAttribute('role') === 'option') {
            log("li[role='option']", node, node.outerHTML);
            return true;
        }

        return false;
    }


    /**
     * 翻译节点对应属性内容
     *
     * @param {string} component 组件Id
     * @param {object} el 对象
     * @param {string} field 属性字段
     * @param {boolean} isAttr 是否是 attr 属性
     *
     * @returns {boolean}
     */
    function transElement(component, el, field, isAttr) {
        var transText = false; // 翻译后的文本

        if (isAttr === undefined) { // 非属性翻译
            transText = translate(el[field], component);
        } else {
            transText = translate(el.getAttribute(field), component);
        }

        if (transText === false) { // 无翻译则退出
            log("翻译失败, component = " + component + ", el = " +  el + ", field = " +  field + ", isAttr = " +  isAttr);
            return false;
        }

        // 替换翻译后的内容
        if (isAttr === undefined) {
            el[field] = transText;
        } else {
            el.setAttribute(field, transText);
        }
    }

    /**
     * 翻译文本
     *
     * @param {string} text 待翻译字符串
     * @param {string} component 组件字段
     *
     * @returns {string|boolean}
     */
    function translate(text, component) { // 翻译
        // log("translate", text, component);
        log("translate, component = " + component + ", text = " +  text);

        var str;
        var _key = text.trim(); // 去除首尾空格的 key
        var _key_neat = _key
            .replace(/\xa0/g, ' ') // 替换 &nbsp; 空格导致的 bug
            .replace(/\s{2,}/g, ' ') // 去除多余换行空格等字符，(试验测试阶段，有问题再恢复)
            ;

        if (_key_neat === '') {
            return false;
        } // 内容为空不翻译

        str = transComponent(component, _key_neat); // 翻译已知组件

        if (str !== false || str === _key_neat) { // 组件翻译完成
            return text.replace(_key, str); // 替换原字符，保留空白部分
        }

        if (component === '__common')
            return false;

        // 组件资源翻译失败后，尝试使用公共资源进行翻译
        str = transComponent('__common', _key_neat); // 公共资源翻译
        if (str !== false || str === _key_neat) { // 公共资源翻译完成
            return text.replace(_key, str); // 替换原字符，保留空白部分
        }

        return false;
    }

    /**
     * 翻译页面内容
     *
     * @param {string} component 组件
     * @param {string} key 待翻译内容
     *
     * @returns {string|boolean}
     */
    function transComponent(component, key) {
        var str; // 翻译结果
        var res; // 正则数组

        if (!I18N[lang][component])
            return false;

        // 静态翻译
        str = I18N[lang][component]['static'][key];
        if (str) {
            return str;
        }

        log("尝试使用正则表达式翻译, component = " + component + ", key = " +  key);
        // 正则翻译
        res = I18N[lang][component].regexp;
        if (res) {
            for (var i = 0, len = res.length; i < len; i++) {
                str = key.replace(res[i][0], res[i][1]);
                if (str !== key) {
                    return str;
                }
            }
        }

        return false; // 没有翻译条目
    }

    function log(message, optionalParams) {
        if (debug)
            console.log(message, optionalParams);
    }
})(window, document);