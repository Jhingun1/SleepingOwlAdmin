# Новый LTE с Bootstrap 4


## Changelog
Обновлены npm пакеты
- Sweetalert2 8.14.0
- Fontawesome 5.9.0
- Admin-lte v3.0.0-beta.1
- Bootstrap 4.3.1
- Noty 3.2.0-beta
- добавлен редактор Summernote
- добавлен ckeditor5, (4.7 оставлен как локальный)
- Добавлен плагин js-cookie


## Переход
* Взять ветку с новым дизайном `"laravelrus/sleepingowl": "dev-bs4"`
* Нужно обновить ассеты `php artisan sleepingowl:update`
* Проверить конфиг `App\config\sleeping_owl.php` и добавить новые пункты из `https://github.com/LaravelRUS/SleepingOwlAdmin/blob/bs4/config/sleeping_owl.php`
* Чтоб меню постоянно не разворачивалось нужно добавить исключение куки `'menu-state'` в файл `app\Http\Middleware\EncryptCookies.php` вашего проекта


### Обновление конфига
- `logo` - только картинка (символ) как для мини-лого
- `minilogo` - уже не используется (вместо полного названия используется `title`)


### Что пока не поддерживается


### Что поправлено
* [x] Классы для табов (ф-ционал нуждается в исправлении)
* [x] Собраны старые и новые стили (SCSS), перерабатываются
* [x] Собраны старые и новые скрипты, перерабатываются
* [x] Стили пагинации
* [x] Часть контрольных кнопок
* [x] Навигация активные списки и раскрываются
* [x] Дропдаун кнопок починить
* [x] Табы работают нормально
* [x] Пофиксил Badge's
* [x] Tooltips загружаются автоматически
* [x] Order отображается по центру
* [x] Теперь нет смещения от звездочки в формах, если поля обязательные
* [x] Select2 (scss + JS)
* [x] Vue-Multiselect (scss + js)
* [x] Sweetalert2 (scss + all js)
* [x] Noty (по умолчанию тема metroui, но стили подключены все)
* [x] Datepicker на Bootstrap4 (заменен на Datetimepicker для BS4)
* [x] hover для таблиц
* [x] Респонсивность table
* [x] Display-action стили в шапке dataTables
* [x] Запомнить раскрыт ли сайдбар (localstorage или кука)
* [x] Добавлен summernote редактор
* [x] стили datetime в фильтрах (проверить)
* [x] Добавлены фонтавесомы 5 (4-я версия отключена)
* [x] Editable поля (поправить стили select)
* [x] добавлен метод `setDisplayed(bool|Closure $displayed): static`. Установка атрибута "отображать или нет". Используется для политик или для других нужд.
* [x] Табы поломалось добавление классов (setHtmlAttribute) - поправлено
* [x] `AdminColumnEditable` - навесить политики (`data-disabled='true'`)
* [x] Проблемы с `AdminColumn::order()` поправлены
* [x] Метод `onCollapse(bool)` для wysiwyg поля (свернуто)
* [x] Прикручен автоапдейт дататейблса. В конфиге можно включить и выставить значение в минутах
* [x] https://github.com/LaravelRUS/SleepingOwlAdmin/issues/983
* [x] `actions` уведомление при отсутствии выбора экшена или не отмеченных чекбоксов
* [x] `->setCollapsed(true)` атрибуты, ошибка в консоле
* [x] перепроверить цвет плейсхолдеров (сильно темные и похожи на валуе)
* [x] `AdminColumn::link` починить атрибуты
* [x] small для `relatedLink`
* [x] бок с автоапдейтом (полностью спрятать кнопку закрыть)
* [x] Добавить метод для `lists` выбор цвета, иначе пусть под цвет таблицы
* [x] Добавить метод для `url` выбор иконки
* [x] посмотреть `isVisible`, возможно убрать `setDisplayed` и заменить на `setVisible()`
* [x] `AdminFormElement::daterange` выпилить
* [x] select2 styles сделать под БС4
* [x] `AdminFormElement::file` проверить на ошибку в Vue
* [x] медленное прорисовывание меню, поправить определение классов в хелпере меню
* [x] Добавить для wysiwyg поля максимизизацию (есть пример в шаблоне)


