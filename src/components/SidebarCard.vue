<template>
  <div
    class="sidebar-card"
    :class="{ active: currentMemberData?.id === member.id }"
  >
    <div class="sidebar-card__img">
      <img src="@/assets/images/cap.png" alt="cap" />
    </div>
    <div class="sidebar-card__desc">
      <div class="sidebar-card__name">{{ member.username }}</div>
      <div class="sidebar-card__email">{{ member.email }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    member: [Object],
  },
  computed: {
    ...mapGetters(["currentMemberData"]),
  },
};
</script>

<style lang="scss" scoped>
.sidebar-card {
  display: flex;
  min-height: 70px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  cursor: pointer;

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    min-height: 100%;
    border-right: 1px solid #e0e0e0;
    background: #fff;
    flex-shrink: 0;
  }

  &__desc {
    padding: 15px 15px 18px;
  }

  &__name {
    font-weight: 600;
    color: var(--base-color);
  }

  &__email {
    margin-top: 5px;
    word-break: break-all;
    color: #76787d;
  }

  &.active {
    background: rgba(0, 0, 0, 0.1);
    cursor: default;
  }
}
</style>
