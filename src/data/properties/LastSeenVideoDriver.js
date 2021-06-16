exports.main = async (infoStorage) => {
    const videoDriver = infoStorage.get('LastSeenVideoDriver')

    if (!videoDriver) {
        return [1, 'lastseenvideodriver_undefined']
    }

    return [2, '']
}
