"use strict";


const checkStoredSettings = storedSettings => {
    /** @type {ImageBlockXState} */
    const defaultState = {
        pattern: "<all_urls>",
        isBlocking: false,
        isReloadingOnToggle: false,

        ui: {
            windowDetails: {
                title: "Images are allowed",
            },
            icon: {
                path: "icons/image_allowed.svg",
            },
        },
    };

    // TODO: Find way to merge settings if incomplete (how could that happen however?)
    if (!storedSettings.pattern ||
        !storedSettings.isBlocking ||
        !storedSettings.isReloadingOnToggle ||
        !storedSettings.ui) {
        console.debug("Stored settings not found, loading default");
        browser.storage.local.set(defaultState).then(
            () => console.debug("Default settings loaded")
        );
    }
}; //1


const updateState = (state) => {
    if (state.isBlocking) {
        state.ui = {
            windowDetails: {
                title: "Images are blocked",
             },
            icon: {
                path: "icons/image_blocked.svg",
            },
        }
    } else {
        state.ui = {
            windowDetails: {
                title: "Images are allowed",
            },
            icon: {
                path: "icons/image_allowed.svg",
            },
        }
    }
    return state;
};//2


const updateUI = (state) => {
    browser.browserAction.setIcon(state.ui.icon).then();
    browser.browserAction.setTitle(state.ui.windowDetails).then();
};//3



let handler = undefined;//4


const toggleBlocking = settings => {

    const blockingHandler = requestDetails => {
        return {
            cancel: settings.isBlocking
        };
    };

    if (handler) {
        browser.webRequest.onBeforeRequest.removeListener(handler);
    }

    settings.isBlocking = !settings.isBlocking;

    handler = blockingHandler;
    browser.webRequest.onBeforeRequest.addListener(
        handler,
        {
            urls: [
                settings.pattern
            ],
            types: [
                "image",
                "imageset"
            ]
        },
        [
            "blocking"
        ]
    );

    settings = updateState(settings);
    updateUI(settings); 

    // Reload  on toggle
    if (settings.isReloadingOnToggle) {
        browser.tabs.reload().then(
            () => console.debug("Current page reloaded..."),
            e => console.error(e)
        );
    }

    browser.storage.local.set(settings).then(
        () => console.debug("Settings saved"),
        e => console.error(e)
    );

    return blockingHandler;
};//5


(() => {
    browser.storage.local.get().then(
        settings => {
            checkStoredSettings(settings);
            updateState(settings);
            updateUI(settings);
        },
        e => console.error(e));

 
    browser.browserAction.onClicked.addListener(() => {
        browser.storage.local.get().then(
            settings => toggleBlocking(settings),
            e => console.error(e));
    });
})();//6
