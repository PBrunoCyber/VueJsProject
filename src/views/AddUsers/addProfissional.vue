<template>
  <div class="registerPro">
    <div class="container">
        <div class="card-content">
          <h2 class="title is-3">CADASTRE-SE PARA PRESTAR SERVIÇOS!</h2><br>
          <footer class="card-footer column">
            <form action="" method="POST" @submit.prevent="register">
              <div class="control column is-6 is-offset-3">
                  <label for="name" class="label"><b>Digite seu nome</b></label>
                  <input  class="input in" type="text" v-model="name" name="name" id="name" placeholder="Ex: John Wick">
              </div>
              <div class="control column is-6 is-offset-3">
                  <label for="email" class="label"><b>Digite seu email</b></label>
                  <input class="input in" type="email" v-model="email" name="email" id="email" placeholder="exemple@example.com">
              </div>
              <div class="control column is-6 is-offset-3">
                  <label for="password" class="label"><b>Digite sua senha</b></label> 
                  <input class="input in" type="password" v-model="password" name="password" id="password" placeholder="**************">
              </div>
              <div class="control column">
                  <button type="submit" class="column btn-3 is-6 is-full-mobile is-offset-3">Registrar</button>
              </div>
            </form>
          </footer>
        </div>       
    </div>
  </div>
</template>
<script>

import addProfissional from '@/graphql/mutations/addProfissional.gql'
export default {
    data(){
        return{
            name: '',
            email:'',
            password:''
        }
    },
    methods: {
        register() {
            this.$apollo.mutate({
            mutation: addProfissional,
            variables: {
                name: this.name,
                email:this.email,
                password:this.password  
            },
            }).then(() => {
                this.$router.push('/login');
            }).catch((error) => {
                console.error(error);
                alert('Houve algum erro no registro!');
            })
        }
    }
}
</script>
<style>
@import '../../cssFiles/inputsAndButtons.css';

.in{
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
</style>
