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
      bySong: null,
      byYear: []
    }
  },
  mounted() {
    var now = moment('2017-01-16T00:01:17.414Z').format('YYYY')
    console.log('moment:',now)
   this.byYear = this.groupItems('time')
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
    groupByArtist () {
      // Array.prototype.groupBy(prop => {
      //   return this.reduce((groups, item) => {
      //     console.log('groups:', groups)
      //     console.log('item:', item)
      //     const val = item[prop]
      //     groups[val] = groups[val] || []
      //     groups[val].push(item)
      //     return groups
      //   }, {})
      // })
      // return playData.groupBy('description')
      // return this.artist('description')
    },
    popArtist () {
      // playData.filter(data => )
      // function groupBy(array, keyGetter) {
        //   const map = new Map();
      //   array.forEach((item) => {
        //       const artist = keyGetter(item);
      //       if (!map.has(artist)) {
        //           map.set(artist, [item]);
      //       } else {
        //           map.get(artist).push(item);
      //       }
      //   });
      //   return map;
      // }
      // let description = playData.filter(data => data.description)
      // console.log('description:', playData => playData.description)
      // return this.artistList = groupBy(playData, playData => playData.description)
    }
  },
  methods: {
    groupItems (key) {
      console.log('hello from artist')
      Array.prototype.groupBy = function(prop) {
        console.log('prop:', prop)
        return this.reduce((groups, item) => {
          console.log('groups:', groups)
          // console.log('item:', item)
          let val
          if (prop === 'time') {
            val = moment(item[prop]).format('YYYY')
            console.log('val', val)
          } else {
            val = item[prop]
          } 
          groups[val] = groups[val] || []
          groups[val].push(item)
          return groups
        }, {})
      }
      playData.groupBy(key)
    }
  },
  components: { GridTemp },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
