<?php
// Проверяем, была ли отправка данных из формы
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Получаем данные из формы
  $name = trim($_POST['name']);
  $email = trim($_POST['number']);
  
  // Проверяем, что все поля заполнены
  if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
    // Отправляем письмо на указанный адрес электронной почты
    $to = "mairambekuson@gmail.com"; // Укажите здесь свой адрес электронной почты
    $headers = "From: $name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion();
    $message = "Имя: $name\nEmail: $email\nТема: $subject\nСообщение:\n$message";
    if (mail($to, $subject, $message, $headers)) {
      // Если письмо отправлено успешно, возвращаем статус 200
      http_response_code(200);
    } else {
      // Если возникла ошибка при отправке письма, возвращаем статус 500
      http_response_code(500);
    }
  } else {
    // Если какое-то из полей не заполнено, возвращаем статус 400
    http_response_code(400);
  }
} else {
  // Если запрос не является POST запросом, возвращаем статус 405
  http_response_code(405);
}
?>
