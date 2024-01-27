function handleButtonClick(buttonId) { 
    // Your common script for handling button click with the buttonId as an argument
    console.log(buttonId + " button clicked");

    if (buttonId == 'menuPoints'){
        createButtons(dataBase.POINTS);
    }else if (buttonId == 'menuMeridiens'){
        createButtons(dataBase.MERIDIANS);
    }else if (buttonId == 'menuPathos'){
        createButtons(dataBase.FUNCTIONS_FR);
    }else if (buttonId == 'menuFonctions'){

    }
    // Add your specific logic here based on the buttonId
}