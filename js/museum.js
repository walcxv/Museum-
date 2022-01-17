class museum {
    constructor() {
        this.pieces = [];
    }

    getPieces() {
        return this.pieces;

    }

    setPieces(pieces) {
        this.pieces = pieces;
    }

    initializeGalery() {
        let piece1 = new piece("./aca va la imagen", "");
        this.pieces.push(piece1);

    }


}