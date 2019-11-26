import showdown from "showdown";

const options: showdown.ShowdownOptions = {
    omitExtraWLInCodeBlocks: true,
    tables: true,
    noHeaderId: true,
}

export default options;

