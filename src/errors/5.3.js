/*
const fs = require('fs-extra')
const addIfUnexpected = async (valuesObj, property, test, particularIfFail) => {
    const result = await test(global.infoStorage[property])
    console.log(valuesObj)
    if (!valuesObj) [
        valuesObj = {}
    ]
    valuesObj[property] = null
    if (typeof result === 'number' && particularIfFail) {
        valuesObj[property] = particularIfFail
        return
    }

    valuesObj[property] = result 
    return valuesObj
}

const wrongBooleanNumber = (value) => {
    value = Number(value)
    if (typeof value !== 'number' || isNaN(value)) {
        return 2
    }

    if (value !== 0 && value !== 1) {
        return 2
    }

    return null
}

const wrongPath = (value) => {
    if (!value) return null

    if (typeof value !== 'string') {
        return 3
    }

    if (!fs.existsSync(value)) {
        return 4
    }

    return null
}

const wrongPathStrict = (value) => {
    if (typeof value !== 'string') {
        return 3
    }

    if (!fs.existsSync(value)) {
        return 4
    }

    return null
}

const expectAnything = (value) => {
    if (!value) return 3

    return null
}

const expectNothing = (value) => {
    return null
}

const expectANumber = (value) => {
    return typeof value === 'number' ? null : 3
}

const expectAString = (value) => {
    if (typeof value !== 'string') {
        return 3
    }

    return null
}

const expectAFloat = (value) => {
    if (typeof value !== 'number') {
        return 3
    }

    if (Number.isInteger(value)) {
        return 3
    }

    return null
}

exports.main = async (si, args) => {
    let suspectedValues = {
        theme: null
    }

    // 0 - Will crash
    // 1 - Possible cause of crash
    // 2 - Wrong value, stepmania will solve
    // 3 - Unusual Value, consequences unknown 
    // 4 - Value won't work
    // 5 - Experiment value
    
    suspectedValues = await addIfUnexpected(suspectedValues, "stepmaniaProductName", expectAnything, 1)
    suspectedValues = await addIfUnexpected(suspectedValues, "stepmaniaVersion", expectAnything, 1)
    suspectedValues = await addIfUnexpected(suspectedValues, "theme", expectAnything, 2)
    suspectedValues = await addIfUnexpected(suspectedValues, "additionalFolders", wrongPath, 2)
    suspectedValues = await addIfUnexpected(suspectedValues, "additionalSongFolders", wrongPath, 2)
    suspectedValues = await addIfUnexpected(suspectedValues, "additionalCourseFolders", wrongPath, 2)
    suspectedValues = await addIfUnexpected(suspectedValues, "announcer", expectNothing)
    suspectedValues = await addIfUnexpected(suspectedValues, "coinMode", expectAString, 3)
    suspectedValues = await addIfUnexpected(suspectedValues, "currentGame", expectAString, 3)
    suspectedValues = await addIfUnexpected(suspectedValues, "aspectRatio", expectANumber, 2)
    suspectedValues = await addIfUnexpected(suspectedValues, "colorDepth", expectANumber, 2)
    suspectedValues = await addIfUnexpected(suspectedValues, "height", expectANumber, 1)
    suspectedValues = await addIfUnexpected(suspectedValues, "width", expectANumber, 1)
    suspectedValues = await addIfUnexpected(suspectedValues, "fastload", wrongBooleanNumber, 2)
    suspectedValues = await addIfUnexpected(suspectedValues, "fastloadAdditionalSongs", wrongBooleanNumber, 2)
    suspectedValues = await addIfUnexpected(suspectedValues, "fastNoteRendering", expectANumber, 3)

    console.log(suspectedValues)
}
*/