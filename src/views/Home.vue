<template>
  <div>
  <section class="hero is-fullheight" style="background:rgb(211, 255, 231);padding-bottom:30px">
  <div class="hero-head">
    <div>
      <div class="columns column" style="margin-top:3em;margin-bottom:0em">
          <div class="column is-8-desktop is-12-tablet is-12-mobile" data-aos="zoom-in" data-aos-duration="2000">
            <div class="overlay5"><br></div>
            <div
              class="title is-1 column is-9-desktop is-12-mobile is-12-tablet font" style="font-size:40pt;color:black"
            ><b>Encontre profissionais autônomos ou rigistra-se como um e atenda os pedidos.</b></div>
            <div class="overlay3 overlay6"><br><br><br></div>
            <div v-if="this.token === null">
              <div class=" column is-8-desktop is-12-tablet">
                <router-link to="/registerPro" class="tn is-3 is-full-mobile">
                  <button class="btn-25 column is-12-desktop is-12-tablet is-full-mobile font" style="text-align:center">Cadastre-se como profissional</button>
                </router-link>
                <router-link to="/registerCli" class="tn is-4 is-full-mobile">
                  <button class="btn-25 column is-12-desktop is-12-tablet is-full-mobile font" style="text-align:center">Cadastre-se como cliente</button>
                </router-link>
              </div>
            </div>
          </div>
            <div class="column is-6-desktop is-7-tablet is-6-mobile overlay5" data-aos="flip-right" data-aos-offset="240" data-aos-duration="1000" style="position:absolute;margin-left:48%;margin-top:14%;z-index:0">
              <div class="home">
                <img alt="Vue logo" width="100%" src="../assets/frontendimages/inicio2.jpg">
              </div>
            </div>
          </div>
    </div>
  </div>
  </section>
  <div class="overlay5"></div>
      <div style="margin-top:8em;margin-bottom:0em;padding-bottom:100px" >
        <div class="title is-1 level-item font" data-aos="zoom-in" style="color:black">Como funciona?</div><br>
        <div class="columns column is-12-desktop ">
          <div class="column is-3-desktop is-8-mobile is-offset-2-mobile" data-aos-offset="-20" data-aos="slide-up" data-aos-delay="50" data-aos-duration="3000" align="center" style="border-right:1px solid #ccc;border-left:1px solid #ccc">
            <img alt="Vue logo" width="75%" src="../assets/frontendimages/registre.png">
            <div class="column is-12-desktop is-12-tablet font title is-4">Registre-se</div>
            <div class="font" style="margin-top:-10px;text-align:center">Realize o cadastro na plataforma para ter acesso aos seus recursos</div>
          </div>
          <div class="column is-3-desktop is-8-mobile is-offset-2-mobile" data-aos-offset="0" data-aos="slide-up" data-aos-delay="100" data-aos-duration="3000" align="center" style="border-right:1px solid #ccc;border-left:1px solid #ccc">
            <img alt="Vue logo" width="75%" src="../assets/frontendimages/infoAdicionais.png">
            <div class="column is-12-desktop is-12-tablet font title is-4">Adicione Informações</div>
            <div class="font" style="margin-top:-10px;text-align:center">Informe informações extras para começar a realizar pedidos.</div>
          </div>
          <div class="column is-3-desktop is-8-mobile is-offset-2-mobile" data-aos-offset="0" data-aos="slide-up" data-aos-delay="250" data-aos-duration="3000" align="center" style="border-right:1px solid #ccc;border-left:1px solid #ccc">
            <img alt="Vue logo" width="75%" src="../assets/frontendimages/buscaProfi.png">
            <div class="column is-12-desktop is-12-tablet font title is-4">Busque Profissionais</div>
            <div class="font" style="margin-top:-10px;text-align:center">Realize uma busca de profissionais, por categoria, insira as informações do seu pedido e o realize.</div>
          </div>
          <div class="column is-3-desktop is-8-mobile is-offset-2-mobile" data-aos-offset="0" data-aos="slide-up" data-aos-delay="450" data-aos-duration="3000" align="center" style="border-right:1px solid #ccc;border-left:1px solid #ccc">
              <img alt="Vue logo" width="63%" src="../assets/frontendimages/gerirPedidos.png">
              <div class="column is-12-desktop is-12-tablet font title is-4" style="margin-top:20px">Gerencie seus Pedidos</div>
              <div class="font" style="margin-top:-10px;text-align:center">Gerencie os seus pedidos em andamento, aceitando-os ou finalizado-os.</div>
          </div>
        </div>
      </div>
    
    <div class="colums">
      <section class="hero is-fullheight" style="background:rgba(218, 218, 218, 0.234)">
        <div class="hero-head">
        <div class="columns">
          <div class="column is-12-desktop is-full-mobile">
            <div class="columns column" style="margin-top:5em;margin-bottom:0em;">
              <div class="column is-4-desktop is-offset-1-desktop is-4-tablet is-offset-1-tablet is-10-mobile is-offset-1-mobile"
                data-aos="zoom-in"
                data-aos-offset="-300"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <div class="home">
                  <img alt="Vue logo" width="110%" src="../assets/frontendimages/problema.jpg">
                </div>
              </div>
              <div class="column is-8-desktop is-7-tablet is-full-mobile" 
                data-aos="zoom-out"
                data-aos-offset="-300"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <div
                  class="title is-2 column is-8-desktop is-10-tablet is-offset-1 font" style="margin-top:0.5em"
                >Está com problemas em casa e não sabe como resolver?</div>
                <div
                  class="title is-5 column is-8-desktop is-10-tablet is-offset-1"
                >Cadastre-se como cliente, mande seu problema, que enviaremos profissionais perfeitos para te atender!</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
        <div class="overlay5"><br><br><br></div>
        <section class="hero is-medium" style="background:white;padding-bottom:50px">
        <div class="hero-head">
        <div class="columns">
          <div class="column is-12-desktop is-full-mobile">
            <div style="margin-top:6em;margin-bottom:1em">
              <div class="column is-12-desktop is-full-mobile" align="center" style="margin-top:-23%"
              >
                <div class="home">
                  <img alt="Vue logo"  src="../assets/frontendimages/workers.png">
                </div>
              </div>
              <div class="column is-12-desktop is-full-mobile" align="center" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="1000">
                <div
                  class="title is-2 column is-12-desktop is-11-tablet is-full-mobile font" style="margin-top:0.5em;color:black"
                >Você é um profissional autônomo e está a procura de algum serviço?</div>
                <div
                  class="column is-10-desktop is-11-tablet is-full-mobile font" style="text-align:center;font-size:14pt"
                >Cadastre-se como profisional, atenda à demanda de um cliente em particular que envie uma proposta a você ou envie sua disponibilidade para as demandas voltadas a sua categoria e espere o cliente entrar em contato com voçê ou lhe enviar uma mensagem.</div>
              </div>
              
            </div>
          </div>
        </div>
        </div>
        </section>
        <!-- PARTE FINAL -->
        
        <section class="hero is-medium" style="background:rgba(218, 218, 218, 0.234);padding-bottom:50px">
        <div class="hero-head">
        <div class="columns column font" data-aos="zoom-out" data-aos-offset="100" data-aos-duration="2000" style="border-bottom:1px solid white">
            <div class="columns" style="margin-top:1em;margin-bottom:1em">
              <div class="column is-8-desktop is-full-mobile">
                 <div
                  class="title is-2 column is-8-desktop is-11-tablet is-offset-1 is-full-mobile" style="margin-top:0.5em;color:black"
                >Há profissionais de várias áreas prontos pra lhe atender!</div>
                <div
                  class="column is-8-desktop is-11-tablet is-offset-1 is-full-mobile" style="text-align:justify;font-size:14pt"
                >A negociação é bastante rápida, você fala o serviço que quer e eles mandam sua disponibilidade. Todo o resto da negociação incluindo o orçamento é por conta do telefone ou por email. Essa ferramenta foi feita para ajudar na busca por profissionais e ao mesmo tempo fazer os profissionais difundirem seus trabalhos!</div>
              </div>
              <div class="column is-4-desktop is-5-tablet is-8-mobile is-offset-2-mobile">
                  <img alt="Vue logo" class="overlay5" style="margin-left:-15%" width="100%" src="../assets/frontendimages/emp.png">
                  <img alt="Vue logo" class="overlay6" style="margin-left:0%" width="100%" src="../assets/frontendimages/emp.png">
              </div>
            </div>
        </div>
        <div class="columns font" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="2000"  style="padding-bottom:70px">
          <div class="column is-12-desktop is-full-mobile">
            <div class="columns" style="margin-top:1em;margin-bottom:2em">
              <div class="column is-3-desktop is-8-mobile is-offset-2-mobile" align="center">
                <div class="home">
                  <img alt="Vue logo" class="overlay5" style="margin-left:10%" src="../assets/frontendimages/desempenho.jpg">
                  <img alt="Vue logo" class="overlay6" style="margin-left:2%" src="../assets/frontendimages/desempenho.jpg">
                </div>
              </div>
              <div class="column is-11-desktop is-full-mobile">
               <div
                  class="title is-2 column is-8-desktop is-11-tablet is-offset-1 is-full-mobile" style="margin-top:0.5em;color:black"
                >Clientes avaliam profissionais!</div>
                <div
                  class="column is-8-desktop is-11-tablet is-offset-1 is-full-mobile" style="text-align:justify;font-size:14pt"
                >O serviço de avaliações permite que clientes avaliem profissionais de acordo com o serviço realizado e fechado dentro da plataforma, assim os outros clientes poderão ficar mais tranquilos com um "desconhecido" entrando na sua casa!</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>
      </div>
     <footer class="footer" style="background:hsl(171, 100%, 41%);font-family: 'Francois One', sans-serif;color:white">
        <div class="content has-text-centered">
          <p class="font" style="font-size:18pt">
             Software para cadastro de profissionais autônomos. 
          </p><p>The website content is licensed</p>
          <p>© Site feito para o WTCS 2019</p>
        </div>
    </footer>
    </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      token: ""
    };
  },
  created() {
    this.token = localStorage.getItem("apollo-token");
  }
};
</script>

<style>

@import "../cssFiles/inputsAndButtons.css";

@import "../cssFiles/sidenav.css";


.tn {
  text-decoration: none;
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

.font{
  font-family: 'Francois One', sans-serif;
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

/*EFFECT INPUT*/
</style>





