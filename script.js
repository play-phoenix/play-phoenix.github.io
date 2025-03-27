const PASSWORD = "phoenix"; // Change this to your desired password
  // Add to your existing script
  let attemptCount = parseInt(localStorage.getItem('loginAttempts')) || 0;
  let lastAttemptTime = localStorage.getItem('lastAttemptTime') || null;

  // Add event listeners for Enter key on password field
  document.addEventListener('DOMContentLoaded', function() {
      const passwordField = document.getElementById('password');
      if (passwordField) {
          passwordField.addEventListener('keyup', function(event) {
              if (event.key === 'Enter') {
                  checkPassword();
              }
          });
      }
  });

  function checkPassword() {
      const password = document.getElementById('password').value;
      const currentTime = new Date().getTime();

      if (lastAttemptTime && attemptCount >= 3) {
          const lockoutDuration = 24 * 60 * 60 * 1000;
          const timeElapsed = currentTime - parseInt(lastAttemptTime);
        
          if (timeElapsed < lockoutDuration) {
              showLockoutScreen();
              return;
          } else {
              resetAttempts();
          }
      }

      if (password === "phoenix") {
          showPasscodeScreen();
      } else {
          attemptCount++;
          localStorage.setItem('loginAttempts', attemptCount);
          localStorage.setItem('lastAttemptTime', currentTime);

          if (attemptCount >= 3) {
              showLockoutScreen();
          } else {
              document.getElementById('password').value = '';
              alert(`Incorrect password. ${3 - attemptCount} attempts remaining.`);
          }
      }
  }

  function showPasscodeScreen() {
      const loginContainer = document.querySelector('.login-container');
      loginContainer.innerHTML = `
          <h2>Enter Passcode</h2>
          <input type="number" id="passcode" placeholder="Enter 6-digit code" maxlength="6">
          <button onclick="checkPasscode()">Verify</button>
      `;
    
      // Add event listener for Enter key on passcode field
      const passcodeField = document.getElementById('passcode');
      passcodeField.addEventListener('keyup', function(event) {
          if (event.key === 'Enter') {
              checkPasscode();
          }
      });
    
      // Auto-focus the passcode field
      passcodeField.focus();
  }

  function checkPasscode() {
      const passcode = document.getElementById('passcode').value;
      if (passcode === "102938") {
          document.getElementById('loginOverlay').style.display = 'none';
      } else {
          document.getElementById('passcode').value = '';
          alert('Incorrect passcode. Try again.');
      }
  }
  function showLockoutScreen() {
      const loginContainer = document.querySelector('.login-container');
      loginContainer.innerHTML = `
          <div class="lockout-screen">
              <h2>Account Locked</h2>
              <p>Too many failed attempts.</p>
              <p>Please try again in 24 hours.</p>
          </div>
      `;
  }

  function resetAttempts() {
      attemptCount = 0;
      localStorage.setItem('loginAttempts', 0);
      localStorage.removeItem('lastAttemptTime');
  }
const footer = `
    <footer class="site-footer">
        <div class="footer-content">
            <p class="copyright">© ${new Date().getFullYear()} Phoenix Gaming. All rights reserved.</p>
            <p class="footer-tagline">Where Gaming Knows No Bounds</p>
        </div>
    </footer>
`;

