//var passedData = JSON.parse(jsData.getData());
//
//window.onload = function () {
//    //берем данные из другого окна
//    //получаемтекущий открытый чек
//    var slip = passedData.receipt;
//    //показываем сумму покупки чека
//    document.getElementById("sum").innerHTML = "totalSum: " + slip.receiptData.totalSum + " totalSumWithoutDiscount: " + slip.receiptData.totalSumWithoutDiscount;
//};

//добавим немного кетчупа! ))
function add(){
    var qty = document.getElementById("qty").value;
    logger.log("QTY: " + qty);
    var position = {
        "uuid" : "8b90f73b-8860-400c-b9e4-26d1d3f75817",
        "productUuid" : "3dc58d3c-9e03-432c-8b92-56fbb1484c51",
        "productCode" : "123456",
        "productType" : "NORMAL",
        "name" : "Кетчуп",
        "measureName" : "шт",
        "measurePrecision" : 0,
        "price" : "77",
        "quantity" : "1"
    };
    receipt.addPosition(JSON.stringify(position));
    navigation.pushNext();
}