<template>
  <div class="hello">
		<input class="search" name="query" v-model="searchQuery" placeholder="Search by Name or Study">
    <grid-temp
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery" >
    </grid-temp>
  </div>
</template>

<script>
import playData from '../assets/data/play_music.json'
import	GridTemp from './grid/GridTemp.vue'
import moment from 'moment'
// import func from './vue-temp/vue-editor-bridge';
export default {
  name: 'Home',
  data () {
    return {
      searchQuery: '',
      byArtist: null,
      bySong: null
    }
  },
  mounted() {
    var now = moment('2017-01-16T00:01:17.414Z').format('YYYY')
    console.log('moment:',now)
    this.highestKey()
  //  this.byYear = this.groupItems('time')
  //  this.byArtist = this.groupItems('description')
  },
  computed: {
    gridData () {
      return playData
    },
    gridColumns () {
      let removeKeys=[ 0, 4, 5 ]
      let playKeys = Object.keys(playData[0])
      playKeys = playKeys.filter((key, index) => {
        return removeKeys.indexOf(index) == -1
      })
      return playKeys
    },
    byYear () {
      return playData.reduce(function(groups, item) {
        const val = moment(item['time']).format('YYYY')
        groups[val] = groups[val] || []
        groups[val].push(item)
        return groups
      }, {})
    },
    artistPerYear () {
      return this.byYear['2017'].reduce(function(groups, item) {
       const val = item['description']
        groups[val] = groups[val] || []
        groups[val].push(item)
        return groups
      }, {})
    },
    topArtistByYear () {
      let obj = this.artistPerYear
      return Object.keys(obj).reduce(function(res,key){
        if(res.length <obj[key].length){
          res.highestKey = key;
          res.length = obj[key].length;
          res.arr =  obj[key];
        }
        return res;  

      },{highestKey:null,length:0, arr:null})
    }
  },
  methods: {
    highestKey () {
      let obj = this.artistPerYear
      let highest = Object.keys(obj).reduce(function(res,key){
        if (res.length < obj[key].length) {
          res.highestKey = key;
          res.length = obj[key].length;
          res.arr =  obj[key];
        }
        return res;  

      },{highestKey:null,length:0, arr:null})
      console.log('highest:', highest)
    }
  },
  components: { GridTemp },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
