import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.nio.Buffer;
import java.util.ArrayList;

/**
 * Created by Fisher Darling on 7/15/2017.
 */

public class PageMagic {

    public static void main(String[] args) {
        PageMagic image = new PageMagic();
        image.loadImage("C:\\Users\\fdarl\\Desktop\\215new.jpg");
        image.init();
    }

    private BufferedImage image;
    private BufferedImage cropImage;

    private int numPages;
    private double sliceWidth;

    private int width;
    private int height;

    private int cropHeight;
    private int cropWidth;

    private BufferedImage[] slices;

    public PageMagic() {
        image = null;
        numPages = 0;
        sliceWidth = 0;
    }

    public PageMagic(String path, int pages) {
        loadImage(path);
        numPages = pages;
        init();
    }

    public void loadImage(String path) {
        try {
            image = ImageIO.read(new File(path));
        } catch (Exception e) {
            e.printStackTrace();
            System.exit(1);
        }
    }

    private void init() {
        //Assuming user is cropping image.
        //cropImage = getCroppedImage(image, 2.0);
        width = image.getWidth();
        height = image.getHeight();

        sliceWidth = Math.round(width / numPages);

        createSlices();
    }

    private void createSlices() {
        slices = new BufferedImage[numPages];

        int pixOff = sliceWidth * numPages - width;

        for(i = 0; i < slices.length; i++) {
            subimg = new BufferedImage(Math.max(sliceWidth, 16), height, image.getType());
        }



    }

    private void split() {

    }

    /**
     * Taken from StackOverflow: https://stackoverflow.com/questions/10678015/how-to-auto-crop-an-image-white-border-in-java
     *
     * Simple algorithm that takes the top left pixel and removes all pixels that are with a certain percentage of the
     * top pixel. Crops the background of an image.
     *
     *
     * @param source The source image to be cropped.
     * @param tolerance The percentage away that a  pixel can be from the top left pixel.
     * @return A new BufferedImage cropped image.
     */
    public BufferedImage getCroppedImage(BufferedImage source, double tolerance) {
        // Get our top-left pixel color as our "baseline" for cropping
        int baseColor = source.getRGB(0, 0);

        int width = source.getWidth();
        int height = source.getHeight();

        int topY = Integer.MAX_VALUE, topX = Integer.MAX_VALUE;
        int bottomY = -1, bottomX = -1;
        for(int y=0; y<height; y++) {
            for(int x=0; x<width; x++) {
                if (colorWithinTolerance(baseColor, source.getRGB(x, y), tolerance)) {
                    if (x < topX) topX = x;
                    if (y < topY) topY = y;
                    if (x > bottomX) bottomX = x;
                    if (y > bottomY) bottomY = y;
                }
            }
        }

        BufferedImage destination = new BufferedImage( (bottomX-topX+1),
                (bottomY-topY+1), BufferedImage.TYPE_INT_ARGB);

        destination.getGraphics().drawImage(source, 0, 0,
                destination.getWidth(), destination.getHeight(),
                topX, topY, bottomX, bottomY, null);

        return destination;
    }

    private boolean colorWithinTolerance(int a, int b, double tolerance) {
        int aAlpha  = (int)((a & 0xFF000000) >>> 24);   // Alpha level
        int aRed    = (int)((a & 0x00FF0000) >>> 16);   // Red level
        int aGreen  = (int)((a & 0x0000FF00) >>> 8);    // Green level
        int aBlue   = (int)(a & 0x000000FF);            // Blue level

        int bAlpha  = (int)((b & 0xFF000000) >>> 24);   // Alpha level
        int bRed    = (int)((b & 0x00FF0000) >>> 16);   // Red level
        int bGreen  = (int)((b & 0x0000FF00) >>> 8);    // Green level
        int bBlue   = (int)(b & 0x000000FF);            // Blue level

        double distance = Math.sqrt((aAlpha-bAlpha)*(aAlpha-bAlpha) +
                (aRed-bRed)*(aRed-bRed) +
                (aGreen-bGreen)*(aGreen-bGreen) +
                (aBlue-bBlue)*(aBlue-bBlue));

        // 510.0 is the maximum distance between two colors
        // (0,0,0,0 -> 255,255,255,255)
        double percentAway = distance / 510.0d;

        return (percentAway > tolerance);
    }



}
