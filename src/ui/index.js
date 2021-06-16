const chalk = require('chalk')
const chalkAnimation = require('chalk-animation')
const { table } = require('table')
const fs = require('fs')
const path = require('path')
const translation = require('./translate.js')

exports.Merine = class {
    constructor() {
        /**
         * The status of merine, if it's waiting for calls or working
         * 0 - idle
         * 1 - working
         */
        this.status = 1
        this.screen = 'loading'
        this.detailedStatus = 'Starting the program'
        this.animation = null
    }

    display(Data, order) {
        switch (this.screen) {
            case 'loading':
                if (order === 'stop') {
                    console.log('Wait...')
                    return;
                }
    
                let dash = '/'
                let str = ' Loading'
                let num = 0
                this.animation = chalkAnimation.karaoke('/ Loading', 2)
            
                const karaoke = setInterval(() => {
                    dash = ['/', '-'][num]
                    if (this.animation === null) {
                        clearInterval(karaoke)
                    } else {
                        this.animation.replace(dash + str)
                        num = num === 0 ? 1 : 0
                    }
                }, 1000);
            break
            case 'failed':
                console.log(chalk.red('Failed'))
                // console.clear()
            break
            case 'stats':
                console.clear()
                let displayData = [
                    ['Property', 'Value', 'Status']
                ]
                let displayFile = [
                    ['Property', 'Value', 'Status']
                ]
                const props = Data.properties
                for (let i = 0; i < props.length; i++) {
                    const propError = Data.getError(props[i])
                    displayFile[i+1] = [props[i], Data.getValue(props[i]), translation.translate(propError[1]) || translation.translate('correct')]
                    displayData[i+1] = [props[i], Data.getValue(props[i]), [chalk.red, chalk.yellow, chalk.green][propError[0]](translation.translate(propError[1]) || translation.translate('correct'))]
                }

                const version = Data.getValue('detectedStepmania') || 'Unknown'
                console.log(table(displayData, {
                    header: {
                        alignment: 'center',
                        content: `${version}\nSummary of ${version} install`
                    }
                }))

                const formated = table(displayFile, {
                    header: {
                        alignment: 'center',
                        content: `${version}\nSummary of ${version} install`
                    }
                })

                fs.writeFile(path.join(process.execPath, '../log.txt'), formated, { encoding: 'utf-8'}, (err) => {
                    if (err) {
                        console.log(err)
                        setTimeout(()=>{}, 9999)
                    }
                })
            break
            default:
            break
        }
    }
}