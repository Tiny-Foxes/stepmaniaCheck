const si = require('systeminformation')
const checkModule = require('./checks/index.js')
const givenArguments = process.argv.slice(2)

if (givenArguments.length === 0) {
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

    stepmaniaProductName: null,
    stepmaniaProductVersion: null,
    stepmaniaVersion: null,
    stepmaniaDescription: null,
    stepmaniaOriginalName: null,
    theme: null,
    noteskin: null,
    judgment: null,
    toastie: null,

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
    MuteActions: null,
    dedicatedMenuButtons: null,
    PercentageScoring: null,
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
    usePointsAndBlending: null,
    useUnlockSystem: null,
    videoRenderers: null,
    visualDelaySeconds: null,
    vsync: null,
    windowed: null,
}

const result = checkModule.main(si, givenArguments)