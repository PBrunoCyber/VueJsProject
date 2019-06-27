<template>
  <div class="login">
      <div class="container"> 
          <div class="columns">
            <div class="column is-6-desktop is-6-tablet is-offset-3-tablet is-offset-3-desktop" >
              <div class="column "><br> 
                <h1 class="title is-4 column is-12-desktop is-12-tablet" style="color:hsl(171, 100%, 41%)" align="center"><b>LOGIN</b></h1>
                 <div v-if="this.erros.notification" style="margin-bottom:5px">
                    <div class="notification is-danger column is-12-desktop is-full-mobile">
                        {{this.erros.notification}}
                        <a class="delete" @click.prevent="muda"></a>
                    </div>
                  </div>
                <div class="card-footer column"></div>
                 <form action="" method="POST" @submit.prevent="login">
                    <div class="control column is-12-desktop">
                      <div class="columns is-mobile" style="margin-left:0px">
                        <label for="email"><b>Digite seu email</b></label>
                        <label for="email" v-if="!username" style="margin-left:10px;color:red"><b>*</b></label>
                      </div>
                      <input type="email" class="input inp" v-model="username" placeholder="Type your email" name="username" id="email">
                    </div>
                    <div class="control column is-12-desktop">
                      <div class="columns is-mobile" style="margin-left:0px">
                        <label for="password"><b>Digite sua senha</b></label>
                        <label for="password" v-if="!password" style="margin-left:10px;color:red"><b>*</b></label>
                      </div>
                      <input type="password" class="input inp" v-model="password" name="password" id="password" placeholder="Type your password">
                    </div>
                    <div class="column">
                    <div class="columns">
                      <div class="column is-5-desktop">
                        <label class="checkbox">
                          <input type="checkbox" v-model="remember" value="ok">
                            Lembrar da senha
                        </label>
                      </div>
                      <div class="column" style="text-align:right">Não se cadastrou ainda? Cadastre-se.
                        <div class="columns is-mobile column is-offset-1-desktop is-offset-2-mobile">
                          <div style="text-align:right;margin-right:10px">
                            <router-link to="/registerPro" class="tn is-3 is-full-mobile">Eu sou profissional</router-link>
                          </div>
                          <div style="text-align:right">
                            <router-link to="/registerCli" class="tn is-4 is-full-mobile">Eu sou cliente</router-link>
                          </div>
                        </div>
                      </div>
                    </div>  
                    </div>
                    <div class="control column">
                        <button type="submit" class="column btn2 is-6-desktop is-12-tablet is-offset-3-desktop is-full-mobile">Fazer Login</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    <br><br><br><br>
  </div>
</template>
<script>
import gql from 'graphql-tag'
import {onLogin} from '../vue-apollo.js'
import {Bus} from '../event.js'

export default {
    data(){
        return{
            username:'',
            password:'',
            erros:{
              notification: ""
            },
            remember:""
        }
    },
    created(){
      if(localStorage.getItem('email')){
        this.username = localStorage.getItem('email');
        this.password = localStorage.getItem('senha');
      }
    },
    methods: {
      muda(){
        this.erros.notification = ""
      },
        login() {
            if(!this.username || !this.password){
              this.erros.notification = "Preencha os campos corretamente"
            }
            if(this.username && this.password){
              this.$apollo.mutate({
              mutation: gql`mutation ($data: LoginInput!){
                  login(data: $data){
                      access_token
                  }
              }`,
              variables: {
                  data:{
                      username:this.username,
                      password:this.password
                  }    
              },
              }).then((data) => {
                  onLogin(this.$apollo.provider.defaultClient,data.data.login.access_token);
                  Bus.$emit("logado");
                  if(this.remember === true){
                    localStorage.setItem('email',this.username);
                    localStorage.setItem('senha',this.password);                     
                  }
                  this.$router.push('/page');
              }).catch(() => {
                  this.erros.notification = "Email ou senha estão incorretos!";
              })
            }
        }
    }
}
</script>
<style>
@import '../cssFiles/inputsAndButtons.css';
@import '../cssFiles/checkboxes.scss';

.inp{
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
  border: 3px solid tomato;
}


.font{
  font-family: 'Francois One', sans-serif;
}


.overlay2 { 
  margin-top:3em;
}
    /*Esconde a dive de classe Overlay caso seja identificado que o width Mobile maximo deseja igual ou menor que 980px*/
    @media only screen and (max-width: 768px){
        .overlay { display: none; }
    }
</style>
