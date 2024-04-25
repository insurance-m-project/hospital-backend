> 2024 메리츠화재 인턴십 프로젝트
# 보험 서류 청구 자동화 시스템 병원 DApp 서버
**'독감'** 보험 서류 청구 시, 총 9 단계의 프로세스를 2 단계로 줄일 수 있는 **이더리움 스마트 컨트랙트** 기반 DApp 서버
<br>
프론트에서는 이더리움 클라이언트에 정보를 전달하는 역할만, **ABI는 서버에 저장하여 필요한 트랜잭션 객체는 서버에서 전달**하도록 로직 작성

### As-is
```
1. 진료비 영수증, 진료비 세부산정내역을 병원에서 환자가 직접 발급
2. 메리츠화재 앱에서 보험금 청구 메뉴 접속
3. 로그인
4. 청구유형 선택
5. 치료받을 분 선택
6. 필수약관 동의 선택
7. 청구 정보 입력 선택 (사고유형, 사고일자, 진단 및 청구 내용, 이메일 등 입력)
8. 입금 계좌정보 (청구 대행서비스, 의료급여 수급권자 여부 선택)
9. 보험금에 필요한 서류 전송 (진료비 계산 영수증, 진료비 세부 내역서 등을 카메라로 촬영하여 전송)
```

### To-be
```
1. 보험 서류 청구 자동화 동의
2. 병원에서 DApp에 직접 접속하여 독감 보험금 접수 버튼 클릭
```

## Tech Stack
### 서버
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/node.js-6DB33F?style=for-the-badge&logo=nodedotjs&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> 
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> 

<br>

### Block-Chain Skill
<img src="https://img.shields.io/badge/ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white"> <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white">

<br>

### Communication Tool
<img src="https://img.shields.io/badge/InteliJ-0071C5?style=for-the-badge&logo=intellijidea&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white"/> 

<br>

## Project Structure 
![image](https://github.com/insurance-m-project/hospital-backend/assets/90203250/eee77884-c605-4b19-a6f0-a3cc0ad5e00b)

<br>

## Commit/PR Convention
### Commit Convention
```
feat/1-create-project
```
- 커밋태그/이슈번호-개발요약
<br>

**Pull Request**
```
[feat/1-create-project] 프로젝트 생성
```
- [브랜치 이름] PR 설명

<br>
