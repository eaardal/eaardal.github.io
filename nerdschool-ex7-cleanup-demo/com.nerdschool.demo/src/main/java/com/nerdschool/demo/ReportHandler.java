package com.nerdschool.demo;

public class ReportHandler {

    public void handleReport(){
        ReportsRepository reportsRepository = new ReportsRepository();
        Report expenseReport = reportsRepository.getLatestReport();
        Mail dailyExpensesMail = new Mail();
        dailyExpensesMail.setBody(expenseReport.getContent());
        dailyExpensesMail.setFrom("reportHandler@firm.com");
        dailyExpensesMail.setTo("ceo@firm.com");
        dailyExpensesMail.send();
        MailsRepository mailsRepository = new MailsRepository();
        mailsRepository.save(dailyExpensesMail);
        expenseReport.setStatus(Report.STATUS_PROCESSED);
        reportsRepository.update(expenseReport);
    }

}
