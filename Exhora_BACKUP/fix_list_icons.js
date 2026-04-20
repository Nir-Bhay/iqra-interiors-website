const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

// 1. Remove the ::before CSS pseudo-element
content = content.replace(/\.ms-cap-checklist li::before\s*\{[\s\S]*?\}/, '');

// 2. Adjust .ms-cap-checklist li CSS
const oldCss = /\.ms-cap-checklist li\s*\{[\s\S]*?\}/;
const newCss = `.ms-cap-checklist li {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    margin-bottom: 15px;
                    font-size: 16px;
                    color: #2d3748;
                    font-weight: 500;
                }
                .ms-cap-checklist li i {
                    color: #3DCFA0;
                    font-size: 18px;
                    margin-top: 3px;
                }`;
content = content.replace(oldCss, newCss);

// 3. Inject the <i> tag into the li elements in the two lists
const listItems = [
    '<li>In-house printing setup with UV prints</li>',
    '<li>Complete wooden setup with specialized machinery</li>',
    '<li>Complete metal works solutions</li>',
    '<li>End-to-end quality assurance on every build</li>',
    '<li>In-house signage and graphic solutions</li>',
    '<li>Durable outdoor and indoor substrates</li>',
    '<li>Custom edge-lit acrylics and 3D letters</li>',
    '<li>Fast turnaround for large-format media</li>'
];

listItems.forEach(item => {
    let newItem = item.replace('<li>', '<li><i class="icon fas fa-check-circle"></i> ');
    content = content.replace(item, newItem);
});

fs.writeFileSync('index.html', content, 'utf-8');
console.log('List icons fixed successfully!');
