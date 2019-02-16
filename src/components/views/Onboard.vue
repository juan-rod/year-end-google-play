<template>
  <div class="border3 onboard">
    <div class="border2 onboard__container">
      <div class="onboard__title">
        <h1>Google Takeout Data</h1>
      </div>
      <div class="onboard__description">
        <p>Google tracks everything you do. Get your most played music,
          most visited places, heatmaps, and more.
        </p>
      </div>
      <div class="border3 onboard__get-started">
        <p>To get started, select the data you'd like see.</p>
        <div class="border2 data-selection">
          <div class="data-selection__input" v-for="choice in selection" :key="choice.id">
            <input type="checkbox" :id="`data-${choice.name}`" name="set-name" class="switch-input">
            <label :for="`data-${choice.name}`" class="switch-label"> {{ choice.name }} </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Onboard',
  data () {
    return {
      selection: [
        {name: 'music'},
        {name: 'fit'},
        {name: 'location history'},
        {name: 'maps'},
        {name: 'youtube'}
      ]
    }
  }
}
</script>

<style>

</style>
