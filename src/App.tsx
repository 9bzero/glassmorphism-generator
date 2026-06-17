import{useState}from'react'
  export default function App(){
    const[blur,setBlur]=useState(12)
    const[opacity,setOpacity]=useState(0.15)
    const[border,setBorder]=useState(0.3)
    const[saturation,setSaturation]=useState(1.2)
    const[radius,setRadius]=useState(16)
    const[shadow,setShadow]=useState(true)
    const[cp,setCp]=useState(false)
    const bg=`rgba(255,255,255,${opacity})`
    const bd=`1px solid rgba(255,255,255,${border})`
    const sh=shadow?"0 8px 32px rgba(0,0,0,0.37)":"none"
    const style={background:bg,backdropFilter:`blur(${blur}px) saturate(${saturation})`,WebkitBackdropFilter:`blur(${blur}px) saturate(${saturation})`,border:bd,borderRadius:radius,boxShadow:sh}
    const cssCode=`.glass {
    background: rgba(255, 255, 255, ${opacity});
    backdrop-filter: blur(${blur}px) saturate(${saturation});
    -webkit-backdrop-filter: blur(${blur}px) saturate(${saturation});
    border: 1px solid rgba(255, 255, 255, ${border});
    border-radius: ${radius}px;${shadow?"\n  box-shadow: 0 8px 32px rgba(0,0,0,0.37);":""}
}`
    const copy=()=>{navigator.clipboard.writeText(cssCode);setCp(true);setTimeout(()=>setCp(false),2000)}
    const SLIDERS=[{l:"Blur",v:blur,set:setBlur,min:0,max:40,step:1,unit:"px"},{l:"Opacity",v:opacity,set:setOpacity,min:0,max:0.5,step:0.01,unit:""},{l:"Border",v:border,set:setBorder,min:0,max:1,step:0.05,unit:""},{l:"Saturation",v:saturation,set:setSaturation,min:0.5,max:2,step:0.05,unit:"x"},{l:"Radius",v:radius,set:setRadius,min:0,max:48,step:2,unit:"px"}]
    return(
      <div style={{minHeight:"100vh",display:"flex",fontFamily:"Inter,system-ui,sans-serif",color:"#e2e8f0"}}>
        <div style={{width:300,borderRight:"1px solid #1e293b",padding:"2rem",display:"flex",flexDirection:"column",gap:"1.25rem",background:"#111827",flexShrink:0,overflowY:"auto"}}>
          <h1 style={{fontWeight:800,fontSize:"1.3rem",color:"#f8fafc"}}>🪟 Glassmorphism</h1>
          {SLIDERS.map(({l,v,set,min,max,step,unit})=>(
            <div key={l}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:"0.4rem",fontSize:"0.82rem"}}>
                <span style={{color:"#94a3b8"}}>{l}</span>
                <span style={{color:"#38bdf8",fontFamily:"monospace"}}>{Number(v).toFixed(step<1?2:0)}{unit}</span>
              </div>
              <input type="range" min={min} max={max} step={step} value={v} onChange={e=>set(+e.target.value)} style={{width:"100%",accentColor:"#38bdf8"}}/>
            </div>
          ))}
          <label style={{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer",color:"#94a3b8",fontSize:"0.85rem"}}>
            <input type="checkbox" checked={shadow} onChange={e=>setShadow(e.target.checked)} style={{accentColor:"#38bdf8"}}/> Box Shadow
          </label>
          <pre style={{background:"#0f172a",border:"1px solid #1e293b",borderRadius:8,padding:"0.75rem",fontSize:"0.72rem",fontFamily:"JetBrains Mono,monospace",color:"#86efac",overflowX:"auto",whiteSpace:"pre-wrap"}}>{cssCode}</pre>
          <button onClick={copy} style={{padding:"0.65rem",background:cp?"#166534":"linear-gradient(135deg,#38bdf8,#6366f1)",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontWeight:700}}>{cp?"✓ Copied!":"Copy CSS"}</button>
        </div>
        <div style={{flex:1,background:"linear-gradient(135deg, #667eea, #764ba2, #f093fb)",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"}}>
          <div style={{...style,padding:"2.5rem",maxWidth:360,textAlign:"center",color:"#fff"}}>
            <div style={{fontSize:"2.5rem",marginBottom:"1rem"}}>🪟</div>
            <h2 style={{fontWeight:800,fontSize:"1.4rem",marginBottom:"0.5rem"}}>Glassmorphism</h2>
            <p style={{opacity:0.85,fontSize:"0.9rem",lineHeight:1.6}}>Live preview of your glassmorphism style. Adjust the controls to customize the effect.</p>
          </div>
        </div>
      </div>
    )
  }