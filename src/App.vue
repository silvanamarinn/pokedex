<template>
  
  <div id="app">
    <img class="logo" src="./assets/2560px-International_Pokémon_logo.svg.png" alt="pokemon logo" />
    <form>
      <label for="pokenombre">Nombre: </label>
      <input type="text" name="pokemonnames" id="pokemonnames" v-model="nombrePokemon" />
      <button class="btn-primary" type="submit" @click.prevent="searchPokemon">Busca mi Pokemón</button>
    </form>
    <pokemones :statusPokemon="statusPokemon" />
  </div>

</template>

<script>
import Pokemones from "./components/pokemones.vue";
import { getPokemonDetailByName } from "./api/pokedex";
export default {
  name: "App",
  components: {
   Pokemones,
  },
  data() {
    return {
      nombrePokemon: "",
      statusPokemon: {},
    };
  },
  methods: {
    async searchPokemon() {
      const { nombrePokemon } = this;
      this.statusPokemon = await getPokemonDetailByName(nombrePokemon);
    },
  },
  async created() {
    this.statusPokemon = await getPokemonDetailByName("pikachu");
  },
};
</script>

<style>
.logo {
  height:150px;
  margin-bottom: 30px;

}
#app {
  font-family:Courier, "Lucida Console", monospace;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

</style>