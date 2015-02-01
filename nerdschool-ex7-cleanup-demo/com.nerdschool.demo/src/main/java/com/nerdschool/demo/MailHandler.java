package com.nerdschool.demo;

public class MailHandler {

    public Mail createMail(String from, String to, String body){
        Mail dailyExpensesMail = new Mail();
        dailyExpensesMail.setBody(body);
        dailyExpensesMail.setFrom(from);
        dailyExpensesMail.setTo(to);
        return dailyExpensesMail;
    }
}
