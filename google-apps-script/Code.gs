const TO_EMAIL = 'imu3bbt@gmail.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function resultPage_(ok, message) {
  const payload = JSON.stringify({ type: 'tantei-yasazou-form', ok: ok, message: message });
  const safe = payload.replace(/</g, '\\u003c');
  return HtmlService.createHtmlOutput(
    '<!doctype html><html><body><script>' +
    'window.parent.postMessage(' + safe + ', "*");' +
    '</script></body></html>'
  );
}

function doGet() {
  return json_({ ok: true, service: '探偵やさぞうお問い合わせフォーム' });
}

function doPost(e) {
  const p = (e && e.parameter) || {};
  const name = String(p.name || '').trim();
  const email = String(p.email || '').trim();
  const phone = String(p.phone || '').trim();
  const category = String(p.category || '').trim();
  const message = String(p.message || '').trim();

  if (!name || !email || !message) {
    return resultPage_(false, '必須項目が不足しています。');
  }
  if (!EMAIL_RE.test(email)) {
    return resultPage_(false, 'メールアドレスの形式が正しくありません。');
  }

  const body =
    'お名前: ' + name + '\n' +
    'メール: ' + email + '\n' +
    '電話: ' + phone + '\n' +
    '相談: ' + category + '\n\n' +
    message;

  try {
    MailApp.sendEmail({
      to: TO_EMAIL,
      subject: '【探偵やさぞう】お問い合わせ',
      body: body,
      replyTo: email
    });
    return resultPage_(true, '送信しました。');
  } catch (err) {
    return resultPage_(false, '送信に失敗しました。時間をおいてもう一度お試しください。');
  }
}
