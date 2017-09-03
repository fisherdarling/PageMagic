const Jimp = require("Jimp");

function magic(path, numPages) {
    Jimp.read(path, function(err, image) {
        if (err) {
            console.log(err);
        }

        image.resize(numPages, Jimp.AUTO, Jimp.RESIZE_NEAREST_NEIGHBOR);

        var new_img = new Jimp(
            10 * (image.bitmap.width + 1),
            image.bitmap.height + 82,
            0xffffffff
        );

        var pImgW = image.bitmap.width;
        var pImgH = image.bitmap.height;

        var imgW = new_img.bitmap.width;
        var imgH = new_img.bitmap.height;

        // Transfer slices of the original image to the new image.

        for (var i = 0; i < pImgW; i++) {
            for (var j = 0; j < 40; j++) {
                if (j > 4 && j < 29) {
                    new_img.setPixelColor(0x000000ff, (i + 1) * 10 + 1, j);
                } else if (j == 39) {
                    new_img.setPixelColor(0x000000ff, (i + 1) * 10 + 1, j);
                }
            }

            for (var j = 0; j < pImgH; j++) {
                // console.log(i, j);
                new_img.setPixelColor(
                    image.getPixelColor(i, j),
                    (i + 1) * 10 + 1,
                    j + 42
                );
            }

            for (var j = imgH + 42; j > pImgH + 42; j--) {
                if (j > pImgH + 53 && j < pImgH + 78) {
                    new_img.setPixelColor(0x000000ff, (i + 1) * 10 + 1, j);
                } else if (j == pImgH + 44) {
                    new_img.setPixelColor(0x000000ff, (i + 1) * 10 + 1, j);
                }
            }
        }

        // new_img.autocrop();

        var file = "imageProcessed." + image.getExtension();
        new_img.write(file);
    });
}
