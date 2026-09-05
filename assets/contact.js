(function(){
  const form=document.getElementById('contact-form');
  const status=document.getElementById('form-status');
  const button=document.getElementById('submit-button');
  if(!form || !status || !button) return;
  form.addEventListener('submit', function(){
    button.disabled=true;
    button.textContent='送信中…';
    status.textContent='送信しています。しばらくお待ちください。';
    status.className='form-status';
    // 送信そのものはHTMLフォームの通常POSTで実行します。
    // Google Apps ScriptのレスポンスをJavaScriptで待たないため、
    // CORSやリダイレクトで送信が止まることを防ぎます。
    window.setTimeout(function(){
      button.disabled=false;
      button.textContent='送信する';
      status.textContent='送信しました。担当者からご連絡します。';
      status.className='form-status success';
    }, 2000);
  });
})();
