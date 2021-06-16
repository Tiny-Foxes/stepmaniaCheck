const systemCheck = require('./system.js')
const stepmaniaCheck = require('./stepmania.js')
exports.main = async (Data, args, si) => {
    await systemCheck.main(Data, args, si)
    await stepmaniaCheck.main(Data, args, si)

    return Data.infoStorage
}