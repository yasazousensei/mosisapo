(function(){
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const button = document.getElementById('submit-button');
  if (!form || !status || !button) return;

  const endpoint = (typeof CONTACT_ENDPOINT === 'string' ? CONTACT_ENDPOINT : '').trim();
  if (!endpoint) {
    button.disabled = true;
    status.textContent = 'Webフォームを利用するには、Google Apps Scriptの公開URLを設定してください。';
    status.className = 'form-status warning';
    return;
  }

  // Google Apps Scriptへは、隠しiframeを送信先にした通常のPOSTで送信します。
  // GASのリダイレクト/CORS応答を待たないため、「送信中…」のまま止まる問題を防ぎます。
  form.action = endpoint;
  form.addEventListener('submit', function(){
    button.disabled = true;
    button.textContent = '送信しました';
    status.textContent = 'お問い合わせを送信しました。担当者からご連絡します。';
    status.className = 'form-status success';

    // 送信先iframeへのPOSTはブラウザが継続して処理します。
    // 少し時間を置いて再送信できる状態に戻します。
    window.setTimeout(function(){
      button.disabled = false;
      button.textContent = '送信する';
    }, 3000);
  });
})();
