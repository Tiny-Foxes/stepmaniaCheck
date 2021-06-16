exports.main = async (infoStorage) => {
    const unlockSystem = infoStorage.get('UseUnlockSystem')

    if (!unlockSystem) {
        return [0, 'useunlocksystem_undefined']
    }

    if (isNaN(unlockSystem)) {
        return [0, 'useunlocksystem_NaN']
    }

    if (unlockSystem > 1 || 0 > unlockSystem) {
        return [0, 'useunlocksystem_wrongnumber']
    }

    return [2, '']
}
