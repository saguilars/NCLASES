/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */


(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('/config/tour', ['Config'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('Config'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.Config);
    global.configTour = mod.exports;
  }
})(this, function (_Config) {
  'use strict';  
  (0, _Config.set)('tour', {
    steps: [{
      element: "#AyudaBarraSuperior",
      intro: "Barra Superior <p class='content'>En esta secci&oacute;n te mostramos los accesos basicos para eleccion de estudiante, maximizar reducir menu, notificaciones y mensajes</p>"
    }, {
      element: "#AyudaMenu",
      position: "right",
      intro: "Menu <p class='content'>El menu contiene todas las funciones del sistema que dependen del rol de permisos que poseas al entrar, solo debes seleccionar cada item para acceder y disfrutar de las novedades que te ofrecemos.</p>"
    }, {
      element: "#AyudaBody",
      intro: "<h4 style='font-size: 28px; font-weight: bold; color: #fd7e14;'>Cuerpo<h4><p class='content' style='font-weight: bold; color: #fd7e14;'>Contiene el contenido del menu donde puedes observar el funcionamiento del sistema, acceder a estadisticas, notas y tareas de tus hijos, entre otras funciones elegidas desde el menu principal.</p>"
    }],
    skipLabel: "<i class='wb-close'></i>",
    doneLabel: "<i class='wb-close'></i>",
    nextLabel: "Next <i class='wb-chevron-right-mini'></i>",
    prevLabel: "<i class='wb-chevron-left-mini'></i>Prev",
    showBullets: false
  });
});

