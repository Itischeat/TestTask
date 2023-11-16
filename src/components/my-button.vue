<template>
    <div class="">
      <InputText v-tooltip="{
        value: 'Имя не может содержать символы или цифры, а так же его длина должна быть от 2 до 12 букв',
        pt: {
          root: 'ml-[10px] ',
          text: 'bg-trobule rounded-xl p-[5px] text-white w-[211px] h-auto',
          arrow: {
            style: {
              borderColor: 'bg-trobule'
            }
          }
        }
      }" 
      @change="sendFullName" :class="Validation(fullName.firstName) ? '' : 'border-2 border-trobule outline-0'" v-model="fullName.firstName" class=" rounded-[14px] placeholder:text-Wh text-[14px] outline-none outline-offset-0 focus:outline-brhv  text-white w-[300px] px-[16px] py-[10.5px] h-[44px] bg-primary shadow-myShd" placeholder="Имя"></InputText>
    </div>
    <div class="">
      <InputText v-tooltip="{
        value: 'Фамилия не может содержать символы или цифры, а так же его длина должна быть от 2 до 12 букв',
        pt: {
          root: 'ml-[10px] ',
          text: 'bg-trobule rounded-xl p-[5px] text-white w-[211px] h-auto',
          arrow: {
            style: {
              borderColor: 'bg-trobule'
            }
          }
        }
      }"  
      @change="sendFullName" :class="Validation(fullName.secondName) ? '' : 'border-2 border-trobule outline-0'" v-model="fullName.secondName" class=" rounded-[14px] placeholder:text-Wh text-[14px] outline-none outline-offset-0 focus:outline-brhv text-white w-[300px] px-[16px] py-[10.5px] mt-[16px] h-[44px] bg-primary shadow-myShd" placeholder="Фамилия"></InputText>
    </div>
  </template>

<script lang="ts">
export default {
  name: 'myButton',
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
    Validation(name: string): boolean {
      if(name === this.fullName.firstName) {
          let validName = /^.*[^A-zА-яЁё].*$/.test(name) 
          let overValid = !validName && (name.length >= 2 && name.length <= 12)
          this.fullName.answer = overValid
        return overValid
      } else {
        let validName = /^.*[^A-zА-яЁё].*$/.test(name)
          let overValid = !validName && (name.length >= 2 && name.length <= 12)
          this.fullName.answer1 = overValid
        return overValid
      }
      
    },
    sendFullName() {
      this.$emit('sends', this.fullName)
    }
  }
}
</script>

<style scoped></style>