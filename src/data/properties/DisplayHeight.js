exports.main = async (infoStorage) => {
    const height = infoStorage.get('DisplayHeight')

    if (!height) {
        return [0, 'displayheight_undefined']
    }

    if (isNaN(height)) {
        return [0, 'displayheight_NaN']
    }

    return [2, '']
}
