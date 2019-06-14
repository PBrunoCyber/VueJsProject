<template>
  <div class="show_categories_pro" >
    <img src="../../assets/frontendimages/background5.png" data-aos="slide-down" data-aos-duration="1000" alt="" style="position:absolute;top:0;width:auto;height:auto;max-width:100%;z-index:-1">
    <!-- BREADCRUMB -->
    <nav class="breadcrumb column is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet" style="font-weight:bold" aria-label="breadcrumbs">
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
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">list</i>
            </span>
            <span>Categorias</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->
    <br><br><br>
    <div class="column">
      <h1 class="title is-2 level-item" style="color:black;text-transform:uppercase"><b>Escolha Uma Categoria</b></h1>
    </div>
    <br><br><br>
    <div>
      <div>
        <div class=" container">
          <ApolloQuery :query="require('@/graphql/queries/allCategories.gql')">
            <template slot-scope="{ result: { data, loading },isLoading }">
              <div v-if="isLoading">Loading...</div>
              <div v-else>
                <div v-if="data">
                  <div class="flex flex-wrap items-center justify-between ">
                    <div
                      v-for="cat of data.categories"
                      :key="cat.id" class="lg:w-1/2 md:w-1/2 sm:w-1/2 mb-0 px-4 w-full" style="margin-right:0px"
                    >
                    <div >
                      <div class="shadow">
                        <router-link :to="`/page/cliente/categories/profissionais/${cat.id}`">
                          <div
                            class="card"
                            :style="`padding:1%;background-image:url('http://graphql.me/categoryImage/${cat.image}');background-repeat:no-repeat;background-size:100% 150%;border:1px solid grey`"
                          >
                            <div style="padding:20% 5% 0% 0%;margin-top:10%"></div>
                          </div>
                        </router-link>
                      </div>
                        <div class="card column is-6-desktop is-offset-3-desktop is-6-tablet is-offset-3-tablet is-6-mobile is-offset-3-mobile" style="padding:1px;margin-top:-25px;border:1px solid grey;border-radius:40px">
                          <footer class="">
                            <router-link :to="`/page/cliente/categories/profissionais/${cat.id}`">
                              <button class="column is-12-desktop is-12-tablet is-12-mobile btnhover2" style="color:rgb(61, 61, 61);text-align:center;font-weight:bold;text-transform:uppercase">{{cat.name}}</button>
                            </router-link>
                          </footer>
                        </div>
                      </div>
                      <br><br>
                    </div>
                  </div><br>
                  <img src="../../assets/frontendimages/background3.png" alt="" style="margin-left:-180px ;width:auto;height:auto;max-width:150%">
                </div>
              </div>
            </template>
          </ApolloQuery>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import categories from "@/graphql/queries/allCategories.gql";

export default {
  data() {
    return {
      categories: []
    };
  }/*
  apollo: {
    categories: {
      query: categories,
      update(data) {
        this.categories = data;
        return this.categories;
      }
    }
  }*/
};
</script>

<style>
@import "../../cssFiles/inputsAndButtons.css";

.font{
  font-family: 'Francois One', sans-serif;
}

.shadow:hover{
  transform: scale(1,1.5);
  z-index: 1;
  transition:0.2s;
  padding:0px;
}

.btnhover2:hover{
  background: rgb(200, 255, 246);
  border-radius:40px;
}

</style>
