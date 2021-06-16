exports.main = async (infoStorage) => {
    const game = infoStorage.get('CurrentGame')

    if (!game) {
        return [0, 'currentgame_undefined']
    }

    // TODO: Do you have a list of all the games supported in NotITG and SM5 and OutFox and Etterna? I don't.

    return [2, '']
}
