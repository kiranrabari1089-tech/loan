function checkLoan() {

    let name = document.getElementById("name").value;
    let income = parseInt(document.getElementById("income").value);
    let credit = parseInt(document.getElementById("credit").value);
    let loan = parseInt(document.getElementById("loan").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let time = parseInt(document.getElementById("time").value);

    let status = document.getElementById("status");
    let reason = document.getElementById("reason");
    let suggestion = document.getElementById("suggestion");
    let emiBox = document.getElementById("emi");
    let result = document.getElementById("result");

    if (!name || !income || !credit || !loan || !rate || !time) {
        result.innerHTML = "⚠️ Please fill all fields";
        return;
    }

    result.innerHTML = "⏳ AI is analyzing...";

    setTimeout(() => {

        let reasons = "";
        let suggestions = "";

        // EMI Calculation
        let monthlyRate = rate / 12 / 100;
        let emi = (loan * monthlyRate * Math.pow(1 + monthlyRate, time)) /
                  (Math.pow(1 + monthlyRate, time) - 1);

        emi = emi.toFixed(2);
        emiBox.innerHTML = "₹ " + emi;

        if (income >= 30000 && credit >= 700 && loan <= income * 10) {

            status.innerHTML = "✅ Approved";
            status.style.color = "#00ff9f";

            reason.innerHTML = "Strong financial profile";
            suggestion.innerHTML = "Eligible for premium loans";

            result.innerHTML = `🎉 ${name}, your loan is Approved!`;

        } else {

            status.innerHTML = "❌ Rejected";
            status.style.color = "#ff4d4d";

            if (income < 30000) {
                reasons += "Low income. ";
                suggestions += "Increase income. ";
            }

            if (credit < 700) {
                reasons += "Low credit score. ";
                suggestions += "Improve credit score. ";
            }

            if (loan > income * 10) {
                reasons += "Loan too high. ";
                suggestions += "Apply smaller loan. ";
            }

            reason.innerHTML = reasons;
            suggestion.innerHTML = suggestions;

            result.innerHTML = `❌ ${name}, your loan is Rejected`;
        }

    }, 1200);
}