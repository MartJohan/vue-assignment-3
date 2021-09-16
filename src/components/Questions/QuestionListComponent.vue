<template>
  <p>{{ currentQuestion.question }}</p>

  <button v-for="answer in answers" :key="answer" @click="handleNextQuestion(answer)">{{answer}}</button>
</template>

<script>
import { mapMutations,mapGetters } from 'vuex';
export default {
  name: "QuestionList",
  props: ['questions'],
  emits : ["completed-game"],
  created() {
    this.currentQuestion = this.questions[this.counter];
    this.updateAnswers()
  },
  data() {
    return {
      answers: [],
      currentQuestion: {},
      counter: 0,
      score: 0,
      gameArray : [],
    }
  },
  methods: {
    ...mapMutations(['setGameArray']),
    ...mapGetters(['getUserName']),
    handleNextQuestion(answer) {
      if (answer === this.currentQuestion.correct_answer) {
        this.score += 10;
      }
      if (this.counter < this.questions.length-1) {
        this.gameArray.push([this.currentQuestion.question,answer,this.currentQuestion.correct_answer])
        this.counter++;
        this.currentQuestion = this.questions[this.counter];
        this.updateAnswers();
      } else {
        this.gameArray.push({"Total score: " : this.score});
        this.gameArray.push({"User: " : this.getUserName()})
        this.setGameArray(this.gameArray);
        this.$emit("completed-game", this.gameArray);
      }
    },

    updateAnswers() {
      this.answers = [
        this.currentQuestion.correct_answer,
        ...this.currentQuestion.incorrect_answers
      ].sort((a, b) => {
        return a.localeCompare(b)
      })
    }
  }
}
</script>