exports.main = async (infoStorage) => {
    const showStats = infoStorage.get('ShowStats')

    if (!showStats) {
        return [0, 'showstats_undefined']
    }

    if (isNaN(showStats)) {
        return [0, 'showstats_NaN']
    }

    const correctShowStats = Number(showStats)

    if (correctShowStats > 1 || 0 > correctShowStats) {
        return [0, 'showstats_wrongnumber']
    }

    return [2, '']
}
