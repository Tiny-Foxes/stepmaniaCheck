exports.main = async (infoStorage) => {
    const soundDrivers = infoStorage.get('SoundDrivers')

    if (!soundDrivers) {
        return [1, 'sounddrivers_nodriver']
    }

    return [2, '']
}
