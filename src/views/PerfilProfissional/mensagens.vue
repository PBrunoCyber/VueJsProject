<template>
    <div v-if="this.ping">
      <div v-if="this.ping.imageForUserId">
        <img src="../../assets/frontendimages/background5.png" data-aos="slide-down" data-aos-duration="1000" alt="" style="position:absolute;top:0;width:100%;height:auto;max-width:100%;z-index:-1">
        <!-- BREADCRUMB -->
        <nav class="breadcrumb column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet" style="font-weight:bold;color:black" aria-label="breadcrumbs">
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

        <!-- TITULO -->
        <div class="title is-2 column is-6-desktop is-offset-3-desktop is-10-tablet is-offset-1-tablet" style="font-weight:bold;color:black" align="center">Abaixo estão as mensagens para você!</div>
        <br><br>

        <!-- MENSAGENS -->
        <ApolloQuery
        :query="require('@/graphql/queries2/mensagem2.gql')"
        :variables="{user_recebe:this.ping.imageForUserId[0].id,count:this.count,page:this.page}"
      >
            <template slot-scope="{ result: { data, loading },isLoading }">
            <div v-if="isLoading">Loading...</div>
            <div v-else>
                <div v-if="data">
                    <div v-for="send of data.mensagemUserRecebe.data" :key="send.id">
                        <div class="columns is-mobile column">
                            <div class="column is-1-desktop is-1-tablet is-offset-1-tablet is-offset-1-desktop is-2-mobile">
                                <figure>
                                    <img class="img" width="100%" :src="`http://graphql.me/perfilcli/${send.user_envia.imagem}`" alt="conver image">
                                </figure>
                            </div>
                            <div class="column is-9-desktop is-9-tablet is-10-mobile box">
                                <div class="columns is-mobile column">
                                    <div class="column is-4-desktop is-5-tablet is-8-mobile"><div style="font-size:10pt">{{send.user_envia.user.name}}</div></div>
                                    <div class="column is-offset-6-desktop" style="bottom:0" align="center">
                                      <div v-if="!send.resposta[0]"><button @click.prevent="mudar(send.id,send.user_envia.id,send.user_envia.user.name,ping.imageForUserId[0].id)"><span class="tag is-primary column is-12-desktop" style="margin-left:10px;color:black"><i class="material-icons" style="font-size:12pt;margin-right:5px">send</i>Responder</span></button></div>
                                      <div class="" v-if="send.resposta[0]"><button @click.prevent="mudar(send.id,send.user_envia.id,send.user_envia.user.name,ping.imageForUserId[0].id)"><span class="tag is-primary column is-12-desktop" onmouseover="this.style.backgroundColor='hsl(171, 100%, 46%)'" onmouseout="this.style.backgroundColor='hsl(171, 100%, 41%)'" style="margin-left:10px;color:black"><i class="material-icons" style="font-size:12pt;margin-right:5px">send</i>Mandar outra</span></button></div>
                                      <div class=""><button @click.prevent="verdetalhes(send.proposta_categoria.id)"><span  class="tag column is-12-desktop" onmouseover="this.style.backgroundColor='hsl(273, 100%, 68%)'" onmouseout="this.style.backgroundColor='hsl(273, 100%, 50%)'" style="margin-left:10px;color:white;background:hsl(273, 100%, 50%)"><i class="material-icons" style="font-size:12pt;margin-right:5px">sms</i>Ver detalhes</span></button></div>
                                    </div>
                                </div>                          
                                <!-- <div style="font-size:10pt;margin-top:-25px;margin-bottom:30px">{{send.date}}</div>  -->
                                <div class="column is-10-desktop is-8-mobile" style="font-family:calibri;font-size:13pt;margin-top:-80px;text-align:justify"><b>{{send.mensagem}}</b></div>
                            </div>
                            <!-- remove_red_eye -->
                        </div>

                        <!-- Modal Enviar resposta -->
                        <div id="modal" class="modal-a">
                          <div :class="`modal is-active`">
                            <div class="modal-background" @click="fechar()"></div>
                              <div class="modal-card">
                                <header class="modal-card-head">
                                  <div class="modal-card-title">
                                    <b>Mandar resposta</b>
                                  </div>
                                  <a class="delete" aria-label="close" @click="fechar()"></a>
                                </header>
                                <section style="background:white" class="modal-card-body">
                                  <div class="title is-3 column is-10-desktop is-10-tablet is-offset-1-tablet is-offset-1-desktop" align="center"><div>Envie uma resposta para </div>{{name}}</div>
                                    <form action="" method="POST">
                                      <textarea class="textarea inp" v-model="envia_resposta" placeholder="Alguma dúvida ou quer marcar algo? Escreva aqui!" rows="7"></textarea><br>     
                                      <button class="column is-12-desktop is-12-tablet is-full-mobile btn2" style="border-radius:100px" @click.prevent="enviarResposta()"><i class="material-icons" style="margin-right:10px">send</i>Enviar</button>
                                    </form>
                                </section><br>
                              </div>
                            </div> 
                        </div>

                        <!-- Modal Ver Detalhes -->
                        <div id="verdetalhes" class="modal-b">
                          <div :class="`modal is-active`">
                            <div class="modal-background" @click="ocultardetalhes()"></div>
                              <div class="modal-card">
                                <header class="modal-card-head" style="background:white">
                                  <div class="modal-card-title">
                                    Mais informações
                                  </div>
                                  <a class="delete" aria-label="close" @click="ocultardetalhes()"></a>
                                </header>
                                <section style="background:white" class="modal-card-body">
                                  
                                    <ApolloQuery
                                      :query="require('@/graphql/queries2/propostaCategory.gql')"
                                      :variables="{id:proposta_categoria}"
                                    >
                                    <template slot-scope="{ result: { data, loading },isLoading }">
                                        <div v-if="isLoading">Loading...</div>
                                        <div v-else>
                                            <div v-if="data">
                                                <div v-for="prop of data" :key="prop.id">
                                                <article class="message is-primary">
                                                  <div class="message-body">
                                                    <div class="title is-4 column is-10-desktop is-10-tablet is-offset-1-tablet is-offset-1-desktop" style="text-align:justify" align="center">Essa mensagem se refere a proposta enviada pelo(a) {{prop.user_envia.user.name}}:</div>
                                                  </div>
                                                </article><br>
                                                <div class="columns is-mobile">
                                                <div class="column is-3-desktop is-4-tablet is-4-mobile" align="center">
                                                  <figure>
                                                    <img class="img" width="50%" :src="`http://graphql.me/perfilcli/${prop.user_envia.imagem}`" alt="conver image">
                                                  </figure>
                                                  <div class="column">
                                                    <div>{{prop.user_envia.user.name}}</div>
                                                  </div>
                                                </div>
                                                <div class="column is-9-desktop is-8-tablet">
                                                  <div style="font-size:14pt"><b>{{prop.titulo}}</b></div>
                                                  <!-- STATUS E INFORMAÇÕES -->
                                                    <div>
                                                      <div v-if="prop.status===0">
                                                        <div class="tag is-warning" style="font-size:10pt;color:black">Aberto</div>
                                                        {{prop.date}}
                                                      </div>
                                                      <div v-if="prop.status===1">
                                                        <div class="tag is-success" style="font-size:10pt;background:hsl(141, 71%, 48%);color:white">Pedido aceito :)</div>
                                                        {{prop.date}}
                                                      </div>
                                                      <div v-if="prop.status===2">
                                                        <b class="tag is-success" style="font-size:10pt;background:hsl(141, 71%, 48%);color:white">Pedido fechado e em andamento!</b>
                                                        {{prop.date}}
                                                      </div>
                                                        <div v-if="prop.status ===4">
                                                          <ApolloQuery :query="require('@/graphql/queries/lanceProposta.gql')" :variables="{proposta:prop.id,user:ping.imageForUserId[0].id}">
                                                            <template slot-scope="{ result: { data, loading },isLoading }">
                                                              <div v-if="isLoading">Loading...</div>
                                                              <div v-else>
                                                                <div v-if="data">
                                                                  <div v-if="prop.status === 4">
                                                                    <div
                                                                      v-if="(prop.user_aceito.id === ping.imageForUserId[0].id)"
                                                                    >
                                                                      <div
                                                                        class="tag"
                                                                        style="font-size:10pt;background:rgb(98, 0, 49);color:white;margin-right:5px"
                                                                      >
                                                                        <b>Você foi avaliado!</b>
                                                                      </div>
                                                                      {{prop.date}}
                                                                    </div>
                                                                    <div v-else>
                                                                      <div
                                                                        class="tag"
                                                                        style="font-size:10pt;background:rgb(98, 0, 49);color:white;margin-right:5px"
                                                                      >
                                                                        <b>Finalizado com avaliação!</b>
                                                                      </div>
                                                                      {{prop.date}}
                                                                    </div>
                                                                  </div>
                                                                  <div v-if="prop.status === 3">
                                                                    <div
                                                                      v-if="(prop.user_aceito.id === ping.imageForUserId[0].id)"
                                                                    >
                                                                      <div
                                                                        class="tag"
                                                                        style="font-size:10pt;background:rgb(99, 74, 110);color:white;margin-right:5px"
                                                                      >
                                                                        <b>Voçê finalizou esse serviço!</b>
                                                                      </div>
                                                                      {{prop.date}}
                                                                    </div>
                                                                    <div v-else>
                                                                      <div
                                                                        class="tag"
                                                                        style="font-size:10pt;background:rgb(99, 74, 110);color:white;margin-right:5px"
                                                                      >
                                                                        <b>Finalizado sem avaliação!</b>
                                                                      </div>
                                                                    </div>
                                                                    {{prop.date}}
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </template>
                                                          </ApolloQuery>
                                                        </div>
                                                      </div>
                                                      <div style="margin-top:20px"></div>
                                                      <div class="columns is-mobile">
                                                        <div class="column is-5-desktop"><b>Valor: </b>{{prop.valor}}</div>
                                                        <div class="column"><b>Pra quando? </b>{{prop.tempo}}</div>
                                                      </div>
                                                      <div class="columns is-mobile">
                                                        <div class="column is-6-desktop"><b>Local: </b>{{prop.local}}</div>
                                                        <div class="column"><b>Tipo: </b>{{prop.tipo}}</div>
                                                      </div>
                                                    </div>
                                                    
                                                  </div>
                                                  <!-- <div class="column card-footer"></div> -->
                                                  <div>
                                                    <div class="column" style="text-align:justify"><b>Descrição: </b>{{prop.descricao}}</div>
                                                  </div>
                                                </div>
                                            </div>
                                          </div>
                                        </template>
                                      </ApolloQuery>
                                    <br><br>
                                </section><br>
                              </div>
                            </div> 
                        </div>

                        <!-- Mostrar as respostas -->
                        <div v-for="resposta of send.resposta" :key="resposta.id">
                            <div class="columns is-mobile column" v-if="resposta!==null">
                                <div class="column is-6-desktop is-offset-4-desktop is-offset-4-tablet is-6-tablet is-9-mobile is-offset-1-mobile box">
                                  <div class="column is-8-desktop is-8-tablet is-8-mobile is-offset-7-desktop is-offset-5-tablet"><div style="font-size:10pt">Resposta para > {{resposta.mensagem.user_envia.user.name}}</div></div>
                                  <div class="column" style="font-family:calibri;font-size:13pt;margin-top:-20px"><b>{{resposta.reply}}</b></div>                            
                                </div>
                                <div class="column is-1-desktop is-1-tablet is-2-mobile">
                                  <figure>
                                    <img class="img" width="80%" :src="`http://graphql.me/imagem/${resposta.user_envia.imagem}`" alt="conver image">
                                  </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- PAGINAÇÃO -->
                <div v-if="data && data.mensagemUserRecebe.data">
                  <div class="columns is-mobile column level-item" v-if="data.mensagemUserRecebe.data[0]">
                    <!-- VOLTAR -->
                    <div v-if="data.mensagemUserRecebe.paginatorInfo.currentPage !== 1">
                      <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="anterior()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_left</i></a>
                    </div>
                    <div v-else>
                      <i class="material-icons" style="margin-top:5px;margin-right:5px">keyboard_arrow_left</i>
                    </div>
                    <!-- FOR PARA PERCORRER E MOSTAR AS PAGINAS -->
                    <div v-for="p of data.mensagemUserRecebe.paginatorInfo.lastPage" :key="p.id">
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
                    <b style="margin-top:15px;margin-left:5px;margin-right:5px" v-if="data.mensagemUserRecebe.paginatorInfo.lastPage > 11">... </b>
                    <div v-if="data.mensagemUserRecebe.paginatorInfo.lastPage > 10">
                      <div v-if="page === data.mensagemUserRecebe.paginatorInfo.lastPage">
                        <a class="button" style="margin:5px;background:rgb(71, 71, 71);color:white">{{data.mensagemUserRecebe.paginatorInfo.lastPage}}</a>
                      </div>
                      <div v-else>
                        <a class="button button-solicita" style="margin:5px" @click.prevent="ultimaPagina(data.mensagemUserRecebe.paginatorInfo.lastPage)">{{data.mensagemUserRecebe.paginatorInfo.lastPage}}</a>
                      </div>
                    </div>
                    <!-- PRÓXIMO -->
                    <div v-if="data.mensagemUserRecebe.paginatorInfo.hasMorePages">
                      <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="proximo()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_right</i></a>
                    </div>
                    <div v-else>
                      <i class="material-icons" style="margin-top:5px;margin-left:5px">keyboard_arrow_right</i>
                    </div>
                  </div>
                </div>
                <!-- SE NÃO TIVER ENVIADO A MENSAGEM -->
                <div v-if="data">
                <div v-if="data.mensagemUserRecebe.data && !data.mensagemUserRecebe.data[0]" class="column box is-6-desktop is-10-mobile is-offset-1-mobile is-6-tablet is-offset-3-tablet is-offset-3-desktop"
                  style="border:1px solid black">
                    <article>
                      <div>
                        <div style="color:black;text-transform:uppercase"
                          align="center"
                        ><b>Não há mensagens para você ainda!</b></div>
                      </div>
                    </article>
                  </div>
                </div>
                <!-- <div v-if="data">
                    <div v-if="data.mensagemUserRecebe.data && !data.mensagemUserRecebe.data[0]">
                        <div class="column is-10-desktop is-10-tablet is-offset-1-tablet is-offset-1-desktop">
                            <article class="message">
                                <div class="message-body">
                                <div
                                    class="title is-5"
                                    align="center"
                                ></div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div> -->
                <br><br><br><br>
            </div>
            </template>
        </ApolloQuery>
      </div><div style="display:nome">{{informacoes.mensagem_id}}{{informacoes.user_envia_id}}{{informacoes.user_recebe_id}}</div>
    </div>
