import markdownParser from "../src/index";

it("converts header lv. 1", () => {
    const text = '# header lv. 1';
    const html = markdownParser.makeHtml(text);
    expect( html ).toEqual("<h1>header lv. 1</h1>");
});

it("converts header lv. 2", () => {
    const text = '## header lv. 2';
    const html = markdownParser.makeHtml(text);
    expect( html ).toEqual("<h2>header lv. 2</h2>");
});


it("converts code block to use custom element 'syntax-highlight'", () => {
    const text = '```javascript\nconst str = "test";\n```';
    const html = markdownParser.makeHtml(text).replace(/\n/g, '');
    expect( html ).toEqual('<p><syntax-highlight class="language-javascript"><pre><code class="language-javascript">const str = "test";</code></pre></syntax-highlight></p>');
});
