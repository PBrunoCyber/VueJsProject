<template>
  <div class="pedidos">
    <img src="../../assets/frontendimages/background5.png" data-aos="slide-down" data-aos-duration="1000" alt="" style="position:absolute;top:0;width:auto;height:auto;max-width:120%;z-index:-1">
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
        <li class="is-active">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">description</i>
            </span>
            <span>Pedidos</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->
    <h3 class="column is-8-desktop is-10-tablet is-offset-2-desktop is-offset-1-tablet is-full-mobile" style="text-align:center;color:black;font-size:25pt;text-transform:uppercase" align="center"><b>Abaixo estão seus pedidos para profissionais específicos.</b></h3>
    <br><br>
    <div v-if="this.cli.clientForUserId">
      <div v-if="this.cli.clientForUserId[0]">
        <ApolloQuery
          :query="require('@/graphql/queries/pedidos.gql')"
          :variables="{user_envia_id:this.cli.clientForUserId[0].id,count:this.count,page:this.page}"
        >
          <template slot-scope="{ result: { data, loading },isLoading }">
            <div v-if="isLoading">Loading...</div>
            <div v-else>
              <div v-if="data">
                <div v-for="pedido of data.propostaEnvia.data" :key="pedido.id">
                  <div class="column is-10-desktop is-offset-1-desktop is-12-tablet is-full-mobile">
                    <div class="card boxer">
                      <div class="columns">
                        <div class="column is-3-desktop is-3-tablet is-6-mobile is-offset-3-mobile">
                          <div class="column">
                            <router-link
                              :to="`/page/cliente/categories/profissional/${pedido.user_recebe.id}`"
                            >
                              <div class="level-item">
                                <img
                                  width="70%"
                                  height="10%"
                                  :src="`http://graphql.me/imagem/${pedido.user_recebe.imagem}`"
                                  alt="Placeholder image"
                                >
                              </div>
                            </router-link>
                            <div class="column" align="center">Proposta para:</div>
                            <div class="level-item" style="margin-top:-15px">
                               <router-link
                                :to="`/page/cliente/categories/profissional/${pedido.user_recebe.id}`"
                              > <div class="level-item" style="color:black"><b>{{pedido.user_recebe.user.name}}</b></div>
                              </router-link>
                            </div>
                          </div>
                        </div>
                        <div class="column is-9-desktop is-full-mobile">
                          <div class="columns column">
                            <div class="column is-9-desktop is-9-tablet">
                              <div style="color:black;text-transform:uppercase;font-size:16pt"><b>{{pedido.titulo}}</b></div>
                            </div>
                            <div class="column is-3-desktop is-3-tablet" v-if="pedido.status === 0">
                              <button style="border-radius:0px;text-align:center" class="btnhover column is-10-desktop is-12-tablet is-full-mobile" @click.prevent="editar(pedido.id)"><i class="material-icons" style="margin-right:5px;font-size:12pt">edit</i><span>Editar</span></button>
                            </div>
                          </div>
                          <!-- STATUS -->
                          <div class="column" style="margin-top:-45px">
                            <div
                              v-if="pedido.status===0"
                              class="tag is-warning"
                              style="font-size:10pt;color:black"
                            >
                              <b>Esperando...</b>
                            </div>
                            <div
                              v-if="pedido.status===1"
                              class="tag"
                              style="font-size:10pt;background:hsl(141, 71%, 48%);color:white"
                            >
                              <b>Pedido Aceito :)</b>
                            </div>
                            <div
                              v-if="pedido.status===2"
                              class="tag"
                              style="font-size:10pt;background:hsl(348, 100%, 61%);color:white"
                            >
                              <b>Pedido Recusado!</b>
                            </div>
                            <div
                              v-if="pedido.status===3"
                              class="tag"
                              style="font-size:10pt;background:rgb(99, 74, 110);color:white"
                            >
                              <b>Pedido Finalizado!</b>
                            </div>
                            <div
                              v-if="pedido.status===4"
                              class="tag"
                              style="font-size:10pt;background:rgb(98, 0, 49);color:white"
                            >
                              <b>Usuário Avaliado</b>
                            </div>
                            {{pedido.date}}
                          </div>
                          <br>
                          <div class="columns is-mobile column" style="margin-top:-15px;color:black">
                            <div class="column is-6-desktop">
                              <b>Local do serviço:</b>
                              {{pedido.local}}
                            </div>
                            <div class="column">
                              <b>Pra quando?</b>
                              {{pedido.tempo}}
                            </div>
                          </div>
                          <div class="columns is-mobile column" style="margin-top:-45px;color:black">
                            <div class="column is-6-desktop">
                                <b>Valor:</b>
                                {{pedido.valor}}
                            </div>
                            <div class="column">
                                <b>Tipo do serviço:</b>
                                {{pedido.tipo}}
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <div class="column overlay3"><div class="card-footer overlay3"></div></div> -->
                      <div
                        class="column is-10-desktop is-offset-1-desktop is-12-tablet is-full-mobile" style="margin-top:-10px"
                        
                      >
                        <div class style="text-align:justify;color:black  ">
                          <b>Descrição:</b>
                          {{pedido.descricao}}
                        </div>
                      </div><br>
                      <div style="margin-top:-20px">
                        <div v-if="pedido.status===0">
                            <b style="color:black;padding:0" class="column is-12-desktop is-full-mobile">
                              <article class="message is-warning " style="border-radius:15px;text-align:center">
                                <div class="message-body">
                                  OBS: Espere um pouco até {{pedido.user_recebe.user.name}} poder analisar sua proposta
                                </div>
                              </article>
                            </b>
                        </div>
                        <div v-if="pedido.orcamento[0] && pedido.status === 1">
                          <!-- Se tiver orçamento para esse pedido e se ele foi aceito -->
                            <b style="color:black;padding:0">
                              <article class="message is-success" style="text-align:center">
                                <div class="message-body">
                                  O (a) {{pedido.user_recebe.user.name}} aceitou sua proposta entre em contato com ele através do número: {{pedido.user_recebe.telefone}} ou pelo email {{pedido.user_recebe.user.email}}, veja a disponibilidade dele(a) <router-link style="color:blue" :to="`/page/cliente/pedidos/orcamento/${pedido.orcamento[0].id}`">aqui</router-link>.
                                </div>
                              </article>
                            </b>
                        </div>
                        <div v-if="!pedido.orcamento[0] && pedido.status === 1">
                          <!-- Se não existir orçamento para o pedido faz isso-->
                          <b style="color:black;padding:0">
                            <article class="message is-warning" style="text-align:center">
                              <div class="message-body">
                                OBS: O pedido foi aceito, mas ele não enviou ainda sua disponibilidade!
                                Contate ele pelo telefone {{pedido.user_recebe.telefone}} ou pelo email 
                                {{pedido.user_recebe.user.email}}
                              </div>
                            </article>
                          </b>
                        </div>
                        <div v-if="pedido.status===2">
                          <b style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                              <article class="message is-danger " style="border-radius:15px;text-align:center">
                                <div class="message-body" style="color:black;">
                                  O(A) {{pedido.user_recebe.user.name}} infelizmente recusou seu pedido :(
                                </div>
                              </article>
                            </b>
                         </div>
                        <div v-if="pedido.status === 3">
                          <b style="color:black;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                            <div class="message-body" align="center" style="border-left:5px solid rgb(99, 74, 110);background:rgba(250, 240, 255, 0.692);color:black">
                              <b>O {{pedido.user_recebe.user.name}} finalizou esse serviço, agora você pode avaliá-lo, avalie o desempenho dele(a) nesse serviço  <router-link :to="`/page/cliente/pedidos/avaliacao/${pedido.id}`" style="color:blue">aqui</router-link></b>
                            </div>
                          </b>
                          <!-- <div class="columns is-mobile">
                            <div class="column is-6-desktop is-6-tablet">
                              <router-link :to="`/page/cliente/pedidos/orcamento/${pedido.orcamento[0].id}`">
                                <button
                                  class="btn-7 column is-12-desktop is-12-tablet is-full-mobile"
                                  style="font-size:13.5pt"
                                >Ver disponibilidade</button>
                              </router-link>
                            </div>
                          </div> -->
                        </div>
                        <div v-if="pedido.status === 4">
                          <b style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                              <article style="text-align:center;color:black">
                                <div class="message-body" style="border-left:5px solid rgb(98, 0, 49);background:rgba(255, 215, 235, 0.24);color:black">
                                  Usuário foi avaliado para esse serviço veja o perfil dele(a).
                                </div>
                              </article>
                            </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br>
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
                <div v-if="data && data.propostaEnvia.data">
                    <div class="columns is-mobile column level-item" v-if="data.propostaEnvia.data[0]">
                      <!-- VOLTAR -->
                      <div v-if="data.propostaEnvia.paginatorInfo.currentPage !== 1">
                        <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="anterior()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_left</i></a>
                      </div>
                      <div v-else>
                        <i class="material-icons" style="margin-top:5px;margin-right:5px">keyboard_arrow_left</i>
                      </div>
                      <!-- FOR PARA PERCORRER E MOSTAR AS PAGINAS -->
                      <div v-for="p of data.propostaEnvia.paginatorInfo.lastPage" :key="p.id">
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
                      <b style="margin-top:15px;margin-left:5px;margin-right:5px" v-if="data.propostaEnvia.paginatorInfo.lastPage > 11">... </b>
                      <div v-if="data.propostaEnvia.paginatorInfo.lastPage > 10">
                        <div v-if="page === data.propostaEnvia.paginatorInfo.lastPage">
                          <a class="button" style="margin:5px;background:rgb(71, 71, 71);color:white">{{data.propostaEnvia.paginatorInfo.lastPage}}</a>
                        </div>
                        <div v-else>
                          <a class="button button-solicita" style="margin:5px" @click.prevent="ultimaPagina(data.propostaEnvia.paginatorInfo.lastPage)">{{data.propostaEnvia.paginatorInfo.lastPage}}</a>
                        </div>
                      </div>
                      <!-- PRÓXIMO -->
                      <div v-if="data.propostaEnvia.paginatorInfo.hasMorePages">
                        <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="proximo()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_right</i></a>
                      </div>
                      <div v-else>
                        <i class="material-icons" style="margin-top:5px;margin-left:5px">keyboard_arrow_right</i>
                      </div>
                    </div>
                    <br><br><br><br>
                </div>
              </div>
              <div v-if="data && data.propostaEnvia.data">
                <div class="column is-10-desktop is-10-tablet is-offset-1-tablet is-offset-1-desktop" v-if="!data.propostaEnvia.data[0]">
                  <article class="message">
                    <div class="message-body">
                      <div
                        class="title is-5"
                        align="center"
                      >Você ainda não requisitou um serviço a ninguem!</div>
                    </div>
                  </article>
                </div>
              </div>
              <!-- FIM DO V-FOR -->
            </div>
          </template>
        </ApolloQuery>
      </div>
      <div v-if="!this.cli.clientForUserId[0]">
        <div class="column is-8-desktop is-offset-2-desktop column is-8-tablet is-offset-2-tablet is-10-mobile is-offset-1-mobile card" style="text-align:center;text-transform:uppercase;font-weight:bold;color:black">
          Você ainda não se cadastrou completamente.
        </div>
      </div>
    </div>
    <div style="display:none">{{idproposta}}</div>
  </div>
</template>
<script>
import gql from "graphql-tag";
import cliForUserId from "@/graphql/queries/clientForUserId.gql";
import propostaForId from "@/graphql/queries/propostaForId.gql";
import editProposta from "@/graphql/mutations/editProposta.gql";

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
        if (data) {
          this.cli = data;
          return this.cli;
        }
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
        if (data && data.proposta) {
          this.titulo = data.proposta.titulo;
          this.valor = data.proposta.valor;
          this.tempo = data.proposta.tempo;
          this.tipo = data.proposta.tipo;
          this.local = data.proposta.local;
          this.descricao = data.proposta.descricao;
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
            mutation: editProposta,
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
@import "../../cssFiles/sidenav.css";
@import "../../cssFiles/input.css";

.img {
  border-radius: 100%;
}

.modal-a {
  opacity: 0;
  visibility: hidden;
  transition: 0.8s;
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

.btnhover{
  border:1px solid rgb(209, 208, 208);
}
.btnhover:hover{
  background: rgb(247, 255, 175);
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