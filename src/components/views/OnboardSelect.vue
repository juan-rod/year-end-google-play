<template>
  <div class="onboard__select">
    <div class="title">
        <h1>Takeout is Creepy</h1>
      </div>
      <div class="description">
        <p>Google tracks everything you do. Get your most played music,
          most visited places, heatmaps, and more.
        </p>
      </div>
      <div class="get-started">
        <p>To get started, select the data you'd like see.</p>
        <div class="data-selection">
          <div class="data-selection__input" v-for="choice in selection" :key="choice.id">
            <input type="checkbox" :id="`data-${choice.name}`" :name="choice.urlKey" class="switch-input">
            <label :for="`data-${choice.name}`" class="switch-label"> {{ choice.name }} </label>
          </div>
        </div>
      </div>
      <div class="submit">
        <!-- <button class="submit-button" @click="test">test</button> -->
        <button class="submit-button" @click="goToSite">Go</button>
      </div>
  </div>
</template>

<script>
// import CreateSongNode from '../gql/mutations/CreateSongNode.gql'
import gql from 'graphql-tag'
export default {
  name: 'OnboardSelect',
  data () {
    return {
      selection: [
        {
          name: 'music',
          urlKey: 'play_music'
        },
        {
          name: 'fit',
          urlKey: 'fit'
        },
        {
          name: 'location history',
          urlKey: 'location_history'
          },
        {
          name: 'maps',
          urlKey: 'maps'
        },
        {
          name: 'youtube',
          urlKey: 'youtube'
          }
      ]
    }
  },
  methods: {
    goToSite () {
      let getInputs, checkedInputs, checkedInputNames, url
      getInputs = document.querySelectorAll('input')
      checkedInputNames = []
      checkedInputs = [...getInputs].filter(input => input.checked)
      checkedInputs.filter(checked => checkedInputNames.push(checked.name))
      checkedInputNames = checkedInputNames.join(',')
      url = `https://takeout.google.com/settings/takeout/custom/${checkedInputNames}`
      window.open(url)
      window.focus()
      this.$emit('onboard-view', 'select')
    },
    test () {
      this.$apollo.mutate({
          mutation: gql`mutation CreateSongNode($input: App_createSongInput!){
            App_createSong(
              input: $input
            ){
              node {
              title
              time
              description
            }}
          }`,
          variables: {
            input: {
              title: "Listened to Miracle",
              description: "Whitney Houston",
              time: "2018-08-04T16:05:58.748Z"
            }
          }
        })
    }
  }
}
</script>

<style>

</style>
