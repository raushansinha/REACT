React Native boots up
RN decides to render app to the screen
App decides to render itself, Header, and AlbumList
AlbumList gets initial state of { slbums: [] }
AlbumList realizes its about to rendered, calls componentWillMount
AlbumList makes HTTP request
AlbumList's render method is called
App, AlbumList, Header appear on screen
.
.
.
HTTP request returns JSON data
Request handler calls 'setState'
AlbumList's render method is called
