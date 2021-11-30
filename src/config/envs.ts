export const envs = {
  port: Number(process.env.PORT || 10000),
  SECRECT_KEY_TOKEN: String(process.env.SECRECT_KEY_TOKEN || '0e2d4b61-f2b7-4ccf-9545-18344e87b591'),
  TOKEN_LOGIN_EXPIRE: Number(process.env.TOKEN_LOGIN_EXPIRE || 1296000),
  environment: String(process.env.NODE_ENV || 'dev'),
  mongoose: {
    uri: String(process.env.MONGO_URI || 'mongodb://localhost:27017/lab-ia-shopping'),
  },
};
