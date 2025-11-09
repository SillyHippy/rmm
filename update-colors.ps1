# Update color scheme from blue to brand lime green

$files = @(
    "components\Header.tsx",
    "components\Footer.tsx",
    "components\CTASection.tsx",
    "components\WhyChooseUs.tsx",
    "components\Services.tsx",
    "components\ServiceAreas.tsx",
    "components\ProcessServerFAQ.tsx",
    "app\contact\page.tsx",
    "app\about\page.tsx",
    "app\services\page.tsx",
    "app\service-areas\page.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Updating $file..."
        (Get-Content $file) |
            ForEach-Object {
                $_ -replace 'bg-blue-600','bg-brand-lime' `
                   -replace 'bg-blue-700','bg-brand-lime-dark' `
                   -replace 'bg-blue-800','bg-brand-charcoal' `
                   -replace 'from-blue-600','from-brand-lime' `
                   -replace 'to-blue-800','to-brand-charcoal' `
                   -replace 'text-blue-100','text-gray-100' `
                   -replace 'text-blue-200','text-gray-200' `
                   -replace 'text-blue-300','text-brand-yellow' `
                   -replace 'text-blue-400','text-brand-lime-light' `
                   -replace 'text-blue-500','text-brand-lime' `
                   -replace 'text-blue-600','text-brand-lime' `
                   -replace 'text-blue-700','text-brand-lime-dark' `
                   -replace 'bg-blue-50','bg-gray-50' `
                   -replace 'bg-blue-100','bg-lime-50' `
                   -replace 'bg-blue-500','bg-brand-lime-light' `
                   -replace 'hover:bg-blue-50','hover:bg-gray-100' `
                   -replace 'hover:bg-blue-600','hover:bg-brand-lime-dark' `
                   -replace 'hover:bg-blue-700','hover:bg-brand-lime-dark' `
                   -replace 'hover:text-blue-600','hover:text-brand-lime' `
                   -replace 'hover:text-blue-700','hover:text-brand-lime-dark' `
                   -replace 'hover:text-blue-300','hover:text-brand-lime-light' `
                   -replace 'hover:border-blue-500','hover:border-brand-lime' `
                   -replace 'border-blue-100','border-lime-100' `
                   -replace 'border-blue-200','border-lime-200' `
                   -replace 'border-blue-300','border-brand-lime' `
                   -replace 'border-blue-500','border-brand-lime' `
                   -replace 'to-blue-800','to-brand-charcoal' `
                   -replace 'from-blue-50','from-lime-50' `
                   -replace 'hover:bg-blue-600','hover:bg-brand-lime'
            } | Set-Content "$file.new"
        Move-Item -Force "$file.new" $file
        Write-Host "✓ Updated $file"
    }
}

Write-Host "All files updated with brand lime green color scheme!"
