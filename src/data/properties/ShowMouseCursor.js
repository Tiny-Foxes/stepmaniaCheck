exports.main = async (infoStorage) => {
    const showMouse = infoStorage.get('ShowMouseCursor')

    if (!showMouse) {
        return [0, 'showmouse_undefined']
    }

    if (isNaN(showMouse)) {
        return [0, 'showmouse_NaN']
    }

    const correctShowMouse = Number(showMouse)

    if (correctShowMouse > 1 || 0 > correctShowMouse) {
        return [0, 'showmouse_wrongnumber']
    }

    return [2, '']
}
