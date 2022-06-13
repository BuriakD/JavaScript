let user1 = {
   lastName: "Мельник",
   name: "Августа",
   bD: {
     day: "03",
     month: "12",
     year: "2000",
   },
   sex: "Жінка",
   hobby: "Футбол",
   activity: "Студент",
};

let user2 = {
   lastName: "Азімов",
   name: "Айзек",
   bD: {
     day: "02",
     month: "02",
     year: "1920",
   },
   sex: "чоловік",
   hobby: "Езотерика",
   activity: "Письменник",
};

let user3 = {
   lastName: "Савчук",
   name: "Володимир",
   bD: {
     day: "10",
     month: "09",
     year: "1999",
   },
   sex: "Чоловік",
   hobby: "Футбол",
   activity: "Робототехнік",
};

let user4 = Object.assign ({}, user3);
user4.lastName = "Пономаренко";
user4.name = "Владислава";
user4.bD.day = "13";
user4.bD.month = "06";
user4.bD.year = "2002";
user4.sex = "Жінка";
user4.hobby = "Езотерика";
user4.activity = "Студент";

let user5 = {
  lastName: " ", 
  name: " ", 
  bD: {
    day: " ", 
    month: " ", 
    year: " ", 
  },
    sex: " ", 
    hobby: " ", 
    activity: " "
};

// 5 object
user5.lastName = prompt("Введіть прізвище");
user5.name = prompt("Введіть ім’я");
user5.bD.day = +prompt("Введіть день народження");
user5.bD.month = +prompt("Введіть місяць народження");
user5.bD.year = +prompt("Введіть рік народження");
user5.sex = prompt("Введіть cтать (чоловік/жінка)");
user5.hobby = prompt("Введіть захоплення");
user5.activity = prompt("Введіть зайнятість");

let date = new Date();

let currentYear = date.getFullYear();

let age = currentYear - user5.bD.year;

function sayHello() {
    if ((user5.sex === 'Чоловік' || user5.sex === 'чоловік') && (age > 18)) alert(`Доброго дня, пан ${user5.lastName}`);
    else if ((user5.sex === 'Жінка' || user5.sex === 'жінка') && (age > 18)) alert(`Доброго дня, пані ${user5.lastName}`);
   else if(age < 18) alert(`Привіт ${user5.name}`);
  }

  sayHello();



let arrayUser1 = [], arrayUser2 = [], arrayUser3 = [], arrayUser4 = [], arrayUser5 = [];

function createArray(obj) {
arrayUser = Object.values(obj);
arrayBd = Object.values(obj.bD);
arrayUser.push(arrayBd.join('.'));
arrayUser.splice(2, 1);
arrayUser.splice(2, 1);
  return arrayUser;
}
arrayUser1 = createArray(user1);
arrayUser2 = createArray(user2);
arrayUser3 = createArray(user3);
arrayUser4 = createArray(user4);
console.log(arrayUser1);
// 5 object
arrayUser5 = createArray(user5);

let general = [];

  for (let i = 0; i < 5; i++) {
    general[0] = arrayUser1;
    general[1] = arrayUser2;
    general[2] = arrayUser3;
    general[3] = arrayUser4;
    general[4] = arrayUser5;
  }
sortedArray = general.sort();

