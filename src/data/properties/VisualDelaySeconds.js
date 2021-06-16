exports.main = async (infoStorage) => {
    const delaySeconds = infoStorage.get('VisualDelaySeconds')

    if (!delaySeconds) {
        return [0, 'visualdelayseconds_undefined']
    }

    if (isNaN(delaySeconds)) {
        return [0, 'visualdelayseconds_NaN']
    }

    return [2, '']
}
