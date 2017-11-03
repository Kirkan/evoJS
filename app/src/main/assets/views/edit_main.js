var slip = JSON.parse(receipt.getReceipt());
var goods = [];
var ary = {};

function getData(){
    document.getElementById("edit").style.display = "none";
    if(slip.receiptData.positionsCount > 0){
        var html = '<table border="1" cellpadding="1" cellspacing="1" style="width:100%;"><tbody>';
        for (i in slip.receiptPositions){
            logger.log(JSON.stringify(inventory.getProduct(slip.receiptPositions[i].uuid)));
            html +='<tr>'+
                '<td>'+ slip.receiptPositions[i].measureName + '</td>'+
                '<td>'+ slip.receiptPositions[i].price + '</td>'+
                '<td>'+ slip.receiptPositions[i].quantity + '</td>'+
                '<td>'+ slip.receiptPositions[i].total + '</td>'+
                '<td>'+
                '<button data="' + i + '" id="' + slip.receiptPositions[i].uuid + '" onclick="editData(this)">Edit</button>'+
                '<button data="' + i + '" id="' + slip.receiptPositions[i].uuid + '" onclick="deleteData(this)">Delete</button>'+
                '</td>'+
                '</tr>';
                goods.push(slip.receiptPositions[i]);
        }
        html += '</tbody></table>';
        logger.log(JSON.stringify(slip.receiptPositions));
        document.getElementById("data").innerHTML = html;
    }
}

function deleteData(data){
    receipt.removePosition(data.id);
    navigation.pushNext();
}

function editData(data){
    var editDiv = document.getElementById("edit").style.display = "block";
    var uuid = document.getElementById("uuid");
    var price = document.getElementById("price");
    var qty = document.getElementById("qty");
    uuid.value = data.id;
}

function addData(){
    var v = document.getElementById(document.getElementById("uuid").value).getAttribute("data");
    var ped = slip.receiptPositions[v];
    ped.quantity = "50";
    ped.priceWithDiscountPosition = "10.00";
    ped.productUuid = "";
    ped.productCode = "";
    ped.productType = "";
    ped.name = "jsdhfkjhsk";
    alert(JSON.stringify(ped));
    receipt.addPosition(JSON.stringify(ped));
    navigation.pushNext();
}

function saveData(){
    var v = document.getElementById(document.getElementById("uuid").value).getAttribute("data");
    var ped = slip.receiptPositions[v];
    ped.quantity = "1";
    ped.priceWithDiscountPosition = "10.00";
    ped.productUuid = "";
    ped.productCode = "";
    ped.productType = "";
    ped.name = "FUUUUCK!";
    alert(JSON.stringify(ped));
    receipt.editPosition(JSON.stringify(ped));
    navigation.pushNext();
}