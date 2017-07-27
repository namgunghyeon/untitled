function isTest() {
  return (process.env.NODE_ENV === 'test');
}

function isDevelopment() {
  return (process.env.NODE_ENV === 'development');
}

function isStaging() {
  return (process.env.NODE_ENV === 'staging');
}

function isProduction() {
  return (process.env.NODE_ENV === 'production');
}

function isDebugging() {
  return Boolean(Number(process.env.DEBUG_MODE));
}

function get() {
  return process.env.NODE_ENV || 'test';
}

module.exports = {
  isDebugging,
  isTest,
  isDevelopment,
  isStaging,
  isProduction,
  get,
};
