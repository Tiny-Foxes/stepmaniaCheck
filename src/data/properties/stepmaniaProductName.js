exports.main = async (infoStorage) => {
    const smProduct = infoStorage.get('stepmaniaProductName')
    const platform = infoStorage.get('platform')

    if (!platform.includes('win')) {
        return [2, 'platform_winonly']
    }

    if (!smProduct) {
        return [1, 'stepmaniaplatform_donttrust']
    }

    return [2, '']
}
