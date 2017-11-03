var logger = require('logger');
var inventory = require('inventory');
var navigation = require('navigation');

//получаем текущий открытый чек
//receipt необходимо преобразовать в JSON
var data = JSON.parse(receipt.getReceipt());

//Обработчик события evo.v2.receipt.sell.beforePositionsEdited
function processBeforePositionsEdited(actionData){
    //объект actionData содержит информацию об операции
    //{
    //  "receiptUuid": "7a0b092f-c2f6-46b9-9770-4da114e3859a",
    //  "changes": [
    //    {
    //      "type": "POSITION_ADD",
    //      "change": {
    //        "position": {
    //          "productType": "NORMAL",
    //          "extraKeys": [],
    //          "uuid": "ae8e097b-0c6a-46a2-9b05-31359abb6488",
    //          "measurePrecision": 0,
    //          "tareVolume": "0",
    //          "productUuid": "ac3425e5-6a50-4d62-bee5-32b891cb073f",
    //          "quantity": "1.000",
    //          "priceWithDiscountPosition": "120.00",
    //          "price": "120.00",
    //          "productCode": "4",
    //          "alcoholProductKindCode": "0",
    //          "name": "Сосиски Деревенские Торес",
    //          "subPosition": [],
    //          "alcoholByVolume": "0",
    //          "measureName": "шт"
    //        }
    //      }
    //    }
    //  ]
    //}
    //{
    //  "receiptUuid": "7a0b092f-c2f6-46b9-9770-4da114e3859a",
    //  "changes": [
    //    {
    //      "type": "POSITION_REMOVE",
    //      "change": {
    //        "positionUuid": "fa0eb17e-8998-4d63-83bd-091724510c9e"
    //      }
    //    }
    //  ]
    //}
    //{
    //  "receiptUuid": "7a0b092f-c2f6-46b9-9770-4da114e3859a",
    //  "changes": [
    //    {
    //      "type": "POSITION_EDIT",
    //      "change": {
    //        "position": {
    //          "productType": "NORMAL",
    //          "extraKeys": [],
    //          "uuid": "aeefd4ff-8282-4998-8df4-2dda7741d4d0",
    //          "measurePrecision": 0,
    //          "tareVolume": "0",
    //          "productUuid": "d03d90f6-593b-4ec0-84a6-9bd2c12155d5",
    //          "quantity": "1111.000",
    //          "priceWithDiscountPosition": "100.00",
    //          "price": "100.00",
    //          "productCode": "5",
    //          "alcoholProductKindCode": "0",
    //          "name": "Мед вкусный",
    //          "subPosition": [],
    //          "alcoholByVolume": "0",
    //          "measureName": "шт"
    //        }
    //      }
    //    }
    //  ]
    //}
    logger.log(JSON.stringify(actionData));

    //проверим наличие изменений
    if(actionData.changes.length > 0){
        //если товар только добавлен
        if(actionData.changes[0].type == 'POSITION_ADD'){
            //и если имя товара содержит нужное нам ключевое слово, например мед
            if(actionData.changes[0].change.position.name.toLowerCase().includes("мед")){
                var ped = actionData.changes[0].change.position;
                logger.log(JSON.stringify(ped));
                //изменим название товара
                ped.name = "LUCK";
                //изменим количество
                ped.quantity = "200";
                //добавим скидку на эту позицию
                ped.priceWithDiscountPosition = "10.00";
                logger.log(JSON.stringify(ped));
                //запишем изменения в чек
                receipt.editPosition(JSON.stringify(ped));
            }else if(actionData.changes[0].change.position.name.toLowerCase().includes("сосиски")){
                //предложим добавить другой товар
                navigation.pushView("suggestion_view", {
                    receipt: receipt
                });
//                var position = {
//                        "uuid" : "8b90f73b-8860-400c-b9e4-26d1d3f75817",
//                        "productUuid" : "3dc58d3c-9e03-432c-8b92-56fbb1484c51",
//                        "productCode" : "123456",
//                        "productType" : "NORMAL",
//                        "name" : "Кетчуп",
//                        "measureName" : "шт",
//                        "measurePrecision" : 0,
//                        "price" : "77",
//                        "quantity" : "1"
//                    };
//                receipt.addPosition(JSON.stringify(position));
            }
        }
    }

}