<template>
  <div>
    <!-- BREADCRUMB -->
    <!-- <img src="../../assets/frontendimages/background5.png" data-aos="slide-down" data-aos-duration="1000" alt="" style="position:absolute;top:0;width:auto;height:auto;max-width:120%;z-index:-1"> -->
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
        <li class="is-active">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">description</i>
            </span>
            <span>Pedidos para a(s) categoria(s)</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->
    <h3
      class="column is-8-desktop is-10-tablet is-offset-2-desktop is-offset-1-tablet is-full-mobile"
      style="text-align:center;color:black;font-size:25pt;text-transform:uppercase"
    ><b>Abaixo estão suas propostas para as categorias de profissionais.</b></h3><br><br>
    <br>
    <div v-if="this.cli.clientForUserId">
      <div v-if="this.cli.clientForUserId[0]">
        <ApolloQuery
          :query="require('@/graphql/queries/propostaEnviaCat.gql')"
          :variables="{user_envia:this.cli.clientForUserId[0].id,count:this.count,page:this.page}"
        >
          <template slot-scope="{ result: { data, loading },isLoading }">
            <div v-if="isLoading">Loading...</div>
            <div v-else>
              <div v-if="data">
                <div v-for="prop of data.propostaEnviaCat.data" :key="prop.id">
                  <div
                    class="column is-10-desktop is-offset-1-desktop is-12-tablet is-full-mobile"
                  >
                    <div class="card" style="border:1px solid white" data-aos="zoom-out" data-aos-offset="-200" data-aos-duration="1000">
                      <div class="columns column">
                        <div class="column is-3-desktop is-4-tablet is-6-mobile is-offset-3-mobile">
                          <div class="column">
                            <div class="level-item">
                              <img
                                width="100%"
                                :src="`http://graphql.me/categoryImage/${prop.category.image}`"
                                alt="Placeholder image"
                              >
                            </div>
                            <div
                              class
                              align="center"
                              style="margin-top:10px"
                            >Proposta para a categoria:</div>
                            <div class="title is-5 level-item">
                              <div class="level-item">{{prop.category.name}}</div>
                            </div>
                          </div>
                        </div>
                        <div class="column is-9-desktop is-full-mobile">
                          <div class="columns" style="margin-bottom:0px;margin-top:1%">
                            <div class="column is-9-desktop is-9-tablet is-12-mobile" style="margin-bottom:10px">
                              <div style="color:black;text-transform:uppercase;font-size:16pt;text-align:justify"><b>{{prop.titulo}}</b></div>
                            </div>
                            <div class="column is-4-desktop" v-if="prop.status === 0 && prop.lances[0]">
                              <ApolloQuery
                              :query="require('@/graphql/queries/lancesCountProposta.gql')"
                              :variables="{prop_cat:prop.id}"
                              >
                                <template
                                  slot-scope="{ result: { data, loading },isLoading }"
                                >
                                  <div v-if="isLoading">Loading...</div>
                                  <div v-else>
                                    <div v-if="data">
                                      <div
                                        class="column is-9-desktop is-full-mobile is-success"
                                        style="background:hsl(141, 71%, 48%);padding:5px;text-align:center;color:white;font-size:10pt;border-radius:5px"
                                        v-if="data.lancesCountProposta === 1"
                                      >
                                        <b>{{data.lancesCountProposta}} proposta</b>
                                      </div>
                                      <div
                                        class="column is-9-desktop is-full-mobile is-success"
                                        style="background:hsl(141, 71%, 48%);padding:5px;text-align:center;color:white;font-size:10pt;border-radius:5px"
                                        v-if="data.lancesCountProposta > 1"
                                      >
                                        <b>{{data.lancesCountProposta}} propostas</b>
                                      </div>
                                    </div>
                                  </div>
                                </template>
                              </ApolloQuery>
                            </div>
                            <div class="column overlay3" v-if="prop.status === 0 && !prop.lances[0]">
                              <button style="border-radius:0px;text-align:center;margin-top:-20px" class="btnhover column is-4-desktop is-offset-8-desktop is-12-tablet is-full-mobile" @click.prevent="editar(prop.id)"><i class="material-icons" style="margin-right:5px;font-size:12pt;color:blue">edit</i><span></span></button>
                            </div>
                          </div>
                          <div class=" overlay4" v-if="prop.status === 0 && !prop.lances[0]" style="margin-top:-20px;margin-bottom:30px">
                            <button style="border-radius:0px;text-align:center" class="btnhover column is-10-desktop is-full-mobile" @click.prevent="editar(prop.id)"><i class="material-icons" style="margin-right:5px;font-size:12pt">edit</i><span>Editar</span></button>
                          </div>
                          <!-- STATUS!!!!!!!!!!! -->
                          <div class="" style="margin-top:-20px">
                            <div
                              v-if="prop.status===0"
                              class="tag is-warning"
                              style="font-size:10pt;color:black"
                            >
                              <b>Aberto</b>
                            </div>
                            <div
                              v-if="prop.status===2"
                              class="tag"
                              style="font-size:10pt;background:hsl(141, 71%, 48%);color:white"
                            >
                              <b>Pedido aceito e em andamento</b>
                            </div>
                            <div
                              v-if="prop.status===3"
                              class="tag"
                              style="font-size:10pt;background:rgb(99, 74, 110);color:white"
                            >
                              <b>Pedido Finalizado</b>
                            </div>
                            <div
                              v-if="prop.status===4"
                              class="tag"
                              style="font-size:10pt;background:rgb(98, 0, 49);color:white"
                            >
                              <b>Profissional avaliado</b>
                            </div>
                            {{prop.date}}
                          </div>
                          <br>
                          <!-- SUAS INFORMAÇÕES -->
                          <div class="columns is-mobile">
                            <div class="column is-6-desktop">
                              <div class>
                                <b>Local do serviço:</b>
                                {{prop.local}}
                              </div>
                            </div>
                            <div class="column">
                              <div class>
                                <b>Pra quando?</b>
                                {{prop.tempo}}
                              </div>
                            </div>
                          </div><br>
                          <div class="columns is-mobile" style="margin-top:-40px">
                              <div class="column">
                                <b>Valor:</b>
                                {{prop.valor}}
                              </div>
                              <div class="column">
                                <b>Tipo do serviço:</b>
                                {{prop.tipo}}
                              </div>
                            </div>
                          </div>
                      </div><br>
                      <div class="column is-10-desktop is-offset-1-desktop is-12-tablet" style="margin-top:-60px">
                        <div class style="text-align:justify">
                          <b>Descrição do serviço:</b>
                          {{prop.descricao}}
                        </div>
                      </div><br> 
                      <div style="margin-top:-20px">
                        <div v-if="prop.lances[0]">
                          <div v-if="prop.status === 0">
                            <b style="color:black">
                              <article class="message is-success" style="text-align:center">
                                <div class="message-body">
                                  Há respostas para essa requisição de serviço, por favor analise <router-link :to="`/page/cliente/propostacategory/analisar/${prop.id}`" style="color:blue">aqui</router-link>
                                </div>
                              </article>
                            </b>
                          </div>
                          <div v-if="prop.status === 2">
                            <b style="color:black">
                              <article class="message is-success" style="text-align:center">
                                <div class="message-body">
                                  Voçê fechou negócio com {{prop.user_aceito.user.name}} entre em contato com ele(a) pelo telefone {{prop.user_aceito.telefone}}, email {{prop.user_aceito.user.email}}, ou encontre-o(a) pessoalmente pelo endereço {{prop.user_aceito.logradouro}} - {{prop.user_aceito.cidade}} - {{prop.user_aceito.estado}} <router-link :to="`/page/cliente/propostacategory/analisar/${prop.id}`" style="color:blue">ver detalhes</router-link>
                                </div>
                              </article>
                            </b>
                          </div>
                          <div v-if="prop.status === 3">
                            <b style="color:black">
                              <article style="text-align:center;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                                <div class="message-body " style="border-left:5px solid rgb(99, 74, 110);background:rgba(250, 240, 255, 0.692);color:black">
                                  O(a) {{prop.user_aceito.user.name}} finalizou o serviço, clique <router-link :to="`/page/cliente/propostacategory/avaliar/${prop.id}`" style="color:blue"><u>aqui</u></router-link> avalie e diga como ele(a) foi!
                                </div>
                              </article>
                            </b>
                          </div>
                          <div v-if="prop.status === 4">
                              <b style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                                <article style="text-align:center;color:black">
                                  <div class="message-body " style="border-left:5px solid rgb(98, 0, 49);background:rgba(255, 215, 235, 0.24);color:black">
                                      O(A) {{prop.user_aceito.user.name}} foi avaliado, <router-link :to="`/page/cliente/propostacategory/analisar/${prop.id}`" style="color:blue"><u>ver detalhes</u></router-link>.                                
                                  </div>
                                </article>
                              </b>
                          </div>
                        </div>
                        <div v-else>
                          <b style="color:black;padding:0" class="column is-12-desktop is-full-mobile">
                            <article class="message is-warning " style="border-radius:15px;text-align:center">
                              <div class="message-body ">
                                Esperando profissionais reagirem a esse serviço!
                              </div>
                            </article>
                          </b>
                        </div>
                      </div>                 
                      
                    </div>
                    <br>
                    <!-- FIM DO CARD -->
                  </div>
                </div>
                
                <!-- MODAL CHANGE EDITION -->
                <div id="modal" class="modal-a">
                  <div :class="`modal is-active`">
                    <div class="modal-background" @click="fechar()"></div>
                    <div class="modal-card">
                      <header class="modal-card-head">
                        <div class="modal-card-title">
                          <b>Editar proposta?</b>
                        </div>
                        <a class="delete" aria-label="close" @click="fechar()"></a>
                      </header>
                      <section style="background:white" class="modal-card-body">
                        <!-- FORMULÁRIO PARA MUDAR -->
                        <form action method="POST">
                          <div class="column is-12-desktop is-12-tablet is-full-mobile">
                            <div class="columns is-mobile column">
                              <label for="valor">
                                <b>Diga o titulo do serviço</b>
                              </label>
                              <label for="titulo" v-if="!titulo" style="margin-left:10px;color:red">
                                <b>*</b>
                              </label>
                            </div>
                            <input
                              style="margin-top:-20px"
                              type="text"
                              class="input inp"
                              v-model="titulo"
                              placeholder="Ex:. Floriano"
                              name="valor"
                              id="valor"
                            >
                          </div>
                          <div class="columns">
                            <div
                              class="control column is-6-desktop is-6-tablet is-full-mobile"
                            >
                              <li class="column">
                                <div class="columns is-mobile column">
                                  <label for="valor">
                                    <b>Quanto você pretende pagar?</b>
                                  </label>
                                  <label for="valor" v-if="!valor" style="margin-left:10px;color:red">
                                    <b>*</b>
                                  </label>
                                </div>
                                <select
                                  style="margin-top:-20px"
                                  class="control column is-12-desktop is-12-mobile inp"
                                  name="tipo"
                                  id="tipo"
                                  v-model="valor"
                                >
                                  <option value="Entre 10 a 40 reais">Entre 10 a 40 reais</option>
                                  <option value="Entre 40 a 80 reais">Entre 40 a 80 reais</option>
                                  <option value="Entre 80 a 120 reais">Entre 80 a 120 reais</option>
                                  <option value="Entre 120 a 220 reais">Entre 120 a 220 reais</option>
                                  <option value="Entre 220 a 520 reais">Entre 220 a 520 reais</option>
                                  <option value="Entre 520 a 1000 reais">Entre 520 a 1000 reais</option>
                                  <option value="Entre 1000 a 2000 reais">Entre 1000 a 2000 reais</option>
                                  <option value="À combinar">À combinar</option>
                                </select>
                              </li>
                            </div>
                            <div class="column is-6-desktop is-6-tablet is-12-mobile">
                              <li class="column">
                                <div class="columns is-mobile column">
                                  <label for="tipo">
                                    <b>Como vai ser o atendimento?</b>
                                  </label>
                                  <label for="tipo" v-if="!tipo" style="margin-left:10px;color:red">
                                    <b>*</b>
                                  </label>
                                </div>
                                <select
                                  style="margin-top:-20px"
                                  class="control column is-12-desktop is-12-mobile inp"
                                  name="tipo"
                                  id="tipo"
                                  v-model="tipo"
                                >
                                  <option value="Presencial">Presencial</option>
                                  <option value="Remoto">Remoto</option>
                                </select>
                              </li>
                            </div>
                          </div>
                          <div class="columns" style="margin-top:-30px">
                            <div class="control column is-6-desktop is-6-tablet is-full-mobile">
                              <li class="column">
                                <div class="columns is-mobile column">
                                  <label for="valor">
                                    <b>Pra quando é o serviço?</b>
                                  </label>
                                  <label for="valor" v-if="!tempo" style="margin-left:10px;color:red">
                                    <b>*</b>
                                  </label>
                                </div>
                                <select
                                  style="margin-top:-20px"
                                  class="control column is-12-desktop inp"
                                  name="tempo"
                                  id="tempo"
                                  v-model="tempo"
                                >
                                  <option value="Hoje">Hoje</option>
                                  <option value="Nas próximas semanas">Nas próximas semanas</option>
                                  <option value="Daqui a 1 mês">Daqui a 1 mês</option>
                                  <option value="Daqui a 3 meses">Daqui a 3 meses</option>
                                  <option value="Daqui a 6 meses">Daqui a 6 meses</option>
                                  <option value="Daqui a 12 meses">Daqui a 12 meses</option>
                                  <option value="Não tenho previsão">Não tenho previsão</option>
                                </select>
                              </li>
                            </div>
                            <div class="column is-6-desktop is-6-tablet is-full-mobile">
                              <div class="column">
                                <div class="columns is-mobile column">
                                  <label for="local">
                                    <b>Diga o local do serviço</b>
                                  </label>
                                  <label for="local" v-if="!local" style="margin-left:10px;color:red">
                                    <b>*</b>
                                  </label>
                                </div>
                                <input
                                  style="margin-top:-20px"
                                  type="text"
                                  class="input inp"
                                  v-model="local"
                                  placeholder="Ex:. Floriano"
                                  name="local"
                                  id="local"
                                >
                              </div>
                            </div>
                          </div>
                          <div
                            class="column is-12-desktop is-12-tablet is-full-mobile"
                            style="margin-top:-20px"
                          >
                            <div class="columns is-mobile column">
                              <label for="descricao">
                                <b>Descrição</b>
                              </label>
                              <label for="descricao" v-if="!descricao" style="margin-left:10px;color:red">
                                <b>*</b>
                              </label>
                            </div>
                            <textarea
                              style="margin-top:-20px"
                              name="descricao"
                              id="descricao"
                              class="textarea inp"
                              v-model="descricao"
                              placeholder="Digite suas especialidades, formações ou metas, sua idade etc"
                              cols="20"
                              rows="5"
                            ></textarea>
                          </div>
                          <div class="control column">
                            <button
                              @click.prevent="editProposta()"
                              class="column is-10-desktop is-offset-1-desktop is-12-tablet is-full-mobile btn2 is-primary"
                            >Editar Proposta</button>
                          </div>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>

                <!-- PAGINAÇÃO -->
                <div v-if="data && data.propostaEnviaCat.data">
                    <div class="columns is-mobile column level-item" v-if="data.propostaEnviaCat.data[0]">
                      <!-- VOLTAR -->
                      <div v-if="data.propostaEnviaCat.paginatorInfo.currentPage !== 1">
                        <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="anterior()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_left</i></a>
                      </div>
                      <div v-else>
                        <i class="material-icons" style="margin-top:5px;margin-right:5px">keyboard_arrow_left</i>
                      </div>
                      <!-- FOR PARA PERCORRER E MOSTAR AS PAGINAS -->
                      <div v-for="p of data.propostaEnviaCat.paginatorInfo.lastPage" :key="p.id">
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
                      <b style="margin-top:15px;margin-left:5px;margin-right:5px" v-if="data.propostaEnviaCat.paginatorInfo.lastPage > 11">... </b>
                      <div v-if="data.propostaEnviaCat.paginatorInfo.lastPage > 10">
                        <div v-if="page === data.propostaEnviaCat.paginatorInfo.lastPage">
                          <a class="button" style="margin:5px;background:rgb(71, 71, 71);color:white">{{data.propostaEnviaCat.paginatorInfo.lastPage}}</a>
                        </div>
                        <div v-else>
                          <a class="button button-solicita" style="margin:5px" @click.prevent="ultimaPagina(data.propostaEnviaCat.paginatorInfo.lastPage)">{{data.propostaEnviaCat.paginatorInfo.lastPage}}</a>
                        </div>
                      </div>
                      <!-- PRÓXIMO -->
                      <div v-if="data.propostaEnviaCat.paginatorInfo.hasMorePages">
                        <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="proximo()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_right</i></a>
                      </div>
                      <div v-else>
                        <i class="material-icons" style="margin-top:5px;margin-left:5px">keyboard_arrow_right</i>
                      </div>
                    </div>
                    <br><br><br><br>
                </div>
                
              </div>
              <div v-if="data && data.propostaEnviaCat.data">
                  <div class="column is-10-desktop is-10-tablet is-offset-1-tablet is-offset-1-desktop" v-if="!data.propostaEnviaCat.data[0]">
                    <article class="message">
                      <div class="message-body">
                        <div
                          class="title is-5"
                          align="center"
                        >Você ainda não requisitou um serviço para a(s) categoria(s) de profissionais!</div>
                      </div>
                    </article>
                  </div>
              </div>
              <!-- FIM DO V-FOR -->
            </div>
          </template>
        </ApolloQuery>
      </div>
      <div v-else>
        <div class="column is-8-desktop is-offset-2-desktop column is-8-tablet is-offset-2-tablet is-10-mobile is-offset-1-mobile card" style="text-align:center;text-transform:uppercase;font-weight:bold;color:black">
          Você ainda não se cadastrou completamente, para ver detalhes.
        </div>
      </div>
    </div>
    <div style="display:none">{{idproposta}}</div>
  </div>
