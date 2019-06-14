<template>
  <div class="login">
    <!-- BREADCRUMB -->
    <nav
      class="breadcrumb column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet"
      aria-label="breadcrumbs" style="font-weight:bold"
    >
      <ul>
        <li>
          <router-link to="/page/profissional" style="color:hsl(171, 100%, 41%)">
            <span class="icon is-small">
              <i class="material-icons" aria-hidden="true">face</i>
            </span>
            <span>Perfil</span>
          </router-link>
        </li>
        <li>
          <router-link to="/page/profissional/propostascategory" style="color:hsl(171, 100%, 41%)">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">drafts</i>
            </span>
            <span>Proposta à sua categoria</span>
          </router-link>
        </li>
        <li class="is-active">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">access_time</i>
            </span>
            <span>Disponibilidade</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->
    <div>
      <div v-if="this.proposta.propostaCategory">
        <br>
        <div class="column is-6-desktop is-offset-3-desktop" align="center">
          <div class="title is-3 is-12-desktop is-8-tablet">
            Mardar disponibilidade para o(a) <div>{{this.proposta.propostaCategory.user_envia.user.name}}</div>
            <hr>
          </div>
        </div>
        <div v-if="this.erros.notification" style="margin-bottom:5px" class="control column">
            <div class="notification is-danger column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
              {{this.erros.notification}}
              <a class="delete" @click="muda"></a>
            </div>
          </div>
        <br>
        <form action method="POST">
          <div class="columns">
            <div class="column is-offset-3-desktop is-4-tablet is-offset-2-tablet is-3-desktop is-full-mobile">
              <div class="columns is-mobile column">
                <label for="data" style="margin-left:10px">
                  <b>Diga sua disponibilidade durante a semana</b>
                </label>
                <label for="data" v-if="!data" style="margin-left:10px;color:red" class="label">
                  <b>*</b>
                </label>
              </div>
              <div class="columns" style="margin-left:5px">
                <div class="column is-5-desktop is-5-tablet is-full-mobile">
                  <input type="checkbox" style="margin-right:5px" @change="check" v-model="dias" value="Segunda">
                  <label class="checkbox" style="margin-right:5px"><b>Segunda</b> </label><div></div>
                  <input type="checkbox" style="margin-right:5px" @change="check" v-model="dias" value="Terça">
                  <label class="checkbox" style="margin-right:5px" ><b>Terça</b></label><div></div>
                  <input type="checkbox" style="margin-right:5px" @change="check" v-model="dias" value="Quarta">
                  <label class="checkbox" style="margin-right:5px" ><b>Quarta</b></label><div></div>
                  <input type="checkbox" style="margin-right:5px" @change="check" v-model="dias" value="Quinta">
                  <label class="checkbox" style="margin-right:5px" ><b>Quinta</b></label><div></div>
                </div>
                <div class="column is-5-desktop is-5-tablet is-full-mobile">
                  <input type="checkbox" style="margin-right:5px" @change="check" v-model="dias" value="Sexta">
                  <label class="checkbox" style="margin-right:5px" ><b>Sexta</b></label><div></div>
                  <input type="checkbox" style="margin-right:5px" @change="check" v-model="dias" value="Sábado">
                  <label class="checkbox" style="margin-right:5px" ><b>Sábado</b></label><div></div>
                  <input type="checkbox" style="margin-right:5px" @change="check" v-model="dias" value="Domingo">
                  <label class="checkbox" style="margin-right:5px" ><b>Domingo</b></label>
                </div>
              </div>
            </div>
            <div class="column is-3-desktop is-4-tablet is-full-mobile">
              <label for="horaInicio" class="column">
                <b>Disponibilidade quanto ao tempo de forma geral!</b>
              </label>
              <div class="columns column">
                <div class="column is-6-desktop">
                  <div class="columns is-mobile" style="margin-left:0px">
                    <label for="data">
                      <b>Das</b>
                    </label>
                    <label for="data" v-if="!horaInicio" style="margin-left:10px;color:red">
                      <b>*</b>
                    </label>
                  </div>
                  <input
                    type="time"
                    class="input inp column"
                    v-model="horaInicio"
                    name="horaInicio"
                    id="horaInicio"
                  >
                </div>
                <div class="column is-6-desktop is-6-tablet">
                  <div class="columns is-mobile" style="margin-left:0px">
                    <label>
                      <b>às</b>
                    </label>
                    <label for="data" v-if="!horaFim" style="margin-left:10px;color:red">
                      <b>*</b>
                    </label>
                  </div>
                  <input
                    type="time"
                    class="input inp"
                    v-model="horaFim"
                    name="horaFim"
                    id="horaFim"
                  >
                </div>
              </div>
            </div>
          </div>
          <div v-if="this.mostra" style="margin-bottom:5px" class="control column">
            <div class="notification is-primary column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
              {{this.mostra}}
              <a class="delete" @click="muda"></a>
            </div>
          </div>
          <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
            <div class="columns is-mobile" style="margin-left:0px">
              <label for="descricao" class="label">
                <b>Descreva mais sobre seu tempo, quando você pode atender esse serviço, etc...</b>
              </label>
              <label for="descricao" v-if="!descricao" style="margin-left:10px;color:red">
                <b>*</b>
              </label>
            </div>
            <textarea
              name="descricao"
              id="descricao"
              class="textarea inp"
              v-model="descricao"
              placeholder="Ola terraqueo"
              cols="20"
              rows="5"
            ></textarea>
          </div>
          <div class="control column">
            <button
              @click.prevent="addOrcamento"
              class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile btn2"
            >Enviar sua disponibilidade</button>
          </div>
        </form>
        <br><br><br><br>
      </div>
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
import addLance from "@/graphql/mutations/addLance.gql";
import propostaCatForId from "@/graphql/queries/propostaCatForId.gql";
import proForUserId from "@/graphql/queries/imagemQuery.gql";

//import {onLogin} from '../vue-apollo.js'
//import {Bus} from '../event.js'

export default {
  data() {
    return {
      proposta: [],
      pro: [],
      data: "",
      horaInicio: "",
      horaFim: "",
      descricao: "",
      dias:[],
      date:'',
      mostra:"",
      erros: {
        notification: ""
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
    },
    proposta: {
      query: propostaCatForId,
      variables() {
        return {
          id: this.$route.params.id
        };
      },
      update(data) {
        this.proposta = data;
        return this.proposta;
      }
    }
  },
  methods: {
    check(){
      this.data = this.dias.join(' - ');
      this.mostra = this.data;
    },
    muda(){
      this.erros.notification = "",
      this.mostra = ""
    },
    addOrcamento() {
      if (!this.data || !this.horaInicio || !this.horaFim || !this.descricao) {
        this.$swal({type:"warning",title:"Preencha todos os campos corretamente!"});
      } else {
        this.$apollo
          .mutate({
            mutation: addLance,
            variables: {
              data: this.data,
              horaInicio: this.horaInicio,
              horaFim: this.horaFim,
              status: 0,
              date:this.date,
              descricao: this.descricao,
              user_lance_id: this.pro.imageForUserId[0].id,
              proposta_categoria_id: this.proposta.propostaCategory.id
            }
          })
          .then(data => {
            console.log(data);
            this.$router.push(`/page/profissional/propostascategory`);
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
