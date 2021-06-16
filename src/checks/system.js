exports.main = async (Data, args, si) => {
    try {
        const system = await si.osInfo()
        Data.defineValue('platform',    system.platform)
        Data.defineValue('distro',      system.distro)
        Data.defineValue('release',     system.release)
        Data.defineValue('codename',    system.codename)
        Data.defineValue('kernel',      system.kernel)
        Data.defineValue('arch',        system.arch)
        Data.defineValue('build',       system.build)
        Data.defineValue('servicepack', system.servicepack)

        return Data.infoStorage
    } catch (e) {
        console.error('Unexpected error when calling OS info: ', e.toString())
        return null
    }
}