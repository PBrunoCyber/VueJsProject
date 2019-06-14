<template>
  <div class="proposta category">
    <!-- BREADCRUMB -->
    <nav class="breadcrumb column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet" style="font-weight:bold" aria-label="breadcrumbs">
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
        <li v-if="this.nameCat.category">
          <router-link :to="`/page/cliente/categories/profissionais/${this.nameCat.category.id}`" style="color:hsl(171, 100%, 41%)">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">people</i>
            </span>
            <span>{{this.nameCat.category.name}}</span>
          </router-link>
        </li>
        <li class="is-active" v-if="this.nameCat.category">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">collections</i>
            </span>
            <span>Proposta para categoria</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->
    
    <div>
      <div>
        <br>
        <div  class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet" align="center">  
          <div class="column" v-if="this.nameCat.category">
            <h1 class="title is-3 level-item">Enviar pedido para a categoria {{this.nameCat.category.name}}</h1>
            </div>
        </div>
        <br>
        <form action method="POST">
          <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
            <div class="columns is-mobile column">
              <label for="valor">
                <b>Diga o titulo do serviço</b>
              </label>
              <label for="titulo" v-if="!titulo" style="margin-left:10px;color:red"><b>*</b></label>
            </div>
            <input
              type="text"
              class="input inp"
              v-model="titulo"
              placeholder="Ex:. Floriano"
              name="valor"
              id="valor"
            >
          </div>
          <div class="columns">
            <div class="control column is-offset-3-desktop is-3-desktop is-4-tablet is-offset-2-tablet is-full-mobile">
              <li class="column">
                <div class="columns is-mobile column">
                  <label for="valor">
                    <b>Quanto você pretende pagar?</b>
                  </label>
                  <label for="valor" v-if="!valor" style="margin-left:10px;color:red"><b>*</b></label>
                </div>
                 <select
                  class="control column is-12-desktop inp"
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
            <div class="column is-3-desktop is-4-tablet is-full-mobile">
              <li class="column">
                <div class="columns is-mobile column">
                  <label for="tipo" >
                    <b>Como vai ser o atendimento?</b>
                  </label>
                  <label for="tipo" v-if="!tipo" style="margin-left:10px;color:red"><b>*</b></label>
                </div>
                <select
                  class="control column is-12-desktop inp"
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
          <div class="columns">
            <div class="control column is-offset-3-desktop is-3-desktop is-4-tablet is-offset-2-tablet is-full-mobile">
              <li class="column">
                <div class="columns is-mobile column">
                  <label for="valor">
                    <b>Pra quando é o serviço?</b>
                  </label>
                  <label for="valor" v-if="!tempo" style="margin-left:10px;color:red"><b>*</b></label>
                </div>
                 <select
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
            <div class="column is-3-desktop is-4-tablet is-full-mobile">
            <div class="column">
              <div class="columns is-mobile column">
                <label for="local">
                  <b>Diga o local do serviço</b>
                </label>
                <label for="local" v-if="!local" style="margin-left:10px;color:red"><b>*</b></label>
              </div>
              <input
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
          
          <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
            <div class="columns is-mobile column">
                <label for="descricao">
                  <b>Descrição</b>
                </label>
                <label for="descricao" v-if="!descricao" style="margin-left:10px;color:red"><b>*</b></label>
            </div>
            <textarea
              name="descricao"
              id="descricao"
              class="textarea inp"
              v-model="descricao"
              placeholder="Digite suas especialidades, formações ou metas, sua idade etc"
              cols="20"
              rows="5"
            ></textarea>
          </div>
          <div v-if="this.erros.notification" style="margin-bottom:5px" class="control column">
            <div class="notification is-danger column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
                {{this.erros.notification}}
                <a class="delete" @click="muda"></a>
            </div>
          </div>
          <div class="control column">
            <button @click.prevent="addProposta"
              class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile btn-1"
            >Enviar Proposta</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
import clientForUserId from "@/graphql/queries/clientForUserId.gql";
import addPropostaCategory from '@/graphql/mutations/propostaCategory.gql'
import categoryName from "@/graphql/queries/nameCategory.gql";

//import {onLogin} from '../vue-apollo.js'
//import {Bus} from '../event.js'

export default {
  data() {
    return {
      me: null,
      nameCat:[],
      clientes: [],
      titulo: '',
      valor: '',
      local: '',
      descricao: '',
      tempo:'',
      tipo: '',
      date:'',
      erros:{
        notification:""
      }
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
          if(this.me){   
            return {
            user_id: this.me.id
            };
          }
      },
      update(data) {
          if(data){
            this.clientes = data;
            return this.clientes;
          }
      }
    },
    nameCat: {
      query: categoryName,
      variables() {
        return {
          id: this.$route.params.id
        };
      },
      update(data) {
          if(data){  
            this.nameCat = data;
            return this.nameCat;
          }
      }
    }
  },
  methods: {
    muda(){
      this.erros.notification = ""
    },
    addProposta() {
      if (!this.titulo || !this.valor || !this.local || !this.descricao || !this.tipo) {
        this.$swal({type:"warning",title:"Preencha todos os campos corretamente!"});
      }else{
        this.$apollo
          .mutate({
            mutation: addPropostaCategory,
            variables: {
              titulo: this.titulo,
              valor: this.valor,
              local: this.local,
              descricao: this.descricao,
              tipo: this.tipo,
              tempo:this.tempo,
              date:this.date,
              status: 0,
              finalizar: 0,
              user_envia_id: this.clientes.clientForUserId[0].id,
              category_id: this.$route.params.id,
              user_aceito_id: null
            }
          })
          .then(data => {
            console.log(data);
            this.$router.push(`/page/cliente/propostacategory`);
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  },
  created(){
    var tempo = new Date();
    if (tempo.getMonth()+1 < 10) {
      var mes = '0'+(tempo.getMonth()+1);
    }else{
      mes = (tempo.getMonth()+1);
    }
    if (tempo.getDate() < 10) {
      var dia = '0'+(tempo.getDate());
    }else{
      dia = tempo.getDate();
    }

    var data = dia+'/'+mes+'/'+tempo.getFullYear();
    this.date = data;
  }
};
</script>
<style>
@import "../../cssFiles/inputsAndButtons.css";
@import "../../cssFiles/input.css";

</style>
