import { questionAPI  } from "./API/questionAPI";
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
        url : "",
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
        setUrl : (state, payload) => {
            state.url = payload
        }

    },
    actions : {
        async fetchQuestions({commit, state}) {
            if(state.allQuestions.length  !== 0) {
                return new Promise(resolve => resolve());
            }
            const [error, questions] = await questionAPI.fetchQuestions(this.url);
            commit('setLoadingQuestions', false);
            commit('setQuestionError', error);
            commit('setGameArray', questions);
        }
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
        getUrl : state => {
            return state.url;
        }
    }
});