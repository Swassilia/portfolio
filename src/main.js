import { scaleF , dialoguedata} from "./constants";
import { k } from "./kaboomCtx";
import { displayDialogue, setCamScale } from "./utils";

k.loadSprite("spritesheet", "./spritesheet.png",{
  sliceX: 39,
  sliceY: 31,
  anims: {
    "idle-down": 0,
    "walk-down": { from: 0, to: 3, loop: true, speed: 8 },
    "idle-side": 4,
    "walk-side": { from: 4, to: 7, loop: true, speed: 8 },
    "idle-up": 12,
    "walk-up": { from: 12, to: 15, loop: true, speed: 8 },

  },
});
k.loadSprite("map", "./map.png");
k.setBackground(k.Color.fromHex("#a877ae"));
k.scene("main", async () => {
  const madDat = await (await fetch("./map.json")).json();
  const layers = madDat.layers;
  //on recupere le sprite qui s'appelle map et le scale par la constante dans .j
  const map = k.add([
    k.sprite("map"),
    k.pos(0),
    k.scale(scaleF)
  ]);
  const player = k.make([
    k.sprite("spritesheet", { anim: "idle-down" }),
    k.area({
      //dessine un rectangle
      shape: new k.Rect(k.vec2(0, 3), 10, 10)
    }),
    k.body(),
    k.anchor("center"),
    k.pos(),
    k.scale(scaleF),
    //par defaut
    {
      speed: 250,
      direction: "down",
      isInDialogue: false,
    },
    "player"
  ]);
  for (const layer of layers) {
    if(layer.name==="boundaries"){
      for(const boundary of layer.objects){
        //add ajoute l'element sur la map
        map.add([
          k.area({
            shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
          }), 
          k.body({isStaticc: true}), 
          k.pos(boundary.x, boundary.y),
          boundary.name,
        ]);
        if (boundary.name)//si existe
        {
          player.onCollide(boundary.name,()=>{
            player.isInDialogue=true; 
            displayDialogue(dialoguedata[boundary.name], ()=>{
              player.isInDialogue=false
            });
          });
        }
      }
      continue;
    }

    if(layer.name==="spawnpoints"){
      for(const entity of layer.objects){
        if (entity.name ==="player"){
          player.pos= k.vec2((map.pos.x+entity.x)*scaleF, (map.pos.y+entity.y)*scaleF);
          k.add(player);
        }
      }
    }
  }
setCamScale(k)
  k.onResize(()=>{
    setCamScale(k);
  })
  k.onUpdate(()=>{
    k.camPos(player.pos.x, player.pos.y+100)
  });

  k.onMouseDown((mouseBtn)=>{
    if(mouseBtn !=="left" || player.isInDialogue)return;
    const worldMousePos= k.toWorld(k.mousePos());
    player.moveTo(worldMousePos, player.speed);
    const mouseAngle= player.pos.angle(worldMousePos);

    const AngleMin=50;
    const AngleMax= 125;
    if(mouseAngle<AngleMax&&
      mouseAngle>AngleMin&&
      player.curAnim()!== "walk-up"
    )
    {
      player.play("walk-up");
      player.direction="up";
      return;
    }
    if(mouseAngle<-AngleMin&&
      mouseAngle>-AngleMax&&
      player.curAnim()!== "walk-down"
    )
    {
      player.play("walk-down");
      player.direction="down";
      return;
    }
    if (Math.abs(mouseAngle)>AngleMax){
      player.flipX=false;
      if(player.curAnim()!== "walk-side") player.play("walk-side");
      player.direction="right";
      return;
    }
    if (Math.abs(mouseAngle)<AngleMin){
      player.flipX=true;
      if(player.curAnim()!== "walk-side") player.play("walk-side");
      player.direction="left";
      return;
    }
  
  });

  k.onMouseRelease(()=>{
    if(player.direction==="down"){
      player.play("idle-down");
      return;
    }
    if(player.direction==="up"){
      player.play("idle-up");
      return;
    }
      player.play("idle-side");
  });
});

//start
k.go("main");