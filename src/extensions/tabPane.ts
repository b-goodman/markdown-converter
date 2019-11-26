import showdown from "showdown";

const tabPane = (): showdown.ShowdownExtension | showdown.ShowdownExtension[] => {
    return [
        {
            type: 'lang',
            regex: /\[([^\]]+)\]\s?->\s?\[([^\]]+)\]/gi,
            replace: '<div data-tab="$1">$2</div>'
        }
    ]
};

export default tabPane;