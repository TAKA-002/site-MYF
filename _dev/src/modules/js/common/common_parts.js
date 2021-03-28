//==================================================
//ヘッダーの共通部分を呼び出す
//==================================================

//=============
//ヘッダー
//=============
export function header() {
  $.ajax({
    url: "includes/mod_header.html",
    cache: false,
    dataType: "html",
    success: function (data) {
      $("#header").html(data);
    },
    // error: function (data) {
    //   $("#header").text("えらー");
    // },
  });
}

//=============
//フッダー
//=============
export function footer() {
  $.ajax({
    url: "includes/mod_footer.html",
    cache: false,
    dataType: "html",
    success: function (data) {
      $("#footer").html(data);
    },
    // error: function (data) {
    //   $("#footer").text("えらー");
    // },
  });
}
