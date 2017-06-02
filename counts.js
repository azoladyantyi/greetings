function counts() {
    if ((input.value).length > 0) {
        var isinarray = false;
        if (names.length) {
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
    return isinarray;
};
