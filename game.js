let v=confirm("type to play");
if(v){
    let vis=prompt("Enter in rock ,paper,scissors");
    if(vis){
        let man = vis.trim().toLowerCase();
         if(man === "rock"||man==="paper"||man==="scissors"){
           let pcm= Math.floor(Math.random()*3+1);
           let pc= pcm===1?"rock":pcm===2?"paper":"scissors"
        let result= man===pc? "tie the game":man==="rock"&&pc==="paper"?`vis: ${vis}\npc:${pc}\nComputer win!`:man==="paper"&&pc==="scissors"?`vis:${vis}\npc:${pc}\nPC win`:man==="scissors"&&pc==="rock"?`vis: ${vis}\npc:${pc}\nComputer win`:`vis:${vis}\npc:${pc}\n viswin`;
        alert(result);
        let playagin=confirm("play agin");
        playagin ? location.reload():alert("oh,thank ");
    }else{
            alert("i guess you wrong enrty");
        }

    }  
        
   else{
        alert("thank you play next time");
    }
}else{
    alert("thank you play next time");
}
