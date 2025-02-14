'use client';
import React, { useState, useEffect ,useRef} from 'react';
import { Header } from '../Components/HomePage';



// Utility functions
function hexToRgb(hex) {
  if (hex[0] === '#') hex = hex.slice(1);
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);
  return { r, g, b };
}

function rgbToHex(r, g, b) {
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  h /= 360;

  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

// Color harmony functions
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return rgbToHex(r, g, b);
}

function getComplementaryColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  const complement = { r: 255 - r, g: 255 - g, b: 255 - b };
  return [rgbToHex(complement.r, complement.g, complement.b)];
}

function getSplitComplementaryColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  const complementHex = getComplementaryColor(hex)[0];
  const { r: compR, g: compG, b: compB } = hexToRgb(complementHex);

  const offset = 60;
  const split1 = {
    r: Math.max(0, Math.min(255, compR + offset)),
    g: Math.max(0, Math.min(255, compG - offset)),
    b: Math.max(0, Math.min(255, compB - offset)),
  };
  const split2 = {
    r: Math.max(0, Math.min(255, compR - offset)),
    g: Math.max(0, Math.min(255, compG + offset)),
    b: Math.max(0, Math.min(255, compB + offset)),
  };

  return [rgbToHex(split1.r, split1.g, split1.b), rgbToHex(split2.r, split2.g, split2.b)];
}

function getMonochromaticColors(hex) {
  const { r, g, b } = hexToRgb(hex);
  const shades = [];
  for (let i = 0; i < 5; i++) {
    const factor = 0.2 * (i - 2);
    const newR = Math.max(0, Math.min(255, r + factor * 255));
    const newG = Math.max(0, Math.min(255, g + factor * 255));
    const newB = Math.max(0, Math.min(255, b + factor * 255));
    shades.push(rgbToHex(Math.round(newR), Math.round(newG), Math.round(newB)));
  }
  return shades;
}

function ContrastCheck(hexColor) {
  hexColor = hexColor.replace('#', '');
  let r = parseInt(hexColor.substring(0, 2), 16);
  let g = parseInt(hexColor.substring(2, 4), 16);
  let b = parseInt(hexColor.substring(4, 6), 16);

  r /= 255;
  g /= 255;
  b /= 255;

  let luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.5 ? 'black' : 'white';
}




