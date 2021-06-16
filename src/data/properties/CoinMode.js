exports.main = (infoStorage) => {
    const coinMode = infoStorage.get('CoinMode')

    if (!coinMode) {
        return [0, 'coinmode_undefined']
    }

    const knownModes = ['home', 'free']

    if (!knownModes.includes(coinMode.toLowerCase())) {
        return [0, 'coinmode_unknownmode']
    }

    return [2, '']
}
