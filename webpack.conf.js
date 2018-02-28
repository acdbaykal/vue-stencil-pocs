const path = require('path')

module.exports ={
    devtool: 'inline-source-map',
    module: {
        // configuration regarding modules
        rules: [
            {
                test:/\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loader: "babel-loader"
            },
            {
                test:/\.vue$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loader: "vue-loader"
            }
        ]
    }
}