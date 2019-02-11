Develop a small CRUD application on Angular 5 or higher. Using Angular CLI. Build
appearence of the app accordingly to your liking.

Get the data from the attached json file and display it.
You can work with the state or save your data to localStorage.

When you click on the button “Add user,” a modal window with a form should be
opened. If the form is saved successfully, you have to close the modal window and add a
new user to the user list.

Delete the user from the user list by pressing the delete button.

Proceed to the user page with detailed info by clicking on user’s name. Display the
following fields: balance, picture, age, name, email, phone, address, about, tags,
registered. The registered field has to be displayed in the MM-DD-YYYY HH-mm
format.

It’s highly recommend to customize bootsrap with overwrite variables.
We don't want you to solve this task using the easiest, common approach. Think outside
of the box, be creative, and show us what you can really do.

Tech stack used while building a front part must include bootstrap version 3 or 4 with
SCSS; You can use fontawesome or Angular Material Icons for icons, as well as any
other useful lib (but it should be really useful, and if it is, it should be integrated
properly.)). Also, you can use any Angular component library (NGX Bootstrap, Angular
material, Prime NG etc.)



TO DO

1) При загрузке приложения, метод getUsers сервисы, пытается получить данные с localStorage, которых еще там нет. Соответственно на главной странице ничего не выводится. В сервисе не хватает проверки - если localStorage не пустой, получить с него данные, иначе получить с json файла и сохранить.
Из-за этого и не получается добавить нового юзера, тк users null, а не массив.

2) После добавления нового юзера и перехода на его страницу, появляется значок битого изображения. В таких случаях при создании юзера либо добавлять дефолтный урл для картинки, либо скрывать поле.

3) Проставление id новых юзеров - ставится по длине массива, что приводит к такому http://joxi.ru/4AkgBbwcyzDonA, одинаковые айди у разных юзеров, для тестовый айди лучше использовать new Date в timestamp, он точно будет уникальным.

4) Именовать роуты  лучше всего по rest: юзеры -> users, отдельный юзер -> users/:id. 
