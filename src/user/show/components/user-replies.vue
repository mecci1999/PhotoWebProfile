<template>
  <div class="user-replies">
    <CommentList :filter="filter" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CommentList from '@/comment/index/components/comment-list.vue';

export default defineComponent({
  name: 'UserReplies',

  title() {
    return '用户回复';
  },

  /**
   * 属性
   */
  props: {
    filter: {
      type: Object,
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
    CommentList,
  },
});
</script>
<style scoped>
@import './styles/user-replies.css';
</style>
