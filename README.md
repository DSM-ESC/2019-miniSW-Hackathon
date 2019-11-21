# 2019 공개 SW 미니 해커톤 - ESC TEAM

## Good night

| 참가자 명단 | Github         | 역할                                              |
| ----------- | -------------- | ------------------------------------------------- |
| 최승호      | *@itsmyCareer* | 기획, Mobile Application, AI(**Machine Learing**) |
| 고정현      | *@joki2002*    | *                                                 |
| 최하연      | *              | *                                                 |
| 김난희      | *@kimnanhee*   | *                                                 |



### Example Media:

 https://www.youtube.com/watch?v=tn89hk2j2-o 



### 제품 / 서비스 개요

**Good Night**은 숙면 후 기상시에 느끼는 피로를 최대한으로 줄여 주기 위한 서비스ㆍ데이터를 제공합니다. 또한, 숙면 그래프 및 심박수 체크로 인한 숙면 교정 시스템, 머신러닝을 이용하여 사용자에 맞는 숙면시간을 체크해줌으로써, 매일 개운하게 기상 할 수 있게 됩니다.



### 제안 배경

저희 팀원들은 평소에 기숙사 생활을 하는데, 아침 점호를 나와야 하는 상황에서 너무 오래 자서 점호에 나오지 못해서 벌점을 받거나, 점호시간에 맞춰서 일어나도 피곤함이 가시지 않는 상황을 여러번 겪었습니다. 그래서 저희는 이를 개선할 수 있는 방법을 생각해 보다가 숙면을 교정해주는 서비스가 있다면 이를 개선 할 수 있을 것 같아서 저희가 직접 만들어서 써보자고 마음먹어서 **Good Night**을 기획하게 되었습니다.

---

### 제품 / 서비스 개발 계획

#### 1. 숙면 패턴

숙면 패턴은**1단계, 2단계, 3단계, 4단계, REM 수면**으로 나뉘며 평균 주기는 **1시간 30분**입니다. 또한 단계가 올라갈수록 **심박수가 낮아지고** 근육이 이완되며, 뇌파가 달라진다는 숙면 패턴중 일부분을 이용하여 제품을 기획하였습니다.

![](C:\Users\CSH\workspace\hackathon-files\2019-miniSW-Hackathon\images\markdown\sleep_cycle1.png)

![](C:\Users\CSH\workspace\hackathon-files\2019-miniSW-Hackathon\images\markdown\sleep_cycle2.jpg)

#### 2. 디바이스(Embedded Device)

- 디바이스는 안대, 머리띠 두 개의 기기로 나뉘며 기호에 맞게 사용 할 수 있습니다.

  - 우리가 개발할 기기는 ____ 입니다

  ![](C:\Users\CSH\workspace\hackathon-files\2019-miniSW-Hackathon\images\markdown\sleep_cycle3.png)

  - **xd-58c라는 Pulse 심박 센서**를 이용하여 **천측두 동맥**(*Auriculotemporal Nerve*)을 통해 심박수를 체크할 수 있습니다.
    -  http://shopping.interpark.com/product/productInfo.do?prdNo=5695711317&gclid=EAIaIQobChMIqfrvh_D75QIV0DUrCh0JSAOEEAYYASABEgKNc_D_BwE 
    - ![](C:\Users\CSH\workspace\hackathon-files\2019-miniSW-Hackathon\images\markdown\auriculotemporal-nerve.png)
    - ![](C:\Users\CSH\workspace\hackathon-files\2019-miniSW-Hackathon\images\markdown\mandibular-nerve.png)
  - 블루투스를 통해 **사용자 어플리케이션**으로 심박수를 전송합니다.
  - **사용자 어플리케이션**은 받은 심박수를 숙면 시간동안 녹화하며, 수면 단계를 측정합니다.

#### 3. 사용자 어플리케이션

- 사용자 어플리케이션에서는 디바이스에서 받은 심박수 데이터를 저장하며 머신러닝을 통해 사용자의 권장 수면시간과 수면 단계를 정밀하게 나눕니다.

- **최소 권장 수면 시간이 4시간 30분**임에 맞추어, 기상 알람을 맞추게 되면 **언제 수면을 해야 아침에 개운히 일어 날 수 있는지 알려주는 모드**를 제공합니다.

- 또한 기상 알람을 맞추어 놓으면 수면을 한 시간부터 숙면 패턴을 기록하여 기상 알람 전 1-2단계 숙면이거나 **REM수면에 빠지기 전에 일찍 깨워 주는 모드**도 제공합니다.

#### 4. 활용 방안

1. 학생ㆍ직장인 등 수면이 부족하고 기상 후 업무를 해야하는 사람들의 피로도를 줄일 수 있습니다.

2. 아침에 잘 일어나지 못하는 사람들을 위하여 수면 시간을 알려주어 깨워 줄 수 있습니다.

3. 성별, 연령대 별 평균 숙면시간을 체크하여 빅데이터ㆍ머신러닝을 통해 보다 정확한 수면교정과 수면단계를 정밀히 나눌 수 있습니다.