<template>
  <div
    class="TextInput"
    :class="{ 'has-error': !!errorMessage, success: meta.valid }"
  >
    <label :for="name">{{ label }}</label>
    <input
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />
    <p class="help-message" v-if="meta.valid == false">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import { toRef } from "vue";
import { useField } from "vee-validate";

export default {
  name: "AppTextInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    // use `toRef` to create reactive references to `name` prop which is passed to `useField`
    // this is important because vee-validte needs to know if the field name changes
    // https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
    const name = toRef(props, "name");

    // we don't provide any rules here because we are using form-level validation
    // https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(name, undefined, {
      initialValue: props.value,
    });

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>