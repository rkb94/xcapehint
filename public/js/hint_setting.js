var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
let merchantList = [];
let themeList = [];
let publicHintList = { hint: [] };
let merchant = `${new URLSearchParams(window.location.search).get("merchant")}`;
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
});

async function settingMerchantTheme() {
    await getMerchantList().then(merchant => {
        getThemeList(merchant).then(theme => {
            new HintList(merchant, theme);
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
                    hintList.push({
                        seq: `${hint.data().seq}`,
                        key: `${hint.data().key}`,
                        message: `${hint.data().message}`
                    });
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
    await db.collection("xcape")
            .doc(merchant)
            .collection("테마").get().then((themes) => {
                themes.forEach(theme => {
                    console.log(theme.id)
                    themeList.push({
                        name: `${theme.id}`
                    });
                });
                if (theme == "null") {
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
            seq: `${seq}`
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
