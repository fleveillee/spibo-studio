export class Canvas {
    protected width: number;
    protected height: number;
    protected element: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D | null;
    protected drawLoop: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.element = document.createElement("canvas");
        this.context = this.element.getContext("2d");
        document.body.appendChild(this.element);

        this.drawLoop = setTimeout(this.draw, 1000);
    }

    public getContext(): CanvasRenderingContext2D | null {
        return this.context;
    }

    public reset(): void {
        if (this.context) {
            this.context.setTransform(1, 0, 0, 1, 0, 0);
            this.context.clearRect(0, 0, this.width, this.height);
        }
    }

    public draw(): void {
        // this.element.
    }

}
