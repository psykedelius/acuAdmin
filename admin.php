<?php
session_start();

// Vérifier si l'utilisateur est connecté
if (!isset($_SESSION["logged_in"]) || $_SESSION["logged_in"] !== true) {
    header("Location: index.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>acuAdmin</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/fiches.css">
    <script type="text/javascript" src="./js/saveData.js"></script>
    <script type="text/javascript" src="./js/fichePoints.js"></script>
    <script type="text/javascript" src="./js/clicActions.js"></script>
    <script type="text/javascript" src="./js/jsonParser.js"></script>
</head>
<body> 
    <div class="header">
        <div class="logo"><img src="./img/header_acupuncture3D.png" alt=""></div> 
        <h2>Welcome, <?php echo $_SESSION["username"]; ?>!</h2>
        <a href="logout.php">Logout</a>
    </div>

    <div class="body">
        <div>
            <div class="button"><p>MENU</p></div>
            <div class="categorieContainer">
                <div class="button" onclick="handleButtonClick('menuPoints')"><p>Points</p></div>
                <div class="button" onclick="handleButtonClick('menuMeridiens')"><p>Méridiens</p></div>
                <div class="button" onclick="handleButtonClick('menuPathos')"><p>Pathos</p></div>
                <div class="button" onclick="handleButtonClick('menuFonctions')"><p>Fonctions</p></div>
            </div>
        </div>
        <div class="itemsContainer"  id="itemsContainer">
            <input type="text" id="searchInput" placeholder="Rechercher...">
            <div class="buttonsItemContainer" id="buttonsItemContainer"></div>
        </div>
        <div class="ficheContainer" id="ficheContainer">
            <div class="PointsFiche"></div> 
    </div>


<script>
    // Attach event listener to the search input
document.getElementById('searchInput').addEventListener('input', filterButtons);
</script>
</body>
</html>