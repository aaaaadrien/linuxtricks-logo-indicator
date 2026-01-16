# LOGO Activities Indicator for GNOME Shell

## Overview
This is a minimalist extension for GNOME Shell. It displays logo.svg in your GNOME Shell top bar instead of Activities logo.

## Compatibility

Known supported versions of GNOME:
- 49
- 48
- 47
- 46
- 45

It may be compatible with older versions, but no tests have been conducted to confirm this.

## Installation

Install via downloading this repository. 

```bash
cd /tmp
git clone https://github.com/aaaaadrien/linuxtricks-logo-indicator.git
cd linuxtricks-logo-indicator
./install.sh
```
Once done, manually restart the GNOME Shell for the changes to take effect. On **X** you can do this by pressing 
`Alt+F2`, typing `r`, and pressing `Enter`. On **Wayland**, simply log out and back in.

The `install.sh` script copies the extension files to your local GNOME extensions directory. Once GNOME restarts, you can manage extension via Extensions app.

