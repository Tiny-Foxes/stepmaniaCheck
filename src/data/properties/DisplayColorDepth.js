exports.main = async (infoStorage) => {
    const colorDepth = infoStorage.get('DisplayColorDepth')

    if (!colorDepth) {
        return [0, 'displaycolordepth_undefined']
    }

    if (isNaN(colorDepth)) {
        return [0, 'displaycolordepth_NaN']
    }

    // TODO: I don't know how this preference works.

    return [2, '']
}
