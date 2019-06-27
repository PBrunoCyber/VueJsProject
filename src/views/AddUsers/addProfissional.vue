<template>
  <div class="registerPro">
    <div class="container">
      <!--rgb(82, 66, 190)-->
      <div style="margin-top:2em">
        <div class="columns">
          <div
            class="column is-4-desktop is-offset-1-desktop is-full-mobile"
            style="background:rgb(82, 66, 190);border-radius:5px;"
          >
            <div class="overlay"></div>
            <div class="column is-12-desktop" align="center">
              <div class="text-white" style="font-size:25pt"><b>Já se cadastrou?</b></div>
              <div class="text-white" style="font-size:18pt">Faça o login e entre na plataforma!</div><br>
              <router-link :to="`/login`">
                <button class="btn4 column is-10-desktop is-10-tablet is-6-mobile" style="border-radius:15px">Login</button>
              </router-link>
            </div>
          </div>
          <div class="column is-6-desktop box">
            <div class="column">
              <br>
              <h1
                class="title is-4 column is-12-desktop is-8-tablet"
                style="color:rgb(82, 66, 190)"
                align="center"
              ><b>CADASTRE-SE PARA PRESTAR SERVIÇOS</b></h1>
              <div v-if="notification" style="margin-bottom:5px">
                <div class="notification is-danger column is-12-desktop is-full-mobile">
                  {{this.notification}}
                  <a class="delete" @click.prevent="muda"></a>
                </div>
              </div>
              <div v-if="emailRepetido" style="margin-bottom:5px">
                <div class="notification is-danger column is-12-desktop is-full-mobile">
                  {{this.emailRepetido}}
                  <a class="delete" @click.prevent="muda"></a>
                </div>
              </div>
              <div v-if="nomeMinimo" style="margin-bottom:5px">
                <div class="notification is-danger column is-12-desktop is-full-mobile">
                  {{this.nomeMinimo}}
                  <a class="delete" @click.prevent="muda"></a>
                </div>
              </div>
              <div v-if="senhaMinima" style="margin-bottom:5px">
                <div class="notification is-danger column is-12-desktop is-full-mobile">
                  {{this.senhaMinima}}
                  <a class="delete" @click.prevent="muda"></a>
                </div>
              </div>
              <div class="card-footer"></div>
              <br>
              <form action method="POST" @submit.prevent="register">
                <div class="control column is-12-desktop ">
                  <div class="columns is-mobile" style="margin-left:0px">
                    <label for="name">
                      <b>Digite seu nome</b>
                    </label>
                    <span v-if="!name" style="color:red;margin-left:10px">
                      <b>*</b>
                    </span>
                  </div>
                  <input
                    class="input in"
                    type="text"
                    v-model="name"
                    name="name"
                    id="name"
                    placeholder="Ex: John Wick"
                  >
                </div>
                <div class="control column is-12-desktop">
                  <div class="columns is-mobile" style="margin-left:0px">
                    <label for="email">
                      <b>Digite seu email</b>
                    </label>
                    <span v-if="!email" style="color:red;margin-left:10px">
                      <b>*</b>
                    </span>
                  </div>
                  <input
                    class="input in"
                    type="email"
                    v-model="email"
                    name="email"
                    id="email"
                    placeholder="exemple@example.com"
                  >
                </div>
                <div class="control column is-12-desktop">
                  <div class="columns is-mobile" style="margin-left:0px">
                    <label for="senha">
                      <b>Digite sua senha</b>
                    </label>
                    <span v-if="!password" style="color:red;margin-left:10px">
                      <b>*</b>
                    </span>
                  </div>
                  <input
                    class="input in"
                    type="password"
                    v-model="password"
                    name="password"
                    id="password"
                    placeholder="**************"
                  >
                </div>
                <div class="control column">
                  <button
                    type="submit"
                    class="column btn3 is-6 is-full-mobile is-offset-3"
                  >Registrar</button>
                </div>
              </form>
            </div>
          </div>
        </div><br><br>  
      </div>
    </div><br><br>
  </div>
</template>
<script>
import addProfissional from "@/graphql/mutations/addProfissional.gql";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      notification: "",
      emailRepetido: "",
      nomeMinimo: "",
      senhaMinima: ""
    };
  },
  methods: {
    muda() {
      (this.notification = ""),
        (this.emailRepetido = ""),
        (this.nomeMinimo = ""),
        (this.senhaMinima = "");
    },
    register() {
      if (!this.name || !this.email || !this.password) {
        this.notification = "Opps preencha o formulário corretamente";
      }
      if (this.email && this.name && this.password) {
        this.$apollo
          .mutate({
            mutation: addProfissional,
            variables: {
              name: this.name,
              email: this.email,
              password: this.password
            }
          })
          .then(() => {
            this.$swal({
              title: "Cadastrado com sucesso!",
              text: "Faça o login e seja bem vindo!",
              type: "success",
            });
            this.$router.push("/login");
          })
          .catch(error => {
            if (
              error.graphQLErrors.map(
                message =>
                  (this.emailRepetido = message.extensions.validation.email)
              )
            ) {
              if (this.emailRepetido) {
                this.emailRepetido = "Esse email já foi cadastrado!";
              }
            }
            if (
              error.graphQLErrors.map(
                message =>
                  (this.nomeMinimo = message.extensions.validation.name)
              )
            ) {
              if (this.nomeMinimo) {
                this.nomeMinimo = "O nome precisa de no mínimo 4 caracteres!";
              }
            }
            if (
              error.graphQLErrors.map(
                message =>
                  (this.senhaMinima = message.extensions.validation.password)
              )
            ) {
              if (this.senhaMinima) {
                this.senhaMinima = "A senha precisa de no mínimo 4 caracteres!";
              }
            }
          });
      }
    }
  }
};
</script>
<style>
@import "../../cssFiles/inputsAndButtons.css";

.in {
  width: 100%;
  height: 3.5em;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
.in:focus {
  border: 3px solid rgb(82, 66, 190);
}


.overlay { 
  margin-top:10em;
}
    /*Esconde a dive de classe Overlay caso seja identificado que o width Mobile maximo deseja igual ou menor que 980px*/
    @media only screen and (max-width: 768px){
        .overlay { display: none; }
    }
</style>
