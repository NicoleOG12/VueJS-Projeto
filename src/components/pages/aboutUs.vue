<template>

<div @submit.prevent='fillList'/>


<div class="tableee" @load="fillList">
    <div class="abts" v-for="(integrante, index) in integranteList" :key="index">
        <p><b>Nome: </b>{{integrante.nome}}</p>
        <p><b>Idade:</b> {{integrante.idade}}</p>
        <p><b>Frase:</b> {{integrante.frase}}</p>
        <img class="iiii" :src="integrante.image">
    </div>
</div>
</template>

<script>


export default{
    data(){
        return {
            integranteList:[
                {
                    "nome": "Clara",
                    "idade": "20",
                    "frase": "",
                    "image": "https://i.pinimg.com/736x/c0/3e/ad/c03ead78366bf1772100012576a5d32e.jpg"}

 



                ,
                {
                    "nome": "Julia",
                    "idade": "18",
                    "frase": "jrfrejedsadka",
                    "image": "https://i.pinimg.com/236x/95/de/a8/95dea837baa9cbb828f1708f3832341d.jpg"}
                ,



                {
                    "nome": "Nicole",
                    "idade": "17",
                    "frase": "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
                    "image":"https://i.pinimg.com/736x/a1/12/bd/a112bd99bb4f3952c1d7599ad43e7ff6.jpg"}
            ]
        }
    }}
</script>



<style>
    .tableee {
        display: grid;
        grid-template-columns: 32% 32% 32%;
        border-radius: 8px;
        gap:2%;
        margin-top:4%;
        margin-bottom:4%;
    }

    .abts{
        width: 100%;
        background-color:#ff89a3;
        border-radius:8px;
        padding-top: 20px;
        padding-bottom: 20px;
        color:rgba(255, 255, 255, 0.8);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        border-style: solid;
        border-width: 2px;
    }

    .iiii{
        width: 50%;
        border-radius: 48%;
    }
</style>