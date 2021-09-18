<template>
  <div>
    <div>
      <p v-if="isLoading">Fetching character...</p>
    </div>
    <div v-if="!isLoading">
        <QuestionList :questions="decodedQuestions" @completed-game="handleCompletedGame"/>
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
    await this.decodeQuestions(questions);
    this.decodedQuestions = this.allQuestions;
    this.isLoading = false;
  },
  data() {
    return {
      error : '',
      isLoading : true,
      code : '',
      decodedQuestions : [],
    }
  },
  computed: {
    ...mapState(['url','player','username','highScore','token','allQuestions']),
  },
  methods: {
    ...mapMutations(['setPlayer','setToken','setLoadingQuestions','setAllQuestions']),
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
    //This method id garbage, we know :(
    async decodeQuestions(questions) {
      let newArr = [];
      let IA_array = [];
      questions.forEach(object => {
        const newObject = {
          question : atob(object.question),
          category : atob(object.category),
          type : atob(object.type),
          difficulty : atob(object.difficulty),
          correct_answer : atob(object.correct_answer),
        }
        object.incorrect_answers.forEach(value => {
          IA_array.push(atob(value));
        })
        newObject.incorrect_answers = IA_array;
        IA_array = [];

        newArr.push(newObject);
      })
      console.log(newArr)
      this.setAllQuestions(newArr);
    },
  }
}
</script>