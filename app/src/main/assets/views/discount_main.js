window.onload = function () {
    //получаемтекущий открытый чек
    var slip = JSON.parse(receipt.getReceipt());
    //показываем сумму покупки чека
    document.getElementById("sum").innerHTML = "totalSum: " + slip.receiptData.totalSum + " totalSumWithoutDiscount: " + slip.receiptData.totalSumWithoutDiscount;
    document.getElementById("discount").value = slip.receiptData.totalSum;
};

//устанавливаем скидку на весь чек
function setDiscount(){
    var discount = document.getElementById("discount").value;
    logger.log("DISCOUNT: " + discount);
    receipt.applyReceiptDiscount(discount);
    navigation.pushNext();
}