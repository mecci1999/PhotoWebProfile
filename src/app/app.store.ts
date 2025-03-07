import { createStore } from 'vuex';
import { auditStoreModule, AuditStoreState } from '../audit/audit.store';
import { authStoreModule, AuthStoreState } from '../auth/auth.store';
import {
  commentStoreModule,
  CommentStoreState,
} from '../comment/comment.store';
import {
  dashboardStoreModule,
  DashboardStoreState,
} from '../dashboard/dashboard.store';
import {
  downloadStoreModule,
  DownloadStoreState,
} from '../download/download.store';
import { fileStoreModule, FileStoreState } from '../file/file.store';
import {
  licenseStoreModule,
  LicenseStoreState,
} from '../license/license.store';
import { likeStoreModule, LikeStoreState } from '../like/like.store';
import { manageStoreModule, ManageStoreState } from '../manage/manage.store';
import { orderStoreModule, OrderStoreState } from '../order/order.store';
import {
  paymentStoreModule,
  PaymentStoreState,
} from '../payment/payment.store';
import { postStoreModule, PostStoreState } from '../post/post.store';
import {
  productStoreModule,
  ProductStoreState,
} from '../product/product.store';
import {
  rechargeStoreModule,
  RechargeStoreState,
} from '../recharge/recharge.store';
import { replyStoreModule, ReplyStoreState } from '../reply/reply.store';
import {
  subscriptionStoreModule,
  SubscriptionStoreState,
} from '../subscription/subscription.store';
import { userStoreModule, UserStoreState } from '../user/user.store';
import { weixinStoreModule, WeixinStoreState } from '../weixin/weixin.store';
import { LocalStorageStroePlugin } from './app.store.plugin';
import { layoutStoreModule, LayoutStoreState } from './layout/layout.store';
import {
  appNotificationStoreModule,
  AppNotificationStoreState,
} from './notification/app-notification.store';
import {
  appSearchStoreModule,
  AppSearchStoreState,
} from './search/app-search.store';
import {
  appToolbarStoreModule,
  AppToolbarStoreState,
} from './toolbar/app-toolbar.store';

export interface RootState {
  appName: string;
  post: PostStoreState;
  layout: LayoutStoreState;
  auth: AuthStoreState;
  notification: AppNotificationStoreState;
  user: UserStoreState;
  toolbar: AppToolbarStoreState;
  file: FileStoreState;
  comment: CommentStoreState;
  reply: ReplyStoreState;
  like: LikeStoreState;
  manage: ManageStoreState;
  search: AppSearchStoreState;
  audit: AuditStoreState;
  dashboard: DashboardStoreState;
  weixin: WeixinStoreState;
  download: DownloadStoreState;
  license: LicenseStoreState;
  payment: PaymentStoreState;
  product: ProductStoreState;
  order: OrderStoreState;
  subscription: SubscriptionStoreState;
  recharge: RechargeStoreState;
}

/**
 * 创建 Store
 */
const store = createStore({
  state: {
    appName: '宁皓网',
  } as RootState,

  modules: {
    post: postStoreModule,
    layout: layoutStoreModule,
    auth: authStoreModule,
    notification: appNotificationStoreModule,
    user: userStoreModule,
    toolbar: appToolbarStoreModule,
    file: fileStoreModule,
    comment: commentStoreModule,
    reply: replyStoreModule,
    like: likeStoreModule,
    manage: manageStoreModule,
    search: appSearchStoreModule,
    audit: auditStoreModule,
    dashboard: dashboardStoreModule,
    weixin: weixinStoreModule,
    download: downloadStoreModule,
    license: licenseStoreModule,
    payment: paymentStoreModule,
    product: productStoreModule,
    order: orderStoreModule,
    subscription: subscriptionStoreModule,
    recharge: rechargeStoreModule,
  },

  plugins: [LocalStorageStroePlugin],
});

/**
 * 默认导出
 */
export default store;
