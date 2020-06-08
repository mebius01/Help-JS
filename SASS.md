```scss
/* Это многострочный комментарий.
 * Так как этот тип комментирования
 * поддерживается в CSS, то он
 * попадет в скомпилированный CSS-файл.
 */

// Это однострочный комментарий.
// CSS не поддерживает данный вариант комментирования.
// Поэтому данного комментария не будет в CSS-файле.
```

## Переменные

main.scss

```scss
$red: rgb(241, 122, 122);

a {
  background-color: $red;
}
```

main.css

```css
a {
  background-color: #f17a7a;
}
```

## Вложенность

main.scss

```scss
.menu {
  list-style: none;

  li {
    border: solid 1px $red;

    &__link {
      display: block;
      padding: 20px;
      text-decoration: none;
    }
  }
}
```

main.css

```css
.menu {
  list-style: none;
}

.menu li {
  border: solid 1px #f17a7a;
}

.menu li a {
  display: block;
  padding: 20px;
  text-decoration: none;
}
```

## & Ссылка на родителя селектора

main.scss

```scss
a {
  display: block;
  color: red;

  &:hover {
    color: blue;
  }
}
```

main.css

```css
a {
  display: block;
  color: red;
}

a:hover {
  color: blue;
}
```

## % @extend Шаблонные селекторы

main.scss

```scss
%for-h1 {
  display: flex;
  justify-content: center;
  color: rgb(80, 80, 80);
  font-size: 45px;
}

.h1 {
  @extend %for-h1;
}
```

main.css

```css
.h1 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #505050;
  font-size: 45px;
}
```

## @impoert

foo.scss

```scss
@import url("https://fonts.googleapis.com/css2?family=Piedra&display=swap");
```

main.scss

```scss
@import "foo";
.h1 {
  font-family: "Piedra", cursive;
}
```

main.css

```css
.h1 {
  font-family: "Piedra", cursive;
}
```

## @mixin @include Миксины

main.scss

```scss
@mixin large-text {
  font: {
    family: Arial;
    size: 34px;
    weight: bold;
  }

  display: flex;
  justify-content: center;
  color: #853333;
}

.h2 {
  @include large-text;
}
```

main.css

```css
.h2 {
  font-family: Arial;
  font-size: 34px;
  font-weight: bold;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #853333;
}
```

## Наследование

main.scss

```scss
.message {
  border: 3px solid rgb(171, 71, 71);
  padding: 30px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}
```

main.css

```css
.message,
.success {
  border: 3px solid #ab4747;
  padding: 30px;
  color: #333;
}

.success {
  border-color: green;
}
```
