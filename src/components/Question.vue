<template>
  <div>
      <p>Question number: {{index}}/{{totalQuestions}}</p>
      <h1>{{question.question}}</h1>
      <p>{{question.body}}</p>
      <ul>
        <li v-for="(option, optionIndex) of question.options" :key="optionIndex"
           :class="{'red': savedAnswer === option}"
            @click="choose(option)" >{{option}}</li>
      </ul>
      <button @click="back" v-if="index !== 1">back</button>
      <button @click="next" :disabled="!savedAnswer">next</button>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    savedAnswer: {type: String, required: true},
    question: {type: Object, required: true},
    index: {type: Number, required: true},
    totalQuestions: {type: Number, required: true},
  },
  methods: {
    choose(option) {
      this.$emit('choose', option)
    },
    back(){
      this.$emit('back')
    },
    next(){
      this.$emit('next')
    }
  }
}
</script>

<style scoped>
.red {
  color: red;
}
</style>
