<template>
    <div class="hello">
        <div>{{ msg }}</div>
    </div>
</template>

<script>

export default {
  name: 'buttonx',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.hello{
    padding: 12px;
    background-color: yellowgreen;
    border-radius: 4px;
}
</style>
