exports.main = async (infoStorage) => {
    const smoothLines = infoStorage.get('SmoothLines')

    if (!smoothLines) {
        return [0, 'smoothlines_undefined']
    }

    if (isNaN(smoothLines)) {
        return [0, 'smoothlines_NaN']
    }

    const correctSmoothLines = Number(smoothLines)

    if (correctSmoothLines > 1 || 0 > correctSmoothLines) {
        return [0, 'smoothlines_wrongnumber']
    }

    return [2, '']
}