let pages = {
    home: `
        <div class="hero-section">
            <h1 class="tagline animate__animated animate__fadeInDown">
                Unleash Your Gaming Freedom
            </h1>
            <div class="description-container animate__animated animate__fadeIn">
                <p class="main-description">
                    Welcome to the next evolution of online gaming. Our platform delivers an unparalleled gaming experience, 
                    offering a vast collection of carefully curated titles that span every genre imaginable. From heart-pounding 
                    action to mind-bending puzzles, we've created a sanctuary where gamers can explore, compete, and connect.
                </p>
                <p class="sub-description">
                    Built with cutting-edge technology, our platform ensures seamless gameplay, lightning-fast loading times, 
                    and crystal-clear graphics. We've eliminated the barriers between you and your gaming experience – no downloads, 
                    no installations, just pure gaming enjoyment at your fingertips. Our advanced cloud infrastructure means you 
                    can jump into your favorite titles instantly, whether you're on a desktop, laptop, or mobile device.
                </p>
                <p class="features-description">
                    Experience gaming without limits, where high scores become legends, and every session opens doors to new 
                    adventures. Our commitment to privacy and security means you can focus on what matters most – pushing boundaries, 
                    achieving greatness, and having fun. Join our thriving community of passionate gamers and discover why 
                    we're the premier destination for online entertainment.
                </p>
            </div>
        </div>
        ${footer}
    `,
    games: `
        <div class="games-container">
            <h2 class="games-title animate__animated animate__fadeInDown">Select Your Game</h2>
            <div class="games-grid animate__animated animate__fadeIn">
                <div class="game-tile" onclick="loadGame('The Pizza Edition')">
                <h3>The Pizza Edition</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Eaglercraft')">
                    <h3>Eaglercraft</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Arsenic')">
                    <h3>Arsenic</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Bitbucket')">
                <h3>Bitbucket</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Top-Vaz')">
                <h3>Top-Vaz</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Compass')">
                <h3>Compass</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Appleshreky')">
                <h3>Appleshreky</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Quadratics')">
                <h3>Quadratics</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Hub Pro')">
                <h3>Hub Pro</h3>
                </div>
                <div class="game-tile" onclick="loadGame('ATL')">
                <h3>ATL</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Lich')">
                <h3>Lich</h3>
                </div>
                <div class="game-tile" onclick="loadGame('T-rex')">
                <h3>T-rex</h3>
                </div>
                <div class="game-tile" onclick="loadGame('UBG')">
                <h3>UBG</h3>
                </div>
                <div class="game-tile " onclick="loadGame('C2F')">
                <h3>C2F</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Roobix')">
                <h3>Roobix</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Blackjack')">
                <h3>Blackjack</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Into Deep Space')">
                <h3>Into Deep Space</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Space Buggy')">
                <h3>Space Buggy</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Marbleous')">
                <h3>Marbleous</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Swerve')">
                <h3>Swerve</h3>
                </div>
                <div class="game-tile" onclick="loadGame('Football')">
                <h3>Football</h3>
                </div>
            </div>
        </div>
        ${footer}
    `,
    gamePlayer: `
        <div class="game-player-container">
            <div class="game-header">
                <button onclick="loadContent('games')" class="back-button">← Back to Games</button>
            </div>
            <div class="game-frame-container">
                <iframe id="gameFrame" src="" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    `,
    proxy: `
        <div class="proxy-container">
            <h2>Web Proxy</h2>
            <div class="proxy-form">
                <input type="url" placeholder="Enter URL">
                <button>Go</button>
            </div>
        </div>
    `,
    about: `
        <div class="about-container animate__animated animate__fadeIn">
            <div class="about-content">
                <h2>About Phoenix Gaming</h2>
                
                <p>Welcome to Phoenix Gaming, where digital entertainment reaches new heights. Our platform stands as a beacon for gamers worldwide, offering an unparalleled collection of hand-picked titles that span every genre imaginable. We've created more than just a gaming website; we've built a sanctuary where passion meets play.</p>

                <p>Our journey began with a simple vision: to create a space where gaming freedom knows no bounds. Today, that vision has evolved into a sophisticated platform that delivers instant access to countless hours of entertainment. Our cutting-edge technology ensures that every click, every move, and every moment flows seamlessly, creating an immersive experience that keeps you coming back for more.</p>

                <p>Security and performance stand at the forefront of our mission. We've implemented state-of-the-art systems that protect your gaming experience while delivering lightning-fast load times and crystal-clear graphics. Our cloud infrastructure means you can jump into action instantly, without the hassle of downloads or installations.</p>

                <p>The Phoenix Gaming community is the heart of our platform. We've fostered an environment where players from across the globe can connect, compete, and celebrate their achievements together. Our leaderboards showcase the best of the best, while our achievement system rewards dedication and skill, creating a truly engaging social gaming experience.</p>

                <p>Innovation drives everything we do. Our development team works tirelessly to bring you the latest advancements in web-based gaming technology. From responsive controls to adaptive displays, we're constantly pushing the boundaries of what's possible in browser-based entertainment. Our platform adapts to your device, ensuring a premium experience whether you're playing on a desktop, tablet, or mobile phone.</p>

                <p>We understand that every gamer is unique, which is why we've created a customizable experience that adapts to your preferences. Our intuitive interface allows you to personalize your gaming environment, from visual themes to control schemes. We believe that the perfect gaming experience is one that's tailored to you.</p>

                <p>Looking toward the future, Phoenix Gaming continues to evolve. We're constantly expanding our library, enhancing our features, and refining our platform. Our commitment to excellence means we're always seeking new ways to improve your gaming experience. Join us as we redefine what's possible in the world of online gaming.</p>
            </div>
        </div>
        ${footer}
    `,
    settings: `
        <div class="settings-container animate__animated animate__fadeIn">
            <h2>Settings</h2>
        
            <div class="settings-grid">
                <!-- Theme Settings -->
                <div class="settings-card">
                    <h3>Theme Customization</h3>
                    <div class="setting-option">
                        <label>Theme Mode</label>
                        <div class="toggle-switch">
                            <input type="checkbox" id="themeToggle">
                            <label for="themeToggle"></label>
                        </div>
                    </div>
                    <div class="setting-option">
                        <label>Accent Color</label>
                        <input type="color" id="accentColor" value="#ff4d4d">
                    </div>
                    <div class="setting-option">
                        <label>Animation Speed</label>
                        <input type="range" id="animationSpeed" min="0.5" max="2" step="0.1" value="1">
                    </div>
                </div>

                <!-- Display Settings -->
                <div class="settings-card">
                    <h3>Display Settings</h3>
                    <div class="setting-option">
                        <label>Tab Name</label>
                        <input type="text" id="tabName" placeholder="Enter custom tab name">
                    </div>
                    <div class="setting-option">
                        <label>Custom Favicon</label>
                        <input type="url" id="faviconUrl" placeholder="Enter favicon URL">
                    </div>
                    <div class="setting-option">
                        <label>Show Logo</label>
                        <div class="toggle-switch">
                            <input type="checkbox" id="logoToggle" checked>
                            <label for="logoToggle"></label>
                        </div>
                    </div>
                </div>

                <!-- Privacy Settings -->
                <div class="settings-card">
                    <h3>Privacy Features</h3>
                    <div class="setting-option">
                        <label>Panic Key</label>
                        <input type="text" id="panicKey" placeholder="Press any key" readonly>
                    </div>
                    <div class="setting-option">
                        <label>Redirect URL</label>
                        <input type="url" id="panicUrl" placeholder="https://example.com">
                    </div>
                    <div class="setting-option">
                        <label>Incognito Mode</label>
                        <div class="toggle-switch">
                            <input type="checkbox" id="incognitoToggle">
                            <label for="incognitoToggle"></label>
                        </div>
                    </div>
                </div>

                <!-- Performance Settings -->
                <div class="settings-card">
                    <h3>Performance</h3>
                    <div class="setting-option">
                        <label>Enable Animations</label>
                        <div class="toggle-switch">
                            <input type="checkbox" id="animationsToggle" checked>
                            <label for="animationsToggle"></label>
                        </div>
                    </div>
                    <div class="setting-option">
                        <label>Quality</label>
                        <select id="qualitySelect">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </div>

                <!-- UI Settings -->
                <div class="settings-card">
                    <h3>User Interface</h3>
                    <div class="setting-option">
                        <label>Font Size</label>
                        <input type="range" id="fontSize" min="12" max="24" value="16">
                    </div>
                    <div class="setting-option">
                        <label>Navigation Style</label>
                        <select id="navStyle">
                            <option value="default">Default</option>
                            <option value="compact">Compact</option>
                            <option value="expanded">Expanded</option>
                        </select>
                    </div>
                </div>

                <!-- Save Options -->
                <div class="settings-card">
                    <h3>Save Options</h3>
                    <div class="setting-buttons">
                        <button onclick="saveSettings()" class="save-btn">Save All Settings</button>
                        <button onclick="exportSettings()" class="export-btn">Export Settings</button>
                        <button onclick="importSettings()" class="import-btn">Import Settings</button>
                        <button onclick="resetSettings()" class="reset-btn">Reset to Default</button>
                    </div>
                </div>
            </div>
        </div>
        ${footer}
    `
};

