window.onload = function()
{
    ////carrousel
    var carrouselContainer = document.getElementsByClassName("carrousel");
    var carouselLength = carrouselContainer.length;
    for(var i = 0; i < carouselLength; i++)
    {
        var carrouselTo = carrouselContainer[i];
        initCarrousel(carrouselTo);
    }

};


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


