import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    members: null,
    searchVal: null,
    isLoading: false,
    error: null,
    currentMemberData: null,
  },
  getters: {
    members: (state) => state.members,
    searchVal: (state) => state.searchVal,
    currentMemberData: (state) => state.currentMemberData,
    isLoading: (state) => state.isLoading,
    error: (state) => state.error,
    url(state) {
      if (state.searchVal) {
        let url = "https://jsonplaceholder.typicode.com/users?";
        const queryArr = state.searchVal.match(/\w+|\d+/g) || [];
        const uniqueQueryArr = [...new Set(queryArr)];
        uniqueQueryArr?.forEach((request, i, arr) => {
          const key = isNaN(request) ? "username" : "id";
          url += `${key}=${request}` + (i < arr.length - 1 ? "&" : "");
        });
        return url;
      }
    },
  },
  mutations: {
    setMembers: (state, members) => (state.members = [members].flat()),
    setSearchVal: (state, e) => (state.searchVal = e.target.value),
    changeIsLoading: (state, val) => (state.isLoading = val),
    setError: (state, val) => (state.error = val),
    setCurrentMemberData(state, val) {
      state.currentMemberData = state.members?.find(
        (item) => item.id === Number(val)
      );
    },
    clearData(state) {
      state.members = null;
      state.currentMemberData = null;
      state.error = null;
    },
  },
  actions: {
    async fetchMembers({ commit, getters }) {
      commit("clearData");
      commit("changeIsLoading", true);
      await router.push("/");
      try {
        const response = await fetch(getters.url);
        const members = await response.json();
        commit("setMembers", members);
      } catch (error) {
        commit("setError", error);
      } finally {
        commit("changeIsLoading", false);
      }
    },
  },
});
