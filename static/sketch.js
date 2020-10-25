var c = document.getElementById("grid");
let width = 1000;
let height = 1000;
c.width = width;
c.height = height;
let gridSize = 1000 / 50;
let ctx = c.getContext("2d");

let objects = {
    brick: {
        htmlObject: document.getElementById("brick"),
        rules: ["grass", "brick"],
    },
    sky: {
        htmlObject: document.getElementById("sky"),
        rules: ["grass", "flower", "brick", "cloud1", "cloud2", "sky"],
    },
    cloud1: {
        htmlObject: document.getElementById("cloud1"),
        rules: ["sky", "flower", "cloud1", "cloud2"],
    },
    cloud2: {
        htmlObject: document.getElementById("cloud2"),
        rules: ["sky", "flower", "cloud1", "cloud2"],
    },
    dirt: {
        htmlObject: document.getElementById("dirt"),
        rules: ["dirt"],
    },
    exclamation: {
        htmlObject: document.getElementById("exclamation"),
        rules: ["brick"],
    },
    flower: {
        htmlObject: document.getElementById("flower"),
        rules: ["grass"],
    },
    grass: {
        htmlObject: document.getElementById("grass"),
        rules: ["dirt"],
    },
};

let options = [
    "brick",
    "sky",
    "cloud1",
    "cloud2",
    "dirt",
    "exclamation",
    "flower",
    "grass",
];

class gridComponent {
    constructor(options) {
        this.op = options;
        this.selected;
        this.nameOfObject;
    }

    selectObject(name) {
        this.selected = this.op.includes(name) ? objects[name] : null;
        this.nameOfObject = this.op.includes(name) ? name : "";
    }

    changeOptions(options) {
        this.op = options;
    }

    getOptions() {
        return this.op;
    }

    getSelected() {
        return this.nameOfObject;
    }
}

class Grid {
    constructor(sizeOfBlock, options, canvas, context) {
        this.grid = [];
        for (let i = 0; i < canvas.height / sizeOfBlock; i++) {
            let row = [];
            for (let j = 0; j < canvas.width / sizeOfBlock; j++) {
                row.push(new gridComponent(options));
            }
            this.grid.push(row);
        }
        this.canvas = canvas;
        this.context = context;
        this.size = sizeOfBlock;
    }

    display() {
        for (let i = 0; i < this.canvas.height / this.size; i++) {
            for (let j = 0; j < this.canvas.width / this.size; j++) {
                let img = objects[this.grid[i][j].getSelected()]["htmlObject"];
                this.context.drawImage(
                    img,
                    j * this.size,
                    i * this.size,
                    img.offsetWidth,
                    img.offsetHeight,
                    j * this.size,
                    i * this.size,
                    this.size,
                    this.size
                );
            }
        }
    }

    checkAvailable() {
        let lowestScore;
        let lowestPositions = [];
        for (let i = 0; i < this.canvas.height / this.size; i++) {
            for (let j = 0; j < this.canvas.width / this.size; j++) {
                if (this.grid[i][j].getSelected() != "") {}
            }
        }
    }

    buildGrid() {
        let gridExisting;
        for (let i = 0; i < this.canvas.height / this.size; i++) {
            for (let j = 0; j < this.canvas.width / this.size; j++) {
                gridExisting[i][j] = this.grid[i][j].getSelected();
            }
        }
    }
}

let myGrid = new Grid(50, options, c, ctx);
//myGrid.buildGrid();
//myGrid.display();