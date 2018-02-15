<?php
  class Caneta {
    public $modelo;
    private $cor;
    private $ponta;
    private $tampada;

    public function __construct($modelo, $cor, $ponta){
      $this->setModelo($modelo);
      $this->setCor($cor);
      $this->setPonta($ponta);
      $this->tampar();
    }

    //===============Getters&Setters=======
    public function getModelo() {
      return $this->modelo;
    }

    public function setModelo($m) {
      $this->modelo = $m;
    }

    public function getCor() {
      return $this->cor;
    }

    public function setCor($c) {
      $this->cor = $c;
    }

    public function getPonta() {
      return $this->ponta;
    }

    public function setPonta($p) {
      $this->ponta = $p;
    }

    //================Metodos================
    public function tampar(){
      $this->tampada = true;
    }
  }
 ?>
