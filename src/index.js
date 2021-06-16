const si = require('systeminformation')
const stepmaniaCheck = require('./stepmaniaCheck.js')
const parser = require('ini-parser')
const path = require('path')
const config = parser.parseFileSync(path.join(process.execPath, '../config.ini'))
const givenArguments = process.argv.slice(2)
const defineArguments = (config, args) => {
    const stepmaniaPath = args[0] || config.variables.stepmaniaPath || null
    const savePath = args[1] || config.variables.savePath || null
    const preferenceName = args[2] || config.variables.preferenceName || "Preferences"
    const programName = args[3] || config.variables.programName || "StepMania"
    const programDataName = args[4] || config.variables.programDataName || "StepMania"

    return { stepmaniaPath, savePath, preferenceName, programName, programDataName }
}

const args = defineArguments(config, givenArguments)

if (!args.stepmaniaPath) {
    console.error('StepMania installation path has not been given, giving up.')
    return
}

stepmaniaCheck.main(si, args)
setTimeout(() =>{}, 999999)
