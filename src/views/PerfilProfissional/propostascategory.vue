<template>
  <div>
    <img src="../../assets/frontendimages/background5.png" data-aos="slide-down" data-aos-duration="1000" alt="" style="position:absolute;top:0;width:100%;height:auto;max-width:100%;z-index:-1">
    <!-- BREADCRUMB -->
    <nav
      class="breadcrumb column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet"
      aria-label="breadcrumbs" style="font-weight:bold;color:black">
      <ul>
        <li>
          <router-link :to="`/page/profissional`" style="color:hsl(171, 100%, 41%)">
            <span class="icon is-small">
              <i class="material-icons" aria-hidden="true">face</i>
            </span>
            <span>Perfil</span>
          </router-link>
        </li>
        <li class="is-active">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">drafts</i>
            </span>
            <span>Proposta à sua categoria</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->

    <h3
      class="title is-2 column is-6-desktop is-offset-3-desktop is-10-tablet is-offset-1-tablet is-full-mobile"
      style="text-align:center;color:black"
    >
      <b>Abaixo estão as solicitacões para sua categoria!</b>
    </h3>
    <br>
    <br>
    <!-- Inicio da consulta para mostrar as propostas para a categoria do profissional -->
    <div v-if="this.pro.imageForUserId">
      <div v-if="this.pro.imageForUserId[0]">
        <ApolloQuery
          :query="require('@/graphql/queries/propostasForCat.gql')"
          :variables="{category_id:this.pro.imageForUserId[0].category.id,count:this.count,page:this.page}"
        >
          <template slot-scope="{ result: { data, loading },isLoading }">
            <div v-if="isLoading">Loading...</div>
            <div v-else>
              <div v-if="data">
                <div v-for="prop of data.propostasForCat.data" :key="prop.id">
                  <div class="column is-10-desktop is-10-tablet is-offset-1 is-offset-0-tablet is-full-mobile">
                    <div class="card">
                      <div class="columns column">
                        <div class="column is-3-desktop is-4-tablet is-8-mobile is-offset-2-mobile" align="center">
                          <img
                            width="60%"
                            height="10%"
                            style="height:140px"
                            :src="`http://graphql.me/perfilCli/${prop.user_envia.imagem}`"
                            alt="Placeholder image"
                          >
                        <div class="column">
                          <div>Proposta de ></div>
                          <div style="color:black"><b>{{prop.user_envia.user.name}}</b></div>
                        </div>
                        
                        </div>
                        <div class="column is-8-desktop is-full-mobile">
                          <div class="columns">
                            <div class="column is-12-desktop">
                              <div class="title is-5" style="text-transform:uppercase;color:black"><b>{{prop.titulo}}</b></div>
                            </div>
                          </div>

                          <!-- STATUS -->
                          <div class="columns is-mobile" style="margin-top:-30px">
                            <div class="column is-5-desktop is-5-tablet is-6-mobile">
                              <div v-if="prop.status===0">
                                <b class="column" style="padding:5px;background:hsl(48, 100%, 67%);text-align:center;border-radius:5px;font-size:10pt;color:black">Aberto</b>
                              </div>
                              <div v-if="prop.status===1">
                                <b
                                  class="column"
                                  style="padding:5px;text-align:center;border-radius:5px;font-size:10pt;background:hsl(141, 71%, 48%);color:white"
                                >Pedido aceito :)</b>
                              </div>
                              <div v-if="prop.status===2">
                                <b
                                  class="column"
                                  style="padding:5px;text-align:center;border-radius:5px;font-size:10pt;background:hsl(141, 71%, 48%);color:white"
                                >Pedido fechado e em andamento</b>
                              </div>
                              <!-- Processo para verificar se foi o profissional logado que foi avaliado ou se foi outro -->
                              <div v-if="prop.status ===4 || prop.status === 3">
                                <ApolloQuery
                                  :query="require('@/graphql/queries/lanceProposta.gql')"
                                  :variables="{proposta:prop.id,user:pro.imageForUserId[0].id}"
                                >
                                  <template slot-scope="{ result: { data, loading },isLoading }">
                                    <div v-if="isLoading">Loading...</div>
                                    <div v-else>
                                      <div v-if="data">
                                        <div v-if="prop.status === 4">
                                          <div v-if="(prop.user_aceito.id === pro.imageForUserId[0].id)">
                                            <div class="column" style="padding:5px;text-align:center;border-radius:5px;font-size:10pt;background:rgb(98, 0, 49);color:white;margin-right:5px">
                                              <b>Você foi avaliado</b>
                                            </div>
                                          </div>
                                          <div v-else>
                                            <div class="column" style="padding:5px;text-align:center;border-radius:5px;font-size:10pt;background:rgb(98, 0, 49);color:white;margin-right:5px">
                                            <b>Finalizado com avaliação</b>
                                            </div>
                                          </div>
                                        </div>
                                        <div v-if="prop.status === 3">
                                          <div v-if="(prop.user_aceito.id === pro.imageForUserId[0].id)">
                                            <div class="column" style="padding:5px;text-align:center;border-radius:5px;font-size:10pt;background:rgb(99, 74, 110);color:white;margin-right:5px">
                                              <b>Você finalizou esse serviço</b>
                                            </div>
                                          </div>
                                          <div v-else>
                                            <div class="column" style="padding:5px;text-align:center;border-radius:5px;font-size:10pt;background:rgb(99, 74, 110);color:white;margin-right:5px">
                                              <b>Finalizado sem avaliação</b>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </template>
                                </ApolloQuery>
                              </div>
                              <!-- Fim da prop.status === 4 -->
                            </div>
                            <div class="column">
                              {{prop.date}}
                            </div>
                          </div>
                          <div class="columns is-mobile">
                            <div class="column is-6-desktop">
                              <div style="color:black">
                                <b>Local do serviço:</b>
                                {{prop.local}}
                              </div>
                            </div>
                            <div class="column" style="color:black">
                              <b>Pra quando?</b>
                              {{prop.tempo}}
                            </div>
                          </div>
                          <div class="columns is-mobile">
                            <div class="column is-6-desktop is-5-tablet">
                              <div style="color:black">
                                <b>Valor:</b>
                                {{prop.valor}}
                              </div>
                            </div>
                            <div class="column">
                              <div style="color:black">
                                <b>Tipo do serviço:</b>
                                {{prop.tipo}}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="column is-10-desktop is-12-tablet is-offset-1-desktop"
                        style="margin-top:-30px;border-top:1px solid #ccc"
                      ><div class style="text-align:justify;color:black">
                        <b>Descrição:</b>
                          {{prop.descricao}}
                        </div>
                      </div>
                      <br>
                      <!-- Inicio da consulta para verificar se o profissional já lançou a proposta ou não -->
                        <ApolloQuery
                          :query="require('@/graphql/queries/lanceProposta.gql')"
                          :variables="{proposta:prop.id,user:pro.imageForUserId[0].id}"
                        >
                          <template slot-scope="{ result: { data, loading },isLoading }">
                            <div v-if="isLoading">Loading...</div>
                            <div v-else>
                              <div v-if="data">
                                <div v-if="prop.status === 0">
                                  <div v-if="data.lanceProposta[0] && data.lanceProposta[0].status !==3" style="margin-top:-20px">
                                    <article  style="border-radius:15px;text-align:center">
                                      <div  style="color:black;">
                                        <router-link :to="`/page/profissional/propostascategory/verlance/${prop.id}`" style="text-decoration:none">
                                          <button
                                            class="btn-15 column is-10-desktop is-offset-1-desktop is-10-tablet is-offset-1-tablet is-full-mobile"
                                          >Ver sua proposta</button>
                                        </router-link>
                                      </div>
                                    </article><div class="column"></div>
                                  </div>
                                  <div v-if="data.lanceProposta[0] && data.lanceProposta[0].status ===3">
                                    <b style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                                      <article class="message is-danger " style="border-radius:15px;text-align:center">
                                        <div class="message-body" style="color:black;">
                                          O(A) {{prop.user_envia.user.name}} recusou sua proposta, <router-link :to="`/page/profissional/propostascategory/verlance/${prop.id}`" style="color:blue">ver detalhes</router-link>
                                        </div>
                                      </article>
                                    </b>
                                  </div>
                                  <div v-if="!data.lanceProposta[0]" style="margin-top:-20px">
                                    <article style="border-radius:15px;text-align:center">
                                      <div style="color:black;">
                                        <router-link :to="`/page/profissional/propostascategory/lancar/${prop.id}`" style="text-decoration:none">
                                          <button
                                            class="btn-14 column is-10-desktop is-offset-1-desktop is-10-tablet is-offset-1-tablet is-full-mobile"
                                          >Lancar Proposta</button>
                                        </router-link>
                                      </div>
                                    </article><div class="column"></div>
                                  </div>
                                </div>
                                <div v-if="prop.status===2 && data.lanceProposta[0]">
                                  <div v-if="prop.user_aceito.id === pro.imageForUserId[0].id && data.lanceProposta[0].status !==3">
                                    <b style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                                      <article class="message is-success " style="border-radius:15px;text-align:center">
                                        <div class="message-body" style="color:black;">
                                          Seu pedido para essa proposta foi atendida, <router-link :to="`/page/profissional/propostascategory/verlance/${prop.id}`" style="color:blue">ver detalhes</router-link>
                                        </div>
                                      </article>
                                    </b>
                                  </div>
                                  <!-- Se o cliente aceitou o pedido de outra pessoa (ele lançando a disponibilidade!)-->
                                  <div v-if="prop.user_aceito.id !== pro.imageForUserId[0].id && data.lanceProposta[0].status !==3">
                                    <b style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                                      <article class="message" style="border-radius:15px;text-align:center">
                                        <div class="message-body" style="color:black;">
                                          O usuário dessa proposta aceitou o pedido de outra pessoa!
                                        </div>
                                      </article>
                                    </b>
                                  </div>
                                  <!-- Fim da <div v-if="prop.user_aceito.id !== pro.imageForUserId[0].id && data.lanceProposta[0].status !==3"> -->
                                  <div v-if="data.lanceProposta[0].status === 3">
                                    <b style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                                      <article class="message is-danger " style="border-radius:15px;text-align:center">
                                        <div class="message-body" style="color:black;">
                                          O(A) {{prop.user_envia.user.name}} recusou sua proposta, <router-link :to="`/page/profissional/propostascategory/verlance/${prop.id}`" style="color:blue">ver detalhes</router-link>
                                        </div>
                                      </article>
                                    </b>
                                  </div>
                                </div>
                                <!-- Se o cliente aceitou o pedido de outra pessoa ele não lançando a disponibilidade! -->
                                <div v-if="prop.status===2 && !data.lanceProposta[0]">
                                  <div v-if="prop.user_aceito.id !== pro.imageForUserId[0].id">
                                    <b style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                                      <article class="message" style="border-radius:15px;text-align:center">
                                        <div class="message-body" style="color:black;">
                                          O usuário dessa proposta aceitou o pedido de outra pessoa!
                                        </div>
                                      </article>
                                    </b>
                                  </div>
                                </div>
                                <!-- Fim da <div v-if="prop.status===2 && !data.lanceProposta[0]"> -->
                                <div v-if="prop.status === 4">
                                  <div v-if="(prop.user_aceito.id === pro.imageForUserId[0].id)">
                                    <b style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                                      <article style="text-align:center;color:black">
                                        <div class="message-body" style="border-left:5px solid rgb(98, 0, 49);background:rgba(255, 215, 235, 0.24);color:black">
                                          Você foi avaliado pelo(a) {{prop.user_envia.user.name}} para nesse serviço, veja seu perfil!
                                        </div>
                                      </article>
                                    </b>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </template>
                        </ApolloQuery>
                      <!-- Fim da consulta para verificar se o profissional já lançou a proposta ou não-->
                      <div v-if="prop.status === 3">
                        <div v-if="prop.user_aceito.id === pro.imageForUserId[0].id">
                          <b style="color:black;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                            <div class="message-body" align="center" style="border-left:5px solid rgb(99, 74, 110);background:rgba(250, 240, 255, 0.692);color:black">
                              <b>Esse pedido foi finalizado com sucesso por você, <router-link :to="`/page/profissional/propostascategory/verlance/${prop.id}`" style="color:blue"><u>ver detalhes</u></router-link></b>
                            </div>
                          </b>
                        </div>
                      </div>
                    </div>
                    <!-- FIM DO CARD -->
                  </div>
                  <div> 
                  </div>
                </div>
                <br>
                
                <!-- PAGINAÇÃO  -->
                <div v-if="data && data.propostasForCat.data">
                  <div class="columns is-mobile column level-item" v-if="data.propostasForCat.data[0]">
                    <!-- VOLTAR -->
                    <div v-if="data.propostasForCat.paginatorInfo.currentPage !== 1">
                      <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="anterior()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_left</i></a>
                    </div>
                    <div v-else>
                      <i class="material-icons" style="margin-top:5px;margin-right:5px">keyboard_arrow_left</i>
                    </div>
                    <!-- FOR PARA PERCORRER E MOSTAR AS PAGINAS -->
                    <div v-for="p of data.propostasForCat.paginatorInfo.lastPage" :key="p.id">
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
                    <b style="margin-top:15px;margin-left:5px;margin-right:5px" v-if="data.propostasForCat.paginatorInfo.lastPage > 10">... </b>
                    <div v-if="data.propostasForCat.paginatorInfo.lastPage > 10">
                      <div v-if="page === data.propostasForCat.paginatorInfo.lastPage">
                        <a class="button" style="margin:5px;background:rgb(71, 71, 71);color:white">{{data.propostasForCat.paginatorInfo.lastPage}}</a>
                      </div>
                      <div v-else>
                        <a class="button button-solicita" style="margin:5px" @click.prevent="ultimaPagina(data.propostasForCat.paginatorInfo.lastPage)">{{data.propostasForCat.paginatorInfo.lastPage}}</a>
                      </div>
                    </div>
                    <!-- PRÓXIMO -->
                    <div v-if="data.propostasForCat.paginatorInfo.hasMorePages">
                      <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="proximo()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_right</i></a>
                    </div>
                    <div v-else>
                      <i class="material-icons" style="margin-top:5px;margin-left:5px">keyboard_arrow_right</i>
                    </div>
                  </div>
                </div>

              </div>
              <div v-if="data && data.propostasForCat.data">
                <div v-if="!data.propostasForCat.data[0]" class="column box is-6-desktop is-10-mobile is-offset-1-mobile is-6-tablet is-offset-3-tablet is-offset-3-desktop"
                style="border:1px solid black">
                  <article>
                    <div>
                      <div style="color:black;text-transform:uppercase"
                        align="center"
                      ><b>Ainda não tem nenhuma requisição a sua categoria!</b></div>
                    </div>
                  </article>
                </div>
              </div>
              <br><br><br><br><br>
              <img src="../../assets/frontendimages/background3.png" alt="" data-aos="slide-left" data-aos-duration="1000" style="width:auto;height:auto;max-width:110%;z-index:-1">
            </div>
          </template>
        </ApolloQuery>
      </div>
      <div v-else>
          <div class="column box is-6-desktop is-10-mobile is-offset-1-mobile is-6-tablet is-offset-3-tablet is-offset-3-desktop"
          style="border:1px solid black">
            <article>
              <div>
                <div style="color:black;text-transform:uppercase"
                  align="center"
                ><b>Cadastre-se ver as propostas a sua categoria</b></div>
              </div>
            </article>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
import proForUserId from "@/graphql/queries/imagemQuery.gql";


export default {
  data() {
    return {
      me: null,
      pro: [],
      paginaAtual:'',
      count:10,
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
  methods:{
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
@import "../../cssFiles/sidenav.css";

.img {
  border-radius: 100%;
}

.testes {
  width: 100%;
  height: 25em;
}

.font{
  font-family: 'Francois One', sans-serif;
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

