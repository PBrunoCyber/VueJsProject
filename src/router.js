import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/registerPro',
      name: 'registerPro',
      component: () => import('./views/AddUsers/addProfissional.vue')
    },
    {
      path: '/registerCli',
      name: 'registerCli',
      component: () => import('./views/AddUsers/addClient.vue')
    },
    {
      path: '/page',
      name: 'page',
      component: () => import('./views/Page.vue')
    },
    
    {
      path: '/page/cliente',
      name: 'cliente',
      component: () => import('./views/PagesClients/PageClient.vue')
    },
    {
      path: '/page/cliente/:id/perfilclienteadd',
      name: 'AddClientePerfil',
      component: () => import('./views/PerfilCliente/AddClientePerfil.vue')
    },
    {
      path: '/page/cliente/:id/editcliente/:user_id',
      name: 'EditClientePerfil',
      component: () => import('./views/PerfilCliente/EditClientePerfil.vue')
    },
    {
      path: '/page/cliente/categories',
      name: 'categories',
      component: () => import('./views/PerfilCliente/showCategoriesPro.vue')
    },
    {
      path: '/page/cliente/pedidos',
      name: 'pedidos',
      component: () => import('./views/PerfilCliente/pedidos.vue')
    },
    {
      path: '/page/cliente/propostacategory',
      name: 'suaspropostas',
      component: () => import('./views/PerfilCliente/suasPropostas.vue')
    },
    {
      path: '/page/cliente/mensagens',
      name: 'mensagem',
      component: () => import('./views/PerfilCliente/mensagem.vue')
    },
    {
      path: '/page/cliente/categories/profissionais/:id',
      name: 'catProfissionais',
      component: () => import('./views/PerfilCliente/profissionais.vue')
    },
    {
      path: '/page/cliente/propostacategory/analisar/:id',
      name: 'analisar',
      component: () => import('./views/PerfilCliente/analisarPropostas.vue')
    },
    {
      path: '/page/cliente/propostacategory/avaliar/:id',
      name: 'avaliar2',
      component: () => import('./views/PerfilCliente/avaliacao2.vue')
    },
    {
      path: '/page/cliente/categories/profissional/:id',
      name: 'catProfissional',
      component: () => import('./views/PerfilCliente/profissional.vue')
    },
    {
      path: '/page/cliente/categories/profissional/proposta/:id',
      name: 'proposta',
      component: () => import('./views/PerfilCliente/proposta.vue')
    },
    {
      path: '/page/cliente/pedidos/orcamento/:id',
      name: 'verorcamento',
      component: () => import('./views/PerfilCliente/verOrcamento.vue')
    },
    {
      path: '/page/cliente/pedidos/avaliacao/:id',
      name: 'avaliacao',
      component: () => import('./views/PerfilCliente/avaliacao.vue')
    },
    {
      path: '/page/cliente/categories/propostaforcategory/:id',
      name: 'propostacategory',
      component: () => import('./views/PerfilCliente/propostaCategory.vue')
    },
    {
      path: '/page/profissional',
      name: 'profissional',
      component: () => import('./views/PagesClients/PageProfissional.vue')
    },
    {
      path: '/page/profissional/mensagens',
      name: 'mensagens',
      component: () => import('./views/PerfilProfissional/mensagens.vue')
    },
    {
      path: '/page/profissional/portifolio/:id',
      name: 'portifolio',
      component: () => import('./views/PerfilProfissional/addPortifolio.vue')
    },
    {
      path: '/page/profissional/:id/imagem',
      name: 'addProfissional',
      component: () => import('./views/PerfilProfissional/AddProfissional.vue')
    },
    {
      path: '/page/profissional/:id/editImage/:user_id',
      name: 'editProfissional',
      component: () => import('./views/PerfilProfissional/EditProfissional.vue')
    },
    {
      path: '/page/profissional/solicitacoes',
      name: 'solicitacoes',
      component: () => import('./views/PerfilProfissional/solicitacoes.vue')
    },
    {
      path: '/page/profissional/propostascategory',
      name: 'propostascategory',
      component: () => import('./views/PerfilProfissional/propostascategory.vue')
    },
    {
      path: '/page/profissional/solicitacoes/orcamento/:id',
      name: 'orcamento',
      component: () => import('./views/PerfilProfissional/orcamento.vue')
    },
    {
      path: '/page/profissional/propostascategory/verlance/:id',
      name: 'verlance',
      component: () => import('./views/PerfilProfissional/verlance.vue')
    },
    {
      path: '/page/profissional/propostascategory/lancar/:id',
      name: 'lancar',
      component: () => import('./views/PerfilProfissional/lancar.vue')
    },
    
  ]
})

const rotasSemAuth = ['home','login','registerPro','registerCli'];
const rotasProfissional = ['profissional','addProfissional','editProfissional','solicitacoes','orcamento','propostascategory','verlance','lancar','portifolio','mensagens'];
const rotasCliente = ['cliente','AddClientePerfil','EditClientePerfil','categories','catProfissionais','catProfissional','proposta','pedidos','verorcamento','avaliacao','propostaCategory','suaspropostas','analisar','avaliar2','mensagem'];

router.beforeEach((to,from,next)=>{
  if(rotasSemAuth.includes(to.name)){
    next();
  }else if(rotasProfissional.includes(to.name) && localStorage.getItem('status')==='1'){
    next('/page/cliente');
  }else if(rotasCliente.includes(to.name) && localStorage.getItem('status')==='2'){
    next('/page/profissional');
  }
  else if(localStorage.getItem('apollo-token')){
    next();
  }else{
    next('/login');
  }
});

export default router;