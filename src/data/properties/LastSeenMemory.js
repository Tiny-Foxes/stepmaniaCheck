exports.main = async (infoStorage) => {
    const memory = infoStorage.get('LastSeenMemory')

    if (!memory) {
        return [0, 'lastseenmemory_undefined']
    }

    if (isNaN(memory)) {
        return [0, 'lastseenmemory_NaN']
    }

    const correctMemory = Number(memory)

    if (256 > correctMemory) {
        return [0, 'lastseenmemory_lowminimummemory']
    }

    if (1000 > correctMemory) {
        return [1, 'lastseenmemory_lowrecommendedmemory']
    }

    return [2, '']
}
