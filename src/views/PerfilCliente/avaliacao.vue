<template>
  <div> 
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
          <router-link to="/page/cliente/pedidos" style="color:hsl(171, 100%, 41%)">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">description</i>
            </span>
            <span>Pedidos</span>
          </router-link>
        </li>
        <li class="is-active">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">stars</i>
            </span>
            <span>Avaliação</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->
    <div class="avaliacao" v-if="this.proposta.proposta">
      <img
        src="../../assets/5estrelas.png"
        class="column is-2-desktop is-4-tablet is-offset-4-tablet  is-6-mobile is-offset-3-mobile is-offset-5-desktop"
        alt="cover image"
      >
      <div class="column">
        <div class="title is-3 is-6-desktop is-8-tablet level-item" text-align="center">
          Avaliar {{this.proposta.proposta.user_recebe.user.name}}
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
        <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
          <div class="columns is-mobile">
            <label for="descricao" class="label column is-11-desktop is-11-tablet is-10-mobile">
              <b>Iai? Como foi a atuação do(a) profissional?</b>
            </label>
            <label v-if="!titulo" class="label column" style="margin-left:10px;color:red">
              <b>*</b>
            </label>
          </div>
          <input
            type="text"
            class="input inp"
            v-model="titulo"
            name="titulo"
            id="titulo"
            placeholder="Gostei bastante!"
          >
        </div>
        <div class="columns">
          <div class="column is-offset-3-desktop is-4-tablet is-offset-2-tablet is-3-desktop is-full-mobile">
            <div class="columns is-mobile column" >
              <label for="data" class="label column is-11-desktop is-11-tablet is-10-mobile">
                <b>Como foi a atuação dele no geral?</b>
              </label>
              <label v-if="!estrela" class="label column" style="color:red">
                <b>*</b>
              </label>
            </div>
            <div class="control column is-12-desktop is-12-tablet is-full-mobile" style="margin-top:-35px">
              <select class="inp" name="estrela" id="estrela" v-model="estrela">
                <option :value="5">Excelente</option>
                <option :value="4">Muito Bom</option>
                <option :value="3">Bom</option>
                <option :value="2">Ruim</option>
                <option :value="1">Péssimo</option>
              </select>
            </div>
          </div>
          <div class="column is-3-desktop is-4-tablet is-full-mobile">
            <label for="horaInicio" class="label column">
              <b>Você recomenda para outras pessoas?</b>
            </label>
            <div class="control column" style="margin-top:-15px">
              <label class="radio">
                <input type="radio" v-model="recomenda" name="recomenda" :value="1">
                Sim
              </label>
              <label class="radio">
                <input type="radio" v-model="recomenda" name="recomenda" :value="0">
                Não
              </label>
            </div>
          </div>
        </div>
        <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
          <div class="columns is-mobile">
            <label for="descricao" class="label column is-11-desktop is-11-tablet is-10-mobile">
              <b>Descreva mais sobre como foi a atuação dele nesse serviço!</b>
            </label>
            <label v-if="!descricao" class="label column" style="margin-left:10px;color:red">
              <b>*</b>
            </label>
          </div>
          <textarea
            name="descricao"
            id="descricao"
            class="textarea inp"
            v-model="descricao"
            placeholder="Gostei pois o profissional foi bastante atencioso no serviço e atendeu as minhas expectativas"
            cols="20"
            rows="5"
          ></textarea>
        </div>
        <div class="control column">
          <button
            @click.prevent="avaliar"
            class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile btn2"
          >Avaliar profissinal!</button>
        </div>
      </form><br><br><br>
    </div>
  </div>
</template>

<script>
import propostaForId from "@/graphql/queries/propostaForId.gql";
import addAvaliacao from "@/graphql/mutations/avaliar.gql";
import aceita from "@/graphql/mutations/aceita.gql";

export default {
  data() {
    return {
      proposta: [],
      titulo:'',
      estrela: 0,
      recomenda: 1,
      descricao: "",
      date:'',
      erros:{
        notification:""
      }
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
  methods: {
    muda(){
      this.erros.notification =""
    },
    avaliar() {
      if(!this.estrela || !this.descricao || !this.titulo){
        this.$swal({type:"warning",title:"Preencha todos os campos corretamente!"});
      }else{
      this.$apollo
        .mutate({
          mutation: addAvaliacao,
          variables: {
            titulo:this.titulo,
            estrela: this.estrela,
            date:this.date,
            recomenda: this.recomenda,
            descricao: this.descricao,
            user_avalia_id: this.proposta.proposta.user_envia.id,
            user_avaliado_id: this.proposta.proposta.user_recebe.id
          }
        })
        .then(() => {
          this.$apollo.mutate({
            mutation: aceita,
            variables: {
              id: this.proposta.proposta.id,
              status: 4
            }
          });
          this.$router.push(`/page/cliente/pedidos/`);
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
