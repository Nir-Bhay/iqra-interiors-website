<#
  Cloudinary HTML Update Script — Iqra Interiors
  Replaces all local image/video paths in index.html with Cloudinary CDN URLs.
  Reads cloudinary_mapping.json to know the right URLs.
#>

$BaseDir    = "D:\clint webiste\Exhora_BACKUP"
$HtmlIn     = "$BaseDir\index.html"
$HtmlBackup = "$BaseDir\index.html.pre-cloudinary-backup"
$MappingIn  = "$BaseDir\cloudinary_mapping.json"

# ── Load mapping ───────────────────────────────────────────────────────────
$rawMapping = Get-Content $MappingIn -Raw | ConvertFrom-Json
$mapping = @{}
foreach ($key in $rawMapping.PSObject.Properties.Name) {
    $mapping[$key] = $rawMapping.$key
}
Write-Host "Loaded $($mapping.Count) mappings" -ForegroundColor Cyan

# ── Backup ─────────────────────────────────────────────────────────────────
if (-not (Test-Path $HtmlBackup)) {
    Copy-Item $HtmlIn $HtmlBackup
    Write-Host "Backup created: $HtmlBackup" -ForegroundColor Green
} else {
    Write-Host "Backup already exists, skipping" -ForegroundColor DarkGray
}

# ── Load HTML ──────────────────────────────────────────────────────────────
$html = [System.IO.File]::ReadAllText($HtmlIn)
$originalLen = $html.Length
$replaceCount = 0

