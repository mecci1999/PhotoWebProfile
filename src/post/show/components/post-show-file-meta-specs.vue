<template>
  <div class="post-show-file-meta-specs">
    <div class="icon">
      <AppIcon name="camera"></AppIcon>
    </div>
    <div class="content">
      <div class="specs" v-for="(item, index) in specs" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppIcon from '@/app/components/app-icon.vue';

export default defineComponent({
  name: 'PostShowFileMetaSpecs',

  /**
   * 属性
   */
  props: {
    specs: {
      type: Array,
    },
  },

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
  components: {
    AppIcon,
  },
});
</script>

<style scoped>
@import './styles/post-show-file-meta-specs.css';
</style>
