const errors = require('./errors.js')
exports.DataInfo = class extends errors.DetectErrors {
  constructor() {
    super()
    this.infoStorage = new Map(),
    this.properties = [
        'platform',
        'distro',
        'release',
        'codename',
        'kernel',
        'arch',
        'build',
        'servicepack',
        'detectedStepmania',
        'stepmaniaProductName',
        'stepmaniaVersion',
        'stepmaniaManufacturer',
        'portable',
        'AdditionalCourseFolders',
        'AdditionalFolders',
        'AdditionalSongFolders',
        'Announcer',
        'CoinMode',
        'CurrentGame',
        'DisplayAspectRatio',
        'DisplayColorDepth',
        'DisplayHeight',
        'DisplayWidth',
        'FastLoad',
        'FastLoadAdditionalSongs',
        'FastNoteRendering',
        'ImageCache',
        'Language',
        'LastSeenInputDevices',
        'LastSeenMemory',
        'LastSeenVideoDriver',
        'LifeDifficultyScale',
        'MaxTextureResolution',
        'MenuTimer',
        'MonkeyInput',
        'MovieColorDepth',
        'MuteActions',
        'OnlyDedicatedMenuButtons',
        'PercentageScoring',
        'RefreshRate',
        'ShowMouseCursor',
        'ShowSongOptions',
        'ShowStats',
        'ShowThemeErrors',
        'SmoothLines',
        'SoundDevice',
        'SoundDrivers',
        'SoundVolume',
        'TextureColorDepth',
        'Theme',
        'UseOldJoystickMapping',
        'UsePointsandBlending',
        'UseUnlockSystem',
        'VideoRenderers',
        'VisualDelaySeconds',
        'Vsync',
        'Windowed',
    ]
  }

  toDefault(property) {
    this.infoStorage.delete(property)
    this.infoStorage.set(property, null)

    return this.infoStorage
  }

  async allPropertyToDefault() {
    for (let i = 0; i < this.properties.length; i++) {
      this.toDefault(this.properties[i])
    }

    return this.properties
  }

  defineValue(property, value) {
    this.infoStorage.set(property, value)
    return this.infoStorage
  }

  getValue(property) {
    return this.infoStorage.has(property)
      ? this.infoStorage.get(property)
      : null
  }
}
