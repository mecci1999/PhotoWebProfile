<template>
  <div class="reply-list-item-actions">
    <div class="action" v-if="showOwnReplyOperation">
      <button class="button basic" @click="onClickDeleteButton">
        {{ deleteButtonText }}
      </button>
    </div>
    <div class="action" v-if="showOwnReplyOperation">
      <button class="button basic" @click="onClickUpdateButton">
        {{ updateButtonText }}
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default defineComponent({
  name: 'ReplyListItemActions',

  /**
   * 属性
   */
  props: {
    item: {
      type: Object,
    },

    showOperation: {
      type: Boolean,
    },

    comment: {
      type: Object,
    },

    isEditing: {
      type: Boolean,
    },
  },

  emits: ['editing'],

  /**
   * 数据
   */
  data() {
    return {
      confirmDelete: false,
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
    }),

    showOwnReplyOperation() {
      return (
        this.currentUser &&
        this.currentUser.id === this.item.user.id &&
        this.showOperation
      );
    },

    deleteButtonText() {
      return this.confirmDelete ? '确认删除' : '删除';
    },

    updateButtonText() {
      return this.isEditing ? '取消编辑' : '编辑';
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
    ...mapMutations({
      removeReplyItem: 'reply/index/removeReplyItem',
      decreaseTotalReplies: 'comment/index/decreaseTotalReplies',
    }),

    ...mapActions({
      deleteComment: 'comment/destroy/deleteComment',
      pushMessage: 'notification/pushMessage',
    }),

    async onClickDeleteButton() {
      if (this.confirmDelete) {
        try {
          await this.deleteComment({ commentId: this.item.id });

          this.removeReplyItem({
            commentId: this.comment.id,
            replyId: this.item.id,
          });

          this.decreaseTotalReplies(this.comment.id);
        } catch (error) {
          this.pushMessage({ content: error.data.message });
        }
      }

      this.confirmDelete = !this.confirmDelete;
    },

    onClickUpdateButton() {
      this.$emit('editing');
    },
  },

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped>
@import './styles/reply-list-item-actions.css';
</style>
