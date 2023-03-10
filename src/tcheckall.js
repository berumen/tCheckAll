/**
 * https://github.com/berumen/tCheckAll
 * Created by Alfredo Berumen Saldivar.
 * User: berumen
 * Date: 2023-03-10
 * @berumen
 * http://berumen.xyz
 * Licensed under the MIT license
 */
(function ($) {
  $.fn.tCheckAll = function (options) {
    let settings = $.extend(
      {
        checkTxt: 'Check All',
        unckeckTxt: 'Unckeck All',
        cheked: false,
      },
      options
    );
    settings.that = $(this);
    $.fn.tCheckAll.init(settings);
  };

  $.fn.tCheckAll.init = function (settings) {
    return settings.that.each(function (i, event) {
      const name = $('#' + $(event).attr('id'));
      event.init = function () {
        event.tSetValue($(event));
        event.tSetCheck($(event));
        name.on('click', function (e) {
          e.preventDefault();
          settings.cheked = !settings.cheked;
          event.tSetCheck($(event));
          let ttrigger = settings.cheked ? 'beforeCheck' : 'beforeUnCheck';
          event.tCheck($(event), ttrigger, settings);
        });
      };

      event.tSetCheck = function (control) {
        control
          .closest('fieldset')
          .find(':checkbox')
          .each(function () {
            settings.cheked
              ? $(this).prop('checked', true)
              : $(this).prop('checked', false);
          });
      };

      event.tSetValue = function (control) {
        control.prop('value') === undefined
          ? settings.cheked
            ? control.text(settings.unckeckTxt)
            : control.text(settings.checkTxt)
          : settings.cheked
          ? control.prop('value', settings.unckeckTxt)
          : control.prop('value', settings.checkTxt);
      };

      event.tCheck = function (control, ttrigger) {
        event.tSetValue(control);
        control.trigger(ttrigger);
      };

      event.init();
    });
  };
})(jQuery);
