function fretel() {
    var telnum = $('#telnum').val();
    var retel = /^1[34578]\d{9}$/;
    var tetel = retel.test(telnum);
    if (telnum == "") {
        if ($('#dtelnum').hasClass("has-error")) {
            $('#dtelnum').removeClass("has-error");
        }
        if ($('#dtelnum').hasClass("has-success")) {
            $('#dtelnum').removeClass("has-success");
        }
        $('#stelnum').removeClass();
        return;
    }
    if (tetel) {

        if ($('#dtelnum').hasClass("has-error")) {
            $('#dtelnum').removeClass("has-error");
        }
        if (!$('#dtelnum').hasClass("has-success")) {
            $('#dtelnum').addClass("has-success");
        }
        $('#stelnum').removeClass();
        $('#stelnum').addClass("glyphicon glyphicon-ok form-control-feedback");

    } else {

        if ($('#dtelnum').hasClass("has-success")) {
            $('#dtelnum').removeClass("has-success");
        }
        if (!$('#dtelnum').hasClass("has-error")) {
            $('#dtelnum').addClass("has-error");
        }
        $('#stelnum').removeClass();
        $('#stelnum').addClass("glyphicon glyphicon-remove form-control-feedback");

    }
}

function frename() {
    var name = $('#name').val();
    var rename = /^.{1,20}$/;
    var tename = rename.test(name);
    if (name == "") {
        if ($('#dname').hasClass("has-error")) {
            $('#dname').removeClass("has-error");
        }
        if ($('#dname').hasClass("has-success")) {
            $('#dname').removeClass("has-success");
        }
        $('#sname').removeClass();
        return;
    }
    if (tename) {

        if ($('#dname').hasClass("has-error")) {
            $('#dname').removeClass("has-error");
        }
        if (!$('#dname').hasClass("has-success")) {
            $('#dname').addClass("has-success");
        }
        $('#sname').removeClass();
        $('#sname').addClass("glyphicon glyphicon-ok form-control-feedback");

    } else {

        if ($('#dname').hasClass("has-success")) {
            $('#dname').removeClass("has-success");
        }
        if (!$('#dname').hasClass("has-error")) {
            $('#dname').addClass("has-error");
        }
        $('#sname').removeClass();
        $('#sname').addClass("glyphicon glyphicon-remove form-control-feedback");

    }
}

function frepassword1() {
    var password1 = $('#password1').val();
    var repwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/;
    var tepwd = repwd.test(password1);
    if (password1 == "") {
        if ($('#dpassword1').hasClass("has-error")) {
            $('#dpassword1').removeClass("has-error");
        }
        if ($('#dpassword1').hasClass("has-success")) {
            $('#dpassword1').removeClass("has-success");
        }
        $('#spassword1').removeClass();
        return;
    }
    if (tepwd) {

        if ($('#dpassword1').hasClass("has-error")) {
            $('#dpassword1').removeClass("has-error");
        }
        if (!$('#dpassword1').hasClass("has-success")) {
            $('#dpassword1').addClass("has-success");
        }
        $('#spassword1').removeClass();
        $('#spassword1').addClass("glyphicon glyphicon-ok form-control-feedback");

    } else {

        if ($('#dpassword1').hasClass("has-success")) {
            $('#dpassword1').removeClass("has-success");
        }
        if (!$('#dpassword1').hasClass("has-error")) {
            $('#dpassword1').addClass("has-error");
        }
        $('#spassword1').removeClass();
        $('#spassword1').addClass("glyphicon glyphicon-remove form-control-feedback");

    }

    frepassword2();

}

function frepassword2() {
    var password1 = $('#password1').val();
    var repwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/;
    var tepwd = repwd.test(password1);
    var password2 = $('#password2').val();
    var tepwdequ = password1 == password2;
    if (password2 == "" && password1 == "") {
        if ($('#dpassword2').hasClass("has-error")) {
            $('#dpassword2').removeClass("has-error");
        }
        if ($('#dpassword2').hasClass("has-success")) {
            $('#dpassword2').removeClass("has-success");
        }
        $('#spassword2').removeClass();
        return;
    }
    if (tepwdequ && tepwd) {

        if ($('#dpassword2').hasClass("has-error")) {
            $('#dpassword2').removeClass("has-error");
        }
        if (!$('#dpassword2').hasClass("has-success")) {
            $('#dpassword2').addClass("has-success");
        }
        $('#spassword2').removeClass();
        $('#spassword2').addClass("glyphicon glyphicon-ok form-control-feedback");

    } else {

        if ($('#dpassword2').hasClass("has-success")) {
            $('#dpassword2').removeClass("has-success");
        }
        if (!$('#dpassword2').hasClass("has-error")) {
            $('#dpassword2').addClass("has-error");
        }
        $('#spassword2').removeClass();
        $('#spassword2').addClass("glyphicon glyphicon-remove form-control-feedback");

    }
}

function fnSignup() {

    var name = $('#name').val();
    var password1 = $('#password1').val();
    var telnum = $('#telnum').val();
    var password2 = $('#password2').val();
    var sex = $('#sex').val();

    var retel = /^1[34578]\d{9}$/;
    var tetel = retel.test(telnum);
    var repwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/;
    var tepwd = repwd.test(password1);
    var tepwdequ = password1 == password2;
    var rename = /^.{1,20}$/;
    var tename = rename.test(name);

    var param = {};
    1
    param.telNum = telnum;
    param.password = password1;
    param.name = name;
    param.sex = sex;

    if (telnum && tename && tepwd && tepwdequ) {
        $.ajax({
            type: 'POST',
            data: JSON.stringify(param),
            contentType: 'application/json',
            dataType: 'json',
            url: pageContext + '/wtf/consignup',
            async: false,
            success: function (data) {
                if (data > 0)
                    alert("注册成功")
                else
                    alert("注册失败！")
            },
            error: function (e) {
                alert("system error");
            }
        })
    }
    return false;
}