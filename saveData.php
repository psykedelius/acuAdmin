<?php

// Function to save data to an external JSON file
function saveDataToFile($fileName, $data) {
    // Ensure fileName is a string
    if (!is_string($fileName)) {
        error_log('File name must be a string.');
        return false;
    }

    // Set the path to your JSON file
    $jsonFilePath = __DIR__ . '/json/' . $fileName . '.json';
    error_log('Saving to: ' . $jsonFilePath);

    try {
        // Encode the data as JSON
        $jsonData = json_encode($data, JSON_PRETTY_PRINT);

        // Write the JSON data to the file
        file_put_contents($jsonFilePath, $jsonData);

        return true;
    } catch (Exception $error) {
        // Handle errors during the save process
        error_log('Error saving JSON data: ' . $error->getMessage());
        return false;
    }
}
// Handle incoming POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Decode JSON data from the request body
    $postData = json_decode(file_get_contents('php://input'), true);

    // Example usage
    $newData = $postData['data'];
    $fileName = $postData['filename'];//'POINTS';

    // Call the function to save data to the JSON file
    $result = saveDataToFile($fileName, $newData);

    if ($result) {
        echo 'Data saved successfully.';
    } else {
        echo 'Failed to save data.';
    }
}
?>