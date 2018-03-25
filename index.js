const PurgeSvg = require('purgesvg')

class PurgeSvgPlugin {
    constructor (options) {
        this.options = options
    }

    apply (compiler) {
        compiler.plugin('done', () => {
            new PurgeSvg(this.options).purge()
        })
    }
}

module.exports = PurgeSvgPlugin
