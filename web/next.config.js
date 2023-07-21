const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
    //assetPrefix: './',
    trailingSlash: true,
    reactStrictMode: false,
    poweredByHeader: false,
    sassOptions: {
        includePaths: [path.join(__dirname, 'resources/sass')]
    },
    webpack: (config, {dev, isServer}) => {
        // we want to use this plugin only on dev environment
        if (process.env.DETECT_DUPLICITE === '1') {
            config.plugins.push(new DuplicatePackageCheckerPlugin({verbose: true}));
        }

        // we want to use this plugin only on dev environment and giltab pipeline
        if (process.env.DETECT_CYCLES === '1') {
            let numCyclesDetected = 0;
            config.plugins.push(
                new CircularDependencyPlugin({
                    failOnError: true,
                    exclude: /node_modules/,
                    onDetected: ({paths}) => {
                        numCyclesDetected++;
                        console.error('Cyclic Dependency: ' + paths.join(' -> '));
                    },
                    onEnd: ({compilation}) => {
                        if (numCyclesDetected != 0) {
                            compilation.errors.push(
                                new Error(`Detected ${numCyclesDetected} cycles which exceeds configured limit of zero.`)
                            );
                        }
                    },
                })
            );
        }
        config.module.rules.push(
            {
                test: /\.svg$/,
                loader: 'svg-react-loader'
            },
            {
                test: /\.(gif|jpg|png)(\?.*)?$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'fonts/[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.md$/,
                loader: 'markdown-loader'
            }
        );

        config.resolve.alias = {
            ...config.resolve.alias,
            src: path.join(__dirname, './src')
        };

        return config;
    },
}


module.exports = nextConfig
