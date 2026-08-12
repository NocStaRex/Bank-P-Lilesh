const fs = require('fs');
let content = fs.readFileSync('public/css/style.css', 'utf-8');

const targetStr = '#nav-insurance-tab.mega-active {';
const index = content.indexOf(targetStr);

const cleanStart = content.substring(0, index);

const pristineEnd = `#nav-insurance-tab.mega-active {
    background: #f4f3f8 !important;
    color: #3c1253 !important;
    border-bottom: none !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    margin-bottom: -1px !important;
    padding-bottom: 6px !important;
    position: relative;
    z-index: 1003;
}

/* ===== Services Mega Menu ===== */
/* Ensure parent navbar list item doesn't stretch */
.spx-top-nav-items > li,
.spx-nav-links > li {
    flex-shrink: 0 !important;
}

#nav-services-tab,
#nav-services-tab.mega-active,
#nav-services-tab.active {
    font-weight: 600 !important; /* Keep font weight constant so text width doesn't change */
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
    margin: 0 !important;
    box-sizing: border-box !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-shrink: 0 !important;
}

.spx-services-mega-menu {
    position: absolute !important;
    top: 100% !important;
    right: 0 !important;
    left: auto !important;
    transform: none !important;
    width: 560px !important;
    background: #f4f3f8 !important;
    opacity: 1 !important;
    z-index: 1002 !important;
    margin: 0 !important;
    border-top-right-radius: 0 !important; /* Flat top-right corner to join seamlessly with Services tab */
    border-top-left-radius: 0 !important; /* Square top-left corner */
    border-bottom-left-radius: 16px !important;
    border-bottom-right-radius: 16px !important;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1);
    padding: 1.25rem 1.5rem;
    display: none;
    border-top: none !important;
    outline: none !important;
}

.spx-services-mega-menu.active {
    display: block !important;
}

#nav-services-tab.mega-active {
    background: #f4f3f8 !important;
    color: #3c1253 !important;
    border-bottom: none !important;
    border-top-left-radius: 12px !important;
    border-top-right-radius: 12px !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    margin-bottom: -1px !important;
    padding-bottom: 6px !important;
    position: relative;
    z-index: 1003;
}

/* ===== Search Modal ===== */
.spx-search-modal {
    position: absolute;
    top: 100% !important;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    display: none;
    z-index: 1002;
    margin-top: -1px;
    box-sizing: border-box;
}

.spx-search-modal.active {
    display: block !important;
}

.search-input-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid #d1c4e9;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    margin-bottom: 1.5rem;
    background: #fff;
}

.search-input-field {
    border: none;
    outline: none;
    width: 100%;
    margin-left: 0.75rem;
    font-size: 1rem;
    color: #333;
    font-family: inherit;
}

.search-recommended-box {
    padding: 0.5rem;
}

.recommended-title {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 1rem;
    font-weight: 600;
}

.recommended-items-grid {
    display: flex;
    justify-content: space-between;
}

.rec-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #3c1253;
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
    gap: 0.5rem;
}

.rec-item:hover {
    color: #7e57c2;
}

.rec-icon-wrapper {
    width: 48px;
    height: 48px;
    background: #f4f3f8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

const isCRLF = content.includes('\r\n');
let finalPristineEnd = pristineEnd;
if (isCRLF) {
    finalPristineEnd = finalPristineEnd.replace(/\n/g, '\r\n');
}

fs.writeFileSync('public/css/style.css', cleanStart + finalPristineEnd, 'utf-8');
console.log('Fixed!');
