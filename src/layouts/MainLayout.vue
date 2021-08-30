<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default {
  name: 'MainLayout',

  data () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
<style lang="sass" scoped>
// .q-layout
//   background-image: url('../assets/sign-up.svg')
//   background-repeat: no-repeat
//   background-size: cover
//   background-blend-mode: lighten
</style>
