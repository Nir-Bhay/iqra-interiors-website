const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

// 1. Improve the @media blocks
const cssToAdd = `
                .ms-machines-inner-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                .ms-machine-card-span {
                    grid-column: span 2;
                    justify-content: center;
                }
                @media (max-width: 991px) {
                    .ms-services-grid, .ms-two-col-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 767px) {
                    .ms-unified-services {
                        padding: 60px 0;
                    }
                    .ms-services-grid, .ms-two-col-grid {
                        grid-template-columns: 1fr;
                    }
                    .ms-two-col-grid {
                        gap: 30px;
                    }
                    .ms-services-nav {
                        flex-direction: column;
                        border-radius: 20px;
                        width: 100%;
                    }
                    .ms-tab-bg-slide {
                        display: none;
                    }
                    .ms-tab-btn {
                        width: 100%;
                    }
                    .ms-tab-btn.active {
                        background: #3DCFA0;
                        color: #fff;
                    }
                    .ms-section-title h2 {
                        font-size: 32px;
                    }
                    .ms-cap-text-area h3 {
                        font-size: 26px;
                    }
                    .ms-machines-inner-grid {
                        grid-template-columns: 1fr;
                    }
                    .ms-machine-card-span {
                        grid-column: span 1;
                    }
                }
`;

// First, clean up the existing @media blocks from my previous code by identifying and removing them to avoid duplication.
// My previous code had:
// @media (max-width: 991px) { ... }
// @media (max-width: 767px) { ... }
const oldMediaRegex = /@media\s*\(max-width:\s*991px\)\s*\{[\s\S]*?\}\s*@media\s*\(max-width:\s*767px\)\s*\{[\s\S]*?\}/;
content = content.replace(oldMediaRegex, cssToAdd);

// 2. Replace hardcoded inline styles in the HTML grids
// Replace `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">` with `<div class="ms-machines-inner-grid">`
content = content.replace(
    /<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">/g,
    '<div class="ms-machines-inner-grid">'
);

// 3. Replace the hardcoded `grid-column: span 2` inline style
// `<div class="ms-machine-card" style="grid-column: span 2; justify-content: center;">`
content = content.replace(
    /<div class="ms-machine-card"\s*style="grid-column: span 2; justify-content: center;"\s*>/g,
    '<div class="ms-machine-card ms-machine-card-span">'
);

fs.writeFileSync('index.html', content, 'utf-8');
console.log('Mobile responsiveness applied successfully!');
