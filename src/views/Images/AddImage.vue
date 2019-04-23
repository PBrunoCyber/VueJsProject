<template>
  <div class="login">
    <div  class="border">
        <div class="">
                <h1 class="title is-3 column is-6-desktop is-offset-3">Cadastrar informações<hr></h1>
                    <form action="" method="POST">

                    <div class="control column is-6-desktop is-offset-3 is-full-mobile">
                        <label for="ramo" class="label"><b>Ramo de atividade</b></label>
                        <input type="text" class="input inp" v-model="image.ramo" placeholder="Ex:. Cuido de idosos, Faço reformas" name="ramo" id="ramo">
                    </div>
                    <div class="columns">
                        <div class=" column is-offset-3 is-3-desktop is-full-mobile">    
                            <li class="column">
                                <label for="ramo" class="label"><b>Cidade</b></label>
                                <input type="text" class="input inp" v-model="image.cidade" placeholder="Ex:. Floriano" name="cidade" id="ramo">
                            </li>
                        </div>
                        <div class=" column is-3-desktop is-full-mobile">
                            <li class="column">
                                <label for="estado" class="label"><b>Estado</b></label>
                                <input type="text" class="input inp" v-model="image.estado" placeholder="Ex:. Piauí" name="estado" id="estado">
                            </li>
                        </div>                        
                    </div>
                    <div class="columns">
                        <div class="control column is-3-desktop is-offset-3  is-full-mobile">
                            <li class="column">
                                <label for="logradouro" class="label"><b>Endereco/Logradouro</b></label>
                                <input type="text" class="input inp column" v-model="image.logradouro" placeholder="Ex:. Rua São João, 29" name="logradouro" id="logradouro">
                            </li>
                        </div>
                        <div class="control column is-3-desktop  is-full-mobile">
                            <li class="column">
                                <label for="telefone" class="label"><b>Telefone</b></label>
                                <input type="text" class="input inp column" v-model="image.telefone" placeholder="Ex:. (48) 99424-21419" name="telefone" id="telefone">
                            </li>
                        </div>    
                    </div>
                    
                    <div class="control column is-6-desktop is-offset-3 is-full-mobile">
                        <label for="descricao" class="label"><b>Descrição</b></label>
                        <textarea name="descricao" id="descricao" class="textarea inp1" v-model="image.descricao" placeholder="Digite suas especialidades, formações ou metas, sua idade etc" cols="20" rows="5"></textarea>
                    </div>
                    <div class="columns">
                        <div class="column control is-3-desktop is-offset-3 is-12-mobile">
                                <div class="column">
                                    <label for="foto" class="label"><b>Foto do perfil (opcional)</b></label>
                                    <figure>
                                        <img src="http://kbae.com.au/images/no_user_image.png" width="200" height="200" id="preview"/>
                                    </figure> 
                                    <div class="file has-name is-boxed is-primary is-full-mobile"> 
                                        <label class="file-label">  
                                            <span class="file-cta">
                                                <input class="file-input" type="file" id="imgChooser" @change="imageChanged">
                                                <span class="file-icon">
                                                    <i class="fas fa-upload"></i>
                                                </span>
                                                <span class="file-label">
                                                    Escolher foto
                                                </span>
                                            </span>
                                        </label>
                                    </div>  
                                </div>
                        </div>
                         <div class="control column is-12-desktop is-full-mobile">
                            <div class="field column">
                                <div class="control">
                                    <ApolloQuery :query="require('@/graphql/queries/categories.gql')" >
                                        <template slot-scope="{ result: { data, loading },isLoading }">
                                            <div v-if="isLoading">Loading...</div>
                                            <div v-else>
                                                <label for="categoria" class="label"><b>Selecione a categoria de seu serviço</b></label>
                                                <div class="select">
                                                    <select class="column is-12-desktop" v-model="image.category_id" name="id_category">
                                                        <option href="#" v-for="cat of data.categories" :key="cat.id"
                                                        :value=cat.id>{{cat.name}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </template>
                                    </ApolloQuery>
                                </div>
                            </div>
                        </div> 
                    </div>
                        <div class="control column">
                            <button @click.prevent="create" class="column is-6-desktop is-offset-3 is-full-mobile btn-3">Cadastra Informações</button>
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


export default {
    data(){
        return{
          image:{
            ramo: '',
            cidade:'',
            estado: '',
            logradouro: '',
            descricao: '',
            imagem: '',
            telefone: '',
            user_id: this.$route.params.id,
            category_id: null
          } 
        }
    },
    methods: {
        imageChanged(e){
            console.log(e.target.files[0]);
            var fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0]);

            fileReader.onload = (e) =>{
                this.image.imagem = e.target.result;
                document.getElementById("preview").src = e.target.result;
            }
            console.log(this.image);
            
        },
        create(){
            window.axios.post('api/imagems', this.image)
            .then(response=>{
                console.log(response);
                this.$router.push('/page');
            });
        },
        

    }
}
</script>
<style>
@import '../../cssFiles/inputsAndButtons.css';

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

.inp1{
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
