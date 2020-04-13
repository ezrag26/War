package codenames;

public class ColorCard {
    private String[] colorCard = new String[25];
    private static final int blackSquares = 1;
    private static final int neutralSquares = 7;
    int redSquares = 8;
    int blueSquares = 8;

    public ColorCard() {
        if (Math.random() < 0.5) {
            ++redSquares;
        } else {
            ++blueSquares;
        }

        shuffleCard();
    }
    
    private void initCard() {
        colorCard[0] = "black";
        
        for (int i = 1; i <= neutralSquares; ++i) {
            colorCard[i] = "beige";
        }
        
        for (int i = neutralSquares + 1; i < neutralSquares + 1 + redSquares; ++i) {
            colorCard[i] = "red";
        }
        
        for (int i = neutralSquares + 1 + redSquares; i < colorCard.length; ++i) {
            colorCard[i] = "blue";
        }
    }
    
    public void displayCard() {
        for (int i = 0; i < colorCard.length; ++i) {
            System.out.print(colorCard[i]);

            if ((i + 1) % 5 == 0) System.out.println("\n");
            else System.out.print("\t");
        }
    }
    
    private void shuffleCard() {
        initCard();

        for (int i = 0; i < colorCard.length; ++i) {
            int index = (int)(Math.random() * (colorCard.length - i));
            String temp = colorCard[index];
            colorCard[index] = colorCard[colorCard.length - i - 1];
            colorCard[colorCard.length - i - 1] = temp;
        }
    }

    public String getColor(int square) {
        return colorCard[square - 1];
    }


}
