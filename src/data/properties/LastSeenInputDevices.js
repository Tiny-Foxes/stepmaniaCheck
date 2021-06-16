exports.main = async (infoStorage) => {
    const inputDevices = infoStorage.get('LastSeenInputDevices')

    if (!inputDevices) {
        return [1, 'lastseeninputdevices_undefined']
    }

    return [2, '']
}
