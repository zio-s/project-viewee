import { useState } from 'react';
import Button from '../../../../ui/button/defaultButton';
import Input from '../../../../ui/input';
import Content from './content';
import { CCNoitcetWrap } from './style';

const CCNotice = () => {
  const prevList = [
    {
      id: 1,
      tag: '서비스공지',
      title: '[안내] Viewee 고객센터 답변 지연 안내',
      content:
        '최근 문의량 증가로 인해 고객센터의 응대가 지연되고 있습니다. 빠른 답변을 위해 최선을 다하고 있으나, 일부 문의는 2~3일 이상 소요될 수 있습니다. 긴급 문의 사항은 FAQ를 먼저 확인해 주세요. 불편을 드려 죄송합니다.',
      date: '2025-01-22',
    },
    {
      id: 2,
      tag: '이벤트',
      title: '[이벤트] 신규 가입자 대상 웰컴 기프트 증정',
      content:
        '2025년 2월 1일부터 Viewee 신규 가입자를 대상으로 웰컴 기프트를 증정합니다. 첫 구독을 시작하는 분들은 다양한 혜택과 함께 특별한 선물을 받을 수 있습니다. 자세한 내용은 이벤트 페이지에서 확인해주세요.',
      date: '2025-01-21',
    },
    {
      id: 3,
      tag: '콘텐츠공지',
      title: '[업데이트] Viewee 앱 신규 기능 추가 안내',
      content:
        '더욱 편리한 사용 경험을 위해 UI/UX가 개선되었으며, 개인 맞춤형 추천 기능이 강화되었습니다. 이제 사용자의 시청 이력을 분석하여 더욱 정확한 콘텐츠를 추천해 드립니다. 최신 버전으로 업데이트 후 확인해 주세요.',
      date: '2025-01-20',
    },
    {
      id: 4,
      tag: '서비스공지',
      title: '[공지] 시스템 점검 안내',
      content:
        '2025년 1월 25일 오전 2시부터 5시까지 서비스 점검이 진행될 예정입니다. 이 시간 동안에는 일부 기능이 제한될 수 있으니 이용에 참고해 주세요. 원활한 서비스 제공을 위해 최선을 다하겠습니다.',
      date: '2025-01-19',
    },
    {
      id: 5,
      tag: '이벤트',
      title: '[이벤트] 설 연휴 특별 할인 이벤트 진행',
      content:
        '설 연휴를 맞이하여 인기 영화와 드라마를 최대 50% 할인된 가격으로 제공해 드립니다. 기간 한정 프로모션이므로 놓치지 마시고 다양한 콘텐츠를 저렴한 가격에 즐겨보세요!',
      date: '2025-01-18',
    },
    {
      id: 6,
      tag: '서비스공지',
      title: '[안내] 결제 시스템 점검 완료',
      content:
        '일부 사용자분들께 결제 오류가 발생했던 문제가 해결되었습니다. 현재 정상적으로 결제가 가능하며, 불편을 겪으신 고객님께는 개별 안내를 드릴 예정입니다. 이용에 불편을 드려 죄송합니다.',
      date: '2025-01-17',
    },
    {
      id: 7,
      tag: '콘텐츠공지',
      title: '[업데이트] 추천 알고리즘 개선 안내',
      content:
        '이제 Viewee에서 더욱 정교한 추천을 받을 수 있습니다. AI 기반의 추천 시스템이 개선되어, 고객님의 취향을 반영한 콘텐츠를 더욱 정확하게 제공해 드립니다. 새로운 추천 기능을 지금 확인해 보세요!',
      date: '2025-01-16',
    },
    {
      id: 8,
      tag: '이벤트',
      title: '[이벤트] 친구 초대 이벤트 진행 중!',
      content:
        '친구를 초대하면 한 달 무료 구독 혜택을 드립니다. 초대한 친구가 구독을 시작하면, 초대자와 친구 모두 한 달간 무료로 Viewee를 이용할 수 있습니다. 자세한 내용은 이벤트 페이지를 확인하세요!',
      date: '2025-01-15',
    },
    {
      id: 9,
      tag: '서비스공지',
      title: '[공지] 서버 안정화 작업 안내',
      content:
        '보다 원활한 서비스를 제공하기 위해 서버 안정화 작업을 진행할 예정입니다. 점검 시간 동안 일부 기능이 일시적으로 제한될 수 있으니 이용에 참고해 주세요. 항상 더 나은 서비스를 위해 노력하겠습니다.',
      date: '2025-01-14',
    },
    {
      id: 10,
      tag: '서비스공지',
      title: '[안내] 개인정보 처리방침 변경 안내',
      content:
        '개인정보 보호 강화를 위해 개인정보 처리방침이 일부 개정되었습니다. 주요 변경 사항은 공식 홈페이지에서 확인하실 수 있으며, 변경된 약관은 2025년 2월 1일부터 적용됩니다.',
      date: '2025-01-13',
    },
    {
      id: 11,
      tag: '이벤트',
      title: '[이벤트] 2025년 신년 맞이 특별 프로모션!',
      content:
        '새해를 맞이하여 Viewee에서 다양한 혜택을 준비했습니다. 구독 연장 할인, 인기 콘텐츠 무료 제공 등 다양한 이벤트를 놓치지 마세요!',
      date: '2025-01-12',
    },
    {
      id: 12,
      tag: '서비스공지',
      title: '[업데이트] 모바일 앱 안정성 향상 패치',
      content:
        '일부 사용자 환경에서 발생하던 오류를 수정하고, 앱의 로딩 속도를 개선하였습니다. 더 빠르고 안정적인 환경에서 시청을 즐겨보세요.',
      date: '2025-01-11',
    },
    {
      id: 13,
      tag: '서비스공지',
      title: '[안내] Viewee 고객센터 운영시간 변경',
      content:
        '고객센터 운영 시간이 변경되었습니다. 기존 24시간 운영에서 오전 9시~오후 6시로 조정되며, 주말과 공휴일에는 운영하지 않습니다.',
      date: '2025-01-10',
    },
    {
      id: 14,
      tag: '이벤트',
      title: '[이벤트] 인기 콘텐츠 무료 시청 이벤트!',
      content:
        '한정 기간 동안 인기 콘텐츠를 무료로 제공합니다. 이번 기회에 다양한 콘텐츠를 즐겨보세요! 자세한 내용은 이벤트 페이지를 참고하세요.',
      date: '2025-01-09',
    },
    {
      id: 15,
      tag: '서비스공지',
      title: '[공지] 일부 지역 서비스 일시 중단 안내',
      content:
        '네트워크 장애로 인해 일부 지역에서 서비스 접속이 일시적으로 제한될 수 있습니다. 문제 해결을 위해 최선을 다하고 있으니, 불편을 드려 죄송합니다.',
      date: '2025-01-08',
    },
    {
      id: 16,
      tag: '서비스공지',
      title: '[업데이트] 다크 모드 지원 추가',
      content:
        '이제 Viewee 앱에서도 다크 모드를 사용할 수 있습니다. 설정에서 다크 모드를 활성화하여 더욱 편안한 시청 환경을 경험해 보세요!',
      date: '2025-01-07',
    },
    {
      id: 17,
      tag: '서비스공지',
      title: '[안내] Viewee 이용약관 변경 안내',
      content:
        '서비스 이용약관이 일부 개정되었습니다. 변경된 조항을 확인하신 후, 동의하지 않으실 경우 고객센터로 문의해 주세요.',
      date: '2025-01-06',
    },
    {
      id: 18,
      tag: '이벤트',
      title: '[이벤트] Viewee 멤버십 혜택 강화!',
      content: '멤버십 혜택이 더욱 확대되었습니다. 프리미엄 구독자를 위한 특별 콘텐츠와 할인 혜택을 지금 확인하세요!',
      date: '2025-01-05',
    },
  ];
  const [noticeList, setNoticeList] = useState(prevList);
  const [search, setSearch] = useState('');
  const changeInput = (e) => {
    setSearch(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    const value = prevList.filter((item) => item.title.includes(search) || item.content.includes(search));
    setNoticeList(value);
  };
  const resetSearch = () => {
    setSearch('');
    setNoticeList(prevList);
  };
  return (
    <CCNoitcetWrap>
      <Content data={noticeList} search={search} setSearch={setSearch} resetSearch={resetSearch} prevData={prevList}>
        <form onSubmit={submit}>
          <Input placeholder="궁금하신 점을 입력해주세요" variant="gray" value={search} onChange={changeInput} />
          <Button type="submit">검색</Button>
        </form>
      </Content>
    </CCNoitcetWrap>
  );
};

export default CCNotice;
