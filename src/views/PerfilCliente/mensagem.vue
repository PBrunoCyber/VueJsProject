<template>
    <div v-if="this.cli.clientForUserId">
    <img src="../../assets/frontendimages/background5.png" data-aos="slide-down" data-aos-duration="1000" alt="" style="position:absolute;top:0;width:auto;height:auto;max-width:100%;z-index:-1">

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
            <li class="is-active">     
                <a>
                    <span class="icon is-small">
                    <i class="material-icons" aria-hidden="true">send</i>
                    </span>
                    <span>Mensagem</span>
                </a>
            </li>
        </ul>
        </nav>

        <!-- TITULO --><br> 
        <div class="title is-2 column is-10-desktop is-offset-1-desktop is-10-tablet is-offset-1-tablet" style="color:black;text-transform:uppercase;font-size:25pt" align="center">Abaixo estão suas mensagens</div>
        <br><br>
        <!-- MENSAGENS -->
        <ApolloQuery
        :query="require('@/graphql/queries2/mensagem.gql')"
        :variables="{user_envia:this.cli.clientForUserId[0].id,count:this.count,page:this.page}"
      >
            <template slot-scope="{ result: { data, loading },isLoading }">
            <div v-if="isLoading">Loading...</div>
            <div v-else>
                <div v-if="data">
                    <div v-for="send of data.mensagemUserEnvia.data" :key="send.id">
                        <div class="columns is-mobile column">
                            <div class="column is-1-desktop is-1-tablet is-offset-1-tablet is-offset-1-desktop is-2-mobile">
                                <figure>
                                    <img class="img" width="100%" :src="`http://graphql.me/perfilcli/${send.user_envia.imagem}`" alt="conver image">
                                </figure>
                            </div>
                            <div class="column is-8-desktop is-8-tablet is-8-mobile">
                                <div class="columns is-mobile">
                                    <div class="column is-4-desktop is-8-tablet is-10-mobile"><div style="font-size:10pt">Mensagem para > {{send.user_recebe.user.name}}</div></div>
                                    <div v-if="!send.resposta[0]" class="column is-offset-8-desktop is-offset-3-tablet is-offset-0-mobile"><span class="tag is-warning column" style="margin-left:10px;color:black"><b>Sem Resposta</b></span></div>
                                    <!-- Conta as respostas -->
                                    <div v-if="send.resposta[0]" class="column is-offset-8-desktop is-offset-3-tablet is-offset-0-mobile">
                                        <span class="tag is-success column" style="margin-left:10px;color:black">
                                            <ApolloQuery :query="require('@/graphql/queries2/countResposta.gql')" :variables="{mensagem:send.id}">
                                                <template slot-scope="{ result: { data, loading },isLoading }">
                                                    <div v-if="isLoading">Loading...</div>
                                                    <div v-else>
                                                        <div v-if="data">
                                                            <div v-if="data.countResposta > 1"><b>{{data.countResposta}} respostas</b></div>
                                                            <div v-else><b>{{data.countResposta}} resposta</b></div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </ApolloQuery>    
                                        </span>
                                    </div>
                                 </div>
                                <div style="font-family:calibri;font-size:13pt;margin-top:-20px" ><b>{{send.mensagem}}</b></div>
                            </div>
                        </div>
                        <div class="overlay4">
                            <br>
                        </div> 
                        <div  style="margin-bottom:20px">
                            <div v-for="resposta of send.resposta" :key="resposta.id" style="margin-top:-40px">
                                <div class="columns is-mobile column" v-if="resposta!==null">   
                                    <div class="column is-6-desktop is-offset-4-desktop is-offset-2-tablet is-8-tablet is-offset-1-mobile is-9-mobile box">
                                        <div class="column is-8-desktop is-5-tablet is-7-mobile is-offset-9-desktop is-offset-8-mobile"><div style="font-size:10pt">{{resposta.mensagem.user_recebe.user.name}}</div></div>
                                        <div class="column" style="font-family:calibri;font-size:13pt;margin-top:-20px"><b>{{resposta.reply}}</b></div>                            
                                        <div class="column is-offset-10-desktop is-offset-9-mobile" style="font-family:calibri;font-size:11pt;margin-top:-35px"><button style="color:hsl(217, 71%, 53%)" @click.prevent="responder(send.proposta_categoria.id,cli.clientForUserId[0].id,resposta.user_envia.id,resposta.user_envia.user.name)"><b>Responder</b></button></div>
                                    </div> 
                                    <div class="column is-1-desktop is-1-tablet is-2-mobile">
                                        <figure>
                                            <img class="img" width="80%" :src="`http://graphql.me/imagem/${resposta.user_envia.imagem}`" alt="conver image">
                                        </figure>                        
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="column card-footer is-10-desktop is-offset-1-desktop is-10-tablet is-offset-1-tablet"></div>         
                    </div>
                </div>
                <!-- Modal Enviar resposta -->
                <div id="responder" class="modal-a">
                    <div :class="`modal is-active`">
                        <div class="modal-background" @click="ocultarResponder()"></div>
                        <div class="modal-card">
                            <header class="modal-card-head">
                                <div class="modal-card-title">
                                <b>Mandar resposta</b>
                                </div>
                                <a class="delete" aria-label="close" @click="ocultarResponder()"></a>
                            </header>
                            <section style="background:white" class="modal-card-body">
                                <div class="title is-3 column is-10-desktop is-10-tablet is-offset-1-tablet is-offset-1-desktop" align="center"><div>Envie uma resposta para </div>{{name}}</div>
                                <form action="" method="POST">
                                    <textarea class="textarea inp" v-model="envia_resposta" placeholder="Alguma dúvida ou quer marcar algo? Escreva aqui!" rows="7"></textarea><br>     
                                    <button class="column is-12-desktop is-12-tablet is-full-mobile btn2" style="font-size:12pt;border-radius:100px" @click.prevent="enviarResposta()"><i class="material-icons" style="margin-right:10px;padding-bottom:10px">send</i>Enviar</button>
                                </form>
                            </section><br>
                        </div>
                    </div> 
                </div>                
                <!-- PAGINAÇÃO -->
                <div v-if="data && data.mensagemUserEnvia.data">
                  <div class="columns is-mobile column level-item" v-if="data.mensagemUserEnvia.data[0]">
                    <!-- VOLTAR -->
                    <div v-if="data.mensagemUserEnvia.paginatorInfo.currentPage !== 1">
                      <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="anterior()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_left</i></a>
                    </div>
                    <div v-else>
                      <i class="material-icons" style="margin-top:5px;margin-right:5px">keyboard_arrow_left</i>
                    </div>
                    <!-- FOR PARA PERCORRER E MOSTAR AS PAGINAS -->
                    <div v-for="p of data.mensagemUserEnvia.paginatorInfo.lastPage" :key="p.id">
                      <!-- SÓ MOSTRA OS 10 PRIMEIROS NÚMEROS PARA NÃO POLUIR A TELA -->
                      <div v-if="p <= 10">
                        <div class="" v-if="page === p">  
                          <a class="button" style="margin:5px;background:rgb(71, 71, 71);color:white"><b>{{p}}</b></a>
                        </div>
                        <div v-else>
                          <a class="button button-solicita" style="margin:5px" @click.prevent="paginaComNumero(p)">{{p}}</a>
                        </div>
                      </div>
                    </div>
                    <!-- TRES PONTOS COM ULTIMA PAGINA -->
                    <b style="margin-top:15px;margin-left:5px;margin-right:5px" v-if="data.mensagemUserEnvia.paginatorInfo.lastPage > 11">... </b>
                    <div v-if="data.mensagemUserEnvia.paginatorInfo.lastPage > 10">
                      <div v-if="page === data.mensagemUserEnvia.paginatorInfo.lastPage">
                        <a class="button" style="margin:5px;background:rgb(71, 71, 71);color:white">{{data.mensagemUserEnvia.paginatorInfo.lastPage}}</a>
                      </div>
                      <div v-else>
                        <a class="button button-solicita" style="margin:5px" @click.prevent="ultimaPagina(data.mensagemUserEnvia.paginatorInfo.lastPage)">{{data.mensagemUserEnvia.paginatorInfo.lastPage}}</a>
                      </div>
                    </div>
                    <!-- PRÓXIMO -->
                    <div v-if="data.mensagemUserEnvia.paginatorInfo.hasMorePages">
                      <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="proximo()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_right</i></a>
                    </div>
                    <div v-else>
                      <i class="material-icons" style="margin-top:5px;margin-left:5px">keyboard_arrow_right</i>
                    </div>
                  </div>
                </div>
                
                <!-- SE NÃO TIVER ENVIADO A MENSAGEM -->
                <div v-if="data && data.mensagemUserEnvia">
                        <div v-if="!data.mensagemUserEnvia.data[0]">
                            <div class="column is-10-desktop is-10-tablet is-offset-1-tablet is-offset-1-desktop">
                                <article class="message">
                                    <div class="message-body">
                                    <div
                                        class="title is-5"
                                        align="center"
                                    >Você ainda não mandou uma mensagem a ninguem!</div>
                                    </div>
                                </article>
                            </div>
                        </div>
                </div>
                <br><br><br><br>
            </div>
            </template>
        </ApolloQuery>
    </div>
