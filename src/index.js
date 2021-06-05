const si = require('systeminformation')
const stepmaniaCheck = require('./stepmaniaCheck.js')
const parser = require('ini-parser')
const path = require('path')
const config = parser.parseFileSync(path.join(__dirname, '../config.ini'))
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

global.infoStorage = {
    platform: null,
    distro: null,
    release: null,
    codename: null,
    kernel: null,
    arch: null,
    build: null,
    servicepack: null,

    detectedStepmania: null,
    stepmaniaProductName: null,
    stepmaniaVersion: null,
    stepmaniaManufacturer: null,
    theme: null,

    // Save stuff
    portable: null,
    additionalFolders: null,
    additionalSongFolders: null,
    additionalCourseFolders: null,
    announcer: null,
    coinMode: null,
    currentGame: null,

    // Display
    aspectRatio: null,
    colorDepth: null,
    height: null,
    width: null,

    fastload: null,
    fastloadAdditionalSongs: null,
    fastNoteRendering: null,
    imageCache: null,
    language: null,

    // Last seen
    lastSeenInputDevices: null,
    lastSeenMemory: null,
    lastSeenVideoDriver: null,

    lifeDifficultyScale: null,
    maxTextureResolution: null,
    menuTimer: null,
    monkeyInput: null,
    movieColorDepth: null,
    muteActions: null,
    dedicatedMenuButtons: null,
    percentageScoring: null,
    refreshRate: null,

    // show stuff
    showMouseCursor: null,
    showSongOptions: null,
    showStats: null,
    showThemeErrors: null,

    smoothLines: null,
    soundDevice: null,
    soundDrivers: null,
    soundVolume: null,
    textureColorDepth: null,
    useOldJoystickMapping: null,
    usePointsandBlending: null,
    useUnlockSystem: null,
    videoRenderers: null,
    visualDelaySeconds: null,
    vsync: null,
    windowed: null,
}

stepmaniaCheck.main(si, args)
