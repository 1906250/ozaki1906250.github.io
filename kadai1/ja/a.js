// 点滅用クラス
function func_switch_jq_ani(id){
  // IDをチェック
  var $ele = $(id);
  if($ele.length == 0) return;
  // 1秒間隔で透明度を切り替え
  $ele.animate( { opacity: 'toggle',}, { duration: 1000, easing: 'linear', } )

  // 0.5秒後にfunc_switch_jq_aniを再実行
  setTimeout(function(elemId){
      func_switch_jq_ani(elemId);
  }, 500, id);
}

$(function(){ 
  func_switch_jq_ani2("#switch_jq_ani2");
});

// 点滅用クラス
function func_switch_jq_ani2(id){
  // IDをチェック
  var $ele = $(id);
  if($ele.length == 0) return;
  // 1秒間隔で透明度を切り替え
  $ele.animate( { opacity: 'toggle',}, { duration: 1000, easing: 'linear', } )

  // 0.5秒後にfunc_switch_jq_aniを再実行
  setTimeout(function(elemId){
      func_switch_jq_ani2(elemId);
  }, 500, id);
}

$(function(){ 
  func_switch_jq_ani("#switch_jq_ani");
});

