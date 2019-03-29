$(function () {

    tsinfo(1);
    tgpl(1);

});

function tgpl(pn) {

    $("#home").empty();
    $("#home3").empty();
    $.get(pageContext + "/wtf/blist?pn=" + pn, function (pageinfo) {
        if (pn != 0)
            ttable(pageinfo, pn);
    });

}

function ttable(pageinfo, pn) {

    var blist = pageinfo.list;

    var tnav = $("<nav aria-label='Page navigation'></nav>");
    var tui = $("<ul class='pagination' id='home_nav'></ul>");

    $.each(blist, function (index, item) {

        if (index % 2 == 0) {
            $("<div class='clearfix' style='margin-bottom: 10px;'></div>").appendTo('#home');
        }

        var tdiv1 = $("<div></div>").addClass("col-md-6 column");
        var tdiv2 = $("<div></div>").addClass("col-md-3 column");
        var tdiv3 = $("<div></div>").addClass("col-md-9 column");

        var th3 = $("<p></p>").addClass("text-left").text(item.name + item.baberId);
        var tsmall = $("<small></small>").text("手机 ： " + item.telNum);
        var timg = $("<img alt='50x50' src=''></img>");
        tdiv1.append(tdiv2.append(timg)).append((tdiv3.append(th3)).append(tsmall)).appendTo("#home");

    });

    var obj = document.getElementById("p");
    obj.innerText = "当前第 " + pn + " 页， 共 " + pageinfo.pages + " 页， 共 " + pageinfo.total + " 条数据";

    tnav.append(tui).appendTo("#home3");

    var tpn = pageinfo.pages - pageinfo.pageNum;

    var tin;
    if (pn == 1) tin = 0; else if (pn == 2) tin = -1; else tin = -2;

    var tli = $("<li></li>");
    var tlif = $("<li></li>").append($("<a id='first'></a>").text("First")).appendTo("#home_nav");
    var tlip = $("<li></li>").append($("<a id='pre'><span>&laquo;</span></a>")).appendTo("#home_nav");

    if (pn == 1) {
        tlif.addClass("disabled");
        tlip.addClass("disabled");
    } else {
        $("#pre").attr("onclick", "tgpl(" + (pn - 1) + ")");
        $("#first").attr("onclick", "tgpl(1)");
    }


    for (var index = tin; index <= (tpn < 2 ? tpn : 2); index++) {

        var tli2 = $("<li></li>");
        if (index == 0) {
            tli2.addClass("active");
        }
        tli2.append($("<a onclick='tgpl(" + (pn + index) + ")'></a>").text(pn + index)).appendTo("#home_nav");

    }


    var tlin = $("<li></li>").append($("<a id='next'><span>&raquo;</span></a>")).appendTo("#home_nav");
    var tlil = $("<li></li>").append($("<a id='last'></a>").text("Last")).appendTo("#home_nav");
    alert("sssssssssssssss"+pageinfo.hasNextPage);
    if (!pageinfo.hasNextPage) {
        tlin.addClass("disabled");
        tlil.addClass("disabled");
    } else {
        $("#next").attr("onclick", "tgpl(" + (pn + 1) + ")");
        $("#last").attr("onclick", "tgpl(" + (pageinfo.pages) + ")");
    }

}

function tsinfo(storeId) {

    var param = {};
    param.storeId = storeId;
    $.ajax({
        type: 'POST',
        data: param,
        dataType: 'json',
        url: pageContext + '/wtf/sinfo',
        async: false,
        success: function (data) {
            var obj = document.getElementById("sinfoh3");
            obj.innerText = data.name;
            var obj = document.getElementById("sinfop1");
            obj.innerText = data.code + "\n" + data.detailedAddress;
        },
        error: function (e) {
            alert("system error");
        }
    })
}

function tclick(i) {
    alert("test" + i);
}

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

    return false;

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