exports.main = async (infoStorage) => {
    const vsync = infoStorage.get('Vsync')

    if (!vsync) {
        return [1, 'vsync_undefined']
    }

    const correctVsync = Number(vsync)
    
    if (isNaN(vsync)) {
        return [0, 'vsync_NaN']
    }

    if (correctVsync > 1 || 0 > correctVsync) {
        return [0, 'vsync_incorrectValue']
    }

    return [2, '']
}
