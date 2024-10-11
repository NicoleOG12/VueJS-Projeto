<template>
    <form @submit.prevent="mostrarPopUp">
      <h1 style="margin-top: 70px; color: white; font-family: 'Allura'; text-shadow: 0 0 6px #ff004c;"> Login </h1>
        <div style="background-color: transparent; display: flex; height: 490px; justify-content: center; align-items: center; ">
        <div class="boxOne">
          <div class="box2">
            <p class="subtitulo">E-mail</p>
            <input type="text">
          </div>
          <div class="box3">
            <p class="subtitulo">Senha</p>
            <input type="text">
          </div>
          <input class="botao" type="submit" value="Logar">
        </div>
      </div>
      <div v-if="popupVisivel" class="popup" >
        <div class="popup-content">
          <p>Login feito com sucesso!</p>
          <button @click="fecharPopUp">Fechar</button>
        </div>
      </div>
    </form>
  </template>
   
  <script>
  export default {
    data() {
      return {
        popupVisivel: false
      };
    },
    methods: {
      mostrarPopUp() {
        this.popupVisivel = true;
      },
      fecharPopUp() {
        this.popupVisivel = false;
      }
    }
  };
  </script>
   
  <style>
  .subtitulo {
    color: rgb(255, 255, 255);
    font-family: 'Allura';
    font-weight: 500;
    font-size: 20px;
  }
  .boxOne {
    background-color: #ff89a3;
    width: 500px;
    height: 350px;
    border-radius: 20px;
    color:rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.219), 0 6px 10px 0 rgba(0, 0, 0, 0.151);
  }
  .botao {
    background-color: rgb(255, 0, 64);
    border-color: white;
    border-radius: 10px;
    width: 110px;
    height: 50px;
    margin-top: 40px;
    color: white;
  }
  .box2 {
    margin-top: 50px;
  }
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 10px;
    color: white;
  }
  .popup-content {
    background-color:white;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
  }
  .popup .popup-content {
    background-color: transparent;
    color: rgb(255, 255, 255);
}
  </style>