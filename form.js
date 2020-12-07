class Form{
    constructor(){
        this.input=createInput("Name");
        this.colorI=createInput("Choose a color:")
        this.color=createSelect("Color");
        this.button=createButton("Play");
        this.greeting=createElement("h2");

    }

    display(){
       this.input.position(displayWidth/2-200,displayHeight/2-150)
       //this.color.position(displayWidth/2-90,displayHeight/2-100)
       this.colorI.position(displayWidth/2-200,displayHeight/2-100)
       this.button.position(displayWidth/2-130,displayHeight/2-50)

      /* this.color.option('red');
       this.color.option('green');
       this.color.option('blue');
       this.color.option('yellow');
       this.color.option('orange');
       this.color.option('purple');
       this.color.selected('yellow');
       this.color.changed(mySelectEvent);

       var item = this.color.value();
       background(200);
       text('color ' +  + '!', 50, 50);*/

       this.button.mousePressed(()=>{
           this.input.hide();
           this.colorI.hide()
           this.button.hide()
           player.name=this.input.value()
           player.color=this.color.value()
           playerCount+=1;
           player.index = playerCount;
           player.updateCount(playerCount)
           player.update()
           this.greeting.html("HELLO,"+player.name)
           this.greeting.position(displayWidth/2-200,displayHeight/2-150)
           })

    }
    
    /*mySelectEvent(){
        this.sel.position(10, 10);
        this.sel.option('red');
        this.sel.option('green');
        this.sel.option('blue');
        //this.sel.selected('yellow');
        this.sel.changed(mySelectEvent);

        var item = sel.value();
        background(200);
        text('color ' +  + '!', 50, 50);
    }*/

}