const CracoLessPlugin = require("craco-less");

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						strictMath: true,
						javascriptEnabled: true
					}
				}
			}
		}
	]
};
