<template>
  <div class="details">
    <div class="details__photo">
      <div class="details__photo-wrap">
        <img src="@/assets/images/cap-big.png" alt="cap-big" />
      </div>
    </div>
    <div class="details__desc">
      <div class="details__name">{{ currentMemberData.name }}</div>
      <div class="details__contact" v-if="currentMemberData.email">
        <div class="details__subtitle">email:</div>
        <div class="details__data">{{ currentMemberData.email }}</div>
      </div>
      <div class="details__contact" v-if="currentMemberData.phone">
        <div class="details__subtitle">phone:</div>
        <div class="details__data">{{ currentMemberData.phone }}</div>
      </div>
      <div class="details__title">О себе:</div>
      <div class="details__info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </div>
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
.details {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px 30px;

  &__photo {
    width: 43%;
    flex-shrink: 0;
  }

  &__photo-wrap {
    position: relative;
    width: 100%;
    height: auto;
    border: 1px solid #e0e0e0;
    padding-bottom: 67%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  &__desc {
    margin-left: 60px;
  }

  &__name {
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
  }

  &__contact {
    display: flex;
    font-size: 14px;
    margin-top: 10px;
  }

  &__subtitle {
    font-weight: 600;
  }

  &__data {
    margin-left: 10px;
  }

  &__title {
    font-size: 16px;
    line-height: 22.4px;
    margin-top: 20px;
  }

  &__info {
    margin-top: 25px;
  }

  &__message {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    width: fit-content;
    margin: 250px auto;
  }
}
</style>
