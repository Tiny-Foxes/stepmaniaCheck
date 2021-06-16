exports.main = async (infoStorage) => {
    const joystickMapping = infoStorage.get('UseOldJoystickMapping')

    if (!joystickMapping) {
        return [0, 'useoldjoystickmapping_undefined']
    }

    if (isNaN(joystickMapping)) {
        return [0, 'useoldjoystickmapping_NaN']
    }

    if (joystickMapping > 1 || 0 > joystickMapping) {
        return [0, 'useoldjoystickmapping_wrongnumber']
    }

    return [2, '']
}
