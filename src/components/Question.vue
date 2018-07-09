<template>
  <div>
      <p>Question number: {{index}}/{{totalQuestions}}</p>
      <h1>{{question.question}}</h1>
      <p>{{question.body}}</p>
      <ul>
        <li v-for="(option, optionIndex) of question.options" :key="optionIndex"
           :class="{'red': answer === option}"
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
    return {answer: this.savedAnswer}
  },
  props: {
    savedAnswer: {tupe: String, required: true},
    question: {type: Object, required: true},
    index: {type: Number, required: true},
    totalQuestions: {type: Number, required: true},
  },
  methods: {
    answerQuestion() {
      this.$emit('answer', this.answer)
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
.red {
  color: red;
}
</style>
