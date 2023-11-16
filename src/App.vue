
<template>
  <div class="bg-primary w-[348px] h-[632px] rounded-[20px] m-6">
    <div class="p-[24px] h-[524px] relative" >
      <myButton @sends="sendFullName"></myButton>
    </div>
    <div class="pt-[16px] pb-[24px] ">
      <div class="flex-1 justify-center items-center p-[24px] ">
        <creatWithRandom :fullName="fullName"></creatWithRandom>
    </div>
    </div> 
  </div>
</template>

<script lang="ts">
import myButton from '@/components/my-button.vue';
import creatWithRandom from '@/components/creatWithRandom.vue'
export default {
  components: { myButton, creatWithRandom },
  data() {
    return {
      fullName: {
        firstName: <string>'',
        secondName: <string>'',
        answer: <boolean>false,
        answer1: <boolean>false,
      }
    }
  },
  methods: {
    sendFullName(FullName: any) {
      this.fullName.firstName = FullName.firstName
      this.fullName.secondName = FullName.secondName
      this.fullName.answer = FullName.answer
      this.fullName.answer1 = FullName.answer1
    },
  }
}
</script>

<style scoped>
</style>
