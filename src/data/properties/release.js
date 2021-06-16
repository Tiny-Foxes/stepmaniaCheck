exports.main = async (infoStorage) => {
    const release = infoStorage.get('release')

    if (!release) {
        return [1, 'release_undefined']
    }

    // I have no idea what to do with this.

    return [2, '']
}
