image_heart = [
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0]
]
def ShowImage(imgarray: List[List[number]]):
    counter = 0                         # Bypass for micro:bit not supporting the len() function
    for i in imgarray:
        counter += 1
    for y in range(len(imgarray)):
        for x in range(counter):
            if imgarray[y][x] == 1:
                led.plot(x, y)
            else:
                led.unplot(x, y)
ShowImage(image_heart)