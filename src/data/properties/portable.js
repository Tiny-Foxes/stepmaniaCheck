exports.main = async (infoStorage) => {
    const portable = infoStorage.get('portable')

    if (!portable) {
        return [0, 'portable_undefined']
    }

    if (typeof portable !== 'boolean') {
        return [0, 'portable_broke']
    }

    return [2, '']
}
