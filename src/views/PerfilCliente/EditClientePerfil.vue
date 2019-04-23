<template>
  <div class="login">
    <div class="border">
      <div class>
        <h1 class="title is-3 column is-6-desktop is-offset-3">
          Editar informações adicionais
          <hr>
        </h1>
        <form action method="POST">
          <div class="columns">
            <div class="column is-offset-3 is-3-desktop is-full-mobile">
              <li class="column">
                <label for="ramo" class="label">
                  <b>Cidade</b>
                </label>
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
            <div class="column is-3-desktop is-full-mobile">
              <li class="column">
                <label for="estado" class="label">
                  <b>Estado</b>
                </label>
                <input
                  type="text"
                  class="input inp"
                  v-model="perfilCli.estado"
                  placeholder="Ex:. Piauí"
                  name="estado"
                  id="estado"
                >
              </li>
            </div>
          </div>
          <div class="columns">
            <div class="control column is-6-desktop is-offset-3 is-full-mobile">
              <li class="column">
                <label for="logradouro" class="label">
                  <b>Endereco/Logradouro</b>
                </label>
                <input
                  type="text"
                  class="input inp column"
                  v-model="perfilCli.logradouro"
                  placeholder="Ex:. Rua São João, 29"
                  name="logradouro"
                  id="logradouro"
                >
              </li>
            </div>
          </div>
          <div class="columns">
            <div class="column control is-3-desktop is-offset-3 is-12-mobile">
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
            <div class="control column is-3-desktop is-full-mobile">
              <li class="column">
                <label for="telefone" class="label">
                  <b>Telefone</b>
                </label>
                <input
                  type="text"
                  class="input inp column"
                  v-model="perfilCli.telefone"
                  placeholder="Ex:. (48) 99424-21419"
                  name="telefone"
                  id="telefone"
                >
              </li>
            </div>
          </div>
          <div class="control column">
            <button
              @click.prevent="updatecli"
              class="column is-6-desktop is-offset-3 is-full-mobile btn-1"
            >Editar Informações</button>
          </div>
        </form>
      </div>
    </div>
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
      result({data}){
        this.perfilCli.cidade = data.client.cidade;
        this.perfilCli.estado = data.client.estado;
        this.perfilCli.logradouro = data.client.logradouro;
        this.perfilCli.telefone = data.client.telefone;
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
      console.log(this.perfilCli);
    },
    updatecli() {
      window.axios.put("api/perfil_clientes/"+this.$route.params.id, this.perfilCli).then(response => {
        console.log(response);
        this.$router.push("/page");
      });
    }
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
</style>
