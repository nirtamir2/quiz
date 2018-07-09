<template>
  <div>
    <form @submit.prevent="answerQuestion">
    <p>{{question}}</p>
    <button type="submit">next</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    question: {type: Object, required: true}
  },
  methods: {
    answerQuestion() {
      this.$emit('answer', null)
    }
  }
}
</script>

<style scoped>
</style>
