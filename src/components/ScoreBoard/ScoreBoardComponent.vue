<template>
  <div>
    <ul class="list-group">
      <ScoreBoardListComponent
          v-for="question in gameData"
          :question="question"
          :key="question.id"/>
    </ul>
    <div>
      <br/>
      <div class="d-flex justify-content-center">
        <h4>Total score : {{score}}</h4>
      </div>
      <br/>
      <div class="d-flex justify-content-center buttons">
        <button @click="pushToNewGame" class="btn btn-primary">New round, with same options</button>
        <button @click="pushToMainPage" class="btn btn-secondary" style="margin-left:10px !important">New round, with different options</button>
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex';
import ScoreBoardListComponent from "./ScoreBoardListComponent";
import {CheckForPlayer, PatchScore, savePlayer} from "../../API/playerAPI";
export default {
  components: {ScoreBoardListComponent},
  computed: {
    ...mapGetters(['getGameArray']),
    ...mapGetters(['getScore']),
    ...mapState(['allQuestions','loadingQuestions','error','url','player','username','highScore','gameArray']),
  },
  created() {
    this.gameData = this.getGameArray;
    this.score = this.getScore;
    this.CheckScore();
  },
  data() {
    return {
      gameData : [],
      score : 0,
    }
  },
  methods: {
    ...mapMutations(['setPlayer']),
    async CheckScore() {
      const playerinDB = await CheckForPlayer(this.username);
      if(!playerinDB) {
        //this contains the value of the posted player, set this to SetPlayer function
        await savePlayer(this.username, this.highScore).then(value => { this.setPlayer(value); })
        console.log(this.player);
      } else {
        console.log(this.highScore);
        console.log(playerinDB.highScore);
        this.setPlayer({username : this.username, highScore : this.highScore})
        if(this.highScore > playerinDB.highScore) {
          await PatchScore(playerinDB.id, this.highScore)
        }
      }
    },
    pushToMainPage() {
      this.$router.push('/')
    },
    pushToNewGame() {
      this.$router.push('/Questions')
    }
  }
}
</script>
