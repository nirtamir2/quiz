<template>
  <div id="app">
    <question v-if="gameOn" 
    :question="question" :index="questionIndex" :savedAnswer="answers[questionIndex]"
     @answer="saveAnswer" @back="back"/>
     <h1 v-else>Thank you</h1>
     <h1>{{answers}}</h1>
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
      answers: [],
      gameOn: true
    }
  },
  methods: {
    saveAnswer(answer) {
      this.answers[this.questionIndex - 1] = answer
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
