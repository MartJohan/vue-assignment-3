<template>
    <div id="homePageComponent">
        <h1>Welcome To TRIVIA quiz</h1>
        <label for="username" >Enter your Username</label><br/><br/>
        <input type="text" id="username" v-model="username" required><br/><br/>
        <label> Select difficulty </label><br/>
        <select id="difficulty" v-model="difficulty">
            <option v-for="difficulty in difficulties" :key="difficulty">{{ difficulty }}</option>
        </select>
        <br/><br/>
        <label> Chose category </label><br/><br/>
        <select id="category" v-model="category">
            <option v-for="category in categories" :key="category" :value="category.value" >{{ category.name }}</option></select><br/><br/>
        <label for="numberQ"> Chose amount of questions</label><br/>
        <input v-model="amount"  type="number" id="numberQ" min="1" max="99"><br/><br/>
        <button @click="handleGameStartClick()">START</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';

//Default export for home page.
export default{
    name: 'homepage',
    data(){
        return{
            username: "",
            amount: 0,
            difficulty: "",
            category: "",
            //Array of difficulties used to generate the select options TODO: make use of a fetch to retrieve thees instead of hard coding them inn.
            difficulties: ['easy', 'medium','hard', 'Any Difficulty'],
            //Array of category's used to generate select options. TODO: make use of a fetch to retrieve thees instead of hard coding them inn.
            baseURL : "https://opentdb.com/api.php?",
          categories: [
                { value: 'any', name: 'Any Category'},
                { value: '9', name: 'General Knowledge'},
                { value: '10', name: 'Entertainment: Books'},
                { value: '11', name: 'Entertainment: Film'},
                { value: '12', name: 'Entertainment: Music'},
                { value: '13', name: 'Entertainment: Musicals & Theatres'},
                { value: '14', name: 'Entertainment: Television'},
                { value: '15', name: 'Entertainment: Video Games'},
                { value: '16', name: 'Entertainment: Board Games'},
                { value: '17', name: 'Science & Nature'},
                { value: '18', name: 'Science: Computers'},
                { value: '19', name: 'Science: Mathematics'},
                { value: '20', name: 'Mythology'},
                { value: '21', name: 'Sports'},
                { value: '22', name: 'Geography'},
                { value: '23', name: 'History'},
                { value: '24', name: 'Politics'},
                { value: '25', name: 'Art'},
                { value: '26', name: 'Celebrities'},
                { value: '27', name: 'Animals'},
                { value: '28', name: 'Vehicles'},
                { value: '29', name: 'Entertainment: Comics'},
                { value: '30', name: 'Science: Gadgets'},
                { value: '31', name: 'Entertainment: Japanese Anime & Manga'},
                { value: '32', name: 'Entertainment: Cartoon & Animations'},
            ]
        }
    },
    methods: {
        ...mapMutations(["setUserName","setDifficulty","setCategory","setNumberOfQuestions", "setUrl"]),
        handleGameStartClick(){

            this.setUserName(this.username)
            this.setDifficulty(this.difficulty)
            this.setCategory(this.category)
            this.setNumberOfQuestions(this.amount)

          //Format URL
            this.baseURL += `amount=${this.amount}`;
            if(this.category !== "") { this.baseURL += `&category=${this.category}` }
            if(this.difficulty !== "") { this.baseURL += `&difficulty=${this.difficulty}` }

            this.setUrl(this.baseURL);
            this.$router.push('/Questions')
        }
    },
}

</script>