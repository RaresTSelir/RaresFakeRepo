class SketchPad {
    constructor(container, size=400){
        this.canvas=document.createElement("canvas");
        this.canvas.width=size;
        this.canvas.height=size;
        this.canvas.style=`
            background-color:white;
            box-shadow: 0px 0px 10px 2px black;
        `;
    container.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d");

    // this.path=[];
    this.paths=[];
    this.isDrawing=false;

    this.#addEventListeners();
    }

    #addEventListeners(){
        this.canvas.onmousedown = (evt) => {
            const mouse = this.#getMouse(evt);
            // path-ul care va reprezenta desenul
            // this.path=[mouse];
            this.paths.push([mouse]);
            this.isDrawing=true;      
        }

        this.canvas.onmousemove = (evt) => {
            if (this.isDrawing){
                const mouse = this.#getMouse(evt);
                    // this.path.push(mouse);
                    this.paths[this.paths.length-1].push(mouse);
                    this.#redraw();
                    console.log(this.paths.length);
            }
        }

        this.canvas.onmouseup = () => {
            this.isDrawing = false;
        }
    }

    #redraw(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        // obiect utilitar "draw"
        draw.paths(this.ctx, this.paths);
    }

    // functia pentru obtinerea pozitiei mouseului
    #getMouse = (evt) => {
        const rect = this.canvas.getBoundingClientRect();
        return [
                    Math.round(evt.clientX - rect.left),
                    Math.round(evt.clientY - rect.top)
                ]
    }
}