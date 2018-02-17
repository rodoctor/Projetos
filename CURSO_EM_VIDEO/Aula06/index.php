<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Aula 06 - POO</title>
  </head>
  <body>
    <pre>
      <?php
        require_once 'ControleRemoto.php';
        $c = new ControleRemoto();
        $c->ligar();
        $c->maisVolume();
        $c->maisVolume();

        $c->abrirMenu();

       ?>
    </pre>
  </body>
</html>
