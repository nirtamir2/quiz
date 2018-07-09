<template>
  <div>
      <p>Question number: {{index}}</p>
      <h1>{{question.question}}</h1>
      <p>{{question.body}}</p>
      <ul>
        <li v-for="(option, index) of question.options" :key="index"
            @click="chooseAnswer(option)" >{{option}}</li>
      </ul>
      <button @click="back" v-if="index !== 1">back</button>
      <button @click="answerQuestion" :disabled="!answer">next</button>
  </div>
</template>

<script>
export default {
  name: 'Question',
  data(){
    return {answer: null}
  },
  props: {
    question: {type: Object, required: true},
    index: {type: Number, required: true},
  },
  methods: {
    answerQuestion() {
      this.$emit('answer', this.answer)
      this.answer = null
    },
    back(){
      this.$emit('back')
    },
    chooseAnswer(option){
      this.answer = option
    }
  }
}
</script>

<style scoped>
</style>
