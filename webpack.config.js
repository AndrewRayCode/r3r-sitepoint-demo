module.exports = {
    devtool: 'inline-source-map',
    entry: {
        main: './src/client.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: [ 'babel', 'eslint-loader' ]
            },
            { test: /\.json$/, loader: 'file' },
            { test: /\.jpg$/, loader: 'file' },
            { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ] }
        ]
    },
    progress: true,
    resolve: {
      extensions: ['', '.json', '.js']
    },
    output: {
        path: 'build/',
        filename: 'bundle.js'
    }
};