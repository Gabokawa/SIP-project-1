
  var r, g, b;
  r = 255;
  g = 0;
  b = 0;
  setInterval(function() {
    if ((r == 255 && g < 255) && b == 0){
      g++;
      document.getElementById("lmao").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }
    else if (g == 255 && r > 0){
      r--;
      document.getElementById("lmao").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }
    else if (g == 255 && b < 255){
      b++;
      document.getElementById("lmao").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }
    else if (b == 255 && g > 0){
      g--;
      document.getElementById("lmao").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }
    else if (b == 255 && r < 255){
      r++;
      document.getElementById("lmao").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }
    else if (r == 255 && b > 0){
      b--;
      document.getElementById("lmao").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }
  }, 10);
