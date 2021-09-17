<template>
  <ul>
      <ScoreBoardListComponent
          v-for="question in gameData"
          :question="question"
          :key="question.id"/>
  </ul>
  <p>Total score : {{score}}</p>
  <button @click="pushToMainPage">New round, with different options</button>
  <button>New round, with same options</button>
</template>

<script>
import { mapGetters,mapState } from 'vuex';
import ScoreBoardListComponent from "./ScoreBoardListComponent";
export default {
  components: {ScoreBoardListComponent},
  computed: {
    ...mapState(['gameArray']),
    ...mapGetters(['getGameArray']),
    ...mapGetters(['getScore']),
  },
  created() {
    this.gameData = this.getGameArray;
    this.score = this.getScore;
  },
  data() {
    return {
      gameData : [],
      score : 0,
    }
  },
  methods: {
    pushToMainPage() {
      this.$router.push('/')
    }
  }
}
</script>