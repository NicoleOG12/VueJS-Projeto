<template>
    <form action="">
        <h1 style="margin-top: 70px; color: hotpink;"> Login </h1> 
        <div style="background-color: transparent; display: flex; height: 390px; width: 1000px; text-align: center; justify-content: center; 
        align-items: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
    

        <div class="boxOne">
        <div class="box2">
            <p class="subtitulo">E-mail</p>
            <input type="text">
        </div>

        
        <div class="box3">
            <p class="subtitulo">Senha</p>
            <input type="text">
            
        </div>
        <input class="botao" type="submit">
        </div>
        </div>
    </form>
</template>

<script>

</script>

<style>
.subtitulo{
    color: rgb(255, 255, 255);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 20px;
}
.boxOne{
    background-color: #ff89a3;
    width: 500px;
    height: 350px;
    border-radius: 20px;

}
.botao{
    background-color: rgb(255, 0, 64);
    border-color: white;
    border-radius: 10px;
    width: 110px;
    height: 50px;
    margin-top: 40px;
    color: white;
    
}

.box2{
    margin-top: 50px;
}
</style>