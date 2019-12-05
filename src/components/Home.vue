<template>
  <Onboard/>
<!-- <div class="hello">
<input class="search" name="query" v-model="searchQuery" placeholder="Search by Name or Study">
<grid-temp
  :data="gridData"
  :columns="gridColumns"
  :filter-key="searchQuery" >
</grid-temp>
</div> -->
</template>

<script>
import Onboard from './views/Onboard'
import playData from '../assets/data/play_music.json'
// import GridTemp from './grid/GridTemp.vue'
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
  mounted () {
    var now = moment('2017-01-16T00:01:17.414Z').format('YYYY')

    this.newTopArtistByYear()

  },
  computed: {
    gridData () {
      return playData
    },
    gridColumns () {
      let removeKeys = [ 0, 4, 5 ]
      let playKeys = Object.keys(playData[0])
      playKeys = playKeys.filter((key, index) => {
        return removeKeys.indexOf(index) === -1
      })
      return playKeys
    },
    // byYear () {
    //   return playData.reduce(function (groups, item) {
    //     const val = moment(item['time']).format('YYYY')
    //     groups[val] = groups[val] || []
    //     groups[val].push(item)
    //     return groups
    //   }, {})
    // },
    // artistPerYear () {
    //   return this.byYear['2017'].reduce(function (groups, item) {
    //     const val = item['description']
    //     groups[val] = groups[val] || []
    //     groups[val].push(item)
    //     return groups
    //   }, {})
    // },
    // topArtistByYear () {
    //   let obj = this.artistPerYear
    //   return Object.keys(obj).reduce(function (res, key) {
    //     if (res.length < obj[key].length) {
    //       res.highestKey = key
    //       res.length = obj[key].length
    //       res.arr = obj[key]
    //     }
    //     return res
    //   }, { highestKey: null, length: 0, arr: null })
    // }
  },
  methods: {
    async highestKey () {
      let obj = await this.artistPerYear
    },
    async newTopArtistByYear () {
      let data = await playData
      console.log('data', data)
      // data = data.slice(0,200)

      function groupByYear (acc, data) {
        const year = moment(data['time']).format('YYYY')
        acc[year] = (acc[year] || []).concat(data)
        return acc
      }
      const groupBy = keys => array =>
        array.reduce((objectsByKeyValue, obj) => {
          const value = keys.map(key => obj[key]).join('-');
          objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
          return objectsByKeyValue;
        }, {});

      const getByYear = data.reduce(groupByYear, {})
      const getArtists = getByYear['2018'].map(data => data.description)
      const artists = Array.from(new Set(getArtists))
      const groupByArtist = groupBy(['description'])
      const getTopArtists = groupByArtist(getByYear['2018'])
      let result = Object.keys(getTopArtists).map(function(d){
         return { artist: d, length: getTopArtists[d].length, data:  getTopArtists[d] }
      })
      result = result.sort((a,b) => a.length > b.length ? -1 : a.length < b.length ? 1 : 0)
      console.log('final result', result)

    }
  },
  components: { Onboard }
  // components: { GridTemp, Onboard }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
