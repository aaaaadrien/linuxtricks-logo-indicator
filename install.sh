#!/bin/bash
EXTENSION_PATH="$HOME/.local/share/gnome-shell/extensions/linuxtricks-logo-indicator@aaaaadrien.github.com"

mkdir -p $EXTENSION_PATH
cp ./src/extension.js "$EXTENSION_PATH/"
cp ./src/metadata.json "$EXTENSION_PATH/"

if [ ! -f "$EXTENSION_PATH/logo.svg" ]
then
    cp ./src/logo.svg "$EXTENSION_PATH/"
fi

# Restart GNOME Shell
echo "Restart the gnome-shell and enable extension in gnome-extensions."
