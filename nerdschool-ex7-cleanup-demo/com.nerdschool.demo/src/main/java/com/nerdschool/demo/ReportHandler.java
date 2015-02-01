package com.nerdschool.demo;

public class ReportHandler {

    private ReportsRepository reportsRepository;
    private MailsRepository mailsRepository;
    private MailHandler mailHandler;

    public ReportHandler(){
        reportsRepository = new ReportsRepository();
        mailsRepository = new MailsRepository();
        mailHandler = new MailHandler();
    }

    public void sendDailyExpenseReportToCeo(){
        Report expenseReport = getLatestExpenseReport();

        sendReportToCeo(expenseReport);

        updateReportStatus(expenseReport);
    }

    private void updateReportStatus(Report expenseReport) {
        setReportStatusToProcessed(expenseReport);
        reportsRepository.update(expenseReport);
    }

    private void setReportStatusToProcessed(Report expenseReport) {
        expenseReport.setStatus(Report.STATUS_PROCESSED);
    }

    private void sendReportToCeo(Report expenseReport) {
        Mail dailyExpensesMail = createMailForCeo(expenseReport);

        dailyExpensesMail.send();

        saveMail(dailyExpensesMail);
    }

    private void saveMail(Mail dailyExpensesMail) {
        mailsRepository.save(dailyExpensesMail);
    }

    private Mail createMailForCeo(Report expenseReport) {
        return mailHandler.createMail("reportHandler@firm.com", "ceo@firm.com", expenseReport.getContent());
    }

    private Report getLatestExpenseReport() {
        return reportsRepository.getLatestReport();
    }

}
