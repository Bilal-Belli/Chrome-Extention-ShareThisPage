// ==========================================
// PLATFORM LIST - All 100+ platforms
// ==========================================
const PLATFORMS = [
    // Communication / social
    { name: 'Gmail', icon: 'fas fa-envelope' },
    { name: 'Facebook', icon: 'fab fa-facebook' },
    { name: 'X', icon: 'fab fa-twitter' },
    { name: 'Instagram', icon: 'fab fa-instagram' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in' },
    { name: 'Reddit', icon: 'fab fa-reddit-alien' },
    { name: 'TikTok', icon: 'fab fa-tiktok' },
    { name: 'Snapchat', icon: 'fab fa-snapchat-ghost' },
    { name: 'Pinterest', icon: 'fab fa-pinterest' },
    { name: 'Tumblr', icon: 'fab fa-tumblr' },
    { name: 'Threads', icon: 'fab fa-threads' },
    { name: 'Bluesky', icon: 'fas fa-cloud-sun' },
    { name: 'Mastodon', icon: 'fab fa-mastodon' },
    // Video
    { name: 'YouTube', icon: 'fab fa-youtube' },
    { name: 'Vimeo', icon: 'fab fa-vimeo-v' },
    { name: 'Dailymotion', icon: 'fab fa-vimeo' },
    { name: 'Twitch', icon: 'fab fa-twitch' },
    { name: 'Utreon', icon: 'fas fa-video' },
    { name: 'DTube', icon: 'fas fa-play-circle' },
    { name: 'PeerTube', icon: 'fas fa-share-alt' },
    { name: 'Rumble', icon: 'fas fa-bolt' },
    { name: 'TED', icon: 'fas fa-chalkboard' },
    // Social / Russian / Asian
    { name: 'VKontakte', icon: 'fab fa-vk' },
    { name: 'WeChat', icon: 'fab fa-weixin' },
    // Messaging
    { name: 'WhatsApp', icon: 'fab fa-whatsapp' },
    { name: 'Telegram', icon: 'fab fa-telegram-plane' },
    { name: 'Messenger', icon: 'fab fa-facebook-messenger' },
    { name: 'Discord', icon: 'fab fa-discord' },
    { name: 'Signal', icon: 'fas fa-comment-dots' },
    { name: 'LINE', icon: 'fab fa-line' },
    { name: 'Viber', icon: 'fab fa-viber' },
    // Cloud storage
    { name: 'Google Drive', icon: 'fab fa-google-drive' },
    { name: 'Microsoft OneDrive', icon: 'fab fa-microsoft' },
    { name: 'Dropbox', icon: 'fab fa-dropbox' },
    { name: 'Box', icon: 'fas fa-box' },
    { name: 'iCloud Drive', icon: 'fas fa-cloud' },
    { name: 'MediaFire', icon: 'fas fa-fire' },
    { name: 'WeTransfer', icon: 'fas fa-exchange-alt' },
    { name: 'Filemail', icon: 'fas fa-mail-bulk' },
    { name: 'Jumpshare', icon: 'fas fa-share-square' },
    { name: 'Razuna', icon: 'fas fa-database' },
    { name: 'ShareFile', icon: 'fas fa-file-alt' },
    { name: 'Egnyte', icon: 'fas fa-server' },
    // Docs / publishing
    { name: 'SlideShare', icon: 'fab fa-slideshare' },
    { name: 'Scribd', icon: 'fas fa-file-pdf' },
    { name: 'Google Docs', icon: 'fas fa-file-alt' },
    { name: 'Google Sites', icon: 'fas fa-globe' },
    { name: 'GitBook', icon: 'fab fa-git-alt' },
    { name: 'Wikibooks', icon: 'fas fa-book-open' },
    { name: 'Bookdown', icon: 'fas fa-book' },
    { name: 'Jupyter Notebooks', icon: 'fas fa-code' },
    { name: 'Scalar', icon: 'fas fa-sitemap' },
    { name: 'Mermaid', icon: 'fas fa-code-branch' },
    { name: 'Diff Viewer', icon: 'fas fa-code' },
    { name: 'Notepad Tab', icon: 'fas fa-sticky-note' },
    { name: 'IBAN Advertiser', icon: 'fas fa-ad' },
    // Reviews / UGC
    { name: 'Yotpo', icon: 'fas fa-star' },
    { name: 'Bazaarvoice', icon: 'fas fa-comment' },
    { name: 'Flowbox', icon: 'fas fa-images' },
    { name: 'Tint', icon: 'fas fa-palette' },
    { name: 'Emplifi', icon: 'fas fa-chart-line' },
    { name: 'Nosto', icon: 'fas fa-tag' },
    { name: 'Taggbox', icon: 'fas fa-hashtag' },
    { name: 'CrowdRiff', icon: 'fas fa-camera' },
    { name: 'Pixlee', icon: 'fas fa-image' },
    { name: 'PowerReviews', icon: 'fas fa-star-half-alt' },
    { name: 'Billo', icon: 'fas fa-video' },
    { name: 'Trend.io', icon: 'fas fa-chart-simple' },
    // Blog / read
    { name: 'Medium', icon: 'fab fa-medium' },
    { name: 'Blogger', icon: 'fab fa-blogger' },
    { name: 'WordPress', icon: 'fab fa-wordpress' },
    { name: 'Pocket', icon: 'fab fa-get-pocket' },
    { name: 'Instapaper', icon: 'fas fa-bookmark' },
    { name: 'Raindrop.io', icon: 'fas fa-cloud-rain' },
    { name: 'Refind', icon: 'fas fa-search-plus' },
    { name: 'Flipboard', icon: 'fab fa-flipboard' },
    { name: 'Digg', icon: 'fab fa-digg' },
    { name: 'Hacker News', icon: 'fab fa-hacker-news' },
    { name: 'Plurk', icon: 'fas fa-comment' },
    { name: 'Weibo', icon: 'fab fa-weibo' },
    // Dev / tools
    { name: 'GitHub', icon: 'fab fa-github' },
    { name: 'TS Playground', icon: 'fas fa-code' },
    { name: 'Carbon', icon: 'fas fa-code' },
    { name: 'IconKitchen', icon: 'fas fa-icons' },
    { name: 'keygen', icon: 'fas fa-key' },
    { name: 'YouTube Card Generator', icon: 'fab fa-youtube' },
    { name: 'Hatena Bookmark', icon: 'fas fa-bookmark' },
    // Social media management
    { name: 'Buffer', icon: 'fas fa-layer-group' },
    { name: 'Sprout Social', icon: 'fas fa-seedling' },
    // Education
    { name: 'Canvas Commons', icon: 'fas fa-paint-roller' },
    { name: 'OER Commons Open Author', icon: 'fas fa-university' },
    { name: 'Pressbooks', icon: 'fas fa-book' },
    // Productivity
    { name: 'Evernote', icon: 'fab fa-evernote' },
    { name: 'Trello', icon: 'fab fa-trello' },
    { name: 'Slack', icon: 'fab fa-slack' },
    { name: 'Character.AI Feed', icon: 'fas fa-robot' },
    { name: 'FanFiction.net', icon: 'fas fa-pen-fancy' },
    { name: 'Feedly', icon: 'fas fa-rss' },
];

// ==========================================
// DOM REFERENCES
// ==========================================
const container = document.getElementById('platformContainer');
const searchInput = document.getElementById('searchInput');
const pageInfo = document.getElementById('pageInfo');

// ==========================================
// STATE
// ==========================================
let currentTab = { url: '', title: '' };
let isReady = false;

// ==========================================
// CHECK EXTENSION CONNECTION
// ==========================================
function checkExtensionConnection() {
    return new Promise((resolve) => {
        if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
            try {
                chrome.runtime.sendMessage({ type: 'ping' }, (response) => {
                    if (response && response.status === 'ok') {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
            } catch (e) {
                console.log('❌ Extension connection error:', e);
                resolve(false);
            }
        } else {
            console.log('❌ Chrome API not available');
            resolve(false);
        }
    });
}

// ==========================================
// GET CURRENT TAB INFO
// ==========================================
function getCurrentTab() {
    return new Promise((resolve) => {
        // First try to use direct chrome.tabs API if available (in popup/panel context)
        if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.query) {
            try {
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                    if (tabs && tabs.length > 0) {
                        const tab = tabs[0];
                        currentTab.url = tab.url || 'about:blank';
                        currentTab.title = tab.title || 'Untitled Page';
                        resolve(currentTab);
                    } else {
                        getTabViaBackground(resolve);
                    }
                });
                return;
            } catch (e) {
                console.warn('⚠️ Direct chrome.tabs.query failed, falling back to message:', e);
            }
        }

        getTabViaBackground(resolve);
    });
}

