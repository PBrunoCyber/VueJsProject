<template>
  <div id="app">
    <div id="nav">
      <!-- Inicio do navbar -->
      <nav class="navbar center" role="navigation" aria-label="main navigation" style="position:relative;z-index:1;background:transparent">
        <div class="navbar-brand" >
          <router-link to="/" class="navbar-item">
            <div class="navbar-item">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </div>
          </router-link>
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="false"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable" v-if="me && logado === 'ok'">
              <div class="navbar-item navbar-link">
                <b>{{me.name}}</b>
              </div>
              <div class="navbar-dropdown">
                <router-link to="/page" class="navbar-item level-item">Perfil<i class="material-icons" style="margin-left:5px">face</i></router-link>
                <hr class="dropdown-divider">
                <div class="dropdown-item">
                  <a href="#" @click="logout" class="navbar-item" v-bind:style="{display:this.fade}">Logout</a>
                </div>
              </div>
            </div>
          </div>

          <div class="navbar-item">
            <div class="buttons column">
              <div v-if="logado === ''">
                <router-link
                  to="/login"
                  class="btn2"
                  :style="`display: ${this.fadeLog}`"
                >Login</router-link>
              </div>
              <div v-else>
                <div class="column is-12"></div>
                <div class="column is-12"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- Fim do Navbar -->

    <router-view/>

    
  </div>
</template>

<script>
import gql from "graphql-tag";

import { Bus } from "./event.js";
export default {
  data() {
    return {
      me: null,
      logado: "",
      deslogado: "",
      fade: "",
      fadeLog: ""
    };
  },
  mounted() {
    if (!localStorage.getItem("apollo-token")) {
      this.logado = "";
      this.deslogado = "ok";
      this.fade = "none";
      this.fadeLog = "inline";
    } else {
      this.logado = "ok";
      this.deslogado = "";
      this.fade = "inline";
      this.fadeLog = "none";
    }
  },
  created() {
    Bus.$on("logado", () => {
      this.logado = "ok";
      this.deslogado = "";
      this.fade = "inline";
      this.fadeLog = "none";
    });
    Bus.$on("deslogado", () => {
      this.deslogado = "ok";
      this.logado = "";
      this.fade = "none";
      this.fadeLog = "inline";
    });
    
  },
  methods: {
    logout() {
      this.status = "";
      localStorage.removeItem("apollo-token");
      localStorage.removeItem("status");
      this.$router.push("/");
      Bus.$emit("deslogado");
    }
  },
  apollo: {
    me: gql`
      query {
        me {
          id
          name
          email
          status
        }
      }
    `
  }
};
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
</script>



<style lang="scss">
#nav {
  padding: 20px 20px 20px 20px;
  margin-bottom:0px;
  a {
    font-weight: bold;
  }
}
.center {
  text-align: center;
}



.font{
  font-family: 'Francois One', sans-serif;
}

</style>
