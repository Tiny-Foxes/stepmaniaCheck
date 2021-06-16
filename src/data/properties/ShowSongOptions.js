exports.main = async (infoStorage) => {
    const songOptions = infoStorage.get('ShowSongOptions')

    if (!songOptions) {
        return [0, 'showsongoptions_undefined']
    }

    const expectedValues = ['Ask', 'Hide', 'Show']

    if (!expectedValues.includes(songOptions)) {
        return [0, 'showsongoptions_wrongvalue']
    }

    return [2, '']
}
