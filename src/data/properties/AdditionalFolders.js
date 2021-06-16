const fs = require('fs')
exports.main = async (infoStorage) => {
    const additionalFolders = infoStorage.get('AdditionalFolders')

    if (!additionalFolders) {
        return [2, '']
    }

    if (!fs.existsSync(additionalFolders)) {
        return [0, 'additionalfolders_nullfolder']
    }

    return [2, '']
}
