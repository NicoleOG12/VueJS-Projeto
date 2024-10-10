<template>
    <form action="">
    <h1 style="margin-top: 55px; color: hotpink;"> Contate-nos </h1>
        <div style="background-color: transparent; display: flex; height: 490px; justify-content: center; align-items: center; ">
        <div class="box1">
        <div>
            <p class="subtitulo">E-mail</p>
        <textarea name="nome" id="" ></textarea>
        </div>

        <div>
            <p class="subtitulo">Assunto</p>
            <select name="" id="">
                <option value="">teste</option>
                <option value="">teste2</option>
                <option value="">teste3</option>
                <option value="">teste4</option>
            </select>
            
        </div>
        <div>
            <p class="subtitulo">Mensagem</p>
            <textarea typeof="" name="" id="" ></textarea>
            
        </div>
        <input class="botao" type="submit">
        </div>
        </div>
    </form>
    
</template>

<script>


export default {
    components: {
        
    },
}

</script>

<style>



ww



.subtitulo{
    color: rgb(255, 255, 255);
}
.box1{
    background-color: #ff89a3;
    width: 500px;
    height: 450px;
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
</style>