// Random thought. But on home page I can have the profile pictures turn into a color ball
// Then the colored ball can parallax around the page till the next section/article placement
// Then change from colored ball to the image again.

let profile = document.getElementsByClassName("profile");
let counter = 0;
let timeout;

window.addEventListener("wheel", e => {
    e.preventDefault();
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        scrollProfile(e.deltaY);
    }, 200);
    
}, { passive: false })

function scrollProfile(direction) {
    if (direction < 0) {
        if (counter > 0) {
            counter--;
        }
        switch (counter) {
            case 0:
                profile[counter].scrollIntoView();
            case 1:
                profile[counter].scrollIntoView();
        }
    } else if (direction > 0) {
        if (counter < 2) {
            counter++;
        }
        switch (counter) {
            case 1:
                profile[counter].scrollIntoView();
            case 2:
                profile[counter].scrollIntoView();
        }
    }
    
}