function loadGame(gameName) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="game-player-container">
            <div class="game-header">
                <div class="header-buttons">
                    <button onclick="loadContent('games')" class="back-button">← Back to Games</button>
                    <button onclick="window.open('${gameUrls[gameName]}', '_blank')" class="fullscreen-button">
                        Open in New Tab
                    </button>
                </div>
                <h2>${gameName}</h2>
            </div>
            <div class="game-frame-container">
                <iframe src="${gameUrls[gameName]}" frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
        </div>
        ${footer}
    `;
}

const gameUrls = {
    'The Pizza Edition': 'https://ramramboybendover.hardsoft.nu/',
    'Eaglercraft': 'https://ducky443747.github.io/minecraft-18/',
    'Bitbucket': 'https://the-pizza-edition.bitbucket.io/',
    'Top-Vaz': 'https://top-vaz-online.github.io/',
    'Arsenic': 'https://rizzler4.somoschiloe.com/',
    'Compass': 'https://yurm.c.power-media.ro/games.html',
    'Appleshreky': 'https://bio.link/appleshreky',
    'Quadratics': 'https://ezalgebra.github.io/',
    'Hub Pro': 'https://hub-pro.github.io/games.html',
    'Lich': 'https://lichgames.s3.amazonaws.com/index.html',
    'T-rex': 'https://www.tuckercraig.com/dino/',
    'UBG': 'https://ubg-98.github.io/',
    'C2F': 'https://cool2fun.github.io/',
    'Roobix': 'https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/7oCCxwiJ/index.html',
    'Blackjack': 'https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/dQVAStv9/index.html',
    'Into Deep Space': 'https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/VddIVc6L/index.html',
    'Space Buggy': 'https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/ZmzHPMd2/index.html',
    'Marbleous': 'https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/HEoGi1Mb/index.html',
    'Swerve': 'https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/VecAxR3e/index.html',
    'Football': 'https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/XLyueLvM/index.html',
};
  // Enhanced game loading with quality settings
  function loadGame(gameName) {
      const content = document.getElementById('content');
      content.innerHTML = `
          <div class="game-player-container">
              <div class="game-header">
                  <div class="header-buttons">
                      <button onclick="loadContent('games')" class="back-button">← Back to Games</button>
                      <button onclick="window.open('${gameUrls[gameName]}', '_blank')" class="fullscreen-button">
                          Open in New Tab
                      </button>
                  </div>
                  <h2>${gameName}</h2>
              </div>
              <div class="game-frame-container">
                  <iframe 
                      src="${gameUrls[gameName]}" 
                      frameborder="0" 
                      allowfullscreen="true"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allow="autoplay; fullscreen; accelerometer; gyroscope; geolocation; microphone; camera"
                      sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation"
                      loading="eager"
                      importance="high"
                  ></iframe>
              </div>
          </div>
          ${footer}
      `;
  }
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const page = e.target.getAttribute('href').substring(1);
          loadContent(page);
      });
  });

// Make sure nav is hidden initially
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('nav').style.display = 'none';
    document.getElementById('content').classList.add('hidden');
});

function checkPasscode() {
    const passcode = document.getElementById('passcode').value;
    if (passcode === "102938") {
        document.getElementById('loginOverlay').style.display = 'none';
        loadContent('home'); // Loads home page after login
        document.querySelector('nav').style.display = 'flex'; // Shows navigation only after login
        document.getElementById('content').classList.remove('hidden'); // Shows content
    } else {
        document.getElementById('passcode').value = '';
        alert('Incorrect passcode. Try again.');
    }
}
    function showSafeAnimation() {
        document.getElementById('loginOverlay').innerHTML = `
            <div class="safe-container">
                <div class="safe">
                    <div class="safe-dial"></div>
                </div>
                <div class="safe-content"></div>
            </div>
        `;

        setTimeout(() => {
            document.getElementById('loginOverlay').style.display = 'none';
            loadContent('home');
            document.querySelector('nav').style.display = 'flex';
            document.getElementById('content').classList.remove('hidden');
        }, 3000);
    }

  function loadContent(page) {
      const content = document.getElementById('content');
      content.innerHTML = pages[page];
      updateActiveNav(page);
  }

  function updateActiveNav(page) {
      document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${page}`) {
              link.classList.add('active');
          }
      });
  }

