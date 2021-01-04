let image_heart = [[0, 1, 0, 1, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]]
function ShowImage(imgarray: number[][]) {
    let counter = 0
    //  Bypass for micro:bit not supporting the len() function
    for (let i of imgarray) {
        counter += 1
    }
    for (let y = 0; y < imgarray.length; y++) {
        for (let x = 0; x < counter; x++) {
            if (imgarray[y][x] == 1) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
            
        }
    }
}

ShowImage(image_heart)
