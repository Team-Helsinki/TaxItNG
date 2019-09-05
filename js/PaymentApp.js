function payWithFlutterwave() {
    var handler = flutterwaveForm.setup({
        key: 'FLWPUBK_TEST-adc34bcd81cd2a3c566caa003ae499ab-X',
        email: '',
        amount: 100,
        metadata: {
            custom_fields: [{
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }]
        },
        callback: function(response) {
            alert('success. transaction ref is ' + response);
        },
        Onclose: function() {
            alert('Transaction Cancelled');
        }
    });
    handler.openIframe();

}