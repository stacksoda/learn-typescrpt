var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Start"] = 1] = "Start";
    OrderStatus[OrderStatus["Unpaid"] = 3] = "Unpaid";
    OrderStatus[OrderStatus["Shipping"] = 4] = "Shipping";
    OrderStatus[OrderStatus["Shipped"] = 5] = "Shipped";
    OrderStatus[OrderStatus["Complete"] = 6] = "Complete";
})(OrderStatus || (OrderStatus = {}));
console.log('OrderStatus', OrderStatus);
