exports.main = async (infoStorage) => {
    const fastNote = infoStorage.get('FastNoteRendering')

    if (!fastNote) {
        return [0, 'fastnoterendering_undefined']
    }

    if (isNaN(fastNote)) {
        return [0, 'fastnoterendering_NaN']
    }

    return [2, '']
}