</template>

<script>

import gql from "graphql-tag";
import resposta from "@/graphql/mutations/resposta.gql"

export default { 
    data(){
      return{
        me:null,
        cli:[],
        ping: null,
        count:10,
        page:1,
        modal:"",
        envia_resposta:"",
        date:"",
        mensagem_id:"",
        informacoes:{
          mensagem_id:"",
          user_envia_id:"",
          user_recebe_id:""
        },
        proposta_categoria:"",
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
      }
    `,
    ping: {
      query: gql`
        query($id: Int!) {
          imageForUserId(user_id: $id) {
            id
            imagem
            ramo
            cidade
            estado
            descricao
            logradouro
            telefone
            user {
              name
            }
            category {
              id
              name
              image
            }
          }
        }
      `,
      variables() {
        if (this.me) {
          return {
            id: this.me.id
          };
        }
      },
      update(data) {
        // Bus.$emit('ok',data.imageForUserId[0].id);
        if (data) {
          this.ping = data;
          return this.ping;
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
      mudar(mensagem_id,user_envia_id,name,user_recebe_id) {
        this.name = name;
        this.informacoes.mensagem_id = mensagem_id;
        this.informacoes.user_envia_id = user_envia_id;
        this.informacoes.user_recebe_id = user_recebe_id;
        document.getElementById("modal").style.opacity = 1;
        document.getElementById("modal").style.visibility = "visible";
      },
      fechar() {
        this.name = "";
        this.informacoes.mensagem_id = "";
        this.informacoes.user_envia_id = "";
        this.informacoes.user_recebe_id = ""
        document.getElementById("modal").style.opacity = 0;
        document.getElementById("modal").style.transition = "0.5s";
        document.getElementById("modal").style.visibility = "hidden";
      },
      enviarResposta(){
        if (!this.envia_resposta) {
          this.$swal({type:"warning",title:"Escreva uma mensagem!"});
        }else{
          this.$apollo
            .mutate({
              mutation:resposta,
              variables:{
                reply: this.envia_resposta,
                date:this.date,
                user_envia_id:this.informacoes.user_envia_id,
                user_recebe_id:this.informacoes.user_recebe_id,
                mensagem_id:this.informacoes.mensagem_id
              }
            })
            .then(() => {
              this.$swal({
                title: "Mensagem enviada com sucesso!",
                text:"A mensagem foi enviada para o cliente, logo ele vai ficar sabendo!",
                type: "success",
                showCancelButton: true,
                confirmButtonText: "Mandar outra",
                cancelButtonText: "Minhas mensagens",
                confirmButtonColor: "hsl(204, 86%, 53%)",
                cancelButtonColor: "hsl(217, 71%, 53%)",
                showCloseButton: true,
              }).then(result => {
                if (result.value) {
                  this.envia_resposta = "";
                }else{
                  window.location.reload();
                }
              });
            }).catch(error => {
              console.error(error);
            });
      }
    },
    envia(id){
      console.log(id);
    },
    verdetalhes(id){
      this.proposta_categoria = id;
      document.getElementById("verdetalhes").style.opacity = 1;
      document.getElementById("verdetalhes").style.visibility = "visible";
    },
    ocultardetalhes(){
      this.proposta_categoria = "";
      document.getElementById("verdetalhes").style.opacity = 0;
      document.getElementById("verdetalhes").style.transition = "0.5s";
      document.getElementById("verdetalhes").style.visibility = "hidden";      
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


.modal-a{
  opacity:0;
  visibility: hidden;
  transition: 0.3s;
}

.modal-b{
  opacity:0;
  visibility: hidden;
  transition: 0.3s;
}

.details{
    color:rgb(0, 214, 132);
}

.details:hover{
    color:blue;
}

.button-solicita{
  background: rgb(0, 214, 132);
  font-weight: bold;
  color:white;
}
.button-solicita:hover{
  color:white;
}

</style>
