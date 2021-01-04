image_heart = [
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0]
]
def ShowImage(imgarray: List[List[number]]):
    for y in range(len(imgarray)):
        for x in range(5):
            if imgarray[y][x] == 1:
                led.plot(x, y)
            else:
                led.unplot(x, y)
ShowImage(image_heart)