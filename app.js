(function() {
  const buttons = document.querySelectorAll('.counterBtn')
  
  let count = 0

  buttons.forEach(function(button) {
    button.addEventListener('click', function(){
        if(button.classList.contains('prevBtn')){
           count--
        }
        else if(button.classList.contains('nextBtn')){
           count++ 
        }
        
        
        const counter = document.querySelector('#counter')
        counter.textContent = count
      
        
        if(count < 0){
          const color = ['#cd5c5c','green','#fffof5','#add8e6','pink','gray','purple','cyan','fuchsia','brown','coral','crimson','indigo','teal','olive','maroon','antiqueWhite','azure','beige','cadetBlue','chocolate','DarkSlateBlue'];

            const colorIndex = parseInt(Math.random()*color.length)
            counter.style.color = color[colorIndex]
        }
        else if(count > 0){
          const color = ['#cd5c5c','green','#fffof5','#add8e6','pink','gray','purple','cyan','fuchsia','brown','coral','crimson','indigo','teal','olive','maroon','antiqueWhite','azure','beige','cadetBlue','chocolate','DarkSlateBlue'];

            const colorIndex = parseInt(Math.random()*color.length)
            counter.style.color = color[colorIndex]
        }
        else{
            counter.style.color = '#333333'
        }
    })
  })
})()