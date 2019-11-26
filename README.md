# markdown-converter

Module exports a Showdown converter instance.

```javascript
const md = require('markdown-converter');

const text = '```javascript\nconst str = "test";\n```';
md.then((f) => {
    console.log(f.makeHtml(text))
});
//'<p><syntax-highlight class="language-javascript"><pre><code class="language-javascript">const str = "test";\n</code></pre></syntax-highlight></p>'
```
