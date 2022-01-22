const callback = function (mutations, observer) {
    for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
            node.querySelector("button.watch-video--skip-content-button")?.firstChild.click();
        }
    }
};
const mutationObserver = new MutationObserver(callback);

const element = document.documentElement;
const config = { attributes: true, childList: true, subtree: true };
mutationObserver.observe(element, config);