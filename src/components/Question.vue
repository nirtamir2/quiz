<template>
  <div class="card">
    <div class="question-header">
      <h1 class="bold title">{{question.question}}</h1>
      <span class="bold score">SCORE - {{index}}/{{totalQuestions}}</span>
    </div>
    <div class="question-body">
      <p>{{question.body}}</p>
      <ul>
        <li v-for="(option, optionIndex) of question.options" :key="optionIndex"
           :class="{'red': savedAnswer === option}"
            @click="choose(option)" >{{option}}</li>
      </ul>
    </div>
    <div class="question-buttons">
      <button @click="back" v-if="index !== 1">back</button>
      <button @click="next" :disabled="!savedAnswer">next</button>
    </div>
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
.card {
  height: 80%;
  width: 80%;
  background-color: var(--card-background);
  box-shadow: 0 4px 4px 0 #00000033, 0 2px 10px 4px #00000030;
  padding: 1em;
}

.bold {
  font-size: 0.8em;
  font-weight: bolder;
  margin: 0;
}

.question-header {
  display: flex;
}

.title {
  flex: 1;
}

.score {
  justify-self: flex-end;
}

.red {
  color: red;
}
</style>
