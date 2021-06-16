exports.main = async (infoStorage) => {
    const soundDevice = infoStorage.get('SoundDevice')

    if (!soundDevice) {
        return [1, 'sounddevice_nodevice']
    }

    return [2, '']
}