# ── Replacement table ──────────────────────────────────────────────────────
# Each entry: [what appears in HTML, the local relative path key in mapping]
$replacements = @(
    # ── Milestone images ── (used as "images/milestone/XXX" in HTML)
    @("images/milestone/0a793780-d2b2-4d28-862f-48db9c638bf0.JPG.webp",   "images\milestone\0a793780-d2b2-4d28-862f-48db9c638bf0.JPG.webp"),
    @("images/milestone/1c188cea-56ab-4da9-8665-59d8c6cb2d0b.JPG.webp",   "images\milestone\1c188cea-56ab-4da9-8665-59d8c6cb2d0b.JPG.webp"),
    @("images/milestone/209df5e8-75f4-419c-a898-368796206d2d.JPG.webp",   "images\milestone\209df5e8-75f4-419c-a898-368796206d2d.JPG.webp"),
    @("images/milestone/31330bbb-c3ce-4851-8692-b026ae80a8c7.JPG.webp",   "images\milestone\31330bbb-c3ce-4851-8692-b026ae80a8c7.JPG.webp"),
    @("images/milestone/364F5428-5D7C-4F6C-8D2C-F14E6ACB5CE6.JPG.webp",  "images\milestone\364F5428-5D7C-4F6C-8D2C-F14E6ACB5CE6.JPG.webp"),
    @("images/milestone/69b3e15a-9c80-4f70-9ec9-c22e965a1af1.JPG.webp",   "images\milestone\69b3e15a-9c80-4f70-9ec9-c22e965a1af1.JPG.webp"),
    @("images/milestone/75eb1f41-a4b9-4b2b-8305-f5e69482efad.JPG.webp",   "images\milestone\75eb1f41-a4b9-4b2b-8305-f5e69482efad.JPG.webp"),
    @("images/milestone/9BA3963E-7788-4A5C-A818-AFFF0939D312.JPG.webp",   "images\milestone\9BA3963E-7788-4A5C-A818-AFFF0939D312.JPG.webp"),
    @("images/milestone/bbf26b7c-6cab-499f-b7a4-23a01a97005a.JPG.webp",   "images\milestone\bbf26b7c-6cab-499f-b7a4-23a01a97005a.JPG.webp"),
    @("images/milestone/concept_design.webp",                              "images\milestone\concept_design.webp"),
    @("images/milestone/fabrication_production.webp",                      "images\milestone\fabrication_production.webp"),
    @("images/milestone/FullLogo_Transparent_NoBuffer.webp",               "images\milestone\FullLogo_Transparent_NoBuffer.webp"),
    @("images/milestone/FullLogo_Transparent_NoBuffer.png",                "images\milestone\FullLogo_Transparent_NoBuffer.png"),
    @("images/milestone/IMG_2170.webp",                                    "images\milestone\IMG_2170.webp"),
    @("images/milestone/IMG_2171.webp",                                    "images\milestone\IMG_2171.webp"),
    @("images/milestone/IMG_2172.webp",                                    "images\milestone\IMG_2172.webp"),
    @("images/milestone/IMG_2418.webp",                                    "images\milestone\IMG_2418.webp"),
    @("images/milestone/IMG_2424.webp",                                    "images\milestone\IMG_2424.webp"),
    @("images/milestone/IMG_2425.webp",                                    "images\milestone\IMG_2425.webp"),
    @("images/milestone/IMG_2426.webp",                                    "images\milestone\IMG_2426.webp"),
    @("images/milestone/IMG_7628.webp",                                    "images\milestone\IMG_7628.webp"),
    @("images/milestone/IMG_9103.webp",                                    "images\milestone\IMG_9103.webp"),
    @("images/milestone/IMG_9378.webp",                                    "images\milestone\IMG_9378.webp"),
    @("images/milestone/hero image.webp",                                  "images\milestone\hero image.webp"),
    @("images/milestone/who-we-are.jpeg",                                  "images\milestone\who-we-are.jpeg"),
    @("images/milestone/logo.png",                                         "images\milestone\logo.png"),
    @("images/milestone/logo-solid.png",                                   "images\milestone\logo-solid.png"),

    # Delhi Wood
    @("images/milestone/delhi-wood/WhatsApp Image 2023-03-02 at 1.34.32 PM (1).webp", "images\milestone\delhi-wood\WhatsApp Image 2023-03-02 at 1.34.32 PM (1).webp"),
    @("images/milestone/delhi-wood/WhatsApp Image 2023-03-02 at 1.34.32 PM.webp",     "images\milestone\delhi-wood\WhatsApp Image 2023-03-02 at 1.34.32 PM.webp"),
    @("images/milestone/delhi-wood/WhatsApp Image 2023-03-02 at 1.34.33 PM (1).webp", "images\milestone\delhi-wood\WhatsApp Image 2023-03-02 at 1.34.33 PM (1).webp"),
    @("images/milestone/delhi-wood/WhatsApp Image 2023-03-02 at 1.34.33 PM.webp",     "images\milestone\delhi-wood\WhatsApp Image 2023-03-02 at 1.34.33 PM.webp"),
    @("images/milestone/delhi-wood/WhatsApp Image 2023-03-02 at 1.34.34 PM (1).webp", "images\milestone\delhi-wood\WhatsApp Image 2023-03-02 at 1.34.34 PM (1).webp"),
    @("images/milestone/delhi-wood/WhatsApp Image 2023-03-02 at 1.34.34 PM.webp",     "images\milestone\delhi-wood\WhatsApp Image 2023-03-02 at 1.34.34 PM.webp"),
    @("images/milestone/delhi-wood/WhatsApp Image 2023-03-02 at 1.34.35 PM (1).webp", "images\milestone\delhi-wood\WhatsApp Image 2023-03-02 at 1.34.35 PM (1).webp"),
    @("images/milestone/delhi-wood/WhatsApp Image 2023-03-02 at 1.34.35 PM.webp",     "images\milestone\delhi-wood\WhatsApp Image 2023-03-02 at 1.34.35 PM.webp"),
    @("images/milestone/delhi-wood/WhatsApp Image 2023-03-02 at 1.34.36 PM.webp",     "images\milestone\delhi-wood\WhatsApp Image 2023-03-02 at 1.34.36 PM.webp"),

    # Hero videos
    @("images/milestone/hero-video-1.mp4",  "images\milestone\hero-video-1.mp4"),
    @("images/milestone/hero-video-2.mp4",  "images\milestone\hero-video-2.mp4"),
    @("images/milestone/hero-video-3.mp4",  "images\milestone\hero-video-3.mp4"),

    # Milestone videos
    @("videos/milestone/video_2.mp4",  "videos\milestone\video_2.mp4"),
    @("videos/milestone/video_3.mp4",  "videos\milestone\video_3.mp4"),
    @("videos/milestone/video_5.mp4",  "videos\milestone\video_5.mp4"),
    @("videos/milestone/video_7.mp4",  "videos\milestone\video_7.mp4"),
    @("videos/milestone/video_8.mp4",  "videos\milestone\video_8.mp4"),

    # Portfolio videos
    @("videos/portfolio/IMG_1120.mp4",      "videos\portfolio\IMG_1120.mp4"),
    @("videos/portfolio/IMG_1121.mp4",      "videos\portfolio\IMG_1121.mp4"),
    @("videos/portfolio/IMG_1122.mp4",      "videos\portfolio\IMG_1122.mp4"),
    @("videos/portfolio/IMG_1124.mp4",      "videos\portfolio\IMG_1124.mp4"),
    @("videos/portfolio/IMG_1125.mp4",      "videos\portfolio\IMG_1125.mp4"),
    @("videos/portfolio/IMG_1126.mp4",      "videos\portfolio\IMG_1126.mp4"),
    @("videos/portfolio/IMG_1129.mp4",      "videos\portfolio\IMG_1129.mp4"),
    @("videos/portfolio/IMG_1130.mp4",      "videos\portfolio\IMG_1130.mp4"),
    @("videos/portfolio/IMG_1131.mp4",      "videos\portfolio\IMG_1131.mp4"),
    @("videos/portfolio/IMG_1965.mp4",      "videos\portfolio\IMG_1965.mp4"),
    @("videos/portfolio/IMG_3067.mp4",      "videos\portfolio\IMG_3067.mp4"),
    @("videos/portfolio/IMG_3226.mp4",      "videos\portfolio\IMG_3226.mp4"),
    @("videos/portfolio/IMG_6403.mp4",      "videos\portfolio\IMG_6403.mp4"),
    @("videos/portfolio/IMG_7048.mp4",      "videos\portfolio\IMG_7048.mp4"),
    @("videos/portfolio/IMG_7064.mp4",      "videos\portfolio\IMG_7064.mp4"),
    @("videos/portfolio/IMG_7064 (2).mp4",  "videos\portfolio\IMG_7064 (2).mp4")
)

