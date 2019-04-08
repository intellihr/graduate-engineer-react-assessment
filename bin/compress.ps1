$oldPreference = $ErrorActionPreference
$ErrorActionPreference = 'stop'

$rawItems = Get-ChildItem -Path "."
$excludes = Get-Content ".\.compressignore"
$items = New-Object System.Collections.ArrayList

ForEach ( $rawItem In $rawItems ) {
  $blacklisted = $false
  ForEach ( $exclude In $excludes ) {
    If ( $rawItem.name -Match $exclude ) {
      $blacklisted = $true
      Break
    }
  }

  If ( -Not $blacklisted ) {
    $_ = $items.Add($rawItem.FullName)
  }
}

$filename = "$( Get-Date -UFormat %Y-%m-%d )-$( ($args -Join '-').ToLower() ).zip"
$buildFolderName = "build"

If ( -Not (Test-Path ".\$buildFolderName") ) {
  New-Item -ItemType Directory -Force -Path ".\$buildFolderName"
}

Try {
  Compress-Archive -LiteralPath $items -DestinationPath ".\$buildFolderName\$filename" -CompressionLevel Optimal -Force
}
Catch {
  Write-Host "Failed to compress your project. Please manually do so (remember to exclude all folders/files listed in `".compressignore`" file)."

  Return $false
}

Write-Host "Compressed successfully. Please find the compressed file in the `".\build`" folder and upload it as instructed."
Return $true
$ErrorActionPreference = $oldPreference
