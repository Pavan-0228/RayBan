Shery.imageEffect(".back",{
    style:5,
    config:{"a":{"value":0.69,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.998947277368488},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.31,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.55,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":12.98,"range":[0,100]}},
    gooey:true
})

var elems = document.querySelectorAll(".elem");
elems.forEach(function(elem){

    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animation = false;

    document.addEventListener("click",function(){
    if(!animation){
        animation = true;
        gsap.to(h1s[index],{
            top:"-=100%",
            duration:1,
            ease:Expo.easaInOut,
            onComplete:function(){
                gsap.set(this._targets[0],{
                    top:"100%",
                })
                animation=false;
            }
        })
        if(index < 4){
            index++;
        }
        else{
            index = 0;
        }
        gsap.to(h1s[index],{
            top:"-=100%",
            duration:1,
            ease:Expo.easaInOut
        });
    }
 });
})

