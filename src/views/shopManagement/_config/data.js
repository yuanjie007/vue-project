import {Mock} from 'utils/index'
export default {
  shopCategory: [
    {name: '国际名牌', pid: 0},
    {name: '奢侈品', pid: 0},
    {name: '手机数码', pid: 0},
    {name: '汽车用品', pid: 0},
    {name: '男装', pid: 0},
    {name: '女装', pid: 0},
    {name: '男鞋', pid: 0},
    {name: '女鞋', pid: 0},
    {name: '母婴童装', pid: 0},
    {name: '玩具乐器', pid: 0},
    {name: '席梦思', pid: 1},
    {name: 'FOSSIL', pid: 1},
    {name: '周大福', pid: 2},
    {name: 'Apple', pid: 3},
    {name: '小米', pid: 3}
  ],
  shopSelectData: [
    {name: '库存设定', key: 'stock_set', data: [{text: '拍下减库存', value: 1}, {text: '付款减库存', value: 2}, {text: '永不减库存', value: 3}]},
    {name: '产品状态', key: 'product_status', data: [{text: '下架', value: 1}, {text: '上架', value: 2}, {text: '售馨', value: 3}]}
  ],
  shopProduct: [
    { 'name': 'G-STAR RAW春夏 ARC系列男士修身弯刀牛仔裤3030', 'picture': [{ 'src': '' }], 'status': '', 'cover': Mock.Random.dataImage('90x90', '牛仔裤'), 'category_id': 1, 'detail': '<img src="" alt=""/>', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': 151, 'original_price': 151, 'cost_price': 151, 'attr': { '规格': ['粉色', '蓝色', '金色'], '尺码': ['Xl', 'XXl'] }, 'id': 1 },
    { 'name': '男子训练夹克FL_TRH TEC WRM', 'cover': Mock.Random.dataImage('90x90', '男子夹克'), 'picture': [{ 'src': '' }], 'status': '', 'category_id': 1, 'detail': '<img src="" alt=""/>', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': 151, 'original_price': 151, 'cost_price': 151, 'attr': { '规格': ['粉色', '蓝色', '金色'], '尺码': ['Xl', 'XXl'] }, 'id': 2 },
    { 'name': 'Apple iphone X', 'cover': Mock.Random.dataImage('90x90', 'Apple Iphone'), 'picture': [{ 'src': '' }], 'status': '', 'category_id': 14, 'detail': '<img src="" alt=""/>', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': 151, 'original_price': 151, 'cost_price': 151, 'attr': { '颜色': ['粉色', '蓝色', '金色'], '版本': ['6GB+64GB', '6GB+128GB'] }, 'id': 3 },
    { 'name': '小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待', 'cover': Mock.Random.dataImage('90x90', '小米8'), 'picture': [{ 'src': '' }], 'status': '', 'category_id': 15, 'detail': '<img src="" alt=""/>', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': '14212', 'original_price': 151, 'cost_price': 151, 'attr': { '颜色': ['粉色', '蓝色', '金色'], '版本': ['6GB+64GB', '6GB+128GB'] }, 'id': 4 }
  ],
  shopMarketing: [
    {name: '秒杀模式', type: 'spike', description: '规则：促销倒计时限购活动'},
    {name: '拼团模式', type: 'fightGroup', description: '规则：定时间段团购商品'},
    {name: '优惠卷模式', type: 'coupon', description: '规则：可自定义优惠卷类型，也可设置使用期限、发放数量、金额等'},
    {name: '满赠送模式', type: 'fullGift', description: '规则：自定义设定消费额度后送商品'},
    {name: '满就减模式', type: 'lower', description: '规则：自定义设定消费额度后减金额'}
  ],
  shopMarketingCollection: [
    // 秒杀活动类型
    { shop_marketing_id: 1, title: '3C现场秒杀活动', condition: '手快有，手慢无啊', description: '每个商品仅限10件，抢完为止', status: 2, end_time: new Date() },
    // 拼团活动
    { shop_marketing_id: 1, title: '双11拼团活动', condition: '手快有，手慢无啊', description: '', status: 1, end_time: new Date(new Date().getTime() + 259200000) }
  ],
  // 活动商品
  shopMarketingGood: [
    { 'name': '小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待', 'picture': [], 'status': '', 'cover': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADaElEQVR4Xu3Xz0tUURwF8K9NZUY69IPEpjBM0KJFWlJBxayEaFGLwlZtIoKkRYlB/QHtqkUQRLsWoRDUQBC0GsJFYRrUQAVNplKiDKVpyYRZfG/c4TrzHGeoOXcxZ3Y693l8n3fe991XUXOp57fwU3KBCkKX3NgEEBrjTGiQM6EJjRIA5XBGExokAIphowkNEgDFsNGEBgmAYthoQoMEQDFsNKFBAqAYNprQIAFQDBtNaJAAKIaNJjRIABTDRhMaJACKYaMJDRIAxbDRhAYJgGLYaEKDBEAxbDShQQKgGDaa0CABUAwbTWiQACiGjSY0SAAUw0aXG/TN421yqq1B4u/H5eiduDn92JmoRBtr5W7/Bzl/v38Bif2uEKeg4ws57n+u8dboQ9s2yu2OfbIpXFXU+XyempXE2KS0N9cVdZxvbG/Q2UrFNNqudfHshatetUK6Hr6Q3sFhE3GlfadciG6XnsGPOXdFUVfqHxd7hw5CW+qc7DFvx79Jc22NWT70ZUYqQyFR6GRqWnZF1prfPx9OScvmdYTuPNhksHQ+W5SVoWU51j9/zcuN+Bu5+iRhvutorZdrx/ZIdeXyvNDT6bkFDV/qIpbqe6+N1gfa7i3rMxD2Nk/NpOVs7zN5mpz428qLh6Vhw5oM9GLzXRuuH9tyi6Zz3f17pcLM93e9QmubtckWUf9RnaeFQut6BawLV5l2f5r8IXuvP86cr70gdp29cGUHnX3CQY0Oesgt1mg7p7N3MmXfaAuto0E/scRoptGx16Nyen+j2Hnt7q/zQUfCqzPHcHQ4VbYtTs/Ny4NXI3KydWvO6NDluu7cgSa51fdO+pITZg8eNBLcbeLI1+85L0E+xoZmep3R9kGnDy9t7L2BITNr9ePuhfVnd0vXHRsIfNmxrXffGt07wReyd2gdASda6uXIjohcfvTSvGTke7W2W7WxqdnARusIsjsO3Q7qXWK3f7ojcR+UaHTvjUafsK88QoPkCU1okAAoho0mNEgAFMNGExokAIphowkNEgDFsNGEBgmAYthoQoMEQDFsNKFBAqAYNprQIAFQDBtNaJAAKIaNJjRIABTDRhMaJACKYaMJDRIAxbDRhAYJgGLYaEKDBEAxbDShQQKgGDaa0CABUAwbTWiQACiGjSY0SAAUw0aDoP8A2vMQl6KMt1gAAAAASUVORK5CYII=', 'category_id': 15, 'detail': '""/', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': 151, 'original_price': 151, 'cost_price': 151, 'attr': {}, 'id': 1, 'category_name': '小米', 'shop_product_id': 4, 'shop_marketing_collection_id': 1 },
    { 'name': 'Apple iphone X', 'picture': [], 'status': '', 'cover': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADZUlEQVR4Xu3XT0gUYRgG8FdIaIWQWjPWsE5S/qnOEZEUEXUQzQ5REREFERIJXUusa1CERJGHiIwOidKhiAiyDkpB9L/ADoHgUviHJNwOC8X7wTvMfO24p31mYZ+56LrrPru/eeb9vqnqOL7/r/AouUAVoUtu7AIIjXEmNMiZ0IRGCYByOKMJDRIAxbDRhAYJgGLYaEKDBEAxbDShQQKgGDaa0CABUAwbTWiQACiGjSY0SAAUw0YTGiQAimGjCQ0SAMWw0YQGCYBi2GhCgwRAMWw0oUECoBg2mtAgAVAMG01okAAoho0mNEgAFMNGExokAIphoysVetPGNuk9cUZqUjVy4+4teT4+5igGLl2VuV/zcuFyf0Bz8VyfbGneLE9fPpOB29fFHvt2+Xxehh+PyL3R+yDW/2MSbbQPk/uTcxidezoi0Irc2NDoPr2h6u8+tP6tfesOOXXkpMzMzcjNoUF30mpX1FY2tJ33cIvD0PZ7emVapqanpOf8WfcvPcdOy+7tuyK10ZOkV0Dbhlb3nJ6QsYkXBa+OJGqdaKOLQU//yMr6teti2+g32h87s/OzhA63Kq7R4RldqIU+tI6YulV1rtk7t7W7+a3Huy/vI7O94hpt8zS1POW+u17+i7lF0VERd+gI0cNmdvh14fmdBOZSmYmOjkOdB6V7b5d8mvwcNK5Qu/ULXBm8Jh++fox8F39U6JO6ENqJsxfb/LYdTBInIVFof1ErtOvQEdDa1BKZ03aCJr9/k/r06mCHYtC649CFM26rWHHQ/mKoj+8MD8nR7sMBXsOajGt99mc22HUY9PibCWlpag5Gzau3rx0uoWOqZLNa57MPrZe7LnKZ+kzQarsSFn4vuHesXlbtFkCOjiLXqjVUW2s3GbYg6hZt9MlD0dfooaAH9nVFFsNymMHFxlHZzGi7TdYPrKNCj/Btc/iO78GjEYetP3XMLLVLMYDwDU8xlFI8nyh0Kb5Qub4noUFnhtCEBgmAYthoQoMEQDFsNKFBAqAYNprQIAFQDBtNaJAAKIaNJjRIABTDRhMaJACKYaMJDRIAxbDRhAYJgGLYaEKDBEAxbDShQQKgGDaa0CABUAwbTWiQACiGjSY0SAAUw0YTGiQAimGjCQ0SAMWw0YQGCYBi2GhCgwRAMWw0CPofdKIE0y4v+1sAAAAASUVORK5CYII=', 'category_id': 14, 'detail': '""/', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': 151, 'original_price': 151, 'cost_price': 151, 'attr': {}, 'id': 2, 'category_name': 'Apple', 'shop_product_id': 3, 'shop_marketing_collection_id': 1 },
    { 'name': '男子训练夹克FL_TRH TEC WRM', 'picture': [], 'status': '', 'cover': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADVklEQVR4Xu3XvS90YRAF8KPxUaAWrYpCIqJQolZrKNCIKFRoFBqlSoWG+BdUaAiJaGk0ElQUPioaMu9jstfaNe8mc+dusmcrNrMzu789O/e5TZ/AJ/jIXaCJ0Lkb/xtA6BhnQgc5E5rQUQJBc7ijCR0kEDSGiSZ0kEDQGCaa0EECQWOYaEIHCQSNYaIJHSQQNIaJJnSQQNAYJprQQQJBY5hoQgcJBI1hogkdJBA0hokmdJBA0BgmmtBBAkFjmGhCBwkEjWGiCR0kEDSGiSZ0kEDQGCaa0EECQWOYaEIHCQSNYaIbCnpkBNjaAvb3gdXV9NHX1oClJeD9HZifB/b2SiTb28DMTG1E19dAX19tr3Gsro9EHx4Co6PAwwMwNQUcHwNXV0Bvb/qo2efLP7y+9ugIGBtzpPFtVTy0JvfxsYScxbu9TektT+TkJLC5CbS32yI7O8DsrF2XY0Wx0JWQNcnZhCr821taI8vLQE8PcHkJDA8D1dKsr2t4aEGVh+zO01OgrQ0YGPg7V9lk/++ubnhoJVWwbDLlArm7C3R0/L4Y5vgTz6t1sasje7o4Ofl5MfsLulqSZbW8vgLd3b+9GvrUoTu6uTnt2bOzdKST/6s9dA3oFyF1elIp/4XUwcrQt1RsomVHPz8Dg4NALYmWd18p1ZLahYW0cspTXTB6sdCVVofgd3YCKyvA+nra0RsbwOIicHGR1kv5zYz0kaPe3V0KkJy/dVXoF0Lo7ztASXRXV0J6ekp3idPTCe7mpnQaOTgA+vuB1ta0YuS4p9Bypv74SHeTgi6nGUJ/by9N5/090NKSnhT0iYn0tyZT6ubmgPNzYHwc0DNydpdzdeRwaBLooaGfiZYU645+eWGic2Cv+5bFXwzrnsjnDRLax9HsQmiTyKeA0D6OZhdCm0Q+BYT2cTS7ENok8ikgtI+j2YXQJpFPAaF9HM0uhDaJfAoI7eNodiG0SeRTQGgfR7MLoU0inwJC+ziaXQhtEvkUENrH0exCaJPIp4DQPo5mF0KbRD4FhPZxNLsQ2iTyKSC0j6PZhdAmkU8BoX0czS6ENol8Cgjt42h2IbRJ5FNAaB9HswuhTSKfAkL7OJpdCG0S+RQQ2sfR7EJok8ingNA+jmYXQptEPgVf2GiTtoEtSd0AAAAASUVORK5CYII=', 'category_id': 1, 'detail': '""/', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': 151, 'original_price': 151, 'cost_price': 151, 'attr': {}, 'id': 3, 'category_name': '国际名牌', 'shop_product_id': 2, 'shop_marketing_collection_id': 2 },
    { 'name': 'G-STAR RAW春夏 ARC系列男士修身弯刀牛仔裤3030', 'picture': [], 'status': '', 'cover': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADQ0lEQVR4Xu3Xz0tUURQH8CNM4sJglDbNRkFwahtYkYXLpqAWLoykgogI2qibapcthGhTbtpJUJHRokVtahn9QP+CGlwUBCOk0oNcSAjFvXBlfPj6Pp0z5w72dSN43pwz7/O+nvdeW/fVa3+EP00XaCN00439AELbOBPayJnQhLYSMJrDHU1oIwGjMUw0oY0EjMYw0YQ2EjAaw0QT2kjAaAwTTWgjAaMxTDShjQSMxjDRhDYSMBrDRBPaSMBoDBNNaCMBozFMNKGNBIzGMNGENhIwGsNEE9pIwGgME01oIwGjMUw0oY0EjMYw0YQ2EjAaw0QT2kjAaAwT/T9Ajxw9IvdGz8vejo5cp/trbU1uPJuVF3Pz/viXE+MydPCAvPv8RYbvP/B/+zR5W8ql/fL0w0cZe/wkV1+Lg6ImOkA7wOszj2Ti9CkP55AWk0TGKifl648luTn7XB5euewvSIA+US77v+3r7JTpN2/l7qvXhM5KTCPQt86e8Rei9jOR9j0FKRWLmcH8vb6+6WJYJDg9oyUSvZPVsdXa4OrIEaGQ0OXVVb9G3lermZ+q3+1uP39fWZELxwczj6/f4Tm+SlMOiZrocEZ5b4oBLNzw3OfTiLwZZuQk3NRceaskT1+66NNa/8RB6G3+0wXk8DQxXqn4Dscm7/jfATl9M5s6NyKHenvkcF+ffFtallJXUdoLhX9Oj70+oq4Ol8xSd5d/ZBvs79/Ys7UkkbmFBRkeGNiU5HrJcBHQ6sg6bpuZaPjwqNDpb5/e1dXa4ka608fmhQ5PJ7FfYFoGOoA4UJdo9OSBoN1Fcm+Iefs1HFnQICp02NHuZSP9eo1OHEHHTnBLvbAgzN1Uj5ro3QSJzoXQSEipTmglSNSG0EhIqU5oJUjUhtBISKlOaCVI1IbQSEipTmglSNSG0EhIqU5oJUjUhtBISKlOaCVI1IbQSEipTmglSNSG0EhIqU5oJUjUhtBISKlOaCVI1IbQSEipTmglSNSG0EhIqU5oJUjUhtBISKlOaCVI1IbQSEipTmglSNSG0EhIqU5oJUjUhtBISKlOaCVI1IbQSEipTmglSNSG0EhIqU5oJUjUhtBISKlOaCVI1IbQSEip/hd0rOAcPFEnugAAAABJRU5ErkJggg==', 'category_id': 1, 'detail': '""/', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': 151, 'original_price': 151, 'cost_price': 151, 'attr': {}, 'id': 4, 'category_name': '国际名牌', 'shop_product_id': 1, 'shop_marketing_collection_id': 2 }
  ],
  // 用户列表
  shopUser: [
    {name: 'admin', mobile: 13480014411, email: 'admin@qq.com', role_id: [1], status: true},
    {name: 'test', mobile: 13800138000, email: 'test@qq.com', role_id: [2], status: true}
  ],
  // 角色列表
  shopRole: [
    { name: '超级管理员', description: '拥有整个系统权限最高的人', status: true, node_id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
    { name: '客服', description: '只能操作客服相关功能', status: true, node_id: [11, 12, 13] }
  ],
  // 角色列表
  shopNode: [
    {'name': '用户管理', 'api': '/api/admin/user/', 'status': true, 'pid': 0, 'path': '0-1-', 'id': 1},
    {'name': '用户列表', 'api': '/api/admin/user/index', 'status': true, 'pid': 1, 'path': '0-1-2-', 'id': 2},
    {'name': '用户编辑', 'api': '/api/admin/user/update', 'status': true, 'pid': 1, 'path': '0-1-3-3-', 'id': 3},
    {'name': '用户添加', 'api': '/api/admin/user/update', 'status': true, 'pid': 1, 'path': '0-1-', 'id': 4},
    {'name': '系统管理', 'api': '/api/admin/system/', 'status': true, 'pid': 0, 'path': '0-5-', 'id': 5},
    {'name': '修改密码', 'api': '/api/admin/system/changePassword', 'status': true, 'pid': 5, 'path': '0-5-6-', 'id': 6},
    {'name': '内容管理', 'api': '/api/content', 'status': true, 'pid': 0, 'path': '0-7-', 'id': 7},
    {'name': '文章管理', 'api': '/api/content/article', 'status': true, 'pid': 7, 'path': '0-7-8-', 'id': 8},
    {'name': '文章列表', 'api': '/api/content/article/list', 'status': true, 'pid': 8, 'path': '0-7-8-9-', 'id': 9},
    {'name': '文章更改', 'api': '/api/content/article/update', 'status': true, 'pid': 8, 'path': '0-7-8-10-', 'id': 10},
    {'name': '评论管理', 'api': '/api/content/comment', 'status': true, 'pid': 7, 'path': '0-7-11-', 'id': 11},
    {'name': '评论列表', 'api': '/api/content/comment/list', 'status': true, 'pid': 11, 'path': '0-7-11-12-', 'id': 12},
    {'name': '评论删除', 'api': '/api/content/comment/delete', 'status': true, 'pid': 11, 'path': '0-7-11-13-', 'id': 13}
  ],
  shopOrder: [
    { 'product_id': 4, 'product_name': '小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待', 'order_number': '1545752250467', 'pay_type': '', 'buy_number': 1, 'status': 1, 'attr': { '颜色': '粉色', '版本': '6GB+128GB' }, 'product': { 'name': '小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待', 'picture': [{ 'src': '' }], 'status': '', 'category_id': 15, 'detail': '""/', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': '14212', 'original_price': 151, 'cost_price': 151, 'attr': { '颜色': '粉色', '版本': '6GB+128GB' }, 'id': 4 }, 'id': 1 },
    { 'product_id': 2, 'product_name': '男子训练夹克FL_TRH TEC WRM', 'order_number': '1545752283387', 'pay_type': '支付宝支付', 'buy_number': 3, 'status': 2, 'attr': { '规格': '粉色', '尺码': 'xxl' }, 'product': { 'name': '男子训练夹克FL_TRH TEC WRM', 'picture': [{ 'src': '' }], 'status': '', 'category_id': 1, 'detail': '""/', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': 151, 'original_price': 151, 'cost_price': 151, 'attr': { '规格': '粉色', '尺码': 'xxl' }, 'id': 2 }, 'id': 2 },
    { 'product_id': 3, 'product_name': 'Apple iphone X', 'order_number': '1545752316280', 'pay_type': '微信支付', 'buy_number': 2, 'status': 3, 'attr': { '颜色': '紫色', '版本': '6GB+128GB' }, 'product': { 'name': 'Apple iphone X', 'picture': [{ 'src': '' }], 'status': '', 'category_id': 14, 'detail': '""/', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': 151, 'original_price': 151, 'cost_price': 151, 'attr': { '颜色': '紫色', '版本': '6GB+128GB' }, 'id': 3 }, 'id': 3, 'express_delivery_company': '顺丰快递', 'tracking_number': 'SF123456789' },
    { 'product_id': 1, 'product_name': 'G-STAR RAW春夏 ARC系列男士修身弯刀牛仔裤3030', 'order_number': '1545752396297', 'pay_type': '快捷支付', 'buy_number': 2, 'status': 4, 'attr': { '规格': '蓝色', '尺码': 'XXL' }, 'product': { 'name': 'G-STAR RAW春夏 ARC系列男士修身弯刀牛仔裤3030', 'picture': [{ 'src': '' }], 'status': '', 'category_id': 1, 'detail': '""/', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': 151, 'original_price': 151, 'cost_price': 151, 'attr': { '规格': '蓝色', '尺码': 'XXL' }, 'id': 1 }, 'id': 4, 'express_delivery_company': '中通快递', 'tracking_number': 'ZT123456789' },
    { 'product_id': 4, 'product_name': '小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待', 'order_number': '1545752445399', 'pay_type': '支付宝支付', 'buy_number': 3, 'status': 5, 'attr': { '颜色': '金色', '版本': '8G+128GB' }, 'product': { 'name': '小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待', 'picture': [{ 'src': '' }], 'status': '', 'category_id': 15, 'detail': '""/', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': '14212', 'original_price': 151, 'cost_price': 151, 'attr': { '颜色': '金色', '版本': '8G+128GB' }, 'id': 4 }, 'id': 5, 'express_delivery_company': '天天快递', 'tracking_number': 'TT123456789', 'exit_description': '我想换个颜色', 'return_processing': '', 'return_processing_advice': '' },
    { 'product_id': 3, 'product_name': 'Apple iphone X', 'order_number': '1545752556827', 'pay_type': '微信支付', 'buy_number': 2, 'status': 6, 'attr': { '颜色': '蓝色', '版本': '6GB+128GB' }, 'product': { 'name': 'Apple iphone X', 'picture': [{ 'src': '' }], 'status': '', 'category_id': 14, 'detail': '""/', 'purchase_limit': 20, 'integral': 20, 'stock_set': 1, 'stock': 102, 'sales_price': 151, 'original_price': 151, 'cost_price': 151, 'attr': { '颜色': '蓝色', '版本': '6GB+128GB' }, 'id': 3 }, 'id': 6, 'express_delivery_company': '圆通快递', 'tracking_number': 'YT123456789', 'exit_description': '我不想要了，我要退货', 'return_processing': '同意退货', 'return_processing_advice': '退货' }
  ]
}
