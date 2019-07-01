<template>
  <div class="profissional">
    <img src="../../assets/frontendimages/background5.png" data-aos="slide-down" data-aos-duration="1000" alt="" style="position:absolute;top:0;width:auto;height:auto;max-width:100%;z-index:-1">
    <!-- BREADCRUMB -->
    <nav
      class="breadcrumb column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet"
      aria-label="breadcrumbs" style="font-weight:bold"
    >
      <ul>
        <li>
          <router-link to="/page/cliente" style="color:hsl(171, 100%, 41%)">
            <span class="icon is-small">
              <i class="material-icons" aria-hidden="true">face</i>
            </span>
            <span>Perfil</span>
          </router-link>
        </li>
        <li>
          <router-link to="/page/cliente/categories" style="color:hsl(171, 100%, 41%)">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">list</i>
            </span>
            <span>Categorias</span>
          </router-link>
        </li>
        <li v-if="this.pro.imagem">
          <router-link style="color:hsl(171, 100%, 41%)" :to="`/page/cliente/categories/profissionais/${this.pro.imagem.category.id}`">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">people</i>
            </span>
            <span>{{this.pro.imagem.category.name}}</span>
          </router-link>
        </li>
        <li class="is-active" v-if="this.pro.imagem">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">person</i>
            </span>
            <span>{{this.pro.imagem.user.name}}</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->

    <br>
    <br>
    <br>
    <div class="column">
      <div class="columns column" v-if="this.pro.imagem">
        <div class="column is-3-desktop is-3-tablet is-6-mobile is-offset-3-mobile" style="margin-right:30px">
          <div class align="center">
            <img
              :src="`http://graphql.me/imagem/${this.pro.imagem.imagem}`"
              width="80%"
              alt="conver image"
            >
            <div class="title is-5">{{this.pro.imagem.user.name}}</div>
            <div v-if="media !== 0.0 && conta !== 0">
              <div v-if="media === 5">
                <img
                  class="column is-7-desktop is-8-mobile"
                  src="../../assets/estrela5.png"
                  alt="cover image"
                >
              </div>
              <div v-if="media >= 4 && media < 5">
                <img
                  class="column is-7-desktop is-8-mobile"
                  src="../../assets/estrela4.png"
                  alt="cover image"
                >
              </div>
              <div v-if="media >= 3 && media < 4">
                <img
                  class="column is-7-desktop is-8-mobile"
                  src="../../assets/estrela3.png"
                  alt="cover image"
                >
              </div>
              <div v-if="media >= 2 && media < 3">
                <img
                  class="column is-7-desktop is-8-mobile"
                  src="../../assets/estrela2.png"
                  alt="cover image"
                >
              </div>
              <div v-if="media < 2">
                <img
                  class="column is-7-desktop is-8-mobile"
                  src="../../assets/estrela1.png"
                  alt="cover image"
                >
              </div>
              <div>{{this.media}} de 5 estrelas ({{this.conta}} avaliações)</div>
            </div>
            <div v-else>Não foi avaliado(a) ainda!</div>
          </div>
        </div>
        <br>
        <div class="card-footer">
          <br>
        </div>
        <div class="column is-8-desktop is-9-tablet is-full-mobile">
          <div>
            <h1 class="title is-2 column is-8-desktop is-10-tablet" style="margin-bottom:-10px">{{this.pro.imagem.user.name}}</h1>
            <br>
            <div class="column is-12-tablet">
              <b>Pesquena descrição sobre o(a) profissional:</b>
              {{this.pro.imagem.ramo}}
            </div>
            <div class="columns column" style="margin-bottom:-10px">
              <div class="column is-12-tablet is-6-desktop">
                <b>Categoria:</b>
                {{this.pro.imagem.category.name}}
              </div>
              <div class="column is-12-tablet is-6-desktop">
                <b>De onde? </b>
                {{this.pro.imagem.cidade}}, {{this.pro.imagem.estado}}
              </div>  
            </div>
            <br>
            <!-- 
            <div class="columns column" style="margin-top:-35px">
              <div class="column">
                <div>
                  <b>Endereço:</b>
                  {{this.pro.imagem.logradouro}} -
                  <div>{{this.pro.imagem.cidade}}, {{this.pro.imagem.estado}}</div>
                </div>
              </div>
              <div class="column">
                <div>
                  <b>Telefone:</b>
                  {{this.pro.imagem.telefone}}
                </div>
              </div>
            </div> 
            -->
            <div
              class="column is-12-desktop is-12-tablet"
              style="text-align:justify;margin-top:-25px"
            >
              <b>Descrição:</b>
              {{this.pro.imagem.descricao}}
            </div>
            <div>
              <router-link
                class="column"
                :to="`/page/cliente/categories/profissional/proposta/${this.pro.imagem.id}`"
              >
                <button
                  class="btn2 column is-12-desktop is-12-tablet is-full-mobile"
                  style="font-size:10pt;padding:9px"
                >Eu quero que esse profissional me atenda</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="tabs is-centered is-boxed column is-10-desktop is-offset-1-desktop overlay3">
        <ul style="font-size:20pt">
          <li :class="`${this.active}`" >
            <a style="color:black"  @click.prevent="showAvalia">Avaliações</a>
          </li>
          <li :class="`${this.noactive}`">
            <a style="color:black" @click.prevent="showPortifolio">Portifólios</a>
          </li>
        </ul>
      </div>
      <div class="tabs is-centered is-boxed overlay4">
        <ul class="title is-4">
          <li :class="`${this.active}`">
            <a style="color:black" @click.prevent="showAvalia">Avaliações</a>
          </li>
          <li :class="`${this.noactive}`">
            <a style="color:black" @click.prevent="showPortifolio">Portifólios</a>
          </li>
        </ul>
      </div>
      <div :style="`display:${this.avaliacao}`">
        <ApolloQuery
          :query="require('@/graphql/queries/avaliacaoForAvaliadoId.gql')"
          :variables="{user_avaliado:this.$route.params.id}"
        >
          <template slot-scope="{ result: { data, loading },isLoading }">
            <div v-if="isLoading">Loading...</div>
            <div v-else>
              <div v-if="data">
                <div v-for="avaliacoes of data.avaliacaoForAvaliadoId" :key="avaliacoes.id">
                  <div class="column is-8-desktop is-offset-2-desktop" style="border-radius:20px">
                    <div class="columns">
                      <div
                        class="column is-2-desktop is-2-tablet is-6-mobile is-offset-3-mobile"
                        align="center"
                      >
                        <img
                          class="column is-12-desktop is-6-mobile img"
                          :src="`http://graphql.me/perfilCli/${avaliacoes.user_avalia.imagem}`"
                          alt
                        >
                        <div align="center">{{avaliacoes.user_avalia.user.name}}</div>
                      </div>
                      <div class="column is-9-desktop is-full-mobile">
                        <div class="columns column">
                          <div class="column is-12-desktop is-10-tablet" style="font-size:15pt">
                            <b>{{avaliacoes.titulo}}</b>
                          </div>
                          <div class="column">{{avaliacoes.date}}</div>
                        </div>
                        <div style="margin-top:-40px">
                          <div v-if="avaliacoes.estrela === 5">
                            <img
                              class="column is-3-desktop is-3-tablet is-3-mobile"
                              src="../../assets/estrela5.png"
                              alt="cover image"
                            >
                          </div>
                          <div v-if="avaliacoes.estrela === 4">
                            <img
                              class="column is-3-desktop is-3-tablet is-3-mobile"
                              src="../../assets/estrela4.png"
                              alt="cover image"
                            >
                          </div>
                          <div v-if="avaliacoes.estrela === 3">
                            <img
                              class="column is-3-desktop is-3-tablet is-3-mobile"
                              src="../../assets/estrela3.png"
                              alt="cover image"
                            >
                          </div>
                          <div v-if="avaliacoes.estrela === 2">
                            <img
                              class="column is-3-desktop is-3-tablet is-3-mobile"
                              src="../../assets/estrela2.png"
                              alt="cover image"
                            >
                          </div>
                          <div v-if="avaliacoes.estrela === 1">
                            <img
                              class="column is-3-desktop is-3-tablet is-3-mobile"
                              src="../../assets/estrela1.png"
                              alt="cover image"
                            >
                          </div>
                          <div style="margin-top:-20px">
                            <div
                              v-if="avaliacoes.recomenda === 1"
                              class="column"
                              style="color:green"
                            >
                              <i class="material-icons" style="margin-right:10px;">thumb_up</i>Sim recomendo
                            </div>
                            <div class="column" style="color:red" v-if="avaliacoes.recomenda === 0">
                              <i class="material-icons" style="margin-right:10px;">thumb_down</i>Não recomendo!
                            </div>
                          </div>
                          <div
                            class="column is-12-desktop"
                            style="font-style:italic;font-align:justify; text-justify: inter-word;"
                          >"{{avaliacoes.descricao}}"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br>
                  <div
                    class="column is-10-desktop is-offset-1-desktop is-offset-1-tablet card-footer"
                  ></div>
                </div><br>
                <!-- FIM DO V-FOR -->
              </div>
              <div v-if="data && data.avaliacaoForAvaliadoId">
                <div
                  class="title is-4"
                  align="center"
                  v-if="!data.avaliacaoForAvaliadoId[0]"
                >Ele(a) não foi avaliado ainda!<br><br><br><br><br><br><br></div>
              </div>
            </div>
          </template>
        </ApolloQuery>
      </div>
      <div :style="`display:${this.portifolio}`">
        <div v-if="this.pro.imagem && this.pro">
          <ApolloQuery
            :query="require('@/graphql/queries/portifolioForImagem.gql')"
            :variables="{imagem:this.pro.imagem.id}"
          >
            <template slot-scope="{ result: { data, loading },isLoading }">
              <div v-if="isLoading">Loading...</div>
              <div v-else>
                <div v-if="data" class="column is-10-desktop is-offset-1-desktop">
                  <br>
                  <div v-for="portifolio of data.portifolioForImagem" :key="portifolio.id">
                    <div class="columns container" style="margin-left:1%">
                      <div class="column is-10-desktop is-10-tablet is-12-mobile is-5-tablet">
                        <div class="columns is-mobile">
                          <div class="column is-3-desktop is-3-tablet is-4-mobile" align="center">
                            <img
                              :src="`http://graphql.me/portifolio/${portifolio.imagens}`"
                              alt="Placeholder image"
                              width="100%"
                            >
                            <button class="btn1" @click="mudar(portifolio.imagens)">Ver melhor</button>
                          </div>
                          <!-- MOSTRA AS ESTRELAS -->
                          <div class="column is-10-desktop is-12-tablet is-full-mobile">
                            <div class="column is-12-desktop is-10-tablet is-9-mobile">
                              <b>{{portifolio.titulo}}</b>
                            </div>
                            <div
                              class="column overlay3 is-12-desktop is-11-tablet"
                            >{{portifolio.descricao}}</div>
                          </div>
                        </div>
                        <div
                          class="column overlay4 is-12-desktop is-12-mobile"
                          style="text-align:justify"
                        >{{portifolio.descricao}}</div>
                      </div>
                    </div>
                    <div class="card-footer"></div>
                    <br>
                  </div>
                </div>
                <div v-if="data && data.portifolioForImagem">
                  <div
                    class="title is-4"
                    align="center"
                    v-if="!data.portifolioForImagem[0]"
                  >Ele(a) não tem portifolios ainda!<br><br><br><br><br><br><br></div>
                </div>
              </div>
            </template>
          </ApolloQuery>
        </div>
      </div>
      <br><br><br><br>
    </div>
    <div id="modal" class="modal-a">
      <div :class="`modal ${modal}`" align="center"><br>
        <button @click="fechar()" style="color:white;z-index:1;position:absolute;top:0;right:0;padding-top:20px;padding-right:40px"><i class="material-icons level-right" style="font-size:40pt">close</i></button><br>
        <div class="modal-background a" @click="fechar()"></div>
        <div class="modal-content" style="z-index:1">
          <figure>
            <img :src="`http://graphql.me/portifolio/${imagem}`" alt="Placeholder image">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profissional from "@/graphql/queries/profissional.gql";
