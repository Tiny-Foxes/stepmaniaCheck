exports.main = async (infoStorage) => {
    const arch = infoStorage.get('arch')

    if (!arch) {
        return [1, 'arch_undefined']
    }

    // I have no idea what to do with this.

    return [2, '']
}
