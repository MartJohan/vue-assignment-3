<template>
  <div>
    <div>
      <p v-if="isLoading">Fetching character...</p>
    </div>
    <div v-if="!isLoading">
        <QuestionList :questions="allQuestions" @completed-game="handleCompletedGame"/>
    </div>
  </div>
</template>

<script>
import QuestionList from "./QuestionListComponent";
import {fetchQuestions, fetchToken, resetToken} from "../../API/questionAPI";
import { mapMutations, mapState} from 'vuex';

export default {
  name : 'Questions',
  components: {QuestionList},
  async created() {
    const [code, questions,error] = await fetchQuestions(this.url);
    this.code = code;
    await this.CheckToken();
    this.error = error;
    this.allQuestions = questions
    this.isLoading = false;
  },
  data() {
    return {
      error : '',
      allQuestions : [],
      isLoading : true,
      code : '',
    }
  },
  computed: {
    ...mapState(['url','player','username','highScore','token']),
  },
  methods: {
    ...mapMutations(['setPlayer','setToken','setLoadingQuestions']),
    async handleCompletedGame() {
      await this.$router.push('/ScoreBoard');
    },
    async CheckToken() {
      if(this.code === 1) {
        //No results, get new token
        alert("There are no more unique questions, try again after we refresh!");
        const token = await fetchToken();
        this.setToken(token)
      } else if(this.code === 2) {
        //invalid arguments, route to home page
        alert("There were something invalid with your request, please try again!")
        await this.$router.push('/');
      } else if(this.code === 3) {
        //No token found, generate new
        const token = await fetchToken();
        this.setToken(token);
        await this.$router.push('/');
      } else if(this.code === 4) {
        //Reset token necessary
        const token = await resetToken(this.token)
        this.setToken(token);
      } else {
        return true;
      }
    },
  }
}
</script>