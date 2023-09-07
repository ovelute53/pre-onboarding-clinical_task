# 👹 원티드 프리온보딩 3주차 과제 👹

## 개요

- 🦁 본 페이지는 원티드 프리온보딩 인턴십 3주차 개인과제를 위한 리드미입니다.
- 🏨 해당 repository는 best practice를 선발하기 위한 사전 개인 과제입니다.
- 🌤️ 깃헙 이슈 전체 페이지, 상세 페이지로, 에러페리지로 구성되어 있습니다.

## 1. 프로젝트 목표

### 🎇코드의 효율성, 최선을 위한 방법 도모 등 개인이 팀과 작업하기에 앞서 동료들이 이해하기 쉬운 코드를 작성하는 것이 목표이다,🎇

## 2. 개발 환경 및 배포 URL

[🔗 배포링크](https://pre-onboarding-clinical-task.vercel.app/)

## 3. 프로젝트 구조

<img width="222" alt="스크린샷 2023-09-08 오전 2 01 14" src="https://github.com/ovelute53/pre-onboarding-clinical_task/assets/104200167/857a73d4-5b34-45a5-a6bc-a8544249536c">


## 4. 기술 스택
<img 
 height=20 src="https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=VITE&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=black"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img height=20 src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img 
 height=20 src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
 

## 5. UI

### 초기 검색창

<img width="607" alt="스크린샷 2023-09-08 오전 2 10 41" src="https://github.com/ovelute53/pre-onboarding-clinical_task/assets/104200167/891d5971-7142-4638-9798-9ed472da25c9">


### 추천 검색어 리스트

<img width="607" alt="스크린샷 2023-09-08 오전 2 10 59" src="https://github.com/ovelute53/pre-onboarding-clinical_task/assets/104200167/188855cd-e87e-442c-9637-e2e02c3b31f7">

### 이전 검색 기록

<img width="607" alt="스크린샷 2023-09-08 오전 2 11 05" src="https://github.com/ovelute53/pre-onboarding-clinical_task/assets/104200167/32211273-6ffa-4197-95c3-f9d2d77eb882">

## 6. 기술에 대한 설명

### 1. 추천 검색어 기능
![code](https://github.com/ovelute53/pre-onboarding-clinical_task/assets/104200167/c6886d1e-6c9c-427f-9e8e-45ffac803c9a)

- 추천 검색어를 Ul 안에서 map으로 li를 나열해주는 형식으로 구현
- 서버에서 제공하는 API에서 sickNm을 가져와서 리스트를 나열
- 검색어를 tab으로 키보드 접근 가능하며 overflow된 리스트를 스크롤로 이동하면서 접근 가능
- 검색어 리스트에 있는 검색어를 클릭하면 현재 input value가 선택된 값으로 변경

### 2. 이전 검섹어 기능
![code](https://github.com/ovelute53/pre-onboarding-clinical_task/assets/104200167/62eb6908-7b18-463b-ab91-b87607b5b9d7)

- 추천 검색어 상단에 구분선을 지어서 검색기록이 저장되도록 설정
- X 표시를 클릭 시 내용이 지워지도록 설정
- 이전 검섹기록 키워드를 클릭하면 현재 input value가 선택한 값으로 대치됨

### 3. 캐싱 기능

![code](https://github.com/ovelute53/pre-onboarding-clinical_task/assets/104200167/216c4800-1785-4cfa-9512-f41676735d22)

- 브라우저에 내장되어 있는 cache storage API와 연동하여 캐싱 기능 구현
- 키워드를 입력하면 캐시가 cache storage에 저장되도록 설정
- expiry time 유통기한을 제시하여 일정 시간이 지나면 캐시가 삭제되도록 설정

