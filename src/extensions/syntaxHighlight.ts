import showdown from "showdown";

const syntaxHighlight = (): showdown.ShowdownExtension | showdown.ShowdownExtension[] => {
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
        {
            type: 'output',
            regex: /<p>(<syntax-highlight[^]+<\/syntax-highlight>)<\/p>/gi,
            replace: '$1'
        },
    ]
};

export default syntaxHighlight;