<template>
  <input
    class="input-default _default-text"
    type="text"
    :value="modelValue"
    @input="updateValue"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    modelValue: [String],
    placeholder: [String],
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-default {
  padding: 16px 14px;
  border-radius: 8px;
  background: #fff;
  border: 1.5px solid #e9ecef;
  margin-top: 14px;
}
</style>
