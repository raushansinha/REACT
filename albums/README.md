React Native boots up
RN decides to render app to the screen
App decides to render itself, Header, and AlbumList
AlbumList realizes its about to rendered, calls componentWillMount
AlbumList makes HTTP request
App, AlbumList, Header appear on screen
.
.
.
HTTP request returns JSON data
