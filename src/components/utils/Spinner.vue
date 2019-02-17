<template>
  <div class="spinner__container">
    <div class="spinner" v-show="status" :style="spinnerStyle" role="alert"></div>
    <p v-if="message">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    status: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 60
    },
    depth: {
      type: Number,
      default: 2
    },
    speed: {
      type: Number,
      default: 1.0
    },
    message: {
      type: String,
      required: false
    }
  },
  computed: {
    spinnerSize () {
      return this.size + 'px'
    },
    spinnerDepth () {
      return this.depth + 'px'
    },
    spinnerSpeed () {
      return this.speed + 's'
    },
    spinnerStyle () {
      return {
        width: this.spinnerSize,
        height: this.spinnerSize,
        borderWidth: this.spinnerDepth,
        animationDuration: this.spinnerSpeed
      }
    }
  }
}
</script>

<style lang="scss">

</style>
