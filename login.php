<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Vérifier les informations de connexion (exemple simple, à remplacer par une vérification sécurisée)
    if ($username === "chanLy" && $password === "test123") {
        // Authentification réussie
        $_SESSION["logged_in"] = true;
        $_SESSION["username"] = $username;
        header("Location: admin.php");
        exit();
    } else {
        // Authentification échouée
        header("Location: index.php?error=1");
        exit();
    }
} else {
    // Redirection si la requête n'est pas une requête POST
    header("Location: index.php");
    exit();
}
?>