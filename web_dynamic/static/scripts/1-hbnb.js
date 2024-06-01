$(document).ready(() => {
    console.log("partlayis")
    const amenities = {}

    $('input:checkbox').change(function() {
        if ($(this).prop('checked')) {
            amenities[$(this).attr('data-id')] = $(this).attr('data-name')
        } else if (!$(this).prop('checked')) {
            delete amenities[$(this).attr('data-id')]
        }
        console.log(amenities)
        if (Object.keys(amenities).length === 0) {
            $('.amenities h4').html('&nbsp')
        } else {
            let str = Object.values(amenities).join(', ')
            contentWidth = $('.amenities h4').width() / 7
            if (str.length > contentWidth) {
                let newStr = str.slice(0, contentWidth) + "..."
                $('.amenities h4').text(newStr)
            } else {
                $('.amenities h4').text(str)
            }
        }
    })
})