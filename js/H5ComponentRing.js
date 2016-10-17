// 基本环图组件对象
function H5ComponentRing(name,cfg) {
 var component = new H5ComponentPie(name,cfg);
 component.find('.text').remove();

   var w = cfg.width;
   var h = cfg.height;
	 var canvas = document.createElement('canvas');
   canvas.width = w;
   canvas.height = h;
   var ctx = canvas.getContext('2d');
   component.append( canvas );
   $(canvas).css('z-index', 200);

   var r = w/2,
       l = cfg.data.length;
   ctx.beginPath();
   ctx.arc(r,r,0.75*r,0,2*Math.PI,true);
   ctx.fillStyle = '#FFFFFF';
   ctx.fill();
   


    var txt = $('<div class="txt"></div>');
     txt.text( cfg.data[0][0] );
    
     var per = $('<div class="per"></div>');
     per.text((cfg.data[0][1]*100)+"%");
     txt.append(per);
     txt.css('top', r/2-5).css('left', r/2-5).css('color', cfg.data[0][2]).css('z-index',300);


     component.append(txt);

 return component;

  }