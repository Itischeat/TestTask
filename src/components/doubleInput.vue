<template>
  <InputText v-tooltip.right="{
    value: 'Имя не может содержать символы или цифры, а так же его длина должна быть от 2 до 12 букв',
    pt: {
      root: 'ml-[12px] ',
      text: 'bg-trobule rounded-xl p-[5px] text-white w-[211px] h-auto',
      arrow: {
        class: [
          'absolute w-0 h-0 border-[10px] border-solid border-arrowColor',
        ],
        style: {
          left: '-18px',
          top: '45%'
        }
      }
    }
  }" @change="sendFullName" :class="Validation(fullName.firstName) ? '' : 'border-2 border-trobule outline-0'"
    v-model="fullName.firstName"
    class=" rounded-[14px] placeholder:text-lightGrey text-[14px] outline-none outline-offset-0 focus:outline-successful  text-white w-[300px] px-[16px] py-[10.5px] h-[44px] bg-primary shadow-shadowMain"
    placeholder="Имя">
  </InputText>

  <InputText v-tooltip="{
    value: 'Фамилия не может содержать символы или цифры, а так же его длина должна быть от 2 до 12 букв',
    pt: {
      root: 'ml-[10px] ',
      text: 'bg-trobule rounded-xl p-[5px] text-white w-[211px] h-auto',
      arrow: {
        class: [
          'absolute w-0 h-0 border-[10px] border-solid border-arrowColor',
        ],
        style: {
          left: '-18px',
          top: '45%'
        }
      }
    }
  }" @change="sendFullName" :class="Validation(fullName.secondName) ? '' : 'border-2 border-trobule outline-0'"
    v-model="fullName.secondName"
    class=" rounded-[14px] placeholder:text-lightGrey text-[14px] outline-none outline-offset-0 focus:outline-successful text-white w-[300px] px-[16px] py-[10.5px] mt-[16px] h-[44px] bg-primary shadow-shadowMain"
    placeholder="Фамилия"></InputText>
</template>

<script lang="ts">
export default {
  name: 'myButton',
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
    Validation(name: string): boolean {
      if (name === this.fullName.firstName) {
        const validName = /^.*[^A-zА-яЁё].*$/.test(name)
        const overValid = !validName && (name.length >= 2 && name.length <= 12)
        this.fullName.answerFirstName = overValid
        return overValid
      } else {
        const validName = /^.*[^A-zА-яЁё].*$/.test(name)
        const overValid = !validName && (name.length >= 2 && name.length <= 12)
        this.fullName.answerSecondName = overValid
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