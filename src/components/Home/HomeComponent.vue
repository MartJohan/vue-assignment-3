<template>
  <div id="homePageComponent">
    <h1>Welcome To TRIVIA quiz</h1>
    <form>
      <label for="username" >Enter your Username</label><br/><br/>
      <input type="text" id="username" v-model="user.username"><br/><br/>
      <label> Select difficulty </label><br/>
      <select id="difficulty" v-model="user.difficulty">
        <option v-for="difficulty in difficulties" :key="difficulty">{{ difficulty }}</option>
      </select>
      <br/><br/>
      <label for="numberQ"> Chose amount of questions</label><br/>
      <input type="number" id="numberQ"><br/><br/>
      <button @click="handleGameStartClick()">START</button>
    </form>
  </div>
</template>

<script>

//Default export for home page.
export default{
  name: 'homepage',
  data(){
    return{
      user: {
        username: "",
        amount: 0,
        difficulty: "",
        category: "",
      },
      //Array of difficulties used to generate the select options
      difficulties: ['easy', 'medium','hard', 'any'],
    }
  },
  methods: {
    //Use STORES to pass the data from this one to the create Question method.
    handleGameStarClick(){
      this.$router.push()
    }
  }
}
</script>