// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB30tl9b5jdPzsyNOQMxCai5meLFzFk3t0",
    authDomain: "xcapehint.firebaseapp.com",
    databaseURL: "https://xcapehint.firebaseio.com",
    projectId: "xcapehint",
    storageBucket: "xcapehint.appspot.com",
    messagingSenderId: "258457372086",
    appId: "1:258457372086:web:88043be942807733492d17",
    measurementId: "G-Q7Q7T2KT2J"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
let hintList;
let merchantList = [];
let themeList = [];
let publicHintList = { hint: [] };
let merchant = `${new URLSearchParams(window.location.search).get("merchant")}` == "null" ?  "건대-엑스케이프" : `${new URLSearchParams(window.location.search).get("merchant")}`;
let theme = `${new URLSearchParams(window.location.search).get("theme")}`;
let clipboard = new ClipboardJS('.key_button');

$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        trigger : 'hover'
    })  
    $('[data-toggle="popover"]').popover({
        trigger : 'hover'
    })

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-left",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "250",
        "hideDuration": "250",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
})

$(document).ready(function () {
    $("#spinner").show();
    $("#message1").focus();
    settingMerchantTheme();

    $("#key").val(makeRandomKey());
    $("#save").click(function () {
        let key = $("#key").val();
        let message1 = $("#message1").val();
        let message2 = $("#message2").val();
        let seq = $("#seq").val();
        insertHint(key, message1, message2, seq);
    });

    $("#merchantList").change(function() {
        $("#hint-table").html("");
        $("#spinner").show();
        merchant = this.value;
        theme = "";
        getThemeList(merchant).then(theme => {
            hintList = new HintList(merchant, theme);
        })
    });

    $("#themeList").change(function() {
        $("#hint-table").html("");
        $("#spinner").show();
        theme = $("#themeList").val();
        getThemeList(merchant).then(theme => {
            hintList = new HintList(merchant, theme);
        })
    });

    $("#message1, #message2").keyup(function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            $("#save").trigger("click");
        }
    })

    clipboard.on('success', function(event) {
        console.log(event);
        toastr["success"](event.text + " 클립보드에 복사되었습니다.", "Success");
    });

    clipboard.on('error', function(e) {
        console.log(e);
        toastr["success"]("클립보드 복사가 실패되었습니다.", "Success");
    });
});

async function settingMerchantTheme() {
    await getMerchantList().then(merchant => {
        getThemeList(merchant).then(theme => {
            hintList = new HintList(merchant, theme);
        });
    });
}

function HintList(merchant, theme) {
    this.merchant = merchant;
    this.theme = theme;
    this.hintItemTemplate = $("#hint-item").html();
    Handlebars.registerHelper("inc", function(value, options){
        return parseInt(value) + 1;
    });
    this.bindTemplateHintItem = Handlebars.compile(this.hintItemTemplate);
    this.hintList = { hint: [] };
    this.getHintList(this.merchant, this.theme).then(hintList => {
        this.hintList.hints = hintList;
        this.hintHtml = this.bindTemplateHintItem(this.hintList);
        publicHintList.hint = hintList;
        $("#seq").val(++publicHintList.hint.length);
        $("#key").val(makeRandomKey());
        $("#message1").val("");
        $("#message2").val("");
        $(".tooltip").remove();
        $("#spinner").hide();
        $("#hint-table").empty();
        console.log(this.hintList.hints[0].values);
        $("#hint-table").append(this.hintHtml);
        $('[data-toggle="tooltip"]').tooltip()
    });
}

HintList.prototype = {
    getHintList: async function (merchant, theme) {
        let hintList = [];
        await db.collection("xcape")
            .doc(merchant)
            .collection('테마')
            .doc(theme)
            .collection('힌트').orderBy('createTime').get().then((hints) => {
                hints.forEach(hint => {
                    if (hint.data().use) {
                        hintList.push({
                            seq: `${hint.data().seq}`,
                            key: `${hint.data().key}`,
                            message1: `${hint.data().message1}`,
                            message2: `${hint.data().message2}`
                        });
                    }
                })
            });
        return hintList;
    }
}

async function getMerchantList() {
    await db.collection("xcape").get().then((merchants) => {
        merchants.forEach((merchant) => {
            merchantList.push({
                seq: `${merchant.data().seq}`,
                name: `${merchant.id}`
            });
        });
    });
    setMerchantListInSelectBox();
    return merchant;
}

async function getThemeList(merchant) {
    themeList = [];
    $("#themeList").html("");
    await db.collection("xcape")
            .doc(merchant)
            .collection("테마").get().then((themes) => {
                themes.forEach(theme => {
                    console.log(theme.id)
                    themeList.push({
                        name: `${theme.id}`
                    });
                });
                if (theme == "null" || theme == "") {
                    theme = themeList[0].name;
                }
            });
    themeList.map(theme => {
        console.log("push: " + theme.name);
        $("#themeList").append(`<option value="${theme.name}">${theme.name}</option>`);
    })
    $("#themeList").val(theme).prop("selected", true);
    return theme;
}

