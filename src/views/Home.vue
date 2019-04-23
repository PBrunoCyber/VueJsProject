<template>
  <div>
    <div class="colums">
      <div class="column is-full-mobile">
        <div class="home level-item">
          <img alt="Vue logo" src="../assets/logo.png">
        </div>
      </div>
      <br>
      </div>
        <div v-if="this.token === null">
          <div class="columns">
            <div class="column">
               <router-link to="/registerPro" class="tn  level-item is-3 is-offset-2 is-full-mobile"><button class="btn-3">CADASTRE-SE COMO PROFISSIONAL</button></router-link> 
              <router-link to="/registerCli" class="tn  level-item is-4 is-full-mobile"><button class="btn-5">CADASTRE-SE COMO CLIENTE</button></router-link>
            </div>
          </div>
      </div>  
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      token: ''
    }
  },
  created(){
    this.token = localStorage.getItem('apollo-token');
  }
}
</script>

<style>

/* GENERAL BUTTON STYLING */
button,
button::after {
  -webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
  -o-transition: all 0.3s;
	transition: all 0.3s;
}

button::before,
button::after {
  background: #fff;
  content: '';
  position: absolute;
  z-index: -1;
}
.tn{
  text-decoration: none;
}

/* BUTTON 5 */
.btn-3 {background: none;
  border: 3px solid rgb(82, 66, 190);
  border-radius: 5px;
  color:rgb(82, 66, 190);
  font-size: 1.1em;
  font-weight: bold;
  margin:0.3em;
  padding: 0.8em 1.5em;
  position: relative;
  text-transform: uppercase;
  overflow: hidden;
}

.btn-3:hover{
  color: white;
}

.btn-3::after {
  background-color: rgb(82, 66, 190);
  height: 100%;
  left: -35%;
  top: 0;
  transform: skew(50deg);
  transition-duration: 0.4s;
  transform-origin: top left;
  width: 0;
}

.btn-3:hover:after {
  height: 100%;
  width: 135%;
}

/* BUTTON 5 */
.btn-5 {background: none;
  border: 3px solid lightseagreen;
  border-radius: 5px;
  color:lightseagreen;
  font-size: 1.1em;
  font-weight: bold;
  margin: 0.3em;
  padding: 0.8em 1.5em;
  position: relative;
  text-transform: uppercase;
  overflow: hidden;
}

.btn-5:hover{
  color: white;
}

.btn-5::after {
  background-color: lightseagreen;
  height: 100%;
  left: -35%;
  top: 0;
  transform: skew(50deg);
  transition-duration: 0.4s;
  transform-origin: top left;
  width: 0;
}

.btn-5:hover:after {
  height: 100%;
  width: 135%;
}

/*EFFECT INPUT*/

</style>





