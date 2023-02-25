<template>
  <CFlex direction="column">
    <Header/>
    <CBox>
      </CBox>
  </CFlex>
</template>

<script lang="ts">
import { CFlex } from '@chakra-ui/vue';
import { defineComponent } from '@vue/composition-api'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import { CFlex,CBox} from '@charka-ui/vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Header,
    CFlex,CBox
  }
})
</script>

<style>

</style>
