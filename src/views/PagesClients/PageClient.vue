<template>
  <div class="page-cliente">
    <!-- BREADCRUMB OVERLAY 6 -->
    <nav
      class="breadcrumb column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet overlay6"
      aria-label="breadcrumbs"
    >
      <ul>
        <li>
          <a style="color:hsl(171, 100%, 41%)" @click="openNavCelular()">
            <b>
              <div class="columns is-mobile" style="margin-bottom:-20px;margin-top:10px">
                <i class="material-icons" aria-hidden="true" style="margin-top:0px;margin-right:10px">face</i>
                <div>Perfil</div>
              </div>
            </b>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB 6 -->

    <!-- OVERLAY 6 -->
    <div id="mySidenavCelular" class="sidenavCelular overlay6">
      <a href="javascript:void(0)" class="closebtn" @click="closeNavCelular()">
        <i style="font-size:40px;color:black;margin-top:20px" class="material-icons">close</i>
      </a>
      <div v-if="this.clica">
        <div v-if="!this.clientes.clientForUserId[0]">
          <div for="q" class="column" align="center">
            <div align="center">
              <figure class="image is-128x128">
                <img style="height:120px" class="img"
                  :src="`http://graphql.me/perfilcli/noimage.png`"
                  alt="conver image"
                >
              </figure>
            </div>
          </div>
        </div>
        <div v-if="this.clientes.clientForUserId[0]">
          <div for="q" align="center">
            <div align="center">
              <figure class="image is-128x128">
                <img style="height:120px" class="img"
                  :src="`http://graphql.me/perfilcli/${this.clientes.clientForUserId[0].imagem}`"
                  alt="conver image"
                >
              </figure>
            </div>
          </div>
        </div>
        <aside class="column" v-if="this.clientes.clientForUserId[0]" style="margin-top:-40px">
          <div class="column" align="center" style="margin-top:-10px"><br><b style="color:black">{{me.name}}</b><br>{{me.email}}<br><br></div>
          <div class="card-footer"></div>
          <router-link class="column b" :to="`/page/cliente/${this.clientes.clientForUserId[0].id}/editcliente/${me.id}`">
            <i class="material-icons">edit</i> Editar Perfil
          </router-link>
          <div class="column card-footer">
            <router-link :to="`/page/cliente/categories`" class="b">
              <i class="material-icons">search</i> Encontrar profissionais
            </router-link>
          </div>
          <div class="column card-footer">
            <router-link :to="`/page/cliente/pedidos`" class="b">
              <i class="material-icons">description</i> Meus pedidos
            </router-link>
          </div>
          <div class="column card-footer">
            <router-link :to="`/page/cliente/propostacategory`" class="b">
              <i class="material-icons" aria-hidden="true">collections</i> Minhas propostas para categorias
            </router-link>
          </div>
          <div class="column card-footer">
            <router-link :to="`/page/cliente/mensagens`" class="b">
                <i class="material-icons" aria-hidden="true">send</i> Minhas mensagens
            </router-link>
          </div>
        </aside>
        <!-- Se ele não adicionou nada então manda adicionar -->
        <div class="column" style="margin-top:-40px" v-if="!this.clientes.clientForUserId[0]">
          <div style="color:black">
            <div align="center">
              <br><b>{{me.name}}</b><br>{{me.email}}<br><br>
            </div>  
              <router-link class="column b" :to="`/page/cliente/${me.id}/perfilclienteadd`" style="text-decoration: none">
                <i class="material-icons">add</i>Adicionar informações
              </router-link>
              <div class="column card-footer">
                <router-link :to="`/page/cliente/categories`" class="b">
                  <i class="material-icons">search</i> Encontrar profissionais
                </router-link>
                </div>
                <div class="column card-footer">
                  <router-link :to="`/page/cliente/pedidos`" class="b">
                    <i class="material-icons">description</i> Meus pedidos
                  </router-link>
                </div>
                <div class="column card-footer">
                  <router-link :to="`/page/cliente/propostacategory`" class="b">
                    <i class="material-icons" aria-hidden="true">collections</i> Minhas propostas para categorias
                  </router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FIM DO OVERLAY 6 -->

    <!-- DIV MASTER -->
    <div class="columns" v-if="this.clientes" @click="closeNavCelular()">
      
      <!-- OVERLAY 5 -->
      <div
        id="mySidenav"
        class="column is-3-desktop is-4-tablet is-full-mobile sidenav overlay5"
        style="margin-top:25px;border-right:1px solid #ccc;border-top:1px solid #ccc"
        v-if="this.clientes.clientForUserId"
      >
        <div class=" is-12-desktop is-full-mobile">
            <div class="column">
                <div class="columns" style="margin:-30px -30px 0px -20px;padding-top:10px;padding-right:20px">
                    <div class="column is-6-desktop is-offset-1">
                      <div class="columns">
                        <div class="column">
                          <b><i class="material-icons" style="font-size:20pt;color:black" aria-hidden="true">face</i></b>
                        </div>
                        <div class="column" style="margin-top:0px;margin-left:-50px">
                          <span style="color:black;text-transform:uppercase"><b>Perfil</b></span>
                        </div>
                      </div>
                    </div>
                    <div class="column is-offset-0-desktop is-2-desktop is-2-mobile is-2-tablet" style="margin-top:-25px;margin-left:10px">
                      <a href="javascript:void(0)" style="color:black;font-size:30pt" class="closebtn" @click="closeNav()">&times;</a>
                    </div>
                </div>
                <div class="columns column is-offset-2-desktop" id="border1">
                  <div v-if="!this.clientes.clientForUserId[0]" class="column is-8-desktop" align="center">
                    <div for="q" class="column" align="center">
                      <div align="center">
                        <figure class="image is-128x128">
                          <img style="height:120px" :src="`http://graphql.me/perfilcli/noimage.png`" alt="conver image">
                        </figure>
                      </div>
                    </div>
                  </div>
                  <!-- Se o usuário cadastrou as informações e não tem foto no perfil -->
                  
                  <div v-if="this.clientes.clientForUserId[0]" class="column is-8-desktop">
                    <div for="q" class="column is-11-desktop">
                      <div>
                        <figure class="image is-128x128">
                          <img style="height:120px"
                            :src="`http://graphql.me/perfilcli/${this.clientes.clientForUserId[0].imagem}`"
                            alt="conver image"
                          >
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Verificação de Usuário Adcionou ou não informações -->

                <!-- Se ele cadastrou as informações então faz isso -->
                <aside 
                  v-if="this.clientes.clientForUserId[0]"
                  style="margin-top:-40px" id="border"
                > 
                  <div align="center" style="margin-top:-20px;color:black"> 
                    <br><b>{{me.name}}</b><br>{{me.email}}<br><br>
                  </div><br>
                  <div class="card-footer"></div>
                  <router-link
                    class="column b"
                    :to="`/page/cliente/${this.clientes.clientForUserId[0].id}/editcliente/${me.id}`"
                  >
                    <i class="material-icons">edit</i> Editar Perfil
                  </router-link>
                  <div class="column card-footer">
                    <router-link :to="`/page/cliente/categories`" class="b">
                      <i class="material-icons">search</i> Encontrar profissionais
                    </router-link>
                  </div>
                  <div class="column card-footer">
                    <router-link :to="`/page/cliente/pedidos`" class="b">
                      <i class="material-icons">description</i> Meus pedidos
                    </router-link>
                  </div>
                  <div class="column card-footer">
                    <router-link :to="`/page/cliente/propostacategory`" class="b">
                      <i class="material-icons" aria-hidden="true">collections</i> Minhas propostas para categorias
                    </router-link>
                  </div>
                  <div class="column card-footer">
                    <router-link :to="`/page/cliente/mensagens`" class="b">
                      <i class="material-icons" aria-hidden="true">send</i> Minhas mensagens
                    </router-link>
                  </div>
                </aside>
                <!-- Se ele não adicionou nada então manda adicionar -->
                <div class="column" style="margin-top:-60px" v-if="!this.clientes.clientForUserId[0]">
                  <div>
                    <div align="center">
                      <br><b>{{me.name}}</b><br>{{me.email}}<br><br>
                    </div>
                    <router-link class="column b" :to="`/page/cliente/${me.id}/perfilclienteadd`" style="text-decoration: none">
                      <i class="material-icons">add_circle</i> Adicionar informações
                    </router-link>
                    <div class="column card-footer">
                    <router-link :to="`/page/cliente/categories`" class="b">
                      <i class="material-icons">search</i> Encontrar profissionais
                    </router-link>
                    </div>
                    <div class="column card-footer">
                      <router-link :to="`/page/cliente/pedidos`" class="b">
                        <i class="material-icons">description</i> Meus pedidos
                      </router-link>
                    </div>
                    <div class="column card-footer">
                      <router-link :to="`/page/cliente/propostacategory`" class="b">
                        <i class="material-icons" aria-hidden="true">collections</i> Minhas propostas para categorias
                      </router-link>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
      <!-- FIM DO OVERLAY 5 -->
      
      <div
        :class="`column ${this.chefao} is-12-tablet is-full-mobile`"
        v-if="me && this.clientes.clientForUserId"
      >
        <div class="column is-12-desktop is-12-tablet is-full-mobile">
          <!-- BOTAO VOLTAR -->
          <nav
            class="breadcrumb overlay5"
            aria-label="breadcrumbs" style="margin-left:40px" v-if="this.chefao!=='is-9-desktop'"
          >
            <ul>
              <li>
                <a style="color:hsl(171, 100%, 41%)" @click.prevent="openNav()">
                  <span class="icon is-small">
                    <b style="font-size:14pt">
                      <div class="columns">
                        <i class="material-icons" aria-hidden="true" style="margin-top:2px;margin-right:10px">face</i>
                        <div>Perfil</div>
                      </div>
                    </b>
                  </span>
                  <span style><i class="material-icons"></i></span>
                </a>
              </li>
            </ul>
          </nav>

          <!-- MOSTRA A PARTE DE CIMA COM A FOTO DO PERFIL E O NOME PARA OS CELULARES E TABLETS -->
          <div class="box overlay6" style="padding-bottom:2%">
            <nav
            class="breadcrumb overlay5"
            aria-label="breadcrumbs" style="margin-left:40px" v-if="this.chefao!=='is-9-desktop'"
            >
            <ul>
                <li>
                  <a style="color:hsl(171, 100%, 41%)" @click.prevent="openNav()">
                    <span class="icon is-small">
                      <b style="font-size:14pt"><i class="material-icons" aria-hidden="true" style="margin-top:-10px">undo</i>abrir</b>
                    </span>
                    <span style><i class="material-icons"></i></span>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="columns is-mobile">
              <div v-if="!this.clientes.clientForUserId[0]" class="overlay6">
                <div for="q" class="column">
                  <div>
                    <figure class="image is-128x128">
                      <img
                        class="img" style="height:120px"
                        :src="`http://graphql.me/perfilcli/noimage.png`"
                        alt="conver image"
                      >
                    </figure>
                  </div>
                </div>
              </div>
              <div v-if="this.clientes.clientForUserId[0]">
                <div for="q" class="column is-2-desktop is-2-tablet is-3-mobile">
                  <div>
                    <figure class="image is-128x128">
                      <img
                        class="img" style="height:120px"
                        :src="`http://graphql.me/perfilcli/${this.clientes.clientForUserId[0].imagem}`"
                        alt="conver image"
                      >
                    </figure>
                  </div>
                </div>
              </div>
              <div class="column is-8-tablet is-8-mobile">
                <div
                    class="title is-3 overlay3"
                    style="margin-top:40px"
                  >{{this.me.name}}
                </div>
                <div class="overlay4">
                  <div
                    class="title is-3"
                    style="margin-top:40px"
                  >
                    {{this.me.name}}
                    <br>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- SUAS INFORMAÇÕES -->
          <div class="column box is-12-tablet" style="margin-top:0em">
            <div class="overlay3">
              <div class="columns">
                <div class="column is-6-desktop is-8-tablet">
                  <h1 style="margin-top:1em" class="column is-12-desktop is-12-tablet">
                    <b>Suas informações!</b>
                  </h1>
                </div>
                <div class="column" v-if="this.clientes.clientForUserId[0]">
                  <a
                    :href="`/page/cliente/${this.clientes.clientForUserId[0].id}/editcliente/${me.id}`"
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
                <div class="column is-3-mobile" v-if="this.clientes.clientForUserId[0]">
                  <a
                    :href="`/page/cliente/${this.clientes.clientForUserId[0].id}/editcliente/${me.id}`"
                    style="margin-top:1em"
                    class="level-right"
                  >
                    <i class="material-icons">edit</i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card-footer"></div>
            <div v-if="this.clientes.clientForUserId[0]">
              <br>
              <div class="column">
                <div class="columns">
                  <div class="column"><b>Cidade: </b>{{this.clientes.clientForUserId[0].cidade}}</div>
                  <div
                    class="column is-offset-1-desktop"
                  ><b>Estado: </b>{{this.clientes.clientForUserId[0].estado}}</div>
                </div>
              </div>
              <div class="column"><b>Endereço: </b>{{this.clientes.clientForUserId[0].logradouro}}</div>
              <div class="column"><b>Telefone: </b>{{this.clientes.clientForUserId[0].telefone}}</div>
            </div>
            <div v-if="!this.clientes.clientForUserId[0]">
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
          <!-- ALGUMAS PROPOSTAS PARA OS PROFISSIONAIS -->
          <div class="column box is-12-tablet">
            <div class="column">
              <h1>
                <b>Algumas propostas para os profissionais</b>
              </h1>
            </div>
            <div class="card-footer"></div>
            <div v-if="this.clientes.clientForUserId[0]">
              <ApolloQuery
                :query="require('@/graphql/queries/propostaCatForUserEnvia.gql')"
                :variables="{user_envia_id:this.clientes.clientForUserId[0].id}"
              >
                <template slot-scope="{ result: { data, loading },isLoading }">
                  <div v-if="isLoading">Loading...</div>
                  <div v-else>
                    <div v-if="data">
                      <br>
                      <div v-for="prop of data.propostaCatForUserEnvia" :key="prop.id">
                        <div class="columns">
                          <div class="column is-3-desktop is-3-tablet">
                            <div class="columns is-mobile">
                              <div class="column is-12-desktop is-12-tablet is-6-mobile">
                                <img
                                  :src="`http://graphql.me/categoryImage/${prop.category.image}`"
                                  alt="Placeholder image"
                                  width="100%"
                                >
                                <div
                                  align="center"
                                  class="column is-12-desktop is-12-tablet is-3-mobile overlay3"
                                >
                                  Proposta enviada para a categoria:
                                  <b>{{prop.category.name}}</b>
                                  <div class="column" align="center">
                                    <div
                                      v-if="prop.status === 2 || (prop.lances[0] && prop.status===0) || prop.status ===4"
                                    >
                                      <router-link
                                        :to="`/page/cliente/propostacategory/analisar/${prop.id}`"
                                      >
                                        <button
                                          class="btn1 column is-12-desktop is-full-mobile"
                                        >Ver detalhes</button>
                                      </router-link>
                                    </div>
                                    <div v-else>
                                      <router-link :to="`/page/cliente/propostacategory`">
                                        <button
                                          class="btn1 column is-12-desktop is-full-mobile"
                                        >Ver detalhes</button>
                                      </router-link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                align="center"
                                class="overlay4 column is-6-mobile"
                                style="margin-top:1em"
                              >
                                Proposta enviada para a categoria:
                                <b
                                  class="title is-5"
                                >{{prop.category.name}}</b>
                                <div
                                  v-if="prop.status ===2 || (prop.lances[0] && prop.status===0) || prop.status ===4"
                                >
                                  <router-link
                                    :to="`/page/cliente/propostacategory/analisar/${prop.id}`"
                                  >
                                    <button
                                      class="btn1 column is-12-desktop is-full-mobile"
                                    >Ver detalhes</button>
                                  </router-link>
                                </div>
                                <div v-else>
                                  <router-link :to="`/page/cliente/propostacategory`">
                                    <button
                                      class="btn1 column is-12-desktop is-full-mobile"
                                    >Ver detalhes</button>
                                  </router-link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="columns is-mobile column">
                            <div class="column is-12-desktop is-12-tablet is-12-mobile">
                              <div class="columns is-mobile">
                                <!-- MOSTRA O TITULO DA PROPOSTA -->
                                <div :class="`column is-9-desktop is-9-tablet is-8-mobile`">
                                  <div class="column">
                                    <h2 class="title is-4">
                                      <b>{{prop.titulo}}</b>
                                    </h2>
                                  </div>
                                </div>
                                <!-- BOLINHA SE NÂO TIVER LANCES PRA ESSA PROPOSTA FAZ ISSO! -->
                                <div v-if="prop.status === 0 && !prop.lances[0]" class="column">
                                  <div class="column">
                                    <div class="column">
                                      <div class="tag is-warning">
                                        <b>Esperando respostas...</b>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <!-- BOLINHA SE TIVER LANCES PRA ESSA PROPOSTA FAZ ISSO! -->
                                <div
                                  v-if="prop.status ===0 && prop.lances[0]"
                                  class="column is-3-desktop"
                                >
                                  <div class="column">
                                    <div class>
                                      <ApolloQuery
                                        :query="require('@/graphql/queries/lancesCountProposta.gql')"
                                        :variables="{prop_cat:prop.id}"
                                      >
                                        <template
                                          slot-scope="{ result: { data, loading },isLoading }"
                                        >
                                          <div v-if="isLoading">Loading...</div>
                                          <div v-else>
                                            <div v-if="data">
                                              <div
                                                class="tag is-primary"
                                                v-if="data.lancesCountProposta === 1"
                                              >
                                                <b>{{data.lancesCountProposta}} proposta</b>
                                              </div>
                                              <div
                                                class="tag is-primary"
                                                v-if="data.lancesCountProposta > 1"
                                              >
                                                <b>{{data.lancesCountProposta}} propostas</b>
                                              </div>
                                            </div>
                                          </div>
                                        </template>
                                      </ApolloQuery>
                                    </div>
                                  </div>
                                </div>
                                <div v-if="prop.status===2">
                                  <div class="column">
                                    <div class="column">
                                      <div class="tag is-success">
                                        <b>Pedido aceito!</b>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div v-if="prop.status===3">
                                  <div class="column">
                                    <div class="column">
                                      <div
                                        class="tag is-success"
                                        style="background:rgb(99, 74, 110)"
                                      >
                                        <b>Pedido finalizado</b>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div v-if="prop.status===4">
                                  <div class="column">
                                    <div class="column">
                                      <div class="tag is-success" style="background:rgb(98, 0, 49)">
                                        <b>Usuário avaliado!</b>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="column" style="margin-top:-40px">{{prop.date}}</div>
                              <!-- INFORMAÇÕES DE PREÇO E LOGRADOURO -->
                              <div class="colums is-mobile">
                                <div class="column is-12-desktop is-12-tablet">
                                  <div class="columns is-mobile">
                                    <div class="column is-4-desktop is-5-tablet is-6-mobile">
                                      <div>
                                        <b>Preço:</b>
                                        {{prop.valor}}
                                      </div>
                                    </div>
                                    <div class="column is-7-desktop is-6-tablet is-6-mobile">
                                      <div>
                                        <b>Logradouro:</b>
                                        {{prop.local}}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="column" style="text-align:justify">
                                <b>Descrição:</b>
                                {{prop.descricao}}
                              </div>
                              <div v-if="prop.status === 2" class="column">
                                <article class="message">
                                  <div class="message-body">
                                    <b>Você aceitou o pedido do {{prop.user_aceito.user.name}}, veja os detalhes!</b>
                                  </div>
                                </article>
                              </div>
                              <div v-if="prop.status === 3" class="column">
                                <div class="column is-10-desktop" align="center">
                                  <router-link
                                    :to="`/page/cliente/propostacategory/avaliar/${prop.id}`"
                                  >
                                    <button
                                      class="btn1 column is-12-desktop is-full-mobile"
                                      style="font-size:10pt;border-radius:100px"
                                    >Avaliar Profissional</button>
                                  </router-link>
                                </div>
                              </div>
                              <div v-if="prop.status === 4" class="column">
                                <article class="message">
                                  <div class="message-body">
                                    <b>O {{prop.user_aceito.user.name}} foi avaliado por voçê, veja os detalhes!</b>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer"></div>
                        <br>
                      </div>
                      <router-link
                        :to="`/page/cliente/propostacategory`"
                        class="column"
                        align="center"
                        v-if="data.propostaCatForUserEnvia[0]"
                      >
                        <button
                          class
                          style="color:blue"
                          align="center"
                        >Ver mais propostas para as categorias</button>
                      </router-link>
                      <div
                        class="column"
                        v-else
                      >Voçê ainda não mandou nenhum pedido a categoria de profissionais!</div>
                    </div>
                  </div>
                </template>
              </ApolloQuery>
            </div>
            <div v-else>
              <div class="column">
                <div>Você ainda não mandou nenhuma proposta de serviço!</div>
              </div>
            </div>
          </div>
          <!-- PROPOSTAS PARA PROFISSIONAIS ESPECÍFICOS -->
          <div class="column box is-12-tablet">
            <div class="column">
              <h1>
                <b>Propostas para profissionais específicos</b>
              </h1>
            </div>
            <div class="card-footer"></div>
            <div v-if="this.clientes.clientForUserId[0]">
              <ApolloQuery
                :query="require('@/graphql/queries/propostaLimit.gql')"
                :variables="{user_envia:this.clientes.clientForUserId[0].id}"
              >
                <template slot-scope="{ result: { data, loading },isLoading }">
                  <div v-if="isLoading">Loading...</div>
                  <div v-else>
                    <div v-if="data">
                      <br>
                      <div v-for="prop of data.propostaLimit" :key="prop.id">
                        <div class="columns">
                          <div class="column is-3-desktop is-3-tablet">
                            <div class="columns">
                              <div
                                class="column is-9-desktop is-offset-2-desktop is-12-tablet is-6-mobile is-offset-3-mobile"
                                align="center"
                              >
                                <img
                                  class="img"
                                  :src="`http://graphql.me/imagem/${prop.user_recebe.imagem}`"
                                  alt="Placeholder image"
                                  width="65%"
                                >
                                <div
                                  align="center"
                                  class="column is-12-desktop is-12-tablet is-3-mobile overlay3"
                                >
                                  Você enviou para>
                                  <router-link
                                    :to="`/page/cliente/categories/profissional/${prop.user_recebe.id}`"
                                  >
                                    <div style="color:blue">{{prop.user_recebe.user.name}}</div>
                                  </router-link>
                                  <div class="column" align="center"></div>
                                </div>
                              </div>
                              <div
                                align="center"
                                class="overlay4 column is-6-mobile is-offset-3-mobile"
                                style="margin-top:1em"
                              >
                                Você enviou para>
                                <router-link
                                  :to="`/page/cliente/categories/profissional/${prop.user_recebe.id}`"
                                >
                                  <div style="color:blue">{{prop.user_recebe.user.name}}</div>
                                </router-link>
                              </div>
                            </div>
                          </div>
                          <div class="columns is-mobile column">
                            <div class="column is-12-desktop is-12-tablet is-12-mobile">
                              <div class="columns column">
                                <!-- MOSTRA O TITULO DA PROPOSTA -->
                                <div :class="`column is-9-desktop is-9-tablet is-12-mobile column`">
                                  <div class>
                                    <h2 class="title is-4">
                                      <b>{{prop.titulo}}</b>
                                    </h2>
                                  </div>
                                </div>
                                <!-- BOLINHA SE NÂO TIVER LANCES PRA ESSA PROPOSTA FAZ ISSO! -->
                                <div v-if="prop.status === 0">
                                  <div class>
                                    <div class="column">
                                      <div class="tag is-warning">
                                        <b>Esperando...</b>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div v-if="prop.status === 1">
                                  <div class>
                                    <div class="column">
                                      <div class="tag is-success">
                                        <b>Pedido aceito!</b>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div v-if="prop.status === 2">
                                  <div class>
                                    <div class="column">
                                      <div class="tag is-danger" style="background:rgb(224, 0, 0)">
                                        <b>Pedido recusado!</b>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div v-if="prop.status === 3">
                                  <div class>
                                    <div class="column">
                                      <div
                                        class="tag is-danger"
                                        style="background:rgb(99, 74, 110)"
                                      >
                                        <b>Pedido Finalizado!</b>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div v-if="prop.status === 4">
                                  <div class>
                                    <div class="column">
                                      <div class="tag is-success" style="background:rgb(98, 0, 49)">
                                        <b>Usuário avaliado!</b>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="column" style="margin-top:-40px">{{prop.date}}</div>
                              <!-- INFORMAÇÕES DE PREÇO E LOGRADOURO -->
                              <div class="colums">
                                <div class="column is-12-tablet">
                                  <div class="columns is-mobile">
                                    <div class="column is-5-desktop is-6-tablet is-5-mobile">
                                      <div>
                                        <b>Preço:</b>
                                        {{prop.valor}}
                                      </div>
                                    </div>
                                    <div class="column is-6-desktop is-6-tablet is-6-mobile">
                                      <div>
                                        <b>Logradouro:</b>
                                        {{prop.local}}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!-- INFORMAÇÃO DESCRICÃO DA PROPOSTA -->
                              <div>
                                <div class="column" style="text-align:justify">
                                  <b>Descrição:</b>
                                  {{prop.descricao}}
                                </div>
                              </div>
                              <div v-if="prop.status === 1">
                                <div
                                  class="column is-12-desktop"
                                  align="center"
                                  v-if="prop.orcamento[0]"
                                >
                                  <router-link
                                    :to="`/page/cliente/pedidos/orcamento/${prop.orcamento[0].id}`"
                                  >
                                    <button
                                      class="btn1 column is-12-desktop is-full-mobile"
                                      style="font-size:10pt;border-radius:100px"
                                    >Ver disponibilidade</button>
                                  </router-link>
                                </div>
                              </div>
                              <div v-if="prop.status === 3">
                                <div
                                  class="column is-12-desktop"
                                  align="center"
                                  v-if="prop.orcamento[0]"
                                >
                                  <article class="message">
                                    <div class="message-body">
                                      <b>O {{prop.user_recebe.user.name}} finalizou esse serviço agora você pode avalia-lo!</b>
                                    </div>
                                  </article>
                                  <router-link :to="`/page/cliente/pedidos/avaliacao/${prop.id}`">
                                    <button
                                      class="btn1 column is-12-desktop is-12-tablet is-full-mobile"
                                      style="font-size:10pt;border-radius:100px"
                                    >AVALIAR PROFISSIONAL</button>
                                  </router-link>
                                </div>
                              </div>
                              <div v-if="prop.status === 2" class="column">
                                <article class="message">
                                  <div class="message-body" style="text-align:center">
                                    <b>O(A) {{prop.user_recebe.user.name}} recusou esse pedido :(</b>
                                  </div>
                                </article>
                                <router-link
                                  :to="`/page/cliente/pedidos`"
                                  class="column"
                                  v-if="data.propostaLimit[0]"
                                >
                                  <button
                                    class="btn1 column is-12-desktop is-12-tablet is-full-mobile"
                                    style="font-size:10pt;border-radius:100px"
                                  >Ver mais detalhes</button>
                                </router-link>
                              </div>
                              <div v-if="prop.status === 4" class="column">
                                <article class="message">
                                  <div class="message-body" style="text-align:center">
                                    <b>Voçê avaliou o {{prop.user_recebe.user.name}} veja o perfil dele(a)!</b>
                                  </div>
                                </article>
                              </div>
                              <div v-if="prop.status === 0" class="column">
                                <article class="message">
                                  <div class="message-body" style="text-align:center">
                                    <b>Esperando o {{prop.user_recebe.user.name}} dar o feedback!</b>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer"></div>
                        <br>
                      </div>
                      <router-link
                        :to="`/page/cliente/pedidos`"
                        class="column"
                        align="center"
                        v-if="data.propostaLimit[0]"
                      >
                        <button class style="color:blue" align="center">Ver mais detalhes</button>
                      </router-link>
                      <div
                        class="column"
                        v-else
                      >Voçê ainda não mandou nenhum pedido para profissionais específicos!</div>
                    </div>
                  </div>
                </template>
              </ApolloQuery>
            </div>
            <div v-else>
              <div class="column">
                <div>Você ainda não mandou nenhuma proposta de serviço!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import clientForUserId from "@/graphql/queries/clientForUserId.gql";

export default {
  data() {
    return {
      me: null,
      clientes: [],
      elementoCss: {
        sidebar: ""
      },
      chefao: "is-9-desktop",
      clica: ""
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
    clientes: {
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
          this.clientes = data;
          return this.clientes;
        }
      }
    }
  },
  methods: {
    fade() {
      this.fadeOut = "none";
      this.fadeIn = "inline";
    },
    show() {
      this.fadeOut = "inline";
      this.fadeIn = "none";
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "25%";
      document.getElementById("mySidenav").style.marginLeft = "0%";

      this.chefao = "is-9-desktop";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0%";
      document.getElementById("mySidenav").style.marginLeft = "-1.6%";
      this.chefao = "is-12-desktop";
    },
    openNavCelular() {
      document.getElementById("mySidenavCelular").style.width = "350px";
      this.clica = "ok";
    },
    closeNavCelular() {
      document.getElementById("mySidenavCelular").style.width = "0px";
    }
  },
  created() {
    if (this.me) {
      localStorage.setItem("status", this.me.status);
    }
  }
};
</script>
<style>
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

</style>
<style lang="stylus"></style>
