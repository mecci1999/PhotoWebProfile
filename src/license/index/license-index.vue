<template>
  <div class="license-index">
    <LicenseList></LicenseList>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import LicenseList from './components/license-list.vue';

export default defineComponent({
  name: 'LicenseIndex',

  /**
   * 标题
   */
  title() {
    return '许可';
  },

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
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
  },

  /**
   * 使用组件
   */
  components: {
    LicenseList,
  },
});
</script>

<style scoped>
@import './styles/license-index.css';
</style>
