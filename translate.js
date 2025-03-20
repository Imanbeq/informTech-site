const buttonRu = document.getElementById('ru');
const buttonEng = document.getElementById('eng');

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    solutions: 'Solutions',
    references: 'References',
    contact: 'Contact Us',
    call: 'Call Us',
    company: 'Company',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    submit: 'Submit',
    surname: 'Name Surname',
    hero: 'Your Reliable Solutions In Digital Security',
    aboutTitle: 'Who We Are?',
    aboutText:
      'As a successful provider of cutting-edge technologies and cutting-edge services, Salvor offers scalable solutions to any company, large or small. Our company offers smart and innovative services to our customers. Join our rapidly growing customer portfolio! Contact now for more information.',

    infoTitle:
      'We provide tailored solutions to meet your specific needs, assisting your business in achieving its goals.',

    solutionsTitle: 'Services',
    solutionsSubtitle: 'We elevate your business processes to the next level.',
    solutionStorageTitle: 'Storage Solutions',
    solutionStorageDescription:
      'Ensure business continuity and data security with scalable, tailored storage solutions. Our expert team optimizes data management to meet your needs effectively.',
    solutionStorageDescriptionLong: 'Ensure business continuity and data integrity by providing solutions for your data security and scalable storage needs. We offer you special solutions with our expert team to manage your data efficiently and create storage areas that suit your needs.',
    solutionCybersecurityTitle: 'Cybersecurity Consulting ',
    solutionCybersecurityDescription: `Let's ensure the security of your organization with expert personnel using current methodologies.`,
    solutionCybersecurityDescriptionLong: 'We offer customized cyber security solutions for businesses that are sensitive about data security and protection from attacks. We help you create a resistant infrastructure against data theft and cyber attacks by protecting your networks with advanced firewalls, intrusion detection systems and security software',
    solutionServerTitle: 'Server Solutions ',
    solutionServerDescription:
      'By offering customized server solutions to increase the performance and reliability of your critical business applications, determine the most suitable solutions for your needs with server options suitable for different workloads and process and manage your data securely',
    solutionCloudTitle: 'Cloud Security',
    solutionCloudDescription: `Let's facilitate the transition to prevalent cloud technologies by providing consultancy and managing services.`,
    solutionCloudDescriptionLong: 'By using cloud computing technologies, we facilitate access to infrastructure, software and applications that suit the needs of your business. Manage your workloads more efficiently and optimize your costs by accessing unlimited resources.',
    solutionNetworkTitle: 'Network Based Solutions',
    solutionNetworkDescription:
      'Manage your business processes effectively with reliable network infrastructure and fast connections. With wireless network installation, network security, network optimization and advanced monitoring and management systems, we constantly monitor the performance of your network and provide fast and effective solutions to problems',
    solutionBackupTitle: 'Backup Solutions',
    solutionBackupDescription:
      'Thanks to automatic backup processes, we reduce your workload and minimize the risk of data loss. We strengthen the data security of your business by providing cost-effective and reliable backup solutions to our customers. Together with our expert team, we create backup plans specific to your business, ensuring that your data is safe.',
    seeAll: 'See All',
    statTitle: 'We are very good with numbers!',
    statText1: 'Years of Experience',
    statText2: 'Complete Projects',
    statText3: 'Customer Satisfaction',
    referencesTitle: 'References',
    referencesText: 'Some of the customers we work with.',
    contactTitle: 'Contact',
    contactSubtitle:
      'For more information, please leave your message with your contact information.We will contact you as soon as possible.',
    contactUs: 'Contacts Us',
    contactAddress:
      'Anel İş Merkezi, Kat 11, Yamanevler Mahallesi, Site Yolu Caddesi, No:5/4 34768 Ümraniye / İSTANBUL / TÜRKİYE',
  },

  ru: {
    home: 'Главная',
    about: 'О нас',
    solutions: 'Услуги',
    references: 'Партнеры',
    contact: 'Контакты',
    call: 'Связаться',
    surname: 'Фамилия Имя',
    company: 'Компания',
    email: 'Эл. Почта',
    phone: 'Телефон',
    message: 'Сообщение',
    submit: 'Отправить',
    hero: 'Ваш надежный партнер в мире информационных технологий',
    aboutTitle: 'Кто мы',
    aboutText:
      'Как успешный поставщик передовых технологий и передовых услуг, Salvor предлагает масштабируемые решения для любой компании, большой или маленькой. Наша компания предлагает нашим клиентам интеллектуальные и инновационные услуги. Присоединяйтесь к нашему быстро растущему портфолио клиентов! Свяжитесь сейчас для получения дополнительной информации.',

    infoTitle:
      'Мы предоставляем индивидуальные решения для удовлетворения ваших конкретных потребностей, помогая вашему бизнесу в достижении своих целей.',

    solutionsTitle: 'Услуги',
    solutionsSubtitle: 'Мы выводим ваши бизнес-процессы на новый уровень.',
    solutionStorageTitle: 'Решения для хранения данных',
    solutionStorageDescription:
        'Обеспечьте защиту данных и непрерывность бизнеса с помощью наших масштабируемых решений.',
    solutionStorageDescriptionLong: 'Обеспечьте непрерывность бизнеса и целостность данных с помощью решений для обеспечения безопасности данных и масштабируемого хранения. Мы предлагаем индивидуальные решения с нашей командой экспертов, чтобы эффективно управлять вашими данными и создавать хранилища, соответствующие вашим потребностям.',
    solutionCybersecurityTitle: 'Консалтинг в области кибербезопасности',
    solutionCybersecurityDescription:
      'Мы обеспечим безопасность вашей организации с помощью опытных специалистов, использующих современные методологии.',
    solutionCybersecurityDescriptionLong: 'Мы предоставляем индивидуальные решения в области кибербезопасности для компаний, которые уделяют особое внимание защите данных и предотвращению атак. Защищая ваши сети с помощью современных межсетевых экранов, систем обнаружения вторжений и программного обеспечения для обеспечения безопасности, мы помогаем создать устойчивую инфраструктуру против кражи данных и кибератак.',
    solutionServerTitle: 'Серверные решения',
    solutionServerDescription:
      'Предоставляя индивидуальные серверные решения для повышения производительности и надежности ваших ключевых бизнес-приложений, мы поможем вам выбрать оптимальные решения с учетом различных типов рабочих нагрузок и обеспечим безопасную обработку и управление вашими данными.',
    solutionCloudTitle: 'Облачная безопасность',
    solutionCloudDescription:
      'Мы поможем облегчить переход на передовые облачные технологии, предоставляя консультационные и управленческие услуги.',
    solutionCloudDescriptionLong: 'Используя технологии облачных вычислений, мы облегчаем доступ к инфраструктуре, программному обеспечению и приложениям, соответствующим потребностям вашего бизнеса. Управляйте рабочими процессами более эффективно и оптимизируйте расходы, получая доступ к неограниченным ресурсам.',
    solutionNetworkTitle: 'Сетевые решения',
    solutionNetworkDescription:
      'Эффективно управляйте бизнес-процессами с помощью надежной сетевой инфраструктуры и быстрых соединений. Мы предлагаем установку беспроводных сетей, обеспечение безопасности сети, оптимизацию сети и современные системы мониторинга и управления, постоянно отслеживая производительность вашей сети и предоставляя быстрые и эффективные решения проблем.',
    solutionBackupTitle: 'Решения для резервного копирования',
    solutionBackupDescription:
      'Благодаря автоматическим процессам резервного копирования мы уменьшаем вашу нагрузку и минимизируем риск потери данных. Мы укрепляем безопасность данных вашего бизнеса, предлагая экономичные и надежные решения для резервного копирования нашим клиентам. Вместе с нашей командой экспертов мы разрабатываем планы резервного копирования, адаптированные под ваш бизнес, гарантируя безопасность ваших данных.',
    seeAll: 'Подробнее',
    statTitle: 'Мы отлично разбираемся в цифрах!',
    statText1: 'Годы опыта',
    statText2: 'Завершённые проекты',
    statText3: 'Удовлетворённость клиентов',
    referencesTitle: 'Клиенты',
    referencesText: 'Некоторые из клиентов, с которыми мы работаем.',
    contactTitle: 'Контакты',
    contactSubtitle:
      'Для получения дополнительной информации, пожалуйста, оставьте ваше сообщение с контактной информацией.Мы свяжемся с вами в ближайшее время.',
    contactUs: 'Свяжитесь с нами',
    contactAddress:
      'Anel İş Merkezi, Kat 11, Yamanevler Mahallesi, Site Yolu Caddesi, No:5/4 34768 Ümraniye / İSTANBUL / TÜRKİYE',
  },
};

