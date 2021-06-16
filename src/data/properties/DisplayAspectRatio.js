exports.main = async (infoStorage) => {
    const aspectRatio = infoStorage.get('DisplayAspectRatio')

    if (!aspectRatio) {
        return [0, 'displayaspectratio_undefined']
    }

    if (isNaN(aspectRatio)) {
        return [0, 'displayaspectratio_NaN']
    }

    // TODO: Hm, a better check here would be appreciated but I'm def not the one who will do it.
    return [2, '']
}
