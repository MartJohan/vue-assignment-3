<template>
  <li class="list-group-item">
    <ul class="list-group">
      <li class="list-group-item">Question : {{question.question}}</li>
        <li class="list-group-item list-group-item-success" v-if="question.answer === question.correct">Your answer : {{question.answer}}</li>
      <li class="list-group-item list-group-item-danger" v-if="question.answer !== question.correct">Your answer : {{question.answer}}</li>
      <li class="list-group-item">Correct answer : {{question.correct}}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name : "ScoreBoardList",
  props : ['question'],
  created() {
    console.log(this.question.correct);
    console.log(this.question.answer);
    console.log(this.question.correct === this.question.answer)
    console.log("");
  }
}
</script>