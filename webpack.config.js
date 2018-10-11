const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/index.js", 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
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
                test: /main.scss/,
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
				
            },
            {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            }   
		]
	}
}
