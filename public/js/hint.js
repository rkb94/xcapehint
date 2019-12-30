window.hint = [
    // room1 : 501동 사람들
    // room2 : 기묘한 날개짓
    // room3 : 그남자 그여자
    // room4 : 제물의 밤
    // room5 : 숨바꼭질
    // 하단 대괄호('{') 안에 힌트를 하나씩 적을 수 있습니다.
    // theme에는 위에 적어 둔 테마 별로 이름을 정해주어야합니다.
    // hintNumber는 해당 힌트가 몇 번째 힌트인지 알려주기 때문에 테마별로 번호가 시작합니다. 번호를 늘려가면서 적어주세요.
    // hintContent는 힌트 내용을 줄글로 적어줍니다. 손님들이 보게되는 힌트 내용입니다. 해당 내용을 줄글로 적어주세요.

    // 밑에 있는 것은 예시입니다.
    // theme : 'room1' 이면 501동 사람들에 해당하는 힌트입니다.
    // hintNumber : '1' 는 해당 힌트가 501동 사람들 테마에서 1번째 힌트입니다.
    // hintContent : '내용' 내용안에 힌트를 적어줍니다.
    // 모든 입력 값은 '' <- 작은 따옴표 안에 적어줍니다.
    // 큰 따옴표나 다른 괄호 종류를 사용할 때에는 모두 [] 대괄호를 사용해주세요 ex) [1234] 알맞은 표현 / "1234"이나 {1234} 틀린 표현
    // 새로운 힌트를 추가하기 위해서는 {} <- 대괄호를 모두 복사해서 하단에 추가합니다.
    // 이 경우 중괄호 {}, 마지막에 반점이 들어가야합니다. 주의해주세요!
    // 밑에 적혀있는 내용들은 예시로 적은 것이니 힌트 내용을 수정해주세요!

    ///////// 501동 사람들 /////////
    {
        theme: 'room1',
        hintNumber: '1',
        hintContent: '분리수거 함 안에 있는 신문기사에서 최저임금을 찾아 입력해 주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '2',
        hintContent: '경비실안에서 모자와 벽면 태깅 후, 오늘의 근무자를 찾아 사번을 자물쇠에 입력해 주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '3',
        hintContent: '얻은 출퇴근 시간표를 우편함 아래 출퇴근 기록함에 넣어주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '4',
        hintContent: '음성을 듣고 지각 시간을 확인한 후에 책상아래 함을 오픈하여 파일을 찾아주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '5',
        hintContent: '파일 안 남자의 사진과 피난안내도를 비교하여 사진을 시간 순서대로 보고, 파일에서 남자가 서있는 위치를 확인하고 피난 안내도 속 남자의 위치를 비추는 CCTV 그림을 확인해주세요. 이때 피난 안내도 속 노란 불빛은 정답과는 무관함으로 CCTV 모양 자체만 봐주세요. 이 방식으로, 사진 5장 속 남자의 위치를 비추는 CCTV를 확인한 뒤, 사진 순서대로 이동경로를 방향 자물쇠에 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '6',
        hintContent: '엘레베이터 안쪽 고장접수함을 풀어야합니다. 엘리베이터 정기 검침표와 아파트 관리일지를 비교하여 고장접수일에 해당하는 알파벳을 찾아 초록색 상자를 열어주세요'
    },
    {
        theme: 'room1',
        hintNumber: '7',
        hintContent: '안내문에 나오는 전화번호로 전화해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '8',
        hintContent: '전화 후 들리는 내용으로 배전함을 열어주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '9',
        hintContent: '배전함 스위치를 엘레베이터 문 안쪽 사진과 같이 맞춰주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '10',
        hintContent: '전원 엘레베이터에 탑승 후 엘레베이터에서 나오는 소리를 듣고 층을 눌러주세요. 이때, 반드시 닫기까지 눌러주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '-',
        hintContent: '엘리베이터 타고 다시 돌아온 후'
    },
    {
        theme: 'room1',
        hintNumber: '11',
        hintContent: '컴퓨터 사진이 있는 핸드폰에 엘레베이터에서 들은대로 엄미선 사망 날짜를 입력해주세요. [ _ _ _ _ _ _ ]'
    },
    {
        theme: 'room1',
        hintNumber: '12',
        hintContent: '가져온 우유를 우유통에 넣어주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '13',
        hintContent: '얻은 고리를 컴퓨터 핸드폰 사진에 나온 위치에 꽃고 타일을 들어주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '14',
        hintContent: '화살표 모양이 있는 벨브를 표시된 방향대로 돌린 후 초록불에 태깅 해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '15',
        hintContent: '태깅 내용 확인 후,  X-NOTE 의 [ 1 4 5 7 ]번의 답을 철함 자물쇠에 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '16',
        hintContent: '철함을 연 후, 현재 연도를 입력해주세요.'
    },


    ///////// 기묘한 날개짓 /////////
    {
        theme: 'room2',
        hintNumber: '1',
        hintContent: '캐비넷 왼쪽 편 기사 속 마크를 태깅 하고, 기사 내용 속 이틀 전 사건이라는 사실을 확인 후 태깅 내용 속 날짜에서 이틀을 빼주세요. + 책상 위 남자얼굴 그림이 그려진 잡지 속 마크를 태깅해서 기사 내용 속 보름 전 사건이라는 사실을 확인 후, 잡지 위 날짜에서 보름을 빼주세요. 몇일만 붙여서 캐비넷에 입력해주세요. [ _ _ _ _ ]'
    },
    {
        theme: 'room2',
        hintNumber: '2',
        hintContent: '캐비넷 속 그림의 수갑 키 위치를 확인하고, 막대기로 꺼내주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '3',
        hintContent: '의자 위 책 제목을 확인하고 책장에서 해당 책들을 찾은 뒤에 날짜순으로 배열해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '4',
        hintContent: '시디케이스를 태깅하여 영상을 보고 해당 위치에 독약을 올려주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '-',
        hintContent: '두 번째 방으로 이동 후'
    },
    {
        theme: 'room2',
        hintNumber: '5',
        hintContent: '회색 봉투 속 OHP필름을 앞 방의 X-Ray에 나비가 완성되도록 끼우고 내용을 확인한 뒤, 해당 바코드를 태깅해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '6',
        hintContent: '태깅한 내용 속 왕나비 페이지를 보고 [발비나네] 에 해당하는 숫자를 보고 첫번째 캐비넷에 입력해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '7',
        hintContent: '서류를 태깅하여 교수와 조교가 주고받은 문자 내용을 보고 조교의 이름을 알아낸 후 두번째 캐비넷에 입력해주세요. [ _ _ _ _ _ ]'
    },
    {
        theme: 'room2',
        hintNumber: '8',
        hintContent: '시디를 플레이어에 넣어 조교가 쓴 글을 보고 독나비를 모은다는 내용을 확인한 후 진열장에 각 독나비의 숫자를 세어 더한 뒤, 세번째 캐비넷에 입력해주세요. [ _ _ _ _ ]'
    },
    {
        theme: 'room2',
        hintNumber: '9',
        hintContent: '삼각 유리장 안의 숫자를 확인 한 후, 벽면 리스트에서 해당 숫자의 영어로 된 월을 숫자로 바꿔 왼쪽 위 진열장에 HALM 순서대로 입력해주세요. [ _ _ _ _ _ ]'
    },
    {
        theme: 'room2',
        hintNumber: '10',
        hintContent: '열린 문을 끝가지 당겨 문과 타일을 겹쳐 보고 나비 모양의 순서대로 숫자를 봐주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '11',
        hintContent: '얻은 USB를 재생시켜 연구일지를 듣고 진열장에 순서대로 실험용 샬례를 올려주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '-',
        hintContent: '세 번째 방으로 이동 후'
    },
    {
        theme: 'room2',
        hintNumber: '12',
        hintContent: '모니터에 여자들이 알파벳 모양으로 누워있는데, 함의 붙어있는 순서대로 나열해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '13',
        hintContent: '알약케이스를 태깅하여 영상 속 마지막 약 이름을 보고 해당하는 알파벳을 도형순서대로 나열해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '14',
        hintContent: '얻은 유리병을 화장대 위 같은 모양의 유리병 옆에 올리면, 거울에 사진이 나옵니다.'
    },
    {
        theme: 'room2',
        hintNumber: '15',
        hintContent: '거울안의 마크를 태깅하여 여자의 사고전 사진을 보고 제일 앞글자를 거울 안 이목구비 순서에 맞게 나열해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '16',
        hintContent: '얻은 액자를 벽에 큰 액자위에 겹쳐주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '-',
        hintContent: '네 번째 방으로 이동 후'
    },
    {
        theme: 'room2',
        hintNumber: '16',
        hintContent: '남편의 편지 두 장을 대조하여 숫자가 쓰여있는 부분에 쓰인 글자를 보고 순서대로 나열해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '17',
        hintContent: '파란불빛 후레쉬를 얻어 앞방으로 가 사진속의 나비들을 비춰서 나비 이름을 확인한 후, 제일 앞방의 액자속 같은 나비를 파란불빛 후레쉬로 비추고, 마크를 태깅해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '18',
        hintContent: '아내의 편지를 읽고 사건개요에 적힌 남편의 생년월일을 마지막 함에 입력해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '19',
        hintContent: '얻은 카드들을 방 함 위에 원칙에 맞게 놓으면 영상이 재생되고, 영상을 본 후 아내의 마지막 말에서 남자의 이름을 찾아 열쇠를 찾아주세요.'
    },

    ///////// 숨바꼭질 /////////
    {
        theme:'room3',
        hintNumber:'1',
        hintContent:'벽면에 걸린 액자 옆에 있는 한전 안내문을 태깅 후 누전차단기를 맞게 올려주세요.'
    },
    {
        theme:'room3',
        hintNumber:'2',
        hintContent:'계단 아래쪽 발자국을 태깅하여 발자국 주인을 용의자 목록에서 찾아서, 택배상자와 태깅 내용의 노란 띠를 보고 TV 맨 아래 서랍을 열어주세요.'
    },
    {
        theme:'room3',
        hintNumber:'3',
        hintContent:'TV 내용과 신문기사 내용을 비교하여 신문 기사의 알파벳에 해당하는 숫자를 찾아 바로 위 서랍을 열어주세요. [ _ _ _ _ _ ]'
    },
    {
        theme:'room3',
        hintNumber:'4',
        hintContent:'발견한 열쇠로 가운데 방의 문을 열어주세요.'
    },
    {
        theme:'room3',
        hintNumber:'5',
        hintContent:'그림 일기와 키를 잰 흔적을 보고 곰돌이의 키를 알아내주세요. [ _ _ _ 5 ]'
    },
    {
        theme:'room3',
        hintNumber:'6',
        hintContent:'그림 일기들의 맞춤법이 틀린 글자를 날짜 순서대로 나열해주세요. [ _ _ _ _ _ ]'
    },
    {
        theme:'room3',
        hintNumber:'7',
        hintContent:'수첩을 태깅하여 스톡홀름 증후군 항목들을 보고 수첩에 답변이 쓰인 순서대로 답을 찾아 맨 왼쪽 문을 열어주세요. [ _ _ _ _ _ ]'
    },
    {
        theme:'room3',
        hintNumber:'8',
        hintContent:'옷장을 열면 아이의 그림일기가 있습니다. 그림일기 내용대로 옷장 안에 들어가서 문을 닫고 기다려주세요.'
    },
    {
        theme:'room3',
        hintNumber:'9',
        hintContent:'옷장 안에 있는 오른쪽 벽면에 스위치를 킨 후 아이방으로 가서 아이 시체를 확인 후 앞에 내용과 태깅 마크를 확인해주세요, 태깅을 하면 열상의 종류가 나오는데 아이의 몸에 있는 흔적들과 대조하여 [열상]이라 적힌 제일 아래 서랍을 열어주세요. [ _ _ _ _ ]'
    },
    {
        theme:'room3',
        hintNumber:'10',
        hintContent:'통장을 태깅하여 입금받은 업체명을 찾아 전화기 위에 명함을 보고 업체번호 [ _ _ _ _ ]를 찾아주세요. 업체 고객센터 번호 + 계좌번호로 전화를 해주세요 [ _ _ _ _ + _ _ _ _ _ _ ]'
    },
    {
        theme:'room3',
        hintNumber:'11',
        hintContent:'통장을 태깅하여 입금받은 업체명을 찾아 전화기 근처 명함을 보고(4418)업체번호를 찾아주세요.업체 고객센터 번호 + 계좌번호로 전화를 해주세요.[4418 130056]'
    },
    {
        theme:'room3',
        hintNumber:'12',
        hintContent:'총 입금액을 들어주세요.[80, 404, 280]'
    },
    {
        theme:'room3',
        hintNumber:'13',
        hintContent:'파란불빛 후레쉬로 아이방에 들어가 벽면에 숨겨진 일기를 4개를 찾아주세요. 일기에 해당하는 흉기를 파란불빛 후레쉬로 비추면 숫자가 써있습니다, 그 숫자를 일기 날짜 순서대로 입력해주세요.'
    },
    {
        theme:'room3',
        hintNumber:'14',
        hintContent:'보험금 지급 서류를 태깅 후 죽인 방법을 찾아주세요. [아이 시체가 나올 때 가스 발생] ⬅︎ 를 약물사 공기 중 흡입으로 해석 후, 게시판 쪽에가서 내용을 찾고 맞는 내용의 영어를 X-KIT에 입력해주세요.'
    },
    {
        theme:'room3',
        hintNumber:'15',
        hintContent:'X-KIT에 비밀번호 입력 후 뜬 독극물 화학식에서 H,O,C의 갯수를 TV 맨 위에 서랍에 대입해주세요. 이 때 날짜는 시체 옆에 보면 시간이 조작되어있다고 했기 때문에 사건일시에서 하루를 뺀 날짜에 대입해줍니다.'
    },
    {
        theme:'room3',
        hintNumber:'16',
        hintContent:'얻은 카드를 게시판 옆에 맞게 끼워주세요. 나오는 영상을 보고 영상 내용을 크게 4가지 키워드로 생각해서 옆에 방향자물쇠에 입력해주세요.'
    },
    {
        theme: 'room3',
        hintNumber: '-',
        hintContent: '방 이동'
    },
    {
        theme:'room3',
        hintNumber:'17',
        hintContent:'일기를 보고 붉은 색으로 표시된 부분의 숫자를 찾아주세요.'
    },
    {
        theme:'room3',
        hintNumber:'18',
        hintContent:'액자를 벽면에 걸어주세요.'
    },
    {
        theme:'room3',
        hintNumber:'19',
        hintContent:'영상에서 나오는 자동차 번호를 입력해주세요.'
    },
    
    
    ///////// 제물의 밤 /////////
    
    {
        theme:'room4',
        hintNumber:'1',
        hintContent:'상대편 철장 쪽을 보면 별이 그려진 빙고판을 볼 수 있습니다. 두 개의 빙고판을 합쳐서 큰 별에서 작은 별 순으로 마법의 문자를 알파벳으로 바꿔 입력해주세요.(철장에 적힌 마법의 문자를 해독할 수 있는 단서는 벽에 있습니다.)'
    },
    {
        theme:'room4',
        hintNumber:'2',
        hintContent:'별자리판에서 색칠해져있는 별자리 문양을 확인 후 철장에서 그 별자리에 해당하는 문양을 찾아주세요. 그리고 그 밑에다가 천을 대서 사다리 타기를 해서 알맞은 호일을 찾아줍니다. 반대편도 동일한 행동을 하고 호일을 찾은 후, 서로 알맞을 호일을 잡고 서로의 손을 맞잡아주세요.'
    },
    {
        theme:'room4',
        hintNumber:'3',
        hintContent:'말머리 앞에 있는 날짜를 반대쪽으로 넘긴 뒤 해당하는 달모양을 찾습니다. 그리고 달모양 그림을 받아 말머리상 옆에 있는 십자가 모양에 맟춰 말머리를 돌려주세요.'
    },
    {
        theme:'room4',
        hintNumber:'4',
        hintContent:'피라미드 아래 문자와 빨간색함 옆 벽면에 문자를 이용하여 순혈마녀의 이름을 해독해 주세요. [ _ _ _ _ _ ]'
    },
    {
        theme:'room4',
        hintNumber:'5',
        hintContent:'마녀의 음계 확인 후 마녀의 음계를 누를 수 있는 마법진 아크릴 함의 자물쇠를 열어주세요.'
    },
    {
        theme:'room4',
        hintNumber:'6',
        hintContent:'힌트 판을 보고 알맞게 마녀의 음계를 눌러주세요.'
    },
    {
        theme:'room4',
        hintNumber:'7',
        hintContent:'총으로 해골의 움직이는 빨간 눈을 맞춰주세요.'
    },
    {
        theme:'room4',
        hintNumber:'8',
        hintContent:'단상에 맨 아래 서랍과 제일 작은 책모양 서랍을 열어주세요. 그리고 화살표 그림에 맞춰 책모양 서랍을 움직여 방향 자물쇠를 열어주세요.'
    },
    {
        theme:'room4',
        hintNumber:'9',
        hintContent:'서랍에 붙어있는 문구를 확인한 후, 서랍 두개 안의 문구와 비교하여 독사와 두꺼비 뼈를 대신 할 수있는 물건을 각 각 서랍에 넣어주세요.'
    },
    {
        theme:'room4',
        hintNumber:'10',
        hintContent:'방안 곳곳을 돌아다니며 서랍안에 있는 문양을 찾아 UV랜턴으로 비춰주세요. 알맞는 문양의 카드를 카드함에 넣어주세요.'
    },
    {
        theme:'room4',
        hintNumber:'11',
        hintContent:'십자가를 관뚜껑 가운데 십자가 그림에 대주세요'
    },
    {
        theme:'room4',
        hintNumber:'12',
        hintContent:'십자가를 바로 옆 관뚜껑에 대주세요.'
    },
    {
        theme:'room4',
        hintNumber:'13',
        hintContent:'촛대 밑에 서랍에서 초를 꺼내 비어있는 초 자리에 꽂아주세요.'
    },
    {
        theme:'room4',
        hintNumber:'14',
        hintContent:'안에 있는 동물 갯수를 확인하여 흰색 사물함 맨 아래 서랍을 열어주세요.'
    },
    {
        theme:'room4',
        hintNumber:'15',
        hintContent:'마지막 방에서 4개의 조각을 가지고 피라미드 있는 방으로 가서 거울을 보고 문제를 풀어주세요. 순서대로 꽂아주시면 됩니다.'
    },
    {
        theme:'room4',
        hintNumber:'16',
        hintContent:'터널 안 벽면에 손그림 액자를 봐주세요 손목에 있는 달 모양과  조각상 밑에 달을 비교하여 같은 모양을 찾아 해당하는 별자리 그림에 반지를 꽂아주세요.'
    },
        
    ///////// 그 남자 그 여자 /////////
    {
        theme: 'room5',
        hintNumber: '1',
        hintContent: '키패드함 위 단서, 시계 속 단서, 커튼 우측 액자 단서[A + M] 3개의 단서 조합으로 [_ _ _ _ _]여자의 이름을 알아내주세요.'
    },
    {
        theme: 'room5',
        hintNumber: '2',
        hintContent: '남자의 구두를 의자 위에 올려주세요.'
    },
    {
        theme: 'room5',
        hintNumber: '3',
        hintContent: '올라온 함 중에 첫 데이트를 기록한 일기를 보고 날씨 단서와 비교하여 처음 만난 날을 유추해주세요.[_ _ _ _].'
    },
    {
        theme: 'room5',
        hintNumber: '4',
        hintContent: '라디오에 USB를 꽂으면 여자의 이야기가 나오고, 2 / 81 번 트랙의 대문자를 봐주세요.[_ _ _ _].'
    },
    {
        theme: 'room5',
        hintNumber: '5',
        hintContent: 'LP판을 턴테이블 재생시키듯 위에 올려주세요.'
    },
    {
        theme: 'room5',
        hintNumber: '6',
        hintContent: '아래 서랍에서 엽서를 찾아 우편함에 넣어주세요.'
    },
    {
        theme: 'room5',
        hintNumber: '-',
        hintContent: '두 번째 방으로 이동 후'
    },
    {
        theme: 'room5',
        hintNumber: '7',
        hintContent: '왼쪽 벽면에 그녀를 생각하며 쓴 시가 있습니다. 노란색 단어를 찾아 오른쪽 벽면에서 해당하는 단어들의 방향을 찾아주세요[EX 행복,사랑,즐거움,사랑 ➔ 상 상 하 _ _ _]'
    },
    {
        theme: 'room5',
        hintNumber: '8',
        hintContent: '별자리 단서의 숫자 그리고 지붕의 달모양을 보고 함을 풀어주세요.[ _ _ _ _ _ ]'
    },
    {
        theme: 'room5',
        hintNumber: '-',
        hintContent: '세 번째 방으로 이동 후'
    },
    {
        theme: 'room5',
        hintNumber: '9',
        hintContent: '그들이 보려고 했던 벽면포스터와 구겨진 영화표를 보고 남자 주인공 이름[MarTin]과 동일한 영화의 상영관 번호를 찾아 함을 열어주세요.[_ _ _ _ _]'
    },
    {
        theme: 'room5',
        hintNumber: '10',
        hintContent: '깨진 여자 거울 2개를 위치가 같다고 생각하고 색이 있는 위치를 보고 숫자를 찾은 후, 그 숫자를 함 안에 영어 문장 색깔 순서대로 입력해주세요.[_ _ _ _ _].'
    },
    {
        theme: 'room5',
        hintNumber: '11',
        hintContent: '주사기를 밀어 여자에게 소홀해졌음을 사과하는 편지와 (벽에 꽃 그림)숫자를 비교하여 맨 아래함을 열어주세요.[_ _ _].'
    },
    {
        theme: 'room5',
        hintNumber: '12',
        hintContent: '구두를 첫 번째 방에 가져가 의자 위에 올려놔 주세요.'
    },
    {
        theme: 'room5',
        hintNumber: '13',
        hintContent: '지쳐서 이미 마음을 정리한 여자가 남긴 편지를 읽고 여자 방의 문에 적힌 글과 비교해서 자물쇠를 열어주세요.'
    },
    {
        theme: 'room5',
        hintNumber: '-',
        hintContent: '마지막 방으로 이동 후'
    },
    {
        theme: 'room5',
        hintNumber: '14',
        hintContent: '밑에 있는 액자를 가지고 첫 방의 액자들과 대조하여 그들의 사랑이 진행되었던 상황을 확인하고 마지막 방 함위에 단서로 함을 열어주세요.[_ _ _ _ _]'
    },
    {
        theme: 'room5',
        hintNumber: '15',
        hintContent: '영상을 보고 마지막에 나오는 그들이 만났던 시간을 확인 후 밑에 함을 열어주세요.'
    },
    {
        theme: 'room5',
        hintNumber: '16',
        hintContent: 'UV랜턴으로 문에 있는 MEMORY와 여자 방에 달력을 비춰 문을 열어주세요. 이때, #버튼도 눌러주신 후 함 안에 있는 열쇠를 얻어주세요.'
    },
    ///////// 그믐달 살인사건 /////////
    
    {
        theme: 'room6',
        hintNumber: '1',
        hintContent: '요로콤'
    },
    {
        theme: 'room6',
        hintNumber: '2',
        hintContent: '저러콤'
    },
    {
        theme: 'room6',
        hintNumber: '3',
        hintContent: '이러콤'
    },
    {
        theme: 'room6',
        hintNumber: '4',
        hintContent: '이러콤'
    },
    {
        theme: 'room6',
        hintNumber: '5',
        hintContent: '이러콤'
    },
    {
        theme: 'room6',
        hintNumber: '6',
        hintContent: '이러콤'
    },
];
