exports.main = async (infoStorage) => {
    const windowed = infoStorage.get('Windowed')

    if (!windowed) {
        return [1, 'windowed_undefined']
    }

    const correctWindowed = Number(windowed)
    
    if (isNaN(correctWindowed)) {
        return [0, 'windowed_NaN']
    }

    if (correctWindowed > 1 || 0 > correctWindowed) {
        return [0, 'windowed_incorrectValue']
    }

    return [2, '']
}
