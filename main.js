function sele() {
    const calConttainer = document.querySelector('.cal-container')
    const showCase = document.querySelector('.show-case')
    const themeSelector = document.querySelector('.theme-selector')
    const cal = document.querySelector('.cal')
    const themeSlide = document.querySelector('.theme-slide')
    const sele = document.querySelector('.sele')
    const label = document.querySelector('.label')
    const swipe = document.querySelector('.swipe')
    const control = document.querySelector('.control')
       
    
    /*
    * theme1 = flex-start
    * theme2 = center
    * theme3 = flex-end
    */
    
    let option = "flex-start"
    swipe.addEventListner("click", () => {
        switch  (option) {
            case "flex-start": {
                option = "center"
                theme2 ()
                    break
                
            }
            case "center": {
                option = "flex-end"
                theme3 ()
                break
            
        }
        case "flex-end": {
            option = "flex-start"
            theme1 ()
            break
        }
        default: {
            console.error("This is an error")
        }
            
        }
        swipe.style.justifyContent = option
    })
    }
    function theme1(){
    showcase.style.backgroundColor = "hsl(0, 0%, 90%)"
    swipe.style.backgroundColor =  " hsl(0, 0%, 93%)"
    Control.style.backgroundColor =  "hsl(25, 98%, 40%)"
    
    
    num.style.background = "hsl(0, 0%, 90%)"
    
    main.style.backgroundColor = "hsl(0, 0%, 90%)"
    num.forEach((e)  => {
        e.style.backgroundColor
    }
    )
    
      
    }
    