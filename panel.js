// ==========================================
// PLATFORM LIST - All 100+ platforms
// ==========================================
const PLATFORMS = [
    // Communication / social
    { name: 'Gmail', icon: 'fas fa-envelope' },
    { name: 'Facebook', icon: 'fab fa-facebook' },
    { name: 'X', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in' },
    { name: 'Reddit', icon: 'fab fa-reddit-alien' },
    { name: 'Snapchat', icon: 'fab fa-snapchat-ghost' },
    { name: 'Pinterest', icon: 'fab fa-pinterest' },
    { name: 'Tumblr', icon: 'fab fa-tumblr' },
    { name: 'Threads', icon: 'fab fa-threads' },
    { name: 'Bluesky', icon: 'fas fa-cloud-sun' },
    { name: 'Mastodon', icon: 'fab fa-mastodon' },
    // Social / Russian / Asian
    { name: 'VKontakte', icon: 'fab fa-vk' },
    // Messaging
    { name: 'WhatsApp', icon: 'fab fa-whatsapp' },
    { name: 'Telegram', icon: 'fab fa-telegram-plane' },
    { name: 'Messenger', icon: 'fab fa-facebook-messenger' },
    { name: 'Discord', icon: 'fab fa-discord' },
    { name: 'Signal', icon: 'fas fa-comment-dots' },
    { name: 'LINE', icon: 'fab fa-line' },
    { name: 'Viber', icon: 'fab fa-viber' },
    // Blog / read
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
    { name: 'Hatena Bookmark', icon: 'fas fa-bookmark' },
    // Social media management
    { name: 'Buffer', icon: 'fas fa-layer-group' },
    // Productivity
    { name: 'Evernote', icon: 'fab fa-evernote' },
    { name: 'Trello', icon: 'fab fa-trello' },
    { name: 'Slack', icon: 'fab fa-slack' },
    { name: 'Feedly', icon: 'fas fa-rss' },
];

// ==========================================
// SHARE URL GENERATORS
// ==========================================
const SHARE_URLS = {
    // === SOCIAL & MESSAGING ===
    'Gmail': (url, title) => `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    'Facebook': (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    'X': (url, title) => `https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    'LinkedIn': (url, title) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    'Reddit': (url, title) => `https://www.reddit.com/submit?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    'Pinterest': (url, title) => `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
    'Tumblr': (url, title) => `https://www.tumblr.com/share?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    'Threads': (url) => `https://www.threads.net/intent/post?text=${encodeURIComponent(url)}`,
    'Bluesky': (url, title) => `https://bsky.app/intent/compose?text=${encodeURIComponent(title + ' ' + url)}`,
    'Mastodon': (url, title) => `https://mastodon.social/share?text=${encodeURIComponent(title + ' ' + url)}`,
    'VKontakte': (url, title) => `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    'WhatsApp': (url, title) => `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    'Telegram': (url, title) => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    'Messenger': (url) => `https://www.facebook.com/dialog/send?link=${encodeURIComponent(url)}&app_id=YOUR_APP_ID&redirect_uri=${encodeURIComponent(url)}`, // Requires a FB App ID to work reliably
    'Discord': (url, title) => `https://discord.com/channels/@me?text=${encodeURIComponent(title + ' ' + url)}`,
    'Signal': (url, title) => `https://signal.me/#p?text=${encodeURIComponent(title + ' ' + url)}`,
    'LINE': (url, title) => `https://lineit.line.me/share/ui?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    'Viber': (url, title) => `viber://forward?text=${encodeURIComponent(title + ' ' + url)}`,
    'Weibo': (url, title) => `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    'Slack': (url, title) => `https://slack.com/share?text=${encodeURIComponent(title + ' ' + url)}`,

    // === COMPLETED MISSING ONES (That have web intents) ===
    'Snapchat': (url) => `https://www.snapchat.com/share?url=${encodeURIComponent(url)}`, // Snapchat now has a basic web share utility!
    'Instapaper': (url, title) => `https://www.instapaper.com/hello2?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    'Raindrop.io': (url, title) => `https://raindrop.io/add?link=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    'Refind': (url) => `https://refind.com/links/new?url=${encodeURIComponent(url)}`,
    'Trello': (url, title) => `https://trello.com/add-card?source=web&name=${encodeURIComponent(title)}&desc=${encodeURIComponent(url)}`,
    'Hacker News': (url, title) => `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`,
    'Evernote': (url, title) => `https://www.evernote.com/clip.action?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    'Feedly': (url, title) => `https://feedly.com/i/subscription/feed/${encodeURIComponent(url)}`,
    'Blogger': (url, title) => `https://www.blogger.com/blog_this.pyra?t=&u=${encodeURIComponent(url)}&n=${encodeURIComponent(title)}`,
    'WordPress': (url, title) => `https://wordpress.com/press-this.php?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`,
    'Pocket': (url, title) => `https://getpocket.com/save?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    'Flipboard': (url, title) => `https://share.flipboard.com/bookmarklet/popout?v=2&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    'Digg': (url, title) => `https://digg.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    'Plurk': (url, title) => `https://www.plurk.com/?content=${encodeURIComponent(url + ' ' + title)}`,
    'Hatena Bookmark': (url, title) => `https://b.hatena.ne.jp/add?mode=confirm&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    'Buffer': (url, title) => `https://buffer.com/add?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
};

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

        const url = currentTab.url;
        const title = currentTab.title || 'Shared Page';

        // Check if we have a direct share URL
        const shareUrl = SHARE_URLS[platform] ? SHARE_URLS[platform](url, title) : null;

        if (shareUrl) {
            // Ouvrir dans un nouvel onglet
            window.open(shareUrl, '_blank', 'noopener,noreferrer');
            showNotification(`✅ Opening ${platform}...`);
        } else {
            // Fallback: copier le texte
            const shareText = `${title} - ${url}`;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(shareText);
                showNotification(`📋 Copied! Share manually on ${platform}`);
            } else {
                showNotification(`📋 Share on ${platform}:\n${shareText}`);
            }
        }

        // Notify background (optionnel, pour tracking)
        if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
            try {
                chrome.runtime.sendMessage({
                    type: 'share',
                    platform: platform,
                    url: url,
                    title: title
                });
            } catch (e) {
                console.log('Background message failed:', e);
            }
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