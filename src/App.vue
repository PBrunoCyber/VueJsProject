<template>
  <div id="app">
    <div id="nav">
      <!-- Inicio do navbar -->
      <nav class="navbar center" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>

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
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/page" v-if="logado === 'ok'" class="navbar-item">Page</router-link>
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable" v-if="me && logado === 'ok'">
              <!-- Mostra a foto do usuário profissional -->
              <ApolloQuery
                :query="require('@/graphql/queries/imagemQuery.gql')"
                :variables="{id:me.id}"
              >
                <template slot-scope="{ result: { data, loading },isLoading }">
                  <div v-if="data">
                    <div v-if="isLoading">Loading...</div>
                    <div v-else>
                      <br>
                      <div v-for="imagem of data.imageForUserId" :key="imagem.id">
                        <figure class="image is-32x32" v-if="imagem.imagem">
                          <img
                            :src="`http://graphql.me/imagem/${imagem.imagem}`"
                            alt="conver image"
                          >
                        </figure>
                        <figure class="image is-32x32" v-else>
                          <img :src="`http://graphql.me/imagem/noimage.png`" alt="conver image">
                        </figure>
                      </div>
                    </div>
                  </div>
                </template>
              </ApolloQuery>
              <!-- Fim do Apollo Query para profissionais -->

              <!-- Mostra a foto do usuário cliente -->
              <ApolloQuery
                :query="require('@/graphql/queries/clientForUserId.gql')"
                :variables="{user_id:me.id}"
              >
                <template slot-scope="{ result: { data, loading },isLoading }">
                  <div v-if="data">
                    <div v-if="isLoading">Loading...</div>
                    <div v-else>
                      <br>
                      <div v-for="imagem of data.clientForUserId" :key="imagem.id">
                        <figure class="image is-32x32" v-if="imagem.imagem">
                          <img
                            :src="`http://graphql.me/perfilcli/${imagem.imagem}`"
                            alt="conver image"
                          >
                        </figure>
                        <figure class="image is-32x32" v-else>
                          <img :src="`http://graphql.me/perfilcli/noimage.png`" alt="conver image">
                        </figure>
                      </div>
                    </div>
                  </div>
                </template>
              </ApolloQuery>
              <!-- Fim do Apollo Query para clientes -->

              <div class="navbar-item navbar-link">
                <b>{{me.name}}</b>
              </div>

              <div class="navbar-dropdown">
                <a
                  href="#"
                  class="navbar-item"
                  @click="logout"
                  v-bind:style="{display:this.fade}"
                >Logout</a>
              </div>
            </div>
          </div>

          <div class="navbar-item">
            <div class="buttons column">
              <div v-if="logado === ''">
                <router-link
                  to="/login"
                  class="button is-primary"
                  :style="`display: ${this.fadeLog};color: white`"
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
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: black;
    }
  }
}
.center {
  text-align: center;
}
</style>
