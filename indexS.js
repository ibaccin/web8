function lengthsecond()
{
    var jj = document.getElementById("textar").value;
    var inputarea = document.getElementById("pagesec");
    inputarea.value = jj.length;
};

function lengthfun()
{
        var  o = document.getElementById("textarea").value;
        document.getElementById("page").innerHTML ="In input is: \"" + (o.length + 1 )+ " \"symphols.";
};


function repl()
{
    var fromtextarea = document.getElementById("pole").value;
    var beftext = document.getElementById("beforetext").value;
    var aftext = document.getElementById("aftertext").value;
    document.getElementById("pole").value = fromtextarea.replace(beftext,aftext);
};
function TUC()
{
    var fromtextarea = document.getElementById("pole").value;
    document.getElementById("pole").value = fromtextarea.toUpperCase();
};
function TLC()
{
    var fromtextarea = document.getElementById("pole").value;
    document.getElementById("pole").value = fromtextarea.toLowerCase();
};








window.onload = function()
{
    var dolist = [];
    var listbutton = document.getElementById("toList");//добавляє елемент  в масив(уeл)
    listbutton.onclick = function()
    {
        var todo = prompt("Введіть дію:");
        dolist.push(todo);
        listUL.innerHTML += `<li> ${todo} </li>`;
        console.log(dolist);
    };

    var  tostr = document.getElementById("toString");//переводить весь масив в одну стрічку
    tostr.onclick =  function ()
    {
        
        alert(dolist.toString());//або замість   .join(" * ")  поставити .toString() елементи виведуться через кому
    };

    var dellast = document.getElementById("deletelast");//видаляє останній елемент ул-ла
    dellast.onclick = function ()
    {
        listUL.removeChild(listUL.childNodes[dolist.length]);//видаляє останній li з ul 
        //индексация масиву  починається з 0 [0,1,2,3],  а довжина 4
        //childNodes повертає 
        dolist.pop();
        console.log(dolist);
    };
    var modbut = document.getElementById("modalbutton");
    //кнопка модалкі яка дозволяє хаписувати текс с галочкой
    modbut.onclick = function ()
    {
        var valmodal = document.getElementById("textmodal").value;
        dolist.push(valmodal);
        
        var check = document.getElementById("checkmodal");
        if (check.checked == true)
        {
            listUL.innerHTML += `<li>  ${valmodal}  <input type=\"checkbox\" checked=\"checked\"  </li>`;
        }
        else
        {
            listUL.innerHTML += `<li> ${valmodal} <input type=\"checkbox\" </li>`;
        };
           check.checked = false;
           document.getElementById("textmodal").value = null;
    };










///////////////////////////////////////////////↓↓↓tabs
    var tabControls = document.getElementsByClassName("tabControl");
    for(var i = 0; i < tabControls.length; i++ )
    {
        var t = tabControls[i];
        InitTabControl(t);
    }


    //↓↓↓↓↓ звязались з контейнером табів
    var containerTabs = document.getElementsByClassName("tabContainers");
    var tabContLength = containerTabs.length;
    for(var i = 0; i < tabContLength; i++)
    {
        var tabContTo = containerTabs[i];
        initTabChild(tabContTo);
    }

    ////carrousel
    var carrouselContainer = document.getElementsByClassName("carrousel");
    var carouselLength = carrouselContainer.length;
    for(var i = 0; i < carouselLength; i++)
    {
        var carrouselTo = carrouselContainer[i];
        initCarrousel(carrouselTo);
    }

    setInterval(myFunc, 1000);
       
    function myFunc()
    {   
        var container = document.getElementById("changeColor");
        var randomColor = getRndInteger(0, 255);
        var randomColor2 = getRndInteger(0, 255);
        var randomColor3 = getRndInteger(0, 255);
        container.style.backgroundColor = `rgb(${randomColor}, ${randomColor2}, ${randomColor3})`;
        console.log(randomColor, randomColor2,randomColor3);
    }
    function getRndInteger(min, max) 
    {
        return Math.floor(Math.random() * (max - min) ) + min;
    };
};

function start()
{
    var hour  = document.getElementById("hour");
    var minutes  = document.getElementById("minutes");
    var seconds  = document.getElementById("seconds");
    var hourI = 0;
    var minutesI = 0;
    var secondsI = 0;
    setInterval(startTimer, 1000);
    function startTimer()
    {
        secondsI++;
        seconds.innerHTML = secondsI;
        if (secondsI > 58)
        {
            minutesI++;
            minutes.innerHTML = minutesI;
           
            if (minutesI > 58)
            { 
                hourI++;
                hour.innerHTML = hourI;
                minutesI = 0;
            }   
            secondsI = 0;
        }
        

    };
    function stop()
    {

    };
};
setInterval(function()
{
    var hourD  = document.getElementById("hourD");
    var minutesD  = document.getElementById("minutesD");
    var secondsD  = document.getElementById("secondsD");
    var h = new Date();
    hourD.innerHTML = h.getHours();
    minutesD.innerHTML = h.getMinutes();
    secondsD.innerHTML = h.getSeconds();
} ,1000);


