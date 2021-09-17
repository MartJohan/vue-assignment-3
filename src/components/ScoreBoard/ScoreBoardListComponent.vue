<template>
  <li>
    <p>{{question.question}}</p>
    <p>{{question.answer}}, {{question.correct}}</p>
  </li>
</template>

<script>
export default {
  name : "ScoreBoardList",
  props : ['question'],
}
</script>