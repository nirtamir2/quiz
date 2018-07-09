<template>
  <div id="app">
    <question :question="question" :index="questionIndex" 
     @answer="saveAnswer" @back="back"/>
  </div>
</template>

<script>
import { getQuestion } from '@/services/question.js'
import Question from './components/Question.vue'

export default {
  name: 'app',
  components: {
    Question
  },
  data() {
    return {
      questionIndex: 1,
      question: getQuestion(1),
      answers: []
    }
  },
  methods: {
    saveAnswer(answer) {
      this.answers[this.questionIndex] = answer
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