// Функция переключения языка
function switchLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach((el) => {
    const key = el.getAttribute('data-key');
    if (key === 'hero') {
      el.innerHTML = translations[lang][key].replace(
          'Your Reliable Solutions In Digital Security',
          'Your Reliable Solutions</br>In Digital Security'
      );
    } else if (key === 'solutionsSubtitle') {
      el.innerHTML = translations[lang][key].replace(
          'We elevate your business processes to the next level.',
          'We elevate your business processes </br> to the next level.'
      );
    } else if (key === 'contactSubtitle') {
      el.innerHTML = translations[lang][key].replace(
          'For more information, please leave your message with your contact information.We will contact you as soon as possible.',
          'For more information, please leave your message with your contact </br> information.We will contact you as soon as possible.'
      );
    } else {
      el.textContent = translations[lang][key];
    }
  });
}

// Функция переключения кнопок и языка
function toggleButtonsAndLanguage() {
  if (buttonRu.style.display === 'block') {
    buttonRu.style.display = 'none';
    buttonEng.style.display = 'block';
    localStorage.setItem('language', 'ru');  // Сохраняем выбранный язык в localStorage
    switchLanguage('ru');
  } else {
    buttonRu.style.display = 'block';
    buttonEng.style.display = 'none';
    localStorage.setItem('language', 'en');  // Сохраняем выбранный язык в localStorage
    switchLanguage('en');
  }
}

// Функция, которая загружает сохранённый язык при загрузке страницы
window.addEventListener('load', () => {
  const savedLang = localStorage.getItem('language');  // Читаем сохранённый язык из localStorage
  if (savedLang) {
    switchLanguage(savedLang);  // Если язык есть в localStorage, переключаем на него
    if (savedLang === 'ru') {
      buttonRu.style.display = 'none';
      buttonEng.style.display = 'block';
    } else {
      buttonRu.style.display = 'block';
      buttonEng.style.display = 'none';
    }
  } else {
    // Если язык не был сохранён, по умолчанию ставим английский
    localStorage.setItem('language', 'en');
    switchLanguage('en');
    buttonRu.style.display = 'block';
    buttonEng.style.display = 'none';
  }
});

buttonRu.addEventListener('click', toggleButtonsAndLanguage);
buttonEng.addEventListener('click', toggleButtonsAndLanguage);

