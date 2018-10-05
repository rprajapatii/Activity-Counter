const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/index.js", 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
				}
            },
			{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
				
			}
		]
	}
}
