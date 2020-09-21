const users = [
  // Please add in alphabetical order of title.
  {
    title: 'BERT as a Service',
    description:
      '구글에서 개발한 자연어처리(NLP) 모델 BERT를 sentence encoder로 사용하여, 단 2줄의 코드만으로 input 문장을 고정된 길이의 벡터값으로 변환해줍니다.',
    preview: require('./showcase/bert.png'),
    website: 'https://ainize.ai/gkswjdzz/bert-as-service',
    source: 'https://github.com/gkswjdzz/Bert-as-service',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB', 'API', 'AI/ML'],
  },
  {
    title: 'KoNLPy-gRPC',
    description:
      'KoNLPy(코엔엘파이)는 한국어 정보처리를 위한 파이썬 패키지입니다. 한국어 토큰화, 형태소 분석 등 다양한 곳에 자유롭게 이용해보세요.',
    preview: require('./showcase/konlpy.png'),
    website: 'https://ainize.ai/minhoryang/KoNLPy-gRPC',
    source: 'https://github.com/minhoryang/KoNLPy-gRPC',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB', 'API', 'AI/ML'],
  },
  {
    title: 'StarGAN-V2',
    description:
      'Clova AI의 StarGAN-v2입니다. 사진 한 장만 넣으면 똑똑한 GAN 모델과 함께 머리색, 피부, 성별까지 다양한 스타일로 변신!',
    preview: require('./showcase/stargan.png'),
    website: 'https://ainize.ai/psi1104/stargan-v2',
    source: 'https://github.com/psi1104/stargan-v2',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB', 'API', 'AI/ML'],
  },
  {
    title: 'DeOldify',
    description:
      '인공지능을 이용해 흑백 사진을 컬러 사진로 변환해주는 프로젝트입니다.',
    preview: require('./showcase/deoldify.png'),
    website: 'https://ainize.ai/kmswlee/DeOldify',
    source: 'https://github.com/kmswlee/DeOldify',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB', 'API', 'AI/ML'],
  },
  {
    title: 'HiDT',
    description:
      '내가 낮에 갔던 관광지는 아침이나 새벽에는 어떤 모습일까? 풍경 사진 한 장만 넣으면 여러 시간대로 변환해주는 HiDT!',
    preview: require('./showcase/hidt.png'),
    website: 'https://ainize.ai/psi1104/HiDT?branch=master',
    source: 'https://github.com/psi1104/HiDT',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB', 'API', 'AI/ML'],
  },
  {
    title: '랜선 사진관',
    description:
      '두 ML 프로젝트(DeOldify, HiDT)의 API들을 합쳐 "랜선사진관"이라는 하나의 서비스로 만들다!',
    preview: require('./showcase/photobooth.png'),
    website: 'https://puter.kim/studiolan',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB', 'NO CODE'],
  },
  {
    title: 'Cartoonize',
    description:
      'Cartoonize your world! 얼굴, 풍경 사진/영상 무엇이든 만화처럼 바꿔주는 프로젝트입니다.',
    preview: require('./showcase/cartoonize.png'),
    website: 'https://ainize.ai/psi1104/White-box-Cartoonization?branch=master',
    source: 'https://github.com/psi1104/White-box-Cartoonization',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB', 'API', 'AI/ML'],
  },
  {
    title: 'Stanford NLP',
    description:
      '다양한 언어들을 지원하는 Python 자연어처리(NLP) 라이브러리입니다.',
    preview: require('./showcase/stanza.png'),
    website: 'https://ainize.ai/gkswjdzz/ainized-stanfordnlp',
    source: 'https://github.com/gkswjdzz/ainized-stanfordnlp',
    fbOpenSource: false,
    pinned: false,
    tags: ['API', 'AI/ML'],
  },
  {
    title: 'PIFuHD',
    description:
      '3D 스캐너가 따로 필요 없다! 사진 속 인물을 3D로 만들어주는 프로젝트입니다.',
    preview: require('./showcase/pifuhd.png'),
    website: 'https://master-pifuhd-psi1104.endpoint.ainize.ai',
    source: 'https://github.com/psi1104/pifuhd',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB', 'API', 'AI/ML'],
  },
  {
    title: 'Question Generation',
    description:
      '아래 문장을 넣으면 AI는 어떤 질문과 답변을 만들어낼까요? "Pythonista 여러분, 올해 PyCon은 online으로 진행됩니다."',
    preview: require('./showcase/qageneration.png'),
    website: 'https://ainize.ai/Wook-2/question_generation?branch=master',
    source: 'https://github.com/Wook-2/question_generation',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB', 'API', 'AI/ML'],
  },
  {
    title: 'Easy OCR',
    description:
      '사진 안의 글자를 텍스트로 바로 추출, 변환해주는 Easy OCR의 문자 인식 기능을 지금 바로 사용해보세요!',
    preview: require('./showcase/easyocr.png'),
    website: 'https://ainize.ai/Wook-2/EasyOCR?branch=master',
    source: 'https://github.com/Wook-2/EasyOCR',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB', 'API', 'AI/ML'],
  },
  {
    title: 'Detectron2',
    description:
      '사진을 넣으면, 사진 안에 어떤 물체가 있는지 알려주는facebook이 만든 object detection 라이브러리입니다.',
    preview: require('./showcase/detectron.png'),
    website: 'https://ainize.ai/gkswjdzz/ainized-detectron2',
    source: 'https://github.com/gkswjdzz/ainized-detectron2',
    fbOpenSource: false,
    pinned: false,
    tags: ['API', 'AI/ML'],
  },
  {
    title: 'COVID-19 Board',
    description:
      'COVID-19 대시보드를 통해 국내외 코로나 발생 현황을 한눈에 파악해보세요.',
    preview: require('./showcase/covidboard.png'),
    website: 'https://ainize.ai/soaple/corona-board',
    source: 'https://github.com/soaple/corona-board',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB'],
  },
  {
    title: 'U-GAT-IT',
    description:
      '사람 얼굴을 애니메이션 캐릭터로 실시간 변환해주는 AI입니다. 단 한 번의 클릭으로 Anime 2D 스타일로 짠! 하고 변신!',
    preview: require('./showcase/ugatit.png'),
    website: 'https://ainize.ai/kmswlee/UGATIT',
    source: 'https://github.com/kmswlee/UGATIT',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB', 'API', 'AI/ML'],
  },
  {
    title: 'My QR',
    description:
      '나만의 특별한 QR 코드를 만들고 사용해보세요. 다양한 색상, 이미지, 움직이는 gif파일까지 모두 가능!',
    preview: require('./showcase/myqr.png'),
    website: 'https://ainize.ai/woomurf/qrcode',
    source: 'https://github.com/woomurf/qrcode',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB', 'API'],
  },
  {
    title: 'Nyam Nyam',
    description:
      '아직도 뭐 먹을지 고민하세요? 메뉴 결정부터 가까운 식당 추천까지 냠냠이 다- 정해드릴게요. 😋',
    preview: require('./showcase/nyamnyam.png'),
    website: 'https://ainize.ai/shyun-comcom/lunch-decision-maker',
    source: 'https://github.com/shyun-comcom/lunch-decision-maker',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB'],
  },
  {
    title: 'Crowdy',
    description:
      '잠깐! 코로나19(COVID-19) 감염 위험을 Crowdy와 함께 줄여보세요. 나가기 전 마트, 병원, 약국, 식당, 카페 등 혼잡도를 실시간으로 확인할 수 있습니다.',
    preview: require('./showcase/crowdy.png'),
    website: 'https://ainize.ai/ainize-team2/crowdy',
    source: 'https://github.com/ainize-team2/crowdy',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB'],
  },
  {
    title: 'Python Level Challenge',
    description:
      'Pythonista!! 몇 가지 퀴즈를 통해 나의 파이썬 레벨을 알아보세요! 참고로 저는 문어가.. 흠흠 🐙',
    preview: require('./showcase/plc.png'),
    website: 'https://ainize.ai/ainize-team1/python-level-challenge',
    source: 'https://github.com/ainize-team1/python-level-challenge',
    fbOpenSource: false,
    pinned: false,
    tags: ['WEB'],
  },
];

export default users;
