<template>
  <div class="manage-post-list-item-media">
    <img class="image" :src="image" v-if="image" />
    <PostAuditAction
      class="compact"
      :post="item"
      @change="onChangeAuditAction"
      @click.stop
    ></PostAuditAction>
    <ManagePostStatusAction :post="item" @click.stop />
    <ManagePostAuditStatus
      v-if="canUseAdmin"
      :post="item"
      @change="onChangeAuditAction"
      @click.stop
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapMutations, mapGetters } from 'vuex';
import { getImageBase64 } from '@/file/file.service';
import ManagePostStatusAction from '@/manage/post/components/manage-post-status-action.vue';
import PostAuditAction from '@/post/components/post-audit-action.vue';
import ManagePostAuditStatus from '@/manage/post/components/manage-post-audit-status.vue';

export default defineComponent({
  name: 'ManagePostListItemMedia',

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
    return {
      image: null,
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      canUseAdmin: 'user/canUseAdmin',
    }),
  },

  /**
   * 已创建
   */
  async created() {
    this.image = await getImageBase64(this.item.file.size.medium);
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapMutations({
      setPostItem: 'post/index/setPostItem',
    }),

    onChangeAuditAction(audit) {
      this.setPostItem({ id: this.item.id, audit });
    },
  },

  /**
   * 使用组件
   */
  components: {
    ManagePostAuditStatus,
    ManagePostStatusAction,
    PostAuditAction,
  },
});
</script>

<style scoped>
@import './styles/manage-post-list-item-media.css';
</style>
