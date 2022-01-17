let museum = new museum();
museum.initializeGallery();

function showInfoByClickButton(params) {
    alert(museum.pieces[0].gerDescription);
}