let mainChoise = 0;  
  while(mainChoise == 0) {
  mainChoise = +prompt(`
  Введіть 1 для входу у конвертор валют
  Введіть 2 для входу у гороскоп
  Введіть 3 для отримання інформації про користувачів
  Введіть 4 для виходу з програми`);
  
  //Конвертор валют
  if (mainChoise == 1) {
    let rez1,rez2; 
    let n = 'так';
      while (n==='Так' || n==='так') { 
      
      let val= prompt('Яку валюти ви бажаєте конвертувати? Введіть UA - гривні, AUD - австралійський  долар,  BYN - білоруський рубль ‎'); 
      let grosh=prompt('Введіть кількість:'); 
        if(val=='UA'){ 
          rez1 =grosh/19.6;  
          rez2=grosh*0.094; 
          alert(`Сума в білоруський рубль:${rez1} Сума в австралійских доларах:${rez2} `); 
        } 
        if(val==='BYN'){ 
          rez1 = grosh*10.65;  
          rez2 = grosh*0.55; 
          alert(`Сума в гривнях :${rez1} Сума австралійских доларах:${rez2} `); 
        } 
        if(val==='AUD'){ 
          rez1 =grosh*19.51;  
          rez2=grosh*1.83; 
          alert(`Сума в Гривнях :${rez1} Сума в білоруських рублях:${rez2} `); 
        } 

      n=prompt('Виконати ще одну операцію?(Так чи  Ні)'); 

        // answer = prompt('Бажаєте вийти? Введіть Y');
      }


      mainChoise = 0;
  }
  



  if (mainChoise == 2) {

  let name = prompt("Введіть ваше ім’я");
  let lastName = prompt("Введіть ваше Прізвище");
  let sex = prompt("Введіть вашу стать Ч/Ж");
   let dataYear = +prompt("Введіть ваш рік народження");
   let dataMonth = +prompt("Введіть ваш місяць народження");
   let dataDay = +prompt("Введіть ваш день народження");
   let age = 2021 - dataYear;

function daysInMonth() {
  return new Date(dataYear, dataMonth, 0).getDate();
}

  function sayHello() {
    if ((sex === 'Ч' || sex === 'ч') && (age > 18)) alert(`Доброго дня, пан ${lastName}`);
    else if ((sex === 'Ж' || sex === 'ж') && (age > 18)) alert(`Доброго дня, пані ${lastName}`);
   else if(age < 18) alert(`Привіт ${name}`);
  }

  sayHello();
  
  
function checkData () {
  if (dataYear < 1900) { 
    alert('Рік не може бути меншим 1900 р.');
    dataYear = prompt("Введіть ваш рік народження");
    return checkData();
  }
  if ((dataMonth >= 1) && (dataMonth <= 12)) {
  }
  else {
    alert('Введіть місяць у межах від 1 до 12');
    dataMonth = +prompt("Введіть ваш місяць народження");
    return checkData();
  }
  if ((dataDay >= 1) && (dataDay <= daysInMonth())) {

  }
  else {
    alert('Стільки днів у місяць не буває');
    dataDay = +prompt("Введіть ваш день народження");
    return checkData();
    }
}
checkData();
 

 function enterPass() {
  let pass = prompt("З метою забезпечення безпеки ваших даних, придумайте та введіть пароль");
  let passConfirm = prompt("Введіть пароль ще раз");
  while (!(pass === passConfirm)) {
   passConfirm = prompt("Введіть пароль ще раз");
  }
 }
enterPass();

  let answer = 'asfLasKs';
  while(answer != 'Y')
  {



      //Kozerog
  if(((dataDay >= 22 && dataDay <= daysInMonth()) && (dataMonth === 12)) || ((dataDay <= 20) && (dataMonth === 1))) {
    alert('«Хто не ризикує, той шампанського не смакує!» — це гасло краще за інші характеризуватиме життя Козерогів. І справді, у 2021-му нагода ризикнути випаде багатьом представникам знака. Спокуси й зміни підстерігатимуть передусім в особистому житті. Бурхливий вир пристрасті може закрутити як одинаків, що давно мріяли про романтичні стосунки, так і тих, у кого чималий сімейний стаж.');
  }

  //Vodolii
   if(((dataDay >= 21 && dataDay <= daysInMonth()) && (dataMonth === 1)) || ((dataDay <= 24) && (dataMonth === 2))) {
    alert('Фортуна в новому році на боці Водоліїв: настає вдалий період для всіх представників знака, впродовж якого будуть започатковані цікаві й значущі проєкти. Ситуації розгортатимуться у найдивовижніший спосіб, а випадкові зустрічі та знайомства виявляться зовсім не випадковими — вони розділять життя Водоліїв на «до» і «після».');
  }
  //Ryby
  if(((dataDay >= 21 && dataDay <= daysInMonth()) && (dataMonth === 2)) || ((dataDay <= 20) && (dataMonth === 3))) {
    alert('Риби у 2021 році відкриють для себе сфери діяльності, які раніше чомусь ігнорували. Через це коло спілкування може дуже змінитися. З кимось зі старих приятелів стане просто нудно, зате нові знайомі притягуватимуть, немов магнітом. Представники знака відчують це вже наприкінці зими, коли виникнуть нові стосунки — романтичні, але не тільки: у багатьох Риб у цей час з’являться нові клієнти, бізнес-партнери, колеги або зміниться керівництво.');
  }
  //Oven
  if(((dataDay >= 21 && dataDay <= daysInMonth()) && (dataMonth === 3)) || ((dataDay <= 20) && (dataMonth === 4))) {
    alert('Цей рік може повернути життя Овнів на 180 градусів, але розкручувати маховик змін у бік покращення доведеться самостійно. Вплив процесів, започаткованих у січні-лютому, відчуватиметься впродовж щонайменше наступних двох років, а отже настає сприятливий період для старту довгострокових проєктів. Поліпшення фінансового становища представники знаку відчують уже в середині весни, але за тієї ж умови — готовності відповідати за свої рішення й дії.');
  }
  //Telec
  if(((dataDay >= 21 && dataDay <= daysInMonth()) && (dataMonth === 4)) || ((dataDay <= 20) && (dataMonth === 5))) {
    alert('Рік Бика стане для багатьох представників цього знака важливим і значущим. Сумлінне виконання взятих на себе зобов’язань, яке так вирізняє дисциплінованих, стриманих і пунктуальних Тельців, обов’язково приведе до успіху.');
  }
  //Bliznyata
  if(((dataDay >= 21 && dataDay <= daysInMonth()) && (dataMonth === 5)) || ((dataDay <= 21) && (dataMonth === 6))) {
    alert('Результати зусиль, докладених в останні кілька місяців 2020-го, стануть очевидними вже в січні-лютому. Деяким представникам знака вони, щоправда, можуть видатися незначними. Зірки радять зберігати спокій: зростання й розвиток будуть поетапними, форсувати подій не варто — мине місяць-другий, і масштаби успіху вразять як самих Близнят, так і їхнє оточення. Похвала від керівництва стане у 2021-му звичною справою. Та й загалом рік потішить приємними подіями, цікавими подорожами, сюрпризами від шанувальників і митями суцільної втіхи.');
  }

  //Rak
  if(((dataDay >= 22 && dataDay <= daysInMonth()) && (dataMonth === 6)) || ((dataDay <= 22) && (dataMonth === 7))) {
    alert('Представники цього знака зітхнуть з полегшенням: труднощі та проблеми 2020-го минули, а в найближчій перспективі зірки обіцяють блискучі можливості в усіх сферах життя. Більшість Раків охоче дбатиме про особистісний розвиток і самовдосконалення на курсах і тренінгах, а найсміливіші наважаться опанувати нову професію і як наслідок — втілити давні плани.');
  }

  //Lev
  if(((dataDay >= 23 && dataDay <= daysInMonth()) && (dataMonth === 7)) || ((dataDay <= 23) && (dataMonth === 8))) {
    alert('2021-й обіцяє Левам успіхи в різних сферах життя, але й потребуватиме сумлінної праці натомість. Тим, хто працює в бізнес-проєктах, на початку року варто запастися терпінням, зосередитися на роботі й утриматися від емоційних оцінок того, що відбувається навколо. У сухому залишку результати такої аскези виправдають докладені зусилля й перевершать очікування. А ось у стосунках з рідними й коханими Левам емоції знадобляться: ніжність, турбота і любов, віддані близьким, повернуться сторицею.');
  }

  //Diva
  if(((dataDay >= 24 && dataDay <= daysInMonth()) && (dataMonth === 8)) || ((dataDay <= 23) && (dataMonth === 9))) {
    alert('Більшості Дів 2021-й обіцяє спокій і передбачуваність — порівнюючи з представниками інших знаків стихії Землі. Зумівши підлаштуватися під витівки минулого року, Діви й у цьому почуватимуться невразливими, і так воно й буде насправді. Хоч які зміни пропонуватиме зовнішній світ, Діви сприйматимуть їх без паніки й зайвих емоцій. Ба більше, навіть найближчим людям не вдасться розхитати їхнього внутрішнього спокою.');
  }

  //Terezu
  if(((dataDay >= 24 && dataDay <= daysInMonth()) && (dataMonth === 9)) || ((dataDay <= 23) && (dataMonth === 10))) {
    alert('Щасливчики 2021 року достеменно Терези. Вплив гармонійних планет дасть можливість вже на початку весни отримати схвалення в соціумі, а вдалий збіг обставин дасть змогу зміцнити свої позиції, статус і експертність. Все це відіб’ється і на фінансовій сфері — авжеж зі знаком плюс. Зірки рекомендують звертати увагу на найменшу щасливу нагоду — кожна з них може стати ключем до ще більшого добробуту.');
  }

  //Scorpion
  if(((dataDay >= 24 && dataDay <= daysInMonth()) && (dataMonth === 10)) || ((dataDay <= 22) && (dataMonth === 11))) {
    alert('Рік Білого Бика для Скорпіонів — це рік уповільнення, впорядкування, розв’язання сімейних проблем і питань з нерухомістю. Дехто зможе успішно продати чи обміняти наявну житлову площу, а дехто придбає довгоочікуваний власний будинок або квартиру.');
  }

  //Strelec'
  if(((dataDay >= 23 && dataDay <= daysInMonth()) && (dataMonth === 11)) || ((dataDay <= 21) && (dataMonth === 12))) {
    alert('Стрільці пожинатимуть те, що сіяли останні кілька років. Якими далекоглядними були ухвалені рішення, якими розумними — зроблені кроки, 2021-й покаже повною мірою. Втім, з’явиться і можливість внести корективи в глобальну стратегію — у разі невдоволення результатами. Зірки радять проаналізувати досягнуте вже в січні-лютому й тоді ж провести всі важливі зустрічі й перемовини, щоб скорегувати свої плани. Це стосується не лише бізнесу — в особистому житті Стрільці, що, наприклад, зрештою наважаться поступитися частиною своєї свободи на користь надійних відносин, також виграють.');
  }

  mainChoise = 0;
  answer = prompt('Бажаєте вийти? Введіть Y');
}

}
  //Інфа про користувачів
  if (mainChoise == 3) { 
      let choise = 0;
      while (choise == 0)  {
          choise = +prompt(`
          Введіть 1 щоб отримати інформацію про всіх користувачів
          Введіть 2 для отримання статистики середнього віку 
          користувачів
          Введіть 3 для пошуку найпопулярнішого хобі
          Введіть 4 для переходу на рівень вище`);
          if (choise == 1) {
          alert(`
          ${sortedArray[0][0]} ${sortedArray[0][1]}, ${sortedArray[0][4]} р.н. Хоббі: ${sortedArray[0][2].toLowerCase()},
          Зайнятість: ${sortedArray[0][3].toLowerCase()};

          ${sortedArray[1][0]} ${sortedArray[1][1]}, ${sortedArray[1][4]} р.н. Хоббі: ${sortedArray[1][2].toLowerCase()}, 
          Зайнятість: ${sortedArray[1][3].toLowerCase()}
          
          ${sortedArray[2][0]} ${sortedArray[2][1]}, ${sortedArray[2][4]} р.н. Хоббі: ${sortedArray[2][2].toLowerCase()}, 
          Зайнятість: ${sortedArray[2][3].toLowerCase()}
          
          ${sortedArray[3][0]} ${sortedArray[3][1]}, ${sortedArray[3][4]} р.н. Хоббі: ${sortedArray[3][2].toLowerCase()}, 
          Зайнятість: ${sortedArray[3][3].toLowerCase()}
          
          ${sortedArray[4][0]} ${sortedArray[4][1]}, ${sortedArray[4][4]} р.н. Хоббі: ${sortedArray[4][2].toLowerCase()}, 
          Зайнятість: ${sortedArray[4][3].toLowerCase()}
          `);
          choise = 0;
          }
          
          else if (choise == 2) {
          //usersAge
          function userYears (obj) {
            let ageUser = currentYear - +obj.bD.year;
            return ageUser;
          }
          
          let user1Year = userYears(user1);
          let user2Year = userYears(user2);
          let user3Year = userYears(user3);
          let user4Year = userYears(user4);
          let user5Year = userYears(user5);
          
          let avarageUserAge = (user1Year + user2Year + user3Year + user4Year +user5Year) / 5;
          alert(`Середній вік користувачів: ${avarageUserAge} років`);
          choise = 0;
          }
          else if (choise == 3) {
            let arrayHobbies = [];
            // let hobby = `${user1.hobby}, ${user2.hobby}, ${user3.hobby}, ${user4.hobby}`;
          arrayHobbies.push(`${user1.hobby.toLocaleLowerCase()}`);
          arrayHobbies.push(`${user2.hobby.toLocaleLowerCase()}`);
          arrayHobbies.push(`${user3.hobby.toLocaleLowerCase()}`);
          arrayHobbies.push(`${user4.hobby.toLocaleLowerCase()}`);
          arrayHobbies.push(`${user5.hobby.toLocaleLowerCase()}`);
          
              var counts = {}, max = 0, res;
              for (var v in arrayHobbies) {
                counts[arrayHobbies[v]] = (counts[arrayHobbies[v]]||0) + 1;
                if (counts[arrayHobbies[v]] > max) { 
                  max = counts[arrayHobbies[v]];
                  res = arrayHobbies[v];
                }
              }
              var results = [];
              for (var k in counts){
                if (counts[k] == max){
                  results.push(k);
                }
              }
              if (results.length > 1) {
                alert(`Найпопулярніші хоббі: ${results.join(', ')}`);
              }
              else {
                alert(`Найпопулярніше хоббі: ${results.join(', ')}`);
              }
              choise = 0;
          }
          if (choise == 4) {
            choise = 0;
            mainChoise = 0;
            break;
          }




        }
      }

}
