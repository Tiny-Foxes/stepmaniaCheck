exports.main = async (infoStorage) => {
    const version = infoStorage.get('stepmaniaVersion')
    const platform = infoStorage.get('platform')

    if (!platform.includes('win')) {
        return [2, 'platform_winonly']
    }

    if (!version) {
        return [1, 'stepmaniaversion_donttrust']
    }

    return [2, '']
}
