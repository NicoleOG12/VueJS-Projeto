<template>

<div @submit.prevent='fillList'>
        <div @load="fillList">dvgdssdfv </div>
</div>

<div class="tableee">
    <div v-for="(integrante, index) in integranteList" :key="index">
        <p>Nome: {{integrante.nome}}</p>
        <p>Idade: {{integrante.idade}}</p>
        <p>Frase: {{integrante.frase}}</p>
        <img src={{integrante.image}}> 
    <hr>
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
                    "frase": "jrfrejedsadka",
                    "image": "image.img"}
                ,
                {
                    "nome": "Julia",
                    "idade": "18",
                    "frase": "jrfrejedsadka",
                    "image": "image.img"}
                ,
                {
                    "nome": "Niccole",
                    "idade": "17",
                    "frase": "jrfrejedsadka",
                    "image": "image.img"}
            ]
        }
    }}
</script>



<style>
    .tablee {
        display: grid;
        grid-template-columns:200px, 200px, 200px;
    }
</style>