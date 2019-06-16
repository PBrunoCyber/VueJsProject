<template>
  <div class="about" v-if="this.ping">
    <div v-if="this.ping.imageForUserId && this.ping.imageForUserId[0]">
      <div style="display:none" v-if="this.ping.imageForUserId[0].category.name === 'Marceneiro' || this.ping.imageForUserId[0].category.name === 'Diarista'">{{this.colorName = 'white'}}</div>
      <div style="display:none" v-else>{{this.colorName = 'black'}}</div>
    </div>  
    <!-- BREADCRUMB OVERLAY5 -->
    <!-- <nav
      class="breadcrumb column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet overlay5"
      aria-label="breadcrumbs"
    >
      <ul>
        <li class>
          <a
            style="color:red"
            @click.prevent="openNav()"
            v-if="this.arrayRed.inicio !== 'is-9-desktop'"
          >
            <span class="icon is-small" style="margin-right:10px">
              <i class="material-icons" aria-hidden="true">home</i>
            </span>
            <span style>Pagina Inicial</span>
          </a>
          <a href="#" style="color:black" v-else>
            <span class="icon is-small" style="margin-right:10px">
              <i class="material-icons" aria-hidden="true">home</i>
            </span>
            <span style>Pagina Inicial</span>
          </a>
        </li>
        <li></li>
      </ul>
    </nav> -->
    <!-- FIM DO BREADCRUMB 5 -->

    <!-- BREADCRUMB OVERLAY 6 -->
    <nav
      class=" column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet overlay6"
      aria-label="breadcrumbs" style="margin-bottom:20px;margin-top:10px"
    >
      <ul>
        <li>
          <a style="color:hsl(171, 100%, 41%)" @click="openNavCelular()">
            <b style="font-size:14pt">
              <div class="columns is-mobile">
                <i class="material-icons" aria-hidden="true" style="margin-top:2px;margin-right:10px">face</i>
                <div>Perfil</div>
              </div>
            </b>
          </a>
        </li>
        <li></li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB 6 -->

    <!-- OVERLAY 6 -->
    <div id="mySidenavCelular" class="sidenavCelular overlay6">
      <a href="javascript:void(0)" class="closebtn" @click="closeNavCelular()">
        <i style="font-size:40px;color:black;margin-top:20px;margin-left:-50px" class="material-icons">close</i>
      </a><br>
      <!-- Verificação de Usuário Adcionou ou não informações -->
      <div v-if="!this.ping.imageForUserId[0]" style="margin-top:-20px" align="center">
        <div for="q" class="column">
          <div>
            <figure class="image is-128x128">
              <img class="img" :src="`http://graphql.me/imagem/noimage.png`" alt="conver image">
            </figure>
          </div>
        </div>
      </div>
      <!-- Se o usuário cadastrou as informações e não tem foto no perfil -->
      <div v-if="this.ping.imageForUserId[0]" style="margin-top:-20px" align="center">
        <div for="q" class="column">
          <div>
            <figure class="image is-128x128">
              <img class="img"
                :src="`http://graphql.me/imagem/${this.ping.imageForUserId[0].imagem}`"
                alt="conver image"
              >
            </figure>
          </div>
        </div>
      </div>
      <!-- Se ele adcionou uma foto então faz isso -->
      <div class="column" v-if="this.ping.imageForUserId[0]" style="margin-top:-20px">
        <div align="center" style="color:black"><br><b>{{me.name}}</b><br>{{me.email}}<br><br></div>
        <div class="column card-footer">
          <router-link
            class="b"
            :to="`/page/profissional/${this.ping.imageForUserId[0].id}/editImage/${me.id}`"
          >
            <i class="material-icons">edit</i> Editar Perfil
          </router-link>
        </div>
        <div class="column card-footer">
          <router-link :to="`/page/profissional/solicitacoes`" class="b">
            <i class="material-icons" aria-hidden="true">move_to_inbox</i> Ver Solicitações
          </router-link>
        </div>
        <div class="column card-footer">
          <router-link :to="`/page/profissional/propostascategory`" class="b">
            <i class="material-icons" aria-hidden="true">drafts</i> Ver Propostas para sua categoria!
          </router-link>
        </div>
        <div class="column card-footer">
          <router-link
            class="b"
            :to="`/page/profissional/portifolio/${this.ping.imageForUserId[0].id}`"
          >
            <i class="material-icons">add</i> Adicionar portifolios
          </router-link>
        </div>
        <div class="column card-footer">
          <router-link
            class="b"
            :to="`/page/profissional/mensagens`"
          >
            <i class="material-icons">send</i> Mensagens para você
          </router-link>
        </div>
      </div>
      <!-- Se ele não adicionou nada então manda adicionar -->
      <div for="q" class="column" align="center" v-if="!this.ping.imageForUserId[0]">
        <div align="center">
          <br><b>{{me.name}}</b><br>{{me.email}}<br><br>
          <div class="column card-footer">
            <router-link
              class="b"
              :to="`/page/profissional/${me.id}/imagem`"
              style="text-decoration: none"
            >
              <i class="material-icons">add_circle</i> Adicionar Informações
            </router-link>
          </div>
          <div class="column card-footer">
            <router-link :to="`/page/profissional/propostascategory`" class="b">
              <i class="material-icons" aria-hidden="true">drafts</i> Ver Propostas para sua categoria!
            </router-link>
            </div>
            <div class="column card-footer">
            <router-link class="b" :to="`/page/profissional/solicitacoes`">
              <i class="material-icons" aria-hidden="true">move_to_inbox</i> Ver Solicitações
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- FIM DO OVERLAY 6 -->

    <!-- DIV MASTER -->
    <div class="columns" v-if="this.ping.imageForUserId">
      
      <!-- OVERLAY 5 -->
      <div
        id="mySidenav"
        class="column is-3-desktop is-4-tablet is-full-mobile sidenav overlay5"
        style="margin-top:25px;background:hsla(0, 7%, 97%, 0.952)"
      >
        <div class="column is-12-desktop is-full-mobile">
          <div class="column">
            <div class="columns" style="margin:-30px -30px 0px -20px;padding-top:10px;padding-right:20px">
              <div class="column is-6-desktop is-offset-1">
                <div class="columns">
                  <div class="column">
                    <b><i class="material-icons" style="font-size:20pt;color:black" aria-hidden="true">face</i></b>
                  </div>
                  <div class="column" style="margin-top:0px;margin-left:-60px">
                    <span style="color:black;text-transform:uppercase"><b>Perfil</b></span>
                  </div>
                </div>
              </div>
              <div class="column is-offset-1-desktop is-2-desktop is-2-mobile is-2-tablet" style="margin-top:-30px;margin-left:20px">
                <a href="javascript:void(0)" style="color:black;font-size:30pt" class="closebtn" @click="closeNav()">&times;</a>
              </div>
            </div><br><br>
            <!-- Verificação de Usuário Adcionou ou não informações -->
            <div v-if="!this.ping.imageForUserId[0]" style="margin-top:-20px" align="center">
              <div for="q" class="column">
                <div>
                  <figure class="image is-128x128">
                    <img :src="`http://graphql.me/imagem/noimage.png`" alt="conver image">
                  </figure>
                </div>
              </div>
            </div>
            <!-- Se o usuário cadastrou as informações e não tem foto no perfil -->
            <div v-if="this.ping.imageForUserId[0]" style="margin-top:-20px" align="center">
              <div for="q" class="column">
                <div>
                  <figure class="image is-128x128">
                    <img
                      :src="`http://graphql.me/imagem/${this.ping.imageForUserId[0].imagem}`"
                      alt="conver image"
                    >
                  </figure>
                </div>
              </div>
            </div>
            <!-- Se ele adcionou uma foto então faz isso -->
            <div class="column" v-if="this.ping.imageForUserId[0]" style="margin-top:-20px">
              <div align="center" style="color:black"><br><b>{{me.name}}</b><br>{{me.email}}<br><br></div>
              <div class="column card-footer">
                <router-link
                  class="b"
                  :to="`/page/profissional/${this.ping.imageForUserId[0].id}/editImage/${me.id}`"
                >
                  <i class="material-icons">edit</i> Editar Perfil
                </router-link>
              </div>
              <div class="column card-footer">
                <router-link :to="`/page/profissional/solicitacoes`" class="b">
                  <i class="material-icons" aria-hidden="true">move_to_inbox</i> Ver Solicitações
                </router-link>
              </div>
              <div class="column card-footer">
                <router-link :to="`/page/profissional/propostascategory`" class="b">
                  <i class="material-icons" aria-hidden="true">drafts</i> Ver Propostas para sua categoria!
                </router-link>
              </div>
              <div class="column card-footer">
                <router-link
                  class="b"
                  :to="`/page/profissional/portifolio/${this.ping.imageForUserId[0].id}`"
                >
                  <i class="material-icons">add_circle</i> Adicionar portifolios
                </router-link>
              </div>
              <div class="column card-footer">
                <router-link
                  class="b"
                  :to="`/page/profissional/mensagens`"
                >
                  <i class="material-icons">send</i> Mensagens para você
                </router-link>
              </div>
            </div>
            <!-- Se ele não adicionou nada então manda adicionar -->
            <div for="q" class="" v-if="!this.ping.imageForUserId[0]">
              <div>
                <div align="center" style="color:black"><br><b>{{me.name}}</b><br>{{me.email}}<br><br></div>
                <div class="column card-footer">
                  <router-link
                    class="b"
                    :to="`/page/profissional/${me.id}/imagem`"
                    style="text-decoration: none"
                  >
                    <i class="material-icons">add_circle</i> Adicionar Informações
                  </router-link>
                </div>
                <div class="column card-footer">
                  <router-link :to="`/page/profissional/propostascategory`" class="b">
                    <i class="material-icons" aria-hidden="true">drafts</i> Ver Propostas para sua categoria!
                  </router-link>
                </div>
                <div class="column card-footer">
                  <router-link class="b" :to="`/page/profissional/solicitacoes`">
                    <i class="material-icons" aria-hidden="true">move_to_inbox</i> Ver Solicitações
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- FIM DO OVERLAY 5 -->

      <!-- COMEÇO DA 2 PARTE -->
      <div
        :class="`column ${this.arrayRed.inicio} is-12-tablet is-full-mobile`"
        v-if="me && this.ping.imageForUserId"
      >
        <div class="column is-12-desktop is-12-tablet is-full-mobile">
          
          <!-- OPEN NAV PARA CELULAR -->
          <nav
              class="breadcrumb overlay5"
              aria-label="breadcrumbs" style="margin-left:40px" v-if="this.arrayRed.inicio !=='is-9-desktop'"
          >
              <ul>
                <li>
                  <a style="color:hsl(171, 100%, 41%)" @click.prevent="openNav()">
                    <b style="font-size:14pt">
                      <div class="columns">
                          <i class="material-icons" aria-hidden="true" style="margin-right:10px">face</i>
                          <div>Perfil</div>
                      </div>
                    </b>
                  </a>
                </li>
              </ul>
          </nav>
          
          <!-- Se não estiver cadastrado mostra class box normal -->
          <div v-if="!this.ping.imageForUserId[0]">
            <div class="column box">
              <div
                :class="`column is-10-tablet is-offset-3-desktop is-offset-4-tablet title is-2 overlay3`"
                style="margin-top:5%;color:black"
              >{{this.me.name}}</div>
              <div class="overlay4">
                <div
                  class="title is-2 column is-6-desktop is-8-mobile is-offset-4-mobile is-6-tablet is-offset-5"
                  style="margin-top:1em;margin-bottom:1em;text-align:center;margin-left:35%;color:black"
                >
                  {{this.me.name}}
                  <br>
                </div>
              </div>
            </div>
          </div>
          <!-- Se o usuário estiver cadastrado, mostra a foto da cateogoria dele -->
          <div v-else>
            <div
              class="box imageHover"
              :style="`padding:0%;background-image:url('http://graphql.me/categoryImage/${this.ping.imageForUserId[0].category.image}');background-repeat:no-repeat;background-size:100% 200%`"
            >
              <div>
                <div 
                  :class="`column is-8-desktop is-8-tablet ${this.arrayRed.name} title is-2 overlay3`"
                  :style="`color:${this.colorName};padding:5%`"
                >{{this.me.name}}
                </div>
                <div class="overlay4" style="padding:3%">
                  <div
                    class="title is-2 column is-10-mobile"
                    :style="`color:${this.colorName}`"
                  >{{this.me.name}}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- SE TIVER SIDO CADASTRADO FAZ ISSO! -->
          <!-- <div v-if="this.ping.imageForUserId[0]" class="overlay4">
            <div
              for="q"
              :class="`column ${this.arrayRed.image} is-offset-1-desktop is-3-tablet is-4-mobile`"
            >
              <div class="image 128x128">
                <img
                  class="img"
                  width="100%"
                  :src="`http://graphql.me/imagem/${this.ping.imageForUserId[0].imagem}`"
                  alt="conver image"
                  style="position:absolute;margin-top:-14em"
                >
              </div>
            </div>
          </div> -->
          <!-- IGNORA QUESTAO DE DISPOSIÇÃO -->
          <!-- <div class="overlay4 column">
            <br>
          </div> -->
          <!-- SE NÂO TIVER SIDO CADASTRADO! -->
         <div v-if="!this.ping.imageForUserId[0]">
            <div for="q" :class="`column is-2-desktop is-offset-1-desktop is-2-tablet is-offset-1-tablet is-3-mobile`">
                <img
                  class="img"
                  width="150px"
                  :src="`http://graphql.me/imagem/noimage.png`"
                  alt="conver image"
                  style="position:absolute;margin-top:-10.3em"
                >
            </div>
          </div> 
          <div class="overlay4"><br></div>
          <!-- COLUNA QUE APRESENTAS AS INFORMAÇÕES DO PROFISSIONAL -->
          <div class="column box is-12-tablet" style="margin-top:-0em">
            <div class="overlay3">
              <div class="columns">
                <div class="column is-6-desktop is-8-tablet">
                  <h1 style="margin-top:1em" class="column is-12-desktop is-12-tablet">
                    <b>Suas informações!</b>
                  </h1>
                </div>
                <div class="column" v-if="this.ping.imageForUserId[0]">
                  <a
                    :href="`/page/profissional/${this.ping.imageForUserId[0].id}/editImage/${me.id}`"
                    class="level-right"
                    style="margin-top:1em"
                  >
                    <i class="material-icons">edit</i>
                  </a>
                </div>
              </div>
            </div>
            <div class="overlay4">
              <div class="columns is-mobile">
                <div class="column is-10-mobile">
                  <h1 class="column is-12-mobile">
                    <b>Suas informações!</b>
                  </h1>
                </div>
                <div class="column is-3-mobile" v-if="this.ping.imageForUserId[0]">
                  <router-link
                    class="b"
                    :to="`/page/profissional/${this.ping.imageForUserId[0].id}/editImage/${me.id}`"
                  >
                    <i class="material-icons">edit</i>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="card-footer"></div>
            <div v-if="this.ping.imageForUserId[0]">
              <br>
              <div class="column">
                <b>Bio: </b>
                {{this.ping.imageForUserId[0].ramo}}
              </div>
              <div class="column">
                <div class="columns is-mobile">
                  <div class="column">
                    <b>Cidade:</b>
                    {{this.ping.imageForUserId[0].cidade}}
                  </div>
                  <div class="column is-offset-1-desktop">
                    <b>Estado:</b>
                    {{this.ping.imageForUserId[0].estado}}
                  </div>
                </div>
              </div>
              <div class="columns is-mobile column">
                <div class="column is-4-desktop is-6-tablet is-6-mobile">
                  <b>Endereço:</b>
                  {{this.ping.imageForUserId[0].logradouro}}
                </div>
                <div class="column is-4-desktop is-6-tablet is-6-mobile">
                  <b>Telefone:</b>
                  {{this.ping.imageForUserId[0].telefone}}
                </div>
              </div>
              <div class="column" style="margin-top:-3%;text-align:justify">
                <b>Descrição:</b>
                {{this.ping.imageForUserId[0].descricao}}
              </div>
            </div>
            <div v-if="!this.ping.imageForUserId[0]">
              <div class="column">
                <h2>
                  Você ainda não tem informações, adicione as informações adicionais clicando
                  <a
                    :href="`/page/cliente/${me.id}/perfilclienteadd`"
                  >aqui!</a>
                </h2>
              </div>
            </div>
          </div>

          <!-- FIM DA COLUNA QUE APRESENTAS AS INFORMAÇÕES DO PROFISSIONAL -->

          <!-- COMEÇO DA CLASS BOX QUE APRENSENTA PROPOSTAS ÀS CATEGORIAS! -->
          <div class="column box is-12-tablet">
            <div class="column">
              <h1>
                <b>Solicitações feitas à sua categoria!</b>
              </h1>
            </div>
            <div class="card-footer"></div>
            <!-- INICIO DA CONSULTA PARA MOSTRAR AS PROPOSTAS -->
            <div v-if="this.ping.imageForUserId[0]">
              <ApolloQuery
                :query="require('@/graphql/queries/propostaForCatLimit.gql')"
                :variables="{category:this.ping.imageForUserId[0].category.id}"
              >
                <template slot-scope="{ result: { data, loading },isLoading }">
                  <div v-if="isLoading">Loading...</div>
                  <div v-else>
                    <div v-if="data">
                      <br>
                      <div v-for="proplimit of data.propostaForCatLimit" :key="proplimit.id">
                        <div class="columns" style="margin-left:1%">
                          <div :class="`column is-12-desktop is-12-tablet`">
                            <div class="columns is-mobile column">
                              <div
                                :class="`column ${arrayRed.propImage} is-3-tablet is-4-mobile`"
                                align="center"
                              >
                                <img
                                  class="img"
                                  :src="`http://graphql.me/perfilcli/${proplimit.user_envia.imagem}`"
                                  alt="Placeholder image"
                                  width="70%"
                                >
                                <div class>
                                  <b>{{proplimit.user_envia.user.name}}</b>
                                </div>
                              </div>

                              <!-- MOSTRA AS ESTRELAS -->
                              <div class="column is-12-desktop is-12-tablet">
                                <div :class="`column ${arrayRed.descricao} is-10-tablet`">
                                  <div style="margin-bottom:10px">
                                    <div class="title is-5">{{proplimit.titulo}}</div>
                                  </div>
                                  <div v-if="proplimit.status===0">
                                    <div>
                                      <div class="tag is-warning" style="margin-right:5px">
                                        <b>Aberto</b>
                                      </div>
                                      {{proplimit.date}}
                                    </div>
                                  </div>
                                  <div v-if="proplimit.status===1">
                                    <div class="is-full-mobile">
                                      <div class="tag is-success" style="margin-right:5px">
                                        <b>Pedido aceito!</b>
                                      </div>
                                      {{proplimit.date}}
                                    </div>
                                  </div>
                                  <div v-if="proplimit.status===2">
                                    <div class="is-full-mobile">
                                      <div class="tag is-success" style="margin-right:5px">
                                        <b>Pedido fechado!</b>
                                      </div>
                                      {{proplimit.date}}
                                    </div>
                                  </div>
                                  <div v-if="proplimit.status===3">
                                    <div class="is-full-mobile">
                                      <div
                                        class="tag is-success"
                                        style="background:rgb(99, 74, 110);margin-right:5px"
                                      >
                                        <b>Pedido finalizado!</b>
                                      </div>
                                      {{proplimit.date}}
                                    </div>
                                  </div>
                                  <div v-if="proplimit.status===4">
                                    <ApolloQuery
                                      :query="require('@/graphql/queries/lanceProposta.gql')"
                                      :variables="{proposta:proplimit.id,user:ping.imageForUserId[0].id}"
                                    >
                                      <template
                                        slot-scope="{ result: { data, loading },isLoading }"
                                      >
                                        <div v-if="isLoading">Loading...</div>
                                        <div v-else>
                                          <div v-if="data">
                                            <div v-if="data.lanceProposta">
                                              <div v-if="proplimit.status === 4">
                                                <div
                                                  class="tag is-success"
                                                  style="background:rgb(98, 0, 49);margin-right:5px"
                                                  v-if="(proplimit.user_aceito.id === ping.imageForUserId[0].id)"
                                                >
                                                  <b>Você foi avaliado!</b>
                                                </div>
                                                <div
                                                  class="tag is-success"
                                                  style="background:rgb(98, 0, 49);margin-right:5px"
                                                  v-if="(proplimit.user_aceito.id !== ping.imageForUserId[0].id)"
                                                >
                                                  <b>Finalizado</b>
                                                </div>
                                                {{proplimit.date}}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </template>
                                    </ApolloQuery>
                                  </div>
                                </div>
                                <!-- VALOR, LOCAL E TIPO -->
                                <div class="overlay5" style="margin-top:10px">
                                  <div class="column is-12-desktop">
                                    <b>Previsão:</b>
                                    {{proplimit.tempo}}
                                  </div>
                                  <div class="columns column">
                                    <div class="column is-3-desktop is-3-tablet">
                                      <b>Valor:</b>
                                      {{proplimit.valor}}
                                    </div>
                                    <div class="column is-4-desktop is-3-tablet">
                                      <b>Local:</b>
                                      {{proplimit.local}}
                                    </div>
                                    <div class="column is-3-desktop is-2-tablet">
                                      <b>Tipo:</b>
                                      {{proplimit.tipo}}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- VALOR, LOCAL E TIPO PRA CELULAR-->
                            <div class="overlay6" style="margin-top:-20px">
                              <div class="columns is-mobile column">
                                <div class="column is-3-desktop is-3-tablet">
                                  <b>Valor:</b>
                                  {{proplimit.valor}}
                                </div>
                                <div class="column is-4-desktop is-3-tablet">
                                  <b>Local:</b>
                                  {{proplimit.local}}
                                </div>
                                <div class="column is-3-desktop is-2-tablet">
                                  <b>Tipo:</b>
                                  {{proplimit.tipo}}
                                </div>
                              </div>
                              <div class="column is-12-mobile" style="margin-top:-20px">
                                <b>Previsão:</b>
                                {{proplimit.tempo}}
                              </div>
                              <br>
                            </div>
                            <!-- DESCRIÇÃO PARA CELULAR-->
                            <div
                              :class="`column is-12-desktop is-12-tablet`"
                              style="text-align:justify;margin-top:-25px"
                            >
                              <b>Descrição:</b>
                              {{proplimit.descricao}}
                            </div>
                            <ApolloQuery
                              :query="require('@/graphql/queries/lanceProposta.gql')"
                              :variables="{proposta:proplimit.id,user:ping.imageForUserId[0].id}"
                            >
                              <template slot-scope="{ result: { data, loading },isLoading }">
                                <div v-if="isLoading">Loading...</div>
                                <div v-else>
                                  <div v-if="data">
                                    <div v-if="data.lanceProposta">
                                      <div v-if="proplimit.status === 0">
                                        <div
                                          v-if="data.lanceProposta[0] && data.lanceProposta[0].status !==3"
                                        >
                                          <router-link
                                            :to="`/page/profissional/propostascategory/verlance/${proplimit.id}`"
                                          >
                                            <button
                                              class="btn1 column is-12-desktop is-12-tablet is-full-mobile"
                                              style="border-radius:25px"
                                            >Ver sua proposta</button>
                                          </router-link>
                                        </div>
                                        <div
                                          v-if="data.lanceProposta[0] && data.lanceProposta[0].status ===3"
                                        >
                                          <div
                                            class="column"
                                            align="center"
                                            style="color:hsl(348, 100%, 61%)"
                                          >
                                            <b>O(A) {{proplimit.user_envia.user.name}} recusou sua proposta, desculpe!</b>
                                          </div>
                                          <router-link
                                            :to="`/page/profissional/propostascategory/verlance/${proplimit.id}`"
                                          >
                                            <button
                                              class="btn1 column is-12-desktop is-12-tablet is-full-mobile"
                                              style="border-radius:25px"
                                            >Ver detalhes</button>
                                          </router-link>
                                        </div>
                                        <div v-if="!data.lanceProposta[0]">
                                          <router-link
                                            :to="`/page/profissional/propostascategory/lancar/${proplimit.id}`"
                                          >
                                            <button
                                              class="btn1 column is-12-desktop is-12-tablet is-full-mobile"
                                              style="border-radius:25px"
                                            >Lancar sua proposta</button>
                                          </router-link>
                                        </div>
                                      </div>
                                      <div v-if="proplimit.status===2 && data.lanceProposta[0]">
                                        <div
                                          v-if="proplimit.user_aceito.id === ping.imageForUserId[0].id && data.lanceProposta[0].status !==3"
                                        >
                                          <router-link
                                            :to="`/page/profissional/propostascategory/verlance/${proplimit.id}`"
                                          >
                                            <div
                                              class="column"
                                              align="center"
                                              style="color:hsl(141, 71%, 48%)"
                                            >
                                              <b>O(A) {{proplimit.user_envia.user.name}} aceitou sua proposta, muito bem!</b>
                                            </div>
                                            <button
                                              class="btn1 column is-12-desktop is-12-tablet is-full-mobile"
                                              style="border-radius:25px"
                                            >Ver detalhes</button>
                                          </router-link>
                                        </div>
                                        <div
                                          v-if="proplimit.user_aceito.id !== ping.imageForUserId[0].id && data.lanceProposta[0].status !==3"
                                        >
                                          <div class="column" align="center" style="color:black">
                                            <b>O(A) {{proplimit.user_envia.user.name}} aceitou o pedido de outra pessoa!</b>
                                          </div>
                                        </div>
                                        <div v-if="data.lanceProposta[0].status === 3">
                                          <div
                                            class="column"
                                            align="center"
                                            style="color:hsl(348, 100%, 61%)"
                                          >
                                            <b>O(A) {{proplimit.user_envia.user.name}} recusou sua proposta, desculpe!</b>
                                          </div>
                                          <router-link
                                            :to="`/page/profissional/propostascategory/verlance/${proplimit.id}`"
                                          >
                                            <button
                                              class="btn1 column is-12-desktop is-12-tablet is-full-mobile"
                                              style="border-radius:25px"
                                            >Ver detalhes</button>
                                          </router-link>
                                        </div>
                                      </div>
                                      <div v-if="proplimit.status===2 && !data.lanceProposta[0]">
                                        <div
                                          v-if="proplimit.user_aceito.id !== ping.imageForUserId[0].id"
                                        >
                                          <div class="column" align="center" style="color:black">
                                            <b>O(A) {{proplimit.user_envia.user.name}} já fechou com uma pessoa!</b>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </template>
                            </ApolloQuery>
                          </div>
                        </div>
                        <div class="card-footer"></div>
                        <br>
                      </div>
                      <div v-if="data && data.propostaForCatLimit">
                        <div class="column" v-if="!data.propostaForCatLimit[0]">
                          Não há propostas a sua categoria ainda!
                          <br>
                          <br>
                          <div class="card-footer"></div>
                        </div>
                        <router-link :to="`/page/profissional/propostascategory`">
                          <button
                            class="column is-8-desktop is-8-tablet is-full-mobile is-12-tablet is-offset-2-desktop"
                            style="color:blue"
                          >Ver mais propostas à sua categoria</button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </template>
              </ApolloQuery>
            </div>
            <!-- SE NÃO TIVER SIDO CADASTRADO MOSTRA ISSO! -->
            <div
              class="column"
              v-else
            >Você não está cadastrado ainda, adicione informações adicionais e comece!</div>
          </div>

          <!-- COMEÇO DA CLASS BOX QUE APRENSENTA OS PEDIDOS FEITOS A UM PROFISSIONAL ESPECÍFICO! -->
          <div class="column box is-12-tablet">
            <div class="column">
              <h1>
                <b>Solicitações feitas à você particularmente!</b>
              </h1>
            </div>
            <div class="card-footer"></div>
            <div v-if="this.ping.imageForUserId[0]">
              <ApolloQuery
                :query="require('@/graphql/queries/solicitacoes.gql')"
                :variables="{user_recebe_id:this.ping.imageForUserId[0].id,count:this.count,page:this.page}"
              >
                <template slot-scope="{ result: { data, loading },isLoading }">
                  <div v-if="isLoading">Loading...</div>
                  <div v-else>
                    <div v-if="data">
                      <br>
                      <div v-for="proposta of data.propostaRecebe.data" :key="proposta.id">
                        <div class="columns" style="margin-left:1%">
                          <div :class="`column is-12-desktop is-12-tablet`">
                            <div class="columns is-mobile column">
                              <div
                                :class="`column ${arrayRed.propImage} is-3-tablet is-4-mobile`"
                                align="center"
                              >
                                <img
                                  class="img"
                                  :src="`http://graphql.me/perfilcli/${proposta.user_envia.imagem}`"
                                  alt="Placeholder image"
                                  width="70%"
                                >
                                <div class>
                                  <b>{{proposta.user_envia.user.name}}</b>
                                </div>
                              </div>

                              <!-- MOSTRA AS ESTRELAS -->
                              <div class="column is-12-desktop is-12-tablet">
                                <div :class="`column ${arrayRed.descricao} is-8-tablet`">
                                  <div style="margin-bottom:10px">
                                    <div class="title is-5">{{proposta.titulo}}</div>
                                  </div>
                                  <div v-if="proposta.status===0">
                                    <div>
                                      <div class="tag is-warning" style="margin-right:5px">
                                        <b>Esperando feedback!</b>
                                      </div>
                                      {{proposta.date}}
                                    </div>
                                  </div>
                                  <div v-if="proposta.status===1">
                                    <div class="is-full-mobile">
                                      <div class="tag is-success" style="margin-right:5px">
                                        <b>Pedido aceito!</b>
                                      </div>
                                      {{proposta.date}}
                                    </div>
                                  </div>
                                  <div v-if="proposta.status===2">
                                    <div class="is-full-mobile">
                                      <div class="tag is-danger" style="margin-right:5px">
                                        <b>Pedido recusado!</b>
                                      </div>
                                      {{proposta.date}}
                                    </div>
                                  </div>
                                  <div v-if="proposta.status===3">
                                    <div class="is-full-mobile">
                                      <div
                                        class="tag is-success"
                                        style="background:rgb(99, 74, 110);margin-right:5px"
                                      >
                                        <b>Pedido finalizado!</b>
                                      </div>
                                      {{proposta.date}}
                                    </div>
                                  </div>
                                  <div v-if="proposta.status===4">
                                    <div class>
                                      <div class>
                                        <div
                                          class="tag is-success"
                                          style="background:rgb(98, 0, 49);margin-right:5px"
                                        >
                                          <b>Você foi avaliado!</b>
                                        </div>
                                        {{proposta.date}}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <!-- VALOR, LOCAL E TIPO -->
                                <div class="overlay5" style="margin-top:10px">
                                  <div class="column is-12-desktop">
                                    <b>Previsão:</b>
                                    {{proposta.tempo}}
                                  </div>
                                  <div class="columns column">
                                    <div class="column is-3-desktop is-3-tablet">
                                      <b>Valor:</b>
                                      {{proposta.valor}}
                                    </div>
                                    <div class="column is-4-desktop is-3-tablet">
                                      <b>Local:</b>
                                      {{proposta.local}}
                                    </div>
                                    <div class="column is-3-desktop is-2-tablet">
                                      <b>Tipo:</b>
                                      {{proposta.tipo}}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- VALOR, LOCAL E TIPO PRA CELULAR-->
                            <div class="overlay6" style="margin-top:-20px">
                              <div class="columns is-mobile column">
                                <div class="column is-3-desktop is-3-tablet">
                                  <b>Valor:</b>
                                  {{proposta.valor}}
                                </div>
                                <div class="column is-4-desktop is-3-tablet">
                                  <b>Local:</b>
                                  {{proposta.local}}
                                </div>
                                <div class="column is-3-desktop is-2-tablet">
                                  <b>Tipo:</b>
                                  {{proposta.tipo}}
                                </div>
                              </div>
                              <div class="column is-12-mobile" style="margin-top:-20px">
                                <b>Previsão:</b>
                                {{proposta.tempo}}
                              </div>
                              <br>
                            </div>
                            <!-- DESCRIÇÃO PARA CELULAR-->
                            <div
                              :class="`column is-12-tablet is-12-desktop`"
                              style="text-align:justify;margin-top:-25px"
                            >
                              <b>Descrição:</b>
                              {{proposta.descricao}}
                            </div>
                            <div v-if="proposta.status === 0" class="column" align="center">
                              <router-link :to="`/page/profissional/solicitacoes`">
                                <button
                                  class="btn1 column is-12-desktop is-12-tablet is-full-mobile"
                                  align="center"
                                  style="border-radius:25px"
                                >Ver detalhes!</button>
                              </router-link>
                            </div>
                            <div
                              v-if="proposta.orcamento && !proposta.orcamento[0] && proposta.status === 1"
                            >
                              <router-link
                                :to="`/page/profissional/solicitacoes/orcamento/${proposta.id}`"
                              >
                                <button
                                  class="btn1 column is-12-desktop is-12-tablet is-full-mobile"
                                  style="border-radius:25px"
                                >Mandar sua disponibilidade</button>
                              </router-link>
                            </div>
                            <div
                              v-if="proposta.orcamento && proposta.orcamento[0] && proposta.status === 1"
                            >
                              <router-link :to="`/page/profissional/solicitacoes`">
                                <button
                                  class="btn1 column is-12-desktop is-12-tablet is-full-mobile"
                                  align="center"
                                  style="border-radius:25px"
                                >Ver detalhes</button>
                              </router-link>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer"></div>
                        <br>
                      </div>
                      <!-- PAGINAÇÃO -->
                      <div v-if="data && data.propostaRecebe.data">
                        <div class="columns is-mobile column level-item" v-if="data.propostaRecebe.data[0]">
                          <!-- VOLTAR -->
                          <div v-if="data.propostaRecebe.paginatorInfo.currentPage !== 1">
                            <a class="button button-solicita" style="margin:5px" @click.prevent="anterior()"><i class="material-icons">keyboard_arrow_left</i></a>
                          </div>
                          <div v-else>
                            <a class="button" style="margin:5px;background:#ccc" disabled><i class="material-icons">keyboard_arrow_left</i></a>
                          </div>
                          <!-- FOR PARA PERCORRER E MOSTAR AS PAGINAS -->
                          <div v-for="p of data.propostaRecebe.paginatorInfo.lastPage" :key="p.id">
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
                          <b style="margin-top:15px;margin-left:5px;margin-right:5px" v-if="data.propostaRecebe.paginatorInfo.lastPage > 11">... </b>
                          <div v-if="data.propostaRecebe.paginatorInfo.lastPage > 10">
                            <div v-if="page === data.propostaRecebe.paginatorInfo.lastPage">
                              <a class="button" style="margin:5px;background:rgb(71, 71, 71);color:white">{{data.propostaRecebe.paginatorInfo.lastPage}}</a>
                            </div>
                            <div v-else>
                              <a class="button button-solicita" style="margin:5px" @click.prevent="ultimaPagina(data.propostaRecebe.paginatorInfo.lastPage)">{{data.propostaRecebe.paginatorInfo.lastPage}}</a>
                            </div>
                          </div>
                          <!-- PRÓXIMO -->
                          <div v-if="data.propostaRecebe.paginatorInfo.hasMorePages">
                            <a class="button button-solicita" style="margin:5px" @click.prevent="proximo()"><i class="material-icons">keyboard_arrow_right</i></a>
                          </div>
                          <div v-else>
                            <a class="button" style="margin:5px;background:#ccc" disabled><i class="material-icons">keyboard_arrow_right</i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="data && data.propostaRecebe.data">
                      <div
                        class="column"
                        v-if="!data.propostaRecebe.data[0]"
                      >Não há solicitações a você ainda!</div>
                    </div>
                  </div>
                </template>
              </ApolloQuery>
            </div>
            <!-- SE NÃO TIVER SIDO CADASTRADO MOSTRA ISSO! -->
            <div
              class="column"
              v-else
            >Você não está cadastrado ainda, adicione informações adicionais e comece!</div>
          </div>

          <!-- COMECO DA CLASS BOX QUE APRESENTA AVALIAÇÃO -->
          <div class="column box is-12-tablet">
            <div class="column">
              <h1>
                <b>Avaliações feitas à voçê!</b>
              </h1>
            </div>
            <div class="card-footer"></div>
            <!-- INICIO DA CONSULTA PARA MOSTRAR AS AVALIAÇÕES -->
            <div v-if="this.ping.imageForUserId[0]">
              <ApolloQuery
                :query="require('@/graphql/queries/avaliacaoForAvaliadoId.gql')"
                :variables="{user_avaliado:this.ping.imageForUserId[0].id}"
              >
                <template slot-scope="{ result: { data, loading },isLoading }">
                  <div v-if="isLoading">Loading...</div>
                  <div v-else>
                    <div v-if="data">
                      <br>
                      <div v-for="avalia of data.avaliacaoForAvaliadoId" :key="avalia.id">
                        <div class="columns" style="margin-left:1%">
                          <div :class="`column is-8-desktop is-7-tablet`">
                            <div class="columns is-mobile">
                              <div
                                class="column is-4-desktop is-6-tablet is-3-mobile"
                                align="center"
                              >
                                <img
                                  class="img"
                                  :src="`http://graphql.me/perfilcli/${avalia.user_avalia.imagem}`"
                                  alt="Placeholder image"
                                  width="70%"
                                >
                                <div class>
                                  <b>{{avalia.user_avalia.user.name}}</b>
                                </div>
                              </div>
                              <!-- MOSTRA AS ESTRELAS -->
                              <div class="column is-12-desktop is-full-mobile is-12-tablet">
                                <div class="columns is-mobile column">
                                  <div
                                    class="column is-12-desktop is-6-mobile is-10-tablet"
                                    style="font-size:15pt"
                                  >
                                    <b>{{avalia.titulo}}</b>
                                  </div>
                                  <div class="column">{{avalia.date}}</div>
                                </div>
                                <div style="margin-top:-40px">
                                  <div v-if="avalia.estrela === 5">
                                    <img
                                      class="column is-3-desktop is-4-tablet is-4-mobile"
                                      src="@/assets/estrela5.png"
                                      alt="cover image"
                                    >
                                  </div>
                                  <div v-if="avalia.estrela === 4">
                                    <img
                                      class="column is-3-desktop is-4-tablet is-4-mobile"
                                      src="@/assets/estrela4.png"
                                      alt="cover image"
                                    >
                                  </div>
                                  <div v-if="avalia.estrela === 3">
                                    <img
                                      class="column is-3-desktop is-4-tablet is-4-mobile"
                                      src="@/assets/estrela3.png"
                                      alt="cover image"
                                    >
                                  </div>
                                  <div v-if="avalia.estrela === 2">
                                    <img
                                      class="column is-3-desktop is-4-tablet is-4-mobile"
                                      src="@/assets/estrela2.png"
                                      alt="cover image"
                                    >
                                  </div>
                                  <div v-if="avalia.estrela === 1">
                                    <img
                                      class="column is-3-desktop is-4-tablet is-4-mobile"
                                      src="@/assets/estrela1.png"
                                      alt="cover image"
                                    >
                                  </div>
                                  <div style="margin-top:-20px">
                                    <div
                                      v-if="avalia.recomenda === 1"
                                      class="column"
                                      style="color:green"
                                    >
                                      <i class="material-icons" style="margin-right:10px;">thumb_up</i>Sim recomendo
                                    </div>
                                    <div
                                      class="column"
                                      style="color:red"
                                      v-if="avalia.recomenda === 0"
                                    >
                                      <i
                                        class="material-icons"
                                        style="margin-right:10px;"
                                      >thumb_down</i>Não recomendo!
                                    </div>
                                    <div
                                      class="column overlay3 is-12-desktop"
                                    >"{{avalia.descricao}}"</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="column overlay4 is-12-desktop"
                              style="margin-left:1em"
                            >"{{avalia.descricao}}"</div>
                          </div>
                        </div>
                        <div class="card-footer"></div>
                        <br>
                      </div>
                    </div>
                    <div v-if="data && data.avaliacaoForAvaliadoId">
                      <div
                        class="column"
                        v-if="!data.avaliacaoForAvaliadoId[0]"
                      >Você não foi avaliado ainda!</div>
                    </div>
                  </div>
                </template>
              </ApolloQuery>
            </div>
            <!-- SE NÃO TIVER SIDO CADASTRADO MOSTRA ISSO! -->
            <div
              class="column"
              v-else
            >Você não está cadastrado ainda, adicione informações adicionais e comece!</div>
          </div>

          <!-- COMEÇO DA CLASSE BOX QUE APRESENTA OS PORTIFÓLIOS/TRABALHOS -->
          <div class="column box is-12-tablet">
            <div class="column">
              <h1>
                <b>Seus portifólios!</b>
              </h1>
            </div>
            <div class="card-footer"></div>
            <!-- INICIO DA CONSULTA PARA MOSTRAR OS PORTIFÓLIOS -->
            <div v-if="this.ping.imageForUserId[0]">
              <ApolloQuery
                :query="require('@/graphql/queries/portifolioForImagem.gql')"
                :variables="{imagem:this.ping.imageForUserId[0].id}"
              >
                <template slot-scope="{ result: { data, loading },isLoading }">
                  <div v-if="isLoading">Loading...</div>
                  <div v-else>
                    <div v-if="data">
                      <br>
                      <div v-for="portifolio of data.portifolioForImagem" :key="portifolio.id">
                        <div class="columns" style="margin-left:1%">
                          <div :class="`column is-10-desktop is-10-tablet is-12-mobile is-5-tablet`">
                            <div class="columns is-mobile">
                              <div
                                class="column is-3-desktop is-3-tablet is-4-mobile"
                                align="center"
                              >
                                <img
                                  :src="`http://graphql.me/portifolio/${portifolio.imagens}`"
                                  alt="Placeholder image"
                                  width="100%"
                                >
                              </div>
                              <div class="column is-12-desktop is-12-tablet is-full-mobile">
                                <div class="column is-12-desktop is-10-tablet is-9-mobile">
                                  <b>{{portifolio.titulo}}</b>
                                </div>
                                <div
                                  class="column overlay3 is-11-desktop is-11-tablet" style="text-align:justify"
                                >{{portifolio.descricao}}</div>
                              </div>
                            </div>
                            <div
                              class="column overlay4 is-11-desktop is-12-mobile"
                              style="text-align:justify"
                            >{{portifolio.descricao}}</div>
                          </div>
                        </div>
                        <div class="card-footer"></div>
                        <br>
                      </div>
                    </div>
                    <div v-if="data && data.portifolioForImagem">
                      <div
                        class="column"
                        v-if="!data.portifolioForImagem[0]"
                      >Você não tem portifolios ainda!</div>
                    </div>
                  </div>
                </template>
              </ApolloQuery>
            </div>
            <!-- SE NÃO TIVER SIDO CADASTRADO MOSTRA ISSO! -->
            <div
              class="column"
              v-else
            >Você não está cadastrado ainda, adicione informações adicionais e comece!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import {Bus} from '../../event.js'

