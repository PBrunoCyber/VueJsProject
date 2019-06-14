<template>
  <div class="solicitacoes">
    <img src="../../assets/frontendimages/background2.png" data-aos="slide-down" data-aos-duration="1000" alt="" style="position:absolute;top:0;width:120%;height:auto;max-width:100%;z-index:-1">
    <!-- BREADCRUMB -->
    <nav
      class="breadcrumb column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet"
      aria-label="breadcrumbs" style="font-weight:bold"
    >
      <ul style="color:black">
        <li>
          <router-link to="/page/cliente" style="color:hsl(171, 100%, 41%)">
            <span class="icon is-small">
              <i class="material-icons" aria-hidden="true">face</i>
            </span>
            <span>Perfil</span>
          </router-link>
        </li>
        <li class="is-active">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">move_to_inbox</i>
            </span>
            <span>Solicitações</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->
    <div v-if="this.pro.imageForUserId">
      <h3
        class="title is-2 column is-6-desktop is-offset-3-desktop is-12-tablet is-full-mobile"
        align="center" style="color:black;text-transform:uppercase;"
      ><b>Abaixo estão as solicitacões de serviços feitas para você</b></h3>
      <br>
      <div v-if="this.pro.imageForUserId[0]">
        <ApolloQuery
          :query="require('@/graphql/queries/solicitacoes.gql')"
          :variables="{user_recebe_id:this.pro.imageForUserId[0].id,count:this.count,page:this.page}"
        >
          <template slot-scope="{ result: { data, loading },isLoading }">
            <div v-if="isLoading">Loading...</div>
            <div v-else>
              <div v-if="data">
                <div v-for="solicitacao of data.propostaRecebe.data" :key="solicitacao.id">
                  <div class="column is-10-desktop is-offset-1-desktop is-full-mobile">
                    <div class="card">
                      <div class="columns">
                        <div
                          class="column is-3-desktop is-4-tablet is-8-mobile is-offset-2-mobile"
                          align="center"
                        >
                          <div class="column" style="border-right:#ccc;border-bottom:#ccc">
                            <div>
                              <img
                                class="img"
                                width="60%"
                                height="10%"
                                :src="`http://graphql.me/perfilCli/${solicitacao.user_envia.imagem}`"
                                alt="Placeholder image"
                              >
                            </div>
                            <div align="center">Solicitação de:</div>
                            <div class="column is-12-desktop is-12-tablet title is-5 level-item">
                              <div class="level-item">{{solicitacao.user_envia.user.name}}</div>
                            </div>
                          </div>
                        </div>
                        <div class="column is-9-desktop is-full-mobile">
                          <div class="column is-11-desktop" style="text-align:left">
                            <div class>
                              <div class="title is-4" style="text-transform:uppercase;color:black">{{solicitacao.titulo}}</div>
                            </div>
                          </div>
                          <!-- STATUS -->
                          <div class="column" style="margin-top:-20px">
                            <div
                              v-if="solicitacao.status===0"
                              class="tag is-warning"
                              style="font-size:10pt;color:black"
                            >
                              <b>Esperando resposta</b>
                            </div>
                            <div
                              v-if="solicitacao.status===1"
                              class="tag"
                              style="font-size:10pt;background:hsl(141, 71%, 48%);color:white"
                            >
                              <b>Pedido aceito :)</b>
                            </div>
                            <div
                              v-if="solicitacao.status===2"
                              class="tag"
                              style="font-size:10pt;background:hsl(348, 100%, 61%);color:white"
                            >
                              <b>Pedido recusado</b>
                            </div>
                            <div
                              v-if="solicitacao.status===3"
                              class="tag"
                              style="font-size:10pt;background:rgb(99, 74, 110);color:white"
                            >
                              <b>Pedido finalizado</b>
                            </div>
                            <div
                              v-if="solicitacao.status===4"
                              class="tag"
                              style="font-size:10pt;background:rgb(98, 0, 49);color:white"
                            >
                              <b>Você foi avaliado</b>
                            </div>
                            {{solicitacao.date}}
                          </div>

                          <div class="columns column">
                            <div class="column is-6-desktop">
                              <div class>
                                <b>Local do serviço:</b>
                                {{solicitacao.local}}
                              </div>
                            </div>
                            <div class="column">
                                <b>Pra quando?</b>
                                {{solicitacao.tempo}}
                            </div>
                          </div>
                          <div class="columns is-mobile" style="margin-top:-40px">
                            <div class="column is-6-desktop is-6-mobile">
                              <div class="column">
                                <div class>
                                  <b>Valor:</b>
                                  {{solicitacao.valor}}
                                </div>
                              </div>
                            </div>
                            <div class="column is-4-desktop">
                              <div class="column ">
                                <div class>
                                  <b>Tipo do serviço:</b>
                                  {{solicitacao.tipo}}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="column  is-12-desktop is-12-tablet" style="text-align:justify;margin-top:-3%">
                        <div class="column" >
                          <b>Descrição:</b>
                          {{solicitacao.descricao}}
                        </div>
                      </div>
                      <div>
                        <div
                          v-if="solicitacao.status !==2 && solicitacao.status !==3 && solicitacao.status !==4"
                          style="margin-bottom:10px"
                        > 
                          <b style="color:black;padding:0" v-if="solicitacao.status===1">
                            <article class="message is-success" v-if="solicitacao.orcamento[0]" style="text-align:center">
                              <div class="message-body">
                                Você aceitou o pedido do {{solicitacao.user_envia.user.name}}, entre em contato com ele através do  <div>número: {{solicitacao.user_envia.telefone}} ou email: {{solicitacao.user_envia.user.email}}</div>Obs: Só finalize o serviço quando ele acabar
                                <div style="margin-top:10px;margin-bottom:-10px">
                                  <div>
                                    <button
                                      class="btn-14 column is-10-desktop is-offset-1-desktop is-10-tablet is-offset-1-tablet is-full-mobile"
                                      style="border-radius:100px"
                                      @click.prevent="finalizar(solicitacao.id)"
                                    >Finalizar Serviço</button>
                                  </div>
                                </div>
                              </div>
                            </article>
                            <article class="message is-success" v-if="!solicitacao.orcamento[0]" style="text-align:center">
                              <div class="message-body">
                                Você aceitou o pedido do {{solicitacao.user_envia.user.name}}, entre em contato com ele através do número: {{solicitacao.user_envia.telefone}}, email: {{solicitacao.user_envia.user.email}}
                                <div style="margin-top:10px;margin-bottom:-10px">
                                   <router-link style="text-decoration:none"
                                      :to="`/page/profissional/solicitacoes/orcamento/${solicitacao.id}`"
                                    >
                                      <button
                                        class="btn-14 column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet is-full-mobile"
                                        style="border-radius:100px"
                                      >Mandar sua disponibilidade</button>
                                   </router-link>
                                </div>
                              </div>
                            </article>
                          </b>
                        </div>
                        <div v-if="solicitacao.status ===2">
                          <b style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                              <article class="message is-danger " style="border-radius:15px;text-align:center">
                                <div class="message-body" style="color:black;">
                                  Você recusou o pedido do {{solicitacao.user_envia.user.name}}, ele já foi avisado
                                </div>
                              </article>
                            </b>
                        </div>
                        <div v-if="solicitacao.status === 0 || solicitacao.status === 1">
                          <div class="columns" v-if="solicitacao.status === 0">
                            <div
                              class="column is-10-desktop is-offset-1 is-10-tablet is-full-mobile"
                            >
                              <div class="columns is-mobile">
                                <div
                                  class="column is-6-desktop is-offset-4-desktop is-6-tablet is-offset-4-tablet"
                                >
                                  <button
                                    class="btn-14 column is-5-desktop is-offset-8-desktop is-5-tablet is-offset-8-tablet is-10-mobile"
                                    style="border-radius:100px"
                                    @click.prevent="aceitar(solicitacao.id)"
                                  > 
                                  <ul class="breadcrumb">
                                    <li>
                                      <span class="icon is-small">
                                        <i class="material-icons">thumb_up</i>
                                      </span>
                                      <span>Aceitar</span>
                                    </li>
                                  </ul>
                                  </button>
                                </div>
                                <div class="column is-6-desktop is-6-tablet">
                                  <button
                                    style="border-radius:100px;margin-left:20px"
                                    class="btn-13 column is-5-desktop is-5-tablet is-10-mobile"
                                    @click.prevent="recusar(solicitacao.id)"
                                  > 
                                    <ul class="breadcrumb">
                                      <li>
                                        <span class="icon is-small">
                                          <i class="material-icons">thumb_down</i>
                                        </span>
                                        <span>Recusar</span>
                                      </li>
                                    </ul>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- <div v-if="solicitacao.orcamento[0]">
                            <div class v-if="solicitacao.status === 1">
                              <button
                                class="btn-15 column is-10-desktop is-offset-1-desktop is-10-tablet is-offset-1-tablet is-full-mobile"
                                @click.prevent="finalizar(solicitacao.id)"
                              >Finalizar Serviço</button>
                            </div>
                          </div> -->
                          <!-- <div v-if="!solicitacao.orcamento[0] && solicitacao.status === 1">
                            <router-link
                              :to="`/page/profissional/solicitacoes/orcamento/${solicitacao.id}`"
                            >
                              <button
                                class="btn-14 column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet is-full-mobile"
                                style="border-radius:100px"
                              >Mandar sua disponibilidade!</button>
                            </router-link>
                          </div> -->
                        </div>
                        <div v-if="solicitacao.status === 3">
                          <b style="color:black;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                            <div class="message-body" align="center" style="border-left:5px solid rgb(99, 74, 110);background:rgba(250, 240, 255, 0.692);color:black">
                              <b>Esse pedido foi finalizado com sucesso.</b>
                            </div>
                          </b>
                        </div>
                        <div v-if="solicitacao.status ===4">
                          <b style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                              <article style="text-align:center;color:black">
                                <div class="message-body" style="border-left:5px solid rgb(98, 0, 49);background:rgba(255, 215, 235, 0.24);color:black">
                                  O(A) {{solicitacao.user_envia.user.name}} avaliou você nesse serviço, olhe seu perfil.
                                </div>
                              </article>
                            </b>
                        </div>
                      </div>
                    </div><br>
                  </div>
                </div>
                <br>
                <!-- PAGINAÇÃO -->
                <div v-if="data && data.propostaRecebe.data">
                  <div class="columns is-mobile column level-item" v-if="data.propostaRecebe.data[0]">
                    <!-- VOLTAR -->
                    <div v-if="data.propostaRecebe.paginatorInfo.currentPage !== 1">
                      <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="anterior()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_left</i></a>
                    </div>
                    <div v-else>
                      <i class="material-icons" style="margin-top:5px;margin-right:5px">keyboard_arrow_left</i>
                    </div>
                    <!-- FOR PARA PERCORRER E MOSTAR AS PAGINAS -->
                    <div v-for="p of data.propostaRecebe.paginatorInfo.lastPage" :key="p.id">
                      <!-- SÓ MOSTRA OS 10 PRIMEIROS NÚMEROS PARA NÃO POLUIR A TELA -->
                      <div v-if="p <= 10">
                        <div class="" v-if="page === p">  
                          <a class="button" style="margin:5px;background:rgb(71, 71, 71);color:white"><b>{{p}}</b></a>
                        </div>
                        <div v-else>
                          <a class="button button-solicita" style="margin:5px" @click.prevent="paginaComNumero(p)">{{p}}</a>
                        </div>
                      </div>
                    </div>
                    <!-- TRES PONTOS COM ULTIMA PAGINA -->
                    <b style="margin-top:15px;margin-left:5px;margin-right:5px" v-if="data.propostaRecebe.paginatorInfo.lastPage > 11">... </b>
                    <div v-if="data.propostaRecebe.paginatorInfo.lastPage > 10">
                      <div v-if="page === data.propostaRecebe.paginatorInfo.lastPage">
                        <a class="button" style="margin:5px;background:rgb(71, 71, 71);color:white">{{data.mensagemUserEnvia.paginatorInfo.lastPage}}</a>
                      </div>
                      <div v-else>
                        <a class="button button-solicita" style="margin:5px" @click.prevent="ultimaPagina(data.mensagemUserEnvia.paginatorInfo.lastPage)">{{data.mensagemUserEnvia.paginatorInfo.lastPage}}</a>
                      </div>
                    </div>
                    <!-- PRÓXIMO -->
                    <div v-if="data.propostaRecebe.paginatorInfo.hasMorePages">
                      <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="proximo()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_right</i></a>
                    </div>
                    <div v-else>
                      <i class="material-icons" style="margin-top:5px;margin-left:5px">keyboard_arrow_right</i>
                    </div>
                  </div>
                </div>

                <div v-if="data && data.propostaRecebe.data">
                  <div
                    class="column box is-10-desktop is-10-tablet is-offset-1-tablet is-offset-1-desktop"
                    v-if="!data.propostaRecebe.data[0]"
                  >
                    <article style="padding:10px">
                      <div>
                        <div style="color:black"
                          class="title is-5"
                          align="center"
                        >Você ainda não tem nenhuma solicitação em particular!</div>
                      </div>
                    </article>
                  </div>
                </div>
                <br><br><br><br><br>
              </div>
              <!-- FIM DO V-FOR -->
            </div>
          </template>
        </ApolloQuery>
      </div>
      <div v-else>
        <div class="column box is-10-desktop is-10-tablet is-offset-1-tablet is-offset-1-desktop">
          <article>
            <div class="message-body">
              <div style="color:black"
                class="title is-5"
                align="center"
              >Cadastre-se para receber solicitações de outros usuários</div>
            </div>
          </article>
        </div>
      </div>
    </div><br><br><br><br>
  </div>
