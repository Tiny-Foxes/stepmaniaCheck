const fs = require('fs')
const path = require('path')
const parser = require('ini-parser')
const { getFileProperties } = require('get-file-properties')
const structures = {
  5.3: [
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
    'Songs',
  ],
  Etterna: [
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
    'Themes',
  ],
  '5.0 or 5.1': [
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
    'Themes',
  ],
  NotITG: [
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
    'UserPacks',
  ],
}

const detectVersionByDirs = (dirs) => {
  const versions = Object.keys(structures)
  let matches = []
  const checkForDir = (dir) => {
    return dirs.includes(dir)
  }

  for (let i = 0; i < versions.length; i++) {
    if (structures[versions[i]].every(checkForDir)) {
      // console.log('Detected ', versions[i])
      matches.push(versions[i])
    }
  }

  return matches.length === 0 ? null : matches
}

const findSaveDir = async (args, Data) => {
  const { stepmaniaPath, savePath, programDataName } = args

  // Handle null
  if (!!savePath && fs.existsSync(savePath)) {
    return savePath.includes('Save') ? savePath : path.join(savePath, '/Save')
  }

  if (
    Data.infoStorage.get('portable') &&
    fs.existsSync(path.join(stepmaniaPath, '/Save'))
  ) {
    return path.join(stepmaniaPath, '/Save')
  }

  /*
    if (!global.infoStorage.platform.includes('win') && !args[1]) {
        console.error("Application isn't running on portable mode and this program isn't running on windows. Please give an additional argument after the stepmaniaPath to the path where StepMania saves logs and cache.")
        console.log("On macos it should be ~/Library/Preferences/StepMania 5.x/ (.x won't be necessary if stepmania 5)")
        // TODO: log linux path here.
        return null
    }*/

  const appdata =
    process.env.APPDATA ||
    (process.platform === 'darwin'
      ? process.env.HOME + '/Library/Preferences'
      : process.env.HOME)

  try {
    const stepmaniaFolders = await fs.readdir(appdata)
    const smFolderName = new Set()

    if (
      stepmaniaFolders.some((dir) => {
        if (dir.includes(programDataName)) {
          smFolderName.add(dir)
          return dir
        }
      })
    ) {
      const smfolder = path.join(
        appdata,
        `/${smFolderName.keys().next().value}/Save`
      )
      console.info(
        `Found stepmania version by save folder in appdata, accessing ${smfolder}`
      )
      return smfolder
    }

    console.warn(
      'No stepmania folder has been found on user data, have you open it atleast once?'
    )
    return null
  } catch (e) {
    console.warn(`Error while reading folders from ${appdata}, error: `, e)
    return null
  }
}

const addIfExists = async (Data, value, addAs) => {
  if (!value) return
  await Data.defineValue(addAs, value)
  
  return true
}

exports.main = async (Data, args) => {
  const { stepmaniaPath, preferenceName, programName } = args

  if (!fs.existsSync(stepmaniaPath)) {
    console.log(stepmaniaPath)
    console.log('Installation path does not exist, giving up.')
    return null
  }

  try {
    const dirs = await fs.readdirSync(stepmaniaPath)
    let version = detectVersionByDirs(dirs)

    if (!version) {
      console.warn('Unable to detect stepmania version.')
    }

    Data.defineValue(
      'detectedStepmania',
      !version ? 'Failed to detect name' : version.join(', ')
    )

    // Some OutFox version seems to release with Uppercase portable???? - zerinho6
    if (dirs.includes('portable.ini') || dirs.includes('Portable.ini')) {
      Data.defineValue('portable', true)
    } else {
      Data.defineValue('portable', false)
    }

    const saveFolder = await findSaveDir(args, Data)

    if (!saveFolder) {
      console.warn('Unable to find save folder. :(')
      return null
    }

    if (!fs.existsSync(path.join(saveFolder, `/${preferenceName}.ini`))) {
      console.warn("There's no Preferences.ini inside your Save folder...what?")
      return null
    }

    if (Data.getValue('platform').includes('win')) {
      const properties = await getFileProperties(
        path.join(stepmaniaPath, `/Program/${programName}.exe`)
      )

      Data.defineValue('stepmaniaVersion', properties.Version)
      Data.defineValue('stepmaniaProductName', properties.FileName)
      Data.defineValue('stepmaniaManufacturer', properties.Manufacturer)
    }

    const save = parser.parseFileSync(
      path.join(saveFolder, `/${preferenceName}.ini`)
    )

    // Prepare for wall of text.
    Data.properties.forEach(async (prop) => {
      await addIfExists(Data, save.Options[prop], prop)
    })

    Data.properties.forEach(async (prop) => {
      await Data.checkForErrors(Data.infoStorage, prop, args)
    })
  
    return Data.infoStorage
  } catch (e) {
    console.error(e)
    return null
  }
}
