  /* рандом */
  var Beer = ["Портер (Porter)", "Стаут ​​(Stout)", "Коричневый (Brown Ale)", "Пейл (Pale Ale)", "Горький (Bitter)", 
        "Пшеничный (Weizen, Weiss)", "Белый (Weisse)", 
        "Мягкий (Mild)", "Ячменное вино (Barley Wine)", "Светлый лагер (Light lager)", 
        "Пилзнер (Pilsner)", "Европейский янтарный лагер", "Ледовое пиво (Ice beer)", 
        "Темный лагер (Dark lager)", "Драфт (Draft / Draught)", "Бок (Bock)", "Копченый Лагер (Rauch)", 
        "Ламбик (Lambic)", "«Старое пиво» (Альтбир)", "Кёльши (Kolsch)"];
  var output = Beer[Math.floor(Math.random() * 20)];
  
  document.getElementById('button').onclick = function() {
    let field1 = document.getElementById('field');
    let out = '';
        out += `<p>${output}</p>`;
        field1.innerHTML = out;
}
