<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recupera los datos del formulario
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $comments = $_POST["comments"];

    // Dirección de correo a la que deseas enviar el mensaje
    $destinatario = "destinatario@example.com";

    // Asunto del correo
    $asunto = "Wines";

    // Contenido del correo
    $mensaje = "Nombre: $name\n";
    $mensaje .= "Apellido: $surname\n";
    $mensaje .= "Correo Electrónico: $email\n";
    $mensaje .= "Teléfono: $phone\n";
    $mensaje .= "Comentarios / Preguntas:\n$comments";

    // Cabeceras del correo
    $cabeceras = "From: $email";

    // Envía el correo
    if (mail($destinatario, $asunto, $mensaje, $cabeceras)) {
        echo "El correo se envió correctamente.";
    } else {
        echo "Hubo un problema al enviar el correo.";
    }
} else {
    echo "Acceso no autorizado.";
}
?>