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
        <li class="is-active">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">add</i>
            </span>
            <span>Adicionar informações</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->
    <br>
    <h1 class="title is-3 column is-6-desktop is-offset-3-desktop is-6-tablet is-offset-2-tablet">
      Cadastrar informações
      <hr>
    </h1>
    <form action method="POST">
      <div
        class="control column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile"
      >
        <div class="columns is-mobile" style="margin-left:2px">
          <label for="ramo">
            <b>Descreva brevente sobre voçê e suas habilidades</b>
          </label>
          <label for="ramo" v-if="!image.ramo" style="margin-left:10px;color:red">
            <b>*</b>
          </label>
        </div>
        <input
          @keyup="verificar()"
          type="text"
          class="input inp"
          v-model="image.ramo"
          placeholder="Ex:. Cuido de idosos, Faço reformas"
          name="ramo"
          id="ramo"
        >
        <span class="level-right column" style="margin-top:-10px" align="right" id="tamanho">{{this.tamanho}}</span>
      </div>
      <div class="columns" style="margin-top:-40px">
        <div
          class="column is-offset-3-desktop is-4-tablet is-offset-2-tablet is-full-mobile is-3-desktop is-full-mobile"
        >
          <li class="column">
            <div class="columns is-mobile" style="margin-left:2px">
              <label for="cidade">
                <b>Cidade</b>
              </label>
              <label for="cidade" v-if="!image.cidade" style="margin-left:10px;color:red">
                <b>*</b>
              </label>
            </div>
            <input
              type="text"
              class="input inp"
              v-model="image.cidade"
              placeholder="Ex:. Floriano"
              name="cidade"
              id="cidade"
            >
          </li>
        </div>
        <div class="column is-4-tablet is-full-mobile is-3-desktop is-full-mobile">
          <li class="column">
            <div class="columns is-mobile" style="margin-left:2px">
              <label for="estado">
                <b>Estado</b>
              </label>
              <label for="estado" v-if="!image.estado" style="margin-left:10px;color:red">
                <b>*</b>
              </label>
            </div>
            <select
              class="control column is-12-desktop inp"
              name="estado"
              id="estado"
              v-model="image.estado"
            >
              <option value="Acre">Acre</option>
              <option value="Alagoas">Alagoas</option>
              <option value="Amapá">Amapá</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Bahia">Bahia</option>
              <option value="Ceará">Ceará</option>
              <option value="Distrito Federal">Distrito Federal</option>
              <option value="Espírito Santo">Espírito Santo</option>
              <option value="Goiás">Goiás</option>
              <option value="Maranhão">Maranhão</option>
              <option value="Mato Grosso">Mato Grosso</option>
              <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Pará">Pará</option>
              <option value="Paraíba">Paraíba</option>
              <option value="Paraná">Paraná</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Piauí">Piauí</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Rio Grande do Norte">Rio Grande do Norte</option>
              <option value="Rio Grande do Sul">Rio Grande do Sul</option>
              <option value="Rondônia">Rondônia</option>
              <option value="Roraima">Roraima</option>
              <option value="Santa Catarina">Santa Catarina</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Sergipe">Sergipe</option>
              <option value="Tocantins">Tocantins</option>
            </select>
          </li>
        </div>
      </div>
      <div class="columns" style="margin-top:-20px">
        <div
          class="control column is-4-tablet is-offset-2-tablet is-full-mobile is-3-desktop is-full-mobile is-offset-3-desktop is-full-mobile"
        >
          <li class="column">
            <div class="columns is-mobile" style="margin-left:2px">
              <label for="logradouro">
                <b>Endereco/Logradouro</b>
              </label>
              <label for="logradouro" v-if="!image.logradouro" style="margin-left:10px;color:red">
                <b>*</b>
              </label>
            </div>
            <input
              type="text"
              class="input inp column"
              v-model="image.logradouro"
              placeholder="Ex:. Rua São João, 29"
              name="logradouro"
              id="logradouro"
            >
          </li>
        </div>
        <div class="control column is-4-tablet is-full-mobile is-3-desktop is-full-mobile">
          <li class="column">
            <div class="columns is-mobile" style="margin-left:2px">
              <label for="telefone">
                <b>Telefone</b>
              </label>
              <label for="telefone" v-if="!image.telefone" style="margin-left:10px;color:red">
                <b>*</b>
              </label>
            </div>
            <input
              type="text"
              class="input inp column"
              v-model="image.telefone"
              placeholder="Ex:. (48) 99424-21419"
              name="telefone"
              id="telefone"
              v-mask="'(##) #####-####'"
            >
          </li>
        </div>
      </div>
      <div
        class="control column is-8-tablet is-offset-2-tablet is-full-mobile is-6-desktop is-full-mobile is-offset-3-desktop is-full-mobile"
        style="margin-top:-10px"
      >
        <div class="columns is-mobile" style="margin-left:2px">
          <label for="descricao">
            <b>Descrição</b>
          </label>
          <label for="descricao" v-if="!image.descricao" style="margin-left:10px;color:red">
            <b>*</b>
          </label>
        </div>
        <textarea
          name="descricao"
          id="descricao"
          class="textarea inp1"
          v-model="image.descricao"
          placeholder="Digite suas especialidades, formações ou metas, sua idade etc"
          cols="20"
          rows="5"
        ></textarea>
      </div>
      <div class="columns">
        <div
          class="column control is-3-desktop is-offset-3-desktop is-offset-2-tablet is-12-mobile"
        >
          <div class="column">
            <label for="foto" class="label">
              <b>Foto do perfil (opcional)</b>
            </label>
            <figure>
              <img
                src="http://kbae.com.au/images/no_user_image.png"
                width="200"
                height="200"
                id="preview"
              >
            </figure>
            <div class="file has-name is-boxed is-primary is-full-mobile">
              <label class="file-label">
                <span class="file-cta">
                  <input class="file-input" type="file" id="imgChooser" @change="imageChanged">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">Escolher foto</span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="control column is-12-tablet is-6-desktop">
          <div class="column is-5-desktop is-5-tablet is-full-mobile">
            <div class="control">
              <ApolloQuery :query="require('@/graphql/queries/categories.gql')">
                <template slot-scope="{ result: { data, loading },isLoading }">
                  <div v-if="isLoading">Loading...</div>
                  <div v-else>
                    <div class="columns is-mobile column">
                      <label for="categoria">
                        <b>Selecione a categoria de seu serviço</b>
                      </label>
                      <label
                        for="descricao"
                        v-if="!image.category_id"
                        style="margin-left:10px;color:red"
                      >
                        <b>*</b>
                      </label>
                    </div>
                    <div v-if="data">
                      <select class="inp" v-model="image.category_id" name="id_category">
                        <option
                          href="#"
                          v-for="cat of data.categories"
                          :key="cat.id"
                          :value="cat.id"
                        >{{cat.name}}</option>
                      </select>
                    </div>
                  </div>
                </template>
              </ApolloQuery>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.erros.notification" style="margin-bottom:5px" class="control column">
        <div class="notification is-danger column is-6-desktop is-offset-3 is-full-mobile">
          {{this.erros.notification}}
          <a class="delete" @click="muda"></a>
        </div>
      </div>
      <div class="control column">
        <button
          @click.prevent="create"
          class="column is-6-desktop is-offset-3 is-full-mobile btn2"
        >Cadastrar Informações</button>
      </div>
    </form><br><br><br><br><br>
  </div>
