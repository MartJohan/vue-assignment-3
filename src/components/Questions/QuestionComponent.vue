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
import {mapGetters, mapMutations, mapState} from 'vuex';

export default {
  name : 'Questions',
  components: {QuestionList},
  async created() {
    const [error, questions] = await this.fetchQuestions()

    this.setQuestionError(error);
    this.setAllQuestions(questions);
    this.setLoadingQuestions(false);
  },
  data() {
    return {
      isLoading : true,
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