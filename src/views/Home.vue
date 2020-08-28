<template>
  <div class="home">
    <b-form-group class="form" :model="user">
      <h1 class="titulo">
        ¡Hola, regístrate <br />
        para conocer las <br />
        aves de Chile!
      </h1>
      <b-form-input
        id="input"
        v-model="user.email"
        type="email"
        required
        placeholder="Ingresa tu email"
      ></b-form-input>

      <b-form-input
        id="input"
        v-model="user.password"
        type="password"
        required
        placeholder="Ingresa tu contraseña"
      ></b-form-input>

      <b-button type="submit" class="bg-dark px-5" @click="login"
        >Entrar</b-button
      >
    </b-form-group>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    ...mapActions(["updateUser"]),
    login(e) {
      e.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then((user) => {
          console.log(user);
          let usuario = this.user.email;
          this.updateUser(usuario);
          this.$router.push("/list");
          alert("Te has registrado con éxito!");
        })
        .catch(() => {
          this.updateUser(null);
          alert("¡Error al iniciar sesión!");
        });
    },
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
