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
            
          const color = ['Cornflowerblue','Green','Navy','Lime','Pink','Gray','Purple','Cyan','Fuchsia','Brown','Coral','Crimson','Indigo','Teal','Olive','Maroon','NntiqueWhite','Blueviolet','Darkcyan','CadetBlue','Chocolate','DarkSlateBlue'];
            const colorIndex = parseInt(Math.random()*color.length);
            counter.style.color = color[colorIndex];
            const colorName = String(color[colorIndex]);
            const nameColor = document.querySelector('#color-name')
            document.querySelector('#color-name').innerHTML= colorName;
            nameColor.style.color = color[colorIndex];
            const name = document.querySelector('.name')
            name.style.color = color[colorIndex];
           
        }
        else if(count > 0){
            const color = ['Lightsalmon','Lightcoral','Greenyellow','Goldenrod','Floralwhite','Deeppink','Darkseagreen','Darkorange','Darkkhaki','Cornsilk','Cornflowerblue','Green','Navy','Lime','Pink','Gray','Purple','Cyan','Fuchsia','Brown','Coral','Crimson','Indigo','Teal','Olive','Maroon','NntiqueWhite','Blueviolet','Darkcyan','CadetBlue','Chocolate','DarkSlateBlue'];

            const colorIndex = parseInt(Math.random()*color.length);
            counter.style.color = color[colorIndex];
            const colorName = String(color[colorIndex]);
            const nameColor = document.querySelector('#color-name')
            document.querySelector('#color-name').innerHTML= colorName;
            nameColor.style.color = color[colorIndex];
            const name = document.querySelector('.name')
            name.style.color = color[colorIndex];

            
        }
        else{
            counter.style.color = '#333333'
            
        }

        
    })
  })
})()