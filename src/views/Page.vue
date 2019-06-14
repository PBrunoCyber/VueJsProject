<template>
    <div class="page">
        <div v-if="this.me">
            <div v-if="this.me.status === 1">
              {{this.$router.push('/page/cliente')}}
            </div>
            <div v-if="this.me.status === 2">
              {{this.$router.push('/page/profissional')}}       
            </div> 
        </div>
    </div>
</template>
<script>

import gql from 'graphql-tag'
export default { 
  data(){
    return{
      me: null,
      ping: null,
    }
  },
  apollo:{
    me: gql `query{
      me{
        id,
        name,
        email,
        status
      }
    }`,
    
     ping : {
          query: gql`query query($id: Int!) {
          imageForUserId(user_id:$id){
              id
              imagem
                user{
                  name
                  email
                }
              }
            }`,
          variables(){
            if(this.me){   
              return{
                id: this.me.id
              }
            } 
          },
          update(data){
            if(data){ 
              this.ping = data;
              return this.ping;
            }
          }
        }
  },
  created(){
    if(this.me){
      localStorage.setItem('status',this.me.status);
    }
  },
}
</script>

