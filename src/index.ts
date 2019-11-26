import options from "./options";
import extensions from "./extensions/index"

const markdownParser = import("showdown").then( (showdown) => {
    return new showdown.default.Converter({extensions: [...extensions], ...options});
})

export default markdownParser;