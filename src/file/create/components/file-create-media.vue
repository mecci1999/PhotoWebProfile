<template>
  <div :class="fileCreateMediaClasses">
    <img
      class="image"
      :src="previewImage"
      @load="onLoadImage"
      v-if="isShowImage"
    />
    <video class="video" v-if="isShowVideo" controls>
      <source :src="previewVideo" @load="onLoadVideo" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'FileCreateMedia',

  /**
   * 属性
   */
  props: {
    isShowImage: {
      type: Boolean,
      default: false,
    },
    isShowVideo: {
      type: Boolean,
      default: false,
    },
  },

  /**
   * 数据
   */
  data() {
    return {
      loaded: false,
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      previewImage: 'file/create/previewImage',
      previewVideo: 'file/create/previewVideo',
    }),

    fileCreateMediaClasses() {
      return ['file-create-media', { loading: this.loaded }];
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
    onLoadImage() {
      this.loaded = true;
    },

    onLoadVideo() {
      this.loaded = true;
    },
  },

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped>
@import './styles/file-create-media.css';
</style>
