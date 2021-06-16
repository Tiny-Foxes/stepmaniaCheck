const fs = require('fs')
const path = require('path')

const isOutFox = (detectedStepmania, stepmaniaVersion) => {
    return detectedStepmania === '5.3' || stepmaniaVersion.includes('5.3')
}

exports.main = async (infoStorage, args) => {
    const theme = infoStorage.get('Theme')
    const detectedStepmania = infoStorage.get('detectedStepmania')
    const stepmaniaVersion = infoStorage.get('stepmaniaVersion')
    
    if (!theme) {
        return [0, 'theme_undefined']
    }

    let themesFolder = isOutFox(detectedStepmania, stepmaniaVersion) ? fs.readdirSync(path.join(args.stepmaniaPath, '/Appearance/Themes')) : fs.readFileSync(path.join(args.stepmaniaPath, '/Themes'))

    if (!themesFolder) {
        return [2, '']
    }

    let additionalFolders = infoStorage.get('AdditionalFolders')
    let additionalThemeFolder = null

    if (!!additionalFolders && fs.existsSync(additionalFolders)) {
        if (isOutFox(detectedStepmania, stepmaniaVersion) && fs.existsSync(path.join(additionalFolders, '/Appearance/Themes'))) {
            additionalThemeFolder = fs.readdirSync(path.join(additionalFolders, '/Appearance/Themes'))
        } else {
            additionalThemeFolder = fs.existsSync(path.join(additionalFolders, '/Themes')) ? fs.readdirSync(path.join(additionalFolders, '/Themes')) : null
        }
    }

    const isThemeAdditional = (themeFolder, whatTheme) => {
        if (!themeFolder) return false

        return themeFolder.includes(whatTheme)
    }

    if (!themesFolder.includes(theme) && !isThemeAdditional(additionalThemeFolder, theme)) {
        return [0, 'theme_doesnotexist']
    }

    return [2, '']
}
