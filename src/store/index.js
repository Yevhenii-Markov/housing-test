import { createStore } from "vuex";

export default createStore({
  state: {
    members: null,
    searchVal: null,
    isLoading: false,
    isSearched: false,
    error: null,
    currentMemberData: null,
  },
  getters: {
    members: (state) => state.members,
    searchVal: (state) => state.searchVal,
    currentMemberData: (state) => state.currentMemberData,
    isLoading: (state) => state.isLoading,
    isSearched: (state) => state.isSearched,
    error: (state) => state.error,
    url(state) {
      const queryArr = state.searchVal?.match(/\w+|\d+/g) || [];
      if (queryArr.length > 0) {
        let url = "https://jsonplaceholder.typicode.com/users?";
        const uniqueQueryArr = [...new Set(queryArr)];
        uniqueQueryArr?.forEach((request, i, arr) => {
          const key = isNaN(request) ? "username" : "id";
          url += `${key}=${request}` + (i < arr.length - 1 ? "&" : "");
        });
        return url;
      }
      return null;
    },
  },
  mutations: {
    setMembers: (state, members) => (state.members = [members].flat()),
    setSearchVal: (state, e) => (state.searchVal = e.target.value.trim()),
    changeIsLoading: (state, val) => (state.isLoading = val),
    changeIsSearched: (state, val) => (state.isSearched = val),
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
      if (getters.url) {
        commit("changeIsLoading", true);
        try {
          const response = await fetch(getters.url);
          const members = await response.json();
          commit("setMembers", members);
        } catch (error) {
          commit("setError", error);
        } finally {
          commit("changeIsLoading", false);
          commit("changeIsSearched", true);
        }
      }
    },
    updateSearchVal({ commit }, e) {
      commit("setSearchVal", e);
      commit("changeIsSearched", false);
      commit("changeIsSearched", false);
      commit("clearData");
    },
  },
});
