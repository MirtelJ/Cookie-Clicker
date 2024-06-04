let cookies = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;
let clickUpgradeCost = 10;
let autoUpgradeCost = 50;

const clickButton = document.getElementById('click-button');
const clickUpgradeButton = document.getElementById('click-upgrade-button');
const autoUpgradeButton = document.getElementById('auto-upgrade-button');
const cookieCount = document.getElementById('cookie-count');
const status = document.getElementById('status');

clickButton.addEventListener('click', () => {
    cookies += cookiesPerClick;
    updateDisplay();
});

clickUpgradeButton.addEventListener('click', () => {
    if (cookies >= clickUpgradeCost) {
        cookies -= clickUpgradeCost;
        cookiesPerClick++;
        clickUpgradeCost *= 2;
        clickUpgradeButton.textContent = `Buy Click Upgrade (Cost: ${clickUpgradeCost})`;
        status.textContent = `Bought click upgrade! Cookies per click: ${cookiesPerClick}`;
        updateDisplay();
    } else {
        status.textContent = `Not enough cookies! You need ${clickUpgradeCost} cookies.`;
    }
});

autoUpgradeButton.addEventListener('click', () => {
    if (cookies >= autoUpgradeCost) {
        cookies -= autoUpgradeCost;
        cookiesPerSecond++;
        autoUpgradeCost *= 2;
        autoUpgradeButton.textContent = `Buy Auto Upgrade (Cost: ${autoUpgradeCost})`;
        status.textContent = `Bought auto upgrade! Cookies per second: ${cookiesPerSecond}`;
        updateDisplay();
    } else {
        status.textContent = `Not enough cookies! You need ${autoUpgradeCost} cookies.`;
    }
});

function updateDisplay() {
    cookieCount.textContent = `Cookies: ${cookies}`;
}

setInterval(() => {
    cookies += cookiesPerSecond;
    updateDisplay();
}, 1000);
