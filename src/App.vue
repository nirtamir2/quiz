<template>
  <div id="app">
    <question v-if="question" 
    :question="question" :index="questionIndex" :savedAnswer="answers[questionIndex]" :totalQuestions="totalQuestions"
     @next="next" @back="back" @choose="choose"/>
     <h1 v-else>Thank you {{answers}}</h1>
  </div>
</template>

<script>
import { getQuestion, getQuestionCount } from '@/services/question.js'
import Question from './components/Question.vue'

export default {
  name: 'app',
  components: {
    Question
  },
  data() {
    return {
      questionIndex: 0,
      totalQuestions: getQuestionCount(),
      question: getQuestion(0),
      answers: [],
      gameOn: true
    }
  },
  methods: {
    choose(option) {
      this.$set(this.answers, this.questionIndex, option)
    },
    next() {
      this.questionIndex++
      this.question = getQuestion(this.questionIndex)
    },
    back() {
      this.questionIndex--
      this.question = getQuestion(this.questionIndex)
    }
  }
}
</script>
<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5em;
}
</style>