</template>
<script>
import gql from "graphql-tag";
import cliForUserId from "@/graphql/queries/clientForUserId.gql";
import propostaForId from "@/graphql/queries/propostaCatForId.gql"
import editPropostaCategory from "@/graphql/mutations/editPropostaCategory.gql"

export default {
  data() {
    return {
      me: null,
      cli: [],
      count:4,
      page:1,
      idproposta:0,
      titulo:"",
      valor:"",
      local:"",
      tempo:"",
      descricao:"",
      tipo:""
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
    cli: {
      query: cliForUserId,
      variables() {
        if (this.me) {
          return {
            user_id: this.me.id
          };
        }
      },
      update(data) {
        this.cli = data;
        return this.cli;
      }
    },
    
    proposta:{
      query: propostaForId,
      variables(){
        return{
          id: this.idproposta
        }
      },
      update(data){
        if (data && data.propostaCategory) {
          this.titulo = data.propostaCategory.titulo;
          this.valor = data.propostaCategory.valor;
          this.tempo = data.propostaCategory.tempo;
          this.tipo = data.propostaCategory.tipo;
          this.local = data.propostaCategory.local;
          this.descricao = data.propostaCategory.descricao;
          return data;
        }
      }
    }
  },
  methods:{
    // PAGINA SEM PESQUISA
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
    },
    editar(int){
      this.idproposta = int;
      document.getElementById("modal").style.opacity = 1;
      document.getElementById("modal").style.visibility = "visible";
      
    },
    fechar(){
      this.idproposta = 0;
      this.titulo = "";
      this.valor = "";
      this.local = "";
      this.tempo = "";
      this.descricao = "";
      this.tipo = "";
      document.getElementById("modal").style.opacity = 0;
      document.getElementById("modal").style.transition = "0.5s";
      document.getElementById("modal").style.visibility = "hidden";
    },
    editProposta(){
      if (!this.titulo || !this.valor || !this.local || !this.descricao || !this.tipo || !this.tempo) {
        this.$swal({type:"warning",title:"Preencha todos os campos corretamente!"});
      }else{
        this.$apollo
          .mutate({
            mutation: editPropostaCategory,
            variables: {
              id: this.idproposta,
              titulo: this.titulo,
              valor: this.valor,
              local: this.local,
              descricao: this.descricao,
              tipo: this.tipo,
              tempo:this.tempo
            }
          })
          .then(() => {
            this.titulo = "";
            this.valor = "";
            this.local = "";
            this.tempo = "";
            this.descricao = "";
            this.tipo = "";
            window.location.reload();
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
};
</script>
<style>
@import "../../cssFiles/inputsAndButtons.css";
@import "../../cssFiles/alertas.css";
@import "../../cssFiles/input.css";

.img {
  border-radius: 100%;
}

.modal-a {
  opacity: 0;
  visibility: hidden;
  transition: 0.8s;
}

.button-solicita{
  background: rgb(0, 214, 132);
  font-weight: bold;
  color:white;
}
.button-solicita:hover{
  color:white;
}
.btnhover{
  border:1px solid rgb(209, 208, 208);
}
.btnhover:hover{
  background: rgb(247, 255, 175);
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

