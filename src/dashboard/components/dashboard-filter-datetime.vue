<template>
  <div class="dashboard-filter-datetime">
    <div class="label">
      <!-- <button class="button basic" @click="onClickLabelButton"></button> -->
    </div>
    <div class="fields">
      <CheckboxField
        class="compact"
        :useIcon="false"
        v-for="{ text, value } in dateTimeRangeFields"
        :key="value"
        :value="value"
        :text="text"
        name="datetime"
        type="radio"
        v-model="accessCountDateTimeRange"
      ></CheckboxField>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import CheckboxField from '@/app/components/checkbox-field.vue';

export default defineComponent({
  name: 'DashboardFilterDatetime',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      dateTimeRangeFields: [
        {
          value: '1-day',
          text: '一天',
        },
        {
          value: '7-day',
          text: '七天',
        },
        {
          value: '1-month',
          text: '一个月',
        },
        {
          value: '3-month',
          text: '三个月',
        },
        {
          value: '6-month',
          text: '六个月',
        },
        {
          value: '1-year',
          text: '一年',
        },
      ],
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      dateTimeRangeAdmin: 'dashboard/accessCount/dateTimeRangeAdmin',
      dateTimeRange: 'dashboard/user/dateTimeRange',
      isAdmin: 'user/isAdmin',
      useAdmin: 'user/useAdmin',
    }),

    accessCountDateTimeRange: {
      get() {
        if (this.useAdmin) {
          return this.dateTimeRangeAdmin;
        } else {
          return this.dateTimeRange;
        }
      },

      set(value) {
        if (this.useAdmin) {
          this.setDateTimeRangeAdmin(value);
        } else {
          this.setDateTimeRange(value);
        }
      },
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
      setDateTimeRangeAdmin: 'dashboard/accessCount/setDateTimeRangeAdmin',
      setDateTimeRange: 'dashboard/user/setDateTimeRange',
    }),

    ...mapActions({}),

    // onClickLabelButton() {
    //   this.setDateTimeRange('1-day');
    // },
  },

  /**
   * 使用组件
   */
  components: {
    CheckboxField,
  },
});
</script>

<style scoped>
@import './styles/dashboard-filter-datetime.css';
</style>
