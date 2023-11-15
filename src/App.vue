
<template>
  <div class="bg-primary w-[348px] h-[632px] rounded-[20px] m-6">
    <div class="p-[24px] h-[524px] relative" >
      <div v-if="!Validation(firstName)" class="">
        <img class="absolute top-[40px] right-[12px]" src="./assets/arrow.svg" alt="Стрелка подсказки">
        <div class="absolute top-[25px] right-[-330px] text-white py-[8px] px-[24px] rounded-xl bg-trobule">Введите имя от 2 до 12 букв, без чисел</div>
      </div>  
      <InputText :class="Validation(firstName) ? '' : 'problem'" v-model="firstName" class=" rounded-[14px] placeholder:text-Wh text-[14px] outline-none outline-offset-0 focus:outline-brhv  text-white w-[300px] px-[16px] py-[10.5px] h-[44px] bg-primary shadow-myShd" placeholder="Имя"></InputText>
      <div v-if="!langValid()" class="">
        <img class="absolute top-[70px] right-[12px]" src="./assets/arrow.svg" alt="Стрелка подсказки">
        <div class="absolute top-[55px] right-[-495px] text-white py-[8px] px-[24px] rounded-xl bg-trobule">Имя и фамилия не могут содержать буквы разных алфавитов</div>
      </div>  
      <InputText :class="Validation(secondName) ? '' : 'problem'" v-model="secondName" class=" rounded-[14px] placeholder:text-Wh text-[14px] outline-none outline-offset-0 focus:outline-brhv text-white w-[300px] px-[16px] py-[10.5px] mt-[16px] h-[44px] bg-primary shadow-myShd" placeholder="Фамилия"></InputText>
      <div v-if="!Validation(secondName)" class="">
        <img class="absolute top-[100px] right-[12px]" src="./assets/arrow.svg" alt="Стрелка подсказки">
        <div class="absolute top-[85px] right-[-372px] text-white py-[8px] px-[24px] rounded-xl bg-trobule">Введите Фамилию от 2 до 12 букв, без чисел</div>
      </div>  
    </div>
    <div class="pt-[16px] pb-[24px] ">
      <div class="flex-1 justify-center items-center p-[24px] ">
        <Button :class="Validation(firstName) && Validation(secondName) ? langValid() ? 'successful' : '' : ''" class="h-[44px] w-[248px] pointer-events-none cursor-default rounded-[14px] mr-[8px] text-myGrey bg-disable flex-1 justify-center items-center">Создать</Button>
        <Button class="h-[44px] w-[44px] " >
          <img class="pt-[6px]" src="./assets/Buttons.svg" alt="Кнопка рандомайзера">
        </Button>
    </div>
    </div> 
  </div>
</template>

<script lang="ts">

export default {
  data() {
    return {
      firstName: <string>'',
      secondName: <string>'',
    }
  },
  methods: {
    Validation(name: string) {
      let validName = /\d/.test(name)
      if (!validName && (name.length >= 2 && name.length <= 12)) {
        return true
      } 
      return false
    },
    langValid() {
      let langEnValidf = /[a-zA-Z -]+$/.test(this.firstName)
      let langEnValids = /[a-zA-Z -]+$/.test(this.secondName)
      let langRuValidf = /[А-Яа-яЁё -]+$/.test(this.firstName)
      let langRuValids = /[А-Яа-яЁё -]+$/.test(this.secondName)
      if (langEnValidf === langEnValids || langRuValidf === langRuValids) {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
.problem {
  border: 2px solid #FF4848;
  outline: none;
}
.successful {
  background-color: #246BFD;
  color: white;
  transition: all ease-in-out .3s;
}
</style>
