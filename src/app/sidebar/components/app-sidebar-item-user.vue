<template>
  <div class="app-sidebar-item user">
    <UserAvatar
      :user="currentUser"
      :link="userAvatarLink"
      @click="onClickUserAvatar"
    ></UserAvatar>
    <transition name="user-menu">
      <UserMenu
        v-if="showUserMenu"
        @close="this.showUserMenu = false"
      ></UserMenu
    ></transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import UserAvatar from '@/user/components/user-avatar.vue';
import UserMenu from '@/user/components/user-menu.vue';

export default defineComponent({
  name: 'AppSidebarItemUser',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      showUserMenu: false,
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
    }),

    userAvatarLink() {
      return this.currentUser ? null : 'login';
    },
  },

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
    onClickUserAvatar() {
      if (this.currentUser) {
        this.showUserMenu = !this.showUserMenu;
      } else {
        // 跳转到登录页面
        this.$router.replace({ name: 'login' });
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    UserAvatar,
    UserMenu,
  },
});
</script>

<style scoped></style>
