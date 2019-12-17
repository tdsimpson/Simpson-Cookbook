import React, { Component } from 'react';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
const Menu = electron.remote.Menu;

class App extends Component {

  state = {
    posts: []
  }
  componentDidMount() {
    this.initMenu();
  }

  showImage = image => {
    ipcRenderer.send('toggle-image', image);
  }

  initMenu = () => {
    const menu = Menu.buildFromTemplate([
      {
        label: "",
      },
      {
        label: "File",
        submenu: [
          { label: "New Window" },
          {
            label: "Settings",
            accelerator: "CmdOrCtrl+,",
            click: () => {
              ipcRenderer.send("toggle-settings");
            }
          },
          { type: "separator" },
          {
            label: "Quit",
            accelerator: "CmdOrCtrl+Q"
          }
        ]
      },
    ]);

    Menu.setApplicationMenu(menu);
  }

  render() {
    return (
      <div className="App">
        <p>HOME COMPONENT</p>
      </div>
    );
  }
}

export default App;
