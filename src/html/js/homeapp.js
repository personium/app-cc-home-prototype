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

 /* Application & Service Padding Function*/
$(function () {
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
});