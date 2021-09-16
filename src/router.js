import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/Home/HomeComponent';
import QuestionComponent from './components/Questions/QuestionComponent';
import ScoreBoardComponent from './components/ScoreBoard/ScoreBoardComponent'

const routes = [
    {
        path : '/Home',
        name : 'Home',
        alias : '/',
        component : HomeComponent
    },
    {
        path : '/Questions',
        name : 'Questions',
        component: QuestionComponent
    },
    {
        path : '/ScoreBoard',
        name : 'ScoreBoard',
        component: ScoreBoardComponent
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router;