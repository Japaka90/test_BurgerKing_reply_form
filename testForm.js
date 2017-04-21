<form accept-charset="UTF-8" action="/helpdesk/tickets/166/conversations/forward" class="form-unsaved-changes-trigger" data-cnt-id="cnt-fwd" data-destroy-editor="true" data-domhelper-name="cnt-fwd" data-fetch-latest="true" data-form="" data-fulltext="true" data-panel="cnt-fwd" data-show-pseudo-reply="true" data-submitting="false" enctype="multipart/form-data" id="HelpdeskFwd_cnt-fwd" method="post" rel="forward_form" novalidate="novalidate"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="1n7GOmIsDOwMcETDVtMa5XZFEn8KgKxxXrxlvVCPb4k="></div>
 <div class="form_title custom-selectdrop" id="fwd_title">
 <b>From:</b>

<div class="select2-container select2 responder_field ticketSelect2Container" id="s2id_reply_email_id"><a href="javascript:void(0)" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-2">support@burgerking.freshdesk.com</span><abbr class="select2-search-choice-close"></abbr>   <div class="select2-arrow" role="presentation"><b role="presentation"></b></div></a><label for="s2id_autogen2" class="select2-offscreen"></label><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-2" id="s2id_autogen2"><div class="select2-drop select2-display-none ticketSelect2 select2-with-searchbox">   <div class="select2-search">       <label for="s2id_autogen2_search" class="select2-offscreen"></label>       <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-2" id="s2id_autogen2_search">   </div>   <ul class="select2-results" role="listbox" id="select2-results-2">   </ul></div></div><select id="reply_email_id" name="reply_email[id]" class="select2  responder_field  select2-offscreen" data-container-css-class="ticketSelect2Container" data-dropdown-css-class="ticketSelect2" tabindex="-1" title="">
            <option value="support@burgerking.freshdesk.com" data-email-config-id="" selected="selected">support@burgerking.freshdesk.com</option>
      </select>
 </div>

<div class="list_agents_replying hide"></div>
       
<ul class="ui-form dont-validate botm-space">
<!-- <li class="inline-field field" >
      # <label class="mailaddr-label from" for="helpdesk_note_reply_email">Отправитель:</label>
  </li> -->
  <li class="inline-field field cc_fields forward">
     <label class="caption mailaddr-label" for="helpdesk_note_forward_email">Получатель: </label>
      
      <div class="request_form_options">
        <a href="#" rel="toggle_email_container" id="fwd_add_cc_btn_cnt-fwd" data-container="fwd_cc-form-container-cnt-fwd" data-toggle-button="fwd_add_cc_btn_cnt-fwd" data-toggle-checkbox="fwd_include_cc_cnt-fwd">
          Копия
        </a>
        <a href="#" rel="toggle_email_container" id="fwd_add_bcc_btn-cnt-fwd" class=" " data-container="fwd_bcc-form-container-cnt-fwd" data-toggle-button="fwd_add_bcc_btn-cnt-fwd" data-toggle-checkbox="fwd_include_bcc_cnt-fwd">
          Скрытая копия
        </a>
      </div>

      <div class="email_container forward_email">
        <ul class="multi_value_field"><li choice_id="alesya.kholodova@swedbyte.se" class="choice">alesya.kholodova@swedbyte.se<a class="close-link"></a><input type="hidden" value="alesya.kholodova@swedbyte.se" name="helpdesk_note[to_emails][]"></li><li choice_id="alesya.kholodova@swedbyte.se" class="choice">alesya2.kholodova@swedbyte.se<a class="close-link"></a><input type="hidden" value="alesya2.kholodova@swedbyte.se" name="helpdesk_note[to_emails][]"></li><li choice_id="alesya.kholodova@swedbyte.se" class="choice">alesya3.kholodova@swedbyte.se<a class="close-link"></a><input type="hidden" value="alesya3.kholodova@swedbyte.se" name="helpdesk_note[to_emails][]"></li><li class="search_field_item"><input type="text" autocomplete="off" tabindex="" placeholder=""></li></ul><div class="autocomplete" style="position: absolute; display: none;"><ul></ul></div>
        <script type="text/javascript">
          new Autocompleter.MultiValue("to_emails_cnt-fwd", cachedLookup, $A(), {frequency: 0.1, acceptNewValues: true,allowSpaces: true, separatorRegEx:/;|,/});
        </script>
      </div>

      <input type="checkbox" class="hide" id="fwd_include_cc_cnt-fwd" name="include_cc">              
      <input type="checkbox" class="hide" id="fwd_include_bcc_cnt-fwd" name="include_bcc">

  </li>
  <li class="inline-field field hide cc_fields" id="fwd_cc-form-container-cnt-fwd">
    <label class="mailaddr-label" for="cc_emails_cnt-fwd">Копия:</label>
    <a href="#" class="clear_emails" rel="toggle_email_container" data-container="fwd_cc-form-container-cnt-fwd" data-toggle-button="fwd_add_cc_btn_cnt-fwd" data-clear="true">Очистить</a>
        <div class="email_container">
          <ul class="multi_value_field"><li class="search_field_item"><input type="text" autocomplete="off" tabindex="" placeholder=""></li></ul><div class="autocomplete" style="position: absolute; display: none;"><ul></ul></div>
          <script type="text/javascript">
             new Autocompleter.MultiValue("fwd_cc_emails_cnt-fwd", cachedLookup, $A(), {frequency: 0.1, allowSpaces: true, acceptNewValues: true,separatorRegEx:/;|,/});
          </script>
        </div>
  </li>
  <li class="inline-field field hide  cc_fields" id="fwd_bcc-form-container-cnt-fwd">
    <label class="mailaddr-label" for="cc_emails_cnt-fwd">Скрытая копия:</label>
    <a href="#" class="clear_emails" rel="toggle_email_container" data-container="fwd_bcc-form-container-cnt-fwd" data-toggle-button="fwd_add_bcc_btn-cnt-fwd" data-clear="true">Очистить</a>
        <div class="email_container">
          <ul class="multi_value_field"><li class="search_field_item"><input type="text" autocomplete="off" tabindex="" placeholder=""></li></ul><div class="autocomplete" style="position: absolute; display: none;"><ul></ul></div>
          <script type="text/javascript">
            new Autocompleter.MultiValue("fwd_bcc_emails_cnt-fwd", cachedLookup, $A(), {frequency: 0.1, acceptNewValues: true, allowSpaces: true,  separatorRegEx:/;|,/});
          </script>
        </div>
  </li>
  <li class="inline-field field clearField message">
    <div class="redactor_insert_btns">
