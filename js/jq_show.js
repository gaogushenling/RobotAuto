//	用Jquery
$(document).ready(function() {
    $("#send").click(function() {
        if ($("#contents").val().length != 0) {
            $("<div>").addClass("user").html('<div class="avatar"><img src="images/avatar.jpg" ></div><div class="cat"><span id="user_contents">' + $("#contents").val() + '</span><div class="right_triangle"></div></div>').appendTo("#cat_sever");
            $.ajax({
                type: "POST",
                url: "http://www.tuling123.com/openapi/api",
                dataType: "json",
                data: {
                    "key": "6db05de8ab2e4c629b48796fdb2937c1",
                    "info": $("#contents").val(),
                    "userid": "SmallMacro",
                },
                success: function(data) {
                    $("#contents").val('');
                    $("<div>").addClass("robot").html('<div class="avatar"><img src="images/robot_avatar.jpg" ></div><div class="cat"><span id="robot_contents">' + data.text + '</span><div class="left_triangle"></div></div>').appendTo("#cat_sever");
                },
                error: function(jqXHR) {
                    $(".chat").html(" " + jqXHR.status);
                }
            })
        } else {
            alert("请认真问问题好嘛：）");
        }
    })
})