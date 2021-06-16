exports.main = async (infoStorage) => {
    const lifeDifficulty = infoStorage.get('LifeDifficultyScale')

    if (!lifeDifficulty) {
        return [0, 'lifedifficultyscale_undefined']
    }

    if (isNaN(lifeDifficulty)) {
        return [0, 'lifedifficultyscale_NaN']
    }

    const correctDifficulty = Number(lifeDifficulty)

    if (correctDifficulty > 1.600000) {
        return [1, 'lifedifficultyscale_higherthanusual']
    }

    if (0.400000 > correctDifficulty) {
        return [1, 'lifedifficultyscale_lowerthanusual']
    }

    return [2, '']
}

// Lowest: 0.400000
// Highest: 1.600000