import { useRef, useEffect, useState} from "react";
import { AppWrap } from "../../wrapper";
import { Engine, Render, Bodies, World } from 'matter-js';

const Matter = () => {
    const scene = useRef()
    const isPressed = useRef(false)
    const engine = useRef(Engine.create())

    useEffect(() => {
      const cw = 2000
      const ch = 190
  
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
  
    const handleDown = () => {
      isPressed.current = true
    }
  
    const handleUp = () => {
      isPressed.current = false
    }
  
    const handleAddCircle = e => {
      if (isPressed.current) {
        const ball = Bodies.circle(
          50,
          50,
          30,
          {
            mass: 1000,
            restitution: 1,
            friction: 0,
            render: {
              fillStyle: '#fff'
            }
          })
        World.add(engine.current.world, [ball])
      }
    }
  
    return (
      <div
        onMouseEnter = {handleDown}
        onMouseLeave = {handleUp}
        onMouseMove = {handleAddCircle}
        style = {{paddingTop: "2rem"}}
      >
        <div ref={scene} style={{ width: '100%', height: '100%' }} />
      </div>
    )
  }

export default AppWrap(Matter, "home")