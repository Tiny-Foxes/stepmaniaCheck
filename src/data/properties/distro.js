exports.main = async (infoStorage) => {
    const distro = infoStorage.get('distro')

    if (!distro) {
        return [1, 'distro_undefined']
    }

    // I have no idea what to do with this.

    return [2, '']
}
