<template>
  <div class="app-search-result-list-item">
    <div class="thumbnail" v-if="showThumbnail">
      <UserAvatar :user="item.extra" link="user"></UserAvatar>
    </div>
    <div class="title">
      <router-link class="link" :to="item.link">{{ item.title }}</router-link>
    </div>
    <div class="meta">{{ item.meta }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import UserAvatar from '@/user/components/user-avatar.vue';

export default defineComponent({
  name: 'AppSearchResultListItem',

  /**
   * 属性
   */
  props: {
    item: {
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
  computed: {
    ...mapGetters({
      searchOption: 'search/searchOption',
    }),

    showThumbnail() {
      return this.searchOption.value === 'users';
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
  methods: {},

  /**
   * 使用组件
   */
  components: {
    UserAvatar,
  },
});
</script>

<style scoped>
@import './styles/app-search-result-list-item.css';
</style>
