import cherrypy

image.png
class Point:
    def init(self, x, y):
        self.x = x
        self.y = y


#  the block will be highlighted with an outline. each block will have its own highlight color
class block:
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
        
        return "Hello world!"


if __name__ == '__main__':
    cherrypy.quickstart(app_main())
