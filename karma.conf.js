// Karma configuration
// Generated on Fri Jun 09 2017 09:52:33 GMT+0700 (ICT)

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
 
    // reporters configuration 
    reporters: ['mocha'],
 
    // reporter options 
    mochaReporter: {
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      }
    }
  });
}
