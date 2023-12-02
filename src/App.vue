
<template>
  <div class="bg-primary w-[348px] h-[632px] rounded-[20px] m-6">
    <div class="p-[24px] h-[524px] relative">
      <doubleInput @sends="sendFullName" />
    </div>
    <div class="pt-[16px] pb-[24px] ">
      <div class="flex-1 justify-center items-center p-[24px] ">
        <creatWithRandom :fullName="fullName" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import doubleInput from '@/components/doubleInput.vue';
import creatWithRandom from '@/components/creatWithRandom.vue'
export default {
  components: { doubleInput, creatWithRandom },
  data() {
    return {
      fullName: {
        firstName: <string>'',
        secondName: <string>'',
        answerFirstName: <boolean>false,
        answerSecondName: <boolean>false,
      }
    }
  },
  methods: {
    sendFullName(FullName: any) {
      this.fullName.firstName = FullName.firstName
      this.fullName.secondName = FullName.secondName
      this.fullName.answerFirstName = FullName.answerFirstName
      this.fullName.answerSecondName = FullName.answerSecondName
    },
  }
}
</script>

<style scoped></style>
