<template>
  <div>
    <!-- BREADCRUMB -->
        <img src="../../assets/frontendimages/background5.png" data-aos="slide-down" data-aos-duration="1000" alt="" style="position:absolute;top:0;width:120%;height:auto;max-width:100%;z-index:-1">

    <nav
      class="breadcrumb column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet"
      aria-label="breadcrumbs" style="font-weight:bold">
      <ul>
        <li>
          <router-link to="/page/cliente" style="color:hsl(171, 100%, 41%)">
            <span class="icon is-small">
              <i class="material-icons" aria-hidden="true">face</i>
            </span>
            <span>Perfil</span>
          </router-link>
        </li>
        <li>
          <router-link to="/page/cliente/propostacategory" style="color:hsl(171, 100%, 41%)">
            <span class="icon is-small">
              <i class="material-icons" aria-hidden="true">description</i>
            </span>
            <span>Pedidos para a(s) categoria(s)</span>
          </router-link>
        </li>
        <li class="is-active">
          <a href="#">
            <span class="icon is-small">
              <i class="material-icons" aria-hidden="true">clear_all</i>
            </span>
            <span>Detalhes</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->
    <br>
    <h3
      class="title is-3 column is-6-desktop is-10-tablet is-offset-1-tablet is-offset-3-desktop is-full-mobile"
      style="color:black;text-align:center;text-transform:uppercase;font-size:25pt"
    ><b>Veja abaixo as respostas dos profissionais para sua demanda</b></h3>
    
    <div class="column is-6-desktop is-offset-3-desktop" style="border-bottom:1px solid black;margin-top:-10px"></div><br><br><br>
    <div v-if="this.cli.clientForUserId">
      <ApolloQuery
        :query="require('@/graphql/queries/propostaCatForId.gql')"
        :variables="{id:this.$route.params.id}"
      >
        <template slot-scope="{ result: { data, loading },isLoading }">
          <div v-if="isLoading">Loading...</div>
          <div v-else>
            <div v-if="data">
              <div v-for="prop of data" :key="prop.id">
                <div class="column is-12-desktop is-full-mobile">
                  <div class style="border-radius:20px">
                    <!-- INFORMAÇÕES DA PARTE DE CIMA -->
                    <div class="columns column"  style="color:black" data-aos="slide-right" data-aos-duration="1000">
                      <div class="column is-3-desktop is-4-tablet is-6-mobile is-offset-3-mobile">
                        <div class="column">
                          <div class="level-item">
                            <img
                              width="90%"
                              :src="`http://graphql.me/categoryImage/${prop.category.image}`"
                              alt="Placeholder image"
                            >
                          </div>
                          <div class="column"></div>
                          <div style="font-size:12pt" align="center">
                            Pedido para a categoria:
                            <div class>
                              <b>{{prop.category.name}}</b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="column is-8-desktop is-full-mobile" style="margin-top:30px">
                        <div class="columns">
                          <div class="column is-8-desktop">
                            <div class="title is-4" style="text-transform:uppercase"><b style="color:black">{{prop.titulo}}</b></div>
                          </div>
                          <div class="column is-6-desktop">
                            <div
                              v-if="prop.status===0"
                              class="column is-8-desktop"
                              style="font-size:10pt;background:hsl(48, 100%, 67%);color:black;padding:5px;text-align:center;border-radius:5px"
                            >
                              <b>Aberto</b>
                            </div>
                            <div
                              v-if="prop.status===2"
                              class="column is-8-desktop"
                              style="font-size:10pt;background:hsl(141, 71%, 48%);color:white;padding:5px;text-align:center;border-radius:5px"
                            >
                              <b>Pedido Aceito :)</b>
                            </div>
                            <div
                              v-if="prop.status===4"
                              class="column is-8-desktop"
                              style="font-size:10pt;background:rgb(98, 0, 49);color:white;padding:5px;text-align:center;border-radius:5px"
                            >
                              <b>Profissional avaliado</b>
                            </div>
                          </div>   
                        </div>
                        <div style="margin-top:-20px">{{prop.date}}</div>
                        <br>
                        <div class="columns is-mobile column">
                          <div class="column is-6-desktop">
                            <div>
                              <b>Local do serviço:</b>
                              {{prop.local}}
                            </div>
                          </div>
                          <div class="column is-6-desktop">
                            <div>
                              <b>Pra quando?</b>
                              {{prop.tempo}}
                            </div>
                          </div>
                        </div>
                        <div class="columns is-mobile" style="margin-top:-40px">
                          <div class="column is-6-desktop">
                            <div class="column">
                              <div>
                                <b>Valor:</b>
                                {{prop.valor}}
                              </div>
                            </div>
                          </div>
                          <div class="column">
                            <div class="column">
                              <div>
                                <b>Tipo do serviço:</b>
                                {{prop.tipo}}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="column is-12-desktop is-12-tablet" style="margin-top:-20px">
                          <div style="text-align:justify">
                            <b>Descrição do serviço:</b>
                            <p>{{prop.descricao}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br>
                  </div>
                </div>
                <br>
                <br>
                <!-- INICIO DA PARTE DO MEIO -->
                <section class="hero" style="background:rgb(233,255,246);color:black">
                  <div class="hero-body" style>
                    <div class=" columns column">
                      <div class="column is-4-desktop" style="margin-right:3%">
                        <img
                          src="https://oportunidade24horas.com/wp-content/uploads/2018/06/empregos-rj-Encarregado-de-Servi%C3%A7os-Gerais.png"
                          alt
                        >
                      </div>
                      <h1 class="title column is-6-desktop" style="margin-top:5%">
                        <b class="color:black">Abaixo estão as disponibilidades dos profissionais</b><br><br>
                        <h2 class="subtitle">Você só pode aceitar uma pessoa, portanto veja os detalhes de cada um, ou envie mensagem para negociar melhor com eles!</h2>
                      </h1>
                    </div>
                  </div>
                </section>
                <br><br>
                <!-- LANCES DOS PROFISSIONAIS!!! -->
                <div class="column" style="font-size:30pt;color:black;font-weight:bold" align="center">Respostas</div><br>
                <div class="column is-10-desktop is-offset-1-desktop is-full-mobile" style="color:black">
                  <div v-for="l of prop.lances" :key="l.id">
                    <div v-if="prop.status === 0">
                      <div class="card">
                        <div class="columns">
                          <div
                            class="column is-3-desktop is-4-tablet is-6-mobile is-offset-3-mobile"
                          >
                            <div class="column">
                              <div class="level-item">
                                <img
                                  class="img"
                                  width="60%"
                                  height="10%"
                                  :src="`http://graphql.me/imagem/${l.user_lance.imagem}`"
                                  alt="Placeholder image"
                                >
                              </div>
                              <br>
                              <ApolloQuery
                                :query="require('@/graphql/queries/mediaAvaliacao.gql')"
                                :variables="{user_avaliado:l.user_lance.id}" style="margin-top:-20px"
                              >
                                <template slot-scope="{ result: { data, loading },isLoading }">
                                  <div v-if="isLoading">Loading...</div>
                                  <div v-else>
                                    <div v-if="data">
                                      <div v-if="data.mediaAvaliacao !== null" align="center">
                                        <div v-if="data.mediaAvaliacao === 5">
                                          <img
                                            class="column is-9-desktop is-6-tablet is-8-mobile"
                                            src="../../assets/estrela5.png"
                                            alt="cover image"
                                          >
                                        </div>
                                        <div
                                          v-if="data.mediaAvaliacao >= 4 && data.mediaAvaliacao < 5"
                                        >
                                          <img
                                            class="column is-9-desktop is-6-tablet is-8-mobile"
                                            src="../../assets/estrela4.png"
                                            alt="cover image"
                                          >
                                        </div>
                                        <div
                                          v-if="data.mediaAvaliacao >= 3 && data.mediaAvaliacao < 4"
                                        >
                                          <img
                                            class="column is-9-desktop is-6-tablet is-8-mobile"
                                            src="../../assets/estrela3.png"
                                            alt="cover image"
                                          >
                                        </div>
                                        <div
                                          v-if="data.mediaAvaliacao >= 2 && data.mediaAvaliacao < 3"
                                        >
                                          <img
                                            class="column is-9-desktop is-6-tablet is-8-mobile"
                                            src="../../assets/estrela2.png"
                                            alt="cover image"
                                          >
                                        </div>
                                        <div v-if="data.mediaAvaliacao < 2">
                                          <img
                                            class="column is-12-desktop is-6-tablet is-8-mobile"
                                            src="../../assets/estrela1.png"
                                            alt="cover image"
                                          >
                                        </div>
                                      </div>
                                      <div v-else>
                                        <div class="level-item">Não foi avaliado!</div>
                                      </div>
                                    </div>
                                  </div>
                                </template>
                              </ApolloQuery>
                              <div class="column" style="margin-top:-10px">
                                <button
                                  class="btn1 column is-12-desktop is-12-tablet is-full-mobile"
                                  style="font-size:10pt;border-radius:100px;padding:5px"
                                  @click.prevent="mudar(l.user_lance.id)"
                                >Ver detalhes</button>
                              </div>
                            </div>
                          </div>
                          <div class="column is-12-desktop is-full-mobile">
                            <div class="column">
                              <div class="columns is-mobile">
                                <div class="column is-7-desktop is-9-tablet is-8-mobile">
                                  <router-link
                                    :to="`/page/cliente/categories/profissional/${l.user_lance.id}`"
                                    class="is-full-mobile title is-4 hover" style="font-size:20pt"
                                  >{{l.user_lance.user.name}}</router-link>
                                </div>
                                <div class="column is-4-desktop">
                                  <div>{{l.date}}</div>
                                </div>
                              </div>
                            </div>
                            <div class="columns is-mobile column" style="margin-top:-10px">
                              <div class="column is-3-desktop is-5-tablet">
                                <div>
                                  <b>Disponibilidade na semana:</b>
                                </div>
                                <div>{{l.data}}</div>
                                <br>
                              </div>
                              <div
                                class="column is-4-desktop is-5-tablet is-offset-0-desktop is-offset-1-tablet"
                              >
                                <div>
                                  <b>Hora disponivel no geral:</b>
                                </div>
                                Das {{l.horaInicio}} às {{l.horaFim}}
                              </div>
                            </div>
                            <div class="column is-8-desktop" style="margin-top:-40px">
                              <div style="margin-bottom:8px">
                                <b>Descrição do horário:</b>
                              </div>
                              <div style="text-align:justify">{{l.descricao}}</div>
                            </div>
                            <div class="column is-4-desktop is-offset-5-desktop is-offset-5-tablet">
                              <div v-if="l.status === 0">
                                <div class="columns is-mobile">
                                  <div class="column">
                                    <button
                                      class="btn-12 column is-6-desktop is-offset-7-desktop is-offset-8-tablet is-full-mobile"
                                      @click="aceitar(prop.id,l.id,l.user_lance.id)"
                                    >
                                      <i class="material-icons">thumb_up</i>
                                    </button>
                                  </div>
                                  <div class="column">
                                    <button
                                      class="btn-13 column is-6-desktop is-full-mobile"
                                      @click="recusar(l.id)"
                                    >
                                      <i class="material-icons">thumb_down</i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div v-if="l.status === 3" class="column is-9-desktop is-full-mobile">
                              <b style="color:black;bottom:0;padding:0" class="column is-11-desktop is-12-tablet is-full-mobile">
                                <article class="message is-danger " style="border-radius:15px;text-align:center">
                                  <div class="message-body" style="color:black;">
                                    Você recusou esse pedido
                                  </div>
                                </article>
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br>
                      <br>
                    </div>
                    <!-- SE O USUÁRIO ACEITAR UMA PROPOSTA OU SE ELE AVALIAR O PROFISSIONAL -->
                    <div class="card" v-if="prop.status === 2 || prop.status === 4">
                      <div class="columns column" v-if="l.status === 1 || l.status === 2">
                        <div class="column is-3-desktop is-4-tablet is-6-mobile is-offset-3-mobile">
                          <div class="column">
                            <div class="level-item">
                              <img
                                class="img"
                                width="60%"
                                height="10%"
                                :src="`http://graphql.me/imagem/${l.user_lance.imagem}`"
                                alt="Placeholder image"
                              >
                            </div>
                            <!-- AVALIACAO ESTRELINHA -->
                            <ApolloQuery
                              :query="require('@/graphql/queries/mediaAvaliacao.gql')"
                              :variables="{user_avaliado:l.user_lance.id}">
                              <template slot-scope="{ result: { data, loading },isLoading }">
                                <div v-if="isLoading">Loading...</div>
                                <div v-else>
                                  <div v-if="data">
                                    <div v-if="data.mediaAvaliacao !== null" align="center">
                                      <div v-if="data.mediaAvaliacao === 5">
                                        <img
                                          class="column is-10-desktop is-10-tablet is-12-mobile"
                                          src="../../assets/estrela5.png"
                                          alt="cover image"
                                        >
                                      </div>
                                      <div
                                        v-if="data.mediaAvaliacao >= 4 && data.mediaAvaliacao < 5"
                                      >
                                        <img
                                          class="column is-10-desktop is-10-tablet is-12-mobile"
                                          src="../../assets/estrela4.png"
                                          alt="cover image"
                                        >
                                      </div>
                                      <div
                                        v-if="data.mediaAvaliacao >= 3 && data.mediaAvaliacao < 4"
                                      >
                                        <img
                                          class="column is-10-desktop is-10-tablet is-12-mobile"
                                          src="../../assets/estrela3.png"
                                          alt="cover image"
                                        >
                                      </div>
                                      <div
                                        v-if="data.mediaAvaliacao >= 2 && data.mediaAvaliacao < 3"
                                      >
                                        <img
                                          class="column is-10-desktop is-10-tablet is-12-mobile"
                                          src="../../assets/estrela2.png"
                                          alt="cover image"
                                        >
                                      </div>
                                      <div v-if="data.mediaAvaliacao < 2">
                                        <img
                                          class="column is-10-desktop is-10-tablet is-12-mobile"
                                          src="../../assets/estrela1.png"
                                          alt="cover image"
                                        >
                                      </div>
                                    </div>
                                    <div v-else>
                                      <div class="level-item">Não foi avaliado!</div>
                                    </div>
                                  </div>
                                </div>
                              </template>
                            </ApolloQuery>
                            <div class="column" style="margin-top:-10px">
                                <button
                                  class="btn1 column is-12-desktop is-12-tablet is-full-mobile"
                                  style="font-size:10pt;border-radius:100px;padding:5px"
                                  @click.prevent="mudar(l.user_lance.id)"
                                >Ver detalhes</button>
                              </div>
                          </div>
                        </div>
                        <!-- INFORMAÇÕES DOS PROFISSIONAIS DISPONIBILIDADE -->
                        <div class="column is-10-desktop is-10-tablet is-full-mobile">
                          <div class="column">
                            <div class="columns is-mobile">
                              <div class="column is-9-desktop is-8-mobile">
                                <router-link
                                  :to="`/page/cliente/categories/profissional/${l.user_lance.id}`"
                                  class="is-full-mobile title is-4 hover"
                                >{{l.user_lance.user.name}}</router-link>
                              </div>
                              <div class="column is-4-desktop">
                                <div>{{l.date}}</div>
                              </div>
                            </div>
                          </div>
                          <div class="columns is-mobile column" style="color:black">
                            <div class="column is-4-desktop is-4-tablet" >
                              <div>
                                <b>Disponibilidade na semana:</b>
                              </div>
                              <div>{{l.data}}</div>
                              <br>
                            </div>
                            <div
                              class="column is-5-desktop is-5-tablet is-offset-0-desktop is-offset-1-tablet"
                            >
                              <div>
                                <b>Hora disponivel no geral:</b>
                              </div>
                              Das {{l.horaInicio}} às {{l.horaFim}}
                            </div>
                          </div>
                          <div class="column is-10-desktop is-10-tablet" style="margin-top:-40px;color:black">
                            <div style="margin-bottom:8px">
                              <b>Descrição do horário:</b>
                            </div>
                            <div style="text-align:justify">{{l.descricao}}</div>
                          </div>
                        </div>
                      </div>
                      <!-- MENSAGENS -->
                      <div v-if="l.status === 1 || l.status === 2" style="margin-top:-30px">
                        <div v-if="prop.status === 4">
                          <b style="bottom:0;padding:0" >
                            <article style="text-align:center">
                              <div class="message-body" style="border-left:5px solid rgb(98, 0, 49);color:black;background:rgba(255, 215, 235, 0.24)">
                                O {{l.user_lance.user.name}} foi avaliado por você! Olhe o perfil dele(a). <div>Obs: clique no nome dele(a).</div> 
                              </div>
                            </article>
                          </b>
                        </div>
                        <div v-if="prop.status === 2">
                          <b style="color:black;padding:0">
                            <article class="message is-success" style="text-align:center">
                              <div class="message-body">
                                Muito bem você aceitou a proposta da {{l.user_lance.user.name}} entre em contato com ele(a) através do: <div> telefone {{l.user_lance.telefone}} ou pelo email {{l.user_lance.user.email}} para continuar a negociação</div>
                              </div>
                            </article>
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- MODAL PARA MOSTRAR INFORMAÇÕES DOS PROFISSIONAIS! -->
                <div id="modal" class="modal-a">
                  <div :class="`modal is-active`">
                    <div class="modal-background" @click="fechar()"></div>
                    <div class="modal-card" v-if="idprofissional">
                      <header class="modal-card-head">
                        <div class="modal-card-title">
                          <b>{{mensagem}}</b>
                        </div>
                        <a class="delete" aria-label="close" @click="fechar()"></a>
                      </header>
                      <section style="background:white" class="modal-card-body">

                        <!-- Tabs do navbar -->
                        <div class="tabs is-centered is-boxed column" aling="level-item">
                          <ul>
                            <li :class="`${sobre_tab}`">
                              <a @click="fade_ini(1)">
                                <span class="icon is-small">
                                  <i class="material-icons">face</i>
                                </span>
                                <span>Sobre</span>
                              </a>
                            </li>
                            <li :class="`${mensagem_tab}`">
                              <a @click="fade_ini(2)">  
                                <span class="icon is-small">
                                  <i class="material-icons">send</i>
                                </span>Mensagem
                              </a>
                            </li>
                          </ul>
                        </div>

                        <!-- SOBRE -->
                        <div :style="`display:${sobre}`">
                          <ApolloQuery
                            :query="require('@/graphql/queries/profissional.gql')"
                            :variables="{id:idprofissional}"
                          >
                            <template slot-scope="{ result: { data, loading },isLoading }">
                              <div v-if="isLoading">Loading...</div>
                              <div v-else>
                                <div v-if="data">
                                  <div style="margin-top:-30px">
                                    <!-- Informações do profissional -->
                                    <div class="columns column">
                                      <div class="column is-3-desktop is-3-tablet">
                                        <figure class="image is-128x128">
                                          <img
                                            :src="`http://graphql.me/imagem/${data.imagem.imagem}`"
                                            alt="cover image"
                                          >
                                        </figure>
                                      </div>
                                      <div class="column">
                                        <router-link
                                          :to="`/page/cliente/categories/profissional/${idprofissional}`"
                                          class="is-full-mobile h modal-card-title"
                                        >{{nome = data.imagem.user.name}}</router-link>
                                        <div>
                                          <div style="color:black">"{{data.imagem.ramo}}"</div>
                                        </div>
                                        <div class="column"></div>
                                        <div class="columns is-mobile">
                                          <div class="column">
                                            <div style="color:black">
                                              <b>Cidade:</b>
                                              {{data.imagem.cidade}}
                                            </div>
                                          </div>
                                          <div class="column">
                                            <div style="color:black">
                                              <b>Estado:</b>
                                              {{data.imagem.estado}}
                                            </div>
                                          </div>
                                        </div>
                                        <div class="columns is-mobile" style="margin-top:-30px">
                                          <div class="column">
                                            <div style="color:black">
                                              <b>Endereço:</b>
                                              {{data.imagem.logradouro}}
                                            </div>
                                          </div>
                                          <div class="column">
                                            <div style="color:black">
                                              <b>Telefone:</b>
                                              {{data.imagem.telefone}}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <!-- Descrição do profissional -->
                                    <div>
                                      <div class="card-footer"></div>
                                      <div class="column">
                                        <div style="color:black">{{data.imagem.descricao}}</div>
                                      </div>
                                      <div class="card-footer"></div>
                                    </div>
                                    <br>
                                    <!-- TABS AVALIAÇÕES E PORTIFÓLIOS -->
                                    <div class="tabs is-toggle is-fullwidth is-centered">
                                      <ul>
                                        <li :class="`${tabs_avaliacoes}`">
                                          <a @click="fade(1)">
                                            <span class="icon is-small">
                                              <i class="material-icons">stars</i>
                                            </span>
                                            <span>Avaliações</span>
                                          </a>
                                        </li>
                                        <li :class="`${tabs_portifolio}`">
                                          <a @click.prevent="fade(2)">
                                            <span class="icon is-small">
                                              <i class="material-icons">image</i>
                                            </span>
                                            <span>Portifólio</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>

                                    <!-- AVALIAÇÕES -->
                                    <div :style="`display:${avaliacoes}`">
                                      <ApolloQuery
                                        :query="require('@/graphql/queries/avaliacaoForAvaliadoId.gql')"
                                        :variables="{user_avaliado:idprofissional}"
                                      >
                                        <template
                                          slot-scope="{ result: { data, loading },isLoading }"
                                        >
                                          <div v-if="isLoading">Loading...</div>
                                          <div v-else>
                                            <div v-if="data">
                                              <div
                                                v-for="avaliacoes of data.avaliacaoForAvaliadoId"
                                                :key="avaliacoes.id"
                                              >
                                                <div class="columns is-mobile">
                                                  <div
                                                    class="column is-9-desktop is-10-tablet is-8-mobile"
                                                  >
                                                    <b class="column is-12-mobile">{{avaliacoes.titulo}}</b>
                                                  </div>
                                                  <div style="margin-top:10px"
                                                    class="column is-3-desktop"
                                                  >{{avaliacoes.date}}</div>
                                                </div>
                                                <div style="margin-top:-50px">
                                                  <div class="columns is-mobile">
                                                    <!-- ESTRELAS -->
                                                    <div class="column is-8-desktop is-8-tablet is-6-mobile">
                                                      <div v-if="avaliacoes.estrela === 5">
                                                        <img
                                                          class="column is-4-desktop is-5-tablet is-7-mobile"
                                                          src="../../assets/estrela5.png"
                                                          alt="cover image"
                                                        >
                                                      </div>
                                                      <div v-if="avaliacoes.estrela === 4">
                                                        <img
                                                          class="column is-4-desktop is-5-tablet is-7-mobile"
                                                          src="../../assets/estrela4.png"
                                                          alt="cover image"
                                                        >
                                                      </div>
                                                      <div v-if="avaliacoes.estrela === 3">
                                                        <img
                                                          class="column is-4-desktop is-5-tablet is-7-mobile"
                                                          src="../../assets/estrela3.png"
                                                          alt="cover image"
                                                        >
                                                      </div>
                                                      <div v-if="avaliacoes.estrela === 2">
                                                        <img
                                                          class="column is-4-desktop is-5-tablet is-7-mobile"
                                                          src="../../assets/estrela2.png"
                                                          alt="cover image"
                                                        >
                                                      </div>
                                                      <div v-if="avaliacoes.estrela === 1">
                                                        <img
                                                          class="column is-4-desktop is-5-tablet is-7-mobile"
                                                          src="../../assets/estrela1.png"
                                                          alt="cover image"
                                                        >
                                                      </div>
                                                    </div>
                                                    <!-- Recomenda ou não -->
                                                    <div class="column is-4-desktop">
                                                      <div
                                                        v-if="avaliacoes.recomenda === 1"
                                                        class="column"
                                                        style="color:green;font-size:12pt"
                                                      >
                                                        <i
                                                          class="material-icons"
                                                          style="margin-right:10px;font-size:12pt"
                                                        >thumb_up</i>Sim recomendo
                                                      </div>
                                                      <div
                                                        class="column"
                                                        style="color:red;font-size:12pt"
                                                        v-if="avaliacoes.recomenda === 0"
                                                      >
                                                        <i
                                                          class="material-icons"
                                                          style="margin-right:10px;font-size:12pt"
                                                        >thumb_down</i>Não recomendo!
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <!-- Descrição -->
                                                  <div style="margin-top:-30px">
                                                    <div
                                                      class="column is-12-desktop"
                                                      style="font-align:justify; text-justify: inter-word;font-size:12pt"
                                                    >"{{avaliacoes.descricao}}"</div>
                                                  </div>
                                                  <!-- Nome do avaliador -->
                                                  <div class="column" style="color:black">
                                                    <div>{{avaliacoes.user_avalia.user.name}}</div>
                                                  </div>
                                                </div>
                                                <div class="column card-footer"></div>
                                              </div>
                                            </div>
                                            <br>
                                            <!-- FIM DO V-FOR -->
                                          </div>
                                          <div v-if="data && data.avaliacaoForAvaliadoId">
                                            <div
                                              class="title is-4"
                                              align="center"
                                              v-if="!data.avaliacaoForAvaliadoId[0]"
                                            >Ele(a) não foi avaliado ainda!</div>
                                          </div>
                                        </template>
                                      </ApolloQuery>
                                    </div>

                                    <!-- Portifolio -->
                                    <div :style="`display:${portifolio}`">
                                      <ApolloQuery
                                        :query="require('@/graphql/queries/portifolioForImagem.gql')"
                                        :variables="{imagem:idprofissional}"
                                      >
                                        <template
                                          slot-scope="{ result: { data, loading },isLoading }"
                                        >
                                          <div v-if="isLoading">Loading...</div>
                                          <div v-else>
                                            <div v-if="data">
                                              <br>
                                              <div
                                                v-for="portifolio of data.portifolioForImagem"
                                                :key="portifolio.id"
                                              >
                                                <div class="columns column">
                                                  <div class="columns is-mobile">
                                                    <div
                                                      class="column is-3-desktop is-3-tablet is-3-mobile"
                                                      align="center"
                                                    >
                                                      <img
                                                        :src="`http://graphql.me/portifolio/${portifolio.imagens}`"
                                                        alt="Placeholder image"
                                                        width="100%"
                                                      >
                                                    </div>
                                                    <!-- MOSTRA AS ESTRELAS -->
                                                    <div
                                                      class="column is-9-desktop is-9-tablet is-9-mobile"
                                                    >
                                                      <div
                                                        class="column is-12-desktop is-10-tablet is-9-mobile"
                                                      >
                                                        <b>{{portifolio.titulo}}</b>
                                                      </div>
                                                      <div
                                                        class="column overlay3 is-12-desktop is-11-tablet" style="text-align:justify"
                                                      >{{portifolio.descricao}}</div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="column overlay4 is-12-desktop is-12-mobile"
                                                    style="text-align:justify;margin-top:-40px"
                                                  >{{portifolio.descricao}}</div>
                                                </div>
                                              </div>
                                            </div>
                                            <div v-if="data && data.portifolioForImagem">
                                              <div
                                                class="title is-4"
                                                align="center"
                                                v-if="!data.portifolioForImagem[0]"
                                              >Ele(a) não tem portifolios ainda!</div>
                                            </div>
                                          </div>
                                        </template>
                                      </ApolloQuery>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </template>
                          </ApolloQuery>
                        </div>

                        <!-- MENSAGEM -->
                        <div :style="`display:${mensagens}`">
                          <div class="title is-3 column is-10-desktop is-10-tablet is-offset-1-tablet is-offset-1-desktop" align="center"><div>Envie uma mensagem para </div>{{nome}}</div>
                          <form action="" method="POST">
                            <textarea class="textarea inp" v-model="envia_mensagem" placeholder="Alguma dúvida ou quer marcar algo? Escreva aqui!" rows="7"></textarea><br>     
                            <button class="column is-12-desktop is-12-tablet is-full-mobile btn-13" @click.prevent="enviarMensagem(prop.id,idprofissional,cli.clientForUserId[0].id)"><i class="material-icons" style="margin-right:10px;padding-bottom:10px">send</i>Enviar</button>
                          </form>
                          <br>
                          <!-- <div class="card-footer column"></div>
                          <div class="column" style="font-size:18pt" align="left">Sugestões de perguntas para voçê:</div> -->
                        </div>
                      </section>
                      <!-- Header -->
                      <!-- <footer class="modal-card-foot">
                              <button class="button is-success">Save changes</button>
                              <button class="button">Cancel</button>
                      </footer>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </ApolloQuery>
    </div><br><br><br><br><br><br><br>
  </div>
</template>
<script>
import gql from "graphql-tag";
import cliForUserId from "@/graphql/queries/clientForUserId.gql";
import atualizaStatusProposta from "@/graphql/mutations/atualizaStatusProposta.gql";
import atualizaStatusLance from "@/graphql/mutations/atualizaStatusLance.gql";
import mensagem from "@/graphql/mutations/mensagem.gql"

export default {
  data() {
    return {
      me: null,
      cli: [],
      modal: "",
      nome:"",
      idprofissional: "",
      mensagem: "Informações do(a) profissional",
      portifolio: "none",
      avaliacoes: "",
      tabs_avaliacoes: "is-active",
      tabs_portifolio: "",
      mensagem_tab:"",
      sobre_tab:"is-active",
      sobre:"inline",
      mensagens:"none",
      envia_mensagem:"",
      date:""
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
    cli: {
      query: cliForUserId,
      variables() {
        if (this.me) {
          return {
            user_id: this.me.id
          };
        }
      },
      update(data) {
        this.cli = data;
        return this.cli;
      }
    }
  },
  methods: {
    aceitar(proposta_id, lance_id, user_lance_id) {
      this.$swal({
        title: "Tem certeza que quer aceitar?",
        text:
          "O profissional ficará sabendo quando você aceitar essa proposta!",
        type: "info",
        showCancelButton: true,
        confirmButtonText: "Sim, aceitar!",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "hsl(141, 71%, 48%)",
        cancelButtonColor: "hsl(348, 100%, 61%)",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          this.$apollo
            .mutate({
              mutation: atualizaStatusProposta,
              variables: {
                id: proposta_id,
                user_aceito_id: user_lance_id,
                status: 2
              }
            })
            .then(() => {
              this.$apollo.mutate({
                mutation: atualizaStatusLance,
                variables: {
                  id: lance_id,
                  status: 1
                }
              });
              window.location.reload();
            })
            .catch(error => {
              console.log(error);
            });
        }
      });
    },
    recusar(lance_id) {
      this.$swal({
        title: "Tem certeza que deseja recusar?",
        text:
          "O profissional ficará sabendo quando você recusar essa proposta!",
        type: "info",
        showCancelButton: true,
        confirmButtonText: "Sim, recusar!",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "hsl(141, 71%, 48%)",
        cancelButtonColor: "hsl(348, 100%, 61%)",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          this.$apollo
            .mutate({
              mutation: atualizaStatusLance,
              variables: {
                id: lance_id,
                status: 3
              }
            })
            .then(() => {
              window.location.reload();
            });
        }
      });
    },
    mudar(id) {
      this.modal = "is-active";
      document.getElementById("modal").style.opacity = 1;
      document.getElementById("modal").style.visibility = "visible";
      this.idprofissional = id;
    },
    fechar() {
      this.nome= "";
      this.idprofissional = "";
      document.getElementById("modal").style.opacity = 0;
      document.getElementById("modal").style.transition = "0.5s";
      document.getElementById("modal").style.visibility = "hidden";
    },
    fade(num) {
      if (num === 1) {
        this.portifolio = "none";
        this.avaliacoes = "inline";
        this.tabs_avaliacoes = "is-active";
        this.tabs_portifolio = "";
      } else {
        this.portifolio = "inline";
        this.avaliacoes = "none";
        this.tabs_avaliacoes = "";
        this.tabs_portifolio = "is-active";
      }
    },
    fade_ini(num_ini){
      if (num_ini === 1) {
        this.sobre = "inline";
        this.mensagens = "none";
        this.sugestoes = "none";
        this.sobre_tab = "is-active";
        this.mensagem = "Informações do(a) profissional"
        this.sugestoes_tab = "";
        this.mensagem_tab = "";
      }else{
        this.sobre ="none";
        this.sugestoes = "none";
        this.mensagens= "inline";
        this.mensagem = "Envie uma mensagem"
        this.mensagem_tab = "is-active";
        this.sugestoes_tab = "";
        this.sobre_tab = "";
      }
    },
    enviarMensagem(proposta,profissional,cliente){
      if (!this.envia_mensagem) {
        this.$swal({type:"warning",title:"Escreva uma mensagem!"});
      }else{
        this.$apollo
          .mutate({
            mutation: mensagem,
            variables:{
              mensagem: this.envia_mensagem,
              date:this.date,
              user_envia_id:cliente,
              user_recebe_id:profissional,
              proposta_categoria_id:proposta
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
                this.envia_mensagem = "";
              }else{
                this.$router.push(`/page/cliente/mensagens`);
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
@import "../../cssFiles/alertas.css";
@import "../../cssFiles/input.css";

.img {
  border-radius: 100%;
}

.espera {
  background: yellow;
  text-transform: uppercase;
  padding: 0.2em 0.7em;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: 2px solid black;
}
.aceitou {
  background: seagreen;
  text-transform: uppercase;
  padding: 0.2em 0.7em;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: 2px solid black;
  color: white;
}

.avaliou {
  background: rgb(98, 0, 49);
  text-transform: uppercase;
  padding: 0.2em 0.7em;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: 2px solid black;
  color: white;
}

.recusou {
  background: red;
  text-transform: uppercase;
  padding: 0.2em 0.7em;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: 2px solid black;
  color: white;
}

.hover {
  color: hsl(171, 98%, 33%);
}
.hover:hover {
  color: hsl(204, 86%, 53%);
}

.h:hover {
  color: hsl(217, 71%, 53%);
}

.modal-a {
  opacity: 0;
  visibility: hidden;
  transition: 0.8s;
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

