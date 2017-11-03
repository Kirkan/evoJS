var logger = require('logger');
onSellReceiptOpened = function(integrationEvent){
    logger.log("########## onSellReceiptOpened: " + JSON.stringify(integrationEvent));
};
onPaybackReceiptOpened = function(integrationEvent){
    logger.log("########## onPaybackReceiptOpened: " + JSON.stringify(integrationEvent));
};
onSellReceiptPositionAdded = function(integrationEvent){
    logger.log("########## onSellReceiptPositionAdded: " + JSON.stringify(integrationEvent));
};
onPaybackReceiptPositionAdded = function(integrationEvent){
    logger.log("########## onPaybackReceiptPositionAdded: " + JSON.stringify(integrationEvent));
};
onSellReceiptPositionEdited = function(integrationEvent){
    logger.log("########## onSellReceiptPositionEdited: " + JSON.stringify(integrationEvent));
};
onPaybackReceiptPositionEdited = function(integrationEvent){
    logger.log("########## onPaybackReceiptPositionEdited: " + JSON.stringify(integrationEvent));
};
onSellReceiptPositionRemoved = function(integrationEvent){
    logger.log("########## onSellReceiptPositionRemoved: " + JSON.stringify(integrationEvent));
};
onPaybackReceiptPositionRemoved = function(integrationEvent){
    logger.log("########## onPaybackReceiptPositionRemoved: " + JSON.stringify(integrationEvent));
};
onSellReceiptCleared = function(integrationEvent){
    logger.log("########## onSellReceiptCleared: " + JSON.stringify(integrationEvent));
};
onPaybackReceiptCleared = function(integrationEvent){
    logger.log("########## onPaybackReceiptCleared: " + JSON.stringify(integrationEvent));
};
onSellReceiptClosed = function(integrationEvent){
    logger.log("########## onSellReceiptClosed: " + JSON.stringify(integrationEvent));
};
onPaybackReceiptClosed = function(integrationEvent){
    logger.log("########## onPaybackReceiptClosed: " + JSON.stringify(integrationEvent));
};
onCashDrawerOpened = function(integrationEvent){
    logger.log("########## onCashDrawerOpened: " + JSON.stringify(integrationEvent));
};
onInventoryCardOpened = function(integrationEvent){
    logger.log("########## onInventoryCardOpened: " + JSON.stringify(integrationEvent));
};
