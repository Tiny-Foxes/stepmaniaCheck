const checkModule = require('./checks/index.js')
const outfox = require('./errors/5.3.js')
exports.main = async (si, args) => {
    const result = await checkModule.main(si, args)

    if (!result) {
        console.log('Unable to get any info, giving up.')
        return null
    }

}
