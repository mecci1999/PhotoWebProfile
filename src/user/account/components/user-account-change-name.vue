<template>
  <div class="user-account-change-name">
    <div class="form">
      <h2 class="header">修改名字</h2>
      <TextField v-model="newName" placeholder="请输入新的用户名"></TextField>
      <TextField
        v-if="newName"
        v-model="password"
        placeholder="验证用户登录密码"
        type="password"
      ></TextField>
      <ButtonField
        text="提交"
        size="large"
        @click="onClickSubmitButton"
      ></ButtonField>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import TextField from '@/app/components/text-field.vue';
import ButtonField from '@/app/components/button-field.vue';

export default defineComponent({
  name: 'UserAccountChangeName',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      newName: '',
      password: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
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
      updateUserAccount: 'user/account/updateUserAccount',
    }),

    async onClickSubmitButton() {
      if (!this.newName) {
        return this.pushMessage({ content: '请输入新的用户名' });
      }

      try {
        await this.updateUserAccount({
          userId: this.currentUser.id,
          body: {
            update: {
              name: this.newName,
            },
            validate: {
              password: this.password,
            },
          },
        });

        this.pushMessage({ content: '成功修改了用户名！' });
        this.newName = '';
        this.password = '';
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    TextField,
    ButtonField,
  },
});
</script>

<style scoped>
.user-account-change-name {
  padding-bottom: 32px;
}
</style>
