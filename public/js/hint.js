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
        hintContent: '분리수거 봉투 안을 보시고 최저임금 [1485]을 찾아 경비실에 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '2',
        hintContent: '경비실에 있는 모자와 벽에 있는 컴퓨터그림에 X-Kit를 태깅한 후, 오늘의 근무자를 찾아 날짜를 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '3',
        hintContent: 'X-Kit 찢긴 근무표 단서와 근무현황 서류를 보고 오늘 근무자 임만식의 사번을 경비실 함에 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '4',
        hintContent: '[93620]을 입력한 후, 경비실 함에서 나온 출퇴근카드를 우편함 출퇴근 카드꽂이에 넣어주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '5',
        hintContent: '전화음성을 듣고, 한 시간 지각한 사실을 확인한 후에 책상 아래 함을 오픈하여 표준근로계약서 파일을 얻어주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '6',
        hintContent: '파일 안 사진 5장과 피난안내도를 같이 보며 cctv의 이동방향을 방향죄물쇠에 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '7',
        hintContent: '방향키자물쇠에 [아래, 오른쪽, 위, 위]를 입력한 후, 엘리베이터 안 아파트 관리일지와 정기 검침표를 보고 고장접수를 찾아서 관리일지의 알파벳을 초록색 발판에 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '8',
        hintContent: '초록색 발판에 [wrong]을 입력. 발판 안에 있는 안내문에서 전화번호를 찾아 경비실 전화기로 전화를 걸어주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '9',
        hintContent: '전화 음성대로 배전함 자물쇠에 [9728]을 입력하여 열어준 후 엘레베이터 문에 [고장점검중] 그림대로 스위치를 바꿔주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '10',
        hintContent: '엘레베이터에 [경비실 안에서 발견한 CCTV카메라, X-Kit]를 챙겨 전원 탑승하신 후 양쪽 문을 닫아주세요. 음성대로 엘레베이터 버튼을 다음과 같이 눌러주세요. [4, 2, 6, 3, 닫기]'
    },
    {
        theme: 'room1',
        hintNumber: '11',
        hintContent: '엘레베이터 조명이 빨간색으로 바뀐 후 문을 열고 다음 방으로 넘어가주세요. 해골머리를 찾아 옷 위에 올려주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '12',
        hintContent: '아지트 방에 있는 모자를 태깅한 후에 벽에 걸려 있는 투명 힌트지를 X-Kit에 겹쳐 숫자를 찾아 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '13',
        hintContent: '[02744]를 X-Kit에 입력한 후 모자구매자를 찾아 아지트 방 철함에 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '14',
        hintContent: '[임규필]을 입력하여 철함을 열어주세요. 철함에서 나온 액자, 꽃(화분에 꽂아 음성확인), 열쇠(우유발견가능)를 꺼내준 후 그 중 액자에 있는 컴퓨터표시에 X-Kit로 태깅해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '15',
        hintContent: 'X-Kit에 [엄미선]을 입력한 후, 모자구매자(임규필)가 아파트에서 살아온 개월을 바깥에 있는 왼쪽 함에 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '16',
        hintContent: '[10년1개월]을 입력한 후, 신문 조각 4개를 꺼내어 각 각에 그려져있는 (+,◎), (+,○) 모양에 맞춰 아지트 방 자석판에 붙여주세요. 맞춰서 보이는 글자 7개를 찾아 오른쪽 함에 초성을 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '17',
        hintContent: '[ㅇㄹㅂㅇㅌ ㅈㅅ]을 입력한 후 UV랜턴을 발견해주세요. 그리고 신문이 붙여있는 자석판에 비춰주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '18',
        hintContent: '[KILL!]을 찾아 공구함에 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '19',
        hintContent: '꽃을 아지트방 화분에 꽂아서 음성을 듣고 공구함에서 찾은 비상충전밧데리, 우유, X-Kit를 챙겨서 엘레베이터에 전원 탑승해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '20',
        hintContent: '공구함 안에 적혀있던 숫자를 엘레베이터 안 비상충전함에 입력해주세요. 그리고 비상충전 밧데리 집게를 꽂은 후 엘레베이터 문을 닫아주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '21',
        hintContent: '원래 장소로 돌아온 후, 우유를 우유곽 빈 칸에 넣어주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '22',
        hintContent: '엘레베이터 음성을 듣고 경비실 안에 있는 핸드폰에 엄미선씨의 사망일자(경비실에 있던 표준근로계약서파일 참고)를 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '23',
        hintContent: '[831017]를 입력한 후, 가스누출위치를 확인해주세요. 화분 안에 있던 갈고리를 이용하여 벨브를 찾아주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '24',
        hintContent: '엘레베이터 앞에 위치한 타일을 열어 안 쪽에 있는 오른쪽 벨브를 화살표방향으로 돌려주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '25',
        hintContent: 'CCTV에서 나오는 초록색 불빛을 따라가 불빛이 멈추는 곳을 X-Kit로 태깅해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '26',
        hintContent: 'X-Kit 영상을 시청한 후 타일을 열어 발견한 X-NOTE의 [1, 4, 5, 7]번의 답을 철함 자물쇠에 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '27',
        hintContent: '[4126]을 입력하여 철함을 연 후, 현재년도를 입력해주세요.'
    },


    ///////// 기묘한 날개짓 /////////
    {
        theme: 'room2',
        hintNumber: '1',
        hintContent: '책상 위 잡지와 벽에 붙어있는 신문에 X-Kit를 태깅한 후, 캐비닛에 적힌 [모든걸 잃은 날 <신문-아내가 사망한 날>, 다시 태어난 날 <잡지-시약 발표 날>]을 신문 발행일로부터 이틀전 날짜와 보름전 날짜를 입력해주세요.',
    },
    {
        theme: 'room2',
        hintNumber: '2',
        hintContent: '[2903]을 입력한 후, 얻은 막대로 사진 속 열쇠를 찾아 동료를 풀어주세요'
    },
    {
        theme: 'room2',
        hintNumber: '3',
        hintContent: '동료의 의자에 B교수의 책이름이 적혀있는데 책장에서 해당 책들을 찾아 발간 년도 순서대로 나열하고, 양 끝 넘버를 제외한 가운데 네자리만 입력해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '4',
        hintContent: '[4683]을 입력한 후, CD와 독약을 얻었으면 CCTV를 태깅하여 영상을 보고 영상에서 나온 위치에 독약을 놓아주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '5',
        hintContent: '다음 방으로 이동한 후, OHP를 앞방의 xray에 나비가 완성되도록 끼우면 c바코드를 태그하라는 말이 나온다.'
    },
    {
        theme: 'room2',
        hintNumber: '6',
        hintContent: 'c바코드에 X-Kit를 태깅한 후, 왕나비 페이지를 보고 [발비나네]에 해당하는 숫자를 입력해주세요.[7499]'
    },
    {
        theme: 'room1',
        hintNumber: '7',
        hintContent: '서류에 X-Kit를 태깅한 후, 교수와 조교가 주고받은 문자 메세지 내용을 보고 조교의 이름을 입력해주세요.[ETHAN]'
    },
    {
        theme: 'room2',
        hintNumber: '8',
        hintContent: 'CD를 넣어 조교가 작성한 글을 본다. 독나비를 모은다는 얘기가 있다. 진열장에서 독나비의 이름과 무늬를 확인하고 마리수를 세어 한줄씩 더해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '9',
        hintContent: '[7538]을 입력한 후, 얻은 USB를 재생시켜 연구일지를 듣고 색 순서대로 샬레를 진열해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '10',
        hintContent: '[HALM SEASON]입력 방법 = 두번째방 오른쪽 상단 진열장에 들어있는 책에 [8,0,4,1]이라는 숫자가 적혀있다. 벽에 [HALM]이라고 적힌 종이에서 [8,0,4,1]에 해당하는 여대생들의 이름을 보면 앞글자가 [HALM]이라고 적혀있다. [HALM SEASON]을 입력해달라고 했으니까 그 옆에 달력을 보고 [HALM]<8,0,4,1>에 해당하는 season을 입력해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '11',
        hintContent: '[12392]을 입력한 후, 왼쪽 상단 진열장 안에 샬레를 색 순서대로 진열해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '12',
        hintContent: 'HALM의 열린 문 안쪽에는 숫자가 적혀있다. 벽에 그려져있는 나비들과 함께 겹쳐보고, 문안쪽의 숫자를 캐비닛에 그려진 나비 모양 순서대로 입력해주세요.[5160]'
    },
    {
        theme: 'room2',
        hintNumber: '13',
        hintContent: '다음 방으로 이동한 후, 벽에 여자들이 알파벳모양으로 누워있다. 함에 그려져있는 순서대로 알파벳을 입력해주세요.[FELP]'
    },
    {
        theme: 'room2',
        hintNumber: '14',
        hintContent: '알약케이스를 NFC태깅하여 영상을 보고 마지막 약 이름에 해당하는 알파벳을 함에 그려져있는 도형순서대로 나열해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '15',
        hintContent: '[useless]를 입력하여 얻은 유리병을 화장대 위에 남자와 마주보게 올리면 거울에 사진이 나온다. 거울 속 NFC태깅하여 여자의 사고전 사진을 보고 제일 앞글자를 거울 안 이목구비 순서대로 나열해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '16',
        hintContent: '[VAIN]을 입력하여 얻은 액자를 큰 액자위에 겹쳐 걸어주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '16',
        hintContent: '다음 방으로 이동한 후, 양쪽 벽에 남편이 남긴 편지 두장을 대조하여 숫자가 쓰여있는 부분에 쓰인 글자를 보고 숫자 순서대로 입력해주세요.[9472]'
    },
    {
        theme: 'room2',
        hintNumber: '17',
        hintContent: 'UV랜턴을 얻어 앞방으로 가 액자안의 나비들을 순서대로 비춰보면 daisy라는 글자가 완성된다. 제일 앞방으로 돌아가 daisy라는 나비를 찾아 UV랜턴으로 비춰보면 NFC태그가 보이고 이를 태깅하여 아내의 편지를 읽고, 사건개요에 적힌 남편의 생년월일을 찾아 마지막 함을 열어주세요.[320709]'
    },
    {
        theme: 'room2',
        hintNumber: '18',
        hintContent: '[320709]를 입력하여 얻은 카드를 마지막 방 함위에 원칙에 맞게 올려 놓으면 영상이 재생된다.영상 속 아내의 마지막 말에서 남편의 이름을 찾아주세요.<Brandon,함에 on이 적혀있으므로 [brand]만 입력해주세요.>'
    },

    ///////// 숨바꼭질 /////////
    {
        theme: 'room3',
        hintNumber: '1',
        hintContent: '힌트 내용을 추가해주세요...'
    },
    {
        theme: 'room3',
        hintNumber: '2',
        hintContent: '힌트 내용을 추가해주세요...'
    },
    
    
    ///////// 제물의 밤 /////////
    {
        theme: 'room4',
        hintNumber: '1',
        hintContent: '요로콤'
    },
    {
        theme: 'room4',
        hintNumber: '2',
        hintContent: '저러콤'
    },
    {
        theme: 'room4',
        hintNumber: '3',
        hintContent: '이러콤'
    },
    {
        theme: 'room4',
        hintNumber: '4',
        hintContent: '이러콤'
    },
    {
        theme: 'room4',
        hintNumber: '5',
        hintContent: '이러콤'
    },
    {
        theme: 'room4',
        hintNumber: '6',
        hintContent: '이러콤'
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
        hintContent: 'LP판을 턴테이블 재생시키듯 위에 올리면 밑에 함이 열립니다.'
    },
    {
        theme: 'room5',
        hintNumber: '6',
        hintContent: '엽서를 우편함에 넣어주세요.'
    },
    {
        theme: 'room5',
        hintNumber: '7',
        hintContent: '그녀를 생각하며 쓴 시가 왼쪽 벽면에 있다. 시에서 노란 글씨를 찾아 오른쪽 벽면의 단어로 방향을 찾아주세요.[[ex]행복,사랑,즐거움,사랑 >>상상하_ _ _]'
    },
    {
        theme: 'room5',
        hintNumber: '8',
        hintContent: '그녀에게 별도 달도 따주려 한다는 얘기, 별자리 단서의 숫자 그리고 지붕의 달모양을 보고 함을 풀어주세요.[_ _ _ _ _]'
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
        hintContent: '지쳐서 이미 마음을 정리한 여자가 남긴 편지를 읽고 여자 방으로 가서 문의 글과 비교 후 다음 방으로 이동해주세요.[_ _ _ _ _]'
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
        hintContent: 'UV랜턴으로 문에 있는 MEMORY와 여자 방에 달력을 비춰 문을 열어주세요. 이때, #버튼도 눌러주세요.'
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
