module.exports = {
  logLevel: process.env.LOG_LEVEL || 'info',
  microsoft: {
    computerVision: {
      url: process.env.MS_CV_API_URL || 'https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr',
      key: process.env.MS_CV_API_KEY || 'key'
    }
  },
  port: process.env.PORT || '8000'
};
