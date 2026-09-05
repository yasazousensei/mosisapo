(function(){
  const form=document.getElementById('contact-form');
  const status=document.getElementById('form-status');
  const button=document.getElementById('submit-button');
  if(!form) return;
  const endpoint=(typeof CONTACT_ENDPOINT==='string'?CONTACT_ENDPOINT:'').trim();
  if(!endpoint){
    button.disabled=true;
    status.textContent='Webフォームを利用するには、Google Apps Scriptの公開URLを設定してください。';
    status.className='form-status warning';
    return;
  }
  form.action=endpoint;
  form.addEventListener('submit',function(){
    button.disabled=true; button.textContent='送信中…';
    status.textContent='送信しています。しばらくお待ちください。';
    status.className='form-status';
  });
  window.addEventListener('message',function(event){
    const data=event.data||{};
    if(data.type!=='tantei-yasazou-form') return;
    button.disabled=false; button.textContent='送信する';
    if(data.ok){
      status.textContent=data.message||'送信しました。';
      status.className='form-status success';
      form.reset();
    }else{
      status.textContent=data.message||'送信できませんでした。';
      status.className='form-status warning';
    }
  });
})();
