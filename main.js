const electron = require('electron');
const url = require('url');
const path = require('path');
const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
let addWindow;

//SET ENVIRONMENT
process.env.NODE_ENV = "production";


//Listen for the app to be ready
app.on('ready', function () {
    //Create new window
    mainWindow = new BrowserWindow({ webPreferences: { nodeIntegration: true } });

    //Load html file into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Quit app when closed
    mainWindow.on('closed', function () {
        app.quit();
    });

    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Insert Menu
    Menu.setApplicationMenu(mainMenu);

});

//HandleCreateAddWindow
function createAddWindow() {
    //Create new window
    addWindow = new BrowserWindow({
        webPreferences: { nodeIntegration: true },
        width: 300,
        height: 200,
        title: 'Add Shopping List Item',
    });

    //Load html file into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Garbage collection handle
    addWindow.on('closed', function () {
        addWindow = null;
    })
}

// Catch item:add
ipcMain.on('item:add', function (e, item) {
    mainWindow.webContents.send('item:add', item);
    addWindow.close();
});

//Create menu template
const mainMenuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: 'Add Item',
                click() {
                    createAddWindow()
                }
            },
            {
                label: 'Clear Items',
                click() {
                    mainWindow.webContents.send('item:clear');
                }
            },
            {
                label: 'Quit',
                accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];

//If Mac, add empty label to menu array (because Electron will be first)
if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({ label: '' }); //Adds an empty object to the start of the array
}

//Add Developer tools item if not in production
if (process.env.NODE_ENV != 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle Devtools',
                accelerator: process.platform === 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}
