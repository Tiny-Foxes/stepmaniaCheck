const systemCheck = require('./system.js')
const stepmaniaCheck = require('./stepmania.js')
exports.main = async (si, args) => {
    await systemCheck.main(si)
    await systemCheck.main(si, args)
}