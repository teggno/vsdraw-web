markdown want have drawing

possible worklfow for add new

1. keyboard shortcut: draw
2. browser opens with some website that allows for drawing
3. copy drawing url as markdown
4. go back to vscode and insert

possible workflow for edit

1. have cursor inside drawing link in markdown
2. keyboard shortcut or some light bulb thingy for edit
3. url opens up for edit (url that is a png or jpg url must be converted to go back to the editor)
4. do changes ...

implementation

- Editor online that saves image data automatically
- copy as md link button
  - stores data in cloud (API)
  - generates jpg or png link and returns that (API, API endpoint returning the image for that link)
  - page js wraps link with markdown and to clipboard
  - editing: vscode extension changes the link to editable url

API

- receive editable image data + image, return json containing editable and image link
- receive editable link, return editable data
- receive image link, return image

Roadmap:

- multi device editing (i.e. code on mac, draw on ipad)
  1. vscode extension: log in
  2. vscode extension: hit edit
  3. ipad website: log in
  4. ipad website: popup if want to start editing
- vscode plugin downloads image and puts into project

## Widgets

drawerjs
literally canvas
react-sketch

![alt text](https://vsdraw.blob.core.windows.net/image/e6ec9844-2c6d-437e-a698-db7648c61e78.png)

![alt text](https://vsdraw.blob.core.windows.net/image/c96f779a-ae64-41db-acb2-c4058a142a4f.png)

![alt text](https://vsdraw.blob.core.windows.net/image/5a189657-9a0d-46cc-9c22-53977d117d78.png)
