<template>
  <div class="onboard__instructions">
    <h1>What Next?</h1>
    <p>Visit new tab</p>
    <p>Click next</p>
    <p>Keep default settings</p>
    <p>Create archive</p>
    <p>Archive will be created and sent to your email</p>
    <p>Download archive to your computer.</p>
    <p>Add files on the next screen.</p>
    <div class="submit">
      <button class="submit-button" @click="goToUploadPage">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnboardInstructions',
  methods: {
    goToUploadPage () {
      this.$emit('onboard-view', 'instructions')
    }
  }
}
</script>

<style>

</style>
