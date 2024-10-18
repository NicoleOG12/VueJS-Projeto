<template>
    <div class="container">
        <div class="row">
            <!--Exibe uma mensagem enquanto aguarda dados da api-->
            <div v-if="loading" class="col-12 text-center">
                <p>Carregando...</p>

            </div>

            <!--Exibe uma mensagem de erro caso a api falhe-->
            <div v-if="error" class="col-12 text-center">  
                <p>Ops, algum erro aconteceu;</p>
            </div>

            <div v-else>

            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            characters:[],
            loading:true,
            error: false
        }
    }
}
</script>

<style></style>