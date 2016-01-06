module.exports = {
  // App Settings
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/users',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'Enter Token Secret',
  GITHUB_SECRET: process.env.GITHUB_SECRET || 'Enter Github Secret',
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID || 'Enter Github Client ID'
};