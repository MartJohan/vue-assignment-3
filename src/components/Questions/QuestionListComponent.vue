<template>
  <p>{{ currentQuestion.question }}</p>

  <button v-for="answer in answers" :key="answer" @click="handleNextQuestion(answer)">{{answer}}</button>
</template>

<script>
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
    }
  },
  methods: {
    handleNextQuestion(answer) {
      console.log("clicked");

      if (answer === this.currentQuestion.correct_answer) {
        this.score += 10;
      }
      if (this.counter < this.questions.length-1) {
        this.counter++;
        this.currentQuestion = this.questions[this.counter];
        this.updateAnswers();
      } else {
        console.log("You don't have anymore questions");
        this.$emit("completed-game", this.score)
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