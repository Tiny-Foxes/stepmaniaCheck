exports.main = async (infoStorage) => {
    const build = infoStorage.get('build')

    if (!build) {
        return [1, 'build_undefined']
    }

    // I have no idea what to do with this.

    return [2, '']
}
