const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

const mobileCssPolish = `
                /* FURTHER MOBILE REFINEMENTS */
                @media (max-width: 767px) {
                    /* Refine spacings */
                    .ms-unified-services { padding: 40px 0; }
                    .ms-services-grid, .ms-two-col-grid { gap: 20px; margin-bottom: 30px; }
                    .ms-machines-inner-grid { gap: 15px; }
                    
                    /* Shrink Tab Buttons */
                    .ms-services-nav {
                        padding: 8px;
                        gap: 8px;
                        margin-bottom: 30px;
                        border-radius: 15px;
                    }
                    .ms-tab-btn {
                        padding: 10px 15px;
                        font-size: 14px;
                        border-radius: 12px;
                    }

                    /* Shrink Primary Button */
                    .ms-cta-wrapper { margin-top: 20px; }
                    .ms-btn-primary {
                        padding: 12px 25px;
                        font-size: 14px;
                    }

                    /* Shrink Core Cards */
                    .ms-light-card {
                        padding: 25px 20px;
                        border-radius: 15px;
                    }
                    .ms-card-icon {
                        width: 50px;
                        height: 50px;
                        font-size: 24px;
                        margin-bottom: 15px;
                    }
                    .ms-card-title {
                        font-size: 18px;
                        margin-bottom: 10px;
                    }
                    .ms-card-text {
                        font-size: 14px;
                        line-height: 1.5;
                        margin-bottom: 15px;
                    }

                    /* Shrink Machine Cards */
                    .ms-machine-card {
                        padding: 15px;
                        gap: 15px;
                        border-radius: 12px;
                    }
                    .ms-machine-icon {
                        width: 40px;
                        height: 40px;
                        font-size: 20px;
                        border-radius: 10px;
                    }
                    .ms-machine-info h4 {
                        font-size: 16px;
                    }
                    .ms-machine-info p {
                        font-size: 13px;
                    }

                    /* Shrink Typography & Checklists */
                    .ms-section-title { margin-bottom: 30px; }
                    .ms-section-title span { font-size: 14px; margin-bottom: 5px; }
                    .ms-section-title h2 { font-size: 26px !important; }
                    
                    .ms-cap-text-area h3 { font-size: 22px !important; margin-bottom: 15px; }
                    .ms-cap-text-area p { font-size: 14px; line-height: 1.6; margin-bottom: 20px; }
                    .ms-cap-text-area .ms-teal-rule { margin-bottom: 15px; }
                    
                    .ms-cap-checklist li {
                        font-size: 14px;
                        gap: 10px;
                        margin-bottom: 12px;
                    }
                    .ms-cap-checklist li i {
                        font-size: 16px;
                        margin-top: 2px;
                    }
                }
`;

// Insert the block before the end of the <style> tag inside the ms-unified-services block
content = content.replace('            </style>\r\n\r\n            <div class="auto-container">', mobileCssPolish + '\n            </style>\r\n\r\n            <div class="auto-container">');

fs.writeFileSync('index.html', content, 'utf-8');
console.log('Mobile UI polish applied successfully!');
