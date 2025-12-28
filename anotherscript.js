let counter = 0;
newsline.children[counter].classList.add("active");

newsline.ontransitionend = (event) => {
    if (event.target != newsline.children[counter]) {return}
    newsline.children[counter].classList.remove("active");
    newsline.children[counter].style.contentVisibility = "hidden";
    counter++;
    counter%=3;
    newsline.children[counter].classList.add("active");
    newsline.children[counter].style.contentVisibility = "";
}


function moving_elements(parent, spacing, ...args) {
    spacing = Math.abs(spacing);

    let direction = "left";
    let target = "";
    
    args.forEach((item) => {
        if (item === null) {return;}
        if (typeof item === "string") {
            if (item === "left" || item === "right") {direction = item;}            
            return;
        }
        if (typeof item === "object") {
            if (!target && item.nodeType === Node.ELEMENT_NODE) {target = item;}
            return;
        }

    })
    
    let left_end = window.getComputedStyle(parent.children[parent.childElementCount-1]).translate;
    left_end = Number(left_end.slice(0, left_end.length-1));
    let right_end = window.getComputedStyle(parent.children[parent.childElementCount-2]).translate;
    right_end = Number(right_end.slice(0, right_end.length-1));
    let unit = window.getComputedStyle(parent.children[0]).translate.slice(-1);
    let translate_holder = [["from",[]],["to",[]]];
    Array.from(parent.children).forEach((item) => {
        item.style.translate = window.getComputedStyle(item).translate;
        translate_holder[0][1].push(item.style.translate)
        if (left_end >= Number(item.style.translate.slice(0, item.style.translate.length-1))) {
            left_end = Number(item.style.translate.slice(0, item.style.translate.length-1));
        }
        if (right_end <= Number(item.style.translate.slice(0, item.style.translate.length-1))) {
            right_end = Number(item.style.translate.slice(0, item.style.translate.length-1));
        }
    });
    if (target) {
        let displacement;
        let tempcount = 0;
        let tempitem;
        for(let index=0; index < parent.childElementCount; index++) {
            tempitem = parent.children[index]
            if(tempitem === target) {displacement = index; tempcount++;}
            if(tempitem.classList.contains("active")) {displacement -= index; tempcount++;}
            if(tempcount==2) {break;} 
        }
        tempcount = null;
        tempitem = null;
        displacement/=Math.abs(displacement);
        target.style.transition = "none"
        target.style.contentVisibility = "hidden"
        target.style.translate = spacing * displacement + "%"
        target.style.transition = ""
        target.style.contentVisibility = ""        
        target.style.translate = "0%"
        parent.querySelector(".active").style.translate = spacing * -displacement + "%"
        
        return translate_holder;
    }
    if (direction == "left") {
        let translate_number;
        Array.from(parent.children).forEach((item) => {
            translate_number = Number(item.style.translate.slice(0,item.style.translate.length-1))
            if (translate_number == left_end) {
                item.style.contentVisibility = "hidden"; item.style.translate = right_end+"%"; 
                return;
            }
            item.style.translate = (translate_number-spacing) + "%";
            if (translate_number == 0 || translate_number == spacing) {
                item.style.contentVisibility = "";
            }
       }) 
    } else if (direction == "right") {

    }
    return translate_holder;
}


let carousel_counter = 0;
carousel.children[carousel_counter].classList.add("active");
carousel_overlay.querySelectorAll("button")[carousel_counter].classList.add("active");
console.log(moving_elements(carousel, -100)[0][1]);
carousel.querySelector(".active").ontransitionend = (event) => {
    moving_elements(carousel, 100);
    carousel_overlay.querySelectorAll("button").forEach((item) => {item.style.pointerEvents = ""});
    Array.from(carousel.children).forEach((item) => {item.style.transition = ""});


}

carousel.querySelector(".active").ontransitionstart = (event) => {
    carousel.children[carousel_counter].classList.remove("active");
    carousel_overlay.querySelectorAll("button")[carousel_counter].classList.remove("active");
    carousel_overlay.querySelectorAll("button").forEach((item) => {item.style.pointerEvents = "none"});

    carousel_counter++;
    carousel_counter%=3;
    carousel.children[carousel_counter].classList.add("active");
    carousel_overlay.querySelectorAll("button")[carousel_counter].classList.add("active")

    
}
let translate_holder;
carousel_overlay.querySelectorAll("button").forEach((item, index) => {
    item.onclick = (event) => {
        if (event.target.classList.contains("active")) {return;}
        carousel_overlay.querySelectorAll("button").forEach((item) => {item.style.pointerEvents = ""});
        translate_holder = moving_elements(carousel, 100, carousel.children[index])[0][1].forEach((item) => {return 0;})
        carousel_counter = (index+1)%3;
        Array.from(carousel.children).forEach((item) => {item.style.transition = "1s ease-in-out translate"})

        
        

    }
    

})

/*
$("#inspo > h1").css("background-position-y", "100%")
$("#inspo > h1").on("transitionend", (event) => {
    if ($("#inspo > h1").css("background-position-y") == "0%") {
        $("#inspo > h1").css("background-position-y", "100%")
    } else {
        $("#inspo > h1").css("background-position-y", "0%")
    }
})
*/