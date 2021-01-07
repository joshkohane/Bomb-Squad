class Explosion {
    constructor() {
        this.COLORS = ["red", "#db0404", "#7d0303", "orange", "black"];
        this.DISTANCE = 500;
        this.x;
        this.y
    }

    chooseColor() {
        return this.COLORS[Math.floor(Math.random() * this.COLORS.length)];
    }

    chooseDistance() {
        const x = this.DISTANCE - Math.floor(Math.random() * this.DISTANCE * 2.5);
        const y = this.DISTANCE - Math.floor(Math.random() * this.DISTANCE * 2.5);
        return {x, y}
    }

    explode() {
        const container = document.getElementById("explosion-container");
        container.classList.add("start")
        for (let i = 0; i < 400; i++) {
            let div = document.createElement('div');
            div.className = "explosion-piece";
            div.style.backgroundColor = this.chooseColor();
            let thisPosition = this.chooseDistance();
            // div.style.transform = "translate(Math.floor(Math.random() * 100)vw, Math.floor(Math.random() * 100)vh)";
            container.appendChild(div);
            div.style.right = `${thisPosition.x}px`
            div.style.top = `${thisPosition.y}px`
        }
        setTimeout(() => container.classList.remove("start"), 0);
    }

    remove() {
        const container = document.getElementById("explosion-container");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
}

export default Explosion;