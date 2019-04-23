<template>
  <div class="about">
    <div class="columns">
      <div class="column is-3-desktop is-12-mobile">
        <div class="column">
          <div class="box">
            <!-- Verificação de Usuário Adcionou ou não informações -->
            <div v-if="!this.ping.imageForUserId[0]">
              <div for="q" class="column" align="center">
                <div align="center">
                  <figure class="image is-128x128">
                    <img :src="`http://graphql.me/imagem/noimage.png`" alt="conver image">
                  </figure>
                </div>
              </div>
            </div>
            <!-- Se o usuário cadastrou as informações e não tem foto no perfil -->
            <div v-if="this.ping.imageForUserId[0]">
              <div v-if="this.ping.imageForUserId[0].imagem === ''">
                <div for="q" class="column" align="center">
                  <div align="center">
                    <figure class="image is-128x128">
                      <img :src="`http://graphql.me/imagem/noimage.png`" alt="conver image">
                    </figure>
                  </div>
                </div>
              </div>
              <div v-else>
                <div for="q" class="column" align="center">
                  <div align="center">
                    <figure class="image is-128x128">
                      <img
                        :src="`http://graphql.me/imagem/${this.ping.imageForUserId[0].imagem}`"
                        alt="conver image"
                      >
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-footer">
              <!-- Se ele adcionou uma foto então faz isso -->
              <div for="q" class="column" align="center" v-if="this.ping.imageForUserId[0]">
                <b>{{me.name}}</b>
                <br>
                {{me.email}}
                <br>
                <router-link
                  :to="`/page/profissional/${this.ping.imageForUserId[0].id}/editImage/${me.id}`"
                >
                  <button class="btn-4">Editar Perfil</button>
                </router-link>
              </div>

              <!-- Se ele não adicionou nada então manda adicionar -->
              <div for="q" class="column" align="center" v-if="!this.ping.imageForUserId[0]">
                <div align="center">
                  <b>{{me.name}}</b>
                  <br>
                  {{me.email}}
                  <br>
                  <router-link
                    :to="`/page/profissional/${me.id}/imagem`"
                    style="text-decoration: none; color:green"
                  >
                    <button class="btn-7">Adicionar Informações</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- class box -->
        </div>
        <!-- class is-3-desktop -->
      </div>
      <!-- class column -->

      <div class="column">
        <div class="column is-12-desktop is-12-mobile">
          <p class="title is-4">Logo abaixo estão suas informações de cadastro!</p>
          <footer class="card-footer">
            <div class="title is-5">
              <br>
              <div class="column">Nome: {{me.name}}</div>
              <div v-if="this.ping.imageForUserId[0]">
                <div
                  class="column"
                >Categoria do serviço: {{this.ping.imageForUserId[0].category.name}}</div>
                <div class="column">Ramo de atividade: {{this.ping.imageForUserId[0].ramo}}</div>
                <div class="column">Descrição: {{this.ping.imageForUserId[0].descricao}}</div>
                <div class="column">Cidade: {{this.ping.imageForUserId[0].cidade}}</div>
                <div class="column">Estado: {{this.ping.imageForUserId[0].estado}}</div>
                <div class="column">Endereço: {{this.ping.imageForUserId[0].logradouro}}</div>
              </div>
              <div v-else>
                <div class="column">Adicione suas informações, para mais dados</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import {Bus} from '../../event.js'

import gql from "graphql-tag";
export default {
  data() {
    return {
      me: null,
      k: null,
      ping: null
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
    ping: {
      query: gql`
        query query($id: Int!) {
          imageForUserId(user_id: $id) {
            id
            imagem
            ramo
            cidade
            estado
            descricao
            logradouro
            user {
              name
            }
            category {
              name
            }
          }
        }
      `,
      variables() {
        return {
          id: this.me.id
        };
      },
      update(data) {
        // Bus.$emit('ok',data.imageForUserId[0].id);
        this.ping = data;
        return this.ping;
      }
    }
  },
  created() {
    localStorage.setItem("status", this.me.status);
  }
};
</script>
<style lang="scss" scoped>
@import "../../cssFiles/inputsAndButtons.css";
</style>
