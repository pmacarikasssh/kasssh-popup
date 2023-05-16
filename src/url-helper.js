
export const getScriptURL = (scriptName = "popup.js") => {
    var script =
        document.currentScript ||
        document.querySelector(`script[src*="${scriptName}"]`);
    const [, url] = script.src.match(/^(.*)(\/.*\.js)/);
    return url;
};
