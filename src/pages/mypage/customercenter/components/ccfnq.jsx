import { useState } from 'react';
import Button from '../../../../ui/button/defaultButton';
import Input from '../../../../ui/input';
import Content from './content';
import { CCFnQWrap } from './style';
import Tag from '../../../../ui/tag';

const CCNotice = ({ isActive }) => {
  const prevList = [
    {
      id: 1,
      tag: '이용권',
      title: '[이용권] 이용권 종류와 가격은 어떻게 되나요?',
      content: '이용권은 베이직, 스탠다드, 프리미엄 3가지 종류가 있으며, 가격은 월 9,900원부터 시작합니다.',
      date: '2025-02-15',
    },
    {
      id: 2,
      tag: '이용권',
      title: '[이용권] 이용권은 자동 결제되나요?',
      content: '네, 모든 이용권은 매월 자동 결제되며, 언제든 해지할 수 있습니다.',
      date: '2025-02-15',
    },
    {
      id: 3,
      tag: '이용권',
      title: '[이용권] 이용권 해지는 어떻게 하나요?',
      content: '마이페이지 > 결제 관리에서 이용권 해지를 신청하실 수 있습니다.',
      date: '2025-02-15',
    },
    {
      id: 4,
      tag: '이용권',
      title: '[이용권] 이용권을 환불할 수 있나요?',
      content: '이용권 환불은 사용 이력이 없을 경우, 결제 후 7일 이내에 가능합니다.',
      date: '2025-02-15',
    },
    {
      id: 5,
      tag: '재생',
      title: '[재생] 영상이 끊겨요. 어떻게 해결하나요?',
      content: '네트워크 환경을 확인하고, 필요 시 앱을 재시작하거나 캐시를 삭제해 보세요.',
      date: '2025-02-15',
    },
    {
      id: 6,
      tag: '재생',
      title: '[재생] 최대 몇 개의 기기에서 동시 시청이 가능한가요?',
      content: '이용권에 따라 다르며, 프리미엄 요금제에서는 최대 4대까지 가능합니다.',
      date: '2025-02-15',
    },
    {
      id: 7,
      tag: '재생',
      title: '[재생] 화질이 너무 낮아요. 어떻게 변경하나요?',
      content: '재생 설정에서 화질을 변경할 수 있으며, 네트워크 환경에 따라 자동 조정될 수도 있습니다.',
      date: '2025-02-15',
    },
    {
      id: 8,
      tag: '재생',
      title: '[재생] 일부 영상이 재생되지 않아요.',
      content: '해당 영상의 라이선스 문제일 수 있으며, 계속 문제가 발생하면 고객센터로 문의해주세요.',
      date: '2025-02-15',
    },
    {
      id: 9,
      tag: '모바일',
      title: '[모바일] 모바일 앱에서 오프라인 다운로드가 가능한가요?',
      content: '네, 일부 콘텐츠는 오프라인 저장이 가능하며, 저장 후 30일간 시청할 수 있습니다.',
      date: '2025-02-15',
    },
    {
      id: 10,
      tag: '모바일',
      title: '[모바일] 모바일 기기에서 화질 조정이 가능한가요?',
      content: '네, 설정에서 화질을 수동으로 조정할 수 있습니다.',
      date: '2025-02-15',
    },
    {
      id: 11,
      tag: '모바일',
      title: '[모바일] 앱이 자꾸 멈춰요. 어떻게 해결하나요?',
      content: '앱을 최신 버전으로 업데이트하고, 필요 시 캐시를 삭제해 보세요.',
      date: '2025-02-15',
    },
    {
      id: 12,
      tag: '모바일',
      title: '[모바일] 태블릿에서도 시청할 수 있나요?',
      content: '네, 태블릿에서도 앱을 설치하여 시청 가능합니다.',
      date: '2025-02-15',
    },
    {
      id: 13,
      tag: '로그인',
      title: '[로그인] 비밀번호를 잊어버렸어요. 어떻게 해야 하나요?',
      content: '로그인 페이지에서 "비밀번호 찾기"를 통해 재설정할 수 있습니다.',
      date: '2025-02-15',
    },
    {
      id: 14,
      tag: '로그인',
      title: '[로그인] 한 계정으로 여러 기기에서 로그인할 수 있나요?',
      content: '네, 하지만 동시 시청 가능 기기 수는 이용권에 따라 다릅니다.',
      date: '2025-02-15',
    },
    {
      id: 15,
      tag: '로그인',
      title: '[로그인] 계정이 잠겼어요. 어떻게 풀 수 있나요?',
      content: '보안상의 이유로 잠긴 계정은 비밀번호 재설정 후 다시 로그인할 수 있습니다.',
      date: '2025-02-15',
    },
    {
      id: 16,
      tag: '로그인',
      title: '[로그인] 소셜 로그인도 지원하나요?',
      content: '네, 구글, 애플, 페이스북 계정을 이용하여 로그인할 수 있습니다.',
      date: '2025-02-15',
    },
    {
      id: 17,
      tag: '이용권',
      title: '[이용권] 학생 할인은 없나요?',
      content: '현재 학생 할인은 제공되지 않으며, 프로모션을 참고해 주세요.',
      date: '2025-02-15',
    },
    {
      id: 18,
      tag: '재생',
      title: '[재생] 4K 화질을 지원하나요?',
      content: '네, 프리미엄 이용권에서 4K 화질을 지원합니다.',
      date: '2025-02-15',
    },
    {
      id: 19,
      tag: '모바일',
      title: '[모바일] iOS와 안드로이드 모두 지원하나요?',
      content: '네, iOS와 안드로이드 모두 공식 앱을 제공합니다.',
      date: '2025-02-15',
    },
    {
      id: 20,
      tag: '로그인',
      title: '[로그인] 비밀번호 변경 주기가 있나요?',
      content: '보안을 위해 6개월마다 비밀번호 변경을 권장합니다.',
      date: '2025-02-15',
    },
  ];
  const [faqList, setFaqList] = useState(prevList);
  const [search, setSearch] = useState('');
  const changeInput = (e) => {
    setSearch(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    const value = prevList.filter((item) => item.title.includes(search) || item.content.includes(search));
    setFaqList(value);
  };
  const tagClick = (title) => {
    const value = prevList.filter((item) => item.title.includes(title) || item.content.includes(title));
    setFaqList(value);
  };

  return (
    <CCFnQWrap>
      <Content data={faqList} isFnQ={isActive}>
        <div className="search">
          <h2>무엇이 궁금하신가요?</h2>
          <form onSubmit={submit}>
            <Input
              placeholder="궁금하신 점이 있다면 검색 또는 카테고리를 선택하세요."
              variant="gray"
              value={search}
              onChange={changeInput}
            />
            <Button type="submit">검색</Button>
          </form>
          <div className="example">
            <h3>자주하는 질문</h3>
            <div className="tagList">
              <Tag onClick={() => tagClick('이용권 해지')}>이용권 해지 방법</Tag>
              <Tag onClick={() => tagClick('영상')}>영상이 안나와요</Tag>
              <Tag onClick={() => tagClick('로그인')}>로그인이 안돼요</Tag>
            </div>
          </div>
        </div>
      </Content>
    </CCFnQWrap>
  );
};

export default CCNotice;
