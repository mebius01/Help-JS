## Переменные

## Вложенность

## & Ссылка на родителя селектора

## % @extend Шаблонные селекторы

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
