<template>
  <div class="notfound">
    <img src="../assets/birds-notfound.png" alt="birds" />
    <h1>
      ¡Hola de nuevo, <br />
      esta página no se ha encontrado!
    </h1>
    <b-button class="boton" variant="outline-warning" to="/"
      >VUELVE AL INICIO
      <img class="pajaro" src="../assets/pajarito.png" alt="pajaro" />
    </b-button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  components: {},
};
</script>

<style scoped lang="scss">
h1 {
  margin-top: 30px;
}
img {
  max-width: 70%;
  padding: 0 50px;
  margin-top: 50px;
}
.boton {
  margin: 30px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 4px;
  padding-top: 10px;
  padding-left: 15px;
}
.pajaro {
  width: 40px;
  padding: 0;
  margin: 0;
}
</style>
