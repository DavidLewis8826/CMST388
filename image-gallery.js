//Set up this array as it's used so there would not be a bunch of repeated coding. 
const pics = ["picOne", "picTwo", "picThree", "picFour", "picFive"];
//Checks to see if mouse is over thubnails if show triggers showBlock function.
document.getElementById("thumbnails").onmouseover = function() {showBlock()};
//Checks to see if mouse leaves thubnails if show triggers hideBlock function.
document.getElementById("thumbnails").onmouseleave = function() {hideBlock()};
//If the div id button is clicked triggers showButton function.
document.getElementById("button").onclick = function() {showButton()};
//Starts showBlock function.
function showBlock(){
	document.getElementById("one").style.display = "block"; //Used to display the block
    document.getElementById("one").style.backgroundColor = "whitesmoke"; //Background color added for style.
    document.getElementById("one").style.fontSize ="Large"; //Font Size added for style.
    //Since showBlock will be triggered the whole time the mouse if over thumbnail no need for a while loop
    //This for loop cycles through the array pics which has the id of each of the images in the thumbnails div.
    for(let i = 0;i < pics.length;i++) {
            //When one of the images in thumbnails div have mouse over it triggers updateText function.
            //This also passes what image has the mouse over it to the updateText function.
            document.getElementById(pics[i]).onmouseover = function() {updateText(i)};
            //When one of the images in thumbnails div are clicked triggers updateMain function.
            //This also passes what image was clicked  to the updateMain function.
            document.getElementById(pics[i]).onclick = function() {updateMain(i)};
        }//Ends for loop
} //Ends function showBlock.
//Starts hideBlock function.
function hideBlock(){ 
    document.getElementById("one").style.display = "none"; //used to set the display back to none.
}//Ends hideBlock function.
//Starts updateText. Receives what images has the mouse over it.
function updateText(whatPic){
    //If Array was at 0 updates for the 1st image. 
    if(whatPic == 0){
        document.getElementById("one").innerHTML = "This is a picture of the center region of the milkway taken by the Hubble Space Telescope by NASA.";
    }
    //If Array was at 1 updates for the 2nd image. 
    if(whatPic == 1){
        document.getElementById("one").innerHTML = "This is a picture of a generated starscapre that is made to be a nebulae.";
    }
    //If Array was at 2 updates for the 3rd image. 
    if(whatPic == 2){
        document.getElementById("one").innerHTML = "This is a picture of a cosmic galaxy with plants and space object. This picture was even furnished by NASA!";
    }
    //If Array was at 3 updates for the 4th image. 
    if(whatPic == 3){
        document.getElementById("one").innerHTML = "This is a picture of a star field Nebulosity. Just showing just how many stars there are.";
    }
    //If Array was at 4 updates for the 5th image. 
    if(whatPic == 4){
        document.getElementById("one").innerHTML = "This is a picture of our plant Earth back in 2001/2002. It shows both sides of the Earth.";
    }
} //Ends updateText function.
//Starts updateMain. Receives what images was clicked.
function updateMain(whatPic){
    //This for loop is used to set all the images border to none. 
    //This is just encase there was already a image with a border on it. 
    for(let i = 0;i < pics.length;i++) {
        document.getElementById(pics[i]).style.border = "none";
    }
    //With the pics array number updates that images border. 
    document.getElementById(pics[whatPic]).style.border = "thick solid #FFFFFF";
    //If Array was at 0 updates for the 1st image. Both the largeImage ID source and the bottom caption innerHTML.
    if(whatPic == 0){
        document.getElementById("largeImage").src = "img/pic1.jpg";
        document.getElementById("caption").innerHTML = "This is a picture of the center region of the milkway taken by the Hubble Space Telescope by NASA.";
    }
    //If Array was at 1 updates for the 2nd image. Both the largeImage ID source and the bottom caption innerHTML.
    if(whatPic == 1){
        document.getElementById("largeImage").src = "img/pic2.jpg";
        document.getElementById("caption").innerHTML = "This is a picture of a generated starscapre that is made to be a nebulae.";
    }
    //If Array was at 2 updates for the 3rd image. Both the largeImage ID source and the bottom caption innerHTML.
    if(whatPic == 2){
        document.getElementById("largeImage").src = "img/pic3.jpg";
        document.getElementById("caption").innerHTML = "This is a picture of a cosmic galaxy with plants and space object. This picture was even furnished by NASA!";
    }
    //If Array was at 3 updates for the 4th image. Both the largeImage ID source and the bottom caption innerHTML.
    if(whatPic == 3){
        document.getElementById("largeImage").src = "img/pic4.jpg";
        document.getElementById("caption").innerHTML = "This is a picture of a star field Nebulosity. Just showing just how many stars there are.";
    }
    //If Array was at 4 updates for the 5th image. Both the largeImage ID source and the bottom caption innerHTML.
    if(whatPic == 4){
        document.getElementById("largeImage").src = "img/pic5.jpg";
        document.getElementById("caption").innerHTML = "This is a picture of our plant Earth back in 2001/2002. It shows both sides of the Earth.";
    }
    //Onces an image has been selected at least onces displays the div with the id button at the bottom
    document.getElementById("button").style.display = "block";
} //Ends updateMain function.
//Starts showButton function.
function showButton(){
    //Changes the paragraph with id sources to display block and leaves it up. 
    document.getElementById("sources").style.display = "block";
} //Ends showButton function. 