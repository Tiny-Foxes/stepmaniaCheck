exports.main = async (infoStorage) => {
    const refreshRate = infoStorage.get('RefreshRate')

    if (!refreshRate) {
        return [0, 'refreshrate_undefined']
    }

    if (isNaN(refreshRate)) {
        return [0, 'refreshrate_NaN']
    }

    // I don't know how to check monitor refresh rate without adding another package, and I'm not adding another package.

    return [2, '']
}
