exports.main = async (infoStorage) => {
    const menuButtons = infoStorage.get('OnlyDedicatedMenuButtons')

    if (!menuButtons) {
        return [0, 'onlydedicatedmenubuttons_undefined']
    }

    if (isNaN(menuButtons)) {
        return [0, 'onlydedicatedmenubuttons_NaN']
    }

    const correctMenuButtons = Number(menuButtons)

    if (correctMenuButtons > 1 || 0 > correctMenuButtons) {
        return [0, 'onlydedicatedmenubuttons_wrongnumber']
    }

    return [2, '']
}
