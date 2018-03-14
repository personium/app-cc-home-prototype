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

/* drawer menu */
$(function () {
    $('#drawer_btn').on('click', function () {
      $('#menu-background').show();
      $('#drawer_menu').animate({
        width: 'show'
      }, 300);
      return false;
    });
  
    $('#menu-background').click(function () {
      $('#drawer_menu').animate({
        width: 'hide'
      }, 300, function () {
        $('#menu-background').hide();
        return false;
      });
    });
  
    $('#drawer_menu').click(function (event) {
      event.stopPropagation();
    });
  });