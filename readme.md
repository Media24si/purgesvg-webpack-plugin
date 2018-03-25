# purgesvg-webpack-plugin
for webpack v3

## Installation
```
npm install --save-dev purgesvg-webpack-plugin
yarn add --dev purgesvg-webpack-plugin
```

## Usage
#### Example *webpack.config.js*
```javascript
const PurgeSvgPlugin = require('purgesvg-webpack-plugin');

module.exports = {
    plugins: [
        new PurgeSvgPlugin({
            // available options at [purge-svg](https://github.com/Media24si/purge-svg)
        }),
    ],
};
```
