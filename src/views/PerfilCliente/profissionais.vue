<template>
  <div class="profissionais" v-if="this.nameCat.category">
    <!-- BREADCRUMB -->
    <nav
      class="breadcrumb column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet"
      aria-label="breadcrumbs" style="font-weight:bold"
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
          <router-link to="/page/cliente/categories" style="color:hsl(171, 100%, 41%)">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">list</i>
            </span>
            <span>Categorias</span>
          </router-link>
        </li>
        <li class="is-active" v-if="this.nameCat.category">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">people</i>
            </span>
            <span>{{this.nameCat.category.name}}</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->
    <section class="hero" data-aos="fade-down" data-aos-duration="1000" style="background:rgb(233, 255, 246);padding-top:5%;padding-bottom:5%">
      <div class="hero-body  column" align="center">
        <div class="columns">
          <div class="column is-7-desktop" style="margin-top:40px" v-if="this.nameCat.category.name ==='Pedreiro' ">
            <h1 class="title is-2 level-item font">Esta precisando de um pedreiro?</h1>
            <h1 class="level-item column is-10-desktop" style="font-size:15pt">Você está com problemas na sua residência e precisa de um pedreiro? Preencha o formulário abaixo e explique sua situação, ou então entre no perfil de alguns dos pedreiros e envie um solicitação para um profissional em particular!</h1>
          </div>
          <div class="column is-7-desktop" style="margin-top:40px" v-if="this.nameCat.category.name ==='Marceneiro' ">
            <h1 class="title is-2 level-item font">Esta precisando de um marceneiro?</h1>
            <h1 class="level-item column is-10-desktop" style="font-size:15pt">Você quer uma ajudadinha de um marceneiro? Preencha o formulário abaixo e explique sua situação, ou então entre no perfil de alguns dos marceneiros e envie um solicitação para um profissional em particular!</h1>
          </div>
          <div class="column is-7-desktop" style="margin-top:40px" v-if="this.nameCat.category.name ==='Eletricista' ">
            <h1 class="title is-2 level-item font">Esta precisando de um eletricista?</h1>
            <h1 class="level-item column is-10-desktop" style="font-size:15pt">Você quer um eletricista resolva seu problema? Preencha o formulário abaixo e explique sua situação, ou então entre no perfil de alguns dos eletricistas e envie um solicitação para um profissional em particular!</h1>
          </div>
          <div class="column is-7-desktop" style="margin-top:40px" v-if="this.nameCat.category.name ==='Pintor' ">
            <h1 class="title is-2 level-item font">Esta precisando de um pintor?</h1>
            <h1 class="level-item column is-10-desktop" style="font-size:15pt">Você quer algum profissional que realize uma pintura? Preencha o formulário abaixo e explique sua situação, ou então entre no perfil de alguns dos pintores e envie um solicitação para um profissional em particular!</h1>
          </div>
          <div class="column is-7-desktop" style="margin-top:40px" v-if="this.nameCat.category.name ==='Diarista' ">
            <h1 class="title is-2 level-item font">Esta precisando de uma diarista?</h1>
            <h1 class="level-item column is-10-desktop" style="font-size:15pt">Você quer algum profissional realize serviços domésticos na sua residência? Preencha o formulário abaixo e explique sua situação, ou então entre no perfil dos profissionais dessa área e envie um solicitação para um em particular!</h1>
          </div>
          <div class="column is-7-desktop" style="margin-top:40px" v-if="this.nameCat.category.name ==='Babá' ">
            <h1 class="title is-2 level-item font">Esta precisando de uma babá?</h1>
            <h1 class="level-item column is-10-desktop" style="font-size:15pt">Você quer algum profissional que possa cuidar dos seu(s) filho(s) durante um tempo? Preencha o formulário abaixo e explique sua situação, ou então entre no perfil de algumas das babás e envie um solicitação para uma em particular!</h1>
          </div>
          <div class="column is-7-desktop" style="margin-top:40px" v-if="this.nameCat.category.name ==='Encanador' ">
            <h1 class="title is-2 level-item font">Esta precisando de um encanador?</h1>
            <h1 class="level-item column is-10-desktop" style="font-size:15pt">Você quer algum profissional que seja encanador e possa resolver os problemas da sua casa? Preencha o formulário abaixo e explique sua situação, ou então entre no perfil de algumas dos encanadores e envie um solicitação para um em particular!</h1>
          </div>
          <div class="column is-7-desktop" style="margin-top:40px" v-if="this.nameCat.category.name ==='Outros' ">
            <h1 class="title is-2 column is-10-desktop is-10-tablet level-item font">Aqui estão os profissionais de outras áreas!</h1>
            <h1 class="level-item column is-10-desktop" style="font-size:15pt">Preencha o formulário abaixo e explique sua situação, ou então entre no perfil dos profissionais dessa área e envie um solicitação para um em particular!</h1>
          </div>
          <div class="column is-4-desktop">
            <img width="100%" :src="`http://graphql.me/categoryImage/${this.nameCat.category.image}`" alt="cover image">
          </div>
        </div>
      </div>
    </section>

    <div class="card-footer"></div>

    <section class="hero" >
      <div class="hero-body">
        <!-- Cadastrar informações para toda a categoria -->
        <div class="columns">
          
        <div class="box column is-8-desktop is-8-tablet is-offset-0-desktop" style="margin-top:-6%;margin-right:10px">
          <div class="column"><br>
            <div align="center">
              <div class="column is-8-desktop is-12-tablet title is-3">Precisando de algum profissional nessa área?</div>
              <div
                class="column is-7-desktop"
                style="color:grey;margin-top:-40px"
              >Preencha o formulário abaixo e espere os profissionais enviarem suas disponibilidades!</div>
            </div>
            <div class="card-footer"></div>
          </div>
          <form action method="POST">
            <div
              class="column is-10-desktop is-offset-1-desktop is-12-tablet is-full-mobile"
            >
              <div class="columns is-mobile column">
                <label for="valor">
                  <b>Diga o titulo do serviço</b>
                </label>
                <label for="titulo" v-if="!titulo" style="margin-left:10px;color:red">
                  <b>*</b>
                </label>
              </div>
              <input
                style="margin-top:-20px"
                type="text"
                class="input inp2"
                v-model="titulo"
                placeholder="Ex:. Floriano"
                name="valor"
                id="valor"
              >
            </div>
            <div class="columns is-mobile">
              <div
                class="control column is-offset-1-desktop is-5-desktop is-6-tablet is-6-mobile"
              >
                <li class="column">
                  <div class="columns is-mobile column">
                    <label for="valor">
                      <b>Quanto você pretende pagar?</b>
                    </label>
                    <label for="valor" v-if="!valor" style="margin-left:10px;color:red">
                      <b>*</b>
                    </label>
                  </div>
                  <select
                    style="margin-top:-20px"
                    class="control column is-12-desktop inp2"
                    name="tipo"
                    id="tipo"
                    v-model="valor"
                  >
                    <option value="Entre 10 a 40 reais">Entre 10 a 40 reais</option>
                    <option value="Entre 40 a 80 reais">Entre 40 a 80 reais</option>
                    <option value="Entre 80 a 120 reais">Entre 80 a 120 reais</option>
                    <option value="Entre 120 a 220 reais">Entre 120 a 220 reais</option>
                    <option value="Entre 220 a 520 reais">Entre 220 a 520 reais</option>
                    <option value="Entre 520 a 1000 reais">Entre 520 a 1000 reais</option>
                    <option value="Entre 1000 a 2000 reais">Entre 1000 a 2000 reais</option>
                    <option value="À combinar">À combinar</option>
                  </select>
                </li>
              </div>
              <div class="column is-5-desktop is-6-tablet is-6-mobile">
                <li class="column">
                  <div class="columns is-mobile column">
                    <label for="tipo">
                      <b>Como vai ser o atendimento?</b>
                    </label>
                    <label for="tipo" v-if="!tipo" style="margin-left:10px;color:red">
                      <b>*</b>
                    </label>
                  </div>
                  <select
                    style="margin-top:-20px"
                    class="control column is-12-desktop inp2"
                    name="tipo"
                    id="tipo"
                    v-model="tipo"
                  >
                    <option value="Presencial">Presencial</option>
                    <option value="Remoto">Remoto</option>
                  </select>
                </li>
              </div>
            </div>
            <div class="columns" style="margin-top:-30px">
              <div class="control column is-offset-1-desktop is-5-desktop is-6-tablet is-full-mobile">
                <li class="column">
                  <div class="columns is-mobile column">
                    <label for="valor">
                      <b>Pra quando é o serviço?</b>
                    </label>
                    <label for="valor" v-if="!tempo" style="margin-left:10px;color:red">
                      <b>*</b>
                    </label>
                  </div>
                  <select
                    style="margin-top:-20px"
                    class="control column is-12-desktop inp2"
                    name="tempo"
                    id="tempo"
                    v-model="tempo"
                  >
                    <option value="Hoje">Hoje</option>
                    <option value="Nas próximas semanas">Nas próximas semanas</option>
                    <option value="Daqui a 1 mês">Daqui a 1 mês</option>
                    <option value="Daqui a 3 meses">Daqui a 3 meses</option>
                    <option value="Daqui a 6 meses">Daqui a 6 meses</option>
                    <option value="Daqui a 12 meses">Daqui a 12 meses</option>
                    <option value="Não tenho previsão">Não tenho previsão</option>
                  </select>
                </li>
              </div>
              <div class="column is-5-desktop is-6-tablet is-full-mobile">
                <div class="column">
                  <div class="columns is-mobile column">
                    <label for="local">
                      <b>Diga o local do serviço</b>
                    </label>
                    <label for="local" v-if="!local" style="margin-left:10px;color:red">
                      <b>*</b>
                    </label>
                  </div>
                  <input
                    style="margin-top:-20px"
                    type="text"
                    class="input inp2"
                    v-model="local"
                    placeholder="Ex:. Floriano"
                    name="local"
                    id="local"
                  >
                </div>
              </div>
            </div>
            <div
              class="column is-10-desktop is-offset-1-desktop is-12-tablet is-full-mobile"
              style="margin-top:-20px"
            >
              <div class="columns is-mobile column">
                <label for="descricao">
                  <b>Descrição</b>
                </label>
                <label for="descricao" v-if="!descricao" style="margin-left:10px;color:red">
                  <b>*</b>
                </label>
              </div>
              <textarea
                style="margin-top:-20px"
                name="descricao"
                id="descricao"
                class="textarea inp2"
                v-model="descricao"
                placeholder="Digite suas especialidades, formações ou metas, sua idade etc"
                cols="20"
                rows="5"
              ></textarea>
            </div>
            <div class="control column">
              <button
                @click.prevent="addProposta"
                class="column is-10-desktop is-offset-1-desktop is-12-tablet is-full-mobile btn2 is-primary"
              >Enviar Proposta</button>
            </div>
          </form>
        </div>
        
        <div class="column" style="text-align:justify">
          <div style="text-align:center;font-size:20pt;color:black"><b>Como funciona?</b></div><br>
          <div data-aos="slide-left" data-aos-delay="30" data-aos-duration="800" data-aos-offset="-80"> 
            <i class="material-icons" style="color:hsl(171, 100%, 41%)" >done_outline</i>
            <span style="margin-top:-90px">Preencha o formulário.</span>
          </div><br>
          <div data-aos="slide-left" data-aos-delay="80" data-aos-duration="1000" data-aos-offset="-80"> 
            <i class="material-icons" style="color:hsl(171, 100%, 41%)">done_outline</i>
            <span style="margin-top:-90px">Espere os profissionais responderem sua solicitação.</span>
          </div><br>
          <div data-aos="slide-left" data-aos-delay="130" data-aos-duration="1200" data-aos-offset="-80"> 
            <i class="material-icons" style="color:hsl(171, 100%, 41%)">done_outline</i>
            <span style="margin-top:-90px">Analise os profissionais que lhe atendeu, ou se comunique com eles(as) por meio do telefone ou envie uma mensagem.</span>
          </div><br>
          <div data-aos="slide-left" data-aos-delay="180" data-aos-duration="1400" data-aos-offset="-80"> 
            <i class="material-icons" style="color:hsl(171, 100%, 41%)">done_outline</i>
            <span style="margin-top:-90px">Escolha um profissional para resolver seu problema.</span>
          </div>
          <div data-aos="slide-left" data-aos-delay="230" data-aos-duration="1600" data-aos-offset="-80"><br>
            <i class="material-icons" style="color:hsl(171, 100%, 41%)">done_outline</i>
            <span style="margin-top:-90px">Depois que ele(a) acabar de atender sua demanda e o serviço for finalizado você poderá avaliar o profissional.</span>
          </div>
          <div data-aos="slide-left" data-aos-delay="280" data-aos-duration="1800" data-aos-offset="-80"><br>
            <i class="material-icons" style="color:hsl(171, 100%, 41%)">done_outline</i>
            <span style="margin-top:-90px">Pronto, simples e fácil :)</span>
          </div>
        </div>

        </div>
        <!-- Fim do form -->
      </div>
    </section>
    <div class="card-footer"></div>
    <!-- Hero -->
    <section class="hero" style="background:rgb(233, 255, 246)" v-if="this.nameCat.category">
      <div class="hero-body  column">
        <div class="columns">
          <div class="column is-5-desktop">
            <img width="100%" src="../../assets/frontendimages/areas.png" alt="">
          </div>
          <div class="column is-6-desktop" style="margin-top:8%">
            <div style="">
              <h1 class="title font" style="font-size:30pt">Abaixo estão os profissionais da categoria <span style="text-transform:lowercase" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">{{this.nameCat.category.name}}.</span></h1>
              <h2
                class="subtitle"
              >Entre no perfil dos profissionais, se quiser enviar uma proposta pra alguem em específico</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- PESQUISA -->
    <div style="padding:20px">
      <div class="card-footer"></div>
      <div class="column is-12-desktop">
        <div class="column">
          <h2 class="title is-4" align="center"><b style="color:black">PESQUISAR PROFISSIONAIS POR:</b></h2>
          <div class="card-footer"></div>
          <br>
          <div class="columns">
            <div class="column is-6-desktop">
              <label for="cidade">
                <b>Cidade</b>
              </label>
              <div class="form"></div>
              <p class="control has-icons-right">
                <input
                  type="text"
                  class="input inp2 column is-12-desktop"
                  v-model="cidade"
                  placeholder="Ex:. Floriano"
                  name="cidade"
                  id="cidade"
                >
                <span class="icon is-small is-right" style="padding-top:10px">
                  <i class="material-icons">search</i>
                </span>
              </p>
            </div>
            <div class="column">
              <label for="cidade">
                <b>Estado:</b>
              </label>
              <div class="form"></div>
              <p class="control has-icons-right">
                <input
                  type="text"
                  class="input inp2 column is-12-desktop"
                  v-model="estado"
                  placeholder="Ex:. Piauí"
                  name="estado"
                  id="estado"
                >
                <span class="icon is-small is-right" style="padding-top:10px">
                  <i class="material-icons">search</i>
                </span>
                </p>
              </div>
          </div>
        </div> 
      </div>
      <div class="card-footer"></div>
    </div>

    <div class="column is-12-desktop">
      <div class="flex flex-wrap -mx-4 is-full-mobile">
        <div class="lg:w-4/4 w-full px-6 mb-8">

          <!-- INFORMAÇÕES SEM PESQUISA -->
          <div v-if="this.cidade === '' && this.estado === ''">
            <ApolloQuery
              :query="require('@/graphql/queries/proByCategory.gql')"
              :variables="{category_id:this.$route.params.id,count:this.count,page:this.page}"
            >
              <template slot-scope="{ result: { data, loading },isLoading }">
                <div v-if="isLoading">Loading...</div>
                <div v-else>
                  <div v-if="data">
                    <br>
                    <div class="flex flex-wrap items-center justify-between" v-if="data.proByCategory">
                      <div
                        v-for="cat of data.proByCategory.data"
                        :key="cat.id"
                        class="lg:w-1/3 md:w-4/4 sm:w-1/2 px-1 w-full"
                      ><br>
                        <div>
                          <div class="card">
                            <div class="columns is-mobile">
                              <div
                                class="column is-3-desktop is-offset-1-desktop is-4-tablet is-offset-1-tablet is-3-mobile is-offset-1-mobile"
                              >
                              <router-link
                                  :to="`/page/cliente/categories/profissional/${cat.id}`">
                                  <div class="image is-1by1">
                                    <img
                                      class="img"
                                      width="40%"
                                      :src="`http://graphql.me/imagem/${cat.imagem}`"
                                      alt="Placeholder image"
                                    >
                                  </div>
                                </router-link>
                              </div>
                              <div style="margin-bottom:-20px"
                                class="column is-7-desktop is-12-tablet"
                                v-if="cat.user"
                              >
                                <router-link
                                  :to="`/page/cliente/categories/profissional/${cat.id}`"
                                  class="text-black font-bold"
                                  style="color:black"
                                >{{cat.user.name}}
                                </router-link>
                                <!-- Consulta para mostrar as estrelinhas! -->
                                <div class="columns is-mobile">
                                  <div class="column is-6-desktop is-5-mobile is-3-tablet" style="margin-left:-10px">
                                  <ApolloQuery
                                    :query="require('@/graphql/queries/mediaAvaliacao.gql')"
                                    :variables="{user_avaliado:cat.id}"
                                  >
                                    <template slot-scope="{ result: { data, loading },isLoading }">
                                      <div v-if="isLoading">Loading...</div>
                                      <div v-else>
                                        <div v-if="data">
                                          <div v-if="data.mediaAvaliacao !== null">
                                            <div v-if="data.mediaAvaliacao === 5">
                                             <figure class="image is-128x128" style="margin-bottom:-300px">
                                                <img 
                                                class="column is-11-desktop is-12-mobile is-11-tablet"
                                                src="../../assets/estrela5.png"
                                                alt="cover image"
                                              >
                                             </figure>
                                            </div>
                                            <div
                                              v-if="data.mediaAvaliacao >= 4 && data.mediaAvaliacao < 5"
                                            >
                                              <figure class="image is-128x128" style="margin-bottom:-300px">
                                                  <img 
                                                  class="column is-11-desktop is-12-mobile is-11-tablet"
                                                  src="../../assets/estrela4.png"
                                                  alt="cover image"
                                                  >
                                              </figure>
                                            </div>
                                            <div 
                                              v-if="data.mediaAvaliacao >= 3 && data.mediaAvaliacao < 4"
                                            >
                                               <figure class="image is-128x128" style="margin-bottom:-300px">
                                                  <img
                                                  class="column is-11-desktop is-12-mobile is-11-tablet"
                                                  src="../../assets/estrela3.png"
                                                  alt="cover image"
                                                >
                                              </figure>
                                            </div>
                                            <div
                                              v-if="data.mediaAvaliacao >= 2 && data.mediaAvaliacao < 3"
                                            >
                                             <figure class="image is-128x128" style="margin-bottom:-300px">
                                                <img
                                                class="column is-11-desktop is-12-mobile is-11-tablet"
                                                src="../../assets/estrela2.png"
                                                alt="cover image"
                                              >
                                            </figure>
                                            </div>
                                            <div v-if="data.mediaAvaliacao < 2">
                                               <figure class="image is-128x128" style="margin-bottom:-300px">
                                                  <img
                                                  class="column is-11-desktop is-12-mobile is-11-tablet"
                                                  src="../../assets/estrela1.png"
                                                  alt="cover image"
                                                  >
                                               </figure>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </template>
                                  </ApolloQuery>
                                  </div>
                                  <div class="column is-9-desktop is-12-tablet">
                                    <ApolloQuery
                                    :query="require('@/graphql/queries/contaAvaliacao.gql')"
                                    :variables="{user_avaliado:cat.id}"
                                  >
                                      <template slot-scope="{ result: { data } }">
                                          <div v-if="data" >
                                            <div v-if="data.contaAvaliacao">
                                              <div v-if="data.contaAvaliacao ===1 " class="column is-12-desktop" style="font-size:10pt">
                                                ({{data.contaAvaliacao}} avaliação)
                                              </div>
                                              <div v-else  class="column is-12-desktop" style="font-size:10pt">
                                                ({{data.contaAvaliacao}} avaliações)
                                              </div>
                                            </div>
                                        </div>
                                      </template>
                                    </ApolloQuery>
                                </div>

                                </div>
                              </div>
                            </div>
                            <div align="center" class="column" style="margin-top:-10%;padding-top:5%;color:black;background:hsl(171, 100%, 92%)">
                              <b>"{{cat.ramo}}"</b>
                            </div>
                            <div
                              align="center"
                              style="padding-top:5px;padding-bottom:5px"
                            >{{cat.cidade}}, {{cat.estado}}</div>
                            <!-- Uma avaliação para decorar -->
                            <div style="background:hsl(0, 0%, 96%);padding:20px 10px 20px 10px;margin-top:10px">
                              <ApolloQuery
                                :query="require('@/graphql/queries/avaliacaoLimit.gql')"
                                :variables="{user_avaliado:cat.id}"
                              >
                                <template slot-scope="{ result: { data, loading },isLoading }">
                                  <div v-if="isLoading">Loading...</div>
                                  <div v-else>
                                    <div v-if="data">
                                      <div style="font-size:10pt;color:grey;margin-bottom:3px" v-if="data.avaliacaoLimit[0]">Avaliações mais recentes</div>
                                      <div
                                        v-for="avalia of data.avaliacaoLimit"
                                        :key="avalia.id"
                                        style="font-size:10pt;text-align:justify"
                                      > 
                                        <b style="color:black">{{avalia.user_avalia.user.name}}:</b>
                                        "{{avalia.descricao}}"
                                      </div>
                                    </div>
                                    <div
                                      v-if="data && !data.avaliacaoLimit[0]" style="text-align:center;font-size:11pt"
                                    >Não foi avaliado ainda!</div>
                                  </div>
                                </template>
                              </ApolloQuery>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="data && data.proByCategory && !data.proByCategory.data[0]">
                    <article class="message is-primary column is-12-desktop" style="background:hsl(171, 100%, 92%);text-align:center">
                      <div class="message-body">
                        <b>NENHUM PROFISSIONAL SE CADASTROU PARA ESSA CATEGORIA :(</b>
                      </div>
                    </article>
                  </div>
                </div>
              </template>
            </ApolloQuery>
            <br><br><br>
          </div>
          
          <!-- PAGINAÇÃO SEM PESQUISA -->
          <div v-if="this.cidade === '' && this.estado === ''">
            <ApolloQuery
                :query="require('@/graphql/queries/proByCategory.gql')"
                :variables="{category_id:this.$route.params.id,count:this.count,page:this.page}"
              >
                <template slot-scope="{ result: { data, loading },isLoading }">
                  <div v-if="isLoading">Loading...</div>
                  <div v-else>
                    <div v-if="data">
                      <!-- PAGINAÇÃO SEM PESQUISA -->
                        <div v-if="data && data.proByCategory">
                          <div class="columns is-mobile column level-item" v-if="data.proByCategory.data[0]">
                            <!-- VOLTAR -->
                            <div v-if="data.proByCategory.paginatorInfo.currentPage !== 1">
                              <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="anterior()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_left</i></a>
                            </div>
                            <div v-else>
                              <i class="material-icons" style="margin-top:5px;margin-right:5px">keyboard_arrow_left</i>
                            </div>
                            <!-- FOR PARA PERCORRER E MOSTAR AS PAGINAS -->
                            <div v-for="p of data.proByCategory.paginatorInfo.lastPage" :key="p.id">
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
                            <b style="margin-top:15px;margin-left:5px;margin-right:5px" v-if="data.proByCategory.paginatorInfo.lastPage > 11">... </b>
                            <div v-if="data.proByCategory.paginatorInfo.lastPage > 10">
                              <div v-if="page === data.proByCategory.paginatorInfo.lastPage">
                                <a class="button" style="margin:5px;background:rgb(71, 71, 71);color:white">{{data.proByCategory.paginatorInfo.lastPage}}</a>
                              </div>
                              <div v-else>
                                <a class="button button-solicita" style="margin:5px" @click.prevent="ultimaPagina(data.proByCategory.paginatorInfo.lastPage)">{{data.proByCategory.paginatorInfo.lastPage}}</a>
                              </div>
                            </div>
                            <!-- PRÓXIMO -->
                            <div v-if="data.proByCategory.paginatorInfo.hasMorePages">
                              <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="proximo()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_right</i></a>
                            </div>
                            <div v-else>
                              <i class="material-icons" style="margin-top:5px;margin-left:5px">keyboard_arrow_right</i>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </template>
            </ApolloQuery>
          </div>
          
          <!-- INFORMAÇÕES COM PESQUISA -->
          <div v-if="this.cidade !== '' || this.estado !== ''">
            <ApolloQuery
              :query="require('@/graphql/queries/searchWithCat.gql')"
              :variables="{category:this.$route.params.id,cidade:this.cidade,estado:this.estado,count:this.countSearch,page:this.pageSearch}"
              ><template slot-scope="{ result: { data, loading },isLoading }">
                <div v-if="isLoading">Loading...</div>
                <div v-else>
                  <div v-if="data">
                    <div class="flex flex-wrap items-center justify-between" v-if="data.searchWithCat">
                      <div
                        v-for="cat of data.searchWithCat.data"
                        :key="cat.id"
                        class="lg:w-1/3 md:w-4/4 sm:w-1/2 px-1 w-full"
                      ><br>
                        <div>
                          <div class="card">
                            <div class="columns is-mobile">
                              <div
                                class="column is-3-desktop is-offset-1-desktop is-4-tablet is-offset-1-tablet is-3-mobile is-offset-1-mobile"
                              >
                                <router-link
                                  :to="`/page/cliente/categories/profissional/${cat.id}`">
                                  <div class="image is-1by1">
                                    <img
                                      class="img"
                                      width="40%"
                                      :src="`http://graphql.me/imagem/${cat.imagem}`"
                                      alt="Placeholder image"
                                    >
                                  </div>
                                </router-link>
                              </div>
                              <div style="margin-bottom:-20px"
                                class="column is-7-desktop is-6-tablet is-offset-0-desktop"
                                v-if="cat.user"
                              >
                                <router-link
                                  :to="`/page/cliente/categories/profissional/${cat.id}`"
                                >
                                  <div
                                    class="text-black font-bold"
                                    style="color:hsl(171, 100%, 41%)"
                                  >{{cat.user.name}}</div>
                                </router-link>

                                <!-- Consulta para mostrar as estrelinhas! -->
                                <div class="columns is-mobile">
                                  <div class="column is-6-desktop is-5-mobile is-7-tablet" style="margin-left:-10px">
                                  <ApolloQuery
                                    :query="require('@/graphql/queries/mediaAvaliacao.gql')"
                                    :variables="{user_avaliado:cat.id}"
                                  >
                                    <template slot-scope="{ result: { data, loading },isLoading }">
                                      <div v-if="isLoading">Loading...</div>
                                      <div v-else>
                                        <div v-if="data">
                                          <div v-if="data.mediaAvaliacao !== null">
                                            <div v-if="data.mediaAvaliacao === 5">
                                             <figure class="image is-128x128" style="margin-bottom:-300px">
                                                <img 
                                                class="column is-11-desktop is-12-mobile is-12-tablet"
                                                src="../../assets/estrela5.png"
                                                alt="cover image"
                                              >
                                             </figure>
                                            </div>
                                            <div
                                              v-if="data.mediaAvaliacao >= 4 && data.mediaAvaliacao < 5"
                                            >
                                              <figure class="image is-128x128" style="margin-bottom:-300px">
                                                  <img 
                                                  class="column is-11-desktop is-12-mobile is-12-tablet"
                                                  src="../../assets/estrela4.png"
                                                  alt="cover image"
                                                  >
                                              </figure>
                                            </div>
                                            <div 
                                              v-if="data.mediaAvaliacao >= 3 && data.mediaAvaliacao < 4"
                                            >
                                               <figure class="image is-128x128" style="margin-bottom:-300px">
                                                  <img
                                                  class="column is-11-desktop is-12-mobile is-12-tablet"
                                                  src="../../assets/estrela3.png"
                                                  alt="cover image"
                                                >
                                              </figure>
                                            </div>
                                            <div
                                              v-if="data.mediaAvaliacao >= 2 && data.mediaAvaliacao < 3"
                                            >
                                             <figure class="image is-128x128" style="margin-bottom:-300px">
                                                <img
                                                class="column is-11-desktop is-12-mobile is-12-tablet"
                                                src="../../assets/estrela2.png"
                                                alt="cover image"
                                              >
                                            </figure>
                                            </div>
                                            <div v-if="data.mediaAvaliacao < 2">
                                               <figure class="image is-128x128" style="margin-bottom:-300px">
                                                  <img
                                                  class="column is-11-desktop is-12-mobile is-12-tablet"
                                                  src="../../assets/estrela1.png"
                                                  alt="cover image"
                                                  >
                                               </figure>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </template>
                                  </ApolloQuery>
                                  </div>
                                  <div class="column is-9-desktop is-12-tablet">
                                    <ApolloQuery
                                    :query="require('@/graphql/queries/contaAvaliacao.gql')"
                                    :variables="{user_avaliado:cat.id}"
                                  >
                                      <template slot-scope="{ result: { data } }">
                                          <div v-if="data" >
                                            <div v-if="data.contaAvaliacao">
                                              <div v-if="data.contaAvaliacao ===1 " class="column is-12-desktop" style="font-size:10pt">
                                                ({{data.contaAvaliacao}} avaliação)
                                              </div>
                                              <div v-else  class="column is-12-desktop" style="font-size:10pt">
                                                ({{data.contaAvaliacao}} avaliações)
                                              </div>
                                            </div>
                                        </div>
                                      </template>
                                    </ApolloQuery>
                                </div>
                                </div>
                              </div>
                            </div>
                            <div align="center" class="column" style="margin-top:-10%;padding-top:5%;color:black;background:hsl(171, 100%, 92%)">
                              <b>"{{cat.ramo}}"</b>
                            </div>
                            <div align="center" style="padding-top:5px;padding-bottom:5px">
                              {{cat.cidade}}, {{cat.estado}}
                            </div>
                            <!-- Uma avaliação para decorar -->
                            <div style="background:hsl(0, 0%, 96%);padding:20px 10px 20px 10px;margin-top:10px">
                              <ApolloQuery
                                :query="require('@/graphql/queries/avaliacaoLimit.gql')"
                                :variables="{user_avaliado:cat.id}"
                              >
                                <template slot-scope="{ result: { data, loading },isLoading }">
                                  <div v-if="isLoading">Loading...</div>
                                  <div v-else>
                                    <div v-if="data">
                                      <div style="font-size:10pt;color:grey;margin-bottom:3px" v-if="data.avaliacaoLimit[0] && data">Avaliações mais recentes</div>
                                      <div
                                        v-for="avalia of data.avaliacaoLimit"
                                        :key="avalia.id"
                                        style="font-size:10pt;text-align:justify"
                                      > 
                                        <b style="color:black">{{avalia.user_avalia.user.name}}:</b>
                                        "{{avalia.descricao}}"
                                      </div>
                                    </div>
                                    <div
                                      v-if="data && !data.avaliacaoLimit[0]" style="text-align:center;font-size:11pt"
                                    >Não foi avaliado ainda!</div>
                                  </div>
                                </template>
                              </ApolloQuery>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div v-if="data && data.searchWithCat && !data.searchWithCat.data[0]">
                    <article class="message is-primary column is-12-desktop" style="background:hsl(171, 100%, 92%);text-align:center">
                      <div class="message-body">
                        <b>NENHUM PROFISSIONAL FOI ENCONTRADO :(</b>
                      </div>
                    </article>
                  </div>
                </div>
              </template>
            </ApolloQuery>
            <br>
          </div>

           <!-- PAGINAÇÃO COM PESQUISA -->
          <div v-if="this.cidade !== '' || this.estado !== ''">
            <ApolloQuery
                :query="require('@/graphql/queries/searchWithCat.gql')"
                :variables="{category:this.$route.params.id,cidade:this.cidade,estado:this.estado,count:this.countSearch,page:this.pageSearch}"
              >
                <template slot-scope="{ result: { data, loading },isLoading }">
                  <div v-if="isLoading">Loading...</div>
                  <div v-else>
                    <div v-if="data">
                      <!-- PAGINAÇÃO SEM PESQUISA -->
                        <div v-if="data && data.searchWithCat">
                          <div class="columns is-mobile column level-item" v-if="data.searchWithCat.data[0]">
                            <!-- VOLTAR -->
                            <div v-if="data.searchWithCat.paginatorInfo.currentPage !== 1">
                              <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="anteriorSearch()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_left</i></a>
                            </div>
                            <div v-else>
                              <i class="material-icons" style="margin-top:5px;margin-right:5px">keyboard_arrow_left</i>
                            </div>
                            <!-- FOR PARA PERCORRER E MOSTAR AS PAGINAS -->
                            <div v-for="p of data.searchWithCat.paginatorInfo.lastPage" :key="p.id">
                              <!-- SÓ MOSTRA OS 10 PRIMEIROS NÚMEROS PARA NÃO POLUIR A TELA -->
                              <div v-if="p <= 10">
                               <div class="" v-if="pageSearch === p">  
                                  <a class="button" style="margin:5px;background:rgb(71, 71, 71);color:white"><b>{{p}}</b></a>
                                </div>
                                <div v-else>
                                  <a class="button button-solicita" style="margin:5px" @click.prevent="paginaSearch(p)">{{p}}</a>
                                </div>
                              </div>
                            </div>
                            <!-- TRES PONTOS COM ULTIMA PAGINA -->
                            <b style="margin-top:15px;margin-left:5px;margin-right:5px" v-if="data.searchWithCat.paginatorInfo.lastPage > 11">... </b>
                            <div v-if="data.searchWithCat.paginatorInfo.lastPage > 10">
                              <div v-if="page === data.searchWithCat.paginatorInfo.lastPage">
                                <a class="button" style="margin:5px;background:rgb(71, 71, 71);color:white">{{data.searchWithCat.paginatorInfo.lastPage}}</a>
                              </div>
                              <div v-else>
                                <a class="button button-solicita" style="margin:5px" @click.prevent="lastSearch(data.searchWithCat.paginatorInfo.lastPage)">{{data.searchWithCat.paginatorInfo.lastPage}}</a>
                              </div>
                            </div>
                            <!-- PRÓXIMO -->
                            <div v-if="data.searchWithCat.paginatorInfo.hasMorePages">
                              <a style="margin:5px;color:hsl(171, 100%, 41%)" @click.prevent="proximoSearch()"><i class="material-icons" style="margin-top:5px">keyboard_arrow_right</i></a>
                            </div>
                            <div v-else>
                              <i class="material-icons" style="margin-top:5px;margin-left:5px">keyboard_arrow_right</i>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </template>
            </ApolloQuery>
          </div>
          
        </div>
      </div>
    </div><br>
    <img src="../../assets/frontendimages/background3.png" alt="" style="width:auto;height:auto;max-width:110%;z-index:-1">
  </div>
</template>
<script>
import gql from "graphql-tag";
import clientForUserId from "@/graphql/queries/clientForUserId.gql";
import addPropostaCategory from "@/graphql/mutations/propostaCategory.gql";
import categoryName from "@/graphql/queries/nameCategory.gql";

export default {
  data() {
    return {
      nameCat: [],
      cidade: "",
      estado: "",
      titulo: "",
      valor: "",
      local: "",
      descricao: "",
      tempo: "",
      tipo: "",
      date: "",
      count:10,
      page:1,
      countSearch:10,
      pageSearch:1
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
    },
    nameCat: {
      query: categoryName,
      variables() {
        return {
          id: this.$route.params.id
        };
      },
      update(data) {
        this.nameCat = data;
        return this.nameCat;
      }
    }
  },
  methods: {
    addProposta() {
      if (
        !this.titulo ||
        !this.valor ||
        !this.local ||
        !this.descricao ||
        !this.tipo ||
        !this.tempo
      ) {
        this.$swal({
          type: "warning",
          title: "Preencha todos os campos corretamente!"
        });
      } else {
        this.$apollo
          .mutate({
            mutation: addPropostaCategory,
            variables: {
              titulo: this.titulo,
              valor: this.valor,
              local: this.local,
              descricao: this.descricao,
              tipo: this.tipo,
              tempo: this.tempo,
              date: this.date,
              status: 0,
              finalizar: 0,
              user_envia_id: this.clientes.clientForUserId[0].id,
              category_id: this.$route.params.id,
              user_aceito_id: null
            }
          })
          .then(data => {
            console.log(data);
            this.$router.push(`/page/cliente/propostacategory`);
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    // PAGINA SEM PESQUISA
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
    // PAGINA COM PESQUISA
    paginaSearch(id){
      this.pageSearch = id;
    },
    proximoSearch(){
      this.pageSearch +=1;
    },
    anteriorSearch(){
      this.pageSearch-=1;
    },
    lastSearch(inteiro){
      this.pageSearch = inteiro;
    }, 

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
};
</script>

<style>
@import "../../cssFiles/inputsAndButtons.css";
@import "../../cssFiles/sidenav.css";

.form {
  margin-bottom: 5px;
}

.inp2 {
  width: 100%;
  height: 2.8em;
  padding: 5px 20px;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
.inp2:focus {
  border: 3px solid tomato;
}


.img {
  border-radius: 50%;
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