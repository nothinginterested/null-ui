<template>
  <button @click="onChange" :class="{checked:value}">
      <span>

      </span>
  </button>
</template>

<script lang='ts'>
export default {
  name: 'Switch',
  props: {
    value: Boolean
  },
  methods: {
    onChange() {
      this.$emit('update:value', !this.value);
      this.$emit('input', !this.value);
      console.log(this.value);

    }
  }
};
</script>

<style lang='scss' scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h*2;
  border: none;
  background: #cccccc;
  border-radius: $h/2;
  position: relative;

}

button:active {
  outline: none;
}

button:focus {
  outline: none;
}

span {
  height: $h2;
  width: $h2;
  border-radius: $h2/2;
  background: white;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: all 250ms;
}

button.checked {
  background: #2D8CF0;
}

button:active > span {
  width: $h2+5px;
}

button.checked:active {
  > span {
    width: $h2+5px;
    margin-left: -5px;

  }

}

button.checked {
  > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>
