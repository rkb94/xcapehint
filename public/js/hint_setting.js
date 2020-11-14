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

$(document).ready(function () {
    settingMerchantTheme();

    $("#key").val(Math.random().toString(36).substr(2, 5));
    $("#save").click(function () {
        let key = $("#key").val();
        let message = $("#message").val();
        let seq = $("#seq").val();
        insertHint(key, message, seq);
    });

    $("#merchantList").change(function() {
        $("#hintDiv").html("");
        merchant = this.value;
        theme = "";
        getThemeList(merchant).then(theme => {
            hintList = new HintList(merchant, theme);
        })
    });

    $("#themeList").change(function() {
        $("#hintDiv").html("");
        theme = $("#themeList").val();
        getThemeList(merchant).then(theme => {
            hintList = new HintList(merchant, theme);
        })
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
    this.hintItemTemplate = $("#hintItem").html();
    this.bindTemplateHintItem = Handlebars.compile(this.hintItemTemplate);
    this.hintList = { hint: [] };
    this.getHintList(this.merchant, this.theme).then(hintList => {
        this.hintList.hints = hintList;
        this.hintHtml = this.bindTemplateHintItem(this.hintList);
        publicHintList.hint = hintList;
        $("#seq").val(++publicHintList.hint.length);
        $("#hintDiv").append(this.hintHtml);
    });
}

HintList.prototype = {
    getHintList: async function (merchant, theme) {
        let hintList = [];
        await db.collection("xcape")
            .doc(merchant)
            .collection('테마')
            .doc(theme)
            .collection('힌트').get().then((hints) => {
                hints.forEach(hint => {
                    if (hint.data().use) {
                        hintList.push({
                            seq: `${hint.data().seq}`,
                            key: `${hint.data().key}`,
                            message: `${hint.data().message}`
                        });
                    }
                })
            });
        hintList.sort(function (a, b) {
            return a.seq - b.seq;
        })
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

function insertHint(key, message, seq) {
    db.collection("xcape")
        .doc(merchant)
        .collection('테마')
        .doc(theme)
        .collection('힌트')
        .doc(`${key}`.toUpperCase())
        .set({
            key: `${key}`.toUpperCase(),
            message: `${message}`,
            seq: `${seq}`,
            use: true
        })
        .then(function () {
            console.log("Document successfully written!");
            let url = `http://${window.location.host}${window.location.pathname}?merchant=${merchant}&theme=${theme}`;
            window.location.href = url;
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

function changeHintMessage(key, oldMessage) {
    let newMessage = prompt("바꾸실 힌트 메시지를 입력해주세요.", oldMessage);
    if (newMessage == "" || newMessage == null) {
        alert("잘못된 입력입니다. 다시 입력해주세요.");
        throw new Error("Invalid input message error");
    } else if (newMessage == oldMessage) {
        alert("기존과 동일한 입력입니다. 새로운 힌트 메시지를 입력해주세요.");
        throw new Error("Same input message error");
    }
    console.log(key + ": " +newMessage);

    db.collection("xcape")
        .doc(merchant)
        .collection('테마')
        .doc(theme)
        .collection('힌트')
        .doc(`${key}`.toUpperCase())
        .update({
            message: `${newMessage}`
        })
        .then(function() {
            console.log("Document successfully updated!");
            let url = `http://${window.location.host}${window.location.pathname}?merchant=${merchant}&theme=${theme}`;
            window.location.href = url;
        })
        .catch(function(error) {
            alert("힌트 수정에 실패했습니다.");
            console.error("Error updating document: ", error);
        });
}

function deleteHint(key) {
    if(confirm("힌트를 삭제하시겠습니까?")) {
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
                let url = `http://${window.location.host}${window.location.pathname}?merchant=${merchant}&theme=${theme}`;
                window.location.href = url;
            })
            .catch(function(error) {
                alert("삭제에 실패했습니다.");
                console.error("Error updating document: ", error);
            });
    }
}