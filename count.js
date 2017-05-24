function counts(){

  if ((input.value).length > 0) {
      var isinarray = false;
      if (names.length) {
          //is it in the array nsomewhere
          var x;
          for (x = 0; x < names.length; x++) {
              if (input.value == names[x]) {
                  isinarray = true;

              }
          }

          if (!isinarray) {
              names[names.length] = input.value;
              counter++;

          }
      } else {
          names[0] = input.value;
          counter++;
      }
}
};
