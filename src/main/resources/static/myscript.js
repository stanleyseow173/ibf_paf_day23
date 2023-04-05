function searchOrderDetails(){
    var orderId = $("#orderId").val();
    $.ajax({
        url:'/order/total/'+orderId,
        success: function(data){
            $("#json").html(`
                <span>Order Id: ${data.order_id}</span><br>
                <span>Customer Id: ${data.customer_id}</span><br>
                <span>Order Date: ${data.order_date}</span><br>
                <span>Discounted Price: ${data.discounted_price}</span><br>
                <span>Cost Price: ${data.cost_price}</span><br>
                `
            );
        },
        error: function(e, status, error){ $("#json").html(`<span> No Order Details Found ${error}</span>`);}
    });
}
