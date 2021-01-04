let image_heart = [[0, 1, 0, 1, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]]
function ShowImage(imgarray: number[][]) {
    for (let y = 0; y < imgarray.length; y++) {
        for (let x = 0; x < 5; x++) {
            if (imgarray[y][x] == 1) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
            
        }
    }
}

ShowImage(image_heart)
