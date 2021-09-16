<template>
  <div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['gameArray']),

  },
  created() {
    console.log(this.gameArray);
  }
}
</script>