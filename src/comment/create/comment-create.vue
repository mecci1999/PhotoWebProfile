<template>
  <div class="comment-create">
    <div class="thumbnail">
      <UserAvatar :user="currentUser" link="login"></UserAvatar>
    </div>
    <div class="content">
      <TextareaField
        placeholder="发表评论"
        v-model="content"
        @keyup.stop
        @keydown.stop="onKeyDownCommentTextarea"
      />
      <div class="actions">
        <button
          class="button pill"
          v-if="currentUser"
          @click="onClickCancelButton"
        >
          取消
        </button>
        <button
          class="button pill"
          v-if="currentUser"
          @click="onClickSubmitButton"
        >
          发布
        </button>
        <button
          class="button pill"
          v-if="!currentUser"
          @click="onClickRegisterButton"
        >
          注册
        </button>
        <button
          class="button pill"
          v-if="!currentUser"
          @click="onClickLoginButton"
        >
          登录
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TextareaField from '@/app/components/textarea-field.vue';
import UserAvatar from '@/user/components/user-avatar.vue';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
  name: 'CommentCreate',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      content: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
      sideSheetProps: 'layout/sideSheetProps',
    }),
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
    ...mapActions({
      pushMessage: 'notification/pushMessage',
      createComment: 'comment/create/createComment',
    }),

    async submitComment() {
      if (!this.currentUser) {
        this.pushMessage({ content: '请先登录' });
        return;
      }

      // 用户封禁状态时，不能发布作品
      if (this.currentUser && this.currentUser.status === 'banned') {
        return this.pushMessage({
          content: '当前账号处于封禁状态，无法发布评论。',
        });
      }

      try {
        await this.createComment({
          postId: this.sideSheetProps.filter.post,
          content: this.content,
        });

        this.content = '';
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },

    onClickCancelButton() {
      this.content = '';
    },

    onClickSubmitButton() {
      if (!this.content.trim()) {
        this.pushMessage({ content: '评论内容不能为空' });
        return;
      }
      this.submitComment();
    },

    onClickRegisterButton() {
      this.$router.push({ name: 'login' });
    },

    onClickLoginButton() {
      this.$router.push({ name: 'login' });
    },

    onKeyDownCommentTextarea(event) {
      if (
        (event.ctrlKey && event.key === 'Enter') ||
        (event.metaKey && event.key === 'Enter')
      ) {
        this.submitComment();
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    TextareaField,
    UserAvatar,
  },
});
</script>

<style scoped>
@import './styles/comment-create.css';
</style>
