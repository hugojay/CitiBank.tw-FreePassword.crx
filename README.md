花旗銀行幹嘛用虛擬鍵盤 Google Chrome Extension
=========

花旗銀行（台灣）網銀登入為何非得限制以虛擬鍵盤輸入密碼？

## 幹嘛用的

本套件可移除諸如該網路銀行登入、變更網路登入密碼、變更磁條密碼/預借現金密碼、變更電話理財密碼等頁面的密碼輸入的唯讀及「強迫只能用虛擬鍵盤輸入」的限制。程式僅在每頁面做上述動作一次，程式碼簡短、單純，安全無虞，沒有副作用。

## 安裝方法

因懶得多作解釋，本程式暫不打包上 Chrome Web Store。手動安裝方式如下，請擇一操作：

* [下載本程式碼](https://github.com/hugojay/CitiBank.tw-FreePassword.crx/archive/master.zip)並解壓縮後，從 Google Chrome 工具－功能－擴充功能，開啟「開發人員模式」後點選「載入未封裝擴充功能」，再選擇解壓縮之資料夾，便可安裝使用。
* 下載我封裝的 [CitiBank.tw-FreePassword.crx](https://github.com/hugojay/CitiBank.tw-FreePassword.crx/blob/master/CitiBank.tw-FreePassword.crx?raw=true) 並將檔案拖曳至「擴充功能」頁面即可安裝使用。**本安裝方式有押網址，會自動更新 GitHub 上的最新版**。

## 使用方法

沒有。

程式將在瀏覽網址符合 https://www.citibank.com.tw/TWGCB/* 的頁面載入完成後自動執行，執行結果會記錄於主控台（Console）中，如：「已將 1 個密碼輸入區移除虛擬鍵盤限制！」。

主控台在開發人員工具中，你可以按 F12 / Option + Command + I 開啟它並查看。