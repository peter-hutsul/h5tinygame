Tiny.VERSION = "1.0.2" 

Tiny.PI_2 = Math.PI * 2
Tiny._UID = 0
Tiny.RETINA_PREFIX = '@2x'


Tiny.Primitives = {
    POLY: 0,
    RECT: 1, 
    CIRC: 2,
    ELIP: 3,
    RREC: 4,
    RREC_LJOIN: 5
}

Tiny.blendModes = {
    NORMAL: 0
}

Tiny.scaleModes = {
	DEFAULT: 0
}

Tiny.ScaleManager = {
    NORMAL: 0,
    SHOW_ALL: 1
}

Tiny.hex2rgb = function(hex) {
    return [(hex >> 16 & 0xFF) / 255, ( hex >> 8 & 0xFF) / 255, (hex & 0xFF)/ 255];
};

Tiny.rgb2hex = function(rgb) {
    return ((rgb[0]*255 << 16) + (rgb[1]*255 << 8) + rgb[2]*255);
};

Tiny.getNextPowerOfTwo = function(number)
{
    if (number > 0 && (number & (number - 1)) === 0)
        return number;
    else
    {
        var result = 1;
        while (result < number) result <<= 1;
        return result;
    }
};

Tiny.isPowerOfTwo = function(width, height)
{
    return (width > 0 && (width & (width - 1)) === 0 && height > 0 && (height & (height - 1)) === 0);
};
