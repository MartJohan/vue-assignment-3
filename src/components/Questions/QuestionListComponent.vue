<template>
  <p>{{ currentQuestion.question }}</p>
  <button v-for="answer in answers" :key="answer" @click="handleNextQuestion(answer)">{{answer}}</button>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "QuestionList",
  props: ['questions'],
  emits : ["completed-game"],
  created() {
    this.currentQuestion = this.questions[this.counter];
    this.setGameArray(this.gameArray);
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
    ...mapMutations(['setGameArray','setScore']),
    handleNextQuestion(answer) {
      if (this.counter < this.questions.length-1) {
        if (answer === this.currentQuestion.correct_answer) {
          this.score += 10;
        }
        this.gameArray.push({id : this.counter, question : this.currentQuestion.question,
        answer : answer,
        correct : this.currentQuestion.correct_answer});
        this.counter++;
        this.currentQuestion = this.questions[this.counter];
        this.updateAnswers();
        console.log(this.counter, this.questions.length);
      } else {
        if (answer === this.currentQuestion.correct_answer) {
          this.score += 10;
        }
        this.gameArray.push({id : this.counter, question : this.currentQuestion.question,
          answer : answer,
          correct : this.currentQuestion.correct_answer});
        this.setScore(this.score);
        this.setGameArray(this.gameArray);
        this.$emit("completed-game");
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