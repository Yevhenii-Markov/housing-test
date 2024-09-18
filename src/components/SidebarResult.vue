<template>
  <div class="sidebar-result">
    <div class="sidebar-result__wrap" v-if="!isLoading && members?.length > 0">
      <RouterLink
        class="sidebar-result__link"
        v-for="member in members"
        :key="member.id"
        :to="'/id=' + member.id"
      >
        <sidebar-card :member="member" />
      </RouterLink>
    </div>
    <div class="_default-text" v-else-if="!isLoading && searchVal && !error">
      ничего не найдено
    </div>
    <div class="_default-text" v-else-if="!isLoading && error">
      ошибка: {{ error }}
    </div>
    <div class="_default-text" v-else-if="!isLoading">начните поиск</div>
    <div class="loader" v-else></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import SidebarCard from "@/components/SidebarCard.vue";

export default {
  components: { SidebarCard },
  methods: {
    ...mapMutations(["setCurrentMemberData"]),
  },
  computed: {
    ...mapGetters(["members", "searchVal", "isLoading", "error"]),
  },
  watch: {
    "$route.params.userId"(userId) {
      this.setCurrentMemberData(userId);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-result {
  overflow: hidden;
  &__wrap {
    max-height: 100%;
    overflow: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__link {
    display: block;
    color: var(--base-color);
    &:not(:first-child) {
      margin-top: 18px;
    }
  }
}

.loader {
  width: 120px;
  height: 20px;
  margin: 10px auto 0;
  background: linear-gradient(90deg, #0001 33%, #0005 50%, #0001 66%) #f2f2f2;
  background-size: 300% 100%;
  animation: l1 1s infinite linear;
}
@keyframes l1 {
  0% {
    background-position: right;
  }
}
</style>
