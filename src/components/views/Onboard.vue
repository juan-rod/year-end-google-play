<template>
  <div class="onboard">
    <Spinner v-if="state" :size="160" :depth="6" />
    <div class="onboard__container" v-else>
      <Onboard-Select v-show="onboardCard.select" @onboard-view="changeView"/>
      <Onboard-Instructions v-show="onboardCard.instructions" @onboard-view="changeView" />
      <Onboard-Upload v-show="onboardCard.upload" @onboard-end="manipulateData" />
    </div>
  </div>
</template>

<script>
import OnboardSelect from './OnboardSelect'
import OnboardInstructions from './OnboardInstructions'
import OnboardUpload from './OnboardUpload'
import Spinner from '../utils/Spinner'
export default {
  name: 'Onboard',
  data () {
    return {
      onboardCard: {
        select: true,
        instructions: false,
        upload: false
      },
      state: false
    }
  },
  methods: {
    changeView (data) {
      console.log('hey from change View', data)
      if (data === 'select') {
        this.onboardCard[data] = !this.onboardCard[data] 
        this.onboardCard['instructions'] = true
      }
      if (data === 'instructions') {
        this.onboardCard[data] = !this.onboardCard[data] 
        this.onboardCard['upload'] = true
      }
    },
    manipulateData (data) {
      this.state = true
    }
  },
  components: { OnboardSelect, OnboardInstructions, OnboardUpload, Spinner }
}
</script>

<style>

</style>
