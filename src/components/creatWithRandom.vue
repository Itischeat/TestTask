<template>
    <Button :class="langValid() ? ' text-white transition-all ease-in-out duration-300 pointer-events-auto cursor-pointer enabled:bg-brhv'   : ''" class="h-[44px] w-[248px] pointer-events-none cursor-default rounded-[14px] mr-[8px] text-myGrey bg-disable flex-1 justify-center items-center">Создать</Button>
    <Button class="h-[44px] w-[44px] " >
      <img class="pt-[6px]" src="@/assets/Buttons.svg" alt="Кнопка рандомайзера">
    </Button>
</template>

<script lang="ts">
export default {
    props: {
        fullName: {
            type: Object,
            required: true,
        }
    },
    methods: {
    langValid() {
    if (this.fullName.answer && this.fullName.answer1) {
        let langEnValidf = /[a-zA-Z -]+$/.test(this.fullName.firstName)
        let langEnValids = /[a-zA-Z -]+$/.test(this.fullName.secondName)
        let langRuValidf = /[А-Яа-яЁё -]+$/.test(this.fullName.firstName)
        let langRuValids = /[А-Яа-яЁё -]+$/.test(this.fullName.secondName)
        if (langEnValidf === langEnValids || langRuValidf === langRuValids) {
            return true
        }
      }
      return false
    }
    }
}
</script>

<style scoped></style>