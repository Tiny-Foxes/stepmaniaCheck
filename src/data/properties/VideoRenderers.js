const isOutFox = (detectedStepmania, stepmaniaVersion) => {
    return detectedStepmania === '5.3' || stepmaniaVersion.includes('5.3')
}

exports.main = async (infoStorage) => {
    const videoRenderers = infoStorage.get('VideoRenderers')
    const detectedStepmania = infoStorage.get('detectedStepmania')
    const stepmaniaVersion = infoStorage.get('stepmaniaVersion')

    if (!videoRenderers) {
        return [0, 'videorenderers_undefined']
    }

    const renderers = videoRenderers.split(',')

    if (isOutFox(detectedStepmania, stepmaniaVersion) && renderers.includes('d3d')) {
        return [0, 'videorenderers_outfoxd3d']
    }

    if (!isOutFox(detectedStepmania, stepmaniaVersion) && renderers.includes('glad')) {
        return [1, 'videorenderers_gladoldersm']
    }

    return [2, '']
}
