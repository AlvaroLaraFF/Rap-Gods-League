module.exports = {
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'default',
      region: 'eu-west-1',
      bucket: 'rapgodsleague.com',
      createBucket: false,
      staticHosting: false,
      staticIndexPage: 'index.html',
      staticErrorPage: 'error.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      pwaFiles: 'service-worker.js',
      enableCloudfront: false,
      uploadConcurrency: 5,
      pluginVersion: '3.0.0',
      gzip: true
    },
  },
};
