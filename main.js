(function main() {
  window.alert('test');
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle&destinations=San+Francisco&key=AIzaSyCiE-hNfGC_P2DMMikklAFsFbPRFO5oHjA');
  xhr.onreadystatechange = function() {
    switch ( xhr.readyState ) {
      case 0:
      // 未初期化状態.
      console.log( 'uninitialized!' );
      break;
      case 1: // データ送信中.
      console.log( 'loading...' );
      break;
      case 2: // 応答待ち.
      console.log( 'loaded.' );
      break;
      case 3: // データ受信中.
      console.log( 'interactive... '+xhr.responseText.length+' bytes.' );
      break;
      case 4: // データ受信完了.
      if( xhr.status == 200 || xhr.status == 304 ) {
        let data = xhr.responseText; // responseXML もあり
        console.log( 'COMPLETE! :' + data );
      } else {
        console.log( 'Failed. HttpStatus: ' + xhr.statusText );
      }
      break;
    }
  };
  xhr.send();
})();