/////carrousel
function initCarrousel(carrousel)
{
    var images = carrousel.getElementsByTagName("img");
    var imagesLength = images.length;
    var activeSlide = 1;
    if(images.length > 0)
    {
        images[0].setAttribute("class","active");
    }
    else
    {
        //Error
    }

    var next = carrousel.getElementsByClassName("next");
    var previous = carrousel.getElementsByClassName("previous");
    var nextLength = next.length;
    var previousLength = previous.length;


    var dotsContainer = carrousel.getElementsByClassName("dotss");
    var dotsLength = dotsContainer.length;
    
                
    for (var i = 0; i < nextLength; i++)
    {
        var nextBut = next[i];
        var previousBut = previous[i]
        var dots = dotsContainer[i];
        controlls(nextBut, previousBut,dots);
    }
    function controlls(nextButton, previousButton, dotsCont)
    {
        nextButton.addEventListener('click',nextButtonClick);
        previousButton.addEventListener('click',previousButtonClick);


        for(var i = 0; i < imagesLength;i++)
        {
            dotsCont.innerHTML += "<span class=\"dot\"></span>";
        }
        var dots = dotsCont.getElementsByClassName("dot");
        var dotsLength = dots.length;
        for (var i = 0; i < dotsLength; i++)
        {
            dots[i].setAttribute("value", i+1);
            dots[i].addEventListener("click", activeDots);
        }
        dots[0].className = "dot activedot";
        
       
        function activeDots()
        {
            var activeDot = this.getAttribute("value");
            elseSlide(activeDot);
        };
        
        
        function nextButtonClick()
        {
            elseSlide(activeSlide+1);
        };

        function previousButtonClick()
        {
            elseSlide(activeSlide-1);
        };
        function elseSlide(n)
        {
            activeSlide = n;
            if (n > imagesLength)
            {
                activeSlide = 1;
            }
            if (n < 1)
            {
                activeSlide = imagesLength;
            }
            for (i = 0; i < imagesLength; i++)
            {
                images[i].removeAttribute("class");
                dots[i].className = "dot";
            };
            images[activeSlide-1].className = " active";
            dots[activeSlide-1].className = "dot activedot";

        };
    };



};



//////↓ tabs and acordion
function InitTabControl(t)
{
    var tabs = t.getElementsByClassName("tab");
    for(var i = 0; i < tabs.length; i++)
    {
        var paragraph = tabs[i].getElementsByTagName("p");
        var headers = tabs[i].getElementsByTagName("h3");
        if (paragraph.length > 0 && headers.length > 0)
        {
            if ( i == 0)
                InitTabHeader(paragraph[0],headers[0], true);
                else
                InitTabHeader(paragraph[0],headers[0]);
        }
        
    }
};
function InitTabHeader(paragraph, header, isactive = false)
{
        var tab = paragraph.parentElement;
        var tabControl = tab.parentElement;
        
            paragraph.setAttribute("class", "inactive");
            header.onclick  = function()
            {
                var actives = tabControl.getElementsByClassName("active");
                for(var i = 0; i < actives.length; i++)
                {
                    actives[i].setAttribute("class","inactive");
                }
                paragraph.setAttribute("class", "active");
            };
        
};
//↓↓↓↓ звязались з контейнерами кнопоk і контентів
function initTabChild(maincont)
{
    var tabButtons = maincont.getElementsByClassName("tabButtons");
    var tabContents = maincont.getElementsByClassName("tabContents");
    var tabButtonsLength = tabButtons.length;
    var tabContentsLength = tabContents.length;
    for(var i = 0; i < tabButtonsLength; i++)
    {
        var buttonsTo = tabButtons[i];
        var contentTo = tabContents[i];
        buttonAndContent(buttonsTo, contentTo);
    }
};


//↓↓↓↓
function buttonAndContent(containerButt, contentContain)
{
    var buttons  = containerButt.getElementsByClassName("button");
    var buttonsLength = buttons.length;

    var contents  = contentContain.getElementsByTagName("p");
    var contentsLength = contents.length;
    var activeTab;

    if (buttonsLength == contentsLength)
    {
        for(var i = 0; i < buttonsLength; i++)
        {   
            buttons[i].addEventListener("click",buttonIsPressed);
            buttons[i].setAttribute("value",i+1);
            contents[i].setAttribute("value",i+1);
        }
    }
    else
    {
        //error
    }

    function buttonIsPressed()
    {
        var clickenButton = this.getAttribute("value");
        for (var i = 0; i <buttonsLength; i++)
        {
            var ifHave = contents[i].hasAttribute("class","active");
            if(ifHave == true)
            {
                contents[i].removeAttribute("class","active");
            }
                buttons[i].className = "button";
            
        }
        if(activeTab != clickenButton )
        {
            contents[clickenButton-1].setAttribute("class","active");
            buttons[clickenButton-1].className += " activeButton";
            activeTab = clickenButton;
        }
        else
        {
            activeTab = 0;
        }
        
    };
};



