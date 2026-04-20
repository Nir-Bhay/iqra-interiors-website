const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf-8');
const lines = content.split('\n');

// Find start and end indices
const startIndex = lines.findIndex(line => line.includes('Feature Section') && line.includes('Premium Redesign'));
const endIndex = lines.findIndex(line => line.includes('End Advertising & Signages Section'));

if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find start or end bounds. Start:', startIndex, 'End:', endIndex);
    process.exit(1);
}

const replacement = `        <!-- Unified Feature Section — Tabs -->
        <section class="ms-unified-services" id="services">
            <style>
                /* ===== UNIFIED SERVICES RESPONSIVE TABBED DESIGN ===== */
                .ms-unified-services {
                    background-color: #f8fafc; /* Very light gray, near white */
                    padding: 100px 0;
                    position: relative;
                    z-index: 10;
                }
                
                /* TAB NAVIGATION */
                .ms-services-nav {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 60px;
                    background: #ffffff;
                    padding: 10px;
                    border-radius: 50px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.04);
                    position: relative;
                    max-width: fit-content;
                    margin-left: auto;
                    margin-right: auto;
                    z-index: 2;
                }
                .ms-tab-btn {
                    padding: 12px 30px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #4a5568;
                    background: transparent;
                    border: none;
                    border-radius: 40px;
                    cursor: pointer;
                    position: relative;
                    transition: all 0.4s ease;
                    z-index: 2;
                }
                .ms-tab-btn.active {
                    color: #ffffff;
                }
                .ms-tab-bg-slide {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    height: calc(100% - 20px);
                    background: #3DCFA0;
                    border-radius: 40px;
                    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
                    z-index: 1;
                }
                
                /* TAB PANES */
                .ms-tab-pane {
                    display: none;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .ms-tab-pane.active {
                    display: block;
                }
                .ms-tab-pane.show {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* GRID LAYOUTS */
                .ms-services-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    margin-bottom: 40px;
                }
                .ms-two-col-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    align-items: center;
                    margin-bottom: 40px;
                }
                @media (max-width: 991px) {
                    .ms-services-grid, .ms-two-col-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 767px) {
                    .ms-services-grid, .ms-two-col-grid {
                        grid-template-columns: 1fr;
                    }
                    .ms-services-nav {
                        flex-direction: column;
                        border-radius: 20px;
                        width: 100%;
                    }
                    .ms-tab-bg-slide {
                        display: none; /* simple fallback for mobile */
                    }
                    .ms-tab-btn.active {
                        background: #3DCFA0;
                        color: #fff;
                    }
                }

                /* CARD DESIGNS (Light Theme) */
                .ms-light-card {
                    background: #ffffff;
                    border-radius: 20px;
                    padding: 40px 30px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.03);
                    border: 1px solid rgba(61,207,160,0.1);
                    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                }
                .ms-light-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 50px rgba(61,207,160,0.15);
                    border-color: #3DCFA0;
                }
                .ms-card-icon {
                    width: 70px;
                    height: 70px;
                    background: rgba(61,207,160,0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 25px;
                    font-size: 30px;
                    color: #3DCFA0;
                    transition: all 0.4s ease;
                }
                .ms-light-card:hover .ms-card-icon {
                    background: #3DCFA0;
                    color: #ffffff;
                    transform: scale(1.1) rotate(5deg);
                }
                .ms-card-title {
                    font-size: 22px;
                    font-weight: 700;
                    color: #1a202c;
                    margin-bottom: 15px;
                }
                .ms-card-text {
                    font-size: 15px;
                    color: #718096;
                    line-height: 1.7;
                    margin-bottom: 20px;
                }
                .ms-card-link {
                    display: inline-flex;
                    align-items: center;
                    color: #3DCFA0;
                    font-weight: 600;
                    text-decoration: none;
                    font-size: 14px;
                    transition: all 0.3s ease;
                }
                .ms-card-link i {
                    margin-left: 8px;
                    transition: transform 0.3s ease;
                }
                .ms-light-card:hover .ms-card-link i {
                    transform: translateX(5px);
                }

                /* MACHINE/CAPABILITY CARDS */
                .ms-machine-card {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    background: #ffffff;
                    padding: 20px;
                    border-radius: 15px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.03);
                    border: 1px solid rgba(61,207,160,0.05);
                    transition: all 0.3s ease;
                }
                .ms-machine-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(61,207,160,0.1);
                    background: #fcfcfc;
                    border-color: rgba(61,207,160,0.3);
                }
                .ms-machine-icon {
                    font-size: 24px;
                    color: #3DCFA0;
                    flex-shrink: 0;
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    background: rgba(61,207,160,0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .ms-machine-info h4 {
                    font-size: 18px;
                    font-weight: 700;
                    color: #1a202c;
                    margin: 0 0 5px 0;
                }
                .ms-machine-info p {
                    font-size: 14px;
                    color: #718096;
                    margin: 0;
                    line-height: 1.4;
                }

                /* TYPOGRAPHY */
                .ms-section-title {
                    text-align: center;
                    margin-bottom: 50px;
                }
                .ms-section-title span {
                    display: block;
                    font-size: 16px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #3DCFA0;
                    font-weight: 600;
                    margin-bottom: 10px;
                }
                .ms-section-title h2 {
                    font-size: 42px;
                    font-weight: 800;
                    color: #1a202c;
                }
                
                /* CAPABILITY TEXT AREA */
                .ms-cap-text-area h3 {
                    font-size: 32px;
                    font-weight: 800;
                    color: #1a202c;
                    margin-bottom: 20px;
                }
                .ms-cap-text-area .ms-teal-rule {
                    width: 60px;
                    height: 4px;
                    background: #3DCFA0;
                    border-radius: 2px;
                    margin-bottom: 25px;
                }
                .ms-cap-text-area p {
                    font-size: 16px;
                    color: #4a5568;
                    line-height: 1.8;
                    margin-bottom: 30px;
                }
                .ms-cap-checklist {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 30px 0;
                }
                .ms-cap-checklist li {
                    position: relative;
                    padding-left: 30px;
                    margin-bottom: 15px;
                    font-size: 16px;
                    color: #2d3748;
                    font-weight: 500;
                }
                .ms-cap-checklist li::before {
                    content: '\\f058';
                    font-family: 'Font Awesome 5 Free';
                    font-weight: 900;
                    position: absolute;
                    left: 0;
                    top: 2px;
                    color: #3DCFA0;
                    font-size: 18px;
                }
                
                /* CTA BUTTON */
                .ms-cta-wrapper {
                    text-align: center;
                    margin-top: 50px;
                }
                .ms-btn-primary {
                    display: inline-block;
                    background: #3DCFA0;
                    color: #fff;
                    padding: 16px 40px;
                    border-radius: 50px;
                    font-size: 16px;
                    font-weight: 600;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px rgba(61,207,160,0.3);
                }
                .ms-btn-primary:hover {
                    background: #2cb588;
                    transform: translateY(-3px);
                    box-shadow: 0 15px 25px rgba(61,207,160,0.4);
                }

            </style>

            <div class="auto-container">
                <div class="ms-section-title">
                    <span>What We Do</span>
                    <h2>Our Services & Capabilities</h2>
                </div>

                <!-- Tab Navigation -->
                <div class="ms-services-nav" id="servicesTabNav">
                    <div class="ms-tab-bg-slide" id="tabBgSlide"></div>
                    <button class="ms-tab-btn active" data-target="pane-core" onclick="msSwitchTab(this)">Core Services</button>
                    <button class="ms-tab-btn" data-target="pane-fabrication" onclick="msSwitchTab(this)">Complete Fabrication</button>
                    <button class="ms-tab-btn" data-target="pane-signage" onclick="msSwitchTab(this)">Advertising & Signages</button>
                </div>

                <!-- Tab Content: Core Services -->
                <div class="ms-tab-pane active show" id="pane-core">
                    <div class="ms-services-grid">
                        <!-- Card 1 -->
                        <div class="ms-light-card">
                            <div class="ms-card-icon"><i class="flaticon-art-and-design"></i></div>
                            <h3 class="ms-card-title">Custom Stall Design</h3>
                            <p class="ms-card-text">Tailor-made exhibition stalls crafted to reflect your brand's unique identity, ensuring maximum impact on the floor.</p>
                            <a href="contact.html" class="ms-card-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                        <!-- Card 2 -->
                        <div class="ms-light-card">
                            <div class="ms-card-icon"><i class="flaticon-settings-1"></i></div>
                            <h3 class="ms-card-title">Turnkey Solutions</h3>
                            <p class="ms-card-text">Seamless end-to-end execution, from vibrant concepts to impeccable final delivery, letting you focus on your business.</p>
                            <a href="contact.html" class="ms-card-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                        <!-- Card 3 -->
                        <div class="ms-light-card">
                            <div class="ms-card-icon"><i class="flaticon-development"></i></div>
                            <h3 class="ms-card-title">Brand Activations</h3>
                            <p class="ms-card-text">Engaging installations engineered to captivate audiences and leave a memorable, lasting impression.</p>
                            <a href="contact.html" class="ms-card-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                        <!-- Card 4 -->
                        <div class="ms-light-card">
                            <div class="ms-card-icon"><i class="flaticon-laptop"></i></div>
                            <h3 class="ms-card-title">3D Concept Rendering</h3>
                            <p class="ms-card-text">Photorealistic 3D visual previews that allow you to experience and refine your booth design before production.</p>
                            <a href="contact.html" class="ms-card-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                        <!-- Card 5 -->
                        <div class="ms-light-card">
                            <div class="ms-card-icon"><i class="flaticon-search"></i></div>
                            <h3 class="ms-card-title">Global Execution</h3>
                            <p class="ms-card-text">Delivering world-class designs and seamless build quality for prestigious trade shows around the globe.</p>
                            <a href="contact.html" class="ms-card-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                        <!-- Card 6 -->
                        <div class="ms-light-card">
                            <div class="ms-card-icon"><i class="flaticon-customer-service"></i></div>
                            <h3 class="ms-card-title">On-Site Support</h3>
                            <p class="ms-card-text">Dedicated project managers strictly ensuring flawless installation, rapid troubleshooting, and timely dismantling.</p>
                            <a href="contact.html" class="ms-card-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Tab Content: Complete Fabrication -->
                <div class="ms-tab-pane" id="pane-fabrication">
                    <div class="ms-two-col-grid">
                        <div class="ms-cap-text-area">
                            <h3>In-House Complete Fabrication</h3>
                            <div class="ms-teal-rule"></div>
                            <p>We own and operate advanced machinery to keep fabrication entirely in-house. This gives us full control over quality, timing, and precision for every aspect of your project.</p>
                            <ul class="ms-cap-checklist">
                                <li>In-house printing setup with UV prints</li>
                                <li>Complete wooden setup with specialized machinery</li>
                                <li>Complete metal works solutions</li>
                                <li>End-to-end quality assurance on every build</li>
                            </ul>
                        </div>
                        <div class="ms-machines-grid">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                <div class="ms-machine-card"><div class="ms-machine-icon"><i class="fas fa-print"></i></div><div class="ms-machine-info"><h4>UV Printing</h4><p>High-resolution setups</p></div></div>
                                <div class="ms-machine-card"><div class="ms-machine-icon"><i class="fas fa-cogs"></i></div><div class="ms-machine-info"><h4>CNC Router</h4><p>Precision wood cutting</p></div></div>
                                <div class="ms-machine-card"><div class="ms-machine-icon"><i class="fas fa-ruler-combined"></i></div><div class="ms-machine-info"><h4>Panel Saw</h4><p>Accurate large formats</p></div></div>
                                <div class="ms-machine-card"><div class="ms-machine-icon"><i class="fas fa-border-all"></i></div><div class="ms-machine-info"><h4>Edge Bending</h4><p>Flawless finish lines</p></div></div>
                                <div class="ms-machine-card"><div class="ms-machine-icon"><i class="fas fa-compress-arrows-alt"></i></div><div class="ms-machine-info"><h4>Cold Press</h4><p>Strong laminations</p></div></div>
                                <div class="ms-machine-card"><div class="ms-machine-icon"><i class="fas fa-hammer"></i></div><div class="ms-machine-info"><h4>Metal Works</h4><p>Complete custom shaping</p></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tab Content: Advertising & Signages -->
                <div class="ms-tab-pane" id="pane-signage">
                    <div class="ms-two-col-grid">
                        <div class="ms-machines-grid">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                <div class="ms-machine-card"><div class="ms-machine-icon"><i class="fas fa-fill"></i></div><div class="ms-machine-info"><h4>UV 10ft Media</h4><p>Large format printing</p></div></div>
                                <div class="ms-machine-card"><div class="ms-machine-icon"><i class="fas fa-scroll"></i></div><div class="ms-machine-info"><h4>Roland Vinyl 5ft</h4><p>Crisp, sharp roll prints</p></div></div>
                                <div class="ms-machine-card"><div class="ms-machine-icon"><i class="fas fa-palette"></i></div><div class="ms-machine-info"><h4>Colorjet Iris Flex</h4><p>Vibrant flex banners</p></div></div>
                                <div class="ms-machine-card"><div class="ms-machine-icon"><i class="fas fa-cut"></i></div><div class="ms-machine-info"><h4>Laser Cut (8x4)</h4><p>Acrylic & wood precision</p></div></div>
                                <div class="ms-machine-card"><div class="ms-machine-icon"><i class="fas fa-angle-double-right"></i></div><div class="ms-machine-info"><h4>Alum. Bending</h4><p>Profile bending tools</p></div></div>
                                <div class="ms-machine-card"><div class="ms-machine-icon"><i class="fas fa-font"></i></div><div class="ms-machine-info"><h4>Liquid Letters</h4><p>Premium 3D branding</p></div></div>
                                <div class="ms-machine-card" style="grid-column: span 2; justify-content: center;"><div class="ms-machine-icon"><i class="fas fa-vector-square"></i></div><div class="ms-machine-info"><h4>Acrylic CNC Router</h4><p>Specialized hard-plastic shaping</p></div></div>
                            </div>
                        </div>
                        <div class="ms-cap-text-area">
                            <h3>Advertising & Signages</h3>
                            <div class="ms-teal-rule"></div>
                            <p>From towering illuminated signs to intricate vinyl graphics, our dedicated signage department handles your brand's physical presence utilizing state-of-the-art printers and cutting machinery.</p>
                            <ul class="ms-cap-checklist">
                                <li>In-house signage and graphic solutions</li>
                                <li>Durable outdoor and indoor substrates</li>
                                <li>Custom edge-lit acrylics and 3D letters</li>
                                <li>Fast turnaround for large-format media</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="ms-cta-wrapper">
                    <a href="contact.html" class="ms-btn-primary">Discuss Your Project</a>
                </div>
            </div>

            <!-- Tab Switching Logic -->
            <script>
                function msSwitchTab(btn) {
                    // Update buttons
                    const nav = document.getElementById('servicesTabNav');
                    const buttons = nav.querySelectorAll('.ms-tab-btn');
                    buttons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    // Slide background
                    const slide = document.getElementById('tabBgSlide');
                    slide.style.left = btn.offsetLeft + 'px';
                    slide.style.width = btn.offsetWidth + 'px';

                    // Update panes
                    const targetId = btn.getAttribute('data-target');
                    const panes = document.querySelectorAll('.ms-tab-pane');
                    
                    panes.forEach(pane => {
                        if (pane.classList.contains('active')) {
                            // fade out
                            pane.classList.remove('show');
                            setTimeout(() => {
                                pane.classList.remove('active');
                                // show new
                                const target = document.getElementById(targetId);
                                target.classList.add('active');
                                // slight delay to trigger css transition naturally
                                setTimeout(() => {
                                    target.classList.add('show');
                                }, 50);
                            }, 300); // 300ms matches css transition roughly
                        }
                    });
                }

                // Initialize tab slide position on load
                window.addEventListener('load', () => {
                    const activeBtn = document.querySelector('.ms-tab-btn.active');
                    if(activeBtn) {
                        const slide = document.getElementById('tabBgSlide');
                        slide.style.left = activeBtn.offsetLeft + 'px';
                        slide.style.width = activeBtn.offsetWidth + 'px';
                    }
                });
                // Handle window resize
                window.addEventListener('resize', () => {
                    const activeBtn = document.querySelector('.ms-tab-btn.active');
                    if(activeBtn && window.innerWidth > 767) {
                        const slide = document.getElementById('tabBgSlide');
                        slide.style.left = activeBtn.offsetLeft + 'px';
                        slide.style.width = activeBtn.offsetWidth + 'px';
                    }
                });
            </script>
        </section>
        <!-- End Unified Feature Section -->`;

lines.splice(startIndex, endIndex - startIndex + 1, replacement);
fs.writeFileSync('index.html', lines.join('\n'), 'utf-8');
