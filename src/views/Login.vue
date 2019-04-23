<template>
  <div class="login">
    <div  class="border">
      <div class="container"> 
        <div class="card-content">
          <h1 class="title is-3">LOGIN</h1><br>
          <footer class="card-footer column">
            <form action="" method="POST" @submit.prevent="login">
                <div class="control column is-6 is-offset-3">
                  <label for="email" class="label"><b>Digite seu email</b></label>
                  <input type="email" class="input inp" v-model="username" placeholder="Type your email" name="username" id="email">
                </div>
                <div class="control column is-6 is-offset-3">
                  <label for="password" class="label"><b>Digite sua senha</b></label>                
                  <input type="password" class="input inp" v-model="password" name="password" id="password" placeholder="Type your password">
                </div>
                <div class="control column">
                    <button type="submit" class="column btn-2 is-6 is-full-mobile is-offset-3">Fazer Login</button>
                </div>
            </form>
          </footer>
        </div>
      </div>
        
    </div>
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
            password:''
        }
    },
    methods: {
        login() {
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
                this.$router.push('/page');
            }).catch((error) => {
                console.error(error);
                alert('Email ou senha incorretos!');
            })
        }
    }
}
</script>
<style>
@import '../cssFiles/inputsAndButtons.css';

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



</style>
