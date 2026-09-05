最新版（TOP横長イラスト版）

# 探偵やさぞう｜GitHub Pages v4（スマホ最優先）

## 今回の修正
- トップ画像をスマートフォン向けの縦型イラストに変更。画像内に小さな文章を入れず、HTML側で「気になること、調べます。」を大きく表示。
- 各ページ冒頭の英語見出しをすべて日本語化。
- ハンバーガーメニューはV2と同じCSS方式。
- 問い合わせフォームをGoogle Apps Script接続前提の実送信フォームに変更。
- Google Apps Script側に `doGet` の疎通確認、必須項目チェック、メール形式チェックを追加。

## 問い合わせフォームについて
GitHub Pagesからメール送信するには、Google Apps ScriptをWebアプリとして公開し、そのURLを `assets/contact-config.js` の `CONTACT_ENDPOINT` に貼る必要があります。Google公式仕様でもWebアプリには `doGet` または `doPost` が必要で、公開後に発行されたURLを利用します。

### 設定
1. `google-apps-script/Code.gs` をGoogle Apps Scriptに貼り付ける。
2. `TO_EMAIL` は現在 `imu3bbt@gmail.com`。
3. 「デプロイ」→「新しいデプロイ」→「ウェブアプリ」で公開。
4. WebアプリURLをコピー。
5. `assets/contact-config.js` の `CONTACT_ENDPOINT` にURLを貼る。
6. GitHub Pagesへ `contact-config.js` を含めてアップロード。
7. WebアプリURLをブラウザで開き、`{"ok":true,...}` が表示されることを確認。
8. その後、実際のフォームからテスト送信する。

### 今回こちらで確認したこと
- Google Apps ScriptコードのJavaScript構文を確認。
- `doGet` の正常応答をテスト。
- `doPost` の成功・失敗時にWebページから結果を返す処理をテスト。
- 必須項目不足時のエラー応答をテスト。
- 正常な問い合わせデータを渡した場合、指定メールアドレスへ送る `MailApp.sendEmail` が呼ばれることをテスト。

※Googleアカウント側でのWebアプリ公開は、この環境からユーザーのアカウントにログインして実行できないため、実際のGoogleサーバーへの到達テストだけは公開後に行う必要があります。

## LINE
https://lin.ee/oAWZvcK

## 正式情報
- 事務所名：もしもを安心サポート西宮
- ブランド：探偵やさぞう
- 代表：井村 督
- 所在地：〒662-0052 兵庫県西宮市霞町1番8号
- 届出公安委員会：兵庫県公安委員会
- 受理番号：第632600003号
- 届出年月日：令和8年2月26日
