import St from 'gi://St';
import Gio from 'gi://Gio';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';

export default class MinimalLogoExtension extends Extension {
    enable() {
        this._activitiesButton = Main.panel.statusArea['activities'];
        if (this._activitiesButton) {
            this._activitiesButton.hide();
        }

        this._logoBox = new PanelMenu.Button(0.0, 'MinimalLogo', false);

        let iconPath = this.path + '/logo.svg';
        let gicon = Gio.Icon.new_for_string(iconPath);
        
        let icon = new St.Icon({
            gicon: gicon,
            style_class: 'system-status-icon',
            icon_size: 22
        });

        this._logoBox.add_child(icon);

        this._logoBox.connect('button-press-event', () => {
            Main.overview.toggle();
        });

        Main.panel.addToStatusArea('minimal-logo', this._logoBox, 0, 'left');
    }

    disable() {
        if (this._activitiesButton) {
            this._activitiesButton.show();
        }

        if (this._logoBox) {
            this._logoBox.destroy();
            this._logoBox = null;
        }
    }
}
