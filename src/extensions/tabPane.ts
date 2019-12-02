import showdown from "showdown";

const tabPane = (): showdown.ShowdownExtension | showdown.ShowdownExtension[] => {
    return [
        {
            type: 'lang',
            regex: /\[([^\]]+)\]\s?->\s?\[([^\]]+)\]/gi,
            replace: '<div data-tab="$1">$2</div>'
        },
        {
            type: 'lang',
            regex: /@tab\s+position=(\w+)([^]+)@\/tab/,
            replace: '<tab-pane tab-position="$1">$2</tab-pane>',
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
    ]
};

export default tabPane;