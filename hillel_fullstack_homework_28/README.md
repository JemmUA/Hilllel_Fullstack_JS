# Проєкт слайдеру на классах.

## Інструкція для підготовки до використання.

Автор: __Олександр__

1. В JS передати унікальний ID. Параметр: sliderId. <ins>Обов'язковий параметр.</ins>
2. В Html вказати id головного контейнеру, такий самий як в sliderId. Приклад рядка div з ID slider: 
   `<div id="slider" class="common-container">` <ins>Обов'язково.</ins>
3. Масив імен файлів зображень передається параметром: images. <ins>Обов'язковий параметр.</ins>
4. Шлях на диску до зображень передається в параметрі: filePathImg. 
   Шлях вказується від положення файла index.html. 
   Приклад: "sources/images/cars/". <ins>Обов'язковий параметр.</ins>
5. Час прокрутки зображення передається за допомогою параметра moveDuration (в секундах). 
   По замовчування: 1.
6. Параметром disableSwitcher вимикаються крапки, що знаходяться під слайдером, вони 
   відображають положення поточного зображення та дають можливість переходити відразу в бажане положення. 
   Параметр приймає значення true або false. По замовчуванню: false.
7. Параметр moveDirection зберігає напрям атоматичної прокрутки. Він приймає значення left або right. 
   По замовчуванню: right.
8. Кнопка автоматичної прокрутки вимикається параметром disableAutoplay. Параметр приймає значення true або false. 
   По замовчуванню: false.
9. Параметр colorSliderBackground приймає колір фону лівої та правої плашки кнопок "Вліво" та "Вправо".
   По замовчуванню: grey.

### Приклад HTML коду:

  <div id="slider" class="common-container">

    <div class="carrousel-container">
      <div class="moverLeft previous">◄</div>
      <div class="demonstrator">
        <div class="images-container"></div>
      </div>
      <div class="next">►</div>
    </div>

    <div class="autoplay-container">
      <div class="run-container activated">
        <svg fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"><g stroke-width="0"></g><g
            stroke-linecap="round" stroke-linejoin="round"></g><g>
            <path d="M11.303 8l11.394 7.997L11.303 24z"></path></g>
        </svg>
      </div>
      <div class="stop-container deactivated">
        <svg class="stop-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
            fill="none" stroke="#ffffff"><g stroke-width="0"></g><g
            stroke-linecap="round" stroke-linejoin="round"></g><g><path fill="#ffffff"
            d="M3.25 1A2.25 2.25 0 001 3.25v9.5A2.25 2.25 0 003.25 15h9.5A2.25 2.25 0 0015
            12.75v-9.5A2.25 2.25 0 0012.75 1h-9.5z"></path></g>
        </svg>
      </div>
    </div>
    <div class="switchers-container"></div>
    <div class="empty-box"></div>
  </div>

Бажаємо успіху!