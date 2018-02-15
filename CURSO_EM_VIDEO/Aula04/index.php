<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Aula 04 - POO</title>
  </head>
  <body>
    <pre>
      <?php
        require_once 'Caneta.php';

        $c1 = new Caneta("BIC", "Preta", 0.8);
        print_r($c1);

        $c2 = new Caneta('KKK', 'Azul', 0.5);
        print_r($c2);

        $c3 = new Caneta();
        print_r($c3);
        
       ?>
    </pre>
  </body>
</html>
