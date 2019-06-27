<template>
  <div>
  <section class="hero is-fullheight" style="background:rgb(233, 255, 246)">
  <div class="hero-head"><br>
    <div>
      <div class="columns column" style="margin-top:5%;margin-bottom:30px">
          <div class="column is-3-desktop is-offset-1-desktop is-3-tablet is-6-mobile is-offset-3-mobile" data-aos="flip-right" data-aos-offset="240" data-aos-duration="1000">
            <div class="home">
              <img alt="Vue logo" width="100%" src="../assets/frontendimages/trabalhador.png">
            </div>
          </div>
          <div class="column is-8-desktop is-9-tablet is-12-mobile" data-aos="zoom-in" data-aos-duration="2000">
            <div class="overlay5"></div>
            <div class="column is-10-desktop is-offset-1-desktop is-12-mobile is-12-tablet" ><div style="font-size:40pt;color:black;text-align:justify"><b>Solicite ou atenda serviços!</b></div><br>
            <div style="font-size:20pt;color:black;text-align:justify">Encontre aqui profissionais autônomos e demande serviços a eles ou rigistra-se como um profissional e atenda os pedidos que chegarem a você ou a sua categoria.</div><br>
            <br>
            <div class="columns" style="margin-left:-20px">
                <div class="column is-6-desktop" style="margin-bottom:-30px">
                  <router-link to="/registerPro" class="tn is-3 is-full-mobile">
                    <button class="btn-5 column is-12-desktop is-12-tablet is-full-mobile" style="text-align:center">Cadastre-se Como Profissional</button>
                  </router-link>
                </div>
                <div class="column is-6-desktop">
                  <router-link to="/registerCli" class="tn is-4 is-full-mobile">
                    <button class="btn-5 column is-12-desktop is-12-tablet is-full-mobile" style="text-align:center">Cadastre-se Como Cliente</button>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="overlay3 overlay6"><br><br><br></div>
          </div>
        </div>
    </div>
  </div>
  </section>
  <div class="overlay5"></div>
      <div style="margin-top:8em;margin-bottom:0em;padding-bottom:100px" >
        <div class="title is-1 level-item font">Como funciona?</div><br>
        <div class="columns column is-12-desktop ">
          <div class="column is-3-desktop is-8-mobile is-offset-2-mobile" data-aos-offset="-20" data-aos="slide-up" data-aos-delay="50" data-aos-duration="3000" align="center" style="border-right:1px solid #ccc;border-left:1px solid #ccc">
            <img alt="Vue logo" width="75%" src="../assets/frontendimages/registre.png">
            <div class="column is-12-desktop is-12-tablet title is-4" style="color:black"><b>Registre-se</b></div>
            <div class="font" style="margin-top:-10px;text-align:center">Realize o cadastro na plataforma para ter acesso aos seus recursos</div>
          </div>
          <div class="column is-3-desktop is-8-mobile is-offset-2-mobile" data-aos-offset="0" data-aos="slide-up" data-aos-delay="100" data-aos-duration="3000" align="center" style="border-right:1px solid #ccc;border-left:1px solid #ccc">
            <img alt="Vue logo" width="75%" src="../assets/frontendimages/infoAdicionais.png">
            <div class="column is-12-desktop is-12-tablet title is-4" style="color:black"><b>Adicione Informações</b></div>
            <div class="font" style="margin-top:-10px;text-align:center">Informe informações extras para começar a realizar pedidos.</div>
          </div>
          <div class="column is-3-desktop is-8-mobile is-offset-2-mobile" data-aos-offset="0" data-aos="slide-up" data-aos-delay="250" data-aos-duration="3000" align="center" style="border-right:1px solid #ccc;border-left:1px solid #ccc">
            <img alt="Vue logo" width="75%" src="../assets/frontendimages/buscaProfi.png">
            <div class="column is-12-desktop is-12-tablet title is-4" style="color:black"><b>Busque Profissionais</b></div>
            <div class="font" style="margin-top:-10px;text-align:center">Realize uma busca de profissionais, por categoria, insira as informações do seu pedido e o realize.</div>
          </div>
          <div class="column is-3-desktop is-8-mobile is-offset-2-mobile" data-aos-offset="0" data-aos="slide-up" data-aos-delay="450" data-aos-duration="3000" align="center" style="border-right:1px solid #ccc;border-left:1px solid #ccc">
              <img alt="Vue logo" width="63%" src="../assets/frontendimages/gerirPedidos.png">
              <div class="column is-12-desktop is-12-tablet title is-4" style="margin-top:20px;color:black"><b>Gerencie seus Pedidos</b></div>
              <div class="font" style="margin-top:-10px;text-align:center">Gerencie os seus pedidos em andamento, aceitando-os ou finalizado-os.</div>
          </div>
        </div>
      </div>
    <img src="../assets/frontendimages/background6.png" data-aos="slide-right" data-aos-duration="2000" alt="" style="position:absolute;width:100%;height:auto;max-width:100%;z-index:-1">
    <div class="colums">
      <section class="hero is-fullheight" style="background:rgba(218, 218, 218, 0.2)">
        <div class="hero-head">
        <div class="columns">
          <div class="column is-12-desktop is-full-mobile"><br><br>
            <div class="columns column" style="margin-top:5em;margin-bottom:0em;">
              <div class="column is-5-desktop is-4-tablet  is-10-mobile is-offset-1-mobile" style="margin-left:1%"
              >
                <div class="home">
                  <img alt="Vue logo" width="100%" src="../assets/frontendimages/inicio2.jpg">
                </div>
              </div>
              <div class="column is-9-desktop is-8-tablet is-full-mobile" 
              >
                <div
                  class="title is-2 column is-8-desktop is-10-tablet is-offset-1" style="margin-top:0.5em"
                ><b>Está com problemas em casa e não sabe como resolver?</b></div>
                <div
                  class="column is-8-desktop is-10-tablet is-offset-1" style="font-size:20pt"
                >Cadastre-se como cliente, mande seu problema, que enviaremos profissionais perfeitos para te atender!</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
        <section class="hero is-medium"  style="background:rgba(218, 218, 218, 0.2);padding-bottom:50px">
        <div class="hero-head">
        <div class="columns">
          <div class="column is-12-desktop is-full-mobile">
            <div style="margin-top:6em;margin-bottom:1em">
              <div class="column is-12-desktop is-full-mobile" align="center" style="margin-top:-5%"
              >
                <div class="home">
                  <img alt="Vue logo" data-aos="flip-right" data-aos-offset="-20" data-aos-duration="3000" src="../assets/frontendimages/workers.png">
                </div>
              </div>
              <div class="column is-12-desktop is-full-mobile" align="center">
                <div
                  class="title is-2 column is-8-desktop is-11-tablet is-full-mobile" style="margin-top:0.5em;color:black"
                ><b>Você é um profissional autônomo e está a procura de algum serviço?</b></div>
                <div
                  class="column is-8-desktop is-11-tablet is-full-mobile" style="text-align:center;font-size:16pt"
                >Cadastre-se como profisional, atenda à demanda de um cliente em particular que envie uma proposta a você ou envie sua disponibilidade para as demandas voltadas a sua categoria e espere o cliente entrar em contato com voçê ou lhe enviar uma mensagem.</div>
              </div>
              
            </div>
          </div>
        </div>
        </div>
        </section>
        <!-- PARTE FINAL -->
        
        <section class="hero is-medium" style="">
        <div class="hero-head">
          <div class="columns column" style="border-bottom:1px solid white;background:rgb(233, 255, 246);padding-bottom:50px">
              <div class="columns" style="margin-top:1em;margin-bottom:1em">
                <div class="column is-8-desktop is-full-mobile">
                  <div
                    class="title is-2 column is-8-desktop is-11-tablet is-offset-1 is-full-mobile" style="margin-top:2em;color:black"
                  ><b>Há profissionais de várias áreas prontos pra lhe atender!</b></div>
                  <div
                    class="column is-8-desktop is-11-tablet is-offset-1 is-full-mobile" style="text-align:justify;font-size:14pt"
                  >A negociação é bastante rápida, você fala o serviço que quer e eles mandam sua disponibilidade. Todo o resto da negociação incluindo o orçamento é por conta do telefone ou por email. Essa ferramenta foi feita para ajudar na busca por profissionais e ao mesmo tempo fazer os profissionais difundirem seus trabalhos!</div>
                </div>
                <div class="column is-4-desktop is-3-tablet is-8-mobile is-offset-2-mobile">
                    <img alt="Vue logo" class="overlay5" style="margin-left:-25%;margin-top:10%" width="100%" src="../assets/frontendimages/areas.png">
                    <img alt="Vue logo" class="overlay6" style="margin-left:0%" width="100%" src="../assets/frontendimages/areas.png">
                </div>
              </div>
          </div>
          <div class="columns" style="padding-bottom:70px;padding-top:60px">
            <div class="column is-12-desktop is-full-mobile">
              <div class="columns" style="margin-top:1em;margin-bottom:2em">
                <div class="column is-3-desktop is-2-tablet is-8-mobile is-offset-2-mobile" align="center">
                  <div class="home">
                    <img alt="Vue logo" class="overlay5" style="margin-left:18%;height:280px" src="../assets/frontendimages/escolher.png">
                    <img alt="Vue logo" class="overlay6" style="margin-left:2%" src="../assets/frontendimages/escolher.png">
                  </div>
                </div>
                <div class="column is-11-desktop is-full-mobile">
                <div
                    class="title is-2 column is-8-desktop is-11-tablet is-offset-1 is-full-mobile" style="margin-top:0.5em;color:black"
                  ><b>Clientes avaliam profissionais!</b></div>
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
     <footer class="" style="background:rgb(233, 255, 246)">
        <div class="" style="color:black;padding-top:10%;padding-bottom:10%;font-weight:bold">
          <div class="home">
            <img src="http://graphql.me/categoryImage/LogoWithTxtTrasparent.png" style="margin-left:40px" alt="cover image" width="180" height="50">
          </div>
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





