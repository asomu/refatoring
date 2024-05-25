
function statement(invoice, plays) {
    let totalAmout = 0;
    let volumeCredits = 0;
    let result = `청구 내역 (고객명: ${invoice.customer})\n`;
    const format = new Intl.NumberFormat("en-US",
        {
            style: "currency", currency: "USD", minimumFactionDigist: 2
        }).format;

    for (let pref of invoice.performances) {
        const play = plays[pref.playID];
        let thisAmout = 0;

        switch (play.type) {
            case "traged":
                thisAmout = 40000;
                if (pref.audience > 30) {
                    thisAmout += 1000 * (pref.audience - 30);
                }
                break;
            case "comedy":
                thisAmount = 30000;
                if (pref.audience > 20) {
                    thisAmout += 1000 + 500 * (pref.audience - 20);
                }
                thisAmout += 300 * pref.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르: ${play.type}`);
        }
        volumeCredits += Math.max(pref.audience - 30, 0);
        if ("comedy" == play.type) volumeCredits += Math.floor(pref.audience / 5);

        result += `${paly.name}: ${format(thisAmout / 100)} (${pref.audience}석)\n`;
        totalAmout += thisAmout;
    }
    result += `총액: ${format(totalAmount / 100)}\n`;
    result += `적립 포인트: ${volumeCredits}점\n`;
    return result;
}

