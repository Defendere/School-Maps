import cherrypy


dimensions = []
start_classroom = "MH 12"
end_classroom = "CS 15"
class Point:
    def init(self, x, y):
        self.x = x
        self.y = y



#  the block will be highlighted with an outline. each block will have its own highlight color
class Block:
    def init(self, p1, p2, p3, p4, color, name):
        self.p1 = p1
        self.p2 = p2
        self.p3 = p3
        self.p4 = p4
        self.color = color

class Classroom:
    def __init__(self, z, p1, p2, p3, p4, block, name):
        self.p1 = p1
        self.p2 = p2
        self.p3 = p3
        self.p4 = p4
        self.z = z # z tells you what floor the classroom is on. ground level is 0
        self.block = block




class app_main(object):
    @cherrypy.expose
    def index(self):
        return f"""
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mags Interactive Map</title>
</head>
<body>
hello world<br>
{start_classroom}
{end_classroom}
</body>
</html>
"""

if __name__ == '__main__':
    cherrypy.quickstart(app_main())

# 