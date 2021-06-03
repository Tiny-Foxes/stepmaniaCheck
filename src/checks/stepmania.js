const fs = require('fs-extra')
const path = require('path')
const structures = {
    "5.3": [
        'Announcers',
        'Apperance',
        'BackgroundEffects',
        'BackgroundTransitions',
        'BGAnimations',
        'Characters',
        'Courses',
        'Data',
        'Docs',
        'Packages',
        'Program',
        'Scripts',
        'Songs'
    ],
    "5.1": [
        'Announcers',
        'BackgroundEffects',
        'BackgroundTransitions',
        'BGAnimations',
        'Characters',
        'Courses',
        'Data',
        'Docs',
        'NoteSkins',
        'Program',
        'Scripts',
        'Songs',
        'Themes'
    ],
    "5.0": [
        'Announcers',
        'BackgroundEffects',
        'BackgroundTransitions',
        'BGAnimations',
        'Characters',
        'Courses',
        'Data',
        'Docs',
        'NoteSkins',
        'Program',
        'Scripts',
        'Songs',
        'Themes'
    ]
}
exports.main = async (si, args) => {
    const stepmaniaPath = args[0]

    if (!fs.existsSync(stepmaniaPath)) {
        console.log('Installation path does not exist, giving up.')
        return null
    }

    fs.readdir(stepmaniaPath)
}