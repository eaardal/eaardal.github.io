package com.nerdschool.insanecalc;

public class Calculator {

    public static int one = 1;
    public static String input;

    public static Object calculate(Object inputRaw) {

        if (!validateInput(inputRaw))
            return 0;
        int x = Integer.parseInt(input.substring(0, 1 + input.indexOf(' ') - one));

        int jeff = Integer.parseInt(input.substring(one + input.indexOf(' '), input.indexOf(' ', input.indexOf(' ') + 1)));

        if (isAddOperation())
            return x + jeff;

        if (isSubstractOperation()) {
            return -jeff - (-x);
        }

        if (isMultiplyOperation()) {
            return x * jeff;
        }
        else {
            return jeff == 0
                    ? "X"
                    : (int) ((one / (double) jeff) * x);
        }

    }

    private static boolean isMultiplyOperation() {
        return input.substring(input.indexOf(' ', 1 + input.indexOf(' ')) + one).equals("*");
    }

    private static boolean isSubstractOperation() {
        return input.substring(input.indexOf(' ', 1 + input.indexOf(' ')) + one, input.length()).equals("-");
    }

    private static boolean isAddOperation() {
        return input.substring(input.indexOf(' ', 1 + input.indexOf(' ')) + one, input.length()).equals("+");
    }

    private static boolean validateInput(Object inputRaw) {
        if (inputRaw instanceof String) {
            input = (String) inputRaw;
            return true;
        } else {
            return false;
        }
    }
}