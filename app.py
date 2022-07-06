import cherrypy


class Point:
    def init(self, x, y):
        self.x = x
        self.y = y

class Square:
    def init(self, ):
        ...

class block:
    def init(self, p1, p2, p3, p4, color):
        self.p1 = p1
        self.p2 = p2
        self.p3 = p3
        self.p4 = p4
        self.color = color

class Classroom:
    def __init__(self, p1, p2, p3, p4, block):
        self.p1 = p1
        self.p2 = p2
        self.p3 = p3
        self.p4 = p4
        self.block = block


class HelloWorld(object):
    
    @cherrypy.expose
    def index(self):
        
        return "Hello world!"


if __name__ == '__main__':
    cherrypy.quickstart(HelloWorld())
