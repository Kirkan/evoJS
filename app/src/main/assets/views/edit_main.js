var slip = JSON.parse(receipt.getReceipt());
var goods = [];
var ary = {};

//Получить список товаров из чека
function getData(){
    document.getElementById("edit").style.display = "none";
    if(slip.receiptData.positionsCount > 0){
        var html = '<table border="1" cellpadding="1" cellspacing="1" style="width:100%;"><tbody>';
        for (i in slip.receiptPositions){
            //logger.log(JSON.stringify(inventory.getProduct(slip.receiptPositions[i].uuid)));
            html +='<tr>'+
                '<td>'+ slip.receiptPositions[i].measureName + '</td>'+
                '<td>'+ slip.receiptPositions[i].price + '</td>'+
                '<td>'+ slip.receiptPositions[i].quantity + '</td>'+
                '<td>'+ slip.receiptPositions[i].total + '</td>'+
                '<td>'+
                '<button data="' + i + '" id="' + slip.receiptPositions[i].uuid + '" onclick="showEditData(this)">Edit</button>'+
                '<button data="' + i + '" id="' + slip.receiptPositions[i].uuid + '" onclick="deleteData(this)">Delete</button>'+
                '</td>'+
                '</tr>';
                goods.push(slip.receiptPositions[i]);
        }
        html += '</tbody></table>';
        //logger.log(JSON.stringify(slip.receiptPositions));
        document.getElementById("data").innerHTML = html;
    }
}

//Удалить товар
function deleteData(data){
    receipt.removePosition(data.id);
    navigation.pushNext();
}

//Показать данные для правки
function showEditData(data){
    var editDiv = document.getElementById("edit").style.display = "block";
    document.getElementById("uuid").value = data.id;
}

//Добавим товар в список
function addData(){
//    var v = document.getElementById(document.getElementById("uuid").value).getAttribute("data");
//    var ped = slip.receiptPositions[v];
//    ped.quantity = "1";
//    ped.priceWithDiscountPosition = "10.00";
//    ped.productUuid = "";
//    ped.productCode = "";
//    ped.productType = "";
//    ped.name = "Тестовый товар";
    var position = {
        "uuid" : "8b90f73b-8860-400c-b9e4-26d1d3f75817",
        "productUuid" : "3dc58d3c-9e03-432c-8b92-56fbb1484c51",
        "productCode" : "123456",
        "productType" : "NORMAL",
        "measureName" : "шт",
        "measurePrecision" : 0,
    };
    position.name = document.getElementById("name").value;
    position.quantity = document.getElementById("qty").value;
    position.price = document.getElementById("price").value;
    //alert(JSON.stringify(ped));
    receipt.addPosition(JSON.stringify(position));
    navigation.pushNext();
}

//Сохранить данные товара
function editData(){
    var v = document.getElementById(document.getElementById("uuid").value).getAttribute("data");
    var ped = slip.receiptPositions[v];
    ped.quantity = document.getElementById("qty").value;
    ped.priceWithDiscountPosition = "10.00";
    ped.price = document.getElementById("price").value;
    ped.productUuid = "";
    ped.productCode = "";
    ped.productType = "";
    ped.name = document.getElementById("name").value;
    //alert(JSON.stringify(ped));
    receipt.editPosition(JSON.stringify(ped));
    navigation.pushNext();
}