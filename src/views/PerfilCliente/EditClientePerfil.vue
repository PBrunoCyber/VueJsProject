<template>
  <div class="login">
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
        <li class="is-active">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">edit</i>
            </span>
            <span>Editar informações</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->

    <div>
      <div class>
        <h1 class="title is-3 column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet">
          Editar informações adicionais
          <hr>
        </h1>
        <form action method="POST">
          <div class="columns">
            <div class="column is-offset-3-desktop is-4-tablet is-offset-2-tablet is-3-desktop is-full-mobile">
              <li class="column">
                <div class="columns is-mobile" style="margin-left:0px">
                  <label for="cidade">
                    <b>Cidade</b>
                  </label>
                  <label v-if="!perfilCli.cidade" for="cidade" style="margin-left:10px;color:red"><b>*</b></label>
                </div>
                <input
                  type="text"
                  class="input inp"
                  v-model="perfilCli.cidade"
                  placeholder="Ex:. Floriano"
                  name="cidade"
                  id="ramo"
                >
              </li>
            </div>
            <div class="column is-3-desktop is-4-tablet is-full-mobile">
              <li class="column">
                 <div class="columns is-mobile" style="margin-left:0px"> 
                  <label for="estado">
                    <b>Estado</b>
                  </label>
                  <label v-if="!perfilCli.estado" for="estado" style="margin-left:10px;color:red"><b>*</b></label>
                </div>
                 <select
                  class="control column is-12-desktop is-12-tablet inp"
                  name="tipo"
                  id="tipo"
                  v-model="perfilCli.estado"
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
          <div class="columns">
            <div class="control column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
              <li class="column">
                <div class="columns is-mobile" style="margin-left:0px"> 
                  <label for="logradouro">
                    <b>Endereco/Logradouro</b>
                  </label>
                  <label v-if="!perfilCli.logradouro" for="logradouro" style="margin-left:10px;color:red" ><b>*</b></label>
                </div>
                <input
                  type="text"
                  class="input inp"
                  v-model="perfilCli.logradouro"
                  placeholder="Ex:. Rua São João, 29"
                  name="logradouro"
                  id="logradouro"
                >
              </li>
            </div>
          </div>
          <div class="columns">
            <div class="column control is-3-desktop is-offset-3-desktop is-4-tablet is-offset-2-tablet is-12-mobile">
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
            <div class="control column is-3-desktop is-4-tablet is-full-mobile">
              <li class="column">
                <div class="columns is-mobile" style="margin-left:0px"> 
                  <label for="telefone">
                    <b>Telefone</b>
                  </label>
                  <label v-if="!perfilCli.telefone" for="telefone" style="margin-left:10px;color:red"><b>*</b></label>
                </div>
                <input
                  type="text"
                  class="input inp"
                  v-model="perfilCli.telefone"
                  placeholder="Ex:. (48) 99424-21419"
                  name="telefone"
                  id="telefone"
                  v-mask = "'(##) #####-####'"
                >
              </li>
            </div>
          </div>
          <div v-if="this.erros.notification" style="margin-bottom:5px" class="control column">
            <div class="notification is-danger column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
                {{this.erros.notification}}
                <a class="delete" @click="muda"></a>
            </div>
          </div>
          <div class="control column">
            <button
              @click.prevent="updatecli"
              class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile btn2"
            >Editar Informações</button>
          </div>
        </form>
      </div>
    </div><br><br><br><br>
  </div>
</template>
<script>
//import gql from 'graphql-tag'
//import {onLogin} from '../vue-apollo.js'
//import {Bus} from '../event.js'
import clientEdit from '@/graphql/queries/clientForId.gql'

export default {
  data() {
    return {
      perfilCli: {
        cidade: "",
        estado: "",
        logradouro: "",
        imagem: "",
        telefone: "",
        user_id: this.$route.params.user_id,
      },
      erros:{
        cidade:"",
        estado:"",
        logradouro:"",
        telefone:"",
        notification:""
      }
    };
  },
  apollo:{
    client_edit:{
      query: clientEdit,
      variables(){
        return{
          id: this.$route.params.id
        }
      },
      update(data){
        if(data){
          this.perfilCli.cidade = data.client.cidade;
          this.perfilCli.estado = data.client.estado;
          this.perfilCli.logradouro = data.client.logradouro;
          this.perfilCli.telefone = data.client.telefone;
          return data;
        }
      }
    }
  },
  methods: {
    imageChanged(e) {
      console.log(e.target.files[0]);
      var fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);

      fileReader.onload = e => {
        this.perfilCli.imagem = e.target.result;
        document.getElementById("preview").src = e.target.result;
      };
    },
    muda(){
      this.erros.notification = ""
    },
    updatecli() {
      if (!this.perfilCli.cidade) {
        this.erros.cidade = "*"
      }if (!this.perfilCli.estado) {
        this.erros.estado = "*"
      } if (!this.perfilCli.logradouro) {
        this.erros.logradouro = "*"
      } if ( !this.perfilCli.telefone) {
         this.erros.telefone = "*"
      }

      if(!this.perfilCli.cidade || !this.perfilCli.estado || !this.perfilCli.logradouro || !this.perfilCli.telefone){
        this.$swal({type:"warning",title:"Preencha todos os campos corretamente!"});
      }else{
        if(this.perfilCli.telefone.length < 15){
          this.erros.cidade = "";this.erros.estado = "";this.erros.logradouro = "";this.erros.telefone = "";
          this.$swal({type:"warning",title:"Opps digite seu telefone corretamente, por favor!"});
        }else{
          if(this.perfilCli.imagem === ''){
            this.perfilCli.imagem = 'noimage.png';
          }
          window.axios.put("api/perfil_clientes/"+this.$route.params.id, this.perfilCli).then(() => {
            this.$router.push("/page");
          });
        }
      }
    }
  }
};
</script>
<style>
@import "../../cssFiles/inputsAndButtons.css";
@import "../../cssFiles/input.css";

</style>
