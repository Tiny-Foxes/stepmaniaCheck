exports.main = async (infoStorage) => {
    const textureRes = infoStorage.get('MaxTextureResolution')

    if (!textureRes) {
        return [0, 'maxtextureresolution_undefined']
    }

    if (isNaN(textureRes)) {
        return [0, 'maxtextureresolution_NaN']
    }

    const correctRes = Number(textureRes)

    if (correctRes > 1024) {
        return [1, 'maxtextureresolution_notrecommended']
    }

    return [2, '']
}
