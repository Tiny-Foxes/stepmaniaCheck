const checkModule = require('./checks/index.js')
const uiModule = require('./ui/index.js')
const dataModule = require('./data/index.js')
const Data = new dataModule.DataInfo()
const Merine = new uiModule.Merine()
exports.main = async (si, args) => {
    await Data.allPropertyToDefault()
    Merine.display(Data, 'do')
    const result = await checkModule.main(Data, args, si)
    Merine.display(Data, 'stop')

    if (!result) {
        Merine.screen = 'failed'
        Merine.display(Data, 'do')
        console.log('Unable to get any info, giving up.')
        return null
    }

    Merine.screen = 'stats'
    Merine.display(Data, 'do')
    // TODO: Execute UI first and make interactions based errors.
}
