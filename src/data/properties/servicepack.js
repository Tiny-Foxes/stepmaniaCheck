exports.main = async (infoStorage) => {
    const pack = infoStorage.get('servicepack')

    if (!pack) {
        return [1, 'servicepack_undefined']
    }

    // I have no idea what to do with this.

    return [2, '']
}
