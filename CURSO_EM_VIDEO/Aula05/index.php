<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Aula 05 - POO</title>
  </head>
  <body>
    <pre>
      <?php
        require_once 'Conta.php';

        $c1 = new ContaBanco();
        $c1->setNumConta(0001);
        $c1->setDono('Rodolfo Moreira');
        $c1->abrirConta('cp');
        $c1->pagarMensal();
        $c1->sacar(130);
        $c1->fecharConta();
        print_r($c1);
       ?>
    </pre>
  </body>
</html>
