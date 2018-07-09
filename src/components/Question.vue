<template>
  <div>
    <p>{{question}}</p>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    question: {type: Object, required: true}
  }
}
</script>

<style scoped>
</style>
