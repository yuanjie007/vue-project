const shopManagement = r => require.ensure([], () => r(require('../Index')), 'shop')
const RouterView = r => require.ensure([], () => r(require('src/RouterView')), 'shop')
const GoodIndex = r => require.ensure([], () => r(require('../product/Index')), 'shop')
const GoodAddEditView = r => require.ensure([], () => r(require('../product/AddEditView')), 'shop')
const CategoryIndex = r => require.ensure([], () => r(require('../product/category/Index')), 'shop')
const CategoryAddEditView = r => require.ensure([], () => r(require('../product/category/children/AddEditView')), 'shop')
const MarketingIndex = r => require.ensure([], () => r(require('../marketing/Index')), 'shop')
const MarketingAddEditView = r => require.ensure([], () => r(require('../marketing/AddEditView')), 'shop')
const MarketingCollectionIndex = r => require.ensure([], () => r(require('../marketing/children/Collection')), 'shop')
const MarketingCollectionAddEditView = r => require.ensure([], () => r(require('../marketing/children/AddEditView')), 'shop')
const RoleIndex = r => require.ensure([], () => r(require('../rbac/role/Index')), 'shopRbac')
const RoleAddEditView = r => require.ensure([], () => r(require('../rbac/role/children/AddEditView')), 'shopRbac')
const UserIndex = r => require.ensure([], () => r(require('../rbac/user/Index')), 'shopRbac')
const UserAddEditView = r => require.ensure([], () => r(require('../rbac/user/children/AddEditView')), 'shopRbac')
const NodeIndex = r => require.ensure([], () => r(require('../rbac/node/Index')), 'shopRbac')
const OrderIndex = r => require.ensure([], () => r(require('../order/Index')), 'shop')
const OrderAddEditView = r => require.ensure([], () => r(require('../order/AddEditView')), 'shop')

const StockIndex = r => require.ensure([], () => r(require('../stock/Index')), 'shop')
const StockAddEditView = r => require.ensure([], () => r(require('../stock/children/AddEditView')), 'shop')

// 进销存管理
const invoicing = {
  path: 'invoicing',
  component: RouterView,
  meta: {
    bread: ['进销存管理']
  },
  children: [
    {
      path: 'stock',
      name: 'shopStock',
      component: StockIndex,
      meta: {
        bread: ['库存列表']
      }
    },
    {
      path: 'stockAdd',
      name: 'shopStockAdd',
      component: StockAddEditView,
      meta: {
        bread: [{ text: '库存列表', url: 'shopStock' }, '添加库存']
      }
    },
    {
      path: 'stockEdit',
      name: 'shopStockEdit',
      component: StockAddEditView,
      meta: {
        bread: [{ text: '库存列表', url: 'shopStock' }, '更改库存']
      }
    }
  ]
}

// 订单管理
const order = {
  path: 'order',
  component: RouterView,
  meta: {
    bread: ['订单管理']
  },
  children: [
    {
      path: '',
      redirect: 'list'
    },
    {
      path: 'list',
      name: 'shopOrder',
      component: OrderIndex,
      meta: {
        bread: ['订单列表']
      }
    },
    {
      path: 'orderAdd',
      name: 'shopOrderAdd',
      component: OrderAddEditView,
      meta: {
        bread: [{ text: '订单列表', url: 'shopOrder' }, '模拟商城下单']
      }
    },
    {
      path: 'orderEdit',
      name: 'shopOrderEdit',
      component: OrderAddEditView,
      meta: {
        bread: [{ text: '订单列表', url: 'shopOrder' }, '订单信息更改']
      }
    }
  ]
}

// rbac
const rbac = {
  path: 'rbac',
  component: RouterView,
  meta: {
    bread: ['权限管理']
  },
  children: [
    {
      path: 'role',
      component: RoleIndex,
      name: 'shopRole',
      meta: {
        bread: ['角色管理', '角色列表']
      },
      children: [
        {
          path: 'add',
          name: 'shopRoleAdd',
          component: RoleAddEditView,
          meta: {
            bread: ['角色管理']
          }
        }, {
          path: 'edit',
          name: 'shopRoleEdit',
          component: RoleAddEditView,
          meta: {
            bread: ['角色管理']
          }
        }
      ]
    },
    {
      path: 'user',
      component: UserIndex,
      name: 'shopUser',
      meta: {
        bread: ['用户管理', '用户列表']
      },
      children: [
        {
          path: 'add',
          name: 'shopUserAdd',
          component: UserAddEditView,
          meta: {
            bread: ['用户管理']
          }
        }, {
          path: 'edit',
          name: 'shopUserEdit',
          component: UserAddEditView,
          meta: {
            bread: ['用户管理']
          }
        }
      ]
    },
    {
      path: 'node',
      component: NodeIndex,
      name: 'shopNode',
      meta: {
        bread: ['节点管理']
      }
    }
  ]
}
// 具体营销方案活动管理
const marketingCollection = [{
  path: 'marketingCollection',
  name: 'shopMarketingCollection',
  component: MarketingCollectionIndex,
  meta: {
    bread: [{text: '营销方案管理', url: 'shopMarketing'}, '#{name}']
  },
  children: [
    {
      path: 'add',
      name: 'shopMarketingCollectionAdd',
      component: MarketingCollectionAddEditView
    }, {
      path: 'edit',
      name: 'shopMarketingCollectionEdit',
      component: MarketingCollectionAddEditView
    }
  ]
}]

// 营销方案管理
const marketing = {
  path: 'marketing',
  name: 'shopMarketing',
  component: MarketingIndex,
  meta: {
    bread: ['营销方案管理']
  },
  children: [
    {
      path: 'add',
      name: 'shopMarketingAdd',
      component: MarketingAddEditView
    }
  ]
}
// 商品管理
const product = {
  path: 'product',
  name: 'shopProduct',
  component: RouterView,
  meta: {
    bread: ['商品管理']
  },
  children: [
    {
      path: 'category',
      name: 'shopCategory',
      component: CategoryIndex,
      meta: {
        bread: ['分类列表']
      },
      children: [
        {
          path: 'add',
          name: 'shopCategoryAdd',
          component: CategoryAddEditView,
          meta: {
            bread: ['分类添加']
          }
        }, {
          path: 'edit',
          name: 'shopCategoryEdit',
          component: CategoryAddEditView,
          meta: {
            bread: ['分类更改']
          }
        }
      ]
    },
    {
      path: 'good',
      name: 'shopGood',
      component: GoodIndex,
      meta: {
        bread: ['商品列表']
      }
    },
    {
      path: 'goodAdd',
      name: 'shopGoodAdd',
      component: GoodAddEditView,
      meta: {
        bread: [{ text: '商品列表', url: 'shopGood' }, '商品添加']
      }
    },
    {
      path: 'goodEdit',
      name: 'shopGoodEdit',
      component: GoodAddEditView,
      meta: {
        bread: [{ text: '商品列表', url: 'shopGood' }, '商品更改']
      }
    }
  ]
}
export default {
  path: '/shop',
  name: 'shop',
  meta: {
    bread: ['商城后台管理']
  },
  component: shopManagement,
  children: [
    product,
    marketing,
    rbac,
    order,
    invoicing,
    ...marketingCollection
  ]
}
