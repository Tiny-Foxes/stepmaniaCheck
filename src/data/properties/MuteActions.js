exports.main = async (infoStorage) => {
    const muteActions = infoStorage.get('MuteActions')

    if (!muteActions) {
        return [0, 'muteactions_undefined']
    }

    if (isNaN(muteActions)) {
        return [0, 'muteactions_NaN']
    }

    const correctMuteActions = Number(muteActions)

    if (correctMuteActions > 1 || 0 > correctMuteActions) {
        return [0, 'muteactions_wrongnumber']
    }

    return [2, '']
}
