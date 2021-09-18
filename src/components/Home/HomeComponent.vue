<template>
    <!--- Hompage component using bootstrap styling, Its not good, but its something  --->
    <div style="position: relative">
        <div id="homePageComponent">
            <div class="d-flex justify-content-center" >
                <div class="shadow-sm m-5">
                    <h1 class="m-4">WELCOME TO TRIVIA QUIZ</h1>
                    <!--- Username input --->
                    <div class="input-group mb-3">
                        <span class="input-group-text">Username</span>
                        <input class="form-control" type="text" id="username" v-model="username" required><br/><br/>
                    </div>
                    <!--- Select Difficulty --->
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text"> Select difficulty </label>
                        </div>
                        <select class="custom-select form-control" id="difficulty" v-model="difficulty">
                            <option v-for="difficulty in difficulties" :key="difficulty">{{ difficulty }}</option>
                        </select>
                    </div>
                    <!--- Choose category --->
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" > Choose category </label>
                        </div>
                        <select class="custom-select form-control" id="category" v-model="category">
                            <option v-for="category in categories" :key="category" :value="category.id" >{{ category.name }}</option>
                        </select>
                    </div>
                    <!--- Choose how many questions you want --->
                    <div class="input-group mb-3">
                        <span class="input-group-text" > Choose amount of questions</span>
                        <input class="form-control" v-model="amount"  type="number" min="1" max="50"/>
                    </div>
                    <!--- Start button, calls function handleGameStartClick--->
                    <button type="button" class="btn btn-success form-control" @click="handleGameStartClick()">START</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import {fetchCategories} from "../../API/questionAPI";

//Default export for home page.
export default{
    name: 'homepage',
    //Initialising categories
    async created() {
        //Gets categories from the trivia api, using fetchCategories defined in QuestionAPI
        const [error, categories] = await fetchCategories();
        this.error = error
        this.categories = categories
    },
    //Return values
    data(){
        return{
            username: "",
            amount: 0,
            difficulty: "",
            category: "",
            error: '',
            //Array of difficulties used to generate the select options
            difficulties: ['any', 'easy', 'medium','hard'],
            //Array of category's used to generate select options.
            categories: [],
          baseURL : "https://opentdb.com/api.php?",
        }
    },
    methods: {
        //VueX. Uses mapMutation to retrieve the set functions defined in store.js
        ...mapMutations(["setUserName","setDifficulty","setCategory","setNumberOfQuestions", "setUrl"]),
        handleGameStartClick(){

            //Updates values in Store.js to be the user input from homepageComponent
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