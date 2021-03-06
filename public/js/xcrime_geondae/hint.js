window.hint = [
    // room1 : 미씽 다이얼
    // room2 : 청림 멘션
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

    ///////// 미씽 다이얼 /////////
    {
        theme: 'room1',
        hintNumber: '1',
        hintContent: '[포스트박스]왼쪽 사물함을 열어 택배 상자를 확인 후 태깅하세요. [0 + area 번호 + 2 + 주소 끝 번호]'
    },
    {
        theme: 'room1',
        hintNumber: '2',
        hintContent: '[음성녹음]을 태깅하여 범인의 연령대와 성별을 추정하여, 엑스키트에 답을 입력하세요.'
    },
    {
        theme: 'room1',
        hintNumber: '3',
        hintContent: '<img src=/image/missingDial-1.png class=hintImage><br><br> E, O, L, S, R 위치에 오는 열정과 자긍심의 알파벳을 LOSER 순서대로 재조합하여, LOSER 사물함에 답을 입력하세요.'
    },
    {
        theme: 'room1',
        hintNumber: '4',
        hintContent: '뒤에 있는 아나운서의 덕목표를 보고 [양심]에서 [정직]가는 방향을 보면 아래 방향입니다.<br><br>이와 동일한 방식으로 [의지, 용기, 자긍심]도 아나운서의 덕목표를 보고 방향을 키패드에 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '5',
        hintContent: '사진이 걸려 있는 액자 여러 개를 보실 수 있습니다.<br><br>그 중에서 4명이 있는 가족사진만 고른 후, 시간이 흐르는 순서대로 배열 해 주신 뒤, 뒤에 있는 [첫 번째 사물함]에 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '6',
        hintContent: '바느질꾼에 해당하는 성씨가 TAYLOR입니다. TAYLOR의 A 자리에 Jeff의 혈액형인 B를 대입해 주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '7',
        hintContent: '유치원 안내문을 태깅한 후, jamie의 하원시간 [14:10]과 Jaff의 하교시간 [14:00~14:35]을 대조해보세요.'
    },
    {
        theme: 'room1',
        hintNumber: '8',
        hintContent: '태깅한 후, cctv화면을 보고 Jaff가 Jamie를 유기한 시간을 확인해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '9',
        hintContent: '지금까지 획득한 4개의 카드를 화이트보드판에 알맞게 꽂아주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '10',
        hintContent: '영상시청 후 전화내용은 떨어진 클루와 동일한 내용입니다.'
    },
    {
        theme: 'room1',
        hintNumber: '11',
        hintContent: '1978년 트로피를 POST BOX SEND함에 넣어 보내주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '12',
        hintContent: '2번째 전화는 범인이 자신의 모습이 보이지 않게 전기차단기의 전원을 차단해 달라는 내용입니다. 그래서 관리실 안에 전자차단기 장치를 풀어주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '13',
        hintContent: 'Control장치 오른편에 있는 파일철을 보시면, Control1~4 에 색상이 나열된 것이 보입니다.<br>해당하는 색을 도면에 칠한다고 생각하고 가려보시면 디지털모양 숫자가 나옵니다.'
    },
    {
        theme: 'room1',
        hintNumber: '14',
        hintContent: '서재 안 큰 박스에서 찾은 손톱을 태깅한 후, Jamie의 실험결과와 동일한 혈액형의 번호를 찾아서 X-KIT안에 정답을 입력합니다.'
    },
    {
        theme: 'room1',
        hintNumber: '15',
        hintContent: '재 검출된 Anti D값을 보고 + 인지 - 인지 확인해준 후, 관리실 맨 밑 서랍에 Anti D 값을 대입해서 계산해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '16',
        hintContent: '장갑을 비주어 보면 [현미경 모양]이 있습니다. 태깅하신 후, 화면을 보시고 글자를 읽어 주시면 핏자국의 순서를 파악할 수 있습니다.<br>그리고 관리실 벽면에 있는 장갑들을 UV랜턴[파란불빛]으로 비춰 보고 핏자국 순서대로 손가락의 숫자를 보시고 정답을 입력해주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '17',
        hintContent: '리모컨을 눌러 커튼이 걷히면, do you remember THEDAY 가 있습니다. THEDAY는 순서를 의미합니다.<br>관리실안에 파일철을 보시고, T로 시작하는 파일의 번호부터 Y까지 찾아주세요.'
    },
    {
        theme: 'room1',
        hintNumber: '18',
        hintContent: 'Adam의 유서를 보시면 Lucas는 Jamie보다 1살 많습니다. 죽은 연도는 비디오테이프에 적혀 있습니다. 저소득주거지역은 액자를 보면 나와있습니다.'
    },
    {
        theme: 'room1',
        hintNumber: '19',
        hintContent: '미리 꽂아져 있는 양심을 기준으로 나머지 육각형을 꽂아주세요.<br>[획득한 사진 뒷면을 보시면 ‘양심’ 이라고 적혀 있는 사진 앞쪽을 보면 오른쪽 아래에 V표시가 있습니다.]'
    },


    ///////// 청림 맨션 /////////
    {
        theme: 'room2',
        hintNumber: '1',
        hintContent: '복도 우편함에서 “구청 주민행정국” 봉투 태깅 후, 수도 요금이 폭등한 날을 파악해서 입력하세요.<br> [ 연도 / 월 / 일 ]'
    },
    {
        theme: 'room2',
        hintNumber: '2',
        hintContent: '열쇠 위치는 모니터를 바라보는 방향 기준으로 왼쪽 위를 보시면 걸려있습니다.<br>(좀 떨어져서 보시면 보실 수 있습니다! 생각보다 위에 있습니다.)'
    },
    {
        theme: 'room2',
        hintNumber: '-',
        hintContent: '약재방 입장'
    },
    {
        theme: 'room2',
        hintNumber: '3',
        hintContent: '제조일지”를 참고해 벽에 붙어있는 “가루와 붕대” 냄새와 일치하는 항아리의 향의 답을 입력하세요. (지그재그 X)'
    },
    {
        theme: 'room2',
        hintNumber: '4',
        hintContent: '중복되는 약재 2종류를 찾으신 후, 하단을 보시면 [좌표(2,3),(5,1)] 이 한자로 써져 있습니다.<br>(2,3)은 약재함을 오른쪽으로 2칸, 위로 3칸을 올려서 열으라는 표시입니다.<br>해당하는 두 좌표를 열어주신 후 꽃 이름을 합쳐 두번째 서랍을 여시면 됩니다.<br>(기준이 되는 약재함의 좌표는 왼쪽 하단에 표시되어 있습니다.)'
    },
    {
        theme: 'room2',
        hintNumber: '5',
        hintContent: '뉴스기사를 태깅 후, 녹음기를 들어보면 [문밖에서만] 이라고 말 할때, 음파가 크게 흔들립니다. 그래서, 문밖에서만을 X-KIT 안에 입력해주시면 됩니다.'
    },
    {
        theme: 'room2',
        hintNumber: '6',
        hintContent: '거짓말을 하고 있는 사람은 [꽃집주인] 입니다. 꽃집주인의 지문(빨간색) 에 해당하는 서랍만 열어주세요.<br>(다른사물함이 조금이라도 열려있으면 [함정]이 발동됩니다. 다 꾹꾹 눌러서 닫아주세요.)'
    },
    {
        theme: 'room2',
        hintNumber: '-',
        hintContent: '시술방 입장'
    },
    {
        theme: 'room2',
        hintNumber: '7',
        hintContent: '자물쇠에 [1910 05] 라고 적혀있는게 기준점이 됩니다.<br>밑에 메모를 보시면 빨간색 밑줄친 부분이 1910년보다 크면 위, 작으면 아래, 파란 동그라미 친 부분이 05월 보다 크면 오른쪽,작으면 왼쪽 입력해주시면 됩니다.<br>연도와 월은 옆쪽 액자의 글을 보시고 확인 하시면 됩니다.'
    },
    {
        theme: 'room2',
        hintNumber: '8',
        hintContent: '“부항함”을 열어 태깅한 후, “혈액 성분 검사”의 중간값을 입력하세요.<br>(예시 : 1 ~ 5 의 중간값은 3)'
    },
    {
        theme: 'room2',
        hintNumber: '9',
        hintContent: '“측정일지”를 참고하여, 벽에 걸려있는 “4개의 약재 주머니”를 문양 순서대로 저울에 올리세요.<br>그리고 저울이 가르키는 방향을 부적함 “검정색 방향 자물쇠”에 입력하세요.'
    },
    {
        theme: 'room2',
        hintNumber: '10',
        hintContent: '“부적함 서랍”을 열어 천을 머리에 두르고 양 손을 밥그릇 위에 올린 후, 이마를 거울과 가까이 부착시키세요.<br>거울 힌트 확인 후, “한자 써져있는 사물함”에 답을 입력하세요.'
    },
    {
        theme: 'room2',
        hintNumber: '11',
        hintContent: '획득하신 카드 4장을 화이트보드판에 알맞게 꽂아주세요.<br>(1. 첫번째방 제단함  2. 세번째방 나무상자  3. 세번째방 첫번째 사물함 4. 세번째방 두번째 사물함)'
    },
    {
        theme: 'room2',
        hintNumber: '12',
        hintContent: '시체 앞쪽에 [주요 사인] 이 [푸른색으로 발견되는 신체 부작용] 이라고 써 있었습니다.<br>그래서 그것에 해당하는 [주사형(inject)을] 시체가 나온 방 3번째 사물함(꽃그림)에 입력해주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '13',
        hintContent: '“협죽사련화”를 태깅한 후, X-KIT에 나온 영상처럼 올려놔주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '-',
        hintContent: '부적방 입장'
    },
    {
        theme: 'room2',
        hintNumber: '14',
        hintContent: '열린 문을 들어가서, 정면에 보이는 족자를 태깅하세요.<br>(싸인 있는 곳).'
    },
    {
        theme: 'room2',
        hintNumber: '15',
        hintContent: '<img src=/image/chunglim-1.png class=hintImage><br><br>[대부]는 [류청즈]입니다. 위에 그림을 보시면, 2는 첫번째 자리에 8이 온다는 뜻, 1은 첫번째 자리에 6이 온다는 뜻입니다.<br>그래서 정답이 [682288]이 됩니다.'
    },
    {
        theme: 'room2',
        hintNumber: '16',
        hintContent: '획득하신 UV랜턴으로 액자를 비추신 후,<br>“영생 -> 합당 -> 조건 -> 재물” 순서대로 “단어위에 걸쳐있는 문양”을 파악한 후 답을 입력하세요.'
    },
    {
        theme: 'room2',
        hintNumber: '17',
        hintContent: '획득하신 3개의 [부적조각] 을 문양에 맞게 꽂아주신 후, 재물의 조건을 확인하세요.<br>(나머지 한개는 밥그릇에 손 얹었던 곳 밑에 서랍을 보시면 있습니다.)'
    },
    {
        theme: 'room2',
        hintNumber: '-',
        hintContent: '시술방'
    },
    {
        theme: 'room2',
        hintNumber: '18',
        hintContent: '재단함에 재물의 조건 답을 입력한 후, 안에있는 버튼을 눌러주세요.'
    },
    {
        theme: 'room2',
        hintNumber: '19',
        hintContent: '영상을 보시면 [제발] 이라는 글자가 강조되어 있습니다.<br>아직 안푼 사물함 [마지막부탁 사물함]에 [제발]을 영어로 바꿔서 입력해주세요.(PLEASE)'
    },
    {
        theme: 'room2',
        hintNumber: '20',
        hintContent: ' 획득한 액자를 “사물함에 붙어있는 사진의 위치”에 가져다 놓으세요.<br>(TIP : 지금 계신 곳에 있습니다!)'
    },
];
