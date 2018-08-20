$(document).ready(function() {
  $("#contact-form").submit(function(event) {
    formArray = $(this).serializeArray();
    formJSON = {}

    console.log(formJSON);

    var dt = new Date();

    data = {
      "operation": "create",
      "tableName": "contact-form",
      "payload": {
        "Item": {
          "date": dt
        }
      }
    };

    $.each(formArray, function() {
      data["payload"]["Item"][this.name] = this.value;
    });

    data = JSON.stringify(data);

    console.log(data);

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://om3jjnbeac.execute-api.us-west-2.amazonaws.com/prod/DynamoDBManager",
      "method": "POST",
      "processData": false,
      "data": data
    }

    $.ajax(settings)
      .done(function(response) {
        console.log(response);
        if (response['ResponseMetadata']['HTTPStatusCode'] == 200){
          $("#contact_success").show()
        }
        else {
          $("#contact_error").show()
        };
      });
    event.preventDefault();
  });
});
