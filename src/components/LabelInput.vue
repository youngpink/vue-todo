<template>
  <div>
    {{ title }}
    <input v-if="type === 'input'"
           v-bind="$attrs"
           :value="value"
           @change="changeModel($event)"
    />
    <textarea v-if="type === 'textarea'"
              v-bind="$attrs"
              :value="value"
              @change="changeModel($event)"
    ></textarea>
  </div>
</template>

<script>
  export default {
    name: 'LabelInput',
    props: {
      title: String,
      value: String,
      type: String,
    },
    methods: {
      changeModel(event) {
        this.$emit('input', event.target.value)
      },
    }
  }

</script>

<style scoped>

</style>