# ── Apply replacements ─────────────────────────────────────────────────────
foreach ($pair in $replacements) {
    $htmlPath = $pair[0]
    $mapKey   = $pair[1]

    if (-not $mapping.ContainsKey($mapKey)) {
        Write-Host "WARNING: No mapping for '$mapKey'" -ForegroundColor Yellow
        continue
    }

    $cdnUrl = $mapping[$mapKey]
    $count  = ([regex]::Matches($html, [regex]::Escape($htmlPath))).Count

    if ($count -gt 0) {
        $html  = $html.Replace($htmlPath, $cdnUrl)
        $replaceCount += $count
        Write-Host "  Replaced $count × $htmlPath" -ForegroundColor Green
    } else {
        Write-Host "  NOT FOUND in HTML: $htmlPath" -ForegroundColor DarkGray
    }
}

# ── Save updated HTML ──────────────────────────────────────────────────────
[System.IO.File]::WriteAllText($HtmlIn, $html, [System.Text.Encoding]::UTF8)

Write-Host ""
Write-Host "=== DONE ===" -ForegroundColor Green
Write-Host "Total replacements: $replaceCount"
Write-Host "HTML file: $HtmlIn"

# ── Verification: check if any local paths remain ─────────────────────────
$remaining = [regex]::Matches($html, '(?:images/milestone/|videos/milestone/|videos/portfolio/)').Count
Write-Host ""
if ($remaining -eq 0) {
    Write-Host "VERIFIED: No local media paths remain in HTML" -ForegroundColor Green
} else {
    Write-Host "WARNING: $remaining local media path references still found!" -ForegroundColor Red
    # Show what they are
    $matches2 = [regex]::Matches($html, '(?:images/milestone/|videos/milestone/|videos/portfolio/)[^\s"''<)]+')
    $matches2 | ForEach-Object { Write-Host "  $($_.Value)" -ForegroundColor Yellow } | Sort-Object -Unique
}
