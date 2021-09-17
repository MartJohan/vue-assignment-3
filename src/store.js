import { createStore } from 'vuex';

export default createStore({
    state : {
        username : '',
        category : '',
        difficulty : '',
        numberOfQuestions : 0,
        gameArray : [],
        score : 0,
        allQuestions : [],
        error : '',
        loadingQuestions : true,
    },
    mutations : {
        setUserName : (state, payload) => {
            state.username = payload;
        },
        setCategory : (state, payload) => {
            state.category = payload;
        },
        setDifficulty : (state, payload) => {
            state.difficulty = payload;
        },
        setNumberOfQuestions : (state,payload) => {
            state.numberOfQuestions = payload;
        },
        setGameArray : (state, payload) => {
            state.gameArray = payload;
        },
        setQuestionError : (state, payload) => {
            state.error = payload;
        },
        setLoadingQuestions : (state, payload) => {
            state.loadingQuestions = payload;
        },
        setScore : (state, payload) => {
            state.score = payload;
        },
        setAllQuestions : (state,payload) => {
            state.allQuestions = payload;
        },
    },
    actions : {
        /*async fetchQuestions({commit, state}) {
            if(state.allQuestions.length  !== 0) {
                return new Promise(resolve => resolve());
            }
            //TODO: make question use this fetch insted of the questionAPI.js
            let url = `https://opentdb.com./api.php?amount=${this.number}&category=${this.category}&difficulty=${this.difficulty}`
            // 'https://opentdb.com/api.php?amount=20&category=23&difficulty=easy'
            console.log(url);
            const [error, questions] = await questionAPI.fetchQuestions(url);
            commit('setLoadingQuestions', false);
            commit('setQuestionError', error);
            commit('setAllQuestions', questions);
        }
         */
    },
    getters : {
        getCategory : state => {
            return state.category;
        },
        getUserName : state => {
            return state.username;
        },
        getDifficult : state => {
            return state.difficulty;
        },
        getScore : state => {
            return state.score;
        },
        getGameArray : state => {
            return state.gameArray;
        },
        getAllQuestions : state => {
            return state.allQuestions;
        },
        getLoadingQuestions : state => {
            return state.loadingQuestions;
        }
    }
});