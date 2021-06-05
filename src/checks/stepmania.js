const fs = require('fs-extra')
const path = require('path')
const parser = require('ini-parser')
const { getFileProperties } = require('get-file-properties')
const structures = {
    "5.3": [
        'Announcers',
        'Appearance',
        'BackgroundEffects',
        'BackgroundTransitions',
        'BGAnimations',
        'Characters',
        'Courses',
        'Data',
        'Docs',
        'Packages',
        'Program',
        'Scripts',
        'Songs'
    ],
    "Etterna": [
        'Announcers',
        'Assets',
        'BackgroundEffects',
        'BackgroundTransitions',
        'BGAnimations',
        'Data',
        'Docs',
        'NoteSkins',
        'Program',
        'Screenshots',
        'Scripts',
        'Songs',
        'Themes'
    ],
    "5.0 or 5.1": [
        'Announcers',
        'BackgroundEffects',
        'BackgroundTransitions',
        'BGAnimations',
        'Characters',
        'Courses',
        'Data',
        'Docs',
        'NoteSkins',
        'Program',
        'Scripts',
        'Songs',
        'Themes'
    ],
    "NotITG": [
        'BackgroundEffects',
        'BackgroundTransitions',
        'BGAnimations',
        'Cache',
        'Characters',
        'Courses',
        'CryptPackages',
        'Data',
        'Docs',
        'NoteSkins',
        'Packages',
        'Program',
        'RandomMovies',
        'Songs',
        'Themes',
        'UserPacks'
    ]
}

const detectVersionByDirs = (dirs) => {
    const versions = Object.keys(structures)
    let matches = []
    const checkForDir = (dir) => {
        return dirs.includes(dir)
    }

    for (let i = 0; i < versions.length; i++) {
        if (structures[versions[i]].every(checkForDir)) {
            console.log('Detected ', versions[i])
            matches.push(versions[i])
        } else {
            console.log(`${versions[i]} doesn't match`)
        }
    }

    return matches.length === 0 ? null : matches
}

const findSaveDir = async (args) => {
    const { stepmaniaPath, savePath, programDataName } = args

    // Handle null
    if (!!savePath && fs.existsSync(savePath)) {
        return savePath
    }

    if (global.infoStorage.portable && fs.existsSync(path.join(stepmaniaPath, '/Save'))) {
        return path.join(stepmaniaPath, '/Save')
    }
    
    /*
    if (!global.infoStorage.platform.includes('win') && !args[1]) {
        console.error("Application isn't running on portable mode and this program isn't running on windows. Please give an additional argument after the stepmaniaPath to the path where StepMania saves logs and cache.")
        console.log("On macos it should be ~/Library/Preferences/StepMania 5.x/ (.x won't be necessary if stepmania 5)")
        // TODO: log linux path here.
        return null
    }*/

    const appdata = process.env.APPDATA || (process.platform === 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME)
    
    try {
        const stepmaniaFolders = await fs.readdir(appdata)
        const smFolderName = new Set()
        if (stepmaniaFolders.some(
                (dir) => {
                    if (dir.includes(programDataName)) {
                        smFolderName.add(dir)
                        return dir
                    }
                }
            )
        ) {
            const smfolder = path.join(appdata, `/${smFolderName.keys().next().value}/Save`)
            console.info(`Found stepmania version by save folder in appdata, accessing ${smfolder}`)
            return smfolder
        }
        
        console.warn('No stepmania folder has been found on user data, have you open it atleast once?')
        return null
    } catch (e) {
        console.warn(`Error while reading folders from ${appdata}, error: `, e)
        return null
    }
}

const addIfExists = (value, addAs) => {
    if (!value) return;
    global.infoStorage[addAs] = value
}

