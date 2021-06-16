const fs = require('fs')
exports.main = async (infoStorage) => {
    const additionalSongFolders = infoStorage.get('AdditionalSongFolders')

    if (!additionalSongFolders) {
        return [2, '']
    }

    if (!fs.existsSync(additionalSongFolders)) {
        return [0, 'additionalsongfolders_nullpath']
    }

    return [2, '']
}
