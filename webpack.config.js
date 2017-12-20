const path = require("path")
const webpack = require("webpack")

const babelEnvDeps = require("webpack-babel-env-deps")
const printWelcomeMessage = require("./app_config/scripts/welcomeMessage")
const getAliasesMap = require("./app_config/scripts/aliasesMap")
const GLOBALS = require("./app_config/globals")

// Webpack Plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

// Configuration constants
const APP_CONFIG = require("./app_config")

// Welcome Message
printWelcomeMessage(APP_CONFIG.WELCOME_MESSAGE)

//=========================================================
//  COMMON CONFIG (enviroment independent)
//=========================================================

const appDirectory = path.resolve(__dirname, APP_CONFIG.APP_DIR)
const webpackConfig = {}; // Config object, this object gets popultaed differently based on the enviroment

webpackConfig.entry = { 
    main: ["babel-polyfill", appDirectory] 
}

webpackConfig.target = APP_CONFIG.TARGET

webpackConfig.output = {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname ,APP_CONFIG.OUTPUT_DIR),
    publicPath: APP_CONFIG.PUBLIC_PATH
}

webpackConfig.resolve = {
    extensions: ['.jsx', '.ts', '.js'],
    alias: getAliasesMap(appDirectory)
}

webpackConfig.module = {
    rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'postcss-loader' }
                ]
            }),
            include: appDirectory,
            exclude: babelEnvDeps.exclude()
        },
    { 
        test: /\.node$/, 
            use: [{ loader: "node-loader" }],
            include: appDirectory,
            exclude: babelEnvDeps.exclude()
        },
        {
            test: /\.scss$/,
            use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }],
            include: appDirectory,
            exclude: babelEnvDeps.exclude()
        },
        {
            test: /\.less$/,
            use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "less-loader" }],
            include: appDirectory,
            exclude: babelEnvDeps.exclude()
        },
        {
            test: /\.jsx?$/,
            use: [{ loader: 'babel-loader' }],
            include: appDirectory,
            exclude: babelEnvDeps.exclude()
        },
        {
            test: /\.(jpe?g|png|gif|ico|icns)$/,
            use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
            include: appDirectory,
            exclude: babelEnvDeps.exclude()
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
            use: [{ loader: 'file-loader?name=file/[name]__[hash:base64:5].[ext]' }],
            include: appDirectory,
            exclude: babelEnvDeps.exclude()
        }
    ]
}


webpackConfig.plugins = [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|en/), //https://github.com/webpack/webpack/issues/3128
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        hash: false,
        inject: 'body',
        template: path.resolve(appDirectory, "index.html")
    })
]

//=========================================================
//  DEVELOPMENT
//=========================================================

if (APP_CONFIG.DEV_ENV) {
    webpackConfig.entry.main.unshift("react-hot-loader/patch") // <------ react hot reload

    webpackConfig.devtool = APP_CONFIG.DEV_TOOL

    webpackConfig.devServer = {
        historyApiFallback: { index: APP_CONFIG.PUBLIC_PATH },
        port: APP_CONFIG.PORT,
        stats: {
            hot: true,
            colors: true,
            chunks: false,
            children: false,
            reasons: true,
            timings: true,
            errorDetails: true
        }
    }
}

module.exports = function(env) {
    return webpackConfig;
}
