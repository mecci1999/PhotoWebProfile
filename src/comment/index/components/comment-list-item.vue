<template>
  <div class="comment-list-item">
    <div class="thumbnail">
      <UserAvatar :user="item.user" link="user"></UserAvatar>
    </div>
    <div class="content">
      <CommentListItemMeta :item="item"></CommentListItemMeta>
      <CommentListItemContent
        :item="comment"
        @click="onClickCommentListItemContent"
        v-if="!isEditing"
      ></CommentListItemContent
      ><CommentEdit
        v-if="isEditing"
        :comment="item"
        @updated="onUpdatedComment"
      />
      <CommentListItemActions
        :item="item"
        @toggle-replies="onToggleReplies"
        :showOperation="showOperation"
        @editing="onEditingComment"
        :isEditing="isEditing"
        @replying="onReplyingComment"
        :isReplying="isReplying"
      ></CommentListItemActions>
      <ReplyCreate
        v-if="isReplying"
        :comment="item"
        :showReplies="showReplies"
      />
      <ReplyIndex :comment="item" v-if="showReplies"></ReplyIndex>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import UserAvatar from '@/user/components/user-avatar.vue';
import CommentListItemMeta from './comment-lite-item-meta.vue';
import CommentListItemContent from './comment-list-item-content.vue';
import CommentListItemActions from './comment-list-item-actions.vue';
import ReplyIndex from '@/reply/index/reply-index.vue';
import CommentEdit from '@/comment/edit/comment-edit.vue';
import ReplyCreate from '@/reply/create/reply-create.vue';

export default defineComponent({
  name: 'CommentListItem',

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
      showReplies: false,
      showOperation: false,
      isEditing: false,
      isReplying: false,
      comment: this.item,
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
    onToggleReplies(data) {
      this.showReplies = data;
    },

    onClickCommentListItemContent() {
      this.showOperation = !this.showOperation;
    },

    onEditingComment() {
      this.isEditing = !this.isEditing;
    },

    onUpdatedComment(data) {
      this.comment.content = data;
      this.isEditing = false;
    },

    onReplyingComment() {
      this.isReplying = !this.isReplying;
    },
  },

  /**
   * 使用组件
   */
  components: {
    ReplyCreate,
    CommentEdit,
    UserAvatar,
    CommentListItemMeta,
    CommentListItemContent,
    CommentListItemActions,
    ReplyIndex,
  },
});
</script>

<style scoped>
@import './styles/comment-list-item.css';
</style>
