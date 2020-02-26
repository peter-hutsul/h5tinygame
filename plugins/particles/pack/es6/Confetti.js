var PI = Math.PI,
random = Math.random,
cos = Math.cos,
sin = Math.sin;

var DEG_TO_RAD = PI / 180,
    colors = [
        ["#df0049", "#660671"],
        ["#00e857", "#005291"],
        ["#2bebbc", "#05798a"],
        ["#ffd200", "#b06c00"]
    ];


export default class ConfettiParticle extends Tiny.Particle {
    constructor( emitter ) {

        super( emitter );

        this.rotationSpeed = (random() * 600 + 800);
        var angle = DEG_TO_RAD * random() * 360;
        this.rotationpart = DEG_TO_RAD * random() * 360;
        this.cosA = 1.0;
        this.size = 10.0;
        this.oscillationSpeed = (random() * 1.5 + 0.5);
        this.xSpeed = 80.0;
        this.ySpeed = (random() * 60 + 50.0);
        this.corners = new Array();
        this.time = random();
        var ci = Math.round(random() * (colors.length - 1));
        this.frontColor = colors[ci][0];
        this.backColor = colors[ci][1];
        for (var i = 0; i < 4; i++) {
            var dx = cos(angle + DEG_TO_RAD * (i * 90 + 45));
            var dy = sin(angle + DEG_TO_RAD * (i * 90 + 45));
            this.corners[i] = {x: dx, y: dy}
        }

    }

    
    _update ( delta ) {
        if (this.visible === false) return false

        this.lifespan -= delta;

        if (this.lifespan <= 0)
        {
            this.visible = false
            return false;
        }

        delta = delta * 0.001

        this.time += delta;
        this.rotationpart += this.rotationSpeed * delta;
        this.cosA = cos(DEG_TO_RAD * this.rotationpart);
        this.x += cos(this.time * this.oscillationSpeed) * this.xSpeed * delta
        this.y += this.ySpeed * delta;
    }

    _renderCanvas (renderSession) {
        if (this.visible === false || this.alpha === 0) return;

        if (this.cosA > 0) {
            renderSession.context.fillStyle = this.frontColor;
        } else {
            renderSession.context.fillStyle = this.backColor;
        }
        renderSession.context.beginPath();
        renderSession.context.moveTo((this.x + this.corners[0].x * this.size), (this.y + this.corners[0].y * this.size * this.cosA));
        for (var i = 1; i < 4; i++) {
            renderSession.context.lineTo((this.x + this.corners[i].x * this.size), (this.y + this.corners[i].y * this.size * this.cosA));
        }
        renderSession.context.closePath();
        renderSession.context.fill();

    }
}