### Что сделать
* [ ] Локализовать `AdminFormElement::selectajax` (частично)
* [ ] Добавили кард, выпилить панель и для поддержки сделать алиасом (`'panel' => Form\FormCard::class,`)
* [ ] ПРнуть / потестить депендет аякс и селект2 из девки
* [ ] `multiselect` поправить отображение required и внесение старых данных после ошибки
* [ ] Допилить `->setFormat()` на даты (не работает)
* [ ] Запомнить последний таб (localstorage или кука)
* [ ] `AdminColumnEditable::date` поправить год или поменять на выбор с значком календаря
* [ ] `AdminColumnEditable::datetime` сделать
* [ ] посмотреть `setVisible`, к табам
* [ ] Вынести стилей и скрипты для персборки ассетов (сделано SCSS)
* [ ] `Admin.Modules.register('display.datatables', () => {localStorage.clear();}` - переработать
* [ ] Сохранить->сохранить/закрыть выкидывает в корень, `->getDisplayUrl()` (словить зависимость)
* [ ] Перепроверить stub
* [ ] `->setText()` для чекбоксов и прочих от `TableColumn`


### Отменено
* В навигацию перенести заголовок (щас Main Menu)
* DependentSelect переделать бы с select2 на Vue-Multiselect

### Что изменено / планируется
* [ ] Добавить методу Gravatar доп.поле для выбора аватарки кастомной
* [ ] Подгрузка дефаулт иконки, если соединения нет в гаватаре
* Обновить CKeditor
* `AdminColumnEditable::boolean` с обычным кликом, без попап
* https://github.com/LaravelRUS/SleepingOwlAdmin/issues/200 скрытие/отображение по кнопке
* https://github.com/LaravelRUS/SleepingOwlAdmin/issues/703 добавление динамических полей
* https://github.com/LaravelRUS/SleepingOwlAdmin/issues/895 ошибка в табах
* https://github.com/LaravelRUS/SleepingOwlAdmin/issues/993 (проверить)
* https://github.com/LaravelRUS/SleepingOwlAdmin/issues/900


### В доку дописать
* [ ] `->setVisible(true)` для display
* [ ] `->setVisible(true)` для форм
* [ ] `->setVisibilityCondition()` deprecated
* [ ] для респонсивности широких таблиц `->setHtmlAttribute('class', 'hidden-sm')` (не работает в дататейблсах)
* [ ] `AdminColumnEditable::textarea`
* [ ] `AdminColumn::boolean`
* [ ] `AdminColumn::timestamp`
* [ ] `AdminColumn::url` со всеми методами
* [ ] `AdminColumn::textaddon` с методами
* [ ] `AdminColumn::gravatar('email', 'Ava')` Граватарки
* [ ] `setCollapsed(bool)` для wysiwyg поля
* [ ] Автоапдейт для дататейблов как вкл/выкл
* [ ] Остальные поля, которых нет и их методы
* [ ] Третий параметр в обычных коламнах `AdminColumn::link('title', 'Title', 'created_at')` и во многих других полях или `->setSmall('Редактировать')` (или `->setSmall('created_at')`). Можно вернуть калбэк
* [ ] Для табов появился класс `.last`. Добавление таба в конец списка и к правой стороне
* [ ] Дописать, что при использовании поиска в дататейблсах на связи обязательно нужно калбеки на ордерабле(если есть), иначе поиск будет с ошибкой
* [ ] `lists` цвета от цвета таблицы, смена цвета через атрибуты `->setHtmlAttribute('class', 'badge-list-warning')`
* возвраты ошибок `error_message`, `success_message` и прочие
* `AdminColumnFilter` как передавать отображать и фильтровать
* `->setModifier` для поля text
* Классы хелперы для таблиц (`.th-center`, `.table-striped` и прочие)
