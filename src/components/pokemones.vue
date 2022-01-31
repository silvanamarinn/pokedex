<template>
  <div class="container-detais">
    <img :src="statusPokemon.imagen" alt="imagen pokemon" />
  
    <h1>Movimientos</h1>
    <section class="container-movimientos">
      <div v-for="(movimientos, index) in statusPokemon.movimientos" :key="index">
        <p>{{ movimientos.move.name }}</p>
      </div> 
    </section>
    <h1>Habilidades</h1>
    <section class="container-habilidades">
    <div v-for="(habilidad, index) in statusPokemon.habilidades" :key="index">
        <p>{{ habilidad.ability.name }}</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Pokemones",
  props: {
    statusPokemon: {},
  },
};
</script>
<style scoped>
img {
  height: 15rem;
  width: 15rem;
  object-fit: cover;
} 
.container-detais {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container-habilidades {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
p {
background-color: rgb(81, 212, 235);
border-radius:20px;
margin: 0.1em;
  
  text-align: center;
}
.container-movimientos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>