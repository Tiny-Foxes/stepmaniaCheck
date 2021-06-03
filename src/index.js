const fs = require('fs-extra')
const path = require('path')
const si = require('systeminformation')
global.infoStorage = {
    os: null,
    
    // common stuff
    stepmania: null,
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
( async () => {
    infoStorage.add('')
})()