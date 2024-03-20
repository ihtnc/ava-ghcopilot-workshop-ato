# Write a script that gets the size of all the folders in a directory and outputs the results to a CSV file.
#The CSV file should have two columns: Folder and Size. The Folder column should contain the name of the folder and the Size column should contain the size of the folder in bytes.

# Get the folders in the current directory
$folders = Get-ChildItem -Directory

# Create an array to store the results
$results = @()

# Loop through each folder and get the size
foreach ($folder in $folders) {
    $size = (Get-ChildItem $folder.FullName -Recurse | Measure-Object -Property Length -Sum).Sum
    $results += [PSCustomObject]@{
        Folder = $folder.Name
        Size   = $size
    }
}

# Output the results to a CSV file
$results | Export-Csv -Path "folder-sizes.csv" -NoTypeInformation
```