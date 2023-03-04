## changes compare to the original repo

- adjusted src/content-scripts/api.ts
- added proxy.js so that you don't need to call remote server. no need to worry about privacy.

### How to install

To install a Chrome extension from a zip file, you can follow these steps:

1. `git clone https://github.com/jaigouk/chatgpt-advanced.git`
2. `cd chatgpt-advanced`
3. `yarn` or `npm install`
4. `yarn build-prod-min` or `npm run build-prod-min`
5. `cp build/webgpt-2.0.7-chrome.zip ~/Downloads/`
6. Extract the contents of the zip file to a local directory on your computer.
7. Open the Chrome browser and navigate to the "Extensions" page by entering `chrome://extensions` in the address bar.
8. Make sure that the `Developer mode` toggle in the top-right corner of the page is switched on.
9. Click the `Load unpacked` button in the top-left corner of the page.
10. In the file explorer window that opens, navigate to the directory where you extracted the contents of the zip file and select it.
11. Click the `Select Folder` button to install the extension.
12. After completing these steps, the extension should be installed in your Chrome browser and you should be able to see it in the `Extensions` page.
13. `node proxy.js` to start the proxy server

**Note that if the extension was downloaded from an untrusted source, Chrome may display a warning message before allowing you to install the extension. Make sure to only install extensions from trusted sources to avoid any security risks.**

<hr/>

[link-chrome]: https://chrome.google.com/webstore/detail/chatgpt-advanced/lpfemeioodjbpieminkklglpmhlngfcn 'Chrome Web Store'
[link-firefox]: https://addons.mozilla.org/en-US/firefox/addon/web-chatgpt/ 'Firefox Addons'

<div align="center">
<h1>WebChatGPT</h1>

[![Discord](https://img.shields.io/discord/1060110102188797992?color=green&label=Join%20server&logo=discord)](https://discord.gg/nmCjvyVpnB) [![Twitter Follow](https://img.shields.io/twitter/follow/hahahahohohe?label=follow%20me&style=social)](https://twitter.com/hahahahohohe)


This browser extension `adds web access` capability to [ChatGPT](https://chat.openai.com/). Get much more relevant and up-to-date answers from the chatbot!

![image](https://user-images.githubusercontent.com/3750161/214144292-4fb34667-015a-43f3-906d-1d2d065d67f0.png)


<br>

[<img src="https://user-images.githubusercontent.com/3750161/214147732-c75e96a4-48a4-4b64-b407-c2402e899a75.PNG" height="67" alt="Chrome" valign="middle">][link-chrome] [<img src="https://user-images.githubusercontent.com/3750161/214148610-acdef778-753e-470e-8765-6cc97bca85ed.png" height="67" alt="Firefox" valign="middle">][link-firefox]

[<img valign="middle" src="https://img.shields.io/chrome-web-store/v/lpfemeioodjbpieminkklglpmhlngfcn.svg">][link-chrome] [<img valign="middle" alt="Chrome Web Store" src="https://img.shields.io/chrome-web-store/users/lpfemeioodjbpieminkklglpmhlngfcn?color=blue">][link-chrome]
<br>
[<img valign="middle" src="https://img.shields.io/amo/v/web-chatgpt">][link-firefox]
[<img valign="middle" alt="Mozilla Add-on" src="https://img.shields.io/amo/users/web-chatgpt">][link-firefox]
</div>
<br>

https://user-images.githubusercontent.com/3750161/214155508-5c1ad4d8-b565-4fe0-9ce7-e68aed11e73d.mp4


<details>
   <summary><h2>Manual installation</h2></summary>

  ### Chrome, Microsoft Edge, etc.
  1. Download prebuilt chrome zip file from [here](https://github.com/qunash/chatgpt-advanced/tree/main/build).
  2. Unzip the file.
  3. Open `chrome://extensions` in Chrome / `edge://extensions` in Microsoft Edge.
  4. Enable developer mode (top right corner).
  5. Click on `Load unpacked` and select the unzipped folder.
  6. Go to [ChatGPT](https://chat.openai.com/chat/) and enjoy!

  ### Firefox
  1. Download prebuilt firefox zip file from [here](https://github.com/qunash/chatgpt-advanced/tree/main/build).

  #### Temporary installation, in official Release or Beta
  1. Go to `about:debugging#/runtime/this-firefox`.
  2. Click `Load Temporary Add-on` button, then select the zip file you re-zipped.

  #### Persistent installation, in Nightly or Developer Edition
  1. Open Firefox, go to `about:config` and set `xpinstall.signatures.required` to `false`.
  2. Go to `about:addons`
  3. Click on the gear icon in the top right corner of the Add-ons page and select `Install Add-on From File`.
  4. Select the zip file and click open.
  5. Firefox will prompt you to confirm the installation of the addon. Click Install.
  6. The addon will be installed and will appear in the list of installed addons on the Add-ons page.
  7. Go to [ChatGPT](https://chat.openai.com/chat/) and enjoy!
</details>

<details>
<summary><h2>Build from source</h2></summary>

1. `git clone https://github.com/qunash/chatgpt-advanced.git`
2. `npm install`
3. `npm run build-prod`
4. Grab your zip extension from `build/` folder
</details>

## Contributing

Contributions are welcome! Please submit pull requests to the `dev` branch.

<br><br><br>


Like this free project? Please consider [supporting me](https://www.buymeacoffee.com/anzorq) to keep it running.

[<a href="https://www.buymeacoffee.com/anzorq" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="45px" width="162px" alt="Buy Me A Coffee"></a>](https://www.buymeacoffee.com/anzorq)

[![visitors](https://visitor-badge.glitch.me/badge?page_id=qunash/chatgpt-advanced)](https://visitor-badge.glitch.me) [![Discord](https://img.shields.io/discord/1060110102188797992?color=green&label=Join%20server&logo=discord)](https://discord.gg/nmCjvyVpnB) [![Twitter Follow](https://img.shields.io/twitter/follow/hahahahohohe?label=follow%20me&style=social)](https://twitter.com/hahahahohohe)

