/**
 * Personium
 * Copyright 2018 FUJITSU LIMITED
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * The followings should be shared among applications.
 */

$(function () {
    /*-------------------------main page(From here)-------------------------*/
    var timer = false;
    $(window).on('resize', function () {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            var container_w = $('.app-list').outerWidth(true);
            var content_w = $('div.app-list div.app-icon:eq(0)').outerWidth(true);
            var padding = (container_w % content_w) / 2;
            $('.app-list').css('padding-left', padding);
        }, 50);
    }).resize();

    //もう一度ボタンが押された場合
    $('#logout').on('click', function () {
        $('#exampleModal').modal('show');        
    });

    /*-------------------------main page(To here)-------------------------*/

    /*-------------------------profile page(From here)-------------------------*/
    /*Edit button clicked action*/
    $('.edit-btn').on('click', function () {

        /*User Name Edit Button Clicked*/
        if ($(this).attr('id') == 'user-name-edit-btn') {
            if (!($(this).hasClass('editing'))) {
                if (($(this).hasClass('edited'))) {
                    $(this).removeClass('edited');
                }
                $(this).addClass('editing');
                $('#user-name-form').focus();
            } else if (($(this).hasClass('editing')) && !($(this).hasClass('edited'))) {
                $(this).removeClass('editing');
                $(this).addClass('edited');
                var edit_ic = $(this).find('.fa-edit');
                edit_ic.removeClass('fa-edit');
                edit_ic.addClass('fa-check');
            }

            /*Description Edit Button Clicked*/
        } else if ($(this).attr('id') == 'description-edit-btn') {
            if (!($(this).hasClass('editing')) && !($(this).hasClass('edited'))) {
                $(this).addClass('editing');
                $('#description-form-area').focus();
            } else if (($(this).hasClass('editing')) && !($(this).hasClass('edited'))) {
                $(this).removeClass('editing');
                $(this).addClass('edited');
                var edit_ic = $(this).find('.fa-edit');
                edit_ic.removeClass('fa-edit');
                edit_ic.addClass('fa-check');
            }
        }
    })
    /*-------------------------profile page(To here)-------------------------*/

    /*-------------------------account page(From here)-------------------------*/

    /*-------------------------account page(To here)-------------------------*/
})