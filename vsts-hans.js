// ==UserScript==
// @name         VSTS 汉化插件
// @description  汉化 VSTS 界面的部分菜单及内容!
// @copyright    2018, 天啦噜天团 (https://tianlalu-team.github.io/)
// @icon         https://vsassetscdn.azure.cn/content/icons/favicon.ico
// @version      0.1.1
// @author       天啦噜天团
// @homepageURL  https://tianlalu-team.github.io/
// @updateURL    https://raw.githubusercontent.com/tianlalu-team/vsts-hans/master/vsts-hans.js
// @downloadURL  https://raw.githubusercontent.com/tianlalu-team/vsts-hans/master/vsts-hans.js
// @match        https://*.visualstudio.com/*
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @require      https://raw.githubusercontent.com/tianlalu-team/vsts-hans/master/locals-hans.js
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==
/* jshint -W097 */
/* global GM_addStyle */
/* jshint asi: true, multistr: true */

(function (window, document, undefined) {
    'use strict';

    // main.js
    // ==========================================
    var $ = unsafeWindow.jQuery || window.jQuery; // 取得页面的jQuery 对象

    var lang = 'zh'; // 中文

    $(function ($) {
        walk("page", document.body); // 立即翻译页面, 解决部分组件无法通过监听动态内容的方式获取的问题
    });

    document.addEventListener('DOMNodeInserted', function (e) {

        // TODO:文本节点待处理
        if (e.target.nodeType === Node.TEXT_NODE) { // 文本节点翻译
            console.log('直接添加文本节点，也是醉了:', e.target);
            return;
            //transElement(component, node, 'data');
        }

        console.log('动态添加了内容: ', e.target, e.target.innerHTML);
        travel(e.target);
    });

    /**
     * 快速递归节点尝试去匹配组件，当匹配到组件时，对组件进行翻译，匹配失败时，快速对下一个节点进行匹配
     */
    function travel(node) {

        if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName === 'STYLE' || node.tagName === 'LINK' || node.tagName === 'SCRIPT') {
                //console.log('节点被过滤了', node);
                return;
            }
        }

        // TODO: 全是数字的文本也要过滤

        var component = false;

        // 如果当前节点存在 class 且 class 可以匹配出需要翻译的组件
        if (node.className && node.className.match) {
            component = node.className.match(I18N.conf.reComponentClass);
        }

        if (component) {
            // console.info('捕获到组件:' + component[1] || 'page', node);
            walk(component[1] || 'page', node);
        } else {
            // 继续下探
            var nodes = node.childNodes;
            for (var i = 0, len = nodes.length; i < len; i++) {
                travel(nodes[i])
            }
        }
    }

    /**
     * 遍历节点
     *
     * @param {Element} node 节点
     * @param {string} component 组件 Id
     */
    function walk(component, node) {
        // 跳过 Wiki文档, Git 文件浏览, 代码显示等
        if (I18N.conf.reIgnoreClass.test(node.className)) {
            //walk(component, node); // 遍历子节点
            return;
        }

        // TODO: 快捷键会截断英文单词，如何翻译?
        if (node.accesskey) {
            console.log('存在快捷键', node);
        }

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
            transElement(component, node, 'data');
        }

        var nodes = node.childNodes;

        for (var i = 0, len = nodes.length; i < len; i++) {
            var el = nodes[i];

            walk(component, el);
        }
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
        var str;
        var _key = text.trim(); // 去除首尾空格的 key
        var _key_neat = _key
            .replace(/\xa0/g, ' ') // 替换 &nbsp; 空格导致的 bug
            .replace(/\s{2,}/g, ' ') // 去除多余换行空格等字符，(试验测试阶段，有问题再恢复)
            ;

        if (_key_neat === '') {
            return false;
        } // 内容为空不翻译

        str = transComponent('pubilc', _key_neat); // 公共翻译

        if (str !== false && str !== _key_neat) { // 公共翻译完成
            str = transComponent('pubilc', str) || str; // 二次公共翻译（为了弥补正则部分翻译的情况）
            return text.replace(_key, str); // 替换原字符，保留空白部分
        }

        if (component === false) {
            return false;
        } // 未知页面不翻译

        str = transComponent(component, _key_neat); // 翻译已知页面
        if (str === false || str === '') {
            console.log('翻译失败:', component, _key_neat);
            return false;
        } // 未知内容不翻译

        str = transComponent('pubilc', str) || str; // 二次公共翻译（为了弥补正则部分翻译的情况）
        return text.replace(_key, str); // 替换原字符，保留空白部分
    }

    /**
     * 翻译页面内容
     *
     * @param {string} page 页面
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
})(window, document);