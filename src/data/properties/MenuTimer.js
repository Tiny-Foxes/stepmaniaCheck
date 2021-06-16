exports.main = async (infoStorage) => {
    const timer = infoStorage.get('MenuTimer')

    if (!timer) {
        return [0, 'timer_undefined']
    }

    if (isNaN(timer)) {
        return [0, 'timer_NaN']
    }

    const correctTimer = Number(timer)

    if (correctTimer > 1 || 0 > correctTimer) {
        return [0, 'timer_wrongnumber']
    }

    return [2, '']
}