function makeRandomKey() {
    let key = "";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    while(key.length < 3) {
        key += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }

    key += Math.floor(Math.random()*100);

    return key.length == 5 ? key : makeRandomKey();
}

function setMerchantListInSelectBox() {
    merchantList.sort(function (a, b) {
        return a.seq - b.seq;
    })
    merchantList.map(merchant => {
        console.log("push: " + merchant.name);
        $("#merchantList").append("<option value=" + merchant.name + ">" + merchant.name + "</option>");
    })
    $("#merchantList").val(merchant).prop("selected", true);
}

function validKey(key) {
    return key.length == 5 ? true : false;
}

function insertHint(key, message1, message2, seq) {
    if (message1 == "") {
        toastr["error"]("메시지1 내용을 입력해주세요.", "Error");
        $("#message1").focus();
        throw new Error("Invalid input message error");
    } else if (message2 == "") {
        toastr["error"]("메시지2 내용을 입력해주세요.", "Error");
        $("#message2").focus();
        throw new Error("Invalid input message error");
    } else if (!validKey(key)) {
        alert("키 값을 제대로 입력해주세요.");
        $("#key").focus();
        throw new Error("Invalid input message error");
    }
    $("#spinner").show();
    db.collection("xcape")
        .doc(merchant)
        .collection('테마')
        .doc(theme)
        .collection('힌트')
        .doc(`${key}`.toUpperCase())
        .set({
            key: `${key}`.toUpperCase(),
            message1: `${message1}`,
            message2: `${message2}`,
            seq: `${seq}`,
            use: true,
            createTime: firebase.firestore.Timestamp.fromDate(new Date())
        })
        .then(function () {
            console.log("Document successfully written!");
            hintList = new HintList(merchant, theme);
            goScrollBottom();
            $("#message1").focus();
            $("#spinner").hide();
            toastr["success"]("힌트를 추가했습니다.", "Success");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            $("#spinner").hide();
            toastr["error"]("힌트 입력에 실패했습니다.", "Error");
            if(confirm("새로고침 하겠습니까?")) {
                let url = `http://${window.location.host}${window.location.pathname}?merchant=${merchant}&theme=${theme}`;
                window.location.href = url;
            }
        });
}

function goScrollBottom() {
    $("#hint-table").animate({ scrollTop: $("#hint-table")[0].scrollHeight}, 500);
}

function changeHintMessage(key, num, oldMessage) {
    let newMessage = prompt("바꾸실 힌트 메시지를 입력해주세요.", oldMessage);
    if (newMessage == "") {
        toastr["error"]("잘못된 입력입니다. 다시 입력해주세요.", "Error");
        throw new Error("Invalid input message error");
    } else if (newMessage == oldMessage) {
        toastr["error"]("기존과 동일한 입력입니다. 새로운 힌트 메시지를 입력해주세요.", "Error");
        throw new Error("Same input message error");
    } else if (newMessage == null) {
        return;
    }
    $("#spinner").show();
    console.log(key + ": " +newMessage);

    db.collection("xcape")
        .doc(merchant)
        .collection('테마')
        .doc(theme)
        .collection('힌트')
        .doc(`${key}`.toUpperCase())
        .update(
            `${num}` == 1 ? {message1: `${newMessage}`} : {message2: `${newMessage}`}
        )
        .then(function() {
            console.log("Document successfully updated!");
            hintList = new HintList(merchant, theme);
            $("#spinner").hide();
            toastr["success"]("힌트를 수정했습니다.", "Success");
        })
        .catch(function(error) {
            console.error("Error updating document: ", error);
            $("#spinner").hide();
            toastr["error"]("힌트를 수정에 실패했습니다.", "Error");
            if(confirm("새로고침 하겠습니까?")) {
                let url = `http://${window.location.host}${window.location.pathname}?merchant=${merchant}&theme=${theme}`;
                window.location.href = url;
            }
        });
}

function deleteHint(key) {
    if(confirm("힌트를 삭제하시겠습니까?")) {
        $("#spinner").show();
        db.collection("xcape")
            .doc(merchant)
            .collection('테마')
            .doc(theme)
            .collection('힌트')
            .doc(`${key}`.toUpperCase())
            .update({
                use: false
            })
            .then(function() {
                console.log("Document successfully updated!");
                hintList = new HintList(merchant, theme);
                $("#spinner").hide();
                toastr["success"]("힌트를 삭제했습니다.", "Success");
            })
            .catch(function(error) {
                console.error("Error updating document: ", error);
                $("#spinner").hide();
                toastr["error"]("힌트 삭제에 실패했습니다.", "Error");
                if(confirm("새로고침 하겠습니까?")) {
                    let url = `http://${window.location.host}${window.location.pathname}?merchant=${merchant}&theme=${theme}`;
                    window.location.href = url;
                }
            });
    }
}
