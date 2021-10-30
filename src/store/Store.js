import Vue from 'vue';
import Vuex from 'vuex';
import {
    ADDPEOPLE,
    INITDATA,
    SETDATA,
    SETFILTERTEXT,
    SETSORTCRITERIA,
    SETPLANETDATA,
    SETPLANETINFO,
} from "./mutations/types.js";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        data: [], // Defines the filtered/sorted data which is used for rendering
        allData: [], // Caches all the data which is fetched only once!
        filterText: "",
        sortCriteria: "",
        planetData: [],
        planetInfo: "",
    },
    mutations: {
        [ADDPEOPLE](state, newPeople) {
            state.allData = newPeople;
        },

        [INITDATA](state) {
            state.data = state.allData;
        },

        [SETDATA](state, newData) {
            state.data = newData;
        },

        [SETFILTERTEXT](state, newFilterText) {
            state.filterText = newFilterText;
        },

        [SETSORTCRITERIA](state, newSortCriteria) {
            state.sortCriteria = newSortCriteria;
        },

        [SETPLANETDATA](state, newPlanetData) {
            state.planetData.push(newPlanetData);
        },

        [SETPLANETINFO](state, newPlanetInfo) {
            state.planetInfo = newPlanetInfo;
        },
    },
    actions: {
        [ADDPEOPLE](context, payload) {
            context.commit(ADDPEOPLE, payload);
        },

        [INITDATA](context) {
            context.commit(INITDATA);
        },

        [SETDATA](context, payload) {
            context.commit(SETDATA, payload);
        },

        [SETFILTERTEXT](context, payload) {
            context.commit(SETFILTERTEXT, payload);
        },

        [SETSORTCRITERIA](context, payload) {
            context.commit(SETSORTCRITERIA, payload);
        },

        [SETPLANETDATA](context, payload) {
            context.commit(SETPLANETDATA, payload);
        },

        [SETPLANETINFO](context, payload) {
            context.commit(SETPLANETINFO, payload);
        },
    }
});

export {
    store,
};