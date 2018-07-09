<template>
  <div>
      <p>{{question}}</p>
      <button @click="answerQuestion">next</button>
      <button @click="back" :disabled="backDisable">back</button>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    question: {type: Object, required: true},
    backDisable: {type: Boolean, default: false}
  },
  methods: {
    answerQuestion() {
      this.$emit('answer', 1)
    },
    back(){
      this.$emit('back')
    }
  }
}
</script>

<style scoped>
</style>
