var topInt = 0, backgroundInt = 0, bottomInt = 0, shoesInt = 0;

function topOneClicked()
{
    topInt = 1;
    putClothesOn();
}

function topTwoClicked()
{
    topInt = 2;
    putClothesOn();
}

function topThreeClicked()
{
    topInt = 3;
    putClothesOn();
}

function shoesOneClicked()
{
    shoesInt = 1;
    putClothesOn();
}


function shoesTwoClicked()
{
    shoesInt = 2;
    putClothesOn();
}

function shoesThreeClicked()
{
    shoesInt = 3;
    putClothesOn();
}

function bottomOneClicked()
{
    bottomInt = 1;
    putClothesOn();
}

function bottomTwoClicked()
{
    bottomInt = 2;
    putClothesOn();
}

function bottomThreeClicked()
{
    bottomInt = 3;
    putClothesOn();
}

function backgroundOneClicked()
{
    backgroundInt = 1;
    putClothesOn();
}

function backgroundTwoClicked()
{
    backgroundInt = 2;
    putClothesOn();
}

function backgroundThreeClicked()
{
    backgroundInt = 3;
    putClothesOn();
}

/*   When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleVisibility(image)
{
    imageBlock = document.getElementById(image);

    if (imageBlock.style.display === 'none') {
        imageBlock.style.display = 'block';  // Show the image
    } else {
        imageBlock.style.display = 'none';   // Hide the image
    }
}

function clicked(dropdownId)
{
    //close all open dropdown first
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for(var i = 0; i < dropdowns.length; ++i)
    {
        var openDropdown = dropdowns[i];
        if(openDropdown.id !== dropdownId)
        {
            //close other
            openDropdown.classList.remove("show");
        }
    }

    //toggle the clciked dropdown
    document.getElementById(dropdownId).classList.toggle("show");

}


window.onclick = function(e)
{
    if(!e.target.matches('.dropbutton'))
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for(var i = 0; i < dropdowns.length; ++i)
	{
	    var openDropdown = dropdowns[i];
	    if(openDropdown.classList.contains('show'))
        {
            openDropdown.classList.remove('show');
	}
        }
    }
}

//background change
function putClothesOn()
{
    let top = "", bottom = "", shoes = "", backgroundStr = "";
    switch(topInt)
    {
        case 1:
            top = "url('images/top1.png'), ";
            break;
        case 2:
            top = "url('images/top2.png'), ";
            break;
        case 3:
            top = "url('images/top3.png'), ";
        default: 
            break;
    }

    switch(bottomInt)
    {
        case 1:
            bottom = "url('images/bottom1.png'), ";
            break;
        case 2:
            bottom = "url('images/bottom2.png'), ";
            break;
        case 3:
            bottom = "url('images/bottom3.png'), ";
        default: 
            break;
    }

    switch(shoesInt)
    {
        case 1:
            shoes = "url('images/shoes1.png'), ";
            break;
        case 2:
            shoes = "url('images/shoes2.png'), ";
            break;
        case 3:
            shoes = "url('images/shoes3.png'), ";
        default: 
            break;
    }

    switch(backgroundInt) {

        case 1:
            backgroundStr = "url('images/anteaterBase.png'), url('images/campfire.jpg');";
            break;
        case 2:
            backgroundStr = "url('images/anteaterBase.png'), url('images/campsite.jpg');";
            break;
        case 3:
            backgroundStr = "url('images/anteaterBase.png');";
            break;
        default:
            backgroundStr = "url('images/anteaterBase.png'); ";
    }

    
    //let backgroundConstants = ";background-size: contain;background-position: center;background-repeat: no-repeat;"

    let result = "background: " + top + bottom + shoes  + backgroundStr;// + backgroundConstants;

    let backgroundPic = document.getElementById("outfit");
    backgroundPic.style = result;

    // Set specific styles for the background layer
    backgroundPic.style.backgroundSize = "contain, contain, contain, contain, cover"; // Background fills container; others keep default
    backgroundPic.style.backgroundPosition = "center, center, center, center, center"; // Center all layers
    backgroundPic.style.backgroundRepeat = "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat"; // Prevent repetition


}