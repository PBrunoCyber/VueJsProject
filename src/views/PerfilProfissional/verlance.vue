<template>
  <div class="ver lance">
    <!-- BREADCRUMB -->
    <img src="../../assets/frontendimages/background5.png" data-aos="slide-down" data-aos-duration="1000" alt="" style="position:absolute;top:0;width:auto;height:auto;max-width:100%;z-index:-1">

    <nav
      class="breadcrumb column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet"
      aria-label="breadcrumbs"  style="font-weight:bold;color:black"
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
        <li>
          <router-link to="/page/profissional/propostascategory" style="color:hsl(171, 100%, 41%)">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">drafts</i>
            </span>
            <span>Proposta à sua categoria</span>
          </router-link>
        </li>
        <li class="is-active">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">view_comfy</i>
            </span>
            <span>Ver disponibilidade</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->
    <br>
    <h3 class="title is-2 level-item" style="text-transform:uppercase;color:black">Disponibilidade</h3><br><br><br><br><br>
    <ApolloQuery
      :query="require('@/graphql/queries/propostaCatForId.gql')"
      :variables="{id:this.$route.params.id}"
    >
      <template slot-scope="{ result: { data, loading },isLoading }">
        <div v-if="isLoading">Loading...</div>
        <div v-else>
          <div v-for="prop of data" :key="prop.id">
            <div
              class="column is-12-desktop is-12-tablet is-full-mobile"
            >
              <div>
                <div class="columns" style="color:black" data-aos="slide-right" data-aos-duration="1000">
                  <div class="column is-3-desktop is-4-tablet is-6-mobile is-offset-3-mobile">
                    <div class="column">
                      <div class="level-item">
                        <img
                          width="80%"
                          height="10%"
                          :src="`http://graphql.me/perfilCli/${prop.user_envia.imagem}`"
                          alt="Placeholder image"
                        >
                      </div><br>
                      <div class="title is-5 level-item">
                        <div class="level-item">{{prop.user_envia.user.name}}</div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-9-desktop is-full-mobile">
                    <div class="columns">
                      <div class="column is-8-desktop is-8-tablet" style="margin-bottom:-30px">
                          <div class="title is-4" style="text-transform:uppercase"><b>{{prop.titulo}}</b></div>
                      </div>
                      <div class="column" style="margin-top:10px">
                        <div
                          v-if="prop.status===0"
                          class="tag is-warning"
                          style="font-size:10pt;color:black"
                        >
                          <b>Aberto</b>
                        </div>
                        <div
                          v-if="prop.status===1"
                          class="tag"
                          style="font-size:10pt;background:hsl(141, 71%, 48%);color:white"
                        >
                          <b>Pedido Aceito :)</b>
                        </div>
                        <div
                          v-if="prop.status===2"
                          class="tag"
                          style="font-size:10pt;background:hsl(141, 71%, 48%);color:white"
                        >
                          <b>Pedido Fechado e em Andamento</b>
                        </div>
                        <div v-if="pro.imageForUserId && (prop.status ===3 || prop.status ===4)">
                          <ApolloQuery
                            :query="require('@/graphql/queries/lanceProposta.gql')"
                            :variables="{proposta:prop.id,user:pro.imageForUserId[0].id}"
                          >
                            <template slot-scope="{ result: { data, loading },isLoading }">
                              <div v-if="isLoading">Loading...</div>
                              <div v-else>
                                <div v-if="data">
                                  <div v-if="prop.status === 4">
                                    <div v-if="(prop.user_aceito.id === pro.imageForUserId[0].id)">
                                      <div
                                        class="tag"
                                        style="font-size:10pt;background:rgb(98, 0, 49);color:white"
                                      >
                                        <b>Você foi avaliado</b>
                                      </div>
                                    </div>
                                    <div v-else>
                                      <div
                                        class="tag"
                                        style="font-size:10pt;background:rgb(98, 0, 49);color:white"
                                      >
                                        <b>Outra Pessoa Foi Avaliada Nesse Serviço</b>
                                      </div>
                                    </div>
                                  </div>
                                  <div v-if="prop.status === 3">
                                    <div v-if="(prop.user_aceito.id === pro.imageForUserId[0].id)">
                                      <div
                                        class="tag"
                                        style="font-size:10pt;background:rgb(99, 74, 110);color:white"
                                      >
                                        <b>Você finalizou esse serviço</b>
                                      </div>
                                    </div>
                                    <div v-else>
                                      <div
                                        class="tag"
                                        style="font-size:10pt;background:rgb(99, 74, 110);color:white"
                                      >Outra Pessoa Finalizou Esse Serviço</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </template>
                          </ApolloQuery>
                        </div>
                      </div>
                    </div>
                    <div > {{prop.date}}</div><br>
                    <div class="columns is-mobile">
                      <div class="column is-6-desktop">
                        <div class="">
                          <b>Local do serviço:</b>
                          {{prop.local}}
                        </div>
                      </div>
                      <div class="column is-6-desktop">
                        <div class="">
                          <b>Pra quando? </b>
                          {{prop.tempo}}
                        </div>
                      </div>
                    </div>
                    <div class="columns is-mobile">
                      <div class="column is-6-desktop">
                          <div class="">
                            <b>Valor:</b>
                            {{prop.valor}}
                          </div>
                      </div>
                      <div class="column">
                          <div class="">
                            <b>Tipo do serviço:</b>
                            {{prop.tipo}}
                          </div>
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column is-11-desktop is-10-tablet" style="text-align:justify">
                        <b>Descrição do serviço:</b>
                          {{prop.descricao}}
                      </div>
                    </div>
                  </div>
                </div>
                <br>
              </div>
              <!-- FIM DO CARD -->
            </div><br><br><div class="card-footer"></div>
            <div v-if="pro.imageForUserId">
              <ApolloQuery
                :query="require('@/graphql/queries/lanceProposta.gql')"
                :variables="{proposta:prop.id,user:pro.imageForUserId[0].id}"
              >
                <template slot-scope="{ result: { data, loading },isLoading }">
                  <div v-if="isLoading">Loading...</div>
                  <div v-else>
                    <div v-if="data">
                      <div class="column is-12-desktop is-full-mobile">
                        <div class="column">
                          <div v-for="lance of data.lanceProposta" :key="lance.id">
                            <div class="columns">
                              <div class="column is-4-desktop is-4-tablet is-8-mobile is-offset-2-mobile">
                                <img src="../../assets/frontendimages/deal.jpg" width="100%" alt="">
                              </div>
                              <div class="column is-8-desktop">

                                <!-- MENSAGEM ESPERANDO -->
                                <div
                                  v-if="prop.status ===0 && lance.status ===0"
                                  class=" column is-10-desktop is-offset-1-desktop is-10-tablet is-offset-1-tablet" style="margin-top:5%"
                                >
                                <div style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                                  <article class="message is-warning " style="border-radius:15px;text-align:justify">
                                    <div class="message-body" style="color:black;font-size:14pt">
                                        O {{prop.user_envia.user.name}} recebeu sua disponibilidade! Ele irá analisar sua resposta em breve, fique atento pois o cliente pode ligar para você a qualquer momento.
                                    </div>
                                   </article> 
                                </div>
                               </div>
                                <!-- MENSAGEM ACEITOU -->
                                <div
                                  v-if="prop.status ===2 && lance.status ===1"
                                  class=" column is-10-desktop is-offset-1-desktop is-10-tablet is-offset-1-tablet"
                                >
                                <div style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                                  <article class="message is-success " style="border-radius:15px;text-align:justify">
                                    <div class="message-body" style="color:black;font-size:14pt">
                                        O {{prop.user_envia.user.name}} aceitou seu lance! Para mais informações entre em contato com ele através do número: <b>{{lance.proposta_categoria.user_envia.telefone}}</b> ou email: <b>{{lance.proposta_categoria.user_envia.user.email}}</b>. Fique atento, pois o cliente pode ligar para você a qualquer momento.
                                    </div>
                                   </article> 
                                </div>
                               </div>

                                <!-- MENSAGEM FINALIZOU -->
                                <div v-if="prop.status === 3" class=" column is-10-desktop is-offset-1-desktop is-10-tablet is-offset-1-tablet" style="margin-top:7%">
                                  <div style="color:black;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                                    <div class="message-body" align="center" style="border-left:5px solid rgb(99, 74, 110);background:rgba(250, 240, 255, 0.692);color:black;font-size:14pt">
                                      Você finalizou o serviço do(a) {{prop.user_envia.user.name}} ele(a) já foi notificado!
                                    </div>
                                  </div>
                                </div>
                                
                                <!-- MENSAGEM RECUSOU -->
                                <div class="column is-12-desktop is-full-mobile" v-if="(prop.status ===2 || prop.status === 0) && lance.status === 3" style="margin-top:5%">
                                  <div class=" column is-10-desktop is-offset-1-desktop is-10-tablet is-offset-1-tablet">
                                    <div style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                                      <article class="message is-danger" style="border-radius:15px;text-align:center">
                                        <div class="message-body" style="color:black;font-size:14pt">
                                          O cliente recusou esse pedido, tente novamente em outra oportunidade!
                                        </div>
                                      </article>
                                    </div>
                                  </div>
                                </div>

                                <!-- BOTÃO FINALIZAR -->
                                <div
                                  v-if="prop.status ===2 && lance.status ===1"
                                  class="column is-10-desktop is-offset-1-desktop is-10-tablet is-offset-1-tablet" style="margin-top:-15px"
                                  >
                                  <div style="color:black;bottom:0;padding:0" class="column is-12-desktop is-12-tablet is-full-mobile">
                                      <article class="message" style="border-radius:15px;text-align:justify">
                                        <div class="message-body" style="color:black;font-size:14pt">
                                          <b>Obs: só finalize se o serviço quando o serviço acabar ou quando você quiser desistir!</b>
                                        </div>
                                      </article>
                                  </div><br>
                                  <button
                                    class="btn1 column is-12-desktop is-12-tablet is-12-mobile"
                                    style="border-radius:20px"
                                    @click.prevent="finalizar(prop.id,lance.id)"
                                  >Finalizar</button>
                                </div>
                              </div>
                            </div>
                            <div class="card-footer"></div><br>
                            <br><br><br>
                            <div class="column is-4-desktop is-offset-4-desktop is-8-tablet is-offset-2-tablet" style="color:black;font-size:25pt;text-transform:uppercase" align="center"><b>Sua disponibilidade para essa proposta</b></div>
                            <br><br>
                            
                            <!-- DISPONIBILIDADE NA SEMANA -->
                            <div class="column is-10-desktop is-offset-1 is-10-tablet is-offset-1-tablet is-full-mobile">
                              <div v-if="lance.status===0">
                                <b style="color:black;padding:0">
                                  <article class="message is-warning " style="text-align:center">
                                    <div class="message-body">
                                      Espere um pouco até o cliente poder analisar sua resposta!
                                    </div>
                                  </article>
                                </b>
                              </div>
                              <div v-if="lance.status===1">
                                <b style="color:black;padding:0">
                                  <article class="message is-success" style="text-align:center">
                                    <div class="message-body">
                                      Muito bem o cliente aceitou sua disponibilidade, entre em contato com ele :)
                                    </div>
                                  </article>
                                </b>
                              </div>
                              <div v-if="lance.status===2">
                                <b style="color:black;padding:0">
                                  <div class="message-body" align="center" style="border-left:5px solid rgb(99, 74, 110);background:rgba(250, 240, 255, 0.692);color:black">
                                    O serviço que você estava responsavel foi finalizado com sucesso!
                                  </div>
                                </b>
                              </div>
                              <div v-if="lance.status===3">
                                <b style="color:black;bottom:0;padding:0">
                                  <article class="message is-danger " style="text-align:center">
                                    <div class="message-body" style="color:black;">
                                      O cliente recusou sua resposta a demanda dele, responda a outras demandas e boa sorte!
                                    </div>
                                  </article>
                                </b>
                              </div>
                              <br>
                              <div class="columns is-mobile column">
                                <div class="column is-5-desktop is-5-tablet is-5-mobile">
                                  <b style="color:black">Disponibilidade na semana</b>
                                  <div>{{lance.data}}</div>
                                </div>
                                <div class="column is-5-desktop is-5-tablet is-5-mobile">
                                  <b style="color:black">Horário disponível no geral</b>
                                  <div
                                  >Das: {{lance.horaInicio}} às {{lance.horaFim}}</div>
                                </div>
                                <div class="column is-2-desktop is-2-tablet">
                                  {{lance.date}}
                                </div>
                              </div>
                              <div class="column is-12-desktop">
                                <b style="color:black">Descrição do horário:</b>
                                  <div
                                    class=""
                                    style="text-align:justify"
                                  >{{lance.descricao}}</div>
                              </div>
                            </div>
                            <br>
                          </div>
                        </div>
                      </div>
                     <br><br><br>  
                     <img src="../../assets/frontendimages/background3.png" alt="" style="width:auto;height:auto;max-width:100%">  
                    </div>          
                  </div>
                </template>
              </ApolloQuery>
            </div>
            <!-- Fim da <div class="column is-12-dektop is-full-mobile"> -->
          </div>
          <!-- FIM DO V-FOR -->
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import gql from "graphql-tag";
import proForUserId from "@/graphql/queries/imagemQuery.gql";
import atualizaStatusLance from "@/graphql/mutations/atualizaStatusLance.gql";
import atualizaStatusProposta2 from "@/graphql/mutations/atualizaStatusProposta2.gql";

