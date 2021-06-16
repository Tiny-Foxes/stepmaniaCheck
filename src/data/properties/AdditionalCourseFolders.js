const fs = require('fs')
exports.main = async (infoStorage) => {
    const additionalCourseFolders = infoStorage.get('AdditionalCourseFolders')

    if (!additionalCourseFolders) {
        return [2, '']
    }

    if (!fs.existsSync(additionalCourseFolders)) {
        return [0, 'additionalcoursefolders_nullfolder']
    }

    return [2, '']
}
