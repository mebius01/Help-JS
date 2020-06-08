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

SCSS

```scss
$red: rgb(241, 122, 122);

a {
  background-color: $red;
}
```

CSS

```css
a {
  background-color: #f17a7a;
}
```

## Вложенность

SCSS

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

CSS

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

SCSS

```scss
a {
  display: block;
  color: red;

  &:hover {
    color: blue;
  }
}
```

CSS

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

SCSS

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

CSS

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

SCSS

```scss
@import url("https://fonts.googleapis.com/css2?family=Piedra&display=swap");
```

main.scss
SCSS

```scss
@import "foo";
.h1 {
  font-family: "Piedra", cursive;
}
```

CSS

```css
.h1 {
  font-family: "Piedra", cursive;
}
```

## @mixin @include Миксины

SCSS

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

CSS

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
