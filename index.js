/**
 * Returns a promise that is resolved when an element with given
 * selector is created and added to the DOM.
 *
 * @param selector Selector of the element to check the ready state of.
 * @returns {Promise}
 */
function elementIsReady(selector) {
    return new Promise((resolve) => {
        const element = document.querySelector(selector);

        if (element !== null) {
            return resolve(element);
        }

        if ('MutationObserver' in window) {
            const observer = new MutationObserver(mutation => {
                const nodes = [...mutation.addedNodes];

                for (let node of nodes) {
                    if (node.matches && node.matches(selector)) {
                        observer.disconnect();

                        return resolve(node);
                    }
                }
            });

            observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });

        } else {
            const waitInterval = setInterval(() => {
                const element = document.querySelector(selector);

                if (element) {
                    clearInterval(waitInterval);

                    return resolve(element);
                }
            }, 50);
        }
    });
}

module.exports = elementIsReady;
