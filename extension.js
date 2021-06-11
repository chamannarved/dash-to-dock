// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-

try {
  const SearchController = imports.ui.searchController;
} catch (err) {
  log("SearchController doesn't exist");
}

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Docking = Me.imports.docking;

// We declare this with var so it can be accessed by other extensions in
// GNOME Shell 3.26+ (mozjs52+).
var dockManager;

function init() {
  ExtensionUtils.initTranslations("dashtodock");
}

function enable() {
  new Docking.DockManager();
}

function disable() {
  dockManager.destroy();
}
