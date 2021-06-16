exports.main = async (infoStorage) => {
    const pointsandBlending = infoStorage.get('UsePointsandBlending')

    if (!pointsandBlending) {
        return [0, 'usepointsandblending_undefined']
    }

    if (isNaN(pointsandBlending)) {
        return [0, 'usepointsandblending_NaN']
    }

    if (pointsandBlending > 1 || 0 > pointsandBlending) {
        return [0, 'usepointsandblending_wrongnumber']
    }

    return [2, '']
}