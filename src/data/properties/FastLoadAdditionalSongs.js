exports.main = async (infoStorage) => {
    const fastLoad = infoStorage.get('FastLoadAdditionalSongs')

    if (!fastLoad) {
        return [1, 'fastloadadditionalsongs_undefined']
    }

    const correctFastload = Number(fastLoad)
    
    if (isNaN(correctFastload)) {
        return [0, 'fastloadadditionalsongs_NaN']
    }

    if (correctFastload > 1 || 0 > correctFastload) {
        return [0, 'fastloadadditionalsongs_incorrectValue']
    }

    return [2, '']
}
