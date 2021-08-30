<template>
  <q-page class="q-pa-md q-gutter-md row justify-center">
    <div
          v-ripple.center
          class="relative-position container bg-grey-3 text-black inline flex flex-center"
        >
          Center
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>
<style lang="sass" scoped>
.container
  border-radius: 50%
  cursor: pointer
  width: 150px
  height: 150px
</style>
