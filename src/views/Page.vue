<template>
    <div class="page">
        <div>
            <div v-if="me.status === 1">
              {{this.$router.push('/page/cliente')}}
            </div>
            <div v-if="me.status === 2">
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
            return{
              id: this.me.id
            }
          },
          update(data){
             this.ping = data;
             return this.ping;
          }
        }
  },
  created(){
    localStorage.setItem('status',this.me.status);
  },
  
  
}
</script>

