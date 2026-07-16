// background.js - Service Worker for Share This Page Pro
console.log('Share This Page Pro background script loaded');

// Handle extension icon click - open side panel
chrome.action.onClicked.addListener((tab) => {
    console.log('Extension icon clicked, opening side panel');
    try {
        chrome.sidePanel.open({ tabId: tab.id });
    } catch (error) {
        console.error('Error opening side panel:', error);
        // Fallback: open as popup
        chrome.windows.create({
            url: chrome.runtime.getURL('panel.html'),
            type: 'popup',
            width: 400,
            height: 600
        });
    }
});

// Try to set panel behavior if supported
try {
    if (chrome.sidePanel && chrome.sidePanel.setPanelBehavior) {
        chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
            .then(() => console.log('Panel behavior set successfully'))
            .catch(err => console.log('setPanelBehavior error:', err));
    }
} catch (error) {
    console.log('sidePanel API not fully supported:', error);
}

// Listen for messages from the panel
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Background received message:', message);

    if (message.type === 'getCurrentTab') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            console.log('Tabs found:', tabs);
            if (tabs && tabs.length > 0) {
                const tab = tabs[0];
                const response = {
                    url: tab.url || 'about:blank',
                    title: tab.title || 'Untitled Page'
                };
                console.log('Sending tab info:', response);
                sendResponse(response);
            } else {
                sendResponse({
                    url: 'about:blank',
                    title: 'No active tab'
                });
            }
        });
        return true; // Keep message channel open for async response
    }

    if (message.type === 'share') {
        console.log(`🔗 Shared to ${message.platform}: ${message.url}`);
        sendResponse({ success: true });
    }

    if (message.type === 'ping') {
        console.log('Ping received, sending pong');
        sendResponse({ status: 'ok' });
    }
});

// Log installation
chrome.runtime.onInstalled.addListener((details) => {
    console.log('Share This Page Pro installed:', details);
});