</template>
<script>
//import gql from 'graphql-tag'
//import {onLogin} from '../vue-apollo.js'
//import {Bus} from '../event.js'



export default {
  data() {
    return {
      tamanho:"0/85",
      tamanho_single:0,
      image: {
        ramo: "",
        cidade: "",
        estado: "",
        logradouro: "",
        descricao: "",
        imagem: "",
        telefone: "",
        user_id: this.$route.params.id,
        category_id: null
      },
      erros: {
        notification: ""
      }
    };
  },
  methods: {
    imageChanged(e) {
      console.log(e.target.files[0]);
      var fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);

      fileReader.onload = e => {
        this.image.imagem = e.target.result;
        document.getElementById("preview").src = e.target.result;
      };
      console.log(this.image);
    },
    muda() {
      this.erros.notification = "";
    },
    create() {
      if (
        !this.image.ramo ||
        !this.image.cidade ||
        !this.image.estado ||
        !this.image.logradouro ||
        !this.image.telefone ||
        !this.image.descricao ||
        !this.image.category_id
      ) {
        this.$swal({
          type: "warning",
          title: "Preencha todos os campos corretamente!"
        });
      } else {
        if (this.image.telefone.length < 15) {
          this.$swal({
            type: "warning",
            title: "Opps preencha o campo do telefone corretamente!"
          });
        } 
        else if(this.tamanho_single > 85){
          this.$swal({
            type: "warning",
            title: "Opps voçê digitou mais de 85 caracteres!"
          });
        }else {
          if (this.image.imagem === "") {
            this.image.imagem = "noimage.png";
            console.log(this.image.imagem);
          }
          window.axios.post("api/imagems", this.image).then(response => {
            console.log(response);
            this.$router.push("/page");
          });
        }
      }
    },
    verificar(){
      var tamanho = this.image.ramo.length;
      this.tamanho = tamanho+"/85";
      this.tamanho_single = tamanho;
      if (tamanho > 85) {
        document.getElementById("tamanho").style.color = "red";
      }else{
        document.getElementById("tamanho").style.color = "black";
      }
  }
  }
};
</script>
<style>
@import "../../cssFiles/inputsAndButtons.css";
@import "../../cssFiles/input.css";
</style>
