package main.java;

import java.util.List;

public class TicTacToe {

    public static void main(String[] args) {
        int[][] moves = {{0,0},{1,1},{0,1},{0,2},{1,0},{2,0}};
        tictactoe(moves);
    }

    private static String tictactoe(int[][] moves) {
        int n =3;
        char[][] ticTacToe = new char[n][n];

        for (int i = 0; i< moves.length; i++) {
            int[] move = moves[i];
            int r = move[0];
            int c = move[1];
            if (i%2 == 0 && isValidMove(ticTacToe, r,c)) {
                    ticTacToe[r][c] = 'X';
            } else {
                if (isValidMove(ticTacToe, r,c))
                    ticTacToe[r][c] = 'O' ;
            }
        }

        String winner = checkWinner(ticTacToe);

       if (List.of("A","B").contains(winner)) {
           return winner;
       }
       return moves.length == n * n ? "Draw" : "Pending";

    }

    private static boolean isValidMove(char[][] ticTacToe, int r, int c) {
        return ticTacToe[r][c] == 0;
    }


    private static String checkWinner(char[][] tickTacToe) {
        StringBuilder colString = new StringBuilder();
        StringBuilder rowString = new StringBuilder();
        StringBuilder diagString = new StringBuilder();
        StringBuilder revDiagString = new StringBuilder();

        for (int row = 0; row < tickTacToe.length; row++) {
            char[] colValues = tickTacToe[row];
            for (int col = 0; col < colValues.length; col++) {

                rowString.append(tickTacToe[row][col]);
                if (!getWinner(rowString.toString()).equals(""))
                    return getWinner(rowString.toString());
            }
            rowString = new StringBuilder();
            diagString.append(tickTacToe[row][row]);
        }

        for (int col = 0; col < tickTacToe[0].length; col++) {
            for (int row = 0; row < tickTacToe.length; row++) {

                colString.append(tickTacToe[row][col]);
                if (!getWinner(colString.toString()).equals(""))
                    return getWinner(colString.toString());
            }
            colString = new StringBuilder();
        }

        for (int row =0; row < tickTacToe.length ; row++) {

            revDiagString.append(tickTacToe[row][tickTacToe.length -1 -row]);
        }

        return getWinner(diagString.toString()).isEmpty()?
                ( getWinner(revDiagString.toString()).isEmpty() ? "" : getWinner(revDiagString.toString())
                ) : getWinner(diagString.toString()) ;
    }

    private static String getWinner(String winner) {
        if (winner.equals("XXX"))
            return "A";
        else if (winner.equals("OOO"))
            return "B";
        return "";
    }

}
