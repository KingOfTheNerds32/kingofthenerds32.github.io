$(document).ready(function() {
  $("#contact-form").submit(function(event) {
    formArray = $(this).serializeArray();
    formJSON = {}
    $.each(formArray, function() {
      formJSON[this.name] = this.value;
    });
    console.log(formJSON);

    var dt = new Date();

    data = {
      "operation": "create",
      "tableName": "contact-form",
      "payload": {
        "Item": {
          "date": dt,
          formJSON
        }
      }
    }

    var settings = {
      "async": true,
      "crossDomain": true,
      "crossOrigin": true,
      "url": "https://om3jjnbeac.execute-api.us-west-2.amazonaws.com/prod/DynamoDBManager",
      "method": "POST",
      "Content-Type": "application/json",
      "headers": {
        "Content-Type": "application/json"
        // "Access-Control-Request-Methods": "POST",
        // //   // "Cache-Control": "no-cache",
        // "Access-Control-Request-Headers": "content-type"
        // "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Methods": ""
        //   // "Postman-Token": "c62244c3-f6a0-4161-b245-a12752059b52"
      },
      "processData": false,
      "data": data
    }

    $.ajax(settings)
      .done(function(response) {
        console.log(response);
      });
    event.preventDefault();
  });
});
