<template>
  <div class="navbar">
    <b-navbar class="menu" toggleable="lg" type="dark" variant="warning">
      <b-navbar-brand to="/" class="logotipo">
        <img class="logo" src="../assets/logotipo.png" alt="logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="links">
            <b-nav-item to="/list">Inventario</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Usuario</em>
            </template>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  margin: 0;
}
.menu {
  padding: 10px;
}
.logotipo {
  text-align: left;
}
.logo {
  width: 30%;
}
.links {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.b-nav-item-exact-active {
      color: #42b983;
    }
  }
}
</style>
