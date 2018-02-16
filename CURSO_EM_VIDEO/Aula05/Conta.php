<?php
  class ContaBanco {
    public $numConta;
    protected $tipo;
    private $dono;
    private $saldo;
    private $status;

    //=============Metodos===========
    public function abrirConta($tipo){
      if ($tipo == 'cc') {
        echo 'Conta Corrente aberta <br>';
        $this->setTipo($tipo);
        $this->setStatus(true);
        $this->depositar(50);
      } elseif ($tipo == 'cp') {
        echo 'Conta Poupança aberta <br>';
        $this->setTipo($tipo);
        $this->setStatus(true);
        $this->depositar(150);
      } else {
        echo "O tipo {$tipo} está incorreto <br>";
      }
    }

    public function fecharConta(){
      if ($this->saldo != 0) {
        echo 'A conta não pode ser encerrada pois ainda possui saldo. <br>';
      } else {
        echo 'Conta encerrada <br>';
        $this->setStatus(false);
      }
    }

    public function depositar ($valor){
      $saldo = 0;
      $saldo += $valor + $this->getSaldo();
      echo "Valor R$ {$valor} depositado.</br>";
      echo "Novo saldo: {$saldo} </br>";
      $this->setSaldo($saldo);
    }

    public function sacar ($valor){
      $saldo = 0;
      $saldo = $this->getSaldo() - $valor;
      if ($this->status == true) {
        if ($saldo < 0) {
          echo 'Você não tem saldo suficiente para realizar esta operação! </br>';
          echo "Saldo atual: R$ {$this->getSaldo()} </br>";
        } else {
          echo "Valor sacado R$ {$valor} </br>";
          echo "Novo saldo R$ {$saldo} </br>";
          $this->setSaldo($saldo);
          }
      } else {
        echo 'Você não possui uma conta aberta. <br>';
      }
    }

    public function pagarMensal(){
      if ($this->getTipo() == 'cc') {
        echo "Será cobrada a taxa de R$ 12,00 <br>";
        $this->setSaldo($this->getSaldo()-12);
        echo "Novo saldo R$ {$this->getSaldo()} <br>";
      } elseif($this->getTipo() == 'cp') {
        echo "Será cobrada a taxa de R$ 20,00 <br>";
        $this->setSaldo($this->getSaldo()-20);
        echo "Novo saldo R$ {$this->getSaldo()} <br>";
      }
    }

    //=====================gets sets=================
    public function getNumConta(){
      return $this->numConta;
    }
    public function setNumConta($numConta){
      $this->numConta = $numConta;
    }

    public function getTipo(){
      return $this->tipo;
    }
    public function setTipo($tipo){
      $this->tipo = $tipo;
    }

    public function getDono(){
      return $this->dono;
    }
    public function setDono($dono){
      $this->dono = $dono;
    }

    public function getSaldo(){
      return $this->saldo;
    }
    public function setSaldo($saldo){
      $this->saldo = $saldo;
    }

    public function getStatus(){
      return $this->status;
    }
    public function setStatus($status){
      $this->status = $status;
    }
  }
?>
