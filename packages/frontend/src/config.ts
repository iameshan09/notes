const config = {
  // Frontend config
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51TcmuB6zSo5qZlriC0VBGnd5xB2vMX1lPMdkYuP4rWNfEbWDjlLk61vO0ddeNe5DSGvshuZ2Fl3U5ZsDppQtiuRY00A1vlrsKE",
  // Backend config
  s3: {
    REGION: import.meta.env.VITE_REGION,
    BUCKET: import.meta.env.VITE_BUCKET,
  },
  apiGateway: {
    REGION: import.meta.env.VITE_REGION,
    URL: import.meta.env.VITE_API_URL,
  },
  cognito: {
    REGION: import.meta.env.VITE_REGION,
    USER_POOL_ID: import.meta.env.VITE_USER_POOL_ID,
    APP_CLIENT_ID: import.meta.env.VITE_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: import.meta.env.VITE_IDENTITY_POOL_ID,
  },
};

export default config;