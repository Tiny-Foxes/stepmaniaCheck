exports.main = async (infoStorage) => {
    const themeErrors = infoStorage.get('ShowThemeErrors')

    if (!themeErrors) {
        return [0, 'themeerrors_undefined']
    }

    if (isNaN(themeErrors)) {
        return [0, 'themeerrors_NaN']
    }

    const correctThemeErrors = Number(themeErrors)

    if (correctThemeErrors > 1 || 0 > correctThemeErrors) {
        return [0, 'themeerrors_wrongnumber']
    }

    return [2, '']
}
