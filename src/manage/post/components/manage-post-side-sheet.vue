<template>
  <div class="manage-post-side-sheet">
    <ManagePostEdit />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ManagePostEdit from '@/manage/post/edit/manage-post-edit.vue';

export default defineComponent({
  name: 'ManagePostSideSheet',

  /**
   * 属性
   */
  props: {},

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
    ManagePostEdit,
  },
});
</script>

<style scoped>
@import './styles/manage-post-side-sheet.css';
</style>
