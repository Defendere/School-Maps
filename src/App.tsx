import { useState, useEffect, useRef } from 'react'
import './App.css'
import mapImg from './map.png';


type Coords = { x: number, y: number }

type Map_node = {
  name: string,
  position: Coords,
  connections: [Map_node]
}

const Map = (props:any) => {



const canvasRef = useRef(null)
  
  const draw = (ctx:any, frameCount:any) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(props.startNode.position.x, props.startNode.position.y);
    ctx.lineTo(props.endNode.position.x, props.endNode.position.y);
    ctx.stroke();
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    // @ts-ignore: Object is possibly 'null'.
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId:any
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  

  return (
    <div className="Map" >
      <div style = {{position: "relative", border: "1px solid", top: "0", left: "0", width: 40+"em", height: 40+"em"}}>
        <img src={mapImg} alt="logo" style={{ position:"absolute", top: "0", left: "0", width: 40+"em"}}/>
      <canvas style={{position:"absolute"}} ref={canvasRef} {...props} />
    </div>
    </div>
  )
}

function App() {


  const [startNode, setStartNode] = useState({
    name: "Null",
    position: {x: 0, y: 0},
    connections: []
  })

  const [offset, setOffset] = useState({x: 0, y: 0})

  const [endNode, setEndNode] = useState({
    name: "Null",
    position: {x: 100, y: 100},
    connections: []
  })
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  let elem = document.getElementById("mapContainer")
  
  if (elem != null) {
  elem.onmousedown = dragMouseDown;
  }

    function dragMouseDown(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

    function elementDrag(e: MouseEvent) {
    if (elem == null) {return}

    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    setOffset({x:offset.x - pos2, y:offset.y - pos1})
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

  return (
    <div  className="App">
      <Map id="mapContainer" style={{position: "absolute", top: offset.x +"px", left: offset.y+"px", outline: "1px solid"}} startNode={startNode} endNode={endNode} />
    </div>
  )

}

export default App
