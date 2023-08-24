<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/phpmailer/src/Exception.php';
require 'path/to/phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->Charset = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  $mail->setFrom('info@kosmospromedia.ru', 'Космос Про Медиа');
  $mail->addAddress('info@kosmospromedia.ru');
  $mail->Subject = 'Заявка на звонок Космос Про Медиа';

  // Тело письма
  $body = '<h1>Новая заявка на звонок:</h1>';

  if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p>';
  }

  if (trim(!empty($_POST['surname']))) {
    $body .= '<p><strong>Фамилия:</strong> ' . $_POST['surname'] . '</p>';
  }

  if (trim(!empty($_POST['tel']))) {
    $body .= '<p><strong>Телефон:</strong> ' . $_POST['tel'] . '</p>';
  }

  if (trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Сообщение:</strong> ' . $_POST['message'] . '</p>';
  }

  // $mail->Body = $body;

  if (!$mail->send()) {
    $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены';
  }

  $response = ['message' => $message];

  header('Content-type: applicated/json');
  echo json_encode($response);

  ?>
