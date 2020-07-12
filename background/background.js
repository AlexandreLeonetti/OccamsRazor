"use strict";

 const settings = {
        pattern: "<all_urls>",
        isBlocking: true,
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
 let handler = undefined;
     const blockingHandler = requestDetails => {
        return {
            cancel: settings.isBlocking
        };
    };
	
	    handler = blockingHandler;
 chrome.webRequest.onBeforeRequest.addListener(
        handler,
        {
            urls: [
                settings.pattern
            ],
            types: [
                "image"
            ]
        },
        [
            "blocking"
        ]
    );