window.addEventListener('load', () => {
    loadContent('home');
});

function initializeSettings() {
    loadSavedSettings();

    document.getElementById('themeToggle').addEventListener('change', (e) => {
        document.body.classList.toggle('dark-mode', e.target.checked);
        saveSettings();
    });

    document.getElementById('accentColor').addEventListener('input', (e) => {
        document.documentElement.style.setProperty('--primary-red', e.target.value);
        saveSettings();
    });

    document.getElementById('animationSpeed').addEventListener('input', (e) => {
        document.documentElement.style.setProperty('--animation-speed', e.target.value);
        saveSettings();
    });

    document.getElementById('tabName').addEventListener('change', (e) => {
        document.title = e.target.value;
        saveSettings();
    });

    document.getElementById('panicKey').addEventListener('keydown', (e) => {
        e.preventDefault();
        e.target.value = e.key.toUpperCase();
        saveSettings();
    });
}

function saveSettings() {
    const settings = {
        theme: document.getElementById('themeToggle').checked,
        accentColor: document.getElementById('accentColor').value,
        animationSpeed: document.getElementById('animationSpeed').value,
        tabName: document.getElementById('tabName').value,
        panicKey: document.getElementById('panicKey').value,
        panicUrl: document.getElementById('panicUrl').value,
    };
    localStorage.setItem('phoenixSettings', JSON.stringify(settings));
}

