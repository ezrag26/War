package codenames;

import java.util.Scanner;

public class CodeNames {
    public static void main(String[] args) {
        Team[] teams = {new Team("red"), new Team("blue")};

        Team current = teams[0];
        Board board = new Board();

        board.displayColorCard();
        board.display();

        while (true) {
            System.out.println(current.getName() + "'s turn");
            Clue clue = Clue.create(current);

            boolean acceptedClue = clue.send(current);

            boolean guessedAll = getGuesses(board, clue, current);

            if (guessedAll) {
                if (board.hasWinner()) /* TODO */ break;
                getBonusGuess();
            }

            if (board.hasWinner()) /* TODO */ break;

            current = current == teams[0] ? teams[1] : teams[0];

        }

        board.display();
    }

    private static class Clue {
        String text;
        int numCards;

        private Clue() {}

        public static Clue create(Team team) {
            Clue clue = new Clue();

            System.out.print("Clue: ");
            Scanner input = new Scanner(System.in);
            clue.text = input.nextLine();

            System.out.print("Number of cards: ");
            input = new Scanner(System.in);
            clue.numCards = Integer.parseInt(input.nextLine());

            return clue;
        }

        public boolean send(Team team) {
            return false;
        }
    }

    private static boolean getGuesses(Board board, Clue clue, Team current) {
        for (int i = 0; i < clue.numCards; ++i) {
            PlayingCard guess = board.getCard(getGuess());

            guess.guess();

            board.display();

            if (!guess.belongsTo().equals(current.getName())) return false;
        }

        return true;
    }

    private static int getGuess() {
        return 0;
    }

    private static void getBonusGuess() {

    }
}
