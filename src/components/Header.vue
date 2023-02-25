<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { CBox, CButton, CText, CFlex } from '@chakra-ui/vue'

export default defineComponent({
  name: 'Header',
  components: {
    CBox,
    CButton,
    CText,
    CFlex,
  },
})
</script>

<template>
  <CFlex>
    <CBox bg="tomato" w="100%" p="4" color="white"> This is the Box </CBox>
    <CBox bg="tomato" w="100%" p="4" color="white"> This is the Box </CBox>
    <CBox bg="tomato" w="100%" p="4" color="white"> This is the Box </CBox>
  </CFlex>
</template>