</template>

<script>
import gql from "graphql-tag";
import clientForUserId from "@/graphql/queries/clientForUserId.gql";
import mensagem from "@/graphql/mutations/mensagem.gql"

export default { 
    data(){
        return{
            me:null,
            cli:[],
            count:10,
            page:1,
            modal:"",
            mensagem_id:"",
            envia_resposta:"",
            name:""
        }
    },
    apollo: {
        me: gql`
        query {
            me {
                id
                name
                email
                status
            }
        }`,
        cli: {
            query: clientForUserId,
            variables() {
                if (this.me) {
                    return {
                        user_id: this.me.id
                    };
                }
            },
            update(data) {
                if (data) {
                    this.cli = data;
                    return this.cli;
                }
            }
        }
    },
    methods:{
        paginaComNumero(id){
            this.page = id;
        },
        proximo(){
            this.page +=1;
        },
        anterior(){
            this.page-=1;
        },
        ultimaPagina(inteiro){
            this.page = inteiro;
        },
        mudar(id) {
            this.mensagem_id = id;
            this.modal = "is-active";
            document.getElementById("modal").style.opacity = 1;
            document.getElementById("modal").style.visibility = "visible";
        },
        fechar() {
            this.mensagem_id = "";
            document.getElementById("modal").style.opacity = 0;
            document.getElementById("modal").style.transition = "0.5s";
            document.getElementById("modal").style.visibility = "hidden";
        },
        responder(proposta_id,user_envia_id,user_recebe_id,nome){
            this.proposta_id = proposta_id;
            this.user_envia_id = user_envia_id;
            this.user_recebe_id = user_recebe_id;
            this.name = nome;
            document.getElementById("responder").style.opacity = 1;
            document.getElementById("responder").style.visibility = "visible";            
        },
        ocultarResponder(){
            this.proposta_id = "";
            this.user_envia_id = "";
            this.user_recebe_id = "";
            this.nome = "";
            document.getElementById("responder").style.opacity = 0;     
            document.getElementById("responder").style.transition = "0.5s";
            document.getElementById("responder").style.visibility = "hidden";
        },
        enviarResposta(){
        if (!this.envia_resposta) {
            this.$swal({type:"warning",title:"Escreva uma mensagem!"});
        }else{
            this.$apollo
            .mutate({
                mutation: mensagem,
                variables:{
                    mensagem: this.envia_resposta,
                    date:this.date,
                    user_envia_id:this.user_envia_id,
                    user_recebe_id:this.user_recebe_id,
                    proposta_categoria_id:this.proposta_id
                }
            })
            .then(() => {
                this.$swal({
                title: "Mensagem enviada com sucesso!",
                text:
                    "O(A) profissional recebeu sua mensagem espere ele responder ou mande outra mensagem!",
                type: "success",
                showCancelButton: true,
                confirmButtonText: "Mandar outra",
                cancelButtonText: "Minhas mensagens",
                confirmButtonColor: "hsl(204, 86%, 53%)",
                cancelButtonColor: "hsl(217, 71%, 53%)",
                showCloseButton: true,
                showLoaderOnConfirm: true
                }).then(result => {
                if (result.value) {
                    this.envia_resposta = "";
                }else{
                    window.location.reload();
                }
                });
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
}
</script>
<style>
@import "../../cssFiles/inputsAndButtons.css";
@import "../../cssFiles/input.css";

.img{
    border-radius: 100px;
}

.eye{
    color:hsl(263, 98%, 43%);
}

.eye:hover{
    color:blue;
}

.details{
    color:rgb(0, 214, 132);
}

.details:hover{
    color:blue;
}

.modal-a {
  opacity:0;
  visibility: hidden;
  transition: 0.3s;
}

.button-solicita{
  background: rgb(0, 214, 132);
  font-weight: bold;
  color:white;
}
.button-solicita:hover{
  color:white;
}

.overlay3 {
  margin-top: 0px;
}
/*Esconde a dive de classe Overlay caso seja identificado que o width Mobile maximo deseja igual ou menor que 980px*/
@media only screen and (max-width: 768px) {
  .overlay3 {
    display: none;
  }
}

.overlay4 {
  margin-top: -4px;
}
/*Esconde a dive de classe Overlay caso seja identificado que o width Mobile maximo deseja igual ou menor que 980px*/
@media only screen and (min-width: 770px) {
  .overlay4 {
    display: none;
  }
}

</style>