function loadSavedSettings() {
    const settings = JSON.parse(localStorage.getItem('phoenixSettings'));
    if (settings) {
        document.getElementById('themeToggle').checked = settings.theme;
        document.getElementById('accentColor').value = settings.accentColor;
        document.getElementById('animationSpeed').value = settings.animationSpeed;
    }
}

function exportSettings() {
    const settings = localStorage.getItem('phoenixSettings');
    const blob = new Blob([settings], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'phoenix-settings.json';
    a.click();
    URL.revokeObjectURL(url);
}

function importSettings() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];}
    }

function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { 
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('clock').textContent = time;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display time immediately

function updateBattery() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            const level = Math.floor(battery.level * 100);
            document.getElementById('batteryLevel').textContent = level + '%';
            document.querySelector('.battery-fill').style.width = level + '%';
            
            // Update color based on level
            const fill = document.querySelector('.battery-fill');
            if (level <= 20) {
                fill.style.background = '#ff4444';
            } else if (level <= 50) {
                fill.style.background = '#ffaa00';
            } else {
                fill.style.background = '#44ff44';
            }
        });
    }
}

// Update battery every 30 seconds
setInterval(updateBattery, 30000);
updateBattery(); // Initial call
// Create a favicon dynamically
function createFavicon() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    // Draw phoenix shape
    ctx.beginPath();
    ctx.moveTo(32, 10);
    ctx.bezierCurveTo(20, 20, 15, 35, 32, 54);
    ctx.bezierCurveTo(49, 35, 44, 20, 32, 10);
    
    // Create gradient
    const gradient = ctx.createLinearGradient(15, 10, 49, 54);
    gradient.addColorStop(0, '#ff3a3a');
    gradient.addColorStop(1, '#ff7b00');
    
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Add glow effect
    ctx.shadowColor = '#ff3a3a';
    ctx.shadowBlur = 10;
    ctx.fill();
    
    // Convert to favicon
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = canvas.toDataURL('image/png');
    document.getElementsByTagName('head')[0].appendChild(link);
}

// Create SVG logo
function createLogo() {
    const logoContainer = document.querySelector('.logo-container');
    logoContainer.innerHTML = `
        <svg width="45" height="45" viewBox="0 0 64 64" class="logo-img">
            <defs>
                <linearGradient id="phoenixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ff3a3a" />
                    <stop offset="100%" stop-color="#ff7b00" />
                </linearGradient>
            </defs>
            <path d="M32,10 C20,20 15,35 32,54 C49,35 44,20 32,10 Z" fill="url(#phoenixGradient)" />
            <path d="M32,10 C20,20 15,35 32,54 C49,35 44,20 32,10 Z" fill="none" stroke="#ff3a3a" stroke-width="1" />
        </svg>
        <span class="logo-text">Phoenix Gaming</span>
    `;
}

// Initialize favicon and logo
document.addEventListener('DOMContentLoaded', function() {
    createFavicon();
    // Logo will be created when nav is displayed after login
});