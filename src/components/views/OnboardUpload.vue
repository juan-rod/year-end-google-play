<template>
  <div class="onboard__upload">
    uploaddd
    <input type="file" name="json-file" id="json-file" @change="fileUpload($event)">
    <button @click="$emit('onboard-end', parsedData)">do it</button>
  </div>
</template>

<script>
export default {
  name: 'OnboardUpload',
  data () {
    return {
      uploadedFile: '',
      parsedData: null
    }
  },
  methods: {
    fileUpload(event){
      let parsed
      const fileReader = new FileReader()
        fileReader.readAsText(event.target.files[0])
        fileReader.onload = (event) =>{
          parsed = JSON.parse(event.target.result)
          if (parsed) this.parsedData = parsed
        }
    
    }
  }
}
</script>

<style>

</style>
