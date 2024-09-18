<template>
  <div class="wrapper">
    <header class="header">
      <h1 class="header__title">Жилфонд</h1>
      <div class="header__desk">Пользователь</div>
    </header>
    <main class="main">
      <sidebar-block />
      <details-block />
    </main>
  </div>
</template>

<script>
import SidebarBlock from "@/components/SidebarBlock.vue";
import DetailsBlock from "@/components/DetailsBlock.vue";

export default {
  components: {
    SidebarBlock,
    DetailsBlock,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/nullstyle.scss";

#app {
  width: 100%;
  height: 100%;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  background: #fff;
  user-select: none;
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px 50px 44px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &__title {
    color: #e31f24;
    font-size: 32px;
    font-weight: 700;
    line-height: 39.01px;
  }

  &__desk {
    font-size: 16px;
    line-height: 19.5px;
  }
}

.main {
  display: flex;
  overflow: hidden;
  flex: 1 1 auto;
  border-radius: 10px;
  width: 100%;
  background: var(--main-bg);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  margin-top: 26px;
  background: #fdfdfd;
}

._default-text {
  margin-top: 14px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  color: #76787d;
}
</style>
