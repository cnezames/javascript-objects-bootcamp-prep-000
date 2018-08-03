var playlist = {artistName: 'songTitle'}

function updatePlaylist(playlist, artistName, songTitle) {
  return object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {

}
