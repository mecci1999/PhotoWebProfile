<template>
  <div class="field">
    <button
      :class="['button', size, type]"
      @click="$emit('click')"
      :disabled="disabled"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonField',

  /**
   * 属性
   */
  props: {
    text: {
      type: String,
    },

    size: {
      type: String,
    },
    type: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  /**
   * 事件
   */
  emits: ['click'],

  /**
   * 数据
   */
  data() {
    return {};
  },

  /**
   * 计算属性
   */
  computed: {},

  /**
   * 已创建
   */
  created() {
    //
  },

  /**
   * 组件方法
   */
  methods: {},

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped></style>
