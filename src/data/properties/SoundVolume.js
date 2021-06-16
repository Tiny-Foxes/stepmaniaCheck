exports.main = async (infoStorage) => {
    const soundvolume = infoStorage.get('SoundVolume')

    if (!soundvolume) {
        return [1, 'soundvolume_undefined']
    }

    const correctsoundvolume = Number(soundvolume)
    
    if (isNaN(soundvolume)) {
        return [0, 'soundvolume_NaN']
    }

    if (correctsoundvolume > 1 || 0 > correctsoundvolume) {
        return [0, 'soundvolume_incorrectValue']
    }

    return [2, '']
}
