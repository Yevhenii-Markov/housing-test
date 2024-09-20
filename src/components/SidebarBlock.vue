<template>
  <aside class="sidebar">
    <h2 class="sidebar__title">Поиск сотрудников</h2>
    <form @submit.prevent="searchMembers">
      <input-default placeholder="Введите id или имя" v-model.trim="inputVal" />
    </form>
    <h2 class="sidebar__title">Результаты</h2>
    <sidebar-result />
  </aside>
</template>

<script>
import { mapActions } from "vuex";
import SidebarResult from "@/components/SidebarResult.vue";
import InputDefault from "@/components/InputDefault.vue";

export default {
  components: { SidebarResult, InputDefault },
  data() {
    return {
      inputVal: "",
    };
  },
  methods: {
    ...mapActions(["fetchMembers", "updateSearchVal"]),
    searchMembers() {
      this.$router.push("/");
      this.fetchMembers();
    },
  },
  watch: {
    inputVal(val) {
      this.updateSearchVal(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 293px;
  max-width: 350px;
  padding: 27px 30px 30px 23px;
  border-right: 1px solid #dededd;

  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    color: var(--base-color);

    &:not(:first-child) {
      margin: 29px 0 18px;
    }
  }
}
</style>
