<template>
  <div class="post-list-layout-switcher">
    <PostListLayoutIcon
      v-for="(icon, index) in icons"
      :key="index"
      :name="icon"
      @click="onClickPostListLayoutIcon"
    ></PostListLayoutIcon>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';
import PostListLayoutIcon from './post-list-layout-icon.vue';

export default defineComponent({
  name: 'PostListLayoutSwitcher',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      icons: ['stackable', 'flow', 'stackable-minimal', 'flow-minimal'],
    };
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
  methods: {
    ...mapMutations({
      setLayout: 'post/index/setLayout',
    }),

    onClickPostListLayoutIcon(icon) {
      this.setLayout(icon);
    },
  },

  /**
   * 使用组件
   */
  components: {
    PostListLayoutIcon,
  },
});
</script>

<style scoped></style>
