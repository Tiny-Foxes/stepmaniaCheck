exports.main = async (infoStorage) => {
    const platform = infoStorage.get('platform')

    if (!platform) {
        return [1, 'platform_undefined']
    }

    // I have no idea what to do with this.

    return [2, '']
}
