const path = require("path");

//you must have /lib/plugin after vue-loader or it will throw an error
const VueLoaderPlugin = require("vue-loader/lib/plugin"); 

module.exports = {
    entry: {
        main: './Src/IndexPage/Scripts/index.js'
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./wwwroot"), //dont need dist, root is the equivalent
        publicPath: "/wwwroot/" //must have both slashes
    },
    mode: "development", //uses dev tool source map by default?
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader", "css-loader" //this will apply to both plain '.css' files AND <style> blocks in '.vue' files
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader", //this will apply to both plain '.js' AND <script> blocks in '.vue' files
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [
                    "vue-loader"
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin() //comes with vue-loader, and is found in vue-loader/lib/plugin yay (see require above)
    ],
    resolve: {
        extensions: [".vue", ".js", ".css", ".json"], //files are imported (using import) as .js by default, so if you want to import something that is not .js you must specify here
        alias: {
            "vue$": "vue/dist/vue.esm.js" //vue.esm.js imports vue as a es6 module, so we are explicitly telling webpack to pull from here in order to get es6 (cause you also have common js)
        }
    }
};