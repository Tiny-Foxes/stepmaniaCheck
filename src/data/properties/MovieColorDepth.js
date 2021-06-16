exports.main = async (infoStorage) => {
    const colorDepth = infoStorage.get('MovieColorDepth')

    if (!colorDepth) {
        return [0, 'moviecolordepth_undefined']
    }

    // TODO: I don't know how this preference works.

    return [2, '']
}
