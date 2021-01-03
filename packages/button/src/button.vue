<template>
  <div class="hello">
    <div>{{ msg }}</div>
    <div class="bar">
      123
    </div>
  </div>
</template>

<script>

export default {
  name: 'Buttonx',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      xs: 'hello',
    };
  },
};
</script>

<style scoped lang="scss">
.hello {
  background-color: yellowgreen;
  border-radius: 4px;
  padding: 12px;
}

.bar {
  background-color: red;
}
</style>
