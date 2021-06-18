# stepmaniaCheck

## Introduction

StepMania check is console program made to log information about given StepMania installation.

As of now, only Windows 7 64-bit is supported, while it's possible to compile the code for linux and mac it was not been tested yet, if you're able to please follow the building tutorial.

## Setup

After downloading the latest release, open `config.ini` and edit the needed preferences.

- stepmaniaPath (REQUIRED)

    The path to your stepmania installation folder (outside of the program folder).

- savePath (REQUIRED if there's no 'portable.ini' inside stepmania installation folder)

    The path to the save folder of your stepmania installation.

- preferenceName (Required for NotITG)

    The name of Preferences.ini for given stepmania installation.

- programName (Required for when the executable is not named stepmania)

    The name of the main executable of the stepmania installation.

- programDataName (Required if savePath is not given)

    The name of the save folder of your stepmania in appdata of your OS.

- clearConsole

    Use for debugging only, makes so console is never cleared.

After executing the program and the table is shown, the content will be written on `log.txt`, it's useful for sharing on Discord. **(copy the file itself, not the content inside it)**
## Supported StepMania

stepmaniaCheck officialy supports any version of SM5+, NotITG and OpenITG. Older versions and forks might work but they haven't been tested.

### Config Examples

#### [Project OutFox](https://projectmoon.dance/)

```Ini
stepmaniaPath=C:/Games/StepMania OutFox 5.3
```

#### StepMania 5.1

```Ini
stepmaniaPath=C:/Games/StepMania 5.1

# If you have portable enabled then this is not needed
savePath=C:\Users\USERNAME\AppData\Roaming\StepMania 5.1\Save
```

#### StepMania 5

```Ini
stepmaniaPath=C:/Games/StepMania 5

# If you have portable enabled then this is not needed
savePath=C:\Users\USERNAME\AppData\Roaming\StepMania 5\Save
```
#### NotITG

```Ini
stepmaniaPath=C:/Games/NotITG
savePath=C:/Games/NotITG/Data
preferenceName=StepMania
```

## Building

stepmaniaCheck uses [pkg](https://www.npmjs.com/package/pkg) to bundle its releases. Only 64 bit versions were able to be built as unknown errors appears while bulding 32 bit executables. It will be required to require [fs](https://nodejs.org/api/fs.html) package inside of ini-parser package as it assumes its a global.
### Steps

Make sure you have at least NodeJS 14 installed.
Have [pkg](https://www.npmjs.com/package/pkg) **globally**

1. Clone the repository
2. Open your console inside of the clonned repository
3. To build you can use `npm run buildWin` to build just like the current releases or `pkg -t node14-OS-ARCH .` (see the target options [here](https://github.com/nodejs/node/blob/HEAD/BUILDING.md#platform-list))