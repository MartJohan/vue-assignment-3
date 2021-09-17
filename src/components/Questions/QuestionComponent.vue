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
import {mapGetters, mapMutations, mapState} from 'vuex';

export default {
  name : 'Questions',
  components: {QuestionList},
  async created() {
    const [error, questions] = await fetchQuestions('https://opentdb.com/api.php?amount=20&category=23&difficulty=easy')
    this.error = error;
    this.questions = questions
    this.isLoading = false;
  },
  data() {
    return {
      isLoading : true,
      error : '',
      questions : [],
    }
  },
  computed: {
    ...mapState(['allQuestions','loadingQuestions','error']),
    ...mapMutations(['setAllQuestions', 'setLoadingQuestions','setQuestionError']),
    ...mapGetters(['getLoadingQuestions'])
  },
  methods: {
    handleCompletedGame() {
      this.$router.push('/ScoreBoard');
    }
  }
}
</script>