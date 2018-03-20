var interval = null;
window.onload = function()
{/*
    var height = window.innerHeight;
    var width = window.innerWidth;
    var maindiv = document.getElementsByClassName("maindiv");
    var maindivLength = maindiv.length;
    for(var i = 0; i < maindivLength; i++)
    {   
        var maindivTo = maindiv[i];
        initMainDiv(maindivTo,height,width);
    }*/

    var h = window.innerHeight;
    var w = window.innerWidth;
    var count = (h-20) / 30;
    var root = document.createElement("div");
    var size = h;
    styleMyDivGus(root, size, size);
    body.appendChild(root);
    while(count > 0)
    {
        var div = document.createElement("div");
        styleMyDivGus(div);
        div.onmousemove = function()
        {
            this.style.backgroundColor = `rgb(${getRndInteger(0, 255)},${getRndInteger(0, 255)},${getRndInteger(0, 255)})`;
        };
        root.appendChild(div);
        root = div;
        count--;
    }
    interval = setInterval(function()
    {
        var divs = document.getElementsByTagName("div");
        for(var current in divs)
        {
            try
            {
            divs[current].style.backgroundColor = `rgba(${getRndInteger(0, 255)},${getRndInteger(0, 255)},${getRndInteger(0, 255)},${Math.random()})`;
            }
            catch(error)
            {
                console.log(current);
            }
            finally
            {

            }
        }
    },1);


};

function styleMyDivGus(div, height, width)
{
    div.style.height = height;
    div.style.width = width;
    div.style.padding = "15px";
};
function getRndInteger(min, max) 
    {
        return Math.floor(Math.random() * (max - min) ) + min;
    };

/*
function initMainDiv(maindiv, height, width)
{
    maindiv.style.height = height;
    maindiv.style.width = width;
    maindiv.style.height = height;
    var count = (height-20) / 10
    while (count > 0)
    {

    }









    /*var div2 = maindiv.getElementsByTagName("div");
    var div2Cont = div2[0];
    startChangeDiv(div2Cont);
    var div3 = div2Cont.getElementsByTagName("div");
    var div3Cont = div3[0];
};
function startChangeDiv(div)
{
    setInterval(function()
    {   
        var randomColor = getRndInteger(0, 255);
        var randomColor2 = getRndInteger(0, 255);
        var randomColor3 = getRndInteger(0, 255);
        div.style.backgroundColor = `rgb(${randomColor},${randomColor2} ,${randomColor3})`;
    },1000);
    function getRndInteger(min, max) 
    {
        return Math.floor(Math.random() * (max - min) ) + min;
    };
};
*/