<template>
  <div id="app">
    <question v-if="gameOn" 
    :question="question" :index="questionIndex + 1" :savedAnswer="answers[questionIndex]" :totalQuestions="totalQuestions"
     @answer="saveAnswer" @back="back"/>
     <h1 v-else>Thank you</h1>
     <h1>{{answers}}</h1>
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
    saveAnswer(answer) {
      this.answers[this.questionIndex] = answer
      this.questionIndex++
      const nextQuestion = getQuestion(this.questionIndex)
      if (nextQuestion) {
        this.question = nextQuestion
      } else {
        this.gameOn = false
      }
    },
    back() {
      this.questionIndex--
      this.question = getQuestion(this.questionIndex)
    }
  }
}
</script>
