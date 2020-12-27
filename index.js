const PurgeSvg = require('purgesvg')

class PurgeSvgPlugin {
    constructor (options) {
        this.options = options
    }

    apply (compiler) {
        compiler.hooks.done.tap('Purgesvg webpack plugin', () => {
            new PurgeSvg(this.options).purge()
        })
    }
}

module.exports = PurgeSvgPlugin