exports.main = async (_, args) => {
    const { stepmaniaPath, preferenceName, programName }  = args

    if (!fs.existsSync(stepmaniaPath)) {
        console.log('Installation path does not exist, giving up.')
        return null
    }

    try {
        const dirs = await fs.readdir(stepmaniaPath)
        let version = detectVersionByDirs(dirs)

        if (!version) {
            console.warn('Unable to detect stepmania version.')
        }

        global.infoStorage.detectedStepmania = !version ? 'Failed to detect' : version.join(', ')

        if (dirs.includes('portable.ini')) {
            global.infoStorage.portable = true
        } else {
            global.infoStorage.portable = false
        }
        
        const saveFolder = await findSaveDir(args)

        if (!saveFolder) {
            console.warn('Unable to find save folder. :(')
            return null
        }

        if (!fs.existsSync(path.join(saveFolder, `/${preferenceName}.ini`))) {
            console.warn("There's no Preferences.ini inside your Save folder...what?")
            return null
        }

        const save = parser.parseFileSync(path.join(saveFolder, `/${preferenceName}.ini`))
        // Prepare for wall of text.
        addIfExists(save.Options.AdditionalCourseFolders, "additionalCourseFolders")
        addIfExists(save.Options.AdditionalFolders, "additionalFolders")
        addIfExists(save.Options.AdditionalSongFolders, "additionalSongFolders")
        addIfExists(save.Options.Announcer, "announcer")
        addIfExists(save.Options.CoinMode, "coinMode")
        addIfExists(save.Options.CurrentGame, "currentGame")
        addIfExists(save.Options.DisplayAspectRatio, "aspectRatio")
        addIfExists(save.Options.DisplayColorDepth, "colorDepth")
        addIfExists(save.Options.DisplayHeight, "height")
        addIfExists(save.Options.DisplayWidth, "width")
        addIfExists(save.Options.FastLoad, "fastload")
        addIfExists(save.Options.FastLoadAdditionalSongs, "fastloadAdditionalSongs")
        addIfExists(save.Options.FastNoteRendering, "fastNoteRendering")
        addIfExists(save.Options.ImageCache, "imageCache")
        addIfExists(save.Options.Language, "language")
        addIfExists(save.Options.LastSeenInputDevices, "lastSeenInputDevices")
        addIfExists(save.Options.LastSeenMemory, "lastSeenMemory")
        addIfExists(save.Options.LastSeenVideoDriver, "lastSeenVideoDriver")
        addIfExists(save.Options.LifeDifficultyScale, "lifeDifficultyScale")
        addIfExists(save.Options.MaxTextureResolution, "maxTextureResolution")
        addIfExists(save.Options.MenuTimer, "menuTimer")
        addIfExists(save.Options.MonkeyInput, "monkeyInput")
        addIfExists(save.Options.MovieColorDepth, "movieColorDepth")
        addIfExists(save.Options.MuteActions, "muteActions")
        addIfExists(save.Options.OnlyDedicatedMenuButtons, "dedicatedMenuButtons")
        addIfExists(save.Options.PercentageScoring, "percentageScoring")
        addIfExists(save.Options.RefreshRate, "refreshRate")
        addIfExists(save.Options.ShowMouseCursor, "showMouseCursor")
        addIfExists(save.Options.ShowSongOptions, "showSongOptions")
        addIfExists(save.Options.ShowStats, "showStats")
        addIfExists(save.Options.ShowThemeErrors, "showThemeErrors")
        addIfExists(save.Options.SmoothLines, "smoothLines")
        addIfExists(save.Options.SoundDevice, "soundDevice")
        addIfExists(save.Options.SoundDrivers, "soundDrivers")
        addIfExists(save.Options.SoundVolume, "soundVolume")
        addIfExists(save.Options.TextureColorDepth, "textureColorDepth")
        addIfExists(save.Options.Theme, "theme")
        addIfExists(save.Options.UseOldJoystickMapping, "useOldJoystickMapping")
        addIfExists(save.Options.UsePointsandBlending, "usePointsandBlending")
        addIfExists(save.Options.UseUnlockSystem, "useUnlockSystem")
        addIfExists(save.Options.VideoRenderers, "videoRenderers")
        addIfExists(save.Options.VisualDelaySeconds, "visualDelaySeconds")
        addIfExists(save.Options.Vsync, "vsync")
        addIfExists(save.Options.Windowed, "windowed")

        if (global.infoStorage.platform.includes('win')) {
            const properties = await getFileProperties(path.join(stepmaniaPath, `/Program/${programName}.exe`))

            global.infoStorage.stepmaniaVersion = properties.Version
            global.infoStorage.stepmaniaProductName = properties.FileName
            global.infoStorage.stepmaniaManufacturer = properties.Manufacturer
        }

        return global.infoStorage
    } catch (e) {
        console.error('Unexpected error: ', e.toString())
        return null
    }
}