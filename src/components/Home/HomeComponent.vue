<template>
    <div id="homePageComponent">
        <div class="d-flex justify-content-center" >
            <div class="shadow-sm p-2">
                <h1 class="m-4">WELCOME TO TRIVIA QUIZ</h1>

                <div class="input-group mb-3">
                    <span class="input-group-text">Username</span>
                    <input class="form-control" type="text" id="username" v-model="username" required><br/><br/>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text"> Select difficulty </label>
                    </div>
                    <select class="custom-select form-control" id="difficulty" v-model="difficulty">
                        <option v-for="difficulty in difficulties" :key="difficulty">{{ difficulty }}</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" > Chose category </label>
                    </div>
                    <select class="custom-select form-control" id="category" v-model="category">
                        <option v-for="category in categories" :key="category" :value="category.value" >{{ category.name }}</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" > Chose amount of questions</span>
                    <input class="form-control" v-model="amount"  type="number" min="1" max="99"/>
                </div>
                <button type="button" class="btn btn-primary m-4" @click="handleGameStartClick()">START</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

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
        ...mapMutations(["setUserName","setDifficulty","setCategory","setNumberOfQuestions"]),
        handleGameStartClick(){
            this.setUserName(this.username)
            this.setDifficulty(this.difficulty)
            this.setCategory(this.category)
            this.setNumberOfQuestions(this.amount)

            console.log(this.username, this.amount, this.difficulty, this.category)
            this.$router.push('/Questions')
        }
    }
}

</script>