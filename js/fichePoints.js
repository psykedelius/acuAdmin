function createFichePoint(item){
    console.log('Clicked button data:', item); 
    let pointId = item.Id.toString();
    if (typeof pointId !== 'string') {
        console.error('File name must be a string.');
        return null;
    }    
    //<div class="title"><p>POINT NAME</p></div>
        // Get the container where the form will be added
        const container = document.getElementById('ficheContainer');
        container.innerHTML = '';

        //create fiche body
        const ficheContent = document.createElement('PointsFiche');
        ficheContent.classList.add('PointsFiche');
        container.appendChild(ficheContent);

        // Create Title element
        const labelElement = document.createElement('title');
        labelElement.classList.add('title');
        labelElement.textContent = pointId;
        ficheContent.appendChild(labelElement);

     //   <textarea id="resizableTextarea" oninput="adjustTextareaSize()"></textarea>

        // Create a form element
        const form = document.createElement('form');
        form.classList.add('input-group');
 
            // Append the input div to the form
            
            createInputField(form,'input','Id :', item, 'Id');
            createInputField(form,'input','Nom chinois :', item, 'Chinese');
            createInputField(form,'input','Couleur :', item, 'Color');
            createInputField(form,'input','Méridien :', item, 'Meridian');
            createInputField(form,'input','Iong :', findEntryById(item.Meridian, dataBase.MERIDIANS_FR), 'Iong');
            createInputField(form,'textarea','Actions :', findEntryById(item.Id, dataBase.POINTS_FR), 'Actions');
            createInputField(form,'textarea','Localisation :', findEntryById(item.Id, dataBase.POINTS_FR), 'Localisation');
            createInputField(form,'input','Fonction Spécifique:', item, 'Functions');
            createInputField(form,'textarea','Informations:', findEntryById(item.Id, dataBase.POINTS_FR), 'Indications_Therapeutiques');
            // Append the form to the 'ficheContainer' div
            container.appendChild(form);

              
              const Localisation = findEntryById("1P", dataBase.POINTS_FR); 
              console.log(Localisation);
            

        // Create a submit button
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';

    // Attach a submit event handler to the form
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        handleFormSubmission(form); // Call a function to handle form submission
    });

    // Append the submit button to the form
    form.appendChild(submitButton);

    // Append the form to the container
    ficheContent.appendChild(form);
}

function createInputField(parentDiv,fieldType,labelText, dataFile, dataKey)
{
    const inputDiv = document.createElement('div');
        // Create label element
        const label = document.createElement('span'); 
        label.classList.add('input-group');
        label.textContent = labelText;
        inputDiv.appendChild(label);
        // Create text input element
        const inputElement  = document.createElement(fieldType);
        inputElement.type   = 'text';
        inputElement.value  = dataFile[dataKey].toString();
        inputElement.name   = label; 
        if (fieldType == 'textarea'){
            adjustTextareaSize( inputElement );
        }

        inputDiv.appendChild(inputElement);
        
    parentDiv.appendChild(inputDiv);
}


// Function to handle form submission (you can customize this function)
function handleFormSubmission(form) {
    // Access form data and perform actions here
    //Save new Json file
    console.log('Form submitted! Data:', new FormData(form));
}

function findEntryById(id, data) {
    return data.find(entry => entry.Id === id);
  }