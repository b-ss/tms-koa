module.exports = {
  port: 3001,
  name: 'tms-koa-0',
  router: {
    auth: {
      prefix: ''
    },
    controllers: {
      prefix: ''
    }
  },
  auth: {
    captcha: {
      //path: '/auth/captcha.js', // 指定验证码实现方法
      code: 'a1z9' // 预制验证码（没有指定外部实现方法时生效）
    },
    client: {
      //path: '/auth/client.js', // 指定用户认证实现方法
      accounts: [{ id: 1, username: 'user1', password: '123456' }] // 预制用户账号（没有指定外部实现方法时生效）
    },
    jwt: {
      privateKey: 'tms-koa-secret',
      expiresIn: 3600
    },
    redis: {
      host: '127.0.0.1',
      port: 6379,
      expiresIn: 3600,
      prefix: 'tms-koa-0'
    }
  }
}
