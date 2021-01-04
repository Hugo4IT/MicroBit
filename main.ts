//  Please only use this library on python projects as javascript/typescript
//  has a more efficient way of storing bytes and the javascript to python
//  conversion by microsoft makecode isnt perfect. In the future i'll maybe
//  make a javascript version of this library
//  Use by calling the function with an array of numbers that form the image
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

//  Image in the form of an array
let image_heart = [[0, 1, 0, 1, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]]
//  Image in the form of bytes (0b in front of a number means "these are bytes")
let img_bytes = 0b0101011111111110111000100
//  Image in decimal
let img_decimal = 11533764
//  Image in hexadecimal
let img_hexadecimal = 0xAFFDC4
//  Hexadecimal numbers are the smallest way to store data in R.A.M.
//  leaving more R.A.M. to be usable by the microcontroller. Even though
//  you might think storing data as raw binary would be more storage-effictient
//  an image is exactly 25 bits long which, when stored into R.A.M. will automatically
//  be converted to 32 bits because bytes cant be shorter than 8 bits thus making hex
//  the most storage-efficient. Hopefully you dont have to worry about R.A.M. limits
//  when programming for the Micro:Bit because it has 16K of it. In a future update I
//  might add the abillity to use hexadecimal numbers to make images as it would make
//  larger applications possible
ShowImage(image_heart)