import gql from "graphql-tag";
export default {
  data() {
    return {
      me: null,
      k: null,
      ping: null,
      count:3,
      page:1,
      colorName:"",
      arrayRed: {
        inicio: "is-9-desktop",
        image: "is-3-desktop",
        name: "is-offset-1-desktop",
        propImage: "is-2-desktop",
        propDescricao: "is-9-desktop"
      }
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
          this.ping = data;
          return this.ping;
      }
    }
  },
  created() {
    if (this.me) {
      localStorage.setItem("status", this.me.status);
    }
  },
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "25%";
      document.getElementById("mySidenav").style.marginLeft = "0%";
      this.arrayRed.inicio = "is-9-desktop"; // Array para redimensionar a div principal
      this.arrayRed.image = "is-3-desktop"; // Array para redimensionar a imagem
      this.arrayRed.name = "is-offset-1-desktop"; // Array para dar um offset no nome
      this.arrayRed.propImage = "is-3-desktop"; // Array para redimensionar a imagem da categoria/individual
      this.arrayRed.propDescricao = "is-9-desktop"; // Array para redimensionar a descricao
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0%";
      document.getElementById("mySidenav").style.marginLeft = "-1.6%";
      this.arrayRed.inicio = "is-12-desktop"; // Array para redimensionar a div principal
      this.arrayRed.image = "is-2-desktop"; // Array para redimensionar a imagem
      this.arrayRed.name = "is-offset-1-desktop"; // Array para dar um offset no nome
      this.arrayRed.propImage = "is-2-desktop"; // Array para dar um offset no nome
      this.arrayRed.propDescricao = "is-10-desktop"; // Array para redimensionar a descricao
    },
    openNavCelular() {
      document.getElementById("mySidenavCelular").style.width = "350px";
      this.clica = "ok";
    },
    closeNavCelular() {
      document.getElementById("mySidenavCelular").style.width = "0px";
    },
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
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../cssFiles/inputsAndButtons.css";
@import "../../cssFiles/sidenav.css";

.img {
  border-radius: 100%;
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


.button-solicita{
  background: rgb(0, 214, 132);
  font-weight: bold;
  color:white;
}
.button-solicita:hover{
  color:white;
}

</style>
