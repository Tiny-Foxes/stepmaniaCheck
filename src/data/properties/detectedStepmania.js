exports.main = async (infoStorage) => {
    const stepmania = infoStorage.get('detectedStepmania')

    if (!stepmania) {
        [1, 'detectedstepmania_unknown']
    }

    return [2, '']
}
