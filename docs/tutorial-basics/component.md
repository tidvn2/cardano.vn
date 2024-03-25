---
sidebar_position: 1
---
#  sử dụng component

## lấy google api key 
[Xem Bài Hướng Dẫn để lấy được google api key](https://handsondataviz.org/google-sheets-api-key.html)


  sau đó chỉnh sửa ở file docusarus.config.ts
  ![](https://i.imgur.com/OuuznxX.png)

## Nhúng Table 

sheetId là đoạn bôi đen của url
![](https://i.imgur.com/LILLXhV.png)

sheetName là tên của tab 
![](https://i.imgur.com/hgqhFx4.png)

range là khoảng ô , mặc định A1:Z1000 

```jsx
import TableSheet from "@site/src/components/app/TableSheet.tsx";

<TableSheet sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU"  sheetName="table" range="A1:G5"/>
```

### Kết Quả :

import TableSheet from "@site/src/components/app/TableSheet.tsx";

<TableSheet sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU"  sheetName="table" range="A1:G5"/>

## Nhúng List Audio  

```jsx
import AudioList from "@site/src/components/app/AudioList.tsx";

<AudioList sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU"  sheetName="audio" range="A1:G5"/>
```

## Kết Quả :

import AudioList from "@site/src/components/app/AudioList.tsx";

<AudioList sheetId="1PyAroxbm1dQ0r47ostCMp-4uIXblLnynSnYT9NWM2lU"  sheetName="audio" range="A1:G5"/>

## Nhúng một Audio  
```jsx
import AudioPlayer from "@site/src/components/app/AudioPlayer.tsx";

<AudioPlayer link="https://cardano.vn/audios/podcast/20231017_summary_False_Cardano_Narratives_Are_At_It_Again.mp3" />
```
 
##  kết quả 

import AudioPlayer from "@site/src/components/app/AudioPlayer.tsx";

<AudioPlayer link="https://cardano.vn/audios/podcast/20231017_summary_False_Cardano_Narratives_Are_At_It_Again.mp3" />