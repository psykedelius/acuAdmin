function createFichePoint(pointId){
//const fileName = pointId.toString();
    // Ensure fileName is a string
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

//ty
    // Create a form element
    const form = document.createElement('form');
    form.classList.add('input-group');
    // Array of input labels
    const inputLabels = ['Id', 'Chinese', 'Meaning', 'Meridien', 'Localisation', 'Actions', 'Informations'];

    // Create text inputs for each label
    inputLabels.forEach(label => {
        // Create a div to contain each input
        const inputDiv = document.createElement('div');

        // Create label element
        const labelElement = document.createElement('span'); 
        labelElement.classList.add('input-group');
        labelElement.textContent = label + ':';

        // Create text input element
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.name = label.toLowerCase(); // Set the input name based on the label

        // Append label and input to the input div
        inputDiv.appendChild(labelElement);
        inputDiv.appendChild(inputElement);

        // Append the input div to the form
        form.appendChild(inputDiv);
        // Append the form to the 'ficheContainer' div
        container.appendChild(form);
    });

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

// Function to handle form submission (you can customize this function)
function handleFormSubmission(form) {
    // Access form data and perform actions here
    console.log('Form submitted! Data:', new FormData(form));
}

