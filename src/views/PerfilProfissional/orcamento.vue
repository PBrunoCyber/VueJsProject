<template>
  <div class="login">
    <!-- BREADCRUMB -->
    <nav
      class="breadcrumb column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet"
      aria-label="breadcrumbs"
    >
      <ul>
        <li>
          <router-link to="/page/profissional">
            <span class="icon is-small">
              <i class="material-icons" aria-hidden="true">face</i>
            </span>
            <span>Perfil</span>
          </router-link>
        </li>
        <li>
          <router-link to="/page/profissional/solicitacoes">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">move_to_inbox</i>
            </span>
            <span>Solicitações</span>
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
      <div v-if="this.proposta.proposta">
        <br>
        <div class="column is-6-desktop is-offset-3-desktop is-6-tablet is-offset-3-tablet">
          <div class="title is-3 is-6-desktop  is-6-tablet level-item" align="center">
            Mardar sua disponibilidade para o {{this.proposta.proposta.user_envia.user.name}}
            <hr>
          </div>
        </div>
        <br><br>
        <form action method="POST">
          <div class="columns">
            <div class="column is-offset-3-desktop is-4-tablet is-offset-2-tablet is-3-desktop is-full-mobile">
              <div class="columns is-mobile column">
                <label for="data" style="margin-left:10px">
                  <b>Diga sua disponibilidade durante a semana</b>
                </label>
                <label for="data" v-if="!dias[0]" style="margin-left:10px;color:red">
                  <b>*</b>
                </label>
              </div>
              <div class="columns" style="margin-left:5px">
                <div class="column is-5-desktop is-5-tablet is-full-mobile">
                  <label class="checkbox" style="margin-right:5px"><b>Segunda</b> </label>
                  <input type="checkbox" @change="check" v-model="dias" value="Segunda">
                  <label class="checkbox" style="margin-right:5px" ><b>Terça</b></label>
                  <input type="checkbox" @change="check" v-model="dias" value="Terça">
                  <label class="checkbox" style="margin-right:5px" ><b>Quarta</b></label>
                  <input type="checkbox" @change="check" v-model="dias" value="Quarta">
                  <label class="checkbox" style="margin-right:5px" ><b>Quinta</b></label>
                  <input type="checkbox" @change="check" v-model="dias" value="Quinta">
                  </div>
                <div class="column is-5-desktop is-5-tablet is-full-mobile">
                  <label class="checkbox" style="margin-right:5px" ><b>Sexta</b></label>
                  <input type="checkbox" @change="check" v-model="dias" value="Sexta">
                  <label class="checkbox" style="margin-right:5px" ><b>Sábado</b></label>
                  <input type="checkbox" @change="check" v-model="dias" value="Sábado">
                  <label class="checkbox" style="margin-right:5px" ><b>Domingo</b></label>
                  <input type="checkbox" @change="check" v-model="dias" value="Domingo">
                </div>
              </div>
            </div>
            <div class="column is-3-desktop is-4-tablet is-full-mobile" style="margin-top:-10px">
              <label for="horaInicio" class="column">
                <b>Disponibilidade quanto ao tempo de forma geral!</b>
              </label>
              <div class="columns is-mobile column">
                <div class="column is-6-desktop is-6-tablet">
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
                    class="input inp"
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
            <div class="notification is-primary column is-6-desktop is-offset-3-desktop is-6-tablet is-offset-3-tablet is-full-mobile">
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
          <div v-if="this.erros.notification" style="margin-bottom:5px" class="control column">
            <div class="notification is-danger column is-6-desktop is-offset-3 is-full-mobile">
              {{this.erros.notification}}
              <a class="delete" @click="muda"></a>
            </div>
          </div>
          <div class="control column">
            <button
              @click.prevent="addOrcamento"
              class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile btn2"
            >Enviar sua disponibilidade</button>
          </div>
          <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
            <div class="obs" style="color:white">
              <b>OBS: O aqui não é um agendamento formal, e sim pra motivos de informações extras. Voçê pode entrar em contato com o(a) {{this.proposta.proposta.user_envia.user.name}} pelo telefone {{this.proposta.proposta.user_envia.telefone}} para informações sobre o agendamento!</b>
            </div>
          </div>
        </form>
      </div>
    </div><br><br><br><br>
    <footer v-if="this.proposta.proposta" class="footer" style="background:hsl(171, 100%, 41%);font-family: 'Francois One', sans-serif">
        <div class="content has-text-centered">
          <p class="font" style="font-size:18pt">
             Software para cadastro de profissionais autônomos. 
          </p><p>The website content is licensed</p>
          <p>© Site feito para o WTCS 2019</p>
        </div>
    </footer>
  </div>
</template>
<script>
//import gql from "graphql-tag";
import orcamento from "@/graphql/mutations/orcamento.gql";
import propostaForId from "@/graphql/queries/propostaForId.gql";

//import {onLogin} from '../vue-apollo.js'
//import {Bus} from '../event.js'
export default {
  data() {
    return {
      proposta: [],
      data: "",
      horaInicio: "",
      horaFim: "",
      descricao: "",
      date:"",
      erros: {
        notification: ""
      },
      dias:[],
      mostra:""
    };
  },
  apollo: {
    proposta: {
      query: propostaForId,
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
  methods:{
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
          mutation: orcamento,
          variables: {
            data: this.data,
            horaInicio: this.horaInicio,
            horaFim: this.horaFim,
            date:this.date,
            descricao: this.descricao,
            proposta_id: this.proposta.proposta.id
          }
        })
        .then(() => {
          this.$router.push(`/page/profissional/solicitacoes`);
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

.inp {
  width: 100%;
  height: 3.5em;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
.inp:focus {
  border: 3px solid rgb(94, 10, 190);
}

.inp1 {
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
.inp1:focus {
  border: 3px solid tomato;
}

.obs {
  background: grey;
  padding: 1em 2em;
}
</style>
