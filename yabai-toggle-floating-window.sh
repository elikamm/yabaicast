#!/bin/bash

# @raycast.schemaVersion 1
# @raycast.title Toggle Floating Window
# @raycast.mode silent

# @raycast.icon yabai-icon.svg
# @raycast.packageName Yabai

# @raycast.author Elias Kamm
# @raycast.authorURL https://eliaskamm.com/

success=1

if [ $(yabai -m window --toggle float) != 0]
then
    success = 0
fi

if [ $(yabai -m window --move rel:25:25) != 0]
then
    success = 0
fi

if [ $(yabai -m window --resize bottom_right:-50:-50) != 0]
then
    success = 0
fi

if [ $success == 1 ]
then
    echo "toggled floating window"
else
    echo "error: could not toggle floating window"
fi
