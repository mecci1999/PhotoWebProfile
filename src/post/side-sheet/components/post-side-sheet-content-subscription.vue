<template>
  <div class="post-side-sheet-content-subscription">
    <SubscriptionSelect />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import SubscriptionSelect from '@/subscription/components/subscription-select.vue';

export default defineComponent({
  name: 'PostSideSheetContentSubscription',

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
  computed: {
    ...mapGetters({}),
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
    SubscriptionSelect,
  },
});
</script>

<style scoped>
@import './styles/post-side-sheet-content-subscription.css';
</style>
