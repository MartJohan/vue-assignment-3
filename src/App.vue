<template>
  <router-view />
</template>

<script>
import { fetchToken } from "./API/questionAPI";
import {mapMutations, mapState} from "vuex";

export default {
  name: 'App',
  components: {
  },
  async created() {
    //Gets a token to ensure that the same questions are not fetched multiple times
    // First index is the response code and second index is the token string
    if(this.token === '') {
      const newToken = await fetchToken();
      this.setToken(newToken)
    }
  },
  computed : {
    ...mapState(['token'])
  },
  methods : {
    ...mapMutations(['setToken'])
  }
}
</script>

