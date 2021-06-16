exports.main = async (infoStorage) => {
    const width = infoStorage.get('DisplayWidth')

    if (!width) {
        return [0, 'displaywidth_undefined']
    }

    if (isNaN(width)) {
        return [0, 'displaywidth_NaN']
    }

    // This packages exists https://www.npmjs.com/package/screenres but I'm not using it.
    
    return [2, '']
}
