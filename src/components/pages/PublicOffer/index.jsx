<<<<<<< HEAD
import React from 'react';
import {ReactComponent as ArrowSvg} from '../../../img/arrow.svg';
import { ROUTES } from '../../../utils/routes';
import { Link } from 'react-router-dom';

const PublicOffer = () => {
    return (
        <div className='policy'>
            <div className="policy__container">
                <div className="navigate">
                    <Link className='navigate__link' to={ROUTES.HOME}>головна</Link>
                    <ArrowSvg/>
                    <div className='navigate__link navigate__link-this'>ПУБЛIЧНА ОФЕРТА</div>
                </div>
                <h2 className="policy__title">ПУБЛIЧНА ОФЕРТА</h2>
                <p className="policy__txt">
                    Умови Договору (Оферти) на замовлення, купівлю, продаж та доставку товарів:
                    <br />
                    <br />1. **ВИЗНАЧЕННЯ**
                    <br />
                    <br />1.1. **«Сайт»** - це онлайн-ресурс, доступний за посиланням https://bedoin.com.ua.
                    <br />1.1.2. **«Користувач»** (Ви) - це фізична особа, яка досягла повнолітнього віку, використовує цей сайт та погодилася з умовами цієї Публічної Оферти.
                    <br />1.1.3. **«Покупець»** - це Користувач, що здійснив покупку на веб-сайті https://bedoin.com.ua, оформивши замовлення.
                    <br />1.1.4. **«Продавець»** - фізична особа – підприємець, яка реалізує товари через цей Сайт.
                    <br />1.1.5. **«Товар»** - це різноманітні матеріальні та нематеріальні об'єкти, інформація про які розміщена на Сайті.
                    <br />1.1.6. **«Пропозиція»** - це інформація про Товар, включаючи його опис, ціну, умови оплати та доставки, що надається Продавцем на Сайті.
                    <br />1.1.7. **«Замовлення»** - запит Користувача через Сайт на реалізацію конкретного Товару.
                    <br />1.1.8. **«Платник»** - особа, яка оплачує замовлення Покупця.
                    <br />1.1.9. **«Одержувач»** - особа, визначена Платником у формі замовлення для отримання Товару.
                    <br />1.1.10. **«Сторони»** - Продавець, Покупець, Користувач.
                    <br />1.2. Цей Договір регулює доступ Користувача до інформації на Сайті, його використання та процедуру замовлення Товарів через інтернет-магазин на Сайті.
                    <br />1.3. Використовуючи матеріали та інструменти Сайту, Користувач беззастережно приймає умови цього Договору. Повне ознайомлення з умовами перед оформленням Замовлення на Сайті означає безумовне прийняття цієї Угоди (відповідно до статей 641 та 642 Цивільного Кодексу України).
                    <br />1.4. Сайт служить платформою для розміщення пропозицій Продавця стосовно продажу товарів.
                    <br />1.5. Інформація про Товар, розміщена на Сайті, може зазнавати змін без попереднього повідомлення. Продавець має право оновлювати, змінювати та доповнювати інформацію на Сайті.
                    <br />1.6. Продавець має право в односторонньому порядку змінювати умови цього Договору. Зміни набувають чинності з моменту публікації нової версії угоди на Сайті.
                    <br />1.7. Пропозиція на Сайті не є офертою. Користувач може надати оферту Продавцеві, заповнивши форму Замовлення на Сайті. Заповнення форми Замовлення розглядається як оферта Користувача на придбання Товару за умовами, зазначеними у Пропозиції.
                    <br />1.8. Оферта вважається прийнятою Продавцем, якщо Продавець починає надавати послуги чи виставляє рахунок на оплату замовлених Товарів.
                    <br />1.9. Продавець може пропонувати реалізацію Товару на інших умовах після отримання оферти Користувача. Ця пропозиція вважається зустрічною офертою і повинна бути прийнята Користувачем. Прийняття зустрічної оферти вважається фактичним отриманням Товару за умовами, передбаченими у пропозиції. Продавець може відкликати зустрічну оферту до отримання Товару Покуп
                    <br />
                    <br />2. ТОВАР І ПОРЯДОК ЗДІЙСНЕННЯ КУПІВЛІ
                    <br />
                    <br />2.1. Фотографії Товару, розміщені на Сайті, є лише ілюстраціями та можуть відрізнятися від фактичного зовнішнього вигляду Товару. Описи та характеристики, що супроводжують Товар, не є вичерпними інформаційними джерелами та можуть не містити повної характеристики. Для уточнення інформації про Товар, Покупець має право звернутися до Покупця.
                    <br />2.2. У випадку, якщо замовлені Покупцем Товари відсутні у Продавця, останній залишає за собою право виключити цей Товар з Замовлення або скасувати Замовлення Покупця, повідомивши про це останнього за допомогою електронної пошти за адресою, яку вказав Покупець під час оформлення замовлення.
                    <br />2.3. У випадку повного чи часткового скасування передоплати за Замовлення, вартість анульованого Товару повертається Продавцем Покупцеві шляхом, яким був здійснений платіж за Товар, протягом 14 днів з моменту скасування Замовлення.
                    <br />
                    <br />3. ДОСТАВКА ЗАМОВЛЕННЯ
                    <br />
                    <br />3.1. Доставка товару в межах України здійснюється за допомогою логісттичнної компанії "Нова Пошта". Зазвичай товар доставляється до відділення компанії, що розташоване в населеному пункті покупця. Проте, за бажанням клієнта можлива адресна доставка. Якщо транспортна компанія "Нова Пошта" не може здійснити доставку, продавець може організувати доставку будь-якою іншою компанією, яка працює на території України, за узгодженням з клієнтом.
                    <br />3.2. Вартість доставки товару оплачується покупцем, якщо кількість товару в замовленні перевищує 6 кг, вартість доставки сплачує продавець. Розрахунок вартості доставки транспортною компанією визначається згідно з їх тарифами і залежить від ваги, розмірів товару, а також місця доставки. Продавець не має можливості впливати на вартість доставки, яку встановлює логістична компанія.
                    <br />3.3. Територія доставки товарів, представлених на сайті, обмежена межами України. Продавець не забезпечує доставку на окуповані території України (АРК, території Луганської і Донецької областей) та в інші населені пункти, де відсутні відділення перевізника.
                    <br />3.4. Якщо не виникає обставин, що не залежать від продавця, товар доставляється покупцеві протягом 5 робочих днів після підтвердження замовлення обома сторонами. Затримки в доставці можливі у зв'язку з непередбаченими обставинами, не пов'язаними з діями продавця.
                    <br />3.5. При отриманні замовлення у відділенні транспортної компанії одержувач зобов'язаний перевірити товар на відповідність замовленому асортименту та його комплектність, а також стан упаковки. Якщо виявлені будь-які відмінності або пошкодження, одержувач повинен негайно звернутися до служби доставки з претензією і не приймати товар.
                    <br />3.6. Моментом отримання товару вважається підписання одержувачем документу, що підтверджує прийняття товару, або фактичне отримання ним товару. Отримання товару одержувачем свідчить про відсутність будь-яких претензій до товару, що був переданий продавцем.
                    <br />
                    <br />4. ОПЛАТА ТОВАРУ
                    <br />
                    <br />4.1. Цінова марка: Ціна товару на веб-сайті вказується у гривнях.
                    <br />4.2. Якщо на сайті продавця відображається неправильна ціна на замовлений товар, продавець сповіщує покупця для підтвердження замовлення за скоригованою ціною або скасування замовлення.
                    <br />4.3. Цінова динаміка: Ціна товару може змінюватися на веб-сайті продавця в односторонньому порядку. Однак ціна на вже замовлений і підтверджений товар покупцям залишається незмінною.
                    <br />4.4. Варіанти оплати:
                    <br />- 4.4.1. Готівковий розрахунок за товар при отриманні у відділенні логістичної компанії або у кур'єра компанії з післяплатою.
                    <br />- 4.4.2. Безготівковий розрахунок на рахунок продавця за допомогою виставленого рахунку. Доставка товару здійснюється після сплати протягом 3 робочих днів з моменту виставлення рахунку.
                    <br />- 4.4.3. Безготівковий розрахунок через систему LIQPAY (ЛИКПЕЙ), доступну на веб-сайті.
                    <br />4.5. Оплата післяплатою: При оплаті після отримання товару, транспортна компанія стягує додаткову плату за пересилку грошових коштів продавцеві, що відбувається згідно з тарифами перевізника. Продавець не має впливу на розмір цієї плати.
                    <br />4.6. Знижки та бонуси: Продавець має право надавати знижки на товари та встановлювати бонусні програми. Умови і розміри знижок, а також порядок їх отримання встановлюються продавцем і вказані на веб-сайті. Розміри та умови можуть бути змінені продавцем в односторонньому порядку.
                    <br />4.7. Попередня оплата: У деяких випадках продавець може запитати часткову або повну передоплату за товар. Розмір передоплати визначається продавцем. Якщо покупець не погоджується з передоплатою, продавець має право скасувати замовлення.
                    <br />
                    <br />5. ПОВЕРНЕННЯ ТОВАРУ ТА ГРОШОВИХ КОШТІВ
                    <br />
                    <br />5.1. Покупець має право згідно з Законом України "Про захист прав споживачів" повернути товар Продавцю.
                    <br />5.2. Якщо товар отримано Одержувачем (згідно з пунктом 3.6. цієї пропозиції), а пізніше виявлені дефекти, покупець повинен повідомити Продавця про це протягом дня отримання товару у телефонному режимі. Такий товар може бути повернений Продавцю.
                    <br />5.3. Вартість доставки товару при поверненні або обміні визначається згідно з умовами, зазначеними в пункті 3.2. цієї угоди.
                    <br />5.4. Якщо дефект товару виявлено при отриманні Одержувачем, Одержувач повинен відмовитися від отримання товару на місці. У цьому випадку товар буде повернений Продавцеві, і Одержувач не оплачує вартість його доставки.
                    <br />5.5. Грошові кошти повертаються Покупцеві впродовж 14 днів з моменту отримання товару Продавцем.
                    <br />5.6. Повернення грошових коштів Покупцеві здійснюється тим методом, яким був здійснений платіж за товар.
                    <br />5.7. Продавець не несе відповідальності за дефекти товару, якщо вони виникли після його передачі Покупцеві внаслідок порушення правил користування або зберігання товару покупцем, дій третіх осіб або форс-мажорних обставин.
                    <br />
                    <br />6. ВІДПОВІДАЛЬНІСТЬ СТОРІН
                    <br />
                    <br />6.1. Користувач погоджується на використання та обробку своїх персональних даних відповідно до Закону України "Про захист персональних даних" № 2297-VI від 2010 року та іншого чинного законодавства України.
                    <br />6.2. Приймаючи умови цієї Публічної оферти, Користувач підтверджує, що він ознайомлений з її умовами та досягнув 18-річного віку.
                    <br />6.3. Відповідальність за грошові перекази, здійснені Платниками, лежить на банках та платіжних системах, які використовує Користувач.
                    <br />6.4. Продавець не несе відповідальності за працездатність обладнання, на якому розміщений Сайт, доступність Сайту, роботу каналів передачі даних та інші технічні засоби для доступу Користувачів до Сайту.
                    <br />6.5. Продавець також не несе відповідальності за дії Транспортної компанії, включаючи терміни перевезення та зберігання доставки.
                    <br />6.6. Відповідальність Продавця за зміни умов реалізації Товару обмежується правом Одержувача (Покупця, Користувача, Платника) відмовитися від придбання Товару та вимагати повернення сплачених за нього коштів (якщо такі були сплачені).
                    <br />6.7. Користувач несе відповідальність за достовірність наданих даних при оформленні Замовлення. Якщо невірні дані призвели до додаткових витрат Продавця, пов'язаних з доставкою за неправильною адресою або передачею товару іншій особі, всі збитки та витрати покладаються на Користувача. Продавець має право утримувати суму таких збитків або витрат з оплати Товару.
                    <br />6.8. Продавець не несе відповідальності за будь-які збитки, заподіяні Покупцеві через неналежне використання придбаних у нього Товарів.
                    <br />
                    <br />7. ІНШІ УМОВИ
                    <br />
                    <br />7.1. Користувач має право вказати третю особу як Одержувача придбаного Товару. У такому випадку Одержувач повинен надати у формі Замовлення інформацію, необхідну для ідентифікації та доставки Товару, і повідомити Продавця про це в коментарі до замовлення.
                    <br />7.2. Усі можливі спори між Сторонами цієї Угоди спочатку підлягають вирішенню шляхом переговорів. У разі неможливості врегулювати їх шляхом переговорів, вони підлягають вирішенню відповідно до чинного законодавства України, переважно за місцем реєстрації Продавця. Якщо суд визначає будь-яке положення цієї Угоди як недійсне, це не впливає на інші частини Угоди та не звільняє Користувача від зобов'язань, прийнятих при оформленні Замовлення.
                    <br />7.3. При вказанні номеру мобільного телефону та адреси електронної пошти при оформленні Замовлення, Користувач автоматично погоджується отримувати SMS-, Viber- та email-повідомлення від Сайту/Продавця, включаючи рекламний вміст. Якщо Користувач бажає припинити отримання таких повідомлень, він повинен звернутися до Продавця.
                    <br />7.4. Здійснюючи Замовлення на Сайті, Користувач добровільно надає свою згоду Продавцю на збір та обробку його персональних даних (прізвище, ім'я, по батькові, електронна пошта, телефон, адреса) з метою забезпечення взаємовідносин у сфері купівлі-продажу, захисту прав споживачів, рекламних та маркетингових досліджень. Крім того, Користувач дає згоду на передачу його даних перевізникам, транспортно-експедиторським та кур'єрським організаціям.
                    <br />7.5. Продавець застосовує технологію "Cookies". Ці файли не містять конфіденційну інформацію та не передаються третім особам.
                    <br />7.6. Продавець зобов'язується запобігати несанкціонованому доступу до інформації, отриманої під час оформлення замовлень, та передачі її третім особам, що не мають безпосереднього відношення до виконання Замовлень, відповідно до Закону України "Про інформацію" від 02.10.1992 року № 2657.
                    <br />7.7. Продавець не несе відповідальності за використання або подальше використання Товарів третіми особами, які придбали Товар на Сайті.
                    <br />
                    <br />8. ТЕРМІН ДІЇ ПУБЛІЧНОЇ ОФЕРТИ
                    <br />8.1. Ця Угода набирає чинності з моменту публікації на Сайті та є безстроковою.



                </p>
            </div>            
        </div>
    );
};

=======
import React from 'react';
import {ReactComponent as ArrowSvg} from '../../../img/arrow.svg';
import { ROUTES } from '../../../utils/routes';
import { Link } from 'react-router-dom';

const PublicOffer = () => {
    return (
        <div className='policy'>
            <div className="policy__container">
                <div className="navigate">
                    <Link className='navigate__link' to={ROUTES.HOME}>головна</Link>
                    <ArrowSvg/>
                    <div className='navigate__link navigate__link-this'>ПУБЛIЧНА ОФЕРТА</div>
                </div>
                <h2 className="policy__title">ПУБЛIЧНА ОФЕРТА</h2>
                <p className="policy__txt">
                    Умови Договору (Оферти) на замовлення, купівлю, продаж та доставку товарів:
                    <br />
                    <br />1. **ВИЗНАЧЕННЯ**
                    <br />
                    <br />1.1. **«Сайт»** - це онлайн-ресурс, доступний за посиланням https://bedoin.com.ua.
                    <br />1.1.2. **«Користувач»** (Ви) - це фізична особа, яка досягла повнолітнього віку, використовує цей сайт та погодилася з умовами цієї Публічної Оферти.
                    <br />1.1.3. **«Покупець»** - це Користувач, що здійснив покупку на веб-сайті https://bedoin.com.ua, оформивши замовлення.
                    <br />1.1.4. **«Продавець»** - фізична особа – підприємець, яка реалізує товари через цей Сайт.
                    <br />1.1.5. **«Товар»** - це різноманітні матеріальні та нематеріальні об'єкти, інформація про які розміщена на Сайті.
                    <br />1.1.6. **«Пропозиція»** - це інформація про Товар, включаючи його опис, ціну, умови оплати та доставки, що надається Продавцем на Сайті.
                    <br />1.1.7. **«Замовлення»** - запит Користувача через Сайт на реалізацію конкретного Товару.
                    <br />1.1.8. **«Платник»** - особа, яка оплачує замовлення Покупця.
                    <br />1.1.9. **«Одержувач»** - особа, визначена Платником у формі замовлення для отримання Товару.
                    <br />1.1.10. **«Сторони»** - Продавець, Покупець, Користувач.
                    <br />1.2. Цей Договір регулює доступ Користувача до інформації на Сайті, його використання та процедуру замовлення Товарів через інтернет-магазин на Сайті.
                    <br />1.3. Використовуючи матеріали та інструменти Сайту, Користувач беззастережно приймає умови цього Договору. Повне ознайомлення з умовами перед оформленням Замовлення на Сайті означає безумовне прийняття цієї Угоди (відповідно до статей 641 та 642 Цивільного Кодексу України).
                    <br />1.4. Сайт служить платформою для розміщення пропозицій Продавця стосовно продажу товарів.
                    <br />1.5. Інформація про Товар, розміщена на Сайті, може зазнавати змін без попереднього повідомлення. Продавець має право оновлювати, змінювати та доповнювати інформацію на Сайті.
                    <br />1.6. Продавець має право в односторонньому порядку змінювати умови цього Договору. Зміни набувають чинності з моменту публікації нової версії угоди на Сайті.
                    <br />1.7. Пропозиція на Сайті не є офертою. Користувач може надати оферту Продавцеві, заповнивши форму Замовлення на Сайті. Заповнення форми Замовлення розглядається як оферта Користувача на придбання Товару за умовами, зазначеними у Пропозиції.
                    <br />1.8. Оферта вважається прийнятою Продавцем, якщо Продавець починає надавати послуги чи виставляє рахунок на оплату замовлених Товарів.
                    <br />1.9. Продавець може пропонувати реалізацію Товару на інших умовах після отримання оферти Користувача. Ця пропозиція вважається зустрічною офертою і повинна бути прийнята Користувачем. Прийняття зустрічної оферти вважається фактичним отриманням Товару за умовами, передбаченими у пропозиції. Продавець може відкликати зустрічну оферту до отримання Товару Покуп
                    <br />
                    <br />2. ТОВАР І ПОРЯДОК ЗДІЙСНЕННЯ КУПІВЛІ
                    <br />
                    <br />2.1. Фотографії Товару, розміщені на Сайті, є лише ілюстраціями та можуть відрізнятися від фактичного зовнішнього вигляду Товару. Описи та характеристики, що супроводжують Товар, не є вичерпними інформаційними джерелами та можуть не містити повної характеристики. Для уточнення інформації про Товар, Покупець має право звернутися до Покупця.
                    <br />2.2. У випадку, якщо замовлені Покупцем Товари відсутні у Продавця, останній залишає за собою право виключити цей Товар з Замовлення або скасувати Замовлення Покупця, повідомивши про це останнього за допомогою електронної пошти за адресою, яку вказав Покупець під час оформлення замовлення.
                    <br />2.3. У випадку повного чи часткового скасування передоплати за Замовлення, вартість анульованого Товару повертається Продавцем Покупцеві шляхом, яким був здійснений платіж за Товар, протягом 14 днів з моменту скасування Замовлення.
                    <br />
                    <br />3. ДОСТАВКА ЗАМОВЛЕННЯ
                    <br />
                    <br />3.1. Доставка товару в межах України здійснюється за допомогою логісттичнної компанії "Нова Пошта". Зазвичай товар доставляється до відділення компанії, що розташоване в населеному пункті покупця. Проте, за бажанням клієнта можлива адресна доставка. Якщо транспортна компанія "Нова Пошта" не може здійснити доставку, продавець може організувати доставку будь-якою іншою компанією, яка працює на території України, за узгодженням з клієнтом.
                    <br />3.2. Вартість доставки товару оплачується покупцем, якщо кількість товару в замовленні перевищує 6 кг, вартість доставки сплачує продавець. Розрахунок вартості доставки транспортною компанією визначається згідно з їх тарифами і залежить від ваги, розмірів товару, а також місця доставки. Продавець не має можливості впливати на вартість доставки, яку встановлює логістична компанія.
                    <br />3.3. Територія доставки товарів, представлених на сайті, обмежена межами України. Продавець не забезпечує доставку на окуповані території України (АРК, території Луганської і Донецької областей) та в інші населені пункти, де відсутні відділення перевізника.
                    <br />3.4. Якщо не виникає обставин, що не залежать від продавця, товар доставляється покупцеві протягом 5 робочих днів після підтвердження замовлення обома сторонами. Затримки в доставці можливі у зв'язку з непередбаченими обставинами, не пов'язаними з діями продавця.
                    <br />3.5. При отриманні замовлення у відділенні транспортної компанії одержувач зобов'язаний перевірити товар на відповідність замовленому асортименту та його комплектність, а також стан упаковки. Якщо виявлені будь-які відмінності або пошкодження, одержувач повинен негайно звернутися до служби доставки з претензією і не приймати товар.
                    <br />3.6. Моментом отримання товару вважається підписання одержувачем документу, що підтверджує прийняття товару, або фактичне отримання ним товару. Отримання товару одержувачем свідчить про відсутність будь-яких претензій до товару, що був переданий продавцем.
                    <br />
                    <br />4. ОПЛАТА ТОВАРУ
                    <br />
                    <br />4.1. Цінова марка: Ціна товару на веб-сайті вказується у гривнях.
                    <br />4.2. Якщо на сайті продавця відображається неправильна ціна на замовлений товар, продавець сповіщує покупця для підтвердження замовлення за скоригованою ціною або скасування замовлення.
                    <br />4.3. Цінова динаміка: Ціна товару може змінюватися на веб-сайті продавця в односторонньому порядку. Однак ціна на вже замовлений і підтверджений товар покупцям залишається незмінною.
                    <br />4.4. Варіанти оплати:
                    <br />- 4.4.1. Готівковий розрахунок за товар при отриманні у відділенні логістичної компанії або у кур'єра компанії з післяплатою.
                    <br />- 4.4.2. Безготівковий розрахунок на рахунок продавця за допомогою виставленого рахунку. Доставка товару здійснюється після сплати протягом 3 робочих днів з моменту виставлення рахунку.
                    <br />- 4.4.3. Безготівковий розрахунок через систему LIQPAY (ЛИКПЕЙ), доступну на веб-сайті.
                    <br />4.5. Оплата післяплатою: При оплаті після отримання товару, транспортна компанія стягує додаткову плату за пересилку грошових коштів продавцеві, що відбувається згідно з тарифами перевізника. Продавець не має впливу на розмір цієї плати.
                    <br />4.6. Знижки та бонуси: Продавець має право надавати знижки на товари та встановлювати бонусні програми. Умови і розміри знижок, а також порядок їх отримання встановлюються продавцем і вказані на веб-сайті. Розміри та умови можуть бути змінені продавцем в односторонньому порядку.
                    <br />4.7. Попередня оплата: У деяких випадках продавець може запитати часткову або повну передоплату за товар. Розмір передоплати визначається продавцем. Якщо покупець не погоджується з передоплатою, продавець має право скасувати замовлення.
                    <br />
                    <br />5. ПОВЕРНЕННЯ ТОВАРУ ТА ГРОШОВИХ КОШТІВ
                    <br />
                    <br />5.1. Покупець має право згідно з Законом України "Про захист прав споживачів" повернути товар Продавцю.
                    <br />5.2. Якщо товар отримано Одержувачем (згідно з пунктом 3.6. цієї пропозиції), а пізніше виявлені дефекти, покупець повинен повідомити Продавця про це протягом дня отримання товару у телефонному режимі. Такий товар може бути повернений Продавцю.
                    <br />5.3. Вартість доставки товару при поверненні або обміні визначається згідно з умовами, зазначеними в пункті 3.2. цієї угоди.
                    <br />5.4. Якщо дефект товару виявлено при отриманні Одержувачем, Одержувач повинен відмовитися від отримання товару на місці. У цьому випадку товар буде повернений Продавцеві, і Одержувач не оплачує вартість його доставки.
                    <br />5.5. Грошові кошти повертаються Покупцеві впродовж 14 днів з моменту отримання товару Продавцем.
                    <br />5.6. Повернення грошових коштів Покупцеві здійснюється тим методом, яким був здійснений платіж за товар.
                    <br />5.7. Продавець не несе відповідальності за дефекти товару, якщо вони виникли після його передачі Покупцеві внаслідок порушення правил користування або зберігання товару покупцем, дій третіх осіб або форс-мажорних обставин.
                    <br />
                    <br />6. ВІДПОВІДАЛЬНІСТЬ СТОРІН
                    <br />
                    <br />6.1. Користувач погоджується на використання та обробку своїх персональних даних відповідно до Закону України "Про захист персональних даних" № 2297-VI від 2010 року та іншого чинного законодавства України.
                    <br />6.2. Приймаючи умови цієї Публічної оферти, Користувач підтверджує, що він ознайомлений з її умовами та досягнув 18-річного віку.
                    <br />6.3. Відповідальність за грошові перекази, здійснені Платниками, лежить на банках та платіжних системах, які використовує Користувач.
                    <br />6.4. Продавець не несе відповідальності за працездатність обладнання, на якому розміщений Сайт, доступність Сайту, роботу каналів передачі даних та інші технічні засоби для доступу Користувачів до Сайту.
                    <br />6.5. Продавець також не несе відповідальності за дії Транспортної компанії, включаючи терміни перевезення та зберігання доставки.
                    <br />6.6. Відповідальність Продавця за зміни умов реалізації Товару обмежується правом Одержувача (Покупця, Користувача, Платника) відмовитися від придбання Товару та вимагати повернення сплачених за нього коштів (якщо такі були сплачені).
                    <br />6.7. Користувач несе відповідальність за достовірність наданих даних при оформленні Замовлення. Якщо невірні дані призвели до додаткових витрат Продавця, пов'язаних з доставкою за неправильною адресою або передачею товару іншій особі, всі збитки та витрати покладаються на Користувача. Продавець має право утримувати суму таких збитків або витрат з оплати Товару.
                    <br />6.8. Продавець не несе відповідальності за будь-які збитки, заподіяні Покупцеві через неналежне використання придбаних у нього Товарів.
                    <br />
                    <br />7. ІНШІ УМОВИ
                    <br />
                    <br />7.1. Користувач має право вказати третю особу як Одержувача придбаного Товару. У такому випадку Одержувач повинен надати у формі Замовлення інформацію, необхідну для ідентифікації та доставки Товару, і повідомити Продавця про це в коментарі до замовлення.
                    <br />7.2. Усі можливі спори між Сторонами цієї Угоди спочатку підлягають вирішенню шляхом переговорів. У разі неможливості врегулювати їх шляхом переговорів, вони підлягають вирішенню відповідно до чинного законодавства України, переважно за місцем реєстрації Продавця. Якщо суд визначає будь-яке положення цієї Угоди як недійсне, це не впливає на інші частини Угоди та не звільняє Користувача від зобов'язань, прийнятих при оформленні Замовлення.
                    <br />7.3. При вказанні номеру мобільного телефону та адреси електронної пошти при оформленні Замовлення, Користувач автоматично погоджується отримувати SMS-, Viber- та email-повідомлення від Сайту/Продавця, включаючи рекламний вміст. Якщо Користувач бажає припинити отримання таких повідомлень, він повинен звернутися до Продавця.
                    <br />7.4. Здійснюючи Замовлення на Сайті, Користувач добровільно надає свою згоду Продавцю на збір та обробку його персональних даних (прізвище, ім'я, по батькові, електронна пошта, телефон, адреса) з метою забезпечення взаємовідносин у сфері купівлі-продажу, захисту прав споживачів, рекламних та маркетингових досліджень. Крім того, Користувач дає згоду на передачу його даних перевізникам, транспортно-експедиторським та кур'єрським організаціям.
                    <br />7.5. Продавець застосовує технологію "Cookies". Ці файли не містять конфіденційну інформацію та не передаються третім особам.
                    <br />7.6. Продавець зобов'язується запобігати несанкціонованому доступу до інформації, отриманої під час оформлення замовлень, та передачі її третім особам, що не мають безпосереднього відношення до виконання Замовлень, відповідно до Закону України "Про інформацію" від 02.10.1992 року № 2657.
                    <br />7.7. Продавець не несе відповідальності за використання або подальше використання Товарів третіми особами, які придбали Товар на Сайті.
                    <br />
                    <br />8. ТЕРМІН ДІЇ ПУБЛІЧНОЇ ОФЕРТИ
                    <br />8.1. Ця Угода набирає чинності з моменту публікації на Сайті та є безстроковою.



                </p>
            </div>            
        </div>
    );
};

>>>>>>> d548b37824d2e030f70692e7ccfb3169b09aa9c1
export default PublicOffer;