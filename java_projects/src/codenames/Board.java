package codenames;

public class Board {
    private PlayingCard[] board = pickCards();
    private ColorCard colorCard = new ColorCard();

    public Board() {
    }

    private PlayingCard[] pickCards() {
        PlayingCard[] cards = new PlayingCard[25];

        for (int i = 0; i < cards.length; ++i) {
            cards[i] = new PlayingCard(words[i]);
        }

        return cards;
    }

    public void newColorCard() {
        colorCard = new ColorCard();
    }

    public void displayColorCard() {
        colorCard.displayCard();
    }

    public PlayingCard getCard(int index) {
        return board[index];
    }

    public boolean hasWinner() {
        return false;
    }
    
    public void display() {
        for (int i = 0; i < board.length; ++i) {
//            String color = board[i].getDisplayColor();
            System.out.print(/*color + */board[i].getText()/* + defaultColor*/);

            if ((i + 1) % 5 == 0) System.out.println("\n");
            else System.out.print("\t");
        }
    }

    static String[] words = {
            "fence",
            "ball",
            "court",
            "judge",
            "jail",
            "leg",
            "hand",
            "foot",
            "steal",
            "New York",
            "building",
            "London",
            "Tel Aviv",
            "Shanghai",
            "United States",
            "England",
            "France",
            "Germany",
            "China",
            "Italy",
            "play",
            "science",
            "war",
            "crash",
            "plane",
    };
}
