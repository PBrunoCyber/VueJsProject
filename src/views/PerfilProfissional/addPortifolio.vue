<template>
  <div class="addPortifilio">
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
        <li class="is-active">
          <a href="#">
            <span class="icon is-small" style="margin-left:0px">
              <i class="material-icons" aria-hidden="true">add</i>
            </span>
            <span>Adicionar Portifólios</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- FIM DO BREADCRUMB -->
    <div
      class="title is-2 column is-6-desktop is-offset-3-desktop is-6-tablet is-offset-3-tablet"
      style="text-align:center;color:black"
    >Mostre um pouco do seu trabalho, com portifólios!</div>
    <div class="level-item" style="margin-top:-20px;margin-bottom:20px;font-size:14pt">Adicione quanto você quiser!</div>
    <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet card-footer"></div>
    <form action method="POST">
      <div class="control column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
        <div class="columns is-mobile" style="margin-left:0px">
          <label for="titulo">
            <b>Diga o título do seu trabalho realizado!</b>
          </label>
          <label for="titulo" v-if="!image.titulo" style="margin-left:10px;color:red">
            <b>*</b>
          </label>
        </div>
        <input
          type="text"
          class="input inp"
          v-model="image.titulo"
          placeholder="Ex:. Cuido de idosos, Faço reformas"
          name="titulo"
          id="titulo"
        >
      </div>
      <div class="control column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
        <div class="columns is-mobile" style="margin-left:0px">
          <label for="descricao">
            <b>Descrição</b>
          </label>
          <label for="descricao" v-if="!image.descricao" style="margin-left:10px;color:red">
            <b>*</b>
          </label>
        </div>
        <textarea
          name="descricao"
          id="descricao"
          class="textarea inp1"
          v-model="image.descricao"
          placeholder="Digite suas especialidades, formações ou metas, sua idade etc"
          cols="20"
          rows="5"
        ></textarea>
      </div>
      <div class="column control is-12-desktop is-offset-3-desktop is-12-tablet is-offset-2-tablet is-12-mobile">
        <div class="column">
          <label for="foto" class="label">
            <b>Adicione uma foto para mostrar melhor seu trabalho (opcional)</b>
          </label>
          <figure>
            <img
              src="https://topekacivictheatre.com/wp-content/uploads/2019/01/no-image.jpg"
              width="220"
              height="2000"
              id="preview"
            >
          </figure>
          <div class="file has-name is-boxed is-primary is-full-mobile column is-2-desktop is-4-tablet">
            <label class="file-label">
              <span class="file-cta">
                <input class="file-input" type="file" id="imgChooser" @change="imageChanged">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Escolher foto</span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div v-if="this.erros.notification" style="margin-bottom:5px" class="control column">
        <div class="notification is-danger column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile">
          {{this.erros.notification}}
          <a class="delete" @click="muda"></a>
        </div>
      </div>
      <div class="control column">
        <button
          @click.prevent="addPortifolio"
          class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-full-mobile btn2"
        >Enviar Portifólio</button>
      </div>
    </form><br><br><br><br><br>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: {
        titulo: "",
        descricao: "",
        imagens: "",
        imagem_id: this.$route.params.id
      },
      erros: {
        notification: ""
      }
    };
  },
  methods: {
    imageChanged(e) {
      console.log(e.target.files[0]);
      var fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);

      fileReader.onload = e => {
        this.image.imagens = e.target.result;
        document.getElementById("preview").src = e.target.result;
      };
    },
    muda(){
      this.erros.notification = ""
    },
    addPortifolio() {
      if (!this.image.titulo || !this.image.descricao) {
        this.$swal({type:"warning",title:"Preencha todos os campos corretamente!"});
      } else {
        if (this.image.imagens === "") {
          this.image.imagens = "vazio.png";
          console.log(this.image.imagens);
        }
        window.axios.post("api/portifolios", this.image).then(response => {
          console.log(response);
          this.$router.push("/page");
        });
      }
    }
  }
};
</script>

<style>
@import "../../cssFiles/inputsAndButtons.css";
@import "../../cssFiles/input.css";

</style>

