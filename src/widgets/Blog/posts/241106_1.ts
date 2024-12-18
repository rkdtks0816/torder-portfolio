import { Post } from "@/shared/types/post";
import { tags } from "../BlogTags";

const post: Post = {
  title: `컴퓨터 구조 개요`,
  time: "241106_1",
  tags: [tags.computerArchitecture],
  content: `
        ## 컴퓨터는 0과 1만 이해할 수 있다!
        > 0과 1로 이루어진 데이터와 명령어에 의해 작동
        ### 데이터
        - 문자, 숫자

        ### 명령어
        - 종류, 사이클

        ## 컴퓨터는 기계다!
        > 부품들의 역할과 상호작용에 대해 알아야 한다
        ### CPU(중앙처리장치)
        - 연산 수행(ALU: 산술논리연산장치)
        - 제어(CU: 제어장치)
        - 임시 저장장치(register: 레지스터)
        - 레지스터 값을 통해 연산과정 관찰

        ### 메모리(기억장치)
        - 실행 중인 프로그램을 저장(메인 메모리: RAM)
        - 빠른 메모리 접근을 보조(캐시 메모리)
        - 주소를 통해 데이터 접근(address: 주소)
        - 전원이 꺼지면 모두 삭제(volatile: 휘발성)

        ### 보조기억장치
        - 보관할 프로그램을 저장
        - 전원이 꺼져도 정보 저장(non-volatile: 비휘발성)
        - RAID: 안전하고 안정적으로 장치를 구성하는 기술
        - CD-ROM, DVD, 하드 디스크 드라이브
        - 플래시 메모리(SSD, USB 메모리), 플로피 디스크

        ### 입출력장치
        - 컴퓨터 외부에서 내부와 정보를 교환하는 장치

        ### 주변장치: 보조기억장치 + 입출력장치
        ### 메인보드
        - 부품들을 고정하고 연결하는 기판

        ### 버스
        - 정보를 주고받는 통로
        - 시스템 버스: 핵심 부품들을 연결
        
        \`\`\`
        이것이 취업을 위한 컴퓨터 과학이다 
        with CS 기술 면접을 기반으로 작성한 글입니다.
        \`\`\`
    `,
};

export default post;
