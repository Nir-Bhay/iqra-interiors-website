$f = 'd:\clint webiste\Exhora_BACKUP\index.html'
$c = [System.IO.File]::ReadAllText($f)
# Add loading="lazy" decoding="async" to <img tags that DON'T already have loading= attribute
# Pattern: <img that is not followed by loading= before the closing >
$c = [regex]::Replace($c, '(<img )(?=[^>]*alt=)(?=[^>]*(?<!\bloading=)[^>]*>)', '$1loading="lazy" decoding="async" ')
[System.IO.File]::WriteAllText($f, $c)
Write-Host "Done"
