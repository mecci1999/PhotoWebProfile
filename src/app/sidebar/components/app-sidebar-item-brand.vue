<template>
  <div class="app-sidebar-item brand" @click="onClickLogo">
    <router-link to="/" class="link">
      <AppLogo></AppLogo>
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import AppLogo from '@/app/components/app-logo.vue';

export default defineComponent({
  name: 'AppSidebarItemBrand',

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
  methods: {
    ...mapActions({
      closeSideSheet: 'layout/closeSideSheet',
    }),

    onClickLogo() {
      this.closeSideSheet();
    },
  },

  /**
   * 使用组件
   */
  components: {
    AppLogo,
  },
});
</script>

<style scoped></style>