function getTabViaBackground(resolve) {
    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
        try {
            chrome.runtime.sendMessage({ type: 'getCurrentTab' }, (response) => {
                if (response && response.url) {
                    currentTab.url = response.url;
                    currentTab.title = response.title || 'Untitled Page';
                } else {
                    console.warn('⚠️ No tab info from background, using page URL');
                    currentTab.url = window.location.href || 'about:blank';
                    currentTab.title = document.title || 'Current Page';
                }
                resolve(currentTab);
            });
        } catch (e) {
            console.error('❌ Error sending message to background:', e);
            fallbackTab(resolve);
        }
    } else {
        fallbackTab(resolve);
    }
}

function fallbackTab(resolve) {
    currentTab.url = window.location.href || 'about:blank';
    currentTab.title = document.title || 'Current Page';
    resolve(currentTab);
}

// ==========================================
// UPDATE PAGE INFO DISPLAY
// ==========================================
function updatePageInfo() {
    if (currentTab.url && currentTab.url !== 'about:blank') {
        pageInfo.innerHTML = `
          <strong>📄 ${currentTab.title}</strong><br>
          <span class="url">${currentTab.url}</span>
        `;
        pageInfo.className = 'page-info visible';
    } else {
        pageInfo.className = 'page-info';
    }
}

