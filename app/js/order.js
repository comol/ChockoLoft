
const validateFields = (form, fieldsArray) => {

    fieldsArray.forEach((field) => {
        field.removeClass('input-error');

        if (typeof field.val() === 'string') {
            if (field.val().trim() === '') {
                field.addClass('input-error')
            }
        }
        else if (typeof field.val() === 'undefined')
        {
            field.addClass('input-error')
        }
    });

    const errorFields = form.find('.input-error');

    return errorFields.length === 0;
}


$('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const popup = $('#popup');
    const content = popup.find('.popup__text');
    popup.removeClass('error-popup');

    const isValid = validateFields(form, [name, phone, comment, to]);

    if (isValid) {
        const request = $.ajax({
            url:'https://webdev-api.loftschool.com/sendmail',
            method: 'post',
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val().trim(),
            },
            error: data => {}
        });

        request.done(data => {
            content.text(data.message);
        });

        request.fail(data => {
            const message = data.responseJSON.message;
            content.text(message);
            popup.find('.popup__text').addClass('error-popup')
        });

        request.always(() => {
            $.fancybox.open({
                src: '#popup',
                type: 'inline',
            });
        })
    }
});

$('.form__input').change(e => {
    $this = $(e.currentTarget);
    $this.removeClass('input-error');
});


$('.js-btn-submit').click(e => {
    e.preventDefault();

    $.fancybox.close();
});