import mediaAvalia from "@/graphql/queries/mediaAvaliacao.gql";
import contaAvalia from "@/graphql/queries/contaAvaliacao.gql";

export default {
  data() {
    return {
      pro: [],
      media: 0.0,
      conta: 0,
      image: "",
      active: "is-active",
      noactive: "",
      avaliacao: "inline",
      portifolio: "none",
      modal: "",
      imagem: "vazio.jpg"
    };
  },
  apollo: {
    pro: {
      query: profissional,
      variables() {
        return {
          id: this.$route.params.id
        };
      },
      update(data) {
        this.pro = data;
        return this.pro;
      }
    },
    media: {
      query: mediaAvalia,
      variables() {
        return {
          user_avaliado: this.$route.params.id
        };
      },
      update(data) {
        this.media = data.mediaAvaliacao;

        return this.media;
      }
    },
    conta: {
      query: contaAvalia,
      variables() {
        return {
          user_avaliado: this.$route.params.id
        };
      },
      update(data) {
        this.conta = data.contaAvaliacao;
        return this.conta;
      }
    }
  },
  methods: {
    showAvalia() {
      this.avaliacao = "inline";
      this.portifolio = "none";
      this.active = "is-active";
      this.noactive = "";
    },
    showPortifolio() {
      this.avaliacao = "none";
      this.portifolio = "inline";
      this.active = "";
      this.noactive = "is-active";
    },
    mudar(prop) {
      this.modal = "is-active";
      document.getElementById("modal").style.opacity = 1;
      document.getElementById("modal").style.visibility = "visible";
      this.imagem = prop;
    },
    fechar() {
      document.getElementById("modal").style.opacity = 0;
      document.getElementById("modal").style.transition = "1s";
      document.getElementById("modal").style.visibility = "hidden";
    }
  }
};
</script>
<style lang="scss">
@import "../../cssFiles/inputsAndButtons.css";
@import "../../cssFiles/sidenav.css";

.a {
  opacity: 0.6;
}
.img {
  border-radius: 100%;
}

.modal-a {
  opacity: 0;
  visibility: hidden;
  transition: 1s;
}

.overlay3 {
  margin-top: 0px;
}
/*Esconde a dive de classe Overlay caso seja identificado que o width Mobile maximo deseja igual ou menor que 980px*/
@media only screen and (max-width: 768px) {
  .overlay3 {
    display: none;
  }
}

.overlay4 {
  margin-top: -4px;
}
/*Esconde a dive de classe Overlay caso seja identificado que o width Mobile maximo deseja igual ou menor que 980px*/
@media only screen and (min-width: 770px) {
  .overlay4 {
    display: none;
  }
}
</style>
