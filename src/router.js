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
      path: '/page/cliente',
      name: 'cliente',
      
      component: () => import('./views/PagesClients/PageClient.vue')
    },
    {
      path: '/page/profissional',
      name: 'profissional',
      component: () => import('./views/PagesClients/PageProfissional.vue')
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
      path: '/page/profissional/:id/imagem',
      name: 'image',
      component: () => import('./views/Images/AddImage.vue')
    },
    {
      path: '/page/profissional/:id/editImage/:user_id',
      name: 'editImage',
      component: () => import('./views/Images/EditImage.vue')
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
    }
  ]
})

const rotasSemAuth = ['home','login','registerPro','registerCli'];
const rotasProfissional = ['profissional'];
const rotasCliente = ['cliente'];

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