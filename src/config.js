export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HfE0HJ4jumlVfD4Le5RT6gQkc7p7Lb6L0lFbe1or4167R3rgk5meXI7KabNHZk8znf3EEZ63rm3CnbuoApRlHx500IUJOhe5F",
    s3: {
      REGION: "us-east-2",
      BUCKET: "rdb-serverless-notes-upload"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://92hek2kbf6.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_w2vQBGEjD",
      APP_CLIENT_ID: "2o9tg48f37p5j9kvdfcsodpj9",
      IDENTITY_POOL_ID: "us-east-2:b9325c28-0cd1-48bf-b6f9-1f29fe8028f8"
    }
  };