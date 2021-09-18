<template>
  <div>
    <div>
      <p v-if="isLoading">Fetching character...</p>
    </div>
    <div v-if="!isLoading">
        <QuestionList :questions="questions" @completed-game="handleCompletedGame"/>
    </div>
  </div>
</template>

<script>
import QuestionList from "./QuestionListComponent";
import { fetchQuestions } from "../../API/questionAPI";
import { mapMutations, mapState} from 'vuex';

export default {
  name : 'Questions',
  components: {QuestionList},
  async created() {
    const [error, questions] = await fetchQuestions(this.url);
    this.error = error;
    this.questions = questions
    this.isLoading = false;
  },
  data() {
    return {
      isLoading : true,
      questions : [],
      error : '',
    }
  },
  computed: {
    ...mapState(['allQuestions','loadingQuestions','error','url','player','username','highScore']),
  },
  methods: {
    ...mapMutations(['setPlayer']),
    async handleCompletedGame() {
      await this.$router.push('/ScoreBoard');
    }
  }
}
</script>