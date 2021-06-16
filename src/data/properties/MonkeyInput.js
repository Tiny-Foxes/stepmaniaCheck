exports.main = async (infoStorage) => {
    const monkey = infoStorage.get('MonkeyInput')

    if (!monkey) {
        return [0, 'monkey_undefined']
    }

    if (isNaN(monkey)) {
        return [0, 'monkey_NaN']
    }

    const correctMonkey = Number(monkey)

    if (correctMonkey > 1 || 0 > correctMonkey) {
        return [0, 'monkey_wrongnumber']
    }

    return [2, '']
}
