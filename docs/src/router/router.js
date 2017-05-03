/**
 * Created by Alain on 2017/5/2.
 */
import * as home from '../App.vue'
import Vue from 'Vue'
import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: home },
]

const router = new VueRouter({
    routes
})