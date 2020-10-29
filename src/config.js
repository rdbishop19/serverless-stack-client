const dev = {
	STRIPE_KEY:
		'pk_test_51HfE0HJ4jumlVfD4Le5RT6gQkc7p7Lb6L0lFbe1or4167R3rgk5meXI7KabNHZk8znf3EEZ63rm3CnbuoApRlHx500IUJOhe5F',
	s3: {
		REGION: 'us-east-2',
		BUCKET: 'rdb-serverless-notes-upload'
	},
	apiGateway: {
		REGION: 'us-east-2',
		URL: 'https://api.devtakes.com/dev'
	},
	cognito: {
		REGION: 'us-east-2',
		USER_POOL_ID: 'us-east-2_CzJkcMkio',
		APP_CLIENT_ID: '52fsuvq5jg5n05tis5nr7nk80a',
		IDENTITY_POOL_ID: 'us-east-2:3e612fe9-05ab-49a0-b7e9-3e199bc4edf6'
	}
};

const prod = {
	STRIPE_KEY:
		'pk_test_51HfE0HJ4jumlVfD4Le5RT6gQkc7p7Lb6L0lFbe1or4167R3rgk5meXI7KabNHZk8znf3EEZ63rm3CnbuoApRlHx500IUJOhe5F',
	s3: {
		REGION: 'us-east-2',
		BUCKET: 'rdb-serverless-notes-upload'
	},
	apiGateway: {
		REGION: 'us-east-2',
		URL: 'https://api.devtakes.com/prod'
	},
	cognito: {
		REGION: 'us-east-2',
		USER_POOL_ID: 'us-east-2_ZiPMrt3mY',
		APP_CLIENT_ID: '5rjq00kfclih2ec9fnh03vdm7',
		IDENTITY_POOL_ID: 'us-east-2:5c9eae6b-a59f-4e14-a903-0f78a750a481'
	}
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
	// Add common config values here
	MAX_ATTACHMENT_SIZE: 5000000,
	...config
};
