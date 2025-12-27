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


function moving_elements(parent, spacing, direction = "left") {
    let left_end = window.getComputedStyle(parent.children[parent.childElementCount-1]).translate;
    left_end = Number(left_end.slice(0, left_end.length-1));
    let right_end = window.getComputedStyle(parent.children[parent.childElementCount-2]).translate;
    right_end = Number(right_end.slice(0, right_end.length-1));
    let unit = window.getComputedStyle(parent.children[0]).translate.slice(-1);
    console.log(parent, left_end, right_end)
    Array.from(parent.children).forEach((item) => {
        item.style.translate = window.getComputedStyle(item).translate
        if (left_end > Number(item.style.translate.slice(0, item.style.translate.length-1))) {
            left_end = Number(item.style.translate.slice(0, item.style.translate.length-1));
        }
        if (right_end < Number(item.style.translate.slice(0, item.style.translate.length-1))) {
            right_end = Number(item.style.translate.slice(0, item.style.translate.length-1));
        }
        
        
        
        
    });
    
    

    if (direction == "left") {
        Array.from(parent.children).forEach((item) => {
            translate_number = Number(item.style.translate.slice(0,item.style.translate.length-1))
            console.log(translate_number)
            if (translate_number == left_end) {item.style.contentVisibility = "hidden"; item.style.translate = right_end+"%"; return;}
            item.style.translate = (translate_number-spacing) + "%";
            if (translate_number == 0 || translate_number == spacing) {
                item.style.contentVisibility = "";
            }
            
            
       })
        
        
        
        
        
    } else if (direction == "right") {

    }
    
}


let carousel_counter = 0;
carousel.children[carousel_counter].classList.add("active");
moving_elements(carousel, 100);
carousel.querySelector(".active").ontransitionend = (event) => {
    console.log(event)
    moving_elements(carousel, 100);


}

carousel.querySelector(".active").ontransitionstart = (event) => {
    carousel.children[carousel_counter].classList.remove("active");

    carousel_counter++;
    carousel_counter%=3;
    carousel.children[carousel_counter].classList.add("active");
    
    
}


/*let carousel_counter = 0;

carousel.children[carousel_counter].style.transform = "translate(-100%)";
carousel.children[carousel_counter+1].style.transform = "translate(0%)";
carousel.children[carousel_counter].classList.add("active");
carousel_overlay.querySelector('div').children[carousel_counter].classList.add("active");

console.log("yay1");

carousel.querySelector(".active").ontransitionend = (event) => {
    carousel.children[carousel_counter].classList.remove("active");
    carousel_overlay.querySelector('div').children[carousel_counter].classList.remove("active");

    Array.from(carousel.children).forEach((item, index) => {
        index = carousel.childElementCount - 1 - index;
        item = carousel.children[index];
        carousel_counter++;
        carousel_counter%=carousel.childElementCount;
        item.style.transform = `translate(${100-carousel_counter*100}%)`;
        if (carousel_counter == 0) {
            item.style.opacity = 0;
            item.style.contentVisibility= "hidden"
        } else {
            item.style.opacity = 1;
            item.style.contentVisibility = ""
        }
    });

    carousel_counter++;
    carousel_counter%=carousel.childElementCount;
    carousel.children[carousel_counter].classList.add("active");
    carousel_overlay.querySelector('div').children[carousel_counter].classList.add("active");
    carousel_overlay.querySelectorAll("button").forEach((item) => {item.style.pointerEvents = ""});
    return;
}
carousel.querySelector(".active").ontransitionstart = (event) => {
    carousel_overlay.querySelectorAll("button").forEach((item) => {item.style.pointerEvents = "none"}
);
}*/

/*
let shift;

carousel_overlay.querySelectorAll("button").forEach((item, index) => {
    item.onclick = (event) => {
        console.log("clicked!!")
        shift = index - Array.from(carousel_overlay.querySelectorAll("button")).indexOf(carousel_overlay.querySelector(".active"))
        let overlay_counter = (carousel_counter + 2)%3
        if (shift == Math.abs(shift)) {
            
            Array.from(carousel.children).forEach((picture, index) => {
                    index = carousel.childElementCount - 1 - index;
                    picture = carousel.children[index];
                    if(picture.className.includes("active")) {
                        console.log(picture)
                        picture.style.transition = "none";
                        picture.style.transform = `translate(${-100+index*100}%)`;
                        picture.style.transition = "";
                        overlay_counter++;
                        overlay_counter%=3;
                    } else {
                        //window.getComputedStyle(picture).transform;
                        picture.style.transition = "none";
                        picture.style.transform = `translate(${100-overlay_counter*100}%)`;
                        overlay_counter++;
                        overlay_counter%=3;
                    }
            });
            
            
        }
    }
})
*/

$("#inspo > h1").css("background-position-y", "100%")
$("#inspo > h1").on("transitionend", (event) => {
    if ($("#inspo > h1").css("background-position-y") == "0%") {
        $("#inspo > h1").css("background-position-y", "100%")
    } else {
        $("#inspo > h1").css("background-position-y", "0%")
    }
})