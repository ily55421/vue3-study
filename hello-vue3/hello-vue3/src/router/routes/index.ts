import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@views/home.vue'),
    meta: {
      title: 'Home',
    },
  },
  /**
   * 子路由示例
   */
  {
    path: '/foo',
    name: 'foo',
    component: () =>
      import(/* webpackChunkName: "foo" */ '@cp/TransferStation.vue'),
    meta: {
      title: 'Foo',
    },
    redirect: {
      name: 'bar',
    },
    children: [
      {
        path: 'bar',
        name: 'bar',
        component: () =>
          import(/* webpackChunkName: "bar" */ '@views/foo/bar.vue'),
        meta: {
          title: 'Bar',
        },
      },
    ],
  },
  {
    path: '/test',
    name: 'test',
    component: () =>
      import(/* webpackChunkName: "test" */ '@cp/TransferStation.vue'),
    meta: {
      title: 'Test',
    },
    redirect: {
      name: 'test',
    },
    children: [
      {
        path: 'test',
        name: 'test',
        component: () =>
          import(/* webpackChunkName: "test" */ '@views/test/test.vue'),
        meta: {
          title: 'Test',
        },
      },
    ],
  },
]

export default routes
