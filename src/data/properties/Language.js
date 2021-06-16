const fs = require('fs')
const path = require('path')

const isOutFox = (detectedStepmania, stepmaniaVersion) => {
    return detectedStepmania === '5.3' || stepmaniaVersion.includes('5.3')
}

const themeLanguages = (infoStorage, args, theme) => {
    const { stepmaniaPath } = args

    if (isOutFox(infoStorage.get('detectedStepmania'), infoStorage.get('stepmaniaVersion'))) {
        if (!fs.existsSync(path.join(stepmaniaPath, `/Appearance/Themes/${theme}`))) return []

        return fs.readdirSync(path.join(stepmaniaPath, `/Appearance/Themes/${theme}/Languages`))
    }

    if (!fs.existsSync(path.join(stepmaniaPath, `/Themes/${theme}`))) return []

    return fs.readdirSync(path.join(stepmaniaPath, `/Themes/${theme}/Languages`))
}

exports.main = async (infoStorage, args) => {
    const language = infoStorage.get('Language')
    const theme = infoStorage.get('Theme')

    if (!language) {
        return [0, 'language_undefined']
    }

    const fallbackList = themeLanguages(infoStorage, args, '_fallback')
    const themeList = themeLanguages(infoStorage, args, theme)

    if (!fallbackList.includes(language + '.ini') && !themeList.includes(language + '.ini')) {
        return [0, 'language_notsupported']
    }

    if (!fallbackList.includes(language + '.ini')) {
        return [1, 'language_missfallbacksupport']
    }

    if (!themeList.includes(language + '.ini')) {
        return [1, 'language_missthemesupport']
    }

    return [2, '']
}
