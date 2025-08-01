// JavaScript Document

var imgArray = [
      'image1lg.jpg',
      'image2lg.jpg',
      'image3lg.jpg',
      'image4lg.jpg'
    ];

    var titleArray = [
      'Heron',
      'Quail',
      'Owl',
      'Geese'
    ];

    var imgPath = "images/";

    function swapImage(imgID) {
      var theImage = document.getElementById('theImage');
      var textDiv = document.getElementById('bottomText');
      theImage.src = imgPath + imgArray[imgID];
      textDiv.innerHTML = titleArray[imgID];
    }

    function preloadImages() {
      const btn1 = new Image();
      btn1.src = "images/print1.png";

      const btn2 = new Image();
      btn2.src = "images/print2.png";

      const logo1 = new Image();
      logo1.src = "images/logo1.png";

      const logo2 = new Image();
      logo2.src = "images/logo2.png";

      for (var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image();
        tmpImg.src = imgPath + imgArray[i];
      }
    }