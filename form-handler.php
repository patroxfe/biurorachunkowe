<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer-master/src/Exception.php';
require 'PHPMailer/PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer/PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $description = $_POST['description'];
    $ip = $_SERVER['REMOTE_ADDR'];

    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'kontakt@biurorachunkoweonline.pl';
        $mail->Password   = ':Fl0bjq$';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;
        $mail->CharSet    = 'UTF-8';

        //Recipients
        $mail->setFrom('kontakt@biurorachunkoweonline.pl', 'Ewa Reluga');
        $mail->addAddress('reluga52@gmail.com');x

       // Content
        $mail->isHTML(true);
        $mail->Subject = 'NOWE ZLECENIE OD KLIENTA';
        $mail->Body    = "
        <h2>Nowe zlecenie od klienta</h2>
        <p><strong>Imię i Nazwisko:</strong> $firstName</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <hr>
        <h3>Opis strony</h3>
        <p>$description</p>
        <hr>
        <p>IP kilenta: $ip</p>
        ";

        $mail->AltBody = "
            Imię i Nazwisko: $firstName\n
            Email: $email\n";

     $mail->send();

        $autoReply = new PHPMailer(true);
        $autoReply->isSMTP();
        $autoReply->Host       = 'smtp.hostinger.com'; // Użyj serwera SMTP dostarczonego przez Hostinger
        $autoReply->SMTPAuth   = true;
        $autoReply->Username   = 'kontakt@biurorachunkoweonline.pl'; // SMTP username
        $autoReply->Password   = ':Fl0bjq$'; // SMTP password
        $autoReply->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $autoReply->Port       = 587; // Użyj odpowiedniego portu SMTP dostarczonego przez Hostinger
        $autoReply->CharSet    = 'UTF-8';

        $autoReply->setFrom('kontakt@biurorachunkoweonline.pl', 'Biuro Rachunkowe OnLine | Ewa Reluga');
        $autoReply->addAddress($email); // Odbiorca to adres e-mail, który został podany w formularzu

        $autoReply->isHTML(true);
        $autoReply->Subject = 'Dziękuję za przesłanie formularza';
        $autoReply->Body    = "
        <h2>Dziękuję za przesłanie formularza</h2>
        <p>Drogi $firstName,</p>
        <p>Dziękuję za kontakt. Otrzymałam Twoje zgłoszenie i wkrótce się z Tobą skontaktuję.</p>
        <p>Pozdrawiam,<br>Ewa Reluga</p>";
        $autoReply->AltBody = "Drogi $firstName,\n\nDziękuję za kontakt. Otrzymałam Twoje zgłoszenie i wkrótce się z Tobą skontaktuję.\n\nPozdrawiam,\nEwa Reluga";

        $autoReply->send();
        
        echo 'Email sent successfully';
    } catch (Exception $e) {
        echo "Failed to send email. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
