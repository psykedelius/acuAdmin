let  dataBase = {};
let tempDataBase = {};
// Function to fetch and parse JSON
async function fetchDataAndParse(fileName) {
    // Ensure fileName is a string
    if (typeof fileName !== 'string') {
      console.error('File name must be a string.');
      return null;
    }
    // Replace 'your-json-file-url' with the actual URL of your JSON file
    const jsonFileUrl = '../json/'+ fileName +'.json';
    try {
        // Using the fetch API to retrieve JSON data
        const response = await fetch(jsonFileUrl);
    
        // Check if the request was successful (status code 200)
        if (!response.ok) {
          throw new Error(`Failed to fetch JSON: ${response.status}`);
        }
    
        // Parse and return the JSON data
        const data = await response.json();
        return data;
      } catch (error) {
        // Handle errors during the fetch or parsing process
        console.error('Error fetching or parsing JSON:', error);
        return null;
      }
    }
  

  (async () => {
    //preload all the json and store them in 'dataBase' for later use
    dataBase.POINTS   = await fetchDataAndParse('POINTS');
    dataBase.POINTS_FR = await fetchDataAndParse('POINTS_FR');
    dataBase.POINTS_EN = await fetchDataAndParse('POINTS_EN');
    dataBase.MERIDIANS = await fetchDataAndParse('MERIDIANS');
    dataBase.MERIDIANS_FR = await fetchDataAndParse('MERIDIANS_FR');
    dataBase.MERIDIANS_EN = await fetchDataAndParse('MERIDIANS_EN');
    dataBase.FUNCTIONS_FR = await fetchDataAndParse('FUNCTIONS_FR');
    dataBase.FUNCTIONS_EN = await fetchDataAndParse('FUNCTIONS_EN');
    //dataBase = tempDataBase;
    if (dataBase.POINTS && dataBase.POINTS_FR && dataBase.POINTS_EN) { 
      
      createButtons(dataBase.POINTS);  
    }
  })();


  function createButtons(data) {
    //console.log('data = '+data);
    // Get the container where buttons will be added
    const container = document.getElementById('buttonsItemContainer');
  // Clear the content of the container
    container.innerHTML = '';
    // Loop through each object in the JSON array
    
    data.forEach(item => {
      // Create a button element
      const button = document.createElement('button');
        // Add a class to the button
      button.classList.add('button');
      // Set button text
      button.textContent = item.Id;
      
      // Attach click event handler to the button
      button.addEventListener('click', () => {
        // Handle the button click by accessing the corresponding data
        console.log('Clicked button data:', item.Id.toString());
        createFichePoint(item.Id.toString()) ;
        // You can use 'item' to access properties like item.Id, item.NumInt, etc.
      });
  
      // Append the button to the container
      container.appendChild(button);
    });
  }

  // Function to filter buttons based on search input
function filterButtons() {
  const input   = document.getElementById('searchInput');
  const filter  = input.value.toUpperCase();
  const buttons = document.getElementById('buttonsItemContainer').getElementsByTagName('button');

  // Loop through all buttons and hide those that don't match the search
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const buttonText = button.textContent || button.innerText;

    if (buttonText.toUpperCase().indexOf(filter) > -1) {
      button.style.display = ''; // Display the button
    } else {
      button.style.display = 'none'; // Hide the button
    }
  }
}