<ul class="redactor_toolbar">
	<li>
		<a href="#" class="ficon-book-dark tooltip redactor_separator_ficon" data-editor-id="cnt-fwd-body" rel="ticket_solutions" data-original-title="Вставить Решение"></a>
	</li>
	<li class="redactor_separator"></li>
	<li>
		<a href="#" class="ficon-canned-response tooltip redactor_separator_ficon" data-editor-id="cnt-fwd-body" rel="ticket_canned_response" data-original-title="Вставить Шаблонный ответ"></a>
		<a href="javascript:void(null);" title="Bold (⌘B)" class="redactor_btn_bold" tabindex="-1"></a>
	</li>
</ul>
</div>
    
            <textarea class="body_html" cols="40" data-quoted-textarea="#cnt-fwd-quoted" data-wrap-font-family="true" id="cnt-fwd-body" name="helpdesk_note[note_body_attributes][body_html]" rows="20">&lt;p/&gt;&lt;div&gt;&lt;p&gt;Please take a look at ticket &lt;a href="https://burgerking.freshdesk.com/helpdesk/tickets/166"&gt;#166&lt;/a&gt; raised by Тестовая заявка2 (a@er.ru).&lt;/p&gt;&lt;br/&gt;&lt;div dir="ltr"&gt;
&lt;p&gt;&lt;br&gt;&lt;/p&gt;
&lt;/div&gt;&lt;/div&gt; </textarea>
            <textarea cols="40" id="cnt-fwd-body-fulltext" name="helpdesk_note[note_body_attributes][full_text_html]" rows="20" style="display:none;"></textarea>
              <template name="quoted_text_html" id="cnt-fwd-quoted" class="hide">
                &lt;div class="freshdesk_quote"&gt;
        &lt;blockquote class="freshdesk_quote"&gt;Вкл. Чт, 20 Апр at  2:16 PM
          &lt;span class="separator" /&gt;,  Тестовая заявка2 &amp;lt;a@er.ru&amp;gt;  написал(-ла):
          &lt;div&gt;Test 12346789&lt;/div&gt;
        &lt;/blockquote&gt;
       &lt;/div&gt;
              </template>
  </li>
  <li class="inline-field field continous file_size_alert hide" id="file_size_alert_cnt-fwd">
    <span class="alert-text">Ответ не перенаправлен!</span>
    Размер вложения превышает 15 МБ. Перед тем как продолжить внесите изменения.
  </li>
  <li class="attachment-options-reply" id="attachment-options-reply">
              <div class="single_file show">
