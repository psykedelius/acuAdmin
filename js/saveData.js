 
  async function saveDataToServer(fileName,data) {
    const endpoint = 'saveData.php'; // Change to the actual path of your PHP script
    
    const saveDataPHPFileUrl = baseUrl + endpoint;

    try {
        const requestData = {
            filename: fileName,
            data: data,
        };
        console.log('fileName = ',fileName);
        const response = await fetch(saveDataPHPFileUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        if (!response.ok) {
            throw new Error(`Failed to save data on the server: ${response.status}`);
        }

        console.log('Data saved successfully on the server.');
        return true;
    } catch (error) {
        console.error('Error saving data on the server:', error);
        return false;
    }
}
