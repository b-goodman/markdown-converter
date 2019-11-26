import * as showdown from "showdown";
import options from "./options";
import extensions from "./extensions/index"

const markdownParser = new showdown.Converter({extensions: [...extensions], ...options});

export default markdownParser;