// ==========================================
// RENDER PLATFORMS
// ==========================================
function renderPlatforms(filterText = '') {
    const lowerFilter = filterText.toLowerCase().trim();
    let filtered = PLATFORMS;
    if (lowerFilter !== '') {
        filtered = PLATFORMS.filter(p =>
            p.name.toLowerCase().includes(lowerFilter)
        );
    }

    if (filtered.length === 0) {
        container.innerHTML = `
          <div class="empty-message">
            <i class="fas fa-search-minus"></i>
            No platforms found for “${filterText}”
          </div>
        `;
        return;
    }

    let html = '';
    for (const platform of filtered) {
        html += `
          <div class="platform-item" data-platform="${platform.name}">
            <div class="icon-box">
              <i class="${platform.icon}"></i>
            </div>
            <span class="platform-name">${platform.name}</span>
            <span class="share-action"><i class="fas fa-external-link-alt"></i> Share</span>
          </div>
        `;
    }
    container.innerHTML = html;

    // Add click handlers
    document.querySelectorAll('.platform-item').forEach((item) => {
        const platformName = item.dataset.platform;
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            handleShare(platformName);
        });
    });

    isReady = true;
}

// ==========================================
// HANDLE SHARE
// ==========================================
async function handleShare(platform) {
    try {
        // Get fresh tab info
        await getCurrentTab();
        updatePageInfo();

        if (!currentTab.url || currentTab.url === 'about:blank' || currentTab.url === '') {
            showNotification('⚠️ No page loaded to share');
            return;
        }

        const shareText = `${currentTab.title} - ${currentTab.url}`;

        // Try to copy to clipboard
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(shareText);

            // Notify background
            if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
                try {
                    chrome.runtime.sendMessage({
                        type: 'share',
                        platform: platform,
                        url: currentTab.url,
                        title: currentTab.title
                    });
                } catch (e) {
                    console.log('Background message failed:', e);
                }
            }

            showNotification(`✅ Copied! Ready to share on ${platform}`);
        } else {
            // Fallback
            showNotification(`📋 Share on ${platform}:\n${shareText}`);
        }
    } catch (error) {
        console.error('Share error:', error);
        showNotification('❌ Error sharing. Please try again.');
    }
}

// ==========================================
// NOTIFICATION
// ==========================================
function showNotification(message) {
    const existing = document.querySelector('.share-notification');
    if (existing) existing.remove();

    const notif = document.createElement('div');
    notif.className = 'share-notification';
    notif.textContent = message;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 0.3s';
        setTimeout(() => {
            if (notif.parentNode) notif.remove();
        }, 300);
    }, 3000);
}

// ==========================================
// INITIALIZE
// ==========================================
async function init() {
    // Render platforms immediately so the user sees them without waiting
    renderPlatforms('');

    // Get tab info and update page info asynchronously
    getCurrentTab().then((tab) => {
        updatePageInfo();
    }).catch((err) => {
        console.error('Error loading tab info:', err);
    });
}

// ==========================================
// MODALS HANDLERS
// ==========================================
const aboutBtn = document.getElementById('aboutBtn');
const privacyBtn = document.getElementById('privacyBtn');
const supportBtn = document.getElementById('supportBtn');

const aboutModal = document.getElementById('aboutModal');
const privacyModal = document.getElementById('privacyModal');
const supportModal = document.getElementById('supportModal');

const closeAbout = document.getElementById('closeAbout');
const closePrivacy = document.getElementById('closePrivacy');
const closeSupport = document.getElementById('closeSupport');

function openModal(modal) {
    modal.classList.add('active');
}

function closeModal(modal) {
    modal.classList.remove('active');
}

aboutBtn.addEventListener('click', () => openModal(aboutModal));
privacyBtn.addEventListener('click', () => openModal(privacyModal));
supportBtn.addEventListener('click', () => openModal(supportModal));

closeAbout.addEventListener('click', () => closeModal(aboutModal));
closePrivacy.addEventListener('click', () => closeModal(privacyModal));
closeSupport.addEventListener('click', () => closeModal(supportModal));

// Close modal when clicking outside content area
[aboutModal, privacyModal, supportModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});

// ==========================================
// EVENT LISTENERS
// ==========================================
searchInput.addEventListener('input', (e) => {
    renderPlatforms(e.target.value);
});

// Refresh when panel becomes visible
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        getCurrentTab().then(() => {
            updatePageInfo();
        });
    }
});

// ==========================================
// START
// ==========================================
init();

// For debugging - expose to console
window.__shareDebug = {
    PLATFORMS,
    currentTab,
    getCurrentTab,
    renderPlatforms,
    handleShare,
    PLATFORM_COUNT: PLATFORMS.length
};