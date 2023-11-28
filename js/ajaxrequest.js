$(document).ready(function () {
    // Ajax Call form Already Exists Email Verification
    $("#stuemail").on("keypress blur", function () {
        var stuemail = $("#stuemail").val();
        $.ajax({
            url: "Student/addstudent.php",
            method: "POST",
            data: {
                checkemail: "checkmail",
                stuemail: stuemail,
            },
            success: function (data) {
                // console.log(data);
                if (data != 0) {
                    $("#statusMsg2").html(
                        '<small style="color:red;">Email ID Already Used !</small>'
                    );
                    $("#signup").attr("disabled", true);
                } else if (data == 0) {
                    $("#statusMsg2").html(
                        '<small style="color:green;">There you go</small>'
                    );
                    $("#signup").attr("disabled", false);
                }
            },
        });
    });
});


function addstu() {
    var stuname = $("#stuname").val();
    var stuemail = $("#stuemail").val();
    var stupass = $("#stupass").val();

    if (stuname.trim() == "") {
        $("#statusMsg1").html(
            '<small style="color:red;">Please enter Name!</small>'
        );
        $("#stuname").focus();
        return false;
    } else if (stuemail.trim() == "") {
        $("#statusMsg2").html(
            '<small style="color:red;">Please enter Email!</small>'
        );
        $("#stuemaiil").focus();
        return false;
    } else if (stupass.trim() == "") {
        $("#statusMsg3").html(
            '<small style="color:red;">Please enter Pass!</small>'
        );
        $("#stupass").focus();
        return false;
    } else {

        $.ajax({
            url: 'Student/addstudent.php',
            method: 'POST',
            dataType: 'json',
            data: {
                stusignup: "stusignup",
                stuname: stuname,
                stuemail: stuemail,
                stupass: stupass,
            },
            success: function (data) {
                console.log(data);
                if (data == "OK") {
                    $("#successMsg").html("<span class='alert alert-success'>Registered Successful !! </span>");
                    clearStuRegField();
                } else if (data == "Failed") {
                    $("#successMsg").html("<span class='alert alert-danger'>Unable to Register !! </span>");
                }
            }

        })
    }
}

// empty all fields form after submit
function clearStuRegField() {
    $("#stuRegForm").trigger("reset");
    $("#statusMsg1").html(" ");
    $("#statusMsg2").html(" ");
    $("#statusMsg3").html(" ");

}

// Ajax call for student login verification
function checkStuLogin() {
    var stuLogEmail = $("#stuLogemail").val();
    var stuLogPass = $("#stuLogpass").val();
    $.ajax({
        url: "Student/addstudent.php",
        method: "POST",
        data: {
            checkLogemail: "checklogmail",
            stuLogEmail: stuLogEmail,
            stuLogPass: stuLogPass,
        },
        success: function (data) {
            if(data==0){
                $("#statusLogMsg").html('<small class="alert alert-danger">Invalid Email ID or Password !</small>');
            }else if(data==1){
                $("#statusLogMsg").html('<small class="alert alert-success">Successfuly Logged In !</small>');
                setTimeout(()=>{
                    window.location.href="index.php";
                },1000)
            }
        }
    });
}