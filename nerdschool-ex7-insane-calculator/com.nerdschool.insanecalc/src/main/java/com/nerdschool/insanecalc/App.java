package com.nerdschool.insanecalc;

public class App
{
    public static void main( String[] args )
    {
        Object result = Calculator.calculate("* 2 1");
        System.out.print(result.toString());
    }
}
