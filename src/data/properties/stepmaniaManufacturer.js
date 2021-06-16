exports.main = async (infoStorage) => {
    const manufacturer = infoStorage.get('stepmaniaManufacturer')
    const platform = infoStorage.get('platform')

    if (!platform.includes('win')) {
        return [2, 'platform_winonly']
    }

    if (!manufacturer) {
        return [1, 'stepmaniamanufacturer_donttrust']
    }

    return [2, '']
}
