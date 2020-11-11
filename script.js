(function() {
  
  'use strict';

  // Global Variables
  var scratchImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABsCAIAAADxD5sXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADpSURBVHhe7dCBEAAwDACxYQykJvV3qcID5C4EeX+WwlRlqjJVmapMVaYqU5WpylRlqjJVmapMVaYqU5WpylRlqjJVmapMVaYqU5WpylRlqjJVmapMVaYqU5WpylRlqjJVmapMVaYqU5WpylRlqjJVmapMVaYqU5WpylRlqjJVmapMVaYqU5WpylRlqjJVmapMVaYqU5WpylRlqjJVmapMVaYqU5WpylRlqjJVmapMVaYqU5WpylRlqjJVmapMVaYqU5WpylRlqjJVmapMVaYqU5WpylRlqjJVmapMVaYqU5WpylRlqjLVzB7XDvI0YtclmAAAAABJRU5ErkJggg==';
  var brushImage = 'data:image/png;base64,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';
  var rect_scratched = [0,0,0];
  var scratchComplete = false;
  var isDrawing = false;

  function handleFullPercentage(){
    if (scratchComplete){
      return;
    }

    console.log(rect_scratched);

    if ( rect_scratched[0]>50 && rect_scratched[1]>50 && rect_scratched[2]>50){
      scratchComplete = true;
      document.querySelector('.after-scratch').style.display = 'flex';
      document.querySelector('.total_container').style.display = 'none';
    }
  }

  function handleMouseUp(e) {
    isDrawing = false;
  }

  document.addEventListener('mouseup', handleMouseUp, false);
  document.addEventListener('touchend', handleMouseUp, false);


  // Rectangle 1
  {
    var lastPoint_0;
    var container_0    = document.getElementById('js-container-0'),
        canvas_0       = document.getElementById('js-canvas-0'),
        canvasWidth_0  = canvas_0.width,
        canvasHeight_0 = canvas_0.height,
        ctx_0          = canvas_0.getContext('2d'),
        image_0        = new Image(),
        brush_0        = new Image();
        
    // base64 Workaround because Same-Origin-Policy
    image_0.src = scratchImage;
    image_0.onload = function() {
      ctx_0.drawImage(image_0, 0, 0, image_0.width, image_0.height,
                           0, 0, canvas_0.width, canvas_0.height);
      // Show the form when Image is loaded.
      document.querySelectorAll('.insideText')[0].style.visibility = 'visible';
    };
    brush_0.src = brushImage;
    
    canvas_0.addEventListener('mousedown', handleMouseDown_0, false);
    canvas_0.addEventListener('touchstart', handleMouseDown_0, false);
    canvas_0.addEventListener('mousemove', handleMouseMove_0, false);
    canvas_0.addEventListener('touchmove', handleMouseMove_0, false);
    canvas_0.addEventListener('mouseup', handleMouseUp, false);
    canvas_0.addEventListener('touchend', handleMouseUp, false);
    canvas_0.addEventListener('mouseenter', handleMouseEnter_0, false);
    
    function distanceBetween(point1, point2) {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
    
    function angleBetween(point1, point2) {
      return Math.atan2( point2.x - point1.x, point2.y - point1.y );
    }
    
    // Only test every `stride` pixel. `stride`x faster,
    // but might lead to inaccuracy
    function getFilledInPixels_0(stride) {
      if (!stride || stride < 1) { stride = 1; }
      
      var pixels   = ctx_0.getImageData(0, 0, canvasWidth_0, canvasHeight_0),
          pdata    = pixels.data,
          l        = pdata.length,
          total    = (l / stride),
          count    = 0;
      
      // Iterate over all pixels
      for(var i = count = 0; i < l; i += stride) {
        if (parseInt(pdata[i]) === 0) {
          count++;
        }
      }
      
      return Math.round((count / total) * 100);
    }
    
    function getMouse(e, canvas) {
      var offsetX = 0, offsetY = 0, mx, my;
  
      if (canvas.offsetParent !== undefined) {
        do {
          offsetX += canvas.offsetLeft;
          offsetY += canvas.offsetTop;
        } while ((canvas = canvas.offsetParent));
      }
  
      mx = (e.pageX || e.touches[0].clientX) - offsetX;
      my = (e.pageY || e.touches[0].clientY) - offsetY;
  
      return {x: mx, y: my};
    }
    
    function handlePercentage_0(filledInPixels) {
      filledInPixels = filledInPixels || 0;
      console.log(filledInPixels + '%');
      if (filledInPixels > 50) {
        canvas_0.parentNode.removeChild(canvas_0);
      }
      rect_scratched[0] = filledInPixels;
      handleFullPercentage();
    }
    
    function handleMouseDown_0(e) {
      isDrawing = true;
      lastPoint_0 = getMouse(e, canvas_0);
    }

    function handleMouseEnter_0(e){
      lastPoint_0 = getMouse(e, canvas_0);
      console.log("MouseEnter-canvas0" + lastPoint_0);
    }
  
    function handleMouseMove_0(e) {
      if (!isDrawing) { return; }
      
      e.preventDefault();
  
      var currentPoint = getMouse(e, canvas_0),
          dist = distanceBetween(lastPoint_0, currentPoint),
          angle = angleBetween(lastPoint_0, currentPoint),
          x, y;
      
      for (var i = 0; i < dist; i++) {
        x = lastPoint_0.x + (Math.sin(angle) * i) - 25;
        y = lastPoint_0.y + (Math.cos(angle) * i) - 25;
        ctx_0.globalCompositeOperation = 'destination-out';
        ctx_0.drawImage(brush_0, x, y);
      }
      
      lastPoint_0 = currentPoint;
      handlePercentage_0(getFilledInPixels_0(32));
    }
  }






  // Rectangle 2
  {
    var lastPoint_1;
    var container_1    = document.getElementById('js-container-1'),
        canvas_1       = document.getElementById('js-canvas-1'),
        canvasWidth_1  = canvas_1.width,
        canvasHeight_1 = canvas_1.height,
        ctx_1          = canvas_1.getContext('2d'),
        image_1        = new Image(),
        brush_1        = new Image();
        
    // base64 Workaround because Same-Origin-Policy
    image_1.src = scratchImage;
    image_1.onload = function() {
      ctx_1.drawImage(image_1, 0, 0, image_1.width, image_1.height,
                           0, 0, canvas_1.width, canvas_1.height);
      // Show the form when Image is loaded.
      document.querySelectorAll('.insideText')[0].style.visibility = 'visible';
    };
    brush_1.src = brushImage;
    
    canvas_1.addEventListener('mousedown', handleMouseDown_1, false);
    canvas_1.addEventListener('touchstart', handleMouseDown_1, false);
    canvas_1.addEventListener('mousemove', handleMouseMove_1, false);
    canvas_1.addEventListener('touchmove', handleMouseMove_1, false);
    canvas_1.addEventListener('mouseup', handleMouseUp, false);
    canvas_1.addEventListener('touchend', handleMouseUp, false);
    canvas_1.addEventListener('mouseenter', handleMouseEnter_1, false);
    
    function distanceBetween(point1, point2) {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
    
    function angleBetween(point1, point2) {
      return Math.atan2( point2.x - point1.x, point2.y - point1.y );
    }
    
    // Only test every `stride` pixel. `stride`x faster,
    // but might lead to inaccuracy
    function getFilledInPixels_1(stride) {
      if (!stride || stride < 1) { stride = 1; }
      
      var pixels   = ctx_1.getImageData(0, 0, canvasWidth_1, canvasHeight_1),
          pdata    = pixels.data,
          l        = pdata.length,
          total    = (l / stride),
          count    = 0;
      
      // Iterate over all pixels
      for(var i = count = 0; i < l; i += stride) {
        if (parseInt(pdata[i]) === 0) {
          count++;
        }
      }
      
      return Math.round((count / total) * 100);
    }
    
    function getMouse(e, canvas) {
      var offsetX = 0, offsetY = 0, mx, my;
  
      if (canvas.offsetParent !== undefined) {
        do {
          offsetX += canvas.offsetLeft;
          offsetY += canvas.offsetTop;
        } while ((canvas = canvas.offsetParent));
      }
  
      mx = (e.pageX || e.touches[0].clientX) - offsetX;
      my = (e.pageY || e.touches[0].clientY) - offsetY;
  
      return {x: mx, y: my};
    }
    
    function handlePercentage_1(filledInPixels) {
      filledInPixels = filledInPixels || 0;
      console.log(filledInPixels + '%');
      if (filledInPixels > 50) {
        canvas_1.parentNode.removeChild(canvas_1);
      }
      rect_scratched[1] = filledInPixels;
      handleFullPercentage();
    }
    
    function handleMouseDown_1(e) {
      isDrawing = true;
      lastPoint_1 = getMouse(e, canvas_1);
    }

    function handleMouseEnter_1(e){
      lastPoint_1 = getMouse(e, canvas_1);
      console.log("MouseEnter-canvas1" + lastPoint_1);
    }
  
    function handleMouseMove_1(e) {
      if (!isDrawing) { return; }
      
      e.preventDefault();
  
      var currentPoint = getMouse(e, canvas_1),
          dist = distanceBetween(lastPoint_1, currentPoint),
          angle = angleBetween(lastPoint_1, currentPoint),
          x, y;
      
      for (var i = 0; i < dist; i++) {
        x = lastPoint_1.x + (Math.sin(angle) * i) - 25;
        y = lastPoint_1.y + (Math.cos(angle) * i) - 25;
        ctx_1.globalCompositeOperation = 'destination-out';
        ctx_1.drawImage(brush_1, x, y);
      }
      
      lastPoint_1 = currentPoint;
      handlePercentage_1(getFilledInPixels_1(32));
    }
  }





  // Rectangle 1
  {
    var lastPoint_2;
    var container_2    = document.getElementById('js-container-2'),
        canvas_2       = document.getElementById('js-canvas-2'),
        canvasWidth_2  = canvas_2.width,
        canvasHeight_2 = canvas_2.height,
        ctx_2          = canvas_2.getContext('2d'),
        image_2        = new Image(),
        brush_2        = new Image();
        
    // base64 Workaround because Same-Origin-Policy
    image_2.src = scratchImage;
    image_2.onload = function() {
      ctx_2.drawImage(image_2, 0, 0, image_2.width, image_2.height,
                           0, 0, canvas_2.width, canvas_2.height);
      // Show the form when Image is loaded.
      document.querySelectorAll('.insideText')[0].style.visibility = 'visible';
    };
    brush_2.src = brushImage;
    
    canvas_2.addEventListener('mousedown', handleMouseDown_2, false);
    canvas_2.addEventListener('touchstart', handleMouseDown_2, false);
    canvas_2.addEventListener('mousemove', handleMouseMove_2, false);
    canvas_2.addEventListener('touchmove', handleMouseMove_2, false);
    canvas_2.addEventListener('mouseup', handleMouseUp, false);
    canvas_2.addEventListener('touchend', handleMouseUp, false);
    canvas_2.addEventListener('mouseenter', handleMouseEnter_2, false);
    
    function distanceBetween(point1, point2) {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
    
    function angleBetween(point1, point2) {
      return Math.atan2( point2.x - point1.x, point2.y - point1.y );
    }
    
    // Only test every `stride` pixel. `stride`x faster,
    // but might lead to inaccuracy
    function getFilledInPixels_2(stride) {
      if (!stride || stride < 1) { stride = 1; }
      
      var pixels   = ctx_2.getImageData(0, 0, canvasWidth_2, canvasHeight_2),
          pdata    = pixels.data,
          l        = pdata.length,
          total    = (l / stride),
          count    = 0;
      
      // Iterate over all pixels
      for(var i = count = 0; i < l; i += stride) {
        if (parseInt(pdata[i]) === 0) {
          count++;
        }
      }
      
      return Math.round((count / total) * 100);
    }
    
    function getMouse(e, canvas) {
      var offsetX = 0, offsetY = 0, mx, my;
  
      if (canvas.offsetParent !== undefined) {
        do {
          offsetX += canvas.offsetLeft;
          offsetY += canvas.offsetTop;
        } while ((canvas = canvas.offsetParent));
      }
  
      mx = (e.pageX || e.touches[0].clientX) - offsetX;
      my = (e.pageY || e.touches[0].clientY) - offsetY;
  
      return {x: mx, y: my};
    }
    
    function handlePercentage_2(filledInPixels) {
      filledInPixels = filledInPixels || 0;
      console.log(filledInPixels + '%');
      if (filledInPixels > 50) {
        canvas_2.parentNode.removeChild(canvas_2);
      }
      rect_scratched[2] = filledInPixels;
      handleFullPercentage();
    }
    
    function handleMouseDown_2(e) {
      isDrawing = true;
      lastPoint_2 = getMouse(e, canvas_2);
    }

    function handleMouseEnter_2(e){
      lastPoint_2 = getMouse(e, canvas_2);
      console.log("MouseEnter-canvas2" + lastPoint_2);
    }
  
    function handleMouseMove_2(e) {
      if (!isDrawing) { return; }
      
      e.preventDefault();
  
      var currentPoint = getMouse(e, canvas_2),
          dist = distanceBetween(lastPoint_2, currentPoint),
          angle = angleBetween(lastPoint_2, currentPoint),
          x, y;
      
      for (var i = 0; i < dist; i++) {
        x = lastPoint_2.x + (Math.sin(angle) * i) - 25;
        y = lastPoint_2.y + (Math.cos(angle) * i) - 25;
        ctx_2.globalCompositeOperation = 'destination-out';
        ctx_2.drawImage(brush_2, x, y);
      }
      
      lastPoint_2 = currentPoint;
      handlePercentage_2(getFilledInPixels_2(32));
    }
  }
  
})();