</template>
<script>
import gql from "graphql-tag";
import proForUserId from "@/graphql/queries/imagemQuery.gql";
import aceita from "@/graphql/mutations/aceita.gql";

export default {
  data() {
    return {
      me: null,
      pro: [],
      count:5,
      page:1
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
    pro: {
      query: proForUserId,
      variables() {
        if (this.me) {
          return {
            id: this.me.id
          };
        }
      },
      update(data) {
        if (data) {
          this.pro = data;
          return this.pro;
        }
      }
    }
  },
  methods: {
    aceitar(idproposta) {
      this.$swal({
        title: "Tem certeza que quer aceitar?",
        text: "O cliente ficará sabendo quando você aceitar essa proposta!",
        type: "info",
        showCancelButton: true,
        confirmButtonText: "Aceitar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "hsl(141, 71%, 48%)",
        cancelButtonColor: "hsl(348, 100%, 61%)",
        showCloseButton: true
      }).then(result => {
        if (result.value) {
          this.$apollo
            .mutate({
              mutation: aceita,
              variables: {
                id: idproposta,
                status: 1
              }
            })
            .then(() => {
              this.$swal(
                "Você aceitou!",
                "Proposta aceita, agora mande sua disponibilidade!",
                "success"
              );
              this.$router.push(
                `/page/profissional/solicitacoes/orcamento/${idproposta}`
              );
            })
            .catch(error => {
              console.error(error);
            });
        }
      });
      /**/
    },
    recusar(idproposta) {
      this.$swal({
        title: "Tem certeza que deseja recusar?",
        text: "O cliente ficará sabendo quando você recusar essa proposta!",
        type: "info",
        showCancelButton: true,
        confirmButtonText: "Recusar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "hsl(141, 71%, 48%)",
        cancelButtonColor: "hsl(348, 100%, 61%)",
        showCloseButton: true
      }).then(result => {
        if (result.value) {
          this.$apollo
            .mutate({
              mutation: aceita,
              variables: {
                id: idproposta,
                status: 2
              }
            })
            .then(() => {
              window.location.reload();
            })
            .catch(error => {
              console.error(error);
            });
        }
      });
    },
    finalizar(idproposta) {
      this.$swal({
        title: "Tem certeza que quer finalizar?",
        text: "Obs: só finalize quando o serviço acabar, pois abrirá espaço para o usuário lhe avaliar.",
        type: "info",
        showCancelButton: true,
        confirmButtonText: "Finalizar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "hsl(141, 71%, 48%)",
        cancelButtonColor: "hsl(348, 100%, 61%)",
        showCloseButton: true
      }).then(result => {
        if (result.value) {
          this.$apollo
            .mutate({
              mutation: aceita,
              variables: {
                id: idproposta,
                status: 3
              }
            })
            .then(() => {
              window.location.reload();
            })
            .catch(error => {
              console.error(error);
            });
        }
      });
    },
    paginaComNumero(id){
      this.page = id;
    },
    proximo(){
      this.page +=1;
    },
    anterior(){
      this.page-=1;
    },
    ultimaPagina(inteiro){
      this.page = inteiro;
    }
  }
};
</script>
<style>
@import "../../cssFiles/inputsAndButtons.css";
@import "../../cssFiles/alertas.css";
.img {
  border-radius: 100%;
}
.button-solicita{
  background: rgb(0, 214, 132);
  font-weight: bold;
  color:white;
}
.button-solicita:hover{
  color:white;
}
</style>