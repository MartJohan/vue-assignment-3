<template>
  <div class="container" style="margin-top : 50px;">
    <div class="row">
      <div class="col text-center">
        <p>{{ currentQuestion.question }}</p>
      </div>
    </div>
    <div class="row" style="max-width: 70%; margin-left: 15%;">
      <div v-for="answer in answers" :key="answer" @click="handleNextQuestion(answer)" class="col-6">
        <button class="btn btn-outline-primary w-100">{{answer}}</button>
      </div>
    </div>
  </div>
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
      highScore: 0,
      gameArray : [],
    }
  },
  methods: {
    ...mapMutations(['setGameArray','setScore']),
    //Each time a answer button is clicked, update score and answers in button then show next question
    handleNextQuestion(answer) {
      if (this.counter < this.questions.length-1) {
        if (answer === this.currentQuestion.correct_answer) {
          this.highScore += 10;
        }
        this.gameArray.push({id : this.counter, question : this.currentQuestion.question,
        answer : answer,
        correct : this.currentQuestion.correct_answer});
        this.counter++;
        this.currentQuestion = this.questions[this.counter];
        this.updateAnswers();
      } else {
        if (answer === this.currentQuestion.correct_answer) {
          this.highScore += 10;
        }
        this.gameArray.push({id : this.counter, question : this.currentQuestion.question,
          answer : answer,
          correct : this.currentQuestion.correct_answer});
        this.setScore(this.highScore);
        this.setGameArray(this.gameArray);
        this.$emit("completed-game");
      }
    },
    //Helper method for updating the texts in the buttons
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