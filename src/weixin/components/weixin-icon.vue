<template>
  <div class="weixin-icon">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
    >
      <g :fill="color">
        <path id="路径_14" data-name="路径 14" d="M0,0H24V24H0Z" fill="none" />
        <path
          id="路径_15"
          data-name="路径 15"
          d="M78.733,151.9a7.261,7.261,0,0,1,.8.049c-.718-3.343-4.292-5.827-8.371-5.827-4.56,0-8.3,3.109-8.3,7.056a6.812,6.812,0,0,0,3.32,5.6l-.83,2.494,2.9-1.454a14.181,14.181,0,0,0,2.906.416c.26,0,.518-.013.775-.033a6.173,6.173,0,0,1-.256-1.738,6.794,6.794,0,0,1,7.052-6.564Zm-4.46-2.246a1.037,1.037,0,0,1,0,2.074,1.055,1.055,0,1,1,0-2.074Zm-5.81,2.069a1.055,1.055,0,1,1,0-2.074,1.037,1.037,0,1,1,0,2.074ZM86.3,158.363c0-3.317-3.32-6.021-7.048-6.021-3.948,0-7.056,2.7-7.056,6.021s3.109,6.021,7.056,6.021a10.439,10.439,0,0,0,2.494-.416l2.276,1.247-.624-2.073a6.293,6.293,0,0,0,2.9-4.779Zm-9.333-1.039a.83.83,0,1,1,0-1.659.851.851,0,1,1,0,1.659Zm4.564,0a.83.83,0,1,1,0-1.659.851.851,0,1,1,0,1.659Z"
          transform="translate(-62.603 -143.343)"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WeixinIcon',

  /**
   * 属性
   */
  props: {
    color: {
      type: String,
      default: '#1cbd20',
    },

    size: {
      type: Number,
      default: 24,
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
  components: {},
});
</script>

<style scoped>
@import './styles/weixin-icon.css';
</style>
