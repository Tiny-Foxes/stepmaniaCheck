exports.main = async (si) => {
    try {
        const system = await si.osInfo()
        global.infoStorage.platform = system.platform
        global.infoStorage.distro = system.distro
        global.infoStorage.release = system.release
        global.infoStorage.codename = system.codename
        global.infoStorage.kernel = system.kernel
        global.infoStorage.arch = system.arch
        global.infoStorage.build = system.build
        global.infoStorage.servicepack = system.servicepack

        return global.infoStorage
    } catch (e) {
        console.error('Unexpected error when calling OS info: ', e.toString())
        return null
    }
}