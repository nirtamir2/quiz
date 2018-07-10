<template>
    <div class="progress-bar">
        <div class="progress" :style="{width: progress+'%'}"></div>
    </div>
</template>
<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: { type: Number, default: 0 }
  }
}
</script>
<style scoped>
.progress-bar {
  --progress-height: 2px;
  width: 100%;
  margin: 0;
  height: var(--progress-height);
  background-color: var(--text-light);
  border-radius: var(--progress-height);
}

.progress {
  border-radius: inherit;
  height: 100%;
  transition: 0.3s linear width;
  background-color: var(--progress);
}
</style>
