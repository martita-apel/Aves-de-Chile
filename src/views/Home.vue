<template>
  <div class="home">
    <b-form-group class="form">
      <h1 class="titulo">
        ¡Hola, regístrate <br />
        para conocer las <br />
        aves de Chile!
      </h1>
      <b-form-input
        id="input"
        v-model="form.email"
        type="email"
        required
        placeholder="Ingresa tu email"
      ></b-form-input>

      <b-form-input
        id="input"
        v-model="form.name"
        type="password"
        required
        placeholder="Ingresa tu contraseña"
      ></b-form-input>

      <b-button type="submit" class="bg-dark px-5">Entrar</b-button>
    </b-form-group>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      form: {
        email: "",
        name: "",
        checked: [],
      },
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  background-image: url("../assets/birds.jpg");
  background-size: cover;
  min-width: 100%;
  min-height: 670px;
  padding-top: 60px;
}
.form {
  background-color: white;
  justify-content: center;
  border-radius: 10px;
  width: fit-content;
  padding: 30px;
  margin: auto;
}
.titulo {
  font-size: 30px;
}
#input {
  margin: 10px 0;
}
</style>
