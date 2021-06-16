exports.main = async (infoStorage) => {
    const image = infoStorage.get('ImageCache')

    if (!image) {
        return [0, 'imagecache_undefined']
    }

    const expectedValues = ['Off', 'On']

    if (!expectedValues.includes(image)) {
        return [0, 'imagecache_wrongvalue']
    }

    return [2, '']
}
