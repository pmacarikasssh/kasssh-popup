
export const getScriptURL = (scriptName) => {
    var script =
        document.currentScript ||
        document.querySelector(`script[src*="${scriptName}"]`);
    const [, url] = script.src.match(/^(.*)(\/.*\.js)/);
    return url;
};
