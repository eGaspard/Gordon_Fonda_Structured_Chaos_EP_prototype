function Mid(startX,startY,diam) {
  this.x = startX;
  this.y = startY;
  this.diameter = diam;
  
  
  this.update = function() {
    this.x = startX;
    this.y = startY;
    this.diameter = diam2;
	
	ellipse(this.x,this.y,this.diameter,this.diameter);
    
    }
  }

  function Low(startX,startY,diam) {
  this.x = startX;
  this.y = startY;
  this.diameter = diam;
  
  
  this.update = function() {
    this.x = startX;
    this.y = startY;
    this.diameter = diam1;
	
	ellipse(this.x,this.y,this.diameter,this.diameter);
    
    }
  }


function High(startX,startY,diam) {
  this.x = startX;
  this.y = startY;
  this.diameter = diam;
  
  
  this.update = function() {
    this.x = startX;
    this.y = startY;
    this.diameter = diam3;
	
	ellipse(this.x,this.y,this.diameter,this.diameter);
    
    }
  }


