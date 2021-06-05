const systemCheck = require('./system.js')
const stepmaniaCheck = require('./stepmania.js')
exports.main = async (si, args) => {
    const systemPass = await systemCheck.main(si)
    const stepmaniaPass = await stepmaniaCheck.main(si, args)

    console.log(global.infoStorage)
    return !systemPass && !stepmaniaPass ? null : global.infoStorage
}