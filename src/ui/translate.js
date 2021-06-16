const path = require('path')
const parser = require('ini-parser')

const translation = parser.parseFileSync(path.join(process.execPath, '../languages/en.ini'))

exports.translate = (str) => {
    return translation.translation[str] || str
}
