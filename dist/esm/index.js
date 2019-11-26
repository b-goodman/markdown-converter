/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var options = {
    omitExtraWLInCodeBlocks: true,
    tables: true,
    noHeaderId: true,
};

var syntaxHighlight = function () {
    return [
        {
            type: 'lang',
            regex: /```(\w+)\n([^]+?)```/gi,
            replace: '<syntax-highlight class="language-$1"><pre><code class="language-$1">$2</code></pre></syntax-highlight>'
        },
        {
            type: 'lang',
            regex: /```([^]+?)```/gi,
            replace: '<syntax-highlight class="language-text"><pre><code class="language-text">$1</code></pre></syntax-highlight>'
        },
    ];
};

var tabPane = function () {
    return [
        {
            type: 'lang',
            regex: /\[([^\]]+)\]\s?->\s?\[([^\]]+)\]/gi,
            replace: '<div data-tab="$1">$2</div>'
        },
        {
            type: 'lang',
            regex: /@tab([^]+)@\/tab/,
            replace: '<tab-pane tab-position="top">$1</tab-pane>',
        },
        {
            type: "output",
            regex: /<p><tab-pane (tab-position="\w+")?>\s?<\/p>/gi,
            replace: '<tab-pane $1>',
        },
        {
            type: "output",
            regex: /<p><\/tab-pane><\/p>/gi,
            replace: '</tab-pane>',
        }
    ];
};

var extensions = [
    syntaxHighlight,
    tabPane,
];

var markdownParser = import('./showdown-c3fed699.js').then(function (showdown) {
    return new showdown.default.Converter(__assign({ extensions: __spreadArrays(extensions) }, options));
});

export default markdownParser;
