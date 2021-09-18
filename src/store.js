import { createStore } from 'vuex';

export default createStore({
    state : {
        username : '',
        category : '',
        difficulty : '',
        numberOfQuestions : 0,
        gameArray : [],
        highScore : 0,
        allQuestions : [],
        error : '',
        loadingQuestions : true,
        url : "",
        player : {},
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
            state.highScore = payload;
        },
        setAllQuestions : (state,payload) => {
            state.allQuestions = payload;
        },
        setUrl : (state, payload) => {
            state.url = payload;
        },
        setPlayer : (state,payload) => {
            state.player = payload;
        },
    },
    actions : {
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
            return state.highScore;
        },
        getGameArray : state => {
            return state.gameArray;
        },
        getUrl : state => {
            return state.url;
        },
        getAllQuestions : state => {
            return state.allQuestions;
        },
        getLoadingQuestions : state => {
            return state.loadingQuestions;
        },
        getPlayer : state => {
            return state.player;
        }
    }
});