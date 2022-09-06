import { useRef, useEffect}  from "react";
import { AppWrap } from "../../wrapper";
import { Engine, Render, Bodies, World } from 'matter-js';

const Matter = () => {
    const scene = useRef();
    const engine = useRef(Engine.create());

    useEffect(() => {
      const cw = 2000
      const ch = 220
  
      const render = Render.create({
        element: scene.current,
        engine: engine.current,
        options: {
          width: cw,
          height: ch,
          wireframes: false,
          background: 'transparent'
        }
      })
  
      World.add(engine.current.world, [
        Bodies.rectangle(cw / 2, -15, cw, 20, { isStatic: true }),
        Bodies.rectangle(-15, ch / 2, 20, ch, { isStatic: true }),
        Bodies.rectangle(cw / 2, ch + 15, cw, 20, { isStatic: true }),
        Bodies.rectangle(cw + 15, ch / 2, 20, ch, { isStatic: true })
      ])
  
      Engine.run(engine.current)
      Render.run(render)
  
      return () => {
        Render.stop(render)
        World.clear(engine.current.world)
        Engine.clear(engine.current)
        render.canvas.remove()
        render.canvas = null
        render.context = null
        render.textures = {}
      }
    }, [])
  
    const handleEnter = () => {
      const cw = 2000
      const ch = 197
  
      const render = Render.create({
        element: scene.current,
        engine: engine.current,
        options: {
          width: cw,
          height: ch,
          wireframes: false,
          background: 'transparent'
        }
      })
  
      World.add(engine.current.world, [
        Bodies.rectangle(cw / 2, -15, cw, 20, { isStatic: true }),
        Bodies.rectangle(-15, ch / 2, 20, ch, { isStatic: true }),
        Bodies.rectangle(cw / 2, ch + 15, cw, 20, { isStatic: true }),
        Bodies.rectangle(cw + 15, ch / 2, 20, ch, { isStatic: true })
      ])
  
      Engine.run(engine.current)
      Render.run(render)
  
      return () => {
        Render.stop(render)
        World.clear(engine.current.world)
        Engine.clear(engine.current)
        render.canvas.remove()
        render.canvas = null
        render.context = null
        render.textures = {}
      }
    }

    const handleLeave = () => {
      World.clear(engine.current.world)
      Engine.clear(engine.current)
    }
  
    const handleAddCircle = e => {
        const ball = Bodies.circle(
          50,
          50,
          10,
          {
            mass: 1,
            restitution: 1,
            friction: 0,
            render: {
              fillStyle: '#fff'
            }
          })
        World.add(engine.current.world, [ball])
    }
  
    return (
      <div
        onMouseEnter = {handleEnter}
        onMouseLeave = {handleLeave}
        onMouseMove = {handleAddCircle}
      >
        <div ref={scene} style={{ width: '100%', height: '100%' }} />
      </div>
    )
  }

export default Matter;