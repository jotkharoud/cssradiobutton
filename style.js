  window.changeColor = function(value)
  {
      this.alert("Now the color is " + value)
      var color = document.body.style.backgroundColor
      switch(value)
      {
          case 'Red':
              color = "#ff0000";
            break;
          case  'Yellow' :
            color = "#FFFF00";
            break;
          case 'Green' :
              color = "#008000";
            break;
          case 'Blue' :
              color = "#0000FF";
            break;
           case 'Grey':
               color = "#A9A9A9"     
            break;      

      }
      document.body.style.backgroundColor = color;

  }