<div class="attach-wrapper new-attach" id="attachment-type" data-single-file="true">
  <div class="attachmentTrigger">   
    <div class="attachments-list-form" id="send-fwd-email-container">
      
      <div class="attachment_contents">
        <div id="send-fwd-email-attachments" class="attachments-wrap shared_attachment_list">



        </div>
      </div>
    </div>  
      <div class="hidden_upload">
        <div class="add_attachment"><span>+</span> прикрепить файл 
</div>
        <input type="file" name="emptyfile" id="send-fwd-email_file" data-attach-id="send-fwd-email" namewhenfilled="helpdesk_note[attachments][][resource]" filecontainer="send-fwd-email-container" filelist="send-fwd-email-attachments" sendfocusto="send-fwd-email-body" max_size="15" max_attachment="" class="original_input">
      </div> <span class="attachment-help-info">( Итого Размер файла должен быть меньше 15 МБ )</span>
  </div>
</div>
<script type="text/javascript">
  // Fix for Firefox/IE - To override :hover style persistance after click on input[type=file] element
  // global mutifile key
  
  jQuery('div.attach-wrapper a[data-toggle="dropdown"]').bind('click', function(){
    jQuery(this).parents('div.attach-wrapper').find('a.attach-link-wrap').first().css({
          'background-color': 'inherit',
          'background-image': 'inherit',
          'color': 'inherit',
          'box-shadow': 'inherit'
      });
  });
  jQuery('li.portal-attach a.attach-link-wrap')
    .bind('mouseover', function(){
      jQuery(this).removeAttr('style');
    })
    .bind('mousemove', function(event){
      // Fix to move "Browse" button along with mouse pointer - fix for IE.
      p=jQuery(this).find('div').first();
      newLeft = Math.min(175, Math.max(event.clientX - p.offset().left + p.position().left - 5, 0));
      window.title = newLeft;
      p.css({left: newLeft, top: 0});
    })
</script>
</div>

  </li>


    <!-- forward will be always private -->
    <input id="helpdesk_note_private" name="helpdesk_note[private]" type="hidden" value="true">
    <input id="helpdesk_note_source" name="helpdesk_note[source]" type="hidden" value="8">
    <input id="fwd_from_email_cnt-fwd" name="helpdesk_note[from_email]" type="hidden" value="support@burgerking.freshdesk.com">
    <input id="helpdesk_note_email_config_id" name="helpdesk_note[email_config_id]" type="hidden">
    


</ul><input type="hidden" name="helpdesk_note[to_emails]" class="emptyValueField"><input type="hidden" name="helpdesk_note[cc_emails]" class="emptyValueField"><input type="hidden" name="helpdesk_note[bcc_emails]" class="emptyValueField">

<div class="btn-toolbar no-width">

  <span>
    <a class="btn cancel_btn" data-show-pseudo-reply="true" data-cnt-id="cnt-fwd">
      Отмена
    </a>
  </span>

  <span class="btn-group">
    <button class="btn btn-primary submit_btn">Переслать</button>
  </span>

</div>
<div class="clearfix overflowh"></div>

<script type="text/javascript">
    
    jQuery(".cancel_btn").click(function() {
      jQuery("#HelpdeskFwd_cnt-fwd").find('.cc-error-message').remove();
    })

    jQuery('#HelpdeskFwd_cnt-fwd')      
      .bind("submit", function(ev){
      var tkt_recipient_arr = [];
      if( false) {
        tkt_recipient_arr = ["alesya.kholodova@swedbyte.se","alesya2.kholodova@swedbyte.se","alesya3.kholodova@swedbyte.se","japaka@yandex.ru","a@er.ru"];
        var limit       = 10;
        var msg         = "You can include a maximum of 10 email recipients per ticket during your trial period";
        App.Tickets.LimitEmails.titleMsg = "You can include a maximum of 10 email recipients per ticket during your trial period";
        App.Tickets.LimitEmails.okBtnMsg = "Ок";
        if(!App.Tickets.LimitEmails.limitForwardEmails(jQuery('#HelpdeskFwd_cnt-fwd'), '.cc_fields:visible:last' ,tkt_recipient_arr, limit, msg)) {
          return false;
        }
      }

      jQuery("#HelpdeskFwd_cnt-fwd").find('.cc-error-message').remove();

      })
      .validate();

      jQuery('html, body').animate({
        scrollTop: jQuery("#cnt-fwd").offset().top-110
    }, 100);
</script>


</form>
