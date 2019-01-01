module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        // '@babel/react', // translate jsx
                        ['@babel/env', {
                            targets: {
                                browsers: ['last 2 versions'],
                            }
                        }]
                    ],
                    plugins: [
                        '@babel/plugin-proposal-object-rest-spread',
                    ]
                }
            }
        ]
    },

    externals : {
    }
};
