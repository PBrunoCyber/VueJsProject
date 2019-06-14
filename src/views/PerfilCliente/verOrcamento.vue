<template>
  <div>
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
        <li>
          <router-link to="/page/cliente/pedidos" style="color:hsl(171, 100%, 41%)">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">description</i>
            </span>
            <span>Pedidos</span>
          </router-link>
        </li>
        <li class="is-active">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">query_builder</i>
            </span>
            <span>Disponibilidade</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB --><br><br>
    <h3 class="title is-2 column is-8-desktop is-offset-2-desktop is-12-tablet is-full-mobile" align="center">Disponibilidade do profissional para realizar seu serviço, entre em contato com ele!</h3>
    <br>
    <ApolloQuery :query="require('@/graphql/queries/orcamentoForId.gql')" :variables="{id:this.$route.params.id}">
      <template slot-scope="{ result: { data, loading },isLoading }">
        <div v-if="isLoading">Loading...</div>
        <div v-else>
          <div v-for="disponivel of data" :key="disponivel.id">
            <div class="column is-10-desktop is-offset-1-desktop is-12-tablet is-full-mobile">
              <div class="card">
                <div class="columns">
                  <div class="column is-3-desktop is-4-tablet is-6-mobile is-offset-3-mobile">
                    <div class="column">
                      <div class="level-item">
                        <img
                          width="70%"
                          height="10%"
                          :src="`http://graphql.me/imagem/${disponivel.proposta.user_recebe.imagem}`"
                          alt="Placeholder image"
                        >
                      </div>
                    </div>
                    <div class="overlay4" align="center">{{disponivel.date}}</div>
                  </div>
                  <div class="column is-9-desktop is-full-mobile" style="margin-top:1%">
                    <div class="title is-5 column" style="font-size:20pt">
                        <div><b>{{disponivel.proposta.user_recebe.user.name}}</b></div>
                    </div>
                    <div class="columns">
                      <div class="column is-5-desktop is-5-tablet">
                        <div class="column is-12-desktop is-12-tablet">
                          <b>Disponibilidade na semana:</b>
                          <div>{{disponivel.data}}</div>
                        </div>
                      </div>
                      <div class="column is-5-desktop is-5-tablet">
                        <div class="column is-12-desktop is-12-tablet">
                        <b>Horário disponível no geral:</b>
                          <div
                            class=""
                          >Das: {{disponivel.horaInicio}} às {{disponivel.horaFim}}</div>
                        </div>
                      </div>
                      <div class="overlay3">{{disponivel.date}}</div>
                    </div>
                    <div class="column is-11-desktop is-12-tablet">
                      <b>Descrição do horário:</b>
                      {{disponivel.descricao}}
                    </div>
                  </div>
                </div>
                <b style="color:black;padding:0">
                  <article class="message is-success" style="text-align:center">
                    <div class="message-body">
                      <div style="text-align:justify;color:white;border-radius:10px;font-size:12pt">
                        <b class="column is-10-desktop is-offset-1-desktop is-10-tablet is-offset-1-tablet" style="color:rgb(9, 134, 36)">Para mais informações entre em contato com {{disponivel.proposta.user_recebe.user.name}} através do número: {{disponivel.proposta.user_recebe.telefone}}, email: {{disponivel.proposta.user_recebe.user.email}} ou encontre-o(a) pessoalmente pelo endereço {{disponivel.proposta.user_recebe.logradouro}} - {{disponivel.proposta.user_recebe.cidade}} - {{disponivel.proposta.user_recebe.estado}}</b>
                      </div>
                    </div>
                  </article>
                </b>
                </div>
              <!-- FIM DO CARD -->
            </div><br><br><br>
            <!-- Fim da <div class="column is-12-dektop is-full-mobile"> -->
          </div>
          <!-- FIM DO V-FOR -->
        </div>
      </template>
    </ApolloQuery>
    <br><br><br><br><br>
  </div>
</template>
<script>
export default {};
</script>
<style>
@import "../../cssFiles/inputsAndButtons.css";
@import "../../cssFiles/alertas.css";

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