export default {
  data() {
    return {
      me: null,
      pro: []
    };
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
    pro: {
      query: proForUserId,
      variables() {
        if (this.me) {
          return {
            id: this.me.id
          };
        }
      },
      update(data) {
        if (data) {
          this.pro = data;
          return this.pro;
        }
      }
    }
  },
  methods: {
    finalizar(propId, lanceId) {
      this.$swal({
        title: "Tem certeza que quer finalizar?",
        text:
          "O cliente ficará sabendo quando você finalizar essa proposta!",
        type: "info",
        showCancelButton: true,
        confirmButtonText: "Finalizar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "hsl(141, 71%, 48%)",
        cancelButtonColor: "hsl(348, 100%, 61%)",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          this.$apollo
            .mutate({
              mutation: atualizaStatusProposta2,
              variables: {
                id: propId,
                status: 3
              }
            })
            .then(() => {
              this.$apollo.mutate({
                mutation: atualizaStatusLance,
                variables: {
                  id: lanceId,
                  status: 2
                }
              });
              window.location.reload();
            });
        }
      });
    }
  }
};
</script>
<style>
@import "../../cssFiles/inputsAndButtons.css";
@import "../../cssFiles/alertas.css";

.img {
  border-radius: 100%;
}


.obsLanceAceita {
  background: hsl(141, 71%, 48%);
  padding: 1em 2em;
}


.espera {
  background: hsl(48, 100%, 67%);
  text-transform: uppercase;
  padding: 0.2em 0.7em;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: 2px solid black;
}

.obs2 {
  background: hsl(48, 100%, 67%);
  text-transform: uppercase;
  padding: 0.2em 0.7em;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: 2px solid rgb(109, 103, 103);
}

.aceitou {
  background: hsl(141, 71%, 48%);
  text-transform: uppercase;
  padding: 0.2em 0.7em;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: 2px solid black;
  color: white;
}

.recusou {
  background: hsl(348, 100%, 61%);
  text-transform: uppercase;
  padding: 0.2em 0.7em;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: 2px solid black;
  color: white;
}

.finalizou {
  background: rgb(99, 74, 110);
  text-transform: uppercase;
  padding: 0.2em 0.7em;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: 2px solid black;
  color: white;
}
</style>