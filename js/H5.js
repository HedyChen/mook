function H5(){
    this.id=('h5_page_'+Math.random()).replace('.','_');
    this.el=$('<div class="h5" id="'+this.id+'">').hide();
    this.page=[];
    $('body').append(this.el);
   //添加页面
    this.addpage=function(name,text){
       var page=$('<div class="h5_page section">');
       if(name != undefined ){
       	page.addClass('h5_page_'+name);
       }
       if(text != undefined ){
       	page.text(text);	
       }
       this.el.append(page);
       this.page.push(page);
       return this;
    }
    //向页面内添加组件
    this.addcomponent=function(name,cfg){
    	var cfg=cfg||{}
    	cfg=$.extend({
    		type:'base',
    	},cfg);
    	var component=new H5ComponentBase(name,cfg);
      var page=this.page.slice(-1)[0];
        page.append(component);
        return this;

    }
    //将隐藏的页面呈现
    this.loader=function(){
    	this.el.show();
    	this.el.fullpage();
    }
    return this;
}