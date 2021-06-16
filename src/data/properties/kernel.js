exports.main = async (infoStorage) => {
    const kernel = infoStorage.get('kernel')

    if (!kernel) {
        return [1, 'kernel_undefined']
    }

    // I have no idea what to do with this.

    return [2, '']
}
