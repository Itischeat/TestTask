<template>
    <Button
        :class="isValidLang ? ' enabled:text-white transition-all ease-in-out duration-300 pointer-events-auto cursor-pointer enabled:bg-successful' : ''"
        class="h-[44px] w-[248px] pointer-events-none cursor-default rounded-[14px] mr-[8px] text-whiteGrey bg-disable flex-1 justify-center items-center">Создать</Button>
    <Button class="h-[44px] w-[44px] ">
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

    computed: {
        isValidLang() {
            if (this.fullName.answerFirstName && this.fullName.answerSecondName) {
                const isValidForEn = /[a-zA-Z -]+$/.test(this.fullName.firstName) && /[a-zA-Z -]+$/.test(this.fullName.secondName)
                const isValidForRu = /[А-Яа-яЁё -]+$/.test(this.fullName.firstName) && /[А-Яа-яЁё -]+$/.test(this.fullName.secondName)

                if (isValidForEn || isValidForRu) {
                    return true
                }
            }
            return false
        }
    }
}
</script>

<style scoped></style>