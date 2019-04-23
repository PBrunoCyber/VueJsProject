<template>
  <div class="page-cliente">
    <div class="columns">
      <div class="column">
        <div class="column is-3-desktop is-full-mobile">
          <div class="box">
            <!-- Verificação de Usuário Adcionou ou não informações -->
            <div v-if="!this.clientes.clientForUserId[0]">
              <div for="q" class="column" align="center">
                <div align="center">
                  <figure class="image is-128x128">
                    <img :src="`http://graphql.me/perfilcli/noimage.png`" alt="conver image">
                  </figure>
                </div>
              </div>
            </div>
            <!-- Se o usuário cadastrou as informações e não tem foto no perfil -->
            <div v-if="this.clientes.clientForUserId[0]">
              <div v-if="this.clientes.clientForUserId[0].imagem === ''">
                <div for="q" class="column" align="center">
                  <div align="center">
                    <figure class="image is-128x128">
                      <img :src="`http://graphql.me/perfilcli/noimage.png`" alt="conver image">
                    </figure>
                  </div>
                </div>
              </div>
              <div v-else>
                <div for="q" class="column" align="center">
                  <div align="center">
                    <figure class="image is-128x128">
                      <img
                        :src="`http://graphql.me/perfilcli/${this.clientes.clientForUserId[0].imagem}`"
                        alt="conver image"
                      >
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-footer">
              <!-- Se ele adcionou uma foto então faz isso -->
              <div for="q" class="column" align="center" v-if="this.clientes.clientForUserId[0]">
                <b>{{me.name}}</b>
                <br>
                {{me.email}}
                <br>
                <router-link
                  :to="`/page/cliente/${this.clientes.clientForUserId[0].id}/editcliente/${me.id}`"
                >
                  <button class="btn-4">Editar Perfil</button>
                </router-link>
              </div>

              <!-- Se ele não adicionou nada então manda adicionar -->
              <div for="q" class="column" align="center" v-if="!this.clientes.clientForUserId[0]">
                <div align="center">
                  <b>{{me.name}}</b>
                  <br>
                  {{me.email}}
                  <br>
                  <router-link
                    :to="`/page/cliente/${me.id}/perfilclienteadd`"
                    style="text-decoration: none; color:green"
                  >
                    <button class="btn-7">Adicionar Informações</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import clientForUserId from "@/graphql/queries/clientForUserId.gql";

export default {
  data() {
    return {
      me: null,
      clientes: []
    };
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
    `,
    clientes: {
      query: clientForUserId,
      variables() {
        return {
          user_id: this.me.id
        };
      },
      update( data) {
        this.clientes = data;
        return this.clientes;
      }
    }
  },
  created() {
    localStorage.setItem("status", this.me.status);
  }
};
</script>
<style>
@import "../../cssFiles/inputsAndButtons.css";
</style>
