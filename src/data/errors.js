exports.DetectErrors = class {
    constructor() {
        this.errors = new Map()
        this.knownCheck = require('./properties/index.js').checks
    }

    // Errors:
    // 0 = Wrong value
    // 1 = Unusual value
    // 2 = Correct value

    unknown(value) {
        return [2, '']
    }

    reset(property) {
        this.errors.delete(property)
    
        return this.errors
      }
    
    async clearErrors() {
        for (let i = 0; i < this.errors.size; i++) {
            await this.toDefault(Array.from(this.errors.keys())[i])
        }
        
    
        return this.properties
    }
    
    async checkForErrors(infoStorage, property, args) {
        const availableChecks = Object.keys(this.knownCheck)

        if (!availableChecks.includes(property)) {
            // console.log(`\n\n${availableChecks} is missing ${property}\n\n`)
            this.errors.set(property, [2, 'Unknown'])
            return [2, 'Unknown']
        }

        const file = this.knownCheck[property]
        
        const result = await file.main(infoStorage, args)

        this.errors.set(property, result)
        
        return result
    }

    getError(property) {
        return this.errors.has(property) ? this.errors.get(property) : null
    }
}