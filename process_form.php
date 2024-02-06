<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
// Read the JSON file content
$POINTS       = 'POINTS.json';
$POINTS_FR    = 'POINTS_FR.json';
$POINTS_EN    = 'POINTS_EN.json';
$MERIDIANS    = 'MERIDIANS.json';
$MERIDIANS_FR = 'MERIDIANS_FR.json';
$MERIDIANS_EN = 'MERIDIANS_EN.json';
$FUNCTIONS_FR = 'FUNCTIONS_FR.json';
$FUNCTIONS_EN = 'FUNCTIONS_EN.json';
//$jsonFile = 'your_json_file.json';
$POINTSData       = file_get_contents($POINTS);
$POINTS_FRData    = file_get_contents($POINTS_FR);
$POINTS_ENData    = file_get_contents($POINTS_EN);
$MERIDIANSData    = file_get_contents($MERIDIANS);
$MERIDIANS_FRData = file_get_contents($MERIDIANS_FR);
$MERIDIANS_ENData = file_get_contents($MERIDIANS_EN);
$FUNCTIONS_FRData = file_get_contents($FUNCTIONS_FR);
$FUNCTIONS_ENData = file_get_contents($FUNCTIONS_EN);
// Decode JSON data to associative array
$records = json_decode($jsonData, true);

// Assume you are receiving form data via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the updated data from the form
    $idToUpdate          = $_POST['Id'];
    $updatedMeaning      = $_POST['Meaning'];
    $updatedLocalisation = $_POST['Localisation'];
    $updatedActions      = $_POST['Actions'];
    $updatedIndications  = $_POST['Indications_Therapeutiques'];
    echo('$idToUpdate '+$idToUpdate);
    // Find the index of the record to update
    $indexToUpdate = array_search($idToUpdate, array_column($records, 'Id'));

    if ($indexToUpdate !== false) {
        // Update the values in the array
        $records[$indexToUpdate]['Meaning'] = $updatedMeaning;
        $records[$indexToUpdate]['Localisation'] = $updatedLocalisation;
        $records[$indexToUpdate]['Actions'] = $updatedActions;
        $records[$indexToUpdate]['Indications_Therapeutiques'] = $updatedIndications;

        // Encode the updated data back to JSON format
        $updatedJsonData = json_encode($records, JSON_PRETTY_PRINT);

        // Write the updated JSON back to the file
        file_put_contents($jsonFile, $updatedJsonData);

        echo "JSON file updated successfully.";
    } else {
        echo "Record with ID $idToUpdate not found.";
    }
} else {
    echo "Invalid request method.";
}
?>