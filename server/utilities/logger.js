const Winston = require('winston');

const Config = require('../../config');

module.exports = new Winston.Logger({
  transports: [
    new Winston.transports.Console({
      level: Config.LOG_LEVEL,
      timestamp: () => new Date().toISOString(),
      formatter: (options) => {
        const {level=String(), message=String(), timestamp} = options;
        const meta = options.meta && Object.keys(options.meta).length
          ? `\n\t${JSON.stringify(options.meta)}`
          : String();
        return `${timestamp()} ${level.toUpperCase()} ${message} ${meta}`;
      }
    })
  ]
});
