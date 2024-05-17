# yabaicast - yabai for raycast
**yabaicast** is a collection of [Raycast](https://www.raycast.com/) scripts for controlling [Yabai](https://github.com/koekeishiya/yabai) on macOS.
## Build
The **yabaicast** scripts are dynamically generated with a [Node.JS](https://nodejs.org/) script:
```
node generator.js
```
This will put the generated scripts in the current working directory. Add this directory to the Raycast extensions.

## HotKeys
I recommend the following key combinations for controlling Yabai. These need to be set up in Raycast.

| Combination | Script |
| - | - |
| ⌃ ⌥ B| ``Balance Space`` |
| ⌃ ⌥ R| ``Rotate Space Clockwise`` |
| ⌃ ⌥ ⇧ R| ``Rotate Space Counterclockwise`` |
| ⌃ ⌥ +| ``Toggle Floating Window`` |