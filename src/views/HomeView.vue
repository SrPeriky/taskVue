<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png"-->
    <Formulario/>
    <Listar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Formulario from '@/components/Formulario.vue'
import Listar from '@/components/Listar.vue'

export default {
  name: 'HomeView',
  components: {
    Formulario,
    Listar,
  }
}
</script>
