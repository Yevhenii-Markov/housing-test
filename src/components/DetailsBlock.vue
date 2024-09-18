<template>
  <div class="details-wrap">
    <router-view v-if="currentMemberData" />
    <div class="details-wrap__message" v-else>
      Выберите сотрудника, чтобы посмотреть его профиль
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentMemberData"]),
  },
};
</script>

<style lang="scss" scoped>
.details-wrap {
  display: flex;
  width: 100%;
  height: 100%;

  &__message {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    width: fit-content;
    margin: 250px auto;
  }
}
</style>
