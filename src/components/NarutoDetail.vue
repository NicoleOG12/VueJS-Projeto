<template>
    <!--Verifica a existência da personagem-->
    <div class="container" v-if="character">
        <!-- Card com os detalhes da personagem -->
        <div class="card text-center my-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <img :src="character.images[0]" class="img-thumbnail">
                        
                    </div>
                    <div class="col-9">
                        <h5 class="card-title"> {{ character.name }}</h5>

                        <!-- hmmm eu acho que ta faltando algo aqui -->
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 Family
                            </button>
                                <ul class="dropdown-menu">
                                    <li v-for="family in character.family" :key="family.id">
                                        <a class="dropdown-item">{{ family }}</a>

                                    </li>
                                </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="text-center mt-4" v-else-if="loading">
        <p>Carregando...</p>
    </div>

    <div class="text-center mt-4" v-else>
        <p> Erro ao carregar personagem</p>
    </div>
</template>

<script>
export default {
    props: ['id'], 
    data() {
        return {
            character: null,
            loading: true,
            error: false,
            family: [],

        }
    },
    methods: {
        fetchCharacter() {
            fetch(`https://dattebayo-api.onrender.com/characters/${this.id}`)
            .then (response => {
                return response.json();
            })
            .then(data => {
                this.character = data;
                this.loading = false;
            })
            .catch(() => {
                this.error = true;
                this.loading = false;
            })
        }
    },
    mounted() {
        this.fetchCharacter()
    },
    watch: {
        id() {
            this.fetchCharacter()
        }
    }
}
</script>

<style>

</style>