const { generateRandomName } = require('./randomNames')

let name = [
    'Амврос',
    'Аввакум',
    'Авдей',
    'Евдоким',
    'Евдокия',
    'Аверк',
    'Авраам',
    'Амврос',
    'Агап',
    'Агафангел',
    'Агапит',
    'Агап',
    'Агафон',
    'Агап',
    'Агафон',
    'Агафоник',
    'Агафья',
    'Аггей',
    'Агрипин',
    'Адам',
    'Акепсим',
    'Акил',
    'Иаким',
    'Иакинф',
    'Ксения',
    'Авксент',
    'Александр',
    'Алексей',
    'Аристарх',
    'Елефер',
    'Амос',
    'Анан',
    'Онуфр',
    'Андрей',
    'Адриан',
    'Андроник',
    'Андрей',
    'Аник',
    'Никандр',
    'Онисим',
    'Аник',
    'Акиндин',
    'Аня',
    'Онуфр',
    'Аникей',
    'Антип',
    'Антон',
    'Евтроп',
    'Амфилох',
    'Онисифор',
    'Артур',
    'Артем',
    'Артур',
    'Артем',
    'Архип',
    'Ясон',
    'Афанас',
    'Ефимия',
    'Афанас',
    'Богдан',
    'Борис',
    'Аверк',
    'Вавил',
    'Иван',
    'Варлаам',
    'Варфоломей',
    'Васил',
    'Василиск',
    'Васил',
    'Вассиан',
    'Варфоломей',
    'Венедикт',
    'Венедикт',
    'Вукол',
    'Влас',
    'Владимир',
    'Варфоломей',
    'Гавриил',
    'Галактион',
    'Галин',
    'Галактион',
    'Ан',
    'Гавриил',
    'Герасим',
    'Горги',
    'Герасим',
    'Гордей',
    'Григор',
    'Агрипин',
    'Григор',
    'Гур',
    'Давид',
    'Демьян',
    'Даниил',
    'Дарья',
    'Девятый',
    'Демент',
    'Демид',
    'Демент',
    'Денис',
    'Демид',
    'Дмитр',
    'Добрыня',
    'Домн',
    'Дорофей',
    'Евдокия',
    'Евдоким',
    'Евлас',
    'Евсев',
    'Евстигней',
    'Евсев',
    'Евтих',
    'Евтих',
    'Ефим',
    'Иаким',
    'Елисей',
    'Елизар',
    'Елисей',
    'Елизар',
    'Луп',
    'Ефим',
    'Емельян',
    'Епимах',
    'Епифан',
    'Ефросиния',
    'Еремей',
    'Ермак',
    'Ермак',
    'Ермолай',
    'Ерофей',
    'Евстаф',
    'Ефим',
    'Ефрем',
    'Евтих',
    'Захар',
    'Зинов',
    'Изот',
    'Ясон',
    'Иван',
    'Игнат',
    'Иов',
    'Иуд',
    'Илия',
    'Илья',
    'Илья',
    'Ипат',
    'Савел',
    'Исаия',
    'Исаак',
    'Исаак',
    'Иуд',
    'Яков',
    'Каллиник',
    'Никанор',
    'Капитолин',
    'Карп',
    'Екатерин',
    'Киприан',
    'Кирилл',
    'Климент',
    'Кондрат',
    'Кузьм',
    'Конон',
    'Кондрат',
    'Конон',
    'Корнил',
    'Корнил',
    'Кузьм',
    'Константин',
    'Кубас',
    'Кузьм',
    'Кузьм',
    'Кипреан',
    'Кипреан',
    'Кузьм',
    'Лавр',
    'Лазарь',
    'Иларион',
    'Иларион',
    'Лев',
    'Леонт',
    'Алексей',
    'Никандр',
    'Нифонт',
    'Лонгин',
    'Лонгин',
    'Лук',
    'Гликерия',
    'Лукьян',
    'Луп',
    'Лук',
    'Мавр',
    'Макар',
    'Максим',
    'Макрин',
    'Максим',
    'Мелания',
    'Малах',
    'Мамант',
    'Мануил',
    'Мария',
    'Марк',
    'Мартиниан',
    'Мартин',
    'Мартиниан',
    'Мартин',
    'Марф',
    'Марк',
    'Мария',
    'Матвей',
    'Матрон',
    'Матвей',
    'Мелания',
    'Мелет',
    'Меркур',
    'Никит',
    'Никифор',
    'Михаил',
    'Николай',
    'Мин',
    'Мирон',
    'Дмитр',
    'Митрофан',
    'Дмитр',
    'Михаил',
    'Михей',
    'Михаил',
    'Максим',
    'Мок',
    'Макар',
    'Мокей',
    'Малах',
    'Мануил',
    'Моисей',
    'Мокей',
    'Назар',
    'Анастасия',
    'Наум',
    'Нестор',
    'Евстаф',
    'Нестор',
    'Мефод',
    'Никит',
    'Никифор',
    'Никон',
    'Николай',
    'Нифонт',
    'Евстаф',
    'Аввакум',
    'Авраам',
    'Амврос',
    'Евдоким',
    'Авдей',
    'Евдоким',
    'Авдей',
    'Аверк',
    'Агапит',
    'Агап',
    'Агафон',
    'Аггей',
    'Агрипин',
    'Авксент',
    'Ксения',
    'Акилин',
    'Вукол',
    'Акил',
    'Алексей',
    'Олимп',
    'Елефер',
    'Ефим',
    'Емельян',
    'Амос',
    'Анан',
    'Онуфр',
    'Андрей',
    'Андроник',
    'Андрей',
    'Аник',
    'Онисим',
    'Акиндин',
    'Онисифор',
    'Онуфр',
    'Антип',
    'Антон',
    'Евтроп',
    'Онуфр',
    'Онисифор',
    'Ареф',
    'Ирин',
    'Артем',
    'Иосиф',
    'Евстаф',
    'Остап',
    'Иосиф',
    'Афонас',
    'Ефрем',
    'Павел',
    'Памфил',
    'Панкрат',
    'Пантелеимон',
    'Памфил',
    'Парамон',
    'Прасковья',
    'Парфен',
    'Патрик',
    'Пахом',
    'Павел',
    'Пелаг',
    'Первый',
    'Порфир',
    'Пётр',
    'Пимен',
    'Полиевкт',
    'Поликарп',
    'Полиевкт',
    'Помп',
    'Потап',
    'Прокоп',
    'Прохор',
    'Протас',
    'Прохор',
    'Пятый',
    'Родион',
    'Роман',
    'Родион',
    'Савв',
    'Севастьян',
    'Савел',
    'Савин',
    'Савв',
    'Севастьян',
    'Садок',
    'Самуил',
    'Самсон',
    'Самуил',
    'Софрон',
    'Севастьян',
    'Селиван',
    'Сильвестр',
    'Селиван',
    'Селиван',
    'Семён',
    'Сергей',
    'Исидор',
    'Сил',
    'Симон',
    'Исидор',
    'Созонт',
    'Софон',
    'Софрон',
    'Софья',
    'Спиридон',
    'Остап',
    'Стах',
    'Степан',
    'Степанид',
    'Сисой',
    'Тарас',
    'Татьян',
    'Терент',
    'Тимофей',
    'Тит',
    'Тихон',
    'Терент',
    'Терент',
    'Трифон',
    'Трофим',
    'Увар',
    'Увар',
    'Юлиан',
    'Юстин',
    'Фадей',
    'Фалалей',
    'Ферапонт',
    'Фот',
    'Фёдор',
    'Феодос',
    'Федот',
    'Феодосия',
    'Феофилакт',
    'Ферапонт',
    'Фотиния',
    'Фёдор',
    'Феофил',
    'Филимон',
    'Филип',
    'Филимон',
    'Филл',
    'Филл',
    'Фирс',
    'Фок',
    'Владимир',
    'Фом',
    'Фот',
    'Феофан',
    'Фок',
    'Флор',
    'Харитон',
    'Харламп',
    'Харитон',
    'Шестой',
    'Иван',
    'Игнат',
    'Исаак',
    'Иуд',
    'Юр',
    'Ефим',
    'Иоаким',
    'Яков',
    'Герасим',
    'Ерофей',
]

console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
console.log('----------------------------------------------------------------')
console.log(generateRandomName(name, ['ь', 'ъ', 'ы', 'й']))
