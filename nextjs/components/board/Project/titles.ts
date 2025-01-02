export interface Title {
  url: string;
  name: string;
}

export const titles = {
  CNN: { url: "CNN", name: "수화 번역을 위한 CNN 하드웨어 가속기" },
  myTab: { url: "myTab", name: "내 맘대로 꽂아 쓰는 멀티탭" },
  autoencoder: { url: "autoencoder", name: "BPSK와 오토인코더" },
  tps: { url: "tps", name: "날씨에 따른 태양광 발전량 예측" },
  upos: { url: "upos", name: "AWS 기반 UPOS Service Solution" },
  dachCar: { url: "dachCar", name: "웹 IoT RC카 Dach Car" },
  noblyTV: { url: "noblyTV", name: "홀로 어르신을 위한 노블리 TV" },
  talkyDoki: { url: "talkyDoki", name: "일본어 회화 학습 플랫폼 토키도키" },
  blockHolmes: { url: "blockHolmes", name: "부동산 안전거래 플랫폼 블록홈즈" },
  myPersonalHomepage: { url: "myPersonalHomepage", name: "나만의 홈페이지" },
};

export const titleValues = Object.values(titles);
