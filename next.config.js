const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  	webpack(config, options) {
  		config.resolve.alias["~"] = join(__dirname);
    	return config
  	}
});
