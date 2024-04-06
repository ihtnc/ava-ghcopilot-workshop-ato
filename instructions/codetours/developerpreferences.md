# Disable / Enable GitHub Copilot in VS Code / Visual Studio 2022

If you want to disable it for any reason, you can easily do so in Visual Studio Code.

Here's how you can disable or enable GitHub Copilot in Visual Studio Code:

1. Open Visual Studio Code.
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the command palette.
3. Type `Preferences: Open Settings (UI)` and select it from the list of options.
4. In the settings window, search for `GitHub Copilot`.
5. You will see an option to enable or disable GitHub Copilot. Toggle the switch to enable or disable it as needed.
6. Close the settings window.

> TODO: Check why GitHub Copilot Disable/Enable does not work in Visual Studio Code.

# Disabling by using the GitHub Copilot Icon at the bottom right corner.

1. Open Visual Studio Code.
2. Click the GitHub Copilot status icon in the bottom panel of the Visual Studio Code window.
3. When prompted, select 'Disable Globally' to disable GitHub Copilot globally. Alternatively, you can select 'Disable for LANGUAGE' to disable GitHub Copilot for the specified language.

# Toggling GitHub Copilot on and off for JetBrains IDEs

1. Open your JetBrains IDE.
2. Click the GitHub Copilot status icon in the bottom panel of the JetBrains window.
3. If you are disabling GitHub Copilot, you will be asked whether you want to disable it globally, or for the language of the file you are currently editing. To disable globally, click Disable Completions. Alternatively, click the language-specific button to disable GitHub Copilot for the specified language.

# Customizing your Key Bindings for GitHub Copilot

You can customize key bindings for GitHub Copilot commands in Visual Studio Code by rebinding the shortcuts in the Keyboard Shortcuts editor using your preferred keyboard shortcuts for each specific command. Here are the steps to do so:

1. In the menu bar, click Code, click Preferences, then click Keyboard Shortcuts.
2. In the "Keyboard Shortcuts" editor, search for the command name of the keyboard shortcut you want to change.
3. Next to the command you want to change, click the pencil icon.
4. Type the keystrokes you want to use for the command, then press Enter/Return.
5. Ensure that the key combination you select does not conflict with any other key bindings in Visual Studio Code.

## Example

1. Rebind `/explain` to Ctrl+E, X (Pressing Ctrl+E followed by X)
2. Rebind `/fix` to Ctrl+E, F (Pressing Ctrl+E followed by F)

These key bindings are useful if you frequently use any of these slash commands.
