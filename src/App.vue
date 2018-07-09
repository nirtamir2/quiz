<template>
  <div id="app">
    <question :question="question"/>
  </div>
</template>

<script>
import Question from './components/Question.vue'

export default {
  name: 'app',
  components: {
    Question
  },
  data() {
    return {
      question: {}
    }
  }
}
</script>
