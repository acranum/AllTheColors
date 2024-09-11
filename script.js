
function rgbToHex(r, g, b) {
    function componentToHex(component) {
        let hex = component.toString(16); 
        return hex.length === 1 ? "0" + hex : hex; 
    }
    
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    
}
function generateHex() {
    var R = parseInt(document.getElementById('slider-value1').innerText, 10);
    var G = parseInt(document.getElementById('slider-value2').innerText, 10);
    var B = parseInt(document.getElementById('slider-value3').innerText, 10);

    let hex = rgbToHex(R,G,B);
    document.getElementById('hex').innerText = "hex: " + hex;
    document.body.style.backgroundColor = hex;
    console.log(hex);
}

let interval;
    var int = 10;
    let r = 0;
    let g = 0;
    let b = 0;
    let rtmp = 0;
    let gtmp = 0;
    let btmp = 0;
    let counter = 0;

function updateSliders() {
    document.getElementById('slider1').value = r;
    document.getElementById('slider2').value = g;
    document.getElementById('slider3').value = b;

    document.getElementById('slider-value1').innerText = r;
    document.getElementById('slider-value2').innerText = g;
    document.getElementById('slider-value3').innerText = b;

    document.getElementById('counter').innerText = counter + " of 16.777.216";
}


function startAnimation() {
    document.body.style.color = "#ffffff";
    clearInterval(interval);
    
    r = rtmp;
    g = gtmp;
    b = btmp;
    r++;
    g++;
    b++;
    r--;
    g--;
    b--;
    interval = setInterval(() => {
        b++;
        counter++;
        if (b > 255) {
            b = 0;
            g++;
            if (g > 255) {
                g = 0;
                r++;
                if (r > 255) {
                    r = 0;
                    g = 0;
                    b = 0;
                    rtmp = 0;
                    gtmp = 0;
                    btmp = 0;
                    updateSliders();
                    clearInterval(interval);
                    document.body.style.backgroundColor = '#000000';
                    return null;
                }
            }
        }
        
        updateSliders();
        r = r;
        let hex = rgbToHex(r, g, b);
        document.body.style.backgroundColor = hex;
        document.getElementById('hex').innerText = "Hex: " + hex;
    }, int);
}
function terminal(inp) {
    const inter = 'inter ;';
    const chvalR = 'change val r ;'
    const chvalG = 'change val g ;'
    const chvalB = 'change val b ;'

    if (inp.startsWith(inter)) {
        let rest = inp.substring(inter.length).trim();
        if (rest.length > 0 && !isNaN(rest.charAt(0))) {
            int = rest
            console.log(int);
        }
    }
    if (inp.startsWith(chvalR)) {
        let rest = inp.substring(chvalR.length).trim();
        console.log(rest)
        if (rest.length > 0 && !isNaN(rest.charAt(0))) {
            if (rest < 265) {
                rtmp = rest;
                console.log(r)
            }
        }
    }
    if (inp.startsWith(chvalG)) {
        let rest = inp.substring(chvalG.length).trim();
        if (rest.length > 0 && !isNaN(rest.charAt(0))) {
            if (rest < 265) {
                gtmp = rest;
            }
        }
    }
    if (inp.startsWith(chvalB)) {
        let rest = inp.substring(chvalB.length).trim();
        if (rest.length > 0 && !isNaN(rest.charAt(0))) {
            if (rest < 265) {
                btmp = rest;
            }
        }
    }
}