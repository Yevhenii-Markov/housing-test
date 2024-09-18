<template>
  <aside class="sidebar">
    <h2 class="sidebar__title">Поиск сотрудников</h2>
    <input
      @input="setSearchVal"
      @keydown.enter="fetchMembers"
      class="sidebar__input _default-text"
      type="text"
      :placeholder="placeholder"
    />
    <h2 class="sidebar__title _second">Результаты</h2>
    <sidebar-result />
  </aside>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import SidebarResult from "@/components/SidebarResult.vue";

export default {
  components: { SidebarResult },
  data() {
    return {
      placeholder: "Введите id или имя",
    };
  },
  methods: {
    ...mapMutations(["setSearchVal"]),
    ...mapActions(["fetchMembers"]),
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

    &._second {
      margin: 29px 0 18px;
    }
  }

  &__input {
    padding: 16px 14px;
    border-radius: 8px;
    background: #fff;
    border: 1.5px solid #e9ecef;
    margin-top: 14px;
  }
}
</style>
