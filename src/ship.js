class Ship {
    constructor(name) {
        this.id = 0;
        this.name = name;
        this.hits = 0;
        this.sinkStatus = false;
        this.determineType(name);
        this.locations = [];
    }

    determineType(name) {
        switch(name) {
            case 'Carrier':
                this.length = 5;
                break;
            case 'Battleship':
                this.length = 4;
                break;
            case 'Cruiser':
                this.length = 3;
                break;
            case 'Submarine':
                this.length = 3;
                break;
            case 'Destroyer':
                this.length = 2;
                break;
            default:
                this.length = 0;
        }
    }

    hit() {
        this.hits += 1;
        console.log(`This ${this.name} has sustained ${this.hits} hits`);
        this.checkIfSunk();
    }

    checkIfSunk() {
        if (this.hits >= this.length){
            this.sinkStatus = true;
        }
    }    
}

export default Ship;