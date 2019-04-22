import LocalizedStrings from 'react-native-localization';

export const strings = new LocalizedStrings({
  en: {
    LOADING: 'LOADING...',
    HELLO: 'Hello',
    LOGIN: 'Login',
    EMAIL: 'Email',
    PASSWORD: 'Password',
    SIGNUP: 'SIGN UP',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    FORGOT_PW: 'Forgot password?',
    FIND_PW: 'FIND PASSWORD',
    NAME: 'NAME',
    STATUS_MSG: 'Status message',
    REGISTER: 'REGISTER',
    SEND_LINK: 'Send Link',
    FRIEND: 'Friend',
    MESSAGE: 'Message',
    MY_PROFILE: 'My profile',
    UPDATE: 'Update',
    NO_CONTENT: 'No content',
    ADD_FRIEND: 'ADD',
    DELETE_FRIEND: 'DELETE',
    GO_CHAT: 'GO CHAT',
    SEARCH_USER: 'Search User',
    CHAT: 'CHAT',
    SEND: 'Send',
    WRITE_MESSAGE: 'Write message...',
    ERROR: 'Error',
    FRIEND_ADDED: 'Added to your friend.',
    FRIEND_ALREADY_ADDED: 'Already your friend.',
  },
  ko: {
    LOADING: '로딩중...',
    HELLO: '안녕하세요',
    LOGIN: '로그인',
    LOGOUT: '로그아웃',
    EMAIL: '이메일',
    PASSWORD: '패스워드',
    SIGNUP: '회원가입',
    LOGIN: '로그인',
    FORGOT_PW: '비밀번호를 잊어버리셨나요?',
    FIND_PW: '비밀번호 찾기',
    NAME: '이름',
    STATUS_MSG: '상태메세지',
    REGISTER: '가입',
    SEND_LINK: '링크 보내기',
    FRIEND: '친구',
    MESSAGE: '메세지',
    MY_PROFILE: '나의 프로필',
    UPDATE: '수정',
    NO_CONTENT: '컨텐츠가 없습니다',
    ADD_FRIEND: '친구추가',
    DELETE_FRIEND: '친구삭제',
    GO_CHAT: '채팅하기',
    SEARCH_USER: '사용자 검색',
    CHAT: '채팅',
    SEND: '보내기',
    WRITE_MESSAGE: '메세지를 입력해주세요…',
    Error: '에러',
    FRIEND_ADDED: '친구로 등록되었습니다.',
    FRIEND_ALREADY_ADDED: '이미 친구입니다.',
  },
});

export const getString = (str) => {
  return strings[str];
};