const Generator = () => {

  const [colorPalette, setColorPalette] = useState([]);
    
  const closeGenerator = ()=>{

    
            const rootDiv = document.getElementById('colorUI-sfx-0009727rrt2');
    
            if (rootDiv && rootDiv.shadowRoot) {
              
                const shadowRoot = rootDiv.shadowRoot;
            
              const appContainer = shadowRoot.querySelector('#app-container');
            
              if (appContainer) {
    
                 
    
                  
                  if(getComputedStyle(appContainer).height > '350px'){
                    appContainer.style.transition = '1s ease-in-out'
    
                    
                    appContainer.style.height = '340px'
                    appContainer.style.width = '300px'
    
                    appContainer.innerHTML= ''
                   
                    ReactDOM.createRoot(appContainer).render(
                      <React.StrictMode>
                        <>
                        <App/>
                        </>
                      </React.StrictMode> )
    
                  }
    
    
    
            
              }
            
            
            
            }


        

    }
  const [PalatteOut, setPalatteOut] = useState([1,2,3,4,5])
  const [lockedColors, setLockedColors] = useState([])

  const [colorScheme, setColorScheme] = useState('default'); 

  const handleColorChange = (index, newColor) => {
    const updatedPalette = [...colorPalette];
    updatedPalette[index] = newColor; // Update the color at the specific index
    setColorPalette(updatedPalette); // Update the state
  };

 
  

  const gen = () => {
   
    const PrimaryColor = generateRandomColor();
    let tempColor = PrimaryColor;
    let colorPalette = [];
    let usedColors = new Set();

    PalatteOut.forEach((_, i) => {
        const lockedColor = lockedColors.find(lock => lock.index === i);
        if (lockedColor) {
            colorPalette[i] = lockedColor.color; 
            usedColors.add(lockedColor.color); 
        } else {
            colorPalette[i] = null; // Placeholder for non-locked colors
        }
    });

    // Generate colors for non-locked positions
    PalatteOut.forEach((_, i) => {
        if (colorPalette[i] !== null) return; // Skip locked positions

        let colors = [];

        // Check the selected color scheme
        if (colorScheme === 'default') {
            colors = [
                ...getComplementaryColor(tempColor),
                ...getSplitComplementaryColor(tempColor),
                ...getMonochromaticColors(tempColor),
            ];
        } else if (colorScheme === 'monochromatic') {
            colors = getMonochromaticColors(tempColor);
        } else if (colorScheme === 'complementary') {
            colors = getComplementaryColor(tempColor);
        } else if (colorScheme === 'split-complementary') {
            colors = getSplitComplementaryColor(tempColor);
        }
    

        // Filter out colors that have already been used
        const availableColors = colors.filter(color => !usedColors.has(color));

        if (availableColors.length > 0) {
            // Randomly pick a color from the available options
            const randomColorIndex = Math.floor(Math.random() * availableColors.length);
            const newColor = availableColors[randomColorIndex];

            colorPalette[i] = newColor;
            usedColors.add(newColor); // Mark this color as used
            tempColor = newColor;
        } else {
           // If no new color is available (all options are duplicates), generate a new color
          
            const newColor = generateRandomColor();
            colorPalette[i] = newColor;
            usedColors.add(newColor); 
            tempColor = newColor;
            console.log("This randomness logged here : Check")
        }
    });

    setColorPalette(colorPalette);
    // console.log("Generated Palette with Locked Colors: ", colorPalette);
};


const LockBtn = (index, color) => {
  setLockedColors((prevLockedColors) => {

    const isAlreadyLocked = prevLockedColors.some(lock => lock.index === index);
    if (isAlreadyLocked) {
      // If already locked, unlock it (remove from lockedColors)
      return prevLockedColors.filter(lock => lock.index !== index);
    } else {
      // Add new lock
      return [...prevLockedColors, { index, color }];
    }
  });
};


  const [showAddIcon, setshowAddIcon] = useState(0)
  const addMoreColors =()=>{
    console.log("INsi")
setshowAddIcon(1)



  }


  const mouseout = ()=>{
    console.log("check issue")
      setshowAddIcon(0)

  }

  useEffect(()=>{

    gen()
  },[PalatteOut])


  const [screennumber, setscreennumber] = useState(0);
  const changeScreen = ()=>{
    if(screennumber){
            setscreennumber(0)
        }else{
            setscreennumber(1)
        }   

  }


  const [filters, setfilters] = useState(0)
  const showFilters = ()=>{
    console.log("mkkmkmk")

    if(filters){setfilters(0)}else{
      setfilters(1)
    }
  }

  const colorpaletteAnimate = useRef(null);
const [animatePalette, setanimatePalette] = useState(0)
 

const animate = (e)=>{
const scrollBottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight;


console.log(e.target.scrollTop)




console.log('This is height : ', window.innerHeight)
console.log('This is width : ', window.innerWidth)

    // colorpaletteAnimate.current.style.marginTop = '100px' 
    colorpaletteAnimate.current.style.width = `${(window.innerWidth -100) -e.target.scrollTop*3}px`
    colorpaletteAnimate.current.style.height =  `${(window.innerHeight -200) -e.target.scrollTop/2 }px`


  }



  return (
   <>
   <Header/>

 <div  style={{display:'flex', flexWrap:'wrap', height:'80%', overflow:'auto', backgroundColor:'', padding:'10px'}}>

 <div   style={{display:'flex', height:'100%', width:'100%' , backgroundColor:'', padding:''}}>
  
 {/* <select style={{position:'fixed', top:'30px'}} name="" id="" onChange={(e)=>{setColorScheme(e.target.value)}}>
  <option value="monochromatic">monochromatic</option>
  <option value="complementary">complementary</option>
  <option value="split-complementary">split-complementary</option>
</select> */}
  
    <div   style={{display:'flex',marginTop:'',flexDirection:'row',position:'',top:'', border:'1px solid #242424', boxShadow:'', width:'100%'}}>
  
  <div style={{height:'100%'}}></div>

    {colorPalette.map((color, index) => (
       <>
        <div    className='ello'
          key={index}  
          style={{
            height: '100vh',
            width: '100%',
            backgroundColor: color,
            color: ContrastCheck(color),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',           
            fontSize: '16px',
            padding:'20px',
            textAlign: 'center',
        
          }} onMouseEnter={addMoreColors} onMouseLeave={mouseout}
        >
         


      <div      style={{ flexDirection:'column', gap:'20px', display:'flex', opacity:'0%'}}>

          
              <button onClick={(e)=>{LockBtn(index, color)}} style={{cursor:'pointer'}}>{lockedColors.some(lock => lock.index === index) ? 'Locked' : 'Open' }</button>
      

      <button onClick={(e)=>{setPalatteOut((prevArray) => [...prevArray, prevArray.length + 1])}} >Add</button>

      <button  onClick={(e)=>{ setPalatteOut((prevArray) => prevArray.slice(0, -1))}} >Remove</button>
  

      <span style={{fontSize:'23px', fontWeight:'bold'}} onClick={(e)=>{colorpicker.click()}}>{color}</span>

       <input
              type="color"
              value={color}
              onChange={(e) => handleColorChange(index, e.target.value)} // Update the color on selection
              style={{ cursor: "pointer", width: "10px", height: "10px", border: "none", padding:'0px' }}
            />
     

      </div>

        </div>
   


       </>   ))}


   
    </div>




       <button style={{position:'absolute', bottom:'20px', left:'30px', border:'none', backgroundColor:'#242424', borderRadius:'7px', padding:'15px 30px 15px 30px', zIndex:'99',color:'grey',fontWeight:'600', cursor:'pointer'}} onClick={gen}>Generate Palette</button>

  



     </div>








 </div>



   
   </>
  );
};

export default Generator;
