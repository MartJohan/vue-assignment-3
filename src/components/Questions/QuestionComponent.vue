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

import {fetchQuestions} from "../../API/questionAPI";
import QuestionList from "./QuestionListComponent";

export default {
  name : 'Questions',
  components: {QuestionList},
  async created() {
    const [error, questions] = await fetchQuestions()

    this.error = error;
    this.questions = questions;
    this.isLoading = false;
  },
  data() {
    return {
      isLoading : true,
      error : '',
      questions : [],
    }
  },
  methods: {
    handleCompletedGame() {
      this.isLoading = true;
      this.$router.push('/ScoreBoard');
    }
  }
}
</script>