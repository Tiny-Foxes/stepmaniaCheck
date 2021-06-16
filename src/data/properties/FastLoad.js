exports.main = async (infoStorage) => {
    const fastLoad = infoStorage.get('FastLoad')

    if (!fastLoad) {
        return [1, 'fastload_undefined']
    }

    const correctFastload = Number(fastLoad)
    
    if (isNaN(correctFastload)) {
        return [0, 'fastload_NaN']
    }

    if (correctFastload > 1 || 0 > correctFastload) {
        return [0, 'fastload_incorrectValue']
    }

    return [2, '']
}
