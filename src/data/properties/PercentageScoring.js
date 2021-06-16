exports.main = async (infoStorage) => {
    const percentageScoring = infoStorage.get('PercentageScoring')

    if (!percentageScoring) {
        return [0, 'percentagescoring_undefined']
    }

    if (isNaN(percentageScoring)) {
        return [0, 'percentagescoring_NaN']
    }

    const correctSmoothlines = Number(percentageScoring)

    if (correctSmoothlines > 1 || 0 > correctSmoothlines) {
        return [0, 'percentagescoring_wrongnumber']
    }

    return [2, '']
}
