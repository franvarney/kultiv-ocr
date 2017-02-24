module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  MICROSOFT: {
    COMPUTER_VISION: {
      URL: process.env.MS_CV_API_URL || 'https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr',
      KEY: process.env.MS_CV_API_KEY || 'key'
    }
  },
  PORT: process.env.PORT || '8000'
};
