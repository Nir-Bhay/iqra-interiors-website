import re

file_path = r'd:\clint webiste\Exhora_BACKUP\index-2.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add CSS
css_to_add = '''
        .speaker-block-two:hover .inner-box {
            box-shadow: 0 15px 45px rgba(255, 0, 122, 0.2);
        }

        /* Portfolio Tabs Fixes */
        .event-tabs-two .tab-btns {
            margin-top: 30px !important;
            margin-bottom: 30px !important;
        }
        .event-section-two .sec-title {
            margin-bottom: 20px !important;
        }
'''
if '/* Portfolio Tabs Fixes */' not in content:
    content = content.replace(
        '        .speaker-block-two:hover .inner-box {\n            box-shadow: 0 15px 45px rgba(255, 0, 122, 0.2);\n        }',
        css_to_add
    )

# 2. Replace #tab1 contents
tab1_pattern = r'(<div class=\"tab active-tab\" id=\"tab1\">\s*<div class=\"outer-box\">).*?(</div>\s*</div>\s*<!--Tab-->\s*<div class=\"tab\" id=\"tab2\">)'

replacement_html = r'''\1

                                <!-- Event Block 1 -->
                                <div class="event-block-two">
                                    <div class="inner-box event-block-inner">
                                        <div class="shape-thirty"></div>
                                        <div class="shape-thirtyone"></div>

                                        <div class="time-box">
                                            <i class="icon fal fa-paint-brush"></i>
                                            <h6 class="time">Custom Stall Design</h6>
                                        </div>

                                        <div class="title-box">
                                            <h4 class="title"><a href="#gallery">Tailored 3D Visualizations & Structural Design</a></h4>
                                            <div class="speaker-box">
                                                <i class="icon fa fa-building"></i>
                                                <div class="speaker">Exhora Team <span>(Design)</span></div>
                                            </div>
                                        </div>

                                        <div class="text-box">
                                            <div class="text">Creative concepts <br> that reflect your brand</div>
                                        </div>

                                        <div class="event-hover" style="background-image: url(images/resource/exhora-stall-01.jpg)"></div>
                                    </div>
                                </div>

                                <!-- Event Block 2 -->
                                <div class="event-block-two">
                                    <div class="inner-box event-block-inner">
                                        <div class="shape-thirty"></div>
                                        <div class="shape-thirtyone"></div>

                                        <div class="time-box">
                                            <i class="icon fal fa-tools"></i>
                                            <h6 class="time">In-House Fabrication</h6>
                                        </div>

                                        <div class="title-box">
                                            <h4 class="title"><a href="#gallery">Premium Materials & Quality Control</a></h4>
                                            <div class="speaker-box">
                                                <i class="icon fa fa-building"></i>
                                                <div class="speaker">Exhora Team <span>(Fabrication)</span></div>
                                            </div>
                                        </div>

                                        <div class="text-box">
                                            <div class="text">In-house manufacturing <br> for flawless execution</div>
                                        </div>

                                        <div class="event-hover" style="background-image: url(images/resource/exhora-stall-11.jpg)"></div>
                                    </div>
                                </div>

                                <!-- Event Block 3 -->
                                <div class="event-block-two">
                                    <div class="inner-box event-block-inner">
                                        <div class="shape-thirty"></div>
                                        <div class="shape-thirtyone"></div>

                                        <div class="time-box">
                                            <i class="icon fal fa-cogs"></i>
                                            <h6 class="time">On-Site Installation</h6>
                                        </div>

                                        <div class="title-box">
                                            <h4 class="title"><a href="#gallery">Turnkey Setup & Seamless Handover</a></h4>
                                            <div class="speaker-box">
                                                <i class="icon fa fa-building"></i>
                                                <div class="speaker">Exhora Team <span>(Operations)</span></div>
                                            </div>
                                        </div>

                                        <div class="text-box">
                                            <div class="text">End-to-end management <br> on the exhibition floor</div>
                                        </div>

                                        <div class="event-hover" style="background-image: url(images/resource/exhora-stall-13.jpg)"></div>
                                    </div>
                                </div>

                            \2'''

content = re.sub(tab1_pattern, replacement_html, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated index-2.html')
