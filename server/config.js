module.exports = {
  AUTH0_DOMAIN: '[YOUR_AUTH0_DOMAIN]', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: '[YOUR_AUTH0_API_NAME]', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://root:root@ds237717.mlab.com:37717/aspose_db',
  NAMESPACE: '[YOUR_AUTH0_ROLES_RULES_NAMESPACE]' // e.g., http://myapp.com/roles
};
