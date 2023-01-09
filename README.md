PortFolio 프로젝트 소개

Pocket 커뮤니티 사이트입니다

# 개발인원및 기간

- 1인개발 (3주소요)

# 목적

- 커뮤니티 사이트의 CRUD기능과 부가적인 기능을 구현해보았습니다

# 구현 영상

https://user-images.githubusercontent.com/108124042/211211849-400f6e65-3ac9-4b79-801d-72c54068a255.mp4

- 게시글 생성(Create), 조회(Read), 수정(Update), 삭제(Delete)

- 이미지 업로드

- 댓글 생성(Create), 조회(Read), 수정(Update), 삭제(Delete)

- 회원가입, 로그인, 로그아웃 
- 게시글 시간정보
- 게시글 검색
- 게시글 정렬
- 게시글 일부씩 불러오기


# 적용 기술

- React 리액트 Hook
- Redux-toolkit 로그인, 로그아웃시 회원정보 변동 저장
- react-router-dom 페이지 경로설정
- Express
- MongoDB nosql
- mongoose 스키마 모델 몽고디비 연결
- path
- Firebase Authentication 유저정보기능 지원
- axios
- Body-parser 클라이언트에서 보내는 바디를 파싱하기 위함
- react-bootstrap
- emotion sass 기반
- Multer
- react-avatar
- Moment


# 에러 사항

- cors 에러
3000번 포트에서 보내지만 5000번 포트에서 받아달라고 해야함
http-proxy-middle라이브러리 사용하여 해결

- 이미지업로드시 이미지가 나오지않았다
server에 이미지폴더 경로를 static으로 알려주어 해결

- 글 수정시 
component is changing an uncontrolled input to be controlled 에러가 나타났다
input의 value에 undefined가 들어 갈수도 있다는 에러였다
value={Title || ''} 으로 수정하여 해결

