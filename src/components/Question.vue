<template>
  <div class="card">
    <div class="question-header">
      <h1 class="bold title">{{question.question}}</h1>
      <span class="bold score">SCORE - {{index+1}}/{{totalQuestions}}</span>
    </div>
    <progress-bar :progress="(index)/totalQuestions * 100"/>
    <div class="question-main">
      <p class="bold">{{question.body}}</p>
      <ul class="options">
        <li v-for="(option, optionIndex) of question.options" :key="optionIndex"
           :class="{'option-selected': savedAnswer === option, option: true}"
            @click="choose(option)" >{{option}}</li>
      </ul>
    </div>
    <div class="question-buttons">
      <button class="button" @click="back" v-if="index !== 0">back</button>
      <button class="button" @click="next" :disabled="!savedAnswer">next</button>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar'
export default {
  name: 'Question',
  components: { ProgressBar },
  props: {
    savedAnswer: { type: String, required: true },
    question: { type: Object, required: true },
    index: { type: Number, required: true },
    totalQuestions: { type: Number, required: true }
  },
  methods: {
    choose(option) {
      this.$emit('choose', option)
    },
    back() {
      this.$emit('back')
    },
    next() {
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
}

.question-header {
  padding: 1em 0;
  display: flex;
}

.question-main {
  margin: 1em 0;
}

.question-buttons {
  display: flex;
  justify-content: flex-end;
}

.options {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option {
  cursor: pointer;
  margin: 1em;
  font-size: 0.9em;
  list-style: none;
  padding: 1em;
  border: 2px solid var(--option-border);
  transition: border-color 0.2s linear;
  text-align: center;
}

.option-selected {
  border-color: var(--option-selected);
}
.title {
  flex: 1;
  margin: 0;
}

.score {
  justify-self: flex-end;
}

.button {
  background-color: var(--button-primary);
  color: var(--text);
  padding: 0.3em 2em;
  font-size: 0.9rem;
  outline: none;
  margin-left: 0.5em;
  cursor: pointer;
  border: none;
  border-radius: 0.1em;
}

.button:disabled {
  color: var(--text-disable);
  cursor: not-allowed;